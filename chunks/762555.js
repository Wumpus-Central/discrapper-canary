n(321073);
var i,
    r,
    a = n(129230),
    s = n(457538),
    l = n(696016),
    o = n(652215),
    d = n(731854);
function c(e, t) {
    return e.editMetadata?.mutedSpeakerIds?.includes(t) === !0 || 0 === (0, s.ud)(e.editMetadata?.speakerVolumes)[t];
}
var u =
        (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.KILL = 1)] = "KILL"),
        (i[(i.MULTIKILL = 2)] = "MULTIKILL"),
        (i[(i.DEATH = 3)] = "DEATH"),
        i),
    _ =
        (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"),
        (r[(r.LAUGHTER = 1)] = "LAUGHTER"),
        (r[(r.SHOUTING = 2)] = "SHOUTING"),
        r);
n.d(
    t,
    {},
    {
        Ae: function (e) {
            if (null == e.syncTimestamp) return;
            let t = e.editMetadata?.end != null ? 1e3 * e.editMetadata.end : e.length;
            return new Date(e.syncTimestamp - (e.length - t)).toISOString();
        },
        B: _,
        Q_: u,
        Uq: function (e) {
            return new Date(e).toISOString();
        },
        gD: function (e) {
            return e.users.filter((t) => !c(e, t)).slice(0, 100);
        },
        lz: function (e) {
            if (
                ((e.timeline?.length ?? 0) === 0 && (e.audioEvents?.length ?? 0) === 0) ||
                e.decision?.timestamp == null
            )
                return;
            let t = e.editMetadata ?? { start: 0, end: e.length / 1e3 },
                n = e.decision.timestamp - e.length,
                i = n + 1e3 * t.start,
                r = n + 1e3 * t.end,
                s = e.timeline
                    .filter(
                        (t) =>
                            (e.editMetadata?.voiceAudio !== !1 &&
                                t.signal.type === l.Gy.SPEAKING &&
                                !c(e, t.signal.userId)) ||
                            t.signal.type === l.Gy.GAME_EVENT,
                    )
                    .sort((e, t) => e.timestamp - t.timestamp),
                u = e.editMetadata?.voiceAudio !== !1 ? (e.audioEvents ?? []) : [];
            if (0 === s.length && 0 === u.length) return;
            let _ = new Map(),
                E = [];
            for (let e of s) {
                if (e.signal.type !== l.Gy.SPEAKING) continue;
                if (e.timestamp >= i) break;
                let t = (e.signal.speakingFlags & d.ME.VOICE) === d.ME.VOICE;
                _.set(e.signal.userId, t);
            }
            for (let [e, t] of _)
                t && E.push({ timestamp_ms: 0, speaking: { user_id: e, speaking_flags: d.ME.VOICE } });
            for (let e of s)
                if (e.signal.type === l.Gy.SPEAKING) {
                    if (e.timestamp < i) continue;
                    if (e.timestamp > r) break;
                    let t = (e.signal.speakingFlags & d.ME.VOICE) === d.ME.VOICE;
                    if ((_.get(e.signal.userId) ?? !1) === t) continue;
                    (_.set(e.signal.userId, t),
                        E.push({
                            timestamp_ms: Math.round(e.timestamp - i),
                            speaking: { user_id: e.signal.userId, speaking_flags: e.signal.speakingFlags },
                        }));
                } else if (e.signal.type === l.Gy.GAME_EVENT) {
                    if (e.timestamp < i) continue;
                    if (e.timestamp > r) break;
                    let t = 0;
                    switch (e.signal.eventType) {
                        case l.rb.KILL:
                            t = 1;
                            break;
                        case l.rb.MULTIKILL:
                            t = 2;
                            break;
                        case l.rb.DEATH:
                            t = 3;
                    }
                    E.push({
                        timestamp_ms: Math.round(e.timestamp - i),
                        game: { type: t, event_name: e.signal.eventName },
                    });
                }
            for (let e of u)
                e.peakMs < i ||
                    e.peakMs > r ||
                    E.push({
                        timestamp_ms: Math.round(e.peakMs - i),
                        emotion: { type: e.type === l.Gy.LAUGHTER ? 1 : 2 },
                    });
            E.sort((e, t) => e.timestamp_ms - t.timestamp_ms);
            let A = E.slice(0, 1e3);
            return (
                A.length !== E.length &&
                    a.default.track(o.HAw.CLIP_TIMELINE_TRIMMED, {
                        clip_uuid: e.id,
                        clip_event_timeline_size: E.length,
                        clip_runtime: "v3",
                    }),
                A.length > 0 ? A : void 0
            );
        },
    },
);
