n.d(t, { Ae: () => c, Q_: () => _, Uq: () => d, gD: () => u, lz: () => E }), n(321073);
var i,
    r = n(174459),
    a = n(271520),
    s = n(696016),
    l = n(652215),
    o = n(731854);
function d(e) {
    return new Date(e).toISOString();
}
function c(e) {
    if (null == e.syncTimestamp) return;
    let t = e.editMetadata?.end != null ? 1e3 * e.editMetadata.end : e.length;
    return new Date(e.syncTimestamp - (e.length - t)).toISOString();
}
function u(e) {
    return e.slice(0, s.GU);
}
var _ =
    (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
    (i[(i.KILL = 1)] = "KILL"),
    (i[(i.MULTIKILL = 2)] = "MULTIKILL"),
    (i[(i.DEATH = 3)] = "DEATH"),
    i);
function E(e) {
    if ((e.timeline?.length ?? 0) === 0 || e.decision?.timestamp == null) return;
    let t = e.editMetadata ?? { start: 0, end: e.length / 1e3 },
        n = e.decision.timestamp - e.length,
        i = n + 1e3 * t.start,
        d = n + 1e3 * t.end,
        c = (0, a.h)("getClipEventsTimeline"),
        u = e.timeline
            .filter(
                (t) =>
                    (e.editMetadata?.voiceAudio !== !1 && t.signal.type === s.Gy.SPEAKING) ||
                    (c && t.signal.type === s.Gy.GAME_EVENT),
            )
            .sort((e, t) => e.timestamp - t.timestamp);
    if (0 === u.length) return;
    let _ = new Map(),
        E = [],
        A = new Map();
    for (let e of u) {
        if (e.signal.type !== s.Gy.SPEAKING) continue;
        if (e.timestamp >= i) break;
        let t = (e.signal.speakingFlags & o.ME.VOICE) === o.ME.VOICE;
        _.set(e.signal.userId, t);
    }
    for (let [e, t] of _) t && E.push({ timestamp_ms: 0, speaking: { user_id: e, speaking_flags: o.ME.VOICE } });
    for (let e of u)
        if (e.signal.type === s.Gy.SPEAKING) {
            if (e.timestamp < i) continue;
            if (e.timestamp > d) break;
            let t = (e.signal.speakingFlags & o.ME.VOICE) === o.ME.VOICE;
            if ((_.get(e.signal.userId) ?? !1) === t) continue;
            _.set(e.signal.userId, t),
                E.push({
                    timestamp_ms: Math.round(e.timestamp - i),
                    speaking: { user_id: e.signal.userId, speaking_flags: e.signal.speakingFlags },
                });
        } else if (e.signal.type === s.Gy.GAME_EVENT) {
            let t;
            if (e.timestamp < i) continue;
            if (e.timestamp > d) break;
            switch (e.signal.eventType) {
                case s.rb.KILL:
                    t = 1;
                    break;
                case s.rb.MULTIKILL:
                    t = 2;
            }
            if (null == t) continue;
            let n = Math.round(e.timestamp - i),
                r = A.get(n);
            if (null != r) {
                2 === t && (E[r].game = { type: t });
                continue;
            }
            A.set(n, E.length), E.push({ timestamp_ms: n, game: { type: t } });
        }
    let h = E.slice(0, s.td);
    return (
        h.length !== E.length &&
            r.default.track(l.HAw.CLIP_TIMELINE_TRIMMED, {
                clip_uuid: e.id,
                clip_event_timeline_size: E.length,
                clip_runtime: s.sT,
            }),
        h.length > 0 ? h : void 0
    );
}
