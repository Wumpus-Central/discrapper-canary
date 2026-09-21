(n.d(t, { BA: () => E, Wp: () => l, X0: () => o, lQ: () => a, rx: () => r, s_: () => _, yC: () => i, z2: () => d }),
    n(321073));
let i = { fps: 30, blendMs: 0, audioTrackLabel: "0:montage" },
    r = 1e3;
function a(e) {
    return e.decision.timestamp - e.length;
}
function s(e) {
    return e.decision.timestamp;
}
function l(e, t, n) {
    return { srcStartMs: e.startMs - t.beforeMs, srcEndMs: e.endMs + t.afterMs, ...n };
}
function o(e) {
    let t = [];
    for (let n of e) {
        let e = t[t.length - 1];
        if (null != e && n.srcStartMs <= e.srcEndMs) {
            ((e.srcEndMs = Math.max(e.srcEndMs, n.srcEndMs)),
                (e.hasGame = !0 === e.hasGame || !0 === n.hasGame),
                (e.hasAudio = !0 === e.hasAudio || !0 === n.hasAudio),
                null != n.label && (e.label = null != e.label ? `${e.label} + ${n.label}` : n.label));
            continue;
        }
        t.push({ ...n });
    }
    return t;
}
function d(e, t) {
    let n = [],
        i = [];
    for (let l of e) {
        let e = (function (e, t) {
            let n = (e.srcStartMs + e.srcEndMs) / 2,
                i = null,
                r = 1 / 0;
            for (let l of t) {
                let t = a(l),
                    o = s(l);
                if (t <= e.srcStartMs && o >= e.srcEndMs) {
                    let e = Math.abs((t + o) / 2 - n);
                    e < r && ((r = e), (i = l));
                }
            }
            return i;
        })(l, t);
        if (null == e) {
            i.push(l);
            continue;
        }
        let o = a(e),
            d = s(e),
            c = Math.max(l.srcStartMs, o),
            u = Math.min(l.srcEndMs, d);
        if (u - c < r) {
            i.push(l);
            continue;
        }
        n.push({ clip: e, videoStartMs: c - o, videoEndMs: u - o, label: l.label });
    }
    return { resolved: n, skipped: i };
}
function c(e, t) {
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
function u(e) {
    return e.length > 0 ? e[e.length - 1].dstEnd : 0;
}
function _(e, t) {
    return u(c(e, t));
}
function E(e, t, n, i) {
    let { width: r, height: a } = i,
        { fps: s, blendMs: l, audioTrackLabel: o } = n,
        d = { x: 0, y: 0, width: r, height: a },
        _ = c(e, l),
        E = [],
        A = new Map(),
        h = [],
        I = [];
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
                    transform: d,
                };
            (e.blendIn > 0 && (s.transition_in = { kind: "blend", duration_ms: e.blendIn }), h.push(s));
            let l = {
                input: r,
                src_start_ms: e.srcStart,
                src_end_ms: e.srcEnd,
                dst_start_ms: e.dstStart,
                dst_end_ms: e.dstEnd,
                volume: 1,
            };
            (e.blendIn > 0 && (l.fade_in_ms = e.blendIn), a > 0 && (l.fade_out_ms = a), I.push(l));
        }),
        {
            version: 1,
            output: { width: r, height: a, fps: s, duration_ms: u(_) },
            inputs: E,
            video_tracks: [{ clips: h }],
            audio_tracks: [{ label: o, clips: I }],
        }
    );
}
