"use strict";
n.d(t, { H: () => a }), n(321073);
var i = n(372684),
    r = n(731854);
let s = { speakingUserIds: [], activeSoundboards: [] };
class a {
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
            n = new Set(),
            r = new Set();
        for (const e of t) {
            const t = e.signal;
            if (t.type === i.Gy.SPEAKING)
                n.has(t.userId) ||
                    (n.add(t.userId), 0 === t.speakingFlags && this.userSpeakingStates.set(t.userId, !0));
            else if (t.type === i.Gy.SOUNDBOARD) {
                const e = this.getSoundboardKey(t.soundboardId, t.userId);
                !r.has(e) &&
                    (r.add(e),
                    t.playing ||
                        (this.soundboardPlayCounts.set(e, 1),
                        this.activeSoundboards.set(e, this.soundboardFromSignal(t))));
            }
        }
        for (const e of ((this.userSpeakingStates.size > 0 || this.activeSoundboards.size > 0) &&
            this.appendSnapshot(0),
        t))
            e.signal.type === i.Gy.SPEAKING
                ? this.processSpeakingEvent(e.signal)
                : e.signal.type === i.Gy.SOUNDBOARD && this.processSoundboardEvent(e.signal),
                this.appendSnapshot(e.timestamp);
    }
    static fromAttachmentTimeline(e) {
        return new a(
            e
                .filter((e) => null != e.speaking)
                .map((e) => ({
                    timestamp: e.timestamp_ms,
                    signal: {
                        type: i.Gy.SPEAKING,
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
        this.userSpeakingStates.set(e.userId, (e.speakingFlags & r.ME.VOICE) === r.ME.VOICE);
    }
    processSoundboardEvent(e) {
        let t = this.getSoundboardKey(e.soundboardId, e.userId),
            n = this.soundboardPlayCounts.get(t) ?? 0;
        if (e.playing)
            this.soundboardPlayCounts.set(t, n + 1), this.activeSoundboards.set(t, this.soundboardFromSignal(e));
        else {
            let e = Math.max(0, n - 1);
            this.soundboardPlayCounts.set(t, e), 0 === e && this.activeSoundboards.delete(t);
        }
    }
    getCurrentSnapshot() {
        return {
            speakingUserIds: Array.from(this.userSpeakingStates.entries())
                .filter((e) => {
                    let [t, n] = e;
                    return n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return t;
                }),
            activeSoundboards: Array.from(this.activeSoundboards.values()),
        };
    }
    getEventsAtTimestamp(e) {
        let t = 0,
            n = this.timeline.length - 1,
            i = -1;
        for (; t <= n; ) {
            let r = Math.floor((t + n) / 2);
            this.timeline[r].timestamp <= e ? ((i = r), (t = r + 1)) : (n = r - 1);
        }
        return -1 === i ? s : this.timeline[i].snapshot;
    }
}
