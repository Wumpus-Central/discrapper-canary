let r;
n.d(t, { Z: () => E });
var i = n(46973),
    a = n(147913),
    o = n(714424),
    s = n(763296),
    l = n(314897),
    c = n(736869),
    u = n(333291),
    d = n(435064),
    f = n(519159),
    _ = n(894694),
    p = n(39604);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class m extends a.Z {
    handleConfigUpdate() {
        let e = d.Z.getClipDecisionEngineConfig();
        this.engine.reconfigure(e);
    }
    handleClipsSignalCreated(e, t) {
        this.isSignalEnabled(e.type) && this.process(e, t);
    }
    handleSpeaking(e) {
        if (!d.Z.getSettings().clipsEnabled || e.context !== i.Yn.DEFAULT) return;
        let t = d.Z.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === l.default.getId() || t) &&
            this.process({
                type: _.Bs.SPEAKING,
                speakingFlags: e.speakingFlags,
                userId: e.userId,
            });
    }
    handleSoundboardPlayStart(e) {
        var t, n, r;
        let i = s.Z.getSoundById(e.soundId);
        if (null == i) return;
        let a = null == (t = o.Z.getGuildEmojis(i.guildId)) ? void 0 : t[null != (n = i.emojiId) ? n : ""];
        this.process({
            type: _.Bs.SOUNDBOARD,
            playing: !0,
            soundboardId: e.soundId,
            emojiId: null == a ? void 0 : a.id,
            emojiAnimated: null == a ? void 0 : a.animated,
            emojiName: null != (r = null == a ? void 0 : a.name) ? r : i.emojiName,
            name: i.name,
            userId: e.userId,
        });
    }
    handleSoundboardPlayEnd(e) {
        var t, n;
        let r = s.Z.getSoundById(e.soundId);
        if (null == r) return;
        let i = null == (t = o.Z.getGuildEmojis(r.guildId)) ? void 0 : t[null != (n = r.emojiId) ? n : ""];
        this.process({
            type: _.Bs.SOUNDBOARD,
            playing: !1,
            soundboardId: e.soundId,
            emojiId: null == i ? void 0 : i.id,
            emojiAnimated: null == i ? void 0 : i.animated,
            emojiName: null == i ? void 0 : i.name,
            name: r.name,
            userId: e.userId,
        });
    }
    isSignalEnabled(e) {
        switch (e) {
            case _.Bs.MANUAL:
                return d.Z.getSettings().clipSignals.enableManualSignals;
            case _.Bs.DISTRIBUTED:
                return d.Z.getSettings().clipSignals.enableDistributedSignals;
            case _.Bs.PHRASE:
                return d.Z.getSettings().clipSignals.enablePhraseSignals;
            case _.Bs.YELLING:
                return d.Z.getSettings().clipSignals.enableYellingSignals;
            case _.Bs.GAME_EVENT:
                return d.Z.getSettings().clipSignals.enableGameSignals;
            default:
                return !0;
        }
    }
    async process(e, t) {
        try {
            return await this.engine.process(e, t);
        } catch (e) {
            return null;
        }
    }
    read() {
        return this.engine.read();
    }
    clear() {
        this.timeline.clear();
    }
    async saveClipCallback(e, t, n, r) {
        await (0, p.C1)(e, t, n, r);
    }
    getConfig() {
        return this.engine.getConfig();
    }
    getInternalState() {
        return this.engine.getInternalState();
    }
    constructor(e) {
        super(),
            h(this, "engine", void 0),
            h(this, "timeline", void 0),
            h(this, "actions", {
                CLIPS_SIGNAL_CREATED: (e) => this.handleClipsSignalCreated(e.signal, e.timestamp),
                CLIPS_ENGINE_CONFIG_UPDATE: () => this.handleConfigUpdate(),
                SPEAKING: (e) => this.handleSpeaking(e),
                GUILD_SOUNDBOARD_SOUND_PLAY_START: (e) => this.handleSoundboardPlayStart(e),
                GUILD_SOUNDBOARD_SOUND_PLAY_END: (e) => this.handleSoundboardPlayEnd(e),
                VOICE_CHANNEL_SELECT: () => this.clear(),
            }),
            (this.timeline = new f.m(e.timelineLengthSeconds)),
            (this.engine = new c.t(e, this.timeline, this.saveClipCallback.bind(this)));
    }
}
try {
    r = d.Z.getClipDecisionEngineConfig();
} catch (e) {
    r = (0, u.P_)();
}
let g = new m(r);
g.initialize();
let E = g;
