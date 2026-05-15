"use strict";
n.d(t, { Uq: () => u, gD: () => c, lz: () => d }), n(321073);
var i = n(174459);
let r = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-timeline",
    defaultConfig: { enableTimelineUpload: !1 },
    variations: { 1: { enableTimelineUpload: !0 } },
});
var s = n(372684),
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
    let { enableTimelineUpload: t } = r.getConfig({ location: "getClipEventsTimeline" });
    if (!t || (e.timeline?.length ?? 0) === 0 || e.decision?.timestamp == null || e.editMetadata?.voiceAudio === !1)
        return;
    let n = e.editMetadata ?? { start: 0, end: e.length / 1e3 },
        u = e.decision.timestamp - e.length,
        c = u + 1e3 * n.start,
        d = u + 1e3 * n.end,
        _ = e.timeline.filter((e) => e.signal.type === s.Gy.SPEAKING).sort((e, t) => e.timestamp - t.timestamp);
    if (0 === _.length) return;
    let f = new Map(),
        h = [];
    for (let e of _) {
        if (e.timestamp >= c) break;
        let t = (e.signal.speakingFlags & l.ME.VOICE) === l.ME.VOICE;
        f.set(e.signal.userId, t);
    }
    for (let [e, t] of f) t && h.push({ timestamp_ms: 0, speaking: { user_id: e, speaking_flags: l.ME.VOICE } });
    for (let e of _) {
        if (e.timestamp < c) continue;
        if (e.timestamp > d) break;
        let t = (e.signal.speakingFlags & l.ME.VOICE) === l.ME.VOICE;
        (f.get(e.signal.userId) ?? !1) !== t &&
            (f.set(e.signal.userId, t),
            h.push({
                timestamp_ms: Math.round(e.timestamp - c),
                speaking: { user_id: e.signal.userId, speaking_flags: e.signal.speakingFlags },
            }));
    }
    let p = h.slice(0, a.td);
    return (
        p.length !== h.length &&
            i.default.track(o.HAw.CLIP_TIMELINE_TRIMMED, { clip_uuid: e.id, clip_event_timeline_size: h.length }),
        p.length > 0 ? p : void 0
    );
}
