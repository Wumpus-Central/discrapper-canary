"use strict";
n.d(t, { Uq: () => c, gD: () => d, lz: () => _ }), n(321073);
var i = n(174459);
let r = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-timeline",
    defaultConfig: { enableTimelineUpload: !1 },
    variations: { 1: { enableTimelineUpload: !0 } },
});
var s = n(372684),
    a = n(974293),
    o = n(696016),
    l = n(652215),
    u = n(731854);
function c(e) {
    return new Date(e).toISOString();
}
function d(e) {
    return e.slice(0, o.GU);
}
function _(e) {
    let { enableTimelineUpload: t } = r.getConfig({ location: "getClipEventsTimeline" });
    if (!t || (e.timeline?.length ?? 0) === 0 || e.decision?.timestamp == null || e.editMetadata?.voiceAudio === !1)
        return;
    let n = e.editMetadata ?? { start: 0, end: e.length / 1e3 },
        c = e.decision.timestamp - e.length,
        d = c + 1e3 * n.start,
        _ = c + 1e3 * n.end,
        h = e.timeline.filter((e) => e.signal.type === s.Gy.SPEAKING).sort((e, t) => e.timestamp - t.timestamp);
    if (0 === h.length) return;
    let f = new Map(),
        p = [];
    for (let e of h) {
        if (e.timestamp >= d) break;
        let t = (e.signal.speakingFlags & u.ME.VOICE) === u.ME.VOICE;
        f.set(e.signal.userId, t);
    }
    for (let [e, t] of f) t && p.push({ timestamp_ms: 0, speaking: { user_id: e, speaking_flags: u.ME.VOICE } });
    for (let e of h) {
        if (e.timestamp < d) continue;
        if (e.timestamp > _) break;
        let t = (e.signal.speakingFlags & u.ME.VOICE) === u.ME.VOICE;
        (f.get(e.signal.userId) ?? !1) !== t &&
            (f.set(e.signal.userId, t),
            p.push({
                timestamp_ms: Math.round(e.timestamp - d),
                speaking: { user_id: e.signal.userId, speaking_flags: e.signal.speakingFlags },
            }));
    }
    let E = p.slice(0, o.td);
    return (
        E.length !== p.length &&
            i.default.track(l.HAw.CLIP_TIMELINE_TRIMMED, {
                clip_uuid: e.id,
                clip_event_timeline_size: p.length,
                clip_runtime: (0, a.GN)(),
            }),
        E.length > 0 ? E : void 0
    );
}
