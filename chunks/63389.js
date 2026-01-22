n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(205693),
    i = n(439372),
    a = n(608960),
    s = n(209932),
    o = n(961350),
    l = n(274372),
    c = n(661978),
    u = n(372684),
    d = n(572164),
    f = n(399925);

function p(e, t, n) {
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
let _ = 1e4,
    h = 1e4;
class m extends i.A {
    handleClipsSignalCreated(e, t) {
        this.isSignalEnabled(e.type) && this.process(e, t);
    }
    handleSpeaking(e) {
        if (!(0, d.TD)() || e.context !== r.x.DEFAULT) return;
        let t = l.A.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === o.default.getId() || t) &&
            this.process({
                type: u.Gy.SPEAKING,
                speakingFlags: e.speakingFlags,
                userId: e.userId,
            });
    }
    handleSoundboardPlayStart(e) {
        var t, n, r;
        if (!(0, d.TD)()) return;
        let i = s.A.getSoundById(e.soundId);
        if (null == i) return;
        let o = null == (r = a.A.getGuildEmojis(i.guildId)) ? void 0 : r[null != (t = i.emojiId) ? t : ""];
        this.process({
            type: u.Gy.SOUNDBOARD,
            playing: !0,
            soundboardId: e.soundId,
            emojiId: null == o ? void 0 : o.id,
            emojiAnimated: null == o ? void 0 : o.animated,
            emojiName: null != (n = null == o ? void 0 : o.name) ? n : i.emojiName,
            name: i.name,
            userId: e.userId,
        });
    }
    handleSoundboardPlayEnd(e) {
        var t, n;
        if (!(0, d.TD)()) return;
        let r = s.A.getSoundById(e.soundId);
        if (null == r) return;
        let i = null == (n = a.A.getGuildEmojis(r.guildId)) ? void 0 : n[null != (t = r.emojiId) ? t : ""];
        this.process({
            type: u.Gy.SOUNDBOARD,
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
            case u.Gy.DISTRIBUTED:
                return l.A.getSettings().clipSignals.enableDistributedSignals;
            case u.Gy.PHRASE:
                return l.A.getSettings().clipSignals.enablePhraseSignals;
            case u.Gy.GAME_EVENT:
                return l.A.getSettings().clipSignals.enableGameSignals;
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
            case u.Gy.MANUAL:
            case u.Gy.DISTRIBUTED:
                this.scheduleClip(e);
                break;
            case u.Gy.GAME_EVENT:
                1 === e.importance && this.scheduleClip(e, _);
                break;
            case u.Gy.PHRASE:
                var n;
                if (
                    (null == (n = this.scheduledClipSignal) ? void 0 : n.type) === u.Gy.GAME_EVENT ||
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
                    (0, f.yd)(void 0, e.type === u.Gy.MANUAL ? "manual" : "auto", [...this.timeline.read()], {
                        signal: e,
                        timestamp: Date.now(),
                        emotionHistory: [],
                    });
            }, t));
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(l.A.getSettings().clipsLength);
    }
    constructor() {
        super(),
            p(this, "timeline", void 0),
            p(this, "scheduledClipTimeout", null),
            p(this, "scheduledClipSignal", null),
            p(this, "lastClipTimestamp", 0),
            p(this, "actions", {
                CLIPS_SIGNAL_CREATED: (e) => this.handleClipsSignalCreated(e.signal, e.timestamp),
                SPEAKING: (e) => this.handleSpeaking(e),
                GUILD_SOUNDBOARD_SOUND_PLAY_START: (e) => this.handleSoundboardPlayStart(e),
                GUILD_SOUNDBOARD_SOUND_PLAY_END: (e) => this.handleSoundboardPlayEnd(e),
                VOICE_CHANNEL_SELECT: () => this.clear(),
                CLIPS_SETTINGS_UPDATE: () => this.handleSettingsUpdate(),
            }),
            (this.timeline = new c.t(l.A.getSettings().clipsLength));
    }
}
let g = new m();
