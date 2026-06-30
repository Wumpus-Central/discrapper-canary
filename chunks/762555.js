"use strict";
n.d(t, { Uq: () => u, gD: () => c, lz: () => d }), n(321073);
var i = n(174459),
    r = n(372684),
    s = n(974293),
    a = n(696016),
    o = n(652215),
    l = n(731854);
function u(e) {
    return new Date(e).toISOString();
}
function c(e) {
    return e.slice(0, a.GU);
}
function d(e) {
    if ((e.timeline?.length ?? 0) === 0 || e.decision?.timestamp == null || e.editMetadata?.voiceAudio === !1) return;
    let t = e.editMetadata ?? { start: 0, end: e.length / 1e3 },
        n = e.decision.timestamp - e.length,
        u = n + 1e3 * t.start,
        c = n + 1e3 * t.end,
        d = e.timeline.filter((e) => e.signal.type === r.Gy.SPEAKING).sort((e, t) => e.timestamp - t.timestamp);
    if (0 === d.length) return;
    let _ = new Map(),
        h = [];
    for (let e of d) {
        if (e.timestamp >= u) break;
        let t = (e.signal.speakingFlags & l.ME.VOICE) === l.ME.VOICE;
        _.set(e.signal.userId, t);
    }
    for (let [e, t] of _) t && h.push({ timestamp_ms: 0, speaking: { user_id: e, speaking_flags: l.ME.VOICE } });
    for (let e of d) {
        if (e.timestamp < u) continue;
        if (e.timestamp > c) break;
        let t = (e.signal.speakingFlags & l.ME.VOICE) === l.ME.VOICE;
        (_.get(e.signal.userId) ?? !1) !== t &&
            (_.set(e.signal.userId, t),
            h.push({
                timestamp_ms: Math.round(e.timestamp - u),
                speaking: { user_id: e.signal.userId, speaking_flags: e.signal.speakingFlags },
            }));
    }
    let f = h.slice(0, a.td);
    return (
        f.length !== h.length &&
            i.default.track(o.HAw.CLIP_TIMELINE_TRIMMED, {
                clip_uuid: e.id,
                clip_event_timeline_size: h.length,
                clip_runtime: (0, s.GN)("getClipEventsTimeline"),
            }),
        f.length > 0 ? f : void 0
    );
}
