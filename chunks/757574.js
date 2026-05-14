"use strict";
n.d(t, { Uq: () => o, gD: () => l, lz: () => u }), n(321073);
let i = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-timeline",
    defaultConfig: { enableTimelineUpload: !1 },
    variations: { 1: { enableTimelineUpload: !0 } },
});
var r = n(372684),
    s = n(696016),
    a = n(731854);
function o(e) {
    return new Date(e).toISOString();
}
function l(e) {
    return e.slice(0, s.GU);
}
function u(e) {
    let { enableTimelineUpload: t } = i.getConfig({ location: "getClipEventsTimeline" });
    if (!t || (e.timeline?.length ?? 0) === 0 || e.decision?.timestamp == null) return;
    let n = e.editMetadata ?? { start: 0, end: e.length / 1e3 },
        s = e.decision.timestamp - e.length,
        o = s + 1e3 * n.start,
        l = s + 1e3 * n.end,
        u = e.timeline.filter((e) => e.signal.type === r.Gy.SPEAKING).sort((e, t) => e.timestamp - t.timestamp);
    if (0 === u.length) return;
    let c = new Map(),
        d = [];
    for (let e of u) {
        if (e.timestamp >= o) break;
        let t = (e.signal.speakingFlags & a.ME.VOICE) === a.ME.VOICE;
        c.set(e.signal.userId, t);
    }
    for (let [e, t] of c) t && d.push({ timestamp_ms: 0, speaking: { user_id: e, speaking_flags: a.ME.VOICE } });
    for (let e of u)
        if (!(e.timestamp < o)) {
            if (e.timestamp > l) break;
            d.push({
                timestamp_ms: Math.round(e.timestamp - o),
                speaking: { user_id: e.signal.userId, speaking_flags: e.signal.speakingFlags },
            });
        }
    return d.length > 0 ? d : void 0;
}
