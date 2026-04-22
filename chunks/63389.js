"use strict";
n.d(t, { A: () => T }), n(321073);
var r = n(205693),
    i = n(451988),
    s = n(439372),
    a = n(608960),
    o = n(652896),
    l = n(209932),
    u = n(961350),
    c = n(274372),
    d = n(661978),
    _ = n(372684),
    f = n(572164),
    p = n(399925);
let h = 1e4,
    m = 1e4,
    E = 15e3,
    g = 0.035,
    A = 0.151;
class I extends s.A {
    timeline;
    scheduledClipTimeout = new i.Ep();
    scheduledClipSignal = null;
    lastClipTimestamp = 0;
    pendingCandidatePromotions = new Set();
    pendingCandidateDiscards = new Set();
    constructor() {
        super(), (this.timeline = new d.t(c.A.getSettings().clipsLength));
    }
    actions = {
        CLIPS_SIGNAL_CREATED: (e) => this.handleClipsSignalCreated(e.signal, e.timestamp),
        CLIPS_ML_DETECTION: (e) => this.handleMlDetection(e.detections),
        SPEAKING: (e) => this.handleSpeaking(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_START: (e) => this.handleSoundboardPlayStart(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_END: (e) => this.handleSoundboardPlayEnd(e),
        STREAM_STOP: (e) => this.handleStreamStop(e),
        CLIPS_SAVE_CLIP: (e) => this.handleLateCandidateSave(e),
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
                    ? e.confidence > g &&
                      this.process({ type: _.Gy.LAUGHTER, label: e.label, confidence: e.confidence }, e.timestamp_ms)
                    : "shouting" === e.label &&
                      e.confidence > A &&
                      this.process({ type: _.Gy.LAUGHTER, label: e.label, confidence: e.confidence }, e.timestamp_ms);
    }
    handleSpeaking(e) {
        if (!(0, f.TD)() || e.context !== r.x.DEFAULT) return;
        let t = c.A.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === u.default.getId() || t) &&
            this.process({ type: _.Gy.SPEAKING, speakingFlags: e.speakingFlags, userId: e.userId });
    }
    handleSoundboardPlayStart(e) {
        if (!(0, f.TD)()) return;
        let t = l.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = a.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: _.Gy.SOUNDBOARD,
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
        if (!(0, f.TD)()) return;
        let t = l.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = a.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: _.Gy.SOUNDBOARD,
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
            case _.Gy.DISTRIBUTED:
                return c.A.getSettings().clipSignals.enableDistributedSignals;
            case _.Gy.PHRASE:
                return c.A.getSettings().clipSignals.enablePhraseSignals;
            case _.Gy.GAME_EVENT:
                return c.A.getSettings().clipSignals.enableGameSignals;
            default:
                return !0;
        }
    }
    process(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        switch ((this.timeline.add({ signal: e, timestamp: t }), e.type)) {
            case _.Gy.MANUAL:
            case _.Gy.DISTRIBUTED:
                this.scheduleClip(e);
                break;
            case _.Gy.GAME_EVENT:
                1 === e.importance && this.scheduleClip(e, h);
                break;
            case _.Gy.PHRASE:
                if (
                    this.scheduledClipSignal?.type === _.Gy.GAME_EVENT ||
                    performance.now() - this.lastClipTimestamp < m
                )
                    return;
                this.scheduleClip(e);
                break;
            case _.Gy.LAUGHTER:
                if (
                    this.scheduledClipSignal?.type === _.Gy.GAME_EVENT ||
                    this.scheduledClipSignal?.type === _.Gy.PHRASE ||
                    performance.now() - this.lastClipTimestamp < E
                )
                    return;
                this.scheduleClip(e, 0, !0);
        }
    }
    read() {
        return {
            timeline: this.timeline.read(),
            scheduledClipSignal: this.scheduledClipSignal,
            phraseCooldown: Math.max(0, m - (performance.now() - this.lastClipTimestamp)),
        };
    }
    clear() {
        this.processClipCandidates(), this.unscheduleClip(), (this.lastClipTimestamp = 0), this.timeline.clear();
    }
    unscheduleClip() {
        this.scheduledClipTimeout.stop(), (this.scheduledClipSignal = null);
    }
    scheduleClip(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.unscheduleClip(),
            (this.scheduledClipSignal = e),
            (this.lastClipTimestamp = performance.now() + t),
            this.scheduledClipTimeout.start(t, () => {
                (this.scheduledClipSignal = null),
                    (0, p.yd)(
                        e.type === _.Gy.MANUAL ? "manual" : "auto",
                        [...this.timeline.read()],
                        { signal: e, timestamp: Date.now(), emotionHistory: [] },
                        n,
                    );
            });
    }
    handleStreamStop(e) {
        (0, o.Iy)(e.streamKey).ownerId === u.default.getId() && this.processClipCandidates();
    }
    processClipCandidates() {
        let e = c.A.getClipCandidates(),
            t = c.A.getPendingClipCandidates(),
            n = [...e, ...t];
        if (0 === n.length) return;
        let r = [],
            i = [];
        for (let e of n) 0.5 > Math.random() ? r.push(e) : i.push(e);
        for (let e of r) t.some((t) => t.id === e.id) ? this.pendingCandidatePromotions.add(e.id) : (0, p.K7)(e);
        for (let e of i)
            t.some((t) => t.id === e.id) ? this.pendingCandidateDiscards.add(e.id) : (0, p.oH)(e.filepath, e.id);
    }
    handleLateCandidateSave(e) {
        let { clip: t } = e;
        this.pendingCandidatePromotions.has(t.id)
            ? (this.pendingCandidatePromotions.delete(t.id), (0, p.K7)(t))
            : this.pendingCandidateDiscards.has(t.id) &&
              (this.pendingCandidateDiscards.delete(t.id), (0, p.oH)(t.filepath, t.id));
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(c.A.getSettings().clipsLength);
    }
}
let T = new I();
