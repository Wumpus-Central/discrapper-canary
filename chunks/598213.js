function i(e) {
    return e.decision.timestamp - e.length;
}
function r(e) {
    return e.decision.timestamp;
}
function a(e, t) {
    let n = e.map((e, t) => {
            let n = Math.max(0, Math.round(e.videoStartMs)),
                i = Math.min(e.clip.length, Math.round(e.videoEndMs));
            return { section: e, index: t, srcStart: n, srcEnd: i, durMs: i - n, blendIn: 0, dstStart: 0, dstEnd: 0 };
        }),
        i = 0;
    for (let e of n)
        ((e.blendIn = 0 === e.index ? 0 : Math.min(t, e.durMs)),
            (e.dstStart = 0 === e.index ? 0 : Math.max(0, i - e.blendIn)),
            (e.dstEnd = e.dstStart + e.durMs),
            (i = e.dstEnd));
    return n;
}
function s(e) {
    return e.length > 0 ? e[e.length - 1].dstEnd : 0;
}
(n(321073),
    n.d(
        t,
        {},
        {
            BA: function (e, t, n, i) {
                let { width: r, height: l } = i,
                    { fps: o, blendMs: d, audioTrackLabel: c } = n,
                    u = { x: 0, y: 0, width: r, height: l },
                    _ = a(e, d),
                    E = [],
                    A = new Map(),
                    f = [],
                    h = [];
                return (
                    _.forEach((e, n) => {
                        let i = t(e.section.clip),
                            r = A.get(i);
                        null == r && ((r = `src_${e.index}`), A.set(i, r), E.push({ id: r, kind: "file", path: i }));
                        let a = _[n + 1]?.blendIn ?? 0,
                            s = {
                                input: r,
                                src_start_ms: e.srcStart,
                                src_end_ms: e.srcEnd,
                                dst_start_ms: e.dstStart,
                                dst_end_ms: e.dstEnd,
                                transform: u,
                            };
                        (e.blendIn > 0 && (s.transition_in = { kind: "blend", duration_ms: e.blendIn }), f.push(s));
                        let l = {
                            input: r,
                            src_start_ms: e.srcStart,
                            src_end_ms: e.srcEnd,
                            dst_start_ms: e.dstStart,
                            dst_end_ms: e.dstEnd,
                            volume: 1,
                        };
                        (e.blendIn > 0 && (l.fade_in_ms = e.blendIn), a > 0 && (l.fade_out_ms = a), h.push(l));
                    }),
                    {
                        version: 1,
                        output: { width: r, height: l, fps: o, duration_ms: s(_) },
                        inputs: E,
                        video_tracks: [{ clips: f }],
                        audio_tracks: [{ label: c, clips: h }],
                    }
                );
            },
            Wp: function (e, t, n) {
                return {
                    srcStartMs: e.startMs - t.beforeMs,
                    srcEndMs: e.endMs + t.afterMs,
                    eventStartMs: e.startMs,
                    eventEndMs: e.endMs,
                    ...n,
                };
            },
            X0: function (e) {
                let t = [];
                for (let s of e) {
                    let e = t[t.length - 1];
                    if (null != e && s.srcStartMs <= e.srcEndMs) {
                        var n, i, r, a;
                        ((e.srcEndMs = Math.max(e.srcEndMs, s.srcEndMs)),
                            (n = e.eventStartMs),
                            (i = s.eventStartMs),
                            (e.eventStartMs = null == n ? i : null == i ? n : Math.min(n, i)),
                            (r = e.eventEndMs),
                            (a = s.eventEndMs),
                            (e.eventEndMs = null == r ? a : null == a ? r : Math.max(r, a)),
                            (e.hasGame = !0 === e.hasGame || !0 === s.hasGame),
                            (e.hasAudio = !0 === e.hasAudio || !0 === s.hasAudio),
                            null != s.label && (e.label = null != e.label ? `${e.label} + ${s.label}` : s.label));
                        continue;
                    }
                    t.push({ ...s });
                }
                return t;
            },
            lQ: i,
            s_: function (e, t) {
                return s(a(e, t));
            },
            yC: { fps: 30, blendMs: 0, audioTrackLabel: "0:montage" },
            z2: function (e, t) {
                let n = [],
                    a = [];
                for (let s of e) {
                    let e = (function (e, t) {
                        let n = e.eventStartMs ?? e.srcStartMs,
                            a = e.eventEndMs ?? e.srcEndMs,
                            s = (e.srcStartMs + e.srcEndMs) / 2,
                            l = null,
                            o = -1 / 0,
                            d = 1 / 0;
                        for (let c of t) {
                            let t = i(c),
                                u = r(c);
                            if (t > n || u < a) continue;
                            let _ = Math.min(u, e.srcEndMs) - Math.max(t, e.srcStartMs),
                                E = Math.abs((t + u) / 2 - s);
                            (_ > o || (_ === o && E < d)) && ((o = _), (d = E), (l = c));
                        }
                        return l;
                    })(s, t);
                    if (null == e) {
                        a.push(s);
                        continue;
                    }
                    let l = i(e),
                        o = r(e),
                        d = Math.max(s.srcStartMs, l),
                        c = Math.min(s.srcEndMs, o);
                    if (c - d < 1e3) {
                        a.push(s);
                        continue;
                    }
                    n.push({ clip: e, videoStartMs: d - l, videoEndMs: c - l, label: s.label });
                }
                return { resolved: n, skipped: a };
            },
        },
    ));
