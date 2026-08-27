"use strict";
n.d(t, { Ly: () => w, Q4: () => M, Tv: () => G, pn: () => x, GC: () => P, lq: () => k }), n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(997649),
    s = n(786661);
n(775443);
var l = n(861343),
    o = n(876474),
    d = n(801344);
let c = new Set([d.WU, d.Wi, d.QK, d.Bs, d.Bt, d.p5, d.d4, d.oB]);
class u {
    gameEvents;
    gameAxisScoreThreshold = 0.17;
    gameStateTimeline = [];
    constructor(e) {
        (this.gameEvents = e),
            (this.gameStateTimeline = (function (e) {
                let t = { in_game: !1, is_dead: !1 },
                    n = [{ ...t, timestamp_ms: 0 }];
                function i(e, i) {
                    let r = { ...t, ...e };
                    (r.in_game !== t.in_game || r.is_dead !== t.is_dead) &&
                        (Object.assign(t, r), n.push({ ...r, timestamp_ms: i }));
                }
                for (let t of [...e].sort((e, t) => e.timestamp_ms - t.timestamp_ms))
                    switch (
                        (function (e) {
                            switch (e) {
                                case d.rS:
                                    return "game_start";
                                case d.oy:
                                    return "game_end";
                                case d.Wi:
                                    return "death";
                                case d.Ou:
                                    return "respawn";
                                default:
                                    return "gameplay";
                            }
                        })(t.eventName)
                    ) {
                        case "game_start":
                        case "respawn":
                            i({ in_game: !0, is_dead: !1 }, t.timestamp_ms);
                            break;
                        case "game_end":
                            i({ in_game: !1, is_dead: !1 }, t.timestamp_ms);
                            break;
                        case "death":
                            i({ in_game: !0, is_dead: !0 }, t.timestamp_ms);
                            break;
                        case "gameplay":
                            i({ in_game: !0 }, t.timestamp_ms);
                    }
                return n;
            })(this.gameEvents));
    }
    calculateModifiers(e, t) {
        let n = this.gameStateTimeline,
            i = [],
            r = (t - e) / 1e3 + 1;
        for (let t = 0; t < r; t++) {
            let r = e + 1e3 * t,
                a = E(n, r),
                s = 1;
            a.in_game ? a.is_dead && (s *= d.pw) : (s *= d.ym), i.push({ timestamp_ms: r, modifier: s });
        }
        return i;
    }
    eventScoreMultiplier(e) {
        if (e.eventName !== d.WU) return 1;
        let t = e.additionalData?.[d.kt];
        return "number" != typeof t ? 1 : (0, d.nS)(t);
    }
    getInGameState(e, t) {
        return (0, l.r)(this.gameStateTimeline, e, t, (e) => e.in_game);
    }
    rescoreEvent(e) {
        return null != e.eventName ? d.j3[e.eventName]?.scoreBoost : void 0;
    }
    isInGame(e) {
        return E(this.gameStateTimeline, e).in_game;
    }
    canAnchorReaction(e) {
        return null != e.eventName && c.has(e.eventName);
    }
}
let _ = { applicationIds: [o.m], create: (e) => new u(e) };
function E(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return r()(null != n, "bad timeline!"), n;
}
var A = n(190443),
    h = n(979563);
let I = 1 / 4,
    f = new Set([h.d.Goal, h.d.Save, h.d.EpicSave, h.d.Demolition, h.d.Demolished, h.d.BicycleHit, h.d.FlipReset]);
class p {
    gameAxisScoreThreshold = 0.25;
    gameStateTimeline = [];
    constructor(e) {
        this.gameStateTimeline = (function (e) {
            let t = !1,
                n = [{ inMatch: !1, timestamp_ms: 0 }];
            function i(e, i) {
                e !== t && ((t = e), n.push({ inMatch: t, timestamp_ms: i }));
            }
            for (let t of [...e].sort((e, t) => e.timestamp_ms - t.timestamp_ms))
                switch (t.eventName) {
                    case h.d.MatchStart:
                        i(!0, t.timestamp_ms);
                        break;
                    case h.d.MatchEnd:
                        i(!1, t.timestamp_ms);
                        break;
                    default:
                        null != t.eventName && null != h._[t.eventName] && i(!0, t.timestamp_ms);
                }
            return n;
        })(e);
    }
    calculateModifiers(e, t) {
        let n = [],
            i = (t - e) / 1e3 + 1;
        for (let t = 0; t < i; t++) {
            let i = e + 1e3 * t,
                r = m(this.gameStateTimeline, i);
            n.push({ timestamp_ms: i, modifier: r.inMatch ? 1 : I });
        }
        return n;
    }
    getInGameState(e, t) {
        return (0, l.r)(this.gameStateTimeline, e, t, (e) => e.inMatch);
    }
    rescoreEvent(e) {
        return null != e.eventName ? h._[e.eventName]?.scoreBoost : void 0;
    }
    isInGame(e) {
        return m(this.gameStateTimeline, e).inMatch;
    }
    canAnchorReaction(e) {
        return null != e.eventName && f.has(e.eventName);
    }
}
let T = { applicationIds: [A.e], create: (e) => new p(e) };
function m(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return r()(null != n, "bad timeline!"), n;
}
var g = n(435558);
function S(e, t, n) {
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
function N(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = e.length,
        r = i > 0 ? e[0].length : 0,
        a = e.map((e) =>
            (function (e, t) {
                if (0 === e.length) return 0;
                if (1 === e.length) return e[0];
                let n = [...e].sort((e, t) => e - t),
                    i = ((0, g.clamp)(t, 0, 100) / 100) * (n.length - 1),
                    r = Math.floor(i),
                    a = Math.ceil(i);
                if (r === a) return n[r];
                let s = i - r;
                return n[r] * (1 - s) + n[a] * s;
            })(e, t.noiseFloorPercentile),
        ),
        s = e.map(() => Array(r).fill(!1));
    for (let l = 0; l < r; l++) {
        let r = 0;
        for (let t = 0; t < i; t++) r = Math.max(r, e[t][l]);
        if (0 !== r)
            for (let o = 0; o < i; o++) {
                let i = e[o][l] >= t.noiseFloorMultiplier * a[o],
                    d = i && e[o][l] > 0;
                if (!n) {
                    s[o][l] = d;
                    continue;
                }
                let c = e[o][l] / r;
                s[o][l] = c >= t.minDominanceRatio && i;
            }
    }
    return s;
}
function C(e, t) {
    return e.map((e, n) => e.map((e, i) => (t[n][i] ? e : 0)));
}
function O(e, t, n, i) {
    if (!i.requireAttribution) return { laughter: e, shouting: t };
    let r = N(n, i, !1);
    return { laughter: C(e, r), shouting: C(t, r) };
}
function R(e, t) {
    return e.map((e, n) => e.map((e, i) => e * t[n][i]));
}
function L(e, t) {
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
function y(e, t, n) {
    let i = e[t];
    for (let r = t + 1; r <= n; r++) i = Math.max(i, e[r]);
    return i;
}
function D(e, t, n) {
    return L(
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
            peakV: y(e, n, i),
        };
    });
}
var v = n(696016);
let b = [s.E, _, T];
function M(e, t) {
    if (null == e) return;
    let n = b.find((t) => t.applicationIds.includes(e));
    return n?.create(t);
}
function P(e) {
    return null != e && b.some((t) => t.applicationIds.includes(e));
}
function U(e) {
    r()(null != e.decision, "clip missing .decision");
    let t = e.decision.timestamp - e.length;
    return null != e.editMetadata
        ? { startMs: t + 1e3 * e.editMetadata.start, endMs: t + 1e3 * e.editMetadata.end }
        : { startMs: t, endMs: e.decision.timestamp };
}
function w(e, t, n, i) {
    let s,
        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        { requestedCount: o = 3, preTrimmedSignalsByFilepath: d, debug: c = !1 } = l,
        u = {
            minConsecutiveChunks: 2,
            minDominanceRatio: 0.4,
            noiseFloorMultiplier: 3,
            noiseFloorPercentile: 10,
            requireAttribution: !0,
            rmsScale: 4,
            laughterEventThreshold: 0.5,
            shoutingEventThreshold: 0.35,
            laughterWeight: 1,
            shoutingWeight: 0.7,
            eventChainGapChunks: 2,
            lagPreChunks: 1,
            lagPostChunks: 3,
            gameEventsAsReactionAnchors: !0,
            mainWeight: 1,
            reactionWeight: 0.4,
            coOccurrenceWeight: 0.6,
            normalizeComponents: !0,
            sMainMedian: 0.386,
            sMainIqr: 0.695,
            sReactionMedian: 0.535,
            sReactionIqr: 0.475,
            sCoMedianPerPair: 1,
            sCoIqrPerPair: 1.5,
            soloReactionWeight: 0,
            soloCoOccurrenceWeight: 0,
            gameSquashScale: 1.5,
            audioThreshold: 0,
            mixedThreshold: 0.5,
            ...l.config,
        },
        _ = [],
        E = Object.keys(t.audioModelDataPerUser).length,
        A = [...t.gameEventData].sort((e, t) => e.timestamp_ms - t.timestamp_ms),
        h = M(i, A),
        I = null != h ? A : [],
        f = Number.MAX_VALUE,
        p = -Number.MAX_VALUE;
    for (let e in t.audioModelDataPerUser) {
        let n = t.audioModelDataPerUser[e];
        for (let e of [n.laughterData, n.shoutingData, n.rmsData])
            0 !== e.length && ((f = Math.min(f, e[0].timestamp_ms)), (p = Math.max(p, e[e.length - 1].timestamp_ms)));
    }
    null != h && f <= p && (s = h.calculateModifiers?.(f, p));
    let T = (function (e) {
        if (null == e) return () => 1;
        let t = new Map(e.map((e) => [e.timestamp_ms, e.modifier]));
        return (e) => t.get(1e3 * Math.floor(e / 1e3)) ?? 1;
    })(s);
    function m(e) {
        return h?.eventScoreMultiplier?.(e) ?? 1;
    }
    function b(e) {
        return h?.canAnchorReaction(e) ?? !1;
    }
    for (let i of e) {
        let e;
        r()(null != i.decision, "candidate clip missing .decision");
        let s = i.decision.timestamp - i.length;
        function P(e, n) {
            let a = d?.[i.filepath],
                l = {};
            if (null != a) {
                let t = 1e3 * Math.floor(s / 1e3);
                function o(i) {
                    return G(
                        i.map((e) => ({ ...e, timestamp_ms: e.timestamp_ms + t })),
                        e,
                        n,
                    );
                }
                for (let e in a.audioModelDataPerUser) {
                    let t = a.audioModelDataPerUser[e];
                    l[e] = { laughterData: o(t.laughterData), shoutingData: o(t.shoutingData), rmsData: o(t.rmsData) };
                }
            } else
                for (let i in t.audioModelDataPerUser) {
                    let r = t.audioModelDataPerUser[i];
                    l[i] = {
                        laughterData: G(r.laughterData, e, n),
                        shoutingData: G(r.shoutingData, e, n),
                        rmsData: G(r.rmsData, e, n),
                    };
                }
            let c = (function (e) {
                    let t = Number.MAX_VALUE,
                        n = -Number.MAX_VALUE;
                    for (let i in e) {
                        let r = e[i];
                        for (let e of [r.laughterData, r.shoutingData, r.rmsData])
                            0 !== e.length &&
                                (e[0].timestamp_ms < t && (t = e[0].timestamp_ms),
                                e[e.length - 1].timestamp_ms > n && (n = e[e.length - 1].timestamp_ms));
                    }
                    if (t === Number.MAX_VALUE || n === -Number.MAX_VALUE) return e;
                    r()(t % x == 0 && n % x == 0, "bad timestamps!");
                    let i = (n - t) / x + 1,
                        a = {};
                    for (let n in e) {
                        let r = e[n];
                        a[n] = {
                            laughterData: k(r.laughterData, t, i),
                            shoutingData: k(r.shoutingData, t, i),
                            rmsData: k(r.rmsData, t, i),
                        };
                    }
                    return a;
                })(l),
                u = Object.keys(c),
                _ = [],
                E = [],
                A = [];
            for (let e of u) {
                let t = c[e];
                _.push(t.laughterData.map((e) => e.value)),
                    E.push(t.shoutingData.map((e) => e.value)),
                    A.push(t.rmsData.map((e) => e.value));
            }
            let h = u.length > 0 ? c[u[0]] : void 0;
            return {
                userIds: u,
                pLaughter: _,
                pShouting: E,
                rms: A,
                gridStartMs: h?.laughterData[0]?.timestamp_ms,
                chunkCount: h?.laughterData.length ?? 0,
            };
        }
        let { startMs: l, endMs: o } = U(i),
            { userIds: A, pLaughter: h, pShouting: f, rms: p, gridStartMs: M, chunkCount: w } = P(l, o),
            F = A.indexOf(n),
            V = (0, a.p)(I, l, o),
            B = V.filter(b);
        null != M &&
            w > 0 &&
            B.length > 0 &&
            (e = B.map((e) => Math.max(0, Math.min(w - 1, Math.round((e.timestamp_ms - M) / 1e3)))));
        let H = (function (e, t) {
                let n,
                    { pLaughter: i, pShouting: r, rms: a, main: s, gameEventChunks: l } = e,
                    o = e.participantCount ?? i.length;
                if (0 === i.length)
                    return {
                        audioScore: 0,
                        components: { mainEventScore: 0, reactionScore: 0, coOccurrenceScore: 0 },
                        debug: {
                            pGatedLaughter: [],
                            pGatedShouting: [],
                            intensityLaughter: [],
                            intensityShouting: [],
                            rmsWeighted: [],
                            mainEvents: [],
                            reactionAnchors: [],
                            coContribPerChunk: [],
                        },
                    };
                let d = S(i, t, t.laughterEventThreshold),
                    c = S(r, t, t.shoutingEventThreshold),
                    u = t.requireAttribution ? N(a, t) : void 0,
                    _ = null != u ? C(d, u) : d,
                    E = null != u ? C(c, u) : c,
                    A =
                        0 === t.rmsScale
                            ? a.map((e) => e.map(() => 1))
                            : a.map((e) => e.map((e) => (0, g.clamp)(e * t.rmsScale, 0, 1))),
                    h = R(_, A),
                    I = R(E, A),
                    {
                        mainEventScore: f,
                        anchors: p,
                        events: T,
                    } = (function (e, t, n, i) {
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
                            let c = D(t, o, i);
                            if (0 === c.length) continue;
                            for (let e of (a.push(
                                ...c.map((e) => {
                                    let { tStart: t, tEnd: n } = e;
                                    return { tStart: t, tEnd: n };
                                }),
                            ),
                            c)) {
                                let t = e.tEnd - e.tStart + 1,
                                    i = y(n, e.tStart, e.tEnd) * Math.log1p(t);
                                (null == s || i > s.mag) && (s = { mag: i, window: e });
                            }
                            if (null == s) continue;
                            l += d * s.mag;
                            let { tStart: u, tEnd: _, peakT: E, peakV: A } = s.window;
                            r.push({ emotion: e, peakT: E, peakV: A, sustain: _ - u + 1, tStart: u, tEnd: _ });
                        }
                        return { mainEventScore: l, anchors: L(a, i.eventChainGapChunks), events: r };
                    })({ laughter: _, shouting: E }, { laughter: h, shouting: I }, s, t),
                    m = L(
                        [
                            ...p,
                            ...(t.gameEventsAsReactionAnchors && null != l
                                ? l.map((e) => ({ tStart: e, tEnd: e }))
                                : []),
                        ],
                        t.eventChainGapChunks,
                    ),
                    v = (function (e, t, n, i, r) {
                        if (0 === e.length) return 0;
                        let a = t.length,
                            s = a > 0 ? t[0].length : 0;
                        if (0 === s) return 0;
                        let l = [];
                        for (let o of e) {
                            let e = (0, g.clamp)(o.tStart - r.lagPreChunks, 0, s - 1),
                                d = (0, g.clamp)(o.tEnd + r.lagPostChunks, 0, s - 1),
                                c = 1;
                            for (let r = 0; r < a; r++) {
                                if (r === i) continue;
                                let a = 0;
                                for (let i = e; i <= d; i++) a = Math.max(a, t[r][i], n[r][i]);
                                c *= 1 - a;
                            }
                            l.push(1 - c);
                        }
                        return Math.max(0, ...l);
                    })(m, h, I, s, t),
                    { laughter: b, shouting: M } = O(d, c, a, t),
                    { coOccurrenceScore: P, coContribPerChunk: U } = (function (e, t, n) {
                        let i = e.length,
                            r = i > 0 ? e[0].length : 0,
                            a = Array(r).fill(0),
                            s = 0;
                        for (let l = 0; l < r; l++) {
                            let r = 0;
                            for (let a = 0; a < i; a++)
                                (e[a][l] >= n.laughterEventThreshold || t[a][l] >= n.shoutingEventThreshold) && r++;
                            let o = Math.max(0, r - 1);
                            (a[l] = o), (s += o);
                        }
                        return { coOccurrenceScore: s, coContribPerChunk: a };
                    })(b, M, t),
                    w = f,
                    G = v;
                if (t.normalizeComponents) {
                    (w = (f - t.sMainMedian) / t.sMainIqr), (G = (v - t.sReactionMedian) / t.sReactionIqr);
                    let e = Math.max(1, o - 1);
                    n = (P - t.sCoMedianPerPair * e) / (t.sCoIqrPerPair * e);
                } else n = Math.log1p(P);
                let x = o <= 1,
                    k = x ? t.soloReactionWeight : t.reactionWeight,
                    F = x ? t.soloCoOccurrenceWeight : t.coOccurrenceWeight;
                return {
                    audioScore: t.mainWeight * w + k * G + F * n,
                    components: t.normalizeComponents
                        ? { mainEventScore: w, reactionScore: G, coOccurrenceScore: n }
                        : { mainEventScore: f, reactionScore: v, coOccurrenceScore: P },
                    debug: {
                        pGatedLaughter: _,
                        pGatedShouting: E,
                        intensityLaughter: h,
                        intensityShouting: I,
                        rmsWeighted: A,
                        mainEvents: T,
                        reactionAnchors: m,
                        coContribPerChunk: U,
                    },
                };
            })({ pLaughter: h, pShouting: f, rms: p, main: F, gameEventChunks: e, participantCount: E }, u),
            j = (function (e, t, n) {
                let i = 0;
                for (let r of e) {
                    let e = t(r.timestamp_ms),
                        a = n(r);
                    i += (r.score ?? 0) * e * a;
                }
                return i;
            })(V, T, m),
            W = (0.5 + 1 / (1 + Math.exp(-H.audioScore))) * (1 + Math.tanh(j / u.gameSquashScale)) - 0.5,
            Y = P(s, i.decision.timestamp),
            K = Y.gridStartMs,
            $ =
                null != K
                    ? (function (e, t) {
                          let { pLaughter: n, pShouting: i, rms: r } = e;
                          return 0 === n.length
                              ? []
                              : (function (e, t) {
                                    let n = [];
                                    for (let { emotion: i, matrix: r, threshold: a } of [
                                        {
                                            emotion: "laughter",
                                            matrix: e.laughter,
                                            threshold: t.laughterEventThreshold,
                                        },
                                        {
                                            emotion: "shouting",
                                            matrix: e.shouting,
                                            threshold: t.shoutingEventThreshold,
                                        },
                                    ])
                                        for (let e = 0; e < r.length; e++) {
                                            let s = r[e];
                                            if (0 !== s.length)
                                                for (let { tStart: r, tEnd: l, peakT: o, peakV: d } of D(s, a, t))
                                                    n.push({
                                                        channel: e,
                                                        emotion: i,
                                                        tStart: r,
                                                        tEnd: l,
                                                        peakT: o,
                                                        peakV: d,
                                                    });
                                        }
                                    return n;
                                })(O(S(n, t, t.laughterEventThreshold), S(i, t, t.shoutingEventThreshold), r, t), t);
                      })({ pLaughter: Y.pLaughter, pShouting: Y.pShouting, rms: Y.rms }, u).map((e) => ({
                          type: "laughter" === e.emotion ? v.Gy.LAUGHTER : v.Gy.SHOUTING,
                          userId: Y.userIds[e.channel],
                          startMs: K + 1e3 * e.tStart,
                          endMs: K + (e.tEnd + 1) * 1e3,
                          peakMs: K + 1e3 * e.peakT,
                          peakConfidence: e.peakV,
                      }))
                    : [],
            z = {
                clip: i,
                score: W,
                audioScore: H.audioScore,
                gameEventsScore: j,
                hasAudio: h.length > 0,
                hasGameEvents: V.length > 0,
                audioEvents: $,
            };
        if (c) {
            z.components = { ...H.components, gameEventsScore: j };
            let e = null != M ? (M - l) / 1e3 : 0;
            z.debug = {
                ...H.debug,
                userIds: A,
                tsSec: Array.from({ length: w }, (t, n) => e + n),
                pLaughter: h,
                pShouting: f,
                rms: p,
            };
        }
        _.push(z);
    }
    _.sort((e, t) => t.score - e.score);
    let w = (function (e, t, n, i) {
        function r(t) {
            return [...e].sort((e, n) => t(n) - t(e));
        }
        let a = {
                axis: "mixed",
                ranked: r((e) => e.score),
                eligible: (e) => e.hasAudio && e.hasGameEvents && e.score >= t.mixedThreshold,
                quota: 2,
            },
            s = {
                axis: "audio",
                ranked: r((e) => e.audioScore),
                eligible: (e) => e.hasAudio && e.audioScore > t.audioThreshold,
                quota: n,
            },
            l =
                null != i
                    ? [
                          a,
                          {
                              axis: "game",
                              ranked: r((e) => e.gameEventsScore),
                              eligible: (e) => e.gameEventsScore >= i,
                              quota: 1,
                          },
                      ]
                    : [{ ...a, quota: n }, s],
            o = [],
            d = new Set();
        function c(e) {
            let t = e.ranked.find(
                (t) =>
                    !d.has(t) &&
                    e.eligible(t) &&
                    !(function (e) {
                        let { startMs: t, endMs: n } = U(e.clip);
                        for (let e of o) {
                            let { startMs: i, endMs: r } = U(e.clip);
                            if (Math.min(n, r) - Math.max(t, i) >= 5e3) return !0;
                        }
                        return !1;
                    })(t),
            );
            return null != t && ((t.selectedVia = e.axis), o.push(t), d.add(t), !0);
        }
        let u = l.map((e) => e.quota),
            _ = !0;
        for (; o.length < n && _; ) {
            _ = !1;
            for (let e = 0; e < l.length && o.length !== n; e++) !(u[e] <= 0) && c(l[e]) && (u[e]--, (_ = !0));
        }
        for (_ = !0; o.length < n && _; )
            for (let e of ((_ = !1), l)) {
                if (o.length === n) break;
                c(e) && (_ = !0);
            }
        return o;
    })(_, u, o, h?.gameAxisScoreThreshold);
    return { allClipsRanked: _, selected: w };
}
function G(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
let x = 1e3;
function k(e, t, n) {
    let i = [],
        a = 0;
    for (let s = 0; s < n; s++) {
        let n = t + x * s,
            l = e[a];
        null != l && l.timestamp_ms === n
            ? (i.push({ ...l }), a++)
            : (null != l && r()(l.timestamp_ms % x == 0, `bad timestamp! ${l.timestamp_ms}`),
              i.push({ value: 0, timestamp_ms: n }));
    }
    return r()(i.length === n, "bad track!"), i;
}
