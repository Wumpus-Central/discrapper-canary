"use strict";
n.d(t, { A: () => A });
var r = n(205693),
    i = n(439372),
    s = n(608960),
    a = n(209932),
    o = n(961350),
    l = n(274372),
    u = n(661978),
    c = n(372684),
    d = n(572164),
    _ = n(399925);
let f = 1e4,
    p = 1e4,
    h = 15e3,
    m = 0.5,
    E = 0.8;
class g extends i.A {
    timeline;
    scheduledClipTimeout = null;
    scheduledClipSignal = null;
    lastClipTimestamp = 0;
    constructor() {
        super(), (this.timeline = new u.t(l.A.getSettings().clipsLength));
    }
    actions = {
        CLIPS_SIGNAL_CREATED: (e) => this.handleClipsSignalCreated(e.signal, e.timestamp),
        CLIPS_ML_DETECTION: (e) => this.handleMlDetection(e.detections),
        SPEAKING: (e) => this.handleSpeaking(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_START: (e) => this.handleSoundboardPlayStart(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_END: (e) => this.handleSoundboardPlayEnd(e),
        VOICE_CHANNEL_SELECT: () => this.clear(),
        CLIPS_SETTINGS_UPDATE: () => this.handleSettingsUpdate(),
    };
    handleClipsSignalCreated(e, t) {
        this.isSignalEnabled(e.type) && this.process(e, t);
    }
    handleMlDetection(e) {
        for (let t of e)
            for (let e of t.data_points)
                "laughter" === e.label
                    ? e.confidence > m &&
                      this.process({ type: c.Gy.LAUGHTER, label: e.label, confidence: e.confidence }, e.timestamp_ms)
                    : "shouting" === e.label &&
                      e.confidence > E &&
                      this.process({ type: c.Gy.LAUGHTER, label: e.label, confidence: e.confidence }, e.timestamp_ms);
    }
    handleSpeaking(e) {
        if (!(0, d.TD)() || e.context !== r.x.DEFAULT) return;
        let t = l.A.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === o.default.getId() || t) &&
            this.process({ type: c.Gy.SPEAKING, speakingFlags: e.speakingFlags, userId: e.userId });
    }
    handleSoundboardPlayStart(e) {
        if (!(0, d.TD)()) return;
        let t = a.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = s.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: c.Gy.SOUNDBOARD,
            playing: !0,
            soundboardId: e.soundId,
            emojiId: n?.id,
            emojiAnimated: n?.animated,
            emojiName: n?.name ?? t.emojiName,
            name: t.name,
            userId: e.userId,
        });
    }
    handleSoundboardPlayEnd(e) {
        if (!(0, d.TD)()) return;
        let t = a.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = s.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: c.Gy.SOUNDBOARD,
            playing: !1,
            soundboardId: e.soundId,
            emojiId: n?.id,
            emojiAnimated: n?.animated,
            emojiName: n?.name,
            name: t.name,
            userId: e.userId,
        });
    }
    isSignalEnabled(e) {
        switch (e) {
            case c.Gy.DISTRIBUTED:
                return l.A.getSettings().clipSignals.enableDistributedSignals;
            case c.Gy.PHRASE:
                return l.A.getSettings().clipSignals.enablePhraseSignals;
            case c.Gy.GAME_EVENT:
                return l.A.getSettings().clipSignals.enableGameSignals;
            default:
                return !0;
        }
    }
    process(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        switch ((this.timeline.add({ signal: e, timestamp: t }), e.type)) {
            case c.Gy.MANUAL:
            case c.Gy.DISTRIBUTED:
                this.scheduleClip(e);
                break;
            case c.Gy.GAME_EVENT:
                1 === e.importance && this.scheduleClip(e, f);
                break;
            case c.Gy.PHRASE:
                if (
                    this.scheduledClipSignal?.type === c.Gy.GAME_EVENT ||
                    performance.now() - this.lastClipTimestamp < p
                )
                    return;
                this.scheduleClip(e);
                break;
            case c.Gy.LAUGHTER:
                if (
                    this.scheduledClipSignal?.type === c.Gy.GAME_EVENT ||
                    this.scheduledClipSignal?.type === c.Gy.PHRASE ||
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
            phraseCooldown: Math.max(0, p - (performance.now() - this.lastClipTimestamp)),
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
                    (0, _.yd)(void 0, e.type === c.Gy.MANUAL ? "manual" : "auto", [...this.timeline.read()], {
                        signal: e,
                        timestamp: Date.now(),
                        emotionHistory: [],
                    });
            }, t));
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(l.A.getSettings().clipsLength);
    }
}
let A = new g();
