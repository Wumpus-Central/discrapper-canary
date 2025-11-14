n.d(t, { Z: () => g }), n(388685);
var r = n(46973),
    i = n(147913),
    a = n(714424),
    o = n(763296),
    s = n(314897),
    l = n(435064),
    c = n(519159),
    u = n(894694),
    d = n(341569),
    f = n(39604);
function _(e, t, n) {
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
let p = 10000,
    h = 10000;
class m extends i.Z {
    handleClipsSignalCreated(e, t) {
        this.isSignalEnabled(e.type) && this.process(e, t);
    }
    handleSpeaking(e) {
        if (!(0, d.LI)() || e.context !== r.Yn.DEFAULT) return;
        let t = l.Z.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === s.default.getId() || t) &&
            this.process({
                type: u.Bs.SPEAKING,
                speakingFlags: e.speakingFlags,
                userId: e.userId,
            });
    }
    handleSoundboardPlayStart(e) {
        var t, n, r;
        if (!(0, d.LI)()) return;
        let i = o.Z.getSoundById(e.soundId);
        if (null == i) return;
        let s = null == (t = a.Z.getGuildEmojis(i.guildId)) ? void 0 : t[null != (n = i.emojiId) ? n : ""];
        this.process({
            type: u.Bs.SOUNDBOARD,
            playing: !0,
            soundboardId: e.soundId,
            emojiId: null == s ? void 0 : s.id,
            emojiAnimated: null == s ? void 0 : s.animated,
            emojiName: null != (r = null == s ? void 0 : s.name) ? r : i.emojiName,
            name: i.name,
            userId: e.userId,
        });
    }
    handleSoundboardPlayEnd(e) {
        var t, n;
        if (!(0, d.LI)()) return;
        let r = o.Z.getSoundById(e.soundId);
        if (null == r) return;
        let i = null == (t = a.Z.getGuildEmojis(r.guildId)) ? void 0 : t[null != (n = r.emojiId) ? n : ""];
        this.process({
            type: u.Bs.SOUNDBOARD,
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
            case u.Bs.DISTRIBUTED:
                return l.Z.getSettings().clipSignals.enableDistributedSignals;
            case u.Bs.PHRASE:
                return l.Z.getSettings().clipSignals.enablePhraseSignals;
            case u.Bs.GAME_EVENT:
                return l.Z.getSettings().clipSignals.enableGameSignals;
            default:
                return !0;
        }
    }
    process(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        switch (
            (this.timeline.add({
                signal: e,
                timestamp: t,
            }),
            e.type)
        ) {
            case u.Bs.MANUAL:
            case u.Bs.DISTRIBUTED:
                this.scheduleClip(e);
                break;
            case u.Bs.GAME_EVENT:
                1 === e.importance && this.scheduleClip(e, p);
                break;
            case u.Bs.PHRASE:
                var n;
                if (
                    (null == (n = this.scheduledClipSignal) ? void 0 : n.type) === u.Bs.GAME_EVENT ||
                    performance.now() - this.lastClipTimestamp < h
                )
                    return;
                this.scheduleClip(e);
        }
    }
    read() {
        return {
            timeline: this.timeline.read(),
            scheduledClipSignal: this.scheduledClipSignal,
            phraseCooldown: Math.max(0, h - (performance.now() - this.lastClipTimestamp)),
        };
    }
    clear() {
        this.unscheduleClip(), (this.lastClipTimestamp = 0), this.timeline.clear();
    }
    unscheduleClip() {
        null != this.scheduledClipTimeout &&
            (clearTimeout(this.scheduledClipTimeout), (this.scheduledClipTimeout = null)),
            (this.scheduledClipSignal = null);
    }
    scheduleClip(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.unscheduleClip(),
            (this.scheduledClipSignal = e),
            (this.lastClipTimestamp = performance.now() + t),
            (this.scheduledClipTimeout = setTimeout(() => {
                (this.scheduledClipSignal = null),
                    (0, f.C1)(void 0, e.type === u.Bs.MANUAL ? "manual" : "auto", [...this.timeline.read()], {
                        signal: e,
                        timestamp: Date.now(),
                        emotionHistory: [],
                    });
            }, t));
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(l.Z.getSettings().clipsLength);
    }
    constructor() {
        super(),
            _(this, "timeline", void 0),
            _(this, "scheduledClipTimeout", null),
            _(this, "scheduledClipSignal", null),
            _(this, "lastClipTimestamp", 0),
            _(this, "actions", {
                CLIPS_SIGNAL_CREATED: (e) => this.handleClipsSignalCreated(e.signal, e.timestamp),
                SPEAKING: (e) => this.handleSpeaking(e),
                GUILD_SOUNDBOARD_SOUND_PLAY_START: (e) => this.handleSoundboardPlayStart(e),
                GUILD_SOUNDBOARD_SOUND_PLAY_END: (e) => this.handleSoundboardPlayEnd(e),
                VOICE_CHANNEL_SELECT: () => this.clear(),
                CLIPS_SETTINGS_UPDATE: () => this.handleSettingsUpdate(),
            }),
            (this.timeline = new c.m(l.Z.getSettings().clipsLength));
    }
}
let g = new m();
