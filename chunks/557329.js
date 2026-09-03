n.d(t, {
    Dk: () => c,
    Lj: () => o,
    Mf: () => u,
    aT: () => A,
    bU: () => a,
    br: () => r,
    e3: () => I,
    ei: () => s,
    k0: () => f,
    kV: () => l,
    tf: () => h,
    v$: () => d,
}),
    n(321073);
var i = n(781183);
function r(e, t, n) {
    return e.map((e) => {
        let i = Array(e.length).fill(!1),
            r = -1;
        for (let a = 0; a <= e.length; a++) {
            let s = a < e.length && e[a] >= n;
            if ((s && -1 === r && (r = a), !s && -1 !== r)) {
                if (a - r >= t.minConsecutiveChunks) for (let e = r; e < a; e++) i[e] = !0;
                r = -1;
            }
        }
        return e.map((e, t) => (i[t] ? e : 0));
    });
}
function a(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e.length,
        a = r > 0 ? e[0].length : 0,
        s = e.map((e) => (0, i.Ym)(e, t.noiseFloorPercentile)),
        l = e.map(() => Array(a).fill(!1));
    for (let i = 0; i < a; i++) {
        let a = 0;
        for (let t = 0; t < r; t++) a = Math.max(a, e[t][i]);
        if (0 !== a)
            for (let o = 0; o < r; o++) {
                let r = e[o][i] >= t.noiseFloorMultiplier * s[o],
                    d = r && e[o][i] > 0;
                if (!n) {
                    l[o][i] = d;
                    continue;
                }
                let c = e[o][i] / a;
                l[o][i] = c >= t.minDominanceRatio && r;
            }
    }
    return l;
}
function s(e, t) {
    return e.map((e, n) => e.map((e, i) => (t[n][i] ? e : 0)));
}
function l(e, t) {
    return t.requireAttribution ? a(e, t, !1) : null;
}
function o(e, t, n, i) {
    let r = l(n, i);
    return null == r ? { laughter: e, shouting: t } : { laughter: s(e, r), shouting: s(t, r) };
}
function d(e, t) {
    return 0 === t.rmsScale
        ? e.map((e) => e.map(() => 1))
        : e.map((e) => e.map((e) => (0, i.qE)(e * t.rmsScale, 0, 1)));
}
function c(e, t) {
    return e.map((e, n) => e.map((e, i) => e * t[n][i]));
}
function u(e, t) {
    if (0 === e.length) return [];
    let n = [...e].sort((e, t) => e.tStart - t.tStart),
        i = [{ ...n[0] }];
    for (let e = 1; e < n.length; e++) {
        let r = i[i.length - 1],
            a = n[e];
        a.tStart - r.tEnd <= t ? (r.tEnd = Math.max(r.tEnd, a.tEnd)) : i.push({ ...a });
    }
    return i;
}
function _(e, t, n) {
    let i = e[t];
    for (let r = t + 1; r <= n; r++) i = Math.max(i, e[r]);
    return i;
}
function E(e, t, n) {
    return u(
        (function (e, t) {
            let n = [],
                i = -1;
            for (let r = 0; r <= e.length; r++) {
                let a = r < e.length && e[r] >= t;
                a && -1 === i && (i = r), a || -1 === i || (n.push({ tStart: i, tEnd: r - 1 }), (i = -1));
            }
            return n;
        })(e, t),
        n.eventChainGapChunks,
    ).map((t) => {
        let { tStart: n, tEnd: i } = t;
        return {
            tStart: n,
            tEnd: i,
            peakT: (function (e, t, n) {
                let i = t;
                for (let r = t + 1; r <= n; r++) e[r] > e[i] && (i = r);
                return i;
            })(e, n, i),
            peakV: _(e, n, i),
        };
    });
}
function A(e, t, n, i) {
    if (n < 0 || n >= e.laughter.length) return { mainEventScore: 0, anchors: [], events: [] };
    let r = [],
        a = [],
        s = [
            {
                emotion: "laughter",
                gated: e.laughter[n],
                intensity: t.laughter[n],
                threshold: i.laughterEventThreshold,
                weight: i.laughterWeight,
            },
            {
                emotion: "shouting",
                gated: e.shouting[n],
                intensity: t.shouting[n],
                threshold: i.shoutingEventThreshold,
                weight: i.shoutingWeight,
            },
        ],
        l = 0;
    for (let { emotion: e, gated: t, intensity: n, threshold: o, weight: d } of s) {
        let s;
        if (0 === t.length) continue;
        let c = E(t, o, i);
        if (0 === c.length) continue;
        for (let e of (a.push(
            ...c.map((e) => {
                let { tStart: t, tEnd: n } = e;
                return { tStart: t, tEnd: n };
            }),
        ),
        c)) {
            let t = e.tEnd - e.tStart + 1,
                i = _(n, e.tStart, e.tEnd) * Math.log1p(t);
            (null == s || i > s.mag) && (s = { mag: i, window: e });
        }
        if (null == s) continue;
        l += d * s.mag;
        let { tStart: u, tEnd: A, peakT: h, peakV: I } = s.window;
        r.push({ emotion: e, peakT: h, peakV: I, sustain: A - u + 1, tStart: u, tEnd: A });
    }
    return { mainEventScore: l, anchors: u(a, i.eventChainGapChunks), events: r };
}
function h(e, t, n, r, a) {
    if (0 === e.length) return 0;
    let s = t.length,
        l = s > 0 ? t[0].length : 0;
    if (0 === l) return 0;
    let o = [];
    for (let d of e) {
        let e = (0, i.qE)(d.tStart - a.lagPreChunks, 0, l - 1),
            c = (0, i.qE)(d.tEnd + a.lagPostChunks, 0, l - 1),
            u = 1;
        for (let i = 0; i < s; i++) {
            if (i === r) continue;
            let a = 0;
            for (let r = e; r <= c; r++) a = Math.max(a, t[i][r], n[i][r]);
            u *= 1 - a;
        }
        o.push(1 - u);
    }
    return Math.max(0, ...o);
}
function I(e, t) {
    let n = [];
    for (let { emotion: i, matrix: r, threshold: a } of [
        { emotion: "laughter", matrix: e.laughter, threshold: t.laughterEventThreshold },
        { emotion: "shouting", matrix: e.shouting, threshold: t.shoutingEventThreshold },
    ])
        for (let e = 0; e < r.length; e++) {
            let s = r[e];
            if (0 !== s.length)
                for (let { tStart: r, tEnd: l, peakT: o, peakV: d } of E(s, a, t))
                    n.push({ channel: e, emotion: i, tStart: r, tEnd: l, peakT: o, peakV: d });
        }
    return n;
}
function f(e, t, n) {
    let i = e.length,
        r = i > 0 ? e[0].length : 0,
        a = Array(r).fill(0),
        s = 0;
    for (let l = 0; l < r; l++) {
        let r = 0;
        for (let a = 0; a < i; a++) (e[a][l] >= n.laughterEventThreshold || t[a][l] >= n.shoutingEventThreshold) && r++;
        let o = Math.max(0, r - 1);
        (a[l] = o), (s += o);
    }
    return { coOccurrenceScore: s, coContribPerChunk: a };
}
