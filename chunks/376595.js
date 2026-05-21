s.d(t, { H: () => r }), s(321073);
var a = s(372684),
    n = s(731854);
let i = { speakingUserIds: [], activeSoundboards: [] };
class r {
    timeline;
    userSpeakingStates;
    activeSoundboards;
    soundboardPlayCounts;
    constructor(e) {
        (this.timeline = []),
            (this.userSpeakingStates = new Map()),
            (this.activeSoundboards = new Map()),
            (this.soundboardPlayCounts = new Map());
        const t = [...e].sort((e, t) => e.timestamp - t.timestamp),
            s = new Set(),
            n = new Set();
        for (const e of t) {
            const t = e.signal;
            if (t.type === a.Gy.SPEAKING)
                s.has(t.userId) ||
                    (s.add(t.userId), 0 === t.speakingFlags && this.userSpeakingStates.set(t.userId, !0));
            else if (t.type === a.Gy.SOUNDBOARD) {
                const e = this.getSoundboardKey(t.soundboardId, t.userId);
                !n.has(e) &&
                    (n.add(e),
                    t.playing ||
                        (this.soundboardPlayCounts.set(e, 1),
                        this.activeSoundboards.set(e, this.soundboardFromSignal(t))));
            }
        }
        for (const e of ((this.userSpeakingStates.size > 0 || this.activeSoundboards.size > 0) &&
            this.appendSnapshot(0),
        t))
            e.signal.type === a.Gy.SPEAKING
                ? this.processSpeakingEvent(e.signal)
                : e.signal.type === a.Gy.SOUNDBOARD && this.processSoundboardEvent(e.signal),
                this.appendSnapshot(e.timestamp);
    }
    static fromAttachmentTimeline(e) {
        return new r(
            e
                .filter((e) => null != e.speaking)
                .map((e) => ({
                    timestamp: e.timestamp_ms,
                    signal: {
                        type: a.Gy.SPEAKING,
                        userId: e.speaking.user_id,
                        speakingFlags: e.speaking.speaking_flags,
                    },
                })),
        );
    }
    appendSnapshot(e) {
        this.timeline.push({ timestamp: e, snapshot: this.getCurrentSnapshot() });
    }
    getSoundboardKey(e, t) {
        return `${e}:${t}`;
    }
    soundboardFromSignal(e) {
        return {
            soundboardId: e.soundboardId,
            name: e.name,
            userId: e.userId,
            emojiId: e.emojiId,
            emojiName: e.emojiName,
            emojiAnimated: e.emojiAnimated,
        };
    }
    processSpeakingEvent(e) {
        this.userSpeakingStates.set(e.userId, (e.speakingFlags & n.ME.VOICE) === n.ME.VOICE);
    }
    processSoundboardEvent(e) {
        let t = this.getSoundboardKey(e.soundboardId, e.userId),
            s = this.soundboardPlayCounts.get(t) ?? 0;
        if (e.playing)
            this.soundboardPlayCounts.set(t, s + 1), this.activeSoundboards.set(t, this.soundboardFromSignal(e));
        else {
            let e = Math.max(0, s - 1);
            this.soundboardPlayCounts.set(t, e), 0 === e && this.activeSoundboards.delete(t);
        }
    }
    getCurrentSnapshot() {
        return {
            speakingUserIds: Array.from(this.userSpeakingStates.entries())
                .filter((e) => {
                    let [t, s] = e;
                    return s;
                })
                .map((e) => {
                    let [t, s] = e;
                    return t;
                }),
            activeSoundboards: Array.from(this.activeSoundboards.values()),
        };
    }
    getEventsAtTimestamp(e) {
        let t = 0,
            s = this.timeline.length - 1,
            a = -1;
        for (; t <= s; ) {
            let n = Math.floor((t + s) / 2);
            this.timeline[n].timestamp <= e ? ((a = n), (t = n + 1)) : (s = n - 1);
        }
        return -1 === a ? i : this.timeline[a].snapshot;
    }
}
