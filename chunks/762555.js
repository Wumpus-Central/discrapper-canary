"use strict";
n.d(t, { Q_: () => E, Uq: () => u, gD: () => _, lz: () => A }), n(321073);
var i,
    r = n(174459),
    a = n(150303),
    s = n(974293),
    l = n(271520),
    o = n(696016),
    d = n(652215),
    c = n(731854);
function u(e) {
    return new Date(e).toISOString();
}
function _(e) {
    return e.slice(0, o.GU);
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
        u = n + 1e3 * t.end,
        _ = (0, l.h)("getClipEventsTimeline"),
        E = e.timeline
            .filter(
                (t) =>
                    (e.editMetadata?.voiceAudio !== !1 && t.signal.type === a.Gy.SPEAKING) ||
                    (_ && t.signal.type === a.Gy.GAME_EVENT),
            )
            .sort((e, t) => e.timestamp - t.timestamp);
    if (0 === E.length) return;
    let A = new Map(),
        h = [],
        I = new Map();
    for (let e of E) {
        if (e.signal.type !== a.Gy.SPEAKING) continue;
        if (e.timestamp >= i) break;
        let t = (e.signal.speakingFlags & c.ME.VOICE) === c.ME.VOICE;
        A.set(e.signal.userId, t);
    }
    for (let [e, t] of A) t && h.push({ timestamp_ms: 0, speaking: { user_id: e, speaking_flags: c.ME.VOICE } });
    for (let e of E)
        if (e.signal.type === a.Gy.SPEAKING) {
            if (e.timestamp < i) continue;
            if (e.timestamp > u) break;
            let t = (e.signal.speakingFlags & c.ME.VOICE) === c.ME.VOICE;
            if ((A.get(e.signal.userId) ?? !1) === t) continue;
            A.set(e.signal.userId, t),
                h.push({
                    timestamp_ms: Math.round(e.timestamp - i),
                    speaking: { user_id: e.signal.userId, speaking_flags: e.signal.speakingFlags },
                });
        } else if (e.signal.type === a.Gy.GAME_EVENT) {
            let t;
            if (e.timestamp < i) continue;
            if (e.timestamp > u) break;
            switch (e.signal.eventType) {
                case a.rb.KILL:
                    t = 1;
                    break;
                case a.rb.MULTIKILL:
                    t = 2;
            }
            if (null == t) continue;
            let n = Math.round(e.timestamp - i),
                r = I.get(n);
            if (null != r) {
                2 === t && (h[r].game = { type: t });
                continue;
            }
            I.set(n, h.length), h.push({ timestamp_ms: n, game: { type: t } });
        }
    let f = h.slice(0, o.td);
    return (
        f.length !== h.length &&
            r.default.track(d.HAw.CLIP_TIMELINE_TRIMMED, {
                clip_uuid: e.id,
                clip_event_timeline_size: h.length,
                clip_runtime: (0, s.GN)("getClipEventsTimeline"),
            }),
        f.length > 0 ? f : void 0
    );
}
