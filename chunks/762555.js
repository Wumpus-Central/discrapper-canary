n.d(t, { Ae: () => u, Q_: () => E, Uq: () => c, gD: () => _, lz: () => A }), n(321073);
var i,
    r = n(174459),
    a = n(974293),
    s = n(271520),
    l = n(696016),
    o = n(652215),
    d = n(731854);
function c(e) {
    return new Date(e).toISOString();
}
function u(e) {
    if (null == e.syncTimestamp) return;
    let t = e.editMetadata?.end != null ? 1e3 * e.editMetadata.end : e.length;
    return new Date(e.syncTimestamp - (e.length - t)).toISOString();
}
function _(e) {
    return e.slice(0, l.GU);
}
var E =
    (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
    (i[(i.KILL = 1)] = "KILL"),
    (i[(i.MULTIKILL = 2)] = "MULTIKILL"),
    (i[(i.DEATH = 3)] = "DEATH"),
    i);
function A(e) {
    if ((e.timeline?.length ?? 0) === 0 || e.decision?.timestamp == null) return;
    let t = e.editMetadata ?? { start: 0, end: e.length / 1e3 },
        n = e.decision.timestamp - e.length,
        i = n + 1e3 * t.start,
        c = n + 1e3 * t.end,
        u = (0, s.h)("getClipEventsTimeline"),
        _ = e.timeline
            .filter(
                (t) =>
                    (e.editMetadata?.voiceAudio !== !1 && t.signal.type === l.Gy.SPEAKING) ||
                    (u && t.signal.type === l.Gy.GAME_EVENT),
            )
            .sort((e, t) => e.timestamp - t.timestamp);
    if (0 === _.length) return;
    let E = new Map(),
        A = [],
        h = new Map();
    for (let e of _) {
        if (e.signal.type !== l.Gy.SPEAKING) continue;
        if (e.timestamp >= i) break;
        let t = (e.signal.speakingFlags & d.ME.VOICE) === d.ME.VOICE;
        E.set(e.signal.userId, t);
    }
    for (let [e, t] of E) t && A.push({ timestamp_ms: 0, speaking: { user_id: e, speaking_flags: d.ME.VOICE } });
    for (let e of _)
        if (e.signal.type === l.Gy.SPEAKING) {
            if (e.timestamp < i) continue;
            if (e.timestamp > c) break;
            let t = (e.signal.speakingFlags & d.ME.VOICE) === d.ME.VOICE;
            if ((E.get(e.signal.userId) ?? !1) === t) continue;
            E.set(e.signal.userId, t),
                A.push({
                    timestamp_ms: Math.round(e.timestamp - i),
                    speaking: { user_id: e.signal.userId, speaking_flags: e.signal.speakingFlags },
                });
        } else if (e.signal.type === l.Gy.GAME_EVENT) {
            let t;
            if (e.timestamp < i) continue;
            if (e.timestamp > c) break;
            switch (e.signal.eventType) {
                case l.rb.KILL:
                    t = 1;
                    break;
                case l.rb.MULTIKILL:
                    t = 2;
            }
            if (null == t) continue;
            let n = Math.round(e.timestamp - i),
                r = h.get(n);
            if (null != r) {
                2 === t && (A[r].game = { type: t });
                continue;
            }
            h.set(n, A.length), A.push({ timestamp_ms: n, game: { type: t } });
        }
    let I = A.slice(0, l.td);
    return (
        I.length !== A.length &&
            r.default.track(o.HAw.CLIP_TIMELINE_TRIMMED, {
                clip_uuid: e.id,
                clip_event_timeline_size: A.length,
                clip_runtime: (0, a.GN)("getClipEventsTimeline"),
            }),
        I.length > 0 ? I : void 0
    );
}
