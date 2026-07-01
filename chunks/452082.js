"use strict";
n.d(t, { A: () => K, i: () => W }), n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(459838),
    a = n(451988),
    o = n(439372),
    l = n(77729),
    u = n(608960),
    c = n(952818),
    d = n(209932),
    _ = n(495544),
    h = n(309010),
    f = n(287809),
    p = n(274372);
class E {
    timeline = [];
    timelineLength;
    constructor(e = 3e5) {
        this.timelineLength = e;
    }
    clear() {
        this.timeline.length = 0;
    }
    updateLength(e) {
        (this.timelineLength = e), this.cull();
    }
    add(e) {
        if (0 === this.timeline.length || this.timeline[this.timeline.length - 1].timestamp <= e.timestamp) {
            this.timeline.push(e), this.cull();
            return;
        }
        let t = this.timeline.length;
        for (let n = this.timeline.length - 1; n >= 0; n--)
            if (this.timeline[n].timestamp <= e.timestamp) {
                t = n + 1;
                break;
            }
        t === this.timeline.length && this.timeline[0].timestamp > e.timestamp && (t = 0),
            this.timeline.splice(t, 0, e),
            this.cull();
    }
    read(e, t) {
        return this.cull(), this.timeline.filter((n) => n.timestamp >= e && n.timestamp <= t);
    }
    cull() {
        let e = Date.now() - this.timelineLength;
        for (; this.timeline.length > 0 && this.timeline[0].timestamp < e; ) this.timeline.shift();
    }
}
var m = n(372684),
    g = n(572164);
function A() {
    return { audioModelDataPerUser: {}, gameEventData: [] };
}
function I(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
n(775443);
var T = n(717247);
class S {
    gameEvents;
    gameAxisScoreThreshold = 0.35;
    gameStateTimeline = [];
    constructor(e) {
        (this.gameEvents = e),
            (this.gameStateTimeline = (function (e) {
                let t = { in_proper_game: !1, in_game_guess: !1, spectating: !1, bomb_planted: !1 },
                    n = [{ ...t, timestamp_ms: 0 }],
                    i = null,
                    r = null;
                function s(e, i) {
                    let r = { ...t, ...e };
                    (r.in_proper_game !== t.in_proper_game ||
                        r.in_game_guess !== t.in_game_guess ||
                        r.spectating !== t.spectating ||
                        r.bomb_planted !== t.bomb_planted) &&
                        (Object.assign(t, r), n.push({ ...r, timestamp_ms: i }));
                }
                let a = (e) => {
                    for (;;) {
                        let n = 1 / 0,
                            a = null;
                        if (t.in_proper_game && null != i) {
                            let e = i + 175e3;
                            e < n && ((n = e), (a = "round"));
                        }
                        if (t.in_game_guess && null != r) {
                            let e = r + 135e3;
                            e <= n && ((n = e), (a = "out_of_game"));
                        }
                        if (null == a || n > e) break;
                        "round" === a
                            ? s({ in_proper_game: !1, bomb_planted: !1, spectating: !1 }, n)
                            : s({ in_proper_game: !1, in_game_guess: !1, bomb_planted: !1, spectating: !1 }, n);
                    }
                };
                for (let n of [...e].sort((e, t) => e.timestamp_ms - t.timestamp_ms)) {
                    switch ((a(n.timestamp_ms), C(n.name))) {
                        case "round":
                            s(
                                { in_proper_game: !0, in_game_guess: !0, bomb_planted: !1, spectating: !1 },
                                n.timestamp_ms,
                            ),
                                (i = Math.max(i ?? n.timestamp_ms, n.timestamp_ms));
                            break;
                        case "bomb_plant":
                            s({ in_proper_game: !0, in_game_guess: !0, bomb_planted: !0 }, n.timestamp_ms);
                            break;
                        case "bomb_end":
                            s({ in_proper_game: !0, in_game_guess: !0, bomb_planted: !1 }, n.timestamp_ms);
                            break;
                        case "death":
                            s({ in_game_guess: !0, spectating: t.in_proper_game || t.spectating }, n.timestamp_ms);
                            break;
                        case "kill":
                            s({ in_game_guess: !0 }, n.timestamp_ms);
                    }
                    r = Math.max(r ?? n.timestamp_ms, n.timestamp_ms);
                }
                return a(1 / 0), n;
            })(this.gameEvents));
    }
    calculateModifiers(e, t) {
        let n = this.gameStateTimeline,
            i = [],
            s = null,
            a = null,
            o = (t - e) / 1e3 + 1;
        for (let t = 0; t < o; t++) {
            let o = e + 1e3 * t,
                l = (function (e, t) {
                    let n = e.findLast((e) => e.timestamp_ms <= t);
                    return r()(n, "bad timeline!"), n;
                })(n, o);
            (null != s ? I(this.gameEvents, s, o) : []).some((e) => e.name === T.Z8) && (a = o);
            let u = 1;
            l.in_game_guess
                ? l.spectating && (null == a || o - a > 15e3)
                    ? (u /= 3)
                    : l.bomb_planted && (u *= 2)
                : (u /= 4),
                i.push({ timestamp_ms: o, modifier: u }),
                (s = o);
        }
        return i;
    }
    rescoreEvent(e) {
        return null != e.name ? T.hz[e.name]?.scoreBoost : void 0;
    }
    canAnchorReaction(e) {
        let t = C(e.name);
        return "kill" === t || "death" === t || "bomb_end" === t;
    }
}
let y = { applicationIds: ["1158877933042143272", "356875057940791296"], create: (e) => new S(e) };
function C(e) {
    return null == e
        ? "other"
        : (0, T.MK)(e)
          ? "round"
          : e === T.BC
            ? "bomb_plant"
            : e === T.cU || e === T.hK
              ? "bomb_end"
              : e === T.Z8
                ? "death"
                : T.KO.has(e)
                  ? "kill"
                  : "other";
}
var N = n(876474),
    v = n(801344);
let R = new Set([v.WU, v.Wi, v.QK, v.Bs, v.Bt, v.p5, v.d4, v.oB]);
class O {
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
                                case v.rS:
                                    return "game_start";
                                case v.oy:
                                    return "game_end";
                                case v.Wi:
                                    return "death";
                                case v.Ou:
                                    return "respawn";
                                default:
                                    return "gameplay";
                            }
                        })(t.name)
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
            s = (t - e) / 1e3 + 1;
        for (let t = 0; t < s; t++) {
            let s = e + 1e3 * t,
                a = (function (e, t) {
                    let n = e.findLast((e) => e.timestamp_ms <= t);
                    return r()(n, "bad timeline!"), n;
                })(n, s),
                o = 1;
            a.in_game ? a.is_dead && (o *= v.pw) : (o *= v.ym), i.push({ timestamp_ms: s, modifier: o });
        }
        return i;
    }
    eventScoreMultiplier(e) {
        if (e.name !== v.WU) return 1;
        let t = e.additionalData?.[v.kt];
        return "number" != typeof t ? 1 : (0, v.nS)(t);
    }
    rescoreEvent(e) {
        return null != e.name ? v.j3[e.name]?.scoreBoost : void 0;
    }
    canAnchorReaction(e) {
        return null != e.name && R.has(e.name);
    }
}
let b = { applicationIds: [N.m], create: (e) => new O(e) };
var D = n(735438);
function L(e, t, n) {
    return e.map((e) => {
        let i = Array(e.length).fill(!1),
            r = -1;
        for (let s = 0; s <= e.length; s++) {
            let a = s < e.length && e[s] >= n;
            if ((a && -1 === r && (r = s), !a && -1 !== r)) {
                if (s - r >= t.minConsecutiveChunks) for (let e = r; e < s; e++) i[e] = !0;
                r = -1;
            }
        }
        return e.map((e, t) => (i[t] ? e : 0));
    });
}
function w(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = e.length,
        r = i > 0 ? e[0].length : 0,
        s = e.map((e) =>
            (function (e, t) {
                if (0 === e.length) return 0;
                if (1 === e.length) return e[0];
                let n = [...e].sort((e, t) => e - t),
                    i = ((0, D.clamp)(t, 0, 100) / 100) * (n.length - 1),
                    r = Math.floor(i),
                    s = Math.ceil(i);
                if (r === s) return n[r];
                let a = i - r;
                return n[r] * (1 - a) + n[s] * a;
            })(e, t.noiseFloorPercentile),
        ),
        a = e.map(() => Array(r).fill(!1));
    for (let o = 0; o < r; o++) {
        let r = 0;
        for (let t = 0; t < i; t++) r = Math.max(r, e[t][o]);
        if (0 !== r)
            for (let l = 0; l < i; l++) {
                let i = e[l][o] >= t.noiseFloorMultiplier * s[l],
                    u = i && e[l][o] > 0;
                if (!n) {
                    a[l][o] = u;
                    continue;
                }
                let c = e[l][o] / r;
                a[l][o] = c >= t.minDominanceRatio && i;
            }
    }
    return a;
}
function M(e, t) {
    return e.map((e, n) => e.map((e, i) => (t[n][i] ? e : 0)));
}
function P(e, t, n, i) {
    if (!i.requireAttribution) return { laughter: e, shouting: t };
    let r = w(n, i, !1);
    return { laughter: M(e, r), shouting: M(t, r) };
}
function x(e, t) {
    return e.map((e, n) => e.map((e, i) => e * t[n][i]));
}
function k(e, t) {
    if (0 === e.length) return [];
    let n = [...e].sort((e, t) => e.tStart - t.tStart),
        i = [{ ...n[0] }];
    for (let e = 1; e < n.length; e++) {
        let r = i[i.length - 1],
            s = n[e];
        s.tStart - r.tEnd <= t ? (r.tEnd = Math.max(r.tEnd, s.tEnd)) : i.push({ ...s });
    }
    return i;
}
function U(e, t, n) {
    let i = e[t];
    for (let r = t + 1; r <= n; r++) i = Math.max(i, e[r]);
    return i;
}
function G(e, t, n) {
    return k(
        (function (e, t) {
            let n = [],
                i = -1;
            for (let r = 0; r <= e.length; r++) {
                let s = r < e.length && e[r] >= t;
                s && -1 === i && (i = r), s || -1 === i || (n.push({ tStart: i, tEnd: r - 1 }), (i = -1));
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
            peakV: U(e, n, i),
        };
    });
}
let F = [y, b];
function V(e) {
    r()(null != e.decision, "clip missing .decision");
    let t = e.decision.timestamp - e.length;
    return null != e.editMetadata
        ? { startMs: t + 1e3 * e.editMetadata.start, endMs: t + 1e3 * e.editMetadata.end }
        : { startMs: t, endMs: e.decision.timestamp };
}
function B(e, t, n, i) {
    let s,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        { requestedCount: o = 3, preTrimmedSignalsByFilepath: l, debug: u = !1 } = a,
        c = {
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
            sMainMedian: 0.891,
            sMainIqr: 0.739,
            sReactionMedian: 0.825,
            sReactionIqr: 0.426,
            sCoMedianPerPair: 1.2,
            sCoIqrPerPair: 1.2,
            soloReactionWeight: 0,
            soloCoOccurrenceWeight: 0,
            gameSquashScale: 1.5,
            audioThreshold: 0,
            mixedThreshold: 0.5,
            ...a.config,
        },
        d = [],
        _ = Object.keys(t.audioModelDataPerUser).length,
        h = [...t.gameEventData].sort((e, t) => e.timestamp_ms - t.timestamp_ms),
        f = (function (e, t) {
            if (null == e) return;
            let n = F.find((t) => t.applicationIds.includes(e));
            return n?.create(t);
        })(i, h),
        p = null != f ? h : [],
        E = Number.MAX_VALUE,
        g = -Number.MAX_VALUE;
    for (let e in t.audioModelDataPerUser) {
        let n = t.audioModelDataPerUser[e];
        for (let e of [n.laughterData, n.shoutingData, n.rmsData])
            0 !== e.length && ((E = Math.min(E, e[0].timestamp_ms)), (g = Math.max(g, e[e.length - 1].timestamp_ms)));
    }
    null != f && E <= g && (s = f.calculateModifiers?.(E, g));
    let A = (function (e) {
        if (null == e) return () => 1;
        let t = new Map(e.map((e) => [e.timestamp_ms, e.modifier]));
        return (e) => t.get(1e3 * Math.floor(e / 1e3)) ?? 1;
    })(s);
    function T(e) {
        return f?.eventScoreMultiplier?.(e) ?? 1;
    }
    function S(e) {
        return f?.canAnchorReaction(e) ?? !1;
    }
    for (let i of e) {
        let e;
        r()(null != i.decision, "candidate clip missing .decision");
        let s = i.decision.timestamp - i.length;
        function y(e, n) {
            let a = l?.[i.filepath],
                o = {};
            if (null != a) {
                let t = 1e3 * Math.floor(s / 1e3),
                    i = (i) =>
                        j(
                            i.map((e) => ({ ...e, timestamp_ms: e.timestamp_ms + t })),
                            e,
                            n,
                        );
                for (let e in a.audioModelDataPerUser) {
                    let t = a.audioModelDataPerUser[e];
                    o[e] = { laughterData: i(t.laughterData), shoutingData: i(t.shoutingData), rmsData: i(t.rmsData) };
                }
            } else
                for (let i in t.audioModelDataPerUser) {
                    let r = t.audioModelDataPerUser[i];
                    o[i] = {
                        laughterData: j(r.laughterData, e, n),
                        shoutingData: j(r.shoutingData, e, n),
                        rmsData: j(r.rmsData, e, n),
                    };
                }
            let u = (function (e) {
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
                    function i(e, t, n) {
                        let i = [],
                            s = 0;
                        for (let a = 0; a < n; a++) {
                            let n = t + 1e3 * a,
                                o = e[s];
                            null != o && o.timestamp_ms === n
                                ? (i.push({ ...o }), s++)
                                : (null != o && r()(o.timestamp_ms % 1e3 == 0, `bad timestamp! ${o.timestamp_ms}`),
                                  i.push({ value: 0, timestamp_ms: n }));
                        }
                        return r()(i.length === n, "bad track!"), i;
                    }
                    r()(t % 1e3 == 0 && n % 1e3 == 0, "bad timestamps!");
                    let s = (n - t) / 1e3 + 1,
                        a = {};
                    for (let n in e) {
                        let r = e[n];
                        a[n] = {
                            laughterData: i(r.laughterData, t, s),
                            shoutingData: i(r.shoutingData, t, s),
                            rmsData: i(r.rmsData, t, s),
                        };
                    }
                    return a;
                })(o),
                c = Object.keys(u),
                d = [],
                _ = [],
                h = [];
            for (let e of c) {
                let t = u[e];
                d.push(t.laughterData.map((e) => e.value)),
                    _.push(t.shoutingData.map((e) => e.value)),
                    h.push(t.rmsData.map((e) => e.value));
            }
            let f = c.length > 0 ? u[c[0]] : void 0;
            return {
                userIds: c,
                pLaughter: d,
                pShouting: _,
                rms: h,
                gridStartMs: f?.laughterData[0]?.timestamp_ms,
                chunkCount: f?.laughterData.length ?? 0,
            };
        }
        let { startMs: a, endMs: o } = V(i),
            { userIds: h, pLaughter: f, pShouting: E, rms: g, gridStartMs: C, chunkCount: N } = y(a, o),
            v = h.indexOf(n),
            R = I(p, a, o),
            O = R.filter(S);
        null != C &&
            N > 0 &&
            O.length > 0 &&
            (e = O.map((e) => Math.max(0, Math.min(N - 1, Math.round((e.timestamp_ms - C) / 1e3)))));
        let b = (function (e, t) {
                let n,
                    { pLaughter: i, pShouting: r, rms: s, main: a, gameEventChunks: o } = e,
                    l = e.participantCount ?? i.length;
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
                let u = L(i, t, t.laughterEventThreshold),
                    c = L(r, t, t.shoutingEventThreshold),
                    d = t.requireAttribution ? w(s, t) : void 0,
                    _ = null != d ? M(u, d) : u,
                    h = null != d ? M(c, d) : c,
                    f =
                        0 === t.rmsScale
                            ? s.map((e) => e.map(() => 1))
                            : s.map((e) => e.map((e) => (0, D.clamp)(e * t.rmsScale, 0, 1))),
                    p = x(_, f),
                    E = x(h, f),
                    {
                        mainEventScore: m,
                        anchors: g,
                        events: A,
                    } = (function (e, t, n, i) {
                        if (n < 0 || n >= e.laughter.length) return { mainEventScore: 0, anchors: [], events: [] };
                        let r = [],
                            s = [],
                            a = [
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
                            o = 0;
                        for (let { emotion: e, gated: t, intensity: n, threshold: l, weight: u } of a) {
                            let a;
                            if (0 === t.length) continue;
                            let c = G(t, l, i);
                            if (0 === c.length) continue;
                            for (let e of (s.push(
                                ...c.map((e) => {
                                    let { tStart: t, tEnd: n } = e;
                                    return { tStart: t, tEnd: n };
                                }),
                            ),
                            c)) {
                                let t = e.tEnd - e.tStart + 1,
                                    i = U(n, e.tStart, e.tEnd) * Math.log1p(t);
                                (null == a || i > a.mag) && (a = { mag: i, window: e });
                            }
                            if (null == a) continue;
                            o += u * a.mag;
                            let { tStart: d, tEnd: _, peakT: h, peakV: f } = a.window;
                            r.push({ emotion: e, peakT: h, peakV: f, sustain: _ - d + 1, tStart: d, tEnd: _ });
                        }
                        return { mainEventScore: o, anchors: k(s, i.eventChainGapChunks), events: r };
                    })({ laughter: _, shouting: h }, { laughter: p, shouting: E }, a, t),
                    I = k(
                        [
                            ...g,
                            ...(t.gameEventsAsReactionAnchors && null != o
                                ? o.map((e) => ({ tStart: e, tEnd: e }))
                                : []),
                        ],
                        t.eventChainGapChunks,
                    ),
                    T = (function (e, t, n, i, r) {
                        if (0 === e.length) return 0;
                        let s = t.length,
                            a = s > 0 ? t[0].length : 0;
                        if (0 === a) return 0;
                        let o = [];
                        for (let l of e) {
                            let e = (0, D.clamp)(l.tStart - r.lagPreChunks, 0, a - 1),
                                u = (0, D.clamp)(l.tEnd + r.lagPostChunks, 0, a - 1),
                                c = 1;
                            for (let r = 0; r < s; r++) {
                                if (r === i) continue;
                                let s = 0;
                                for (let i = e; i <= u; i++) s = Math.max(s, t[r][i], n[r][i]);
                                c *= 1 - s;
                            }
                            o.push(1 - c);
                        }
                        return Math.max(0, ...o);
                    })(I, p, E, a, t),
                    { laughter: S, shouting: y } = P(u, c, s, t),
                    { coOccurrenceScore: C, coContribPerChunk: N } = (function (e, t, n) {
                        let i = e.length,
                            r = i > 0 ? e[0].length : 0,
                            s = Array(r).fill(0),
                            a = 0;
                        for (let o = 0; o < r; o++) {
                            let r = 0;
                            for (let s = 0; s < i; s++)
                                (e[s][o] >= n.laughterEventThreshold || t[s][o] >= n.shoutingEventThreshold) && r++;
                            let l = Math.max(0, r - 1);
                            (s[o] = l), (a += l);
                        }
                        return { coOccurrenceScore: a, coContribPerChunk: s };
                    })(S, y, t),
                    v = m,
                    R = T;
                if (t.normalizeComponents) {
                    (v = (m - t.sMainMedian) / t.sMainIqr), (R = (T - t.sReactionMedian) / t.sReactionIqr);
                    let e = Math.max(1, l - 1);
                    n = (C - t.sCoMedianPerPair * e) / (t.sCoIqrPerPair * e);
                } else n = Math.log1p(C);
                let O = l <= 1,
                    b = O ? t.soloReactionWeight : t.reactionWeight,
                    F = O ? t.soloCoOccurrenceWeight : t.coOccurrenceWeight;
                return {
                    audioScore: t.mainWeight * v + b * R + F * n,
                    components: t.normalizeComponents
                        ? { mainEventScore: v, reactionScore: R, coOccurrenceScore: n }
                        : { mainEventScore: m, reactionScore: T, coOccurrenceScore: C },
                    debug: {
                        pGatedLaughter: _,
                        pGatedShouting: h,
                        intensityLaughter: p,
                        intensityShouting: E,
                        rmsWeighted: f,
                        mainEvents: A,
                        reactionAnchors: I,
                        coContribPerChunk: N,
                    },
                };
            })({ pLaughter: f, pShouting: E, rms: g, main: v, gameEventChunks: e, participantCount: _ }, c),
            F = (function (e, t, n) {
                let i = 0;
                for (let r of e) {
                    let e = t(r.timestamp_ms),
                        s = n(r);
                    i += r.score * e * s;
                }
                return i;
            })(R, A, T),
            B = (0.5 + 1 / (1 + Math.exp(-b.audioScore))) * (1 + Math.tanh(F / c.gameSquashScale)) - 0.5,
            H = y(s, i.decision.timestamp),
            Y = H.gridStartMs,
            W =
                null != Y
                    ? (function (e, t) {
                          let { pLaughter: n, pShouting: i, rms: r } = e;
                          return 0 === n.length
                              ? []
                              : (function (e, t) {
                                    let n = [];
                                    for (let { emotion: i, matrix: r, threshold: s } of [
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
                                            let a = r[e];
                                            if (0 !== a.length)
                                                for (let { tStart: r, tEnd: o, peakT: l, peakV: u } of G(a, s, t))
                                                    n.push({
                                                        channel: e,
                                                        emotion: i,
                                                        tStart: r,
                                                        tEnd: o,
                                                        peakT: l,
                                                        peakV: u,
                                                    });
                                        }
                                    return n;
                                })(P(L(n, t, t.laughterEventThreshold), L(i, t, t.shoutingEventThreshold), r, t), t);
                      })({ pLaughter: H.pLaughter, pShouting: H.pShouting, rms: H.rms }, c).map((e) => ({
                          type: "laughter" === e.emotion ? m.Gy.LAUGHTER : m.Gy.SHOUTING,
                          userId: H.userIds[e.channel],
                          startMs: Y + 1e3 * e.tStart,
                          endMs: Y + (e.tEnd + 1) * 1e3,
                          peakMs: Y + 1e3 * e.peakT,
                          peakConfidence: e.peakV,
                      }))
                    : [],
            K = {
                clip: i,
                score: B,
                audioScore: b.audioScore,
                gameEventsScore: F,
                hasAudio: f.length > 0,
                hasGameEvents: R.length > 0,
                audioEvents: W,
            };
        if (u) {
            K.components = { ...b.components, gameEventsScore: F };
            let e = null != C ? (C - a) / 1e3 : 0;
            K.debug = {
                ...b.debug,
                userIds: h,
                tsSec: Array.from({ length: N }, (t, n) => e + n),
                pLaughter: f,
                pShouting: E,
                rms: g,
            };
        }
        d.push(K);
    }
    d.sort((e, t) => t.score - e.score);
    let C = (function (e, t, n, i) {
        function r(t) {
            return [...e].sort((e, n) => t(n) - t(e));
        }
        let s = {
                axis: "mixed",
                ranked: r((e) => e.score),
                eligible: (e) => e.hasAudio && e.hasGameEvents && e.score >= t.mixedThreshold,
                quota: 2,
            },
            a = {
                axis: "audio",
                ranked: r((e) => e.audioScore),
                eligible: (e) => e.hasAudio && e.audioScore > t.audioThreshold,
                quota: n,
            },
            o =
                null != i
                    ? [
                          s,
                          {
                              axis: "game",
                              ranked: r((e) => e.gameEventsScore),
                              eligible: (e) => e.gameEventsScore >= i,
                              quota: 1,
                          },
                      ]
                    : [{ ...s, quota: n }, a],
            l = [],
            u = new Set(),
            c = (e) => {
                let t = e.ranked.find(
                    (t) =>
                        !u.has(t) &&
                        e.eligible(t) &&
                        !((e) => {
                            let { startMs: t, endMs: n } = V(e.clip);
                            for (let e of l) {
                                let { startMs: i, endMs: r } = V(e.clip);
                                if (Math.min(n, r) - Math.max(t, i) >= 5e3) return !0;
                            }
                            return !1;
                        })(t),
                );
                return null != t && ((t.selectedVia = e.axis), l.push(t), u.add(t), !0);
            },
            d = o.map((e) => e.quota),
            _ = !0;
        for (; l.length < n && _; ) {
            _ = !1;
            for (let e = 0; e < o.length && l.length !== n; e++) !(d[e] <= 0) && c(o[e]) && (d[e]--, (_ = !0));
        }
        for (_ = !0; l.length < n && _; )
            for (let e of ((_ = !1), o)) {
                if (l.length === n) break;
                c(e) && (_ = !0);
            }
        return l;
    })(d, c, o, f?.gameAxisScoreThreshold);
    return { allClipsRanked: d, selected: C };
}
function j(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
var H = n(430795),
    Y = n(696016);
class W extends o.A {
    timeline;
    scheduledClips = [];
    decisionSignals = A();
    sessionEndTimeout = new a.Ep();
    currentSessionGameKey = null;
    pendingSessionGameKey = null;
    sessionTransition = Promise.resolve();
    constructor() {
        super(), (this.timeline = new E(Math.max(p.Ay.getSettings().clipsLength, 6e4)));
    }
    actions = {
        CLIPS_SIGNAL_CREATED: (e) => this.handleClipsSignalCreated(e.signal, e.timestamp),
        CLIPS_ML_DETECTION: (e) => this.handleMlDetection(e.detections),
        SPEAKING: (e) => this.handleSpeaking(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_START: (e) => this.handleSoundboardPlayStart(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_END: (e) => this.handleSoundboardPlayEnd(e),
        RUNNING_GAMES_CHANGE: () => this.handleRunningGamesChange(),
        VOICE_CHANNEL_SELECT: () => this.handleVoiceChannelSelect(),
        CLIPS_SETTINGS_UPDATE: () => this.handleSettingsUpdate(),
    };
    handleClipsSignalCreated(e, t) {
        this.isSignalEnabled(e.type) && this.process(e, t);
    }
    handleMlDetection(e) {
        for (let t of e) {
            let e = this.decisionSignals.audioModelDataPerUser[t.user_id];
            for (let n of (null == e &&
                ((e = { laughterData: [], shoutingData: [], rmsData: [] }),
                (this.decisionSignals.audioModelDataPerUser[t.user_id] = e)),
            t.data_points))
                "laughter" === n.label
                    ? (e.laughterData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence }),
                      n.confidence > 0.5 &&
                          this.process(
                              { type: m.Gy.LAUGHTER, userId: t.user_id, confidence: n.confidence },
                              n.timestamp_ms,
                          ))
                    : "shouting" === n.label
                      ? (e.shoutingData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence }),
                        n.confidence > 0.35 &&
                            this.process(
                                { type: m.Gy.SHOUTING, userId: t.user_id, confidence: n.confidence },
                                n.timestamp_ms,
                            ))
                      : "rms" === n.label && e.rmsData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence });
        }
    }
    handleSpeaking(e) {
        if (!(0, g.TD)() || e.context !== s.x.DEFAULT) return;
        let t = p.Ay.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === _.default.getId() || t) &&
            this.process({ type: m.Gy.SPEAKING, speakingFlags: e.speakingFlags, userId: e.userId });
    }
    handleSoundboardPlayStart(e) {
        if (!(0, g.TD)()) return;
        let t = d.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = u.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: m.Gy.SOUNDBOARD,
            playing: !0,
            soundboardId: e.soundId,
            emojiId: n?.id,
            emojiAnimated: n?.animated,
            emojiName: n?.name ?? t.emojiName,
            name: t.name,
            userId: e.userId,
        });
    }
    handleSoundboardPlayEnd(e) {
        if (!(0, g.TD)()) return;
        let t = d.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = u.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: m.Gy.SOUNDBOARD,
            playing: !1,
            soundboardId: e.soundId,
            emojiId: n?.id,
            emojiAnimated: n?.animated,
            emojiName: n?.name,
            name: t.name,
            userId: e.userId,
        });
    }
    isSignalEnabled(e) {
        switch (e) {
            case m.Gy.DISTRIBUTED:
                return p.Ay.getSettings().clipSignals.enableDistributedSignals;
            case m.Gy.GAME_EVENT:
                return p.Ay.getSettings().clipSignals.enableGameSignals;
            default:
                return !0;
        }
    }
    calculateAutoclipRequest(e) {
        let t = e - 3e4,
            n = Math.round(t + 15e3),
            i = Math.round(3e4);
        return { startMs: n - i, endMs: n + i, trimStartMs: t, trimEndMs: e };
    }
    adjustTrimForRms(e) {
        let { startMs: t, endMs: n } = e,
            { trimStartMs: i, trimEndMs: s } = e,
            a = new Map();
        for (let e of Object.values(this.decisionSignals.audioModelDataPerUser))
            for (let i of j(e.rmsData, t, n)) {
                r()(i.timestamp_ms % 1e3 == 0, "bad rms data");
                let e = a.get(i.timestamp_ms) ?? 0;
                a.set(i.timestamp_ms, e + i.value);
            }
        function o(e, t, n) {
            let i = null,
                r = Number.MAX_VALUE;
            for (let s = e; s <= t; s += 1e3) {
                let e = a.get(s) ?? 0;
                ((n && e < r) || (!n && e <= r)) && ((r = e), (i = s), !n && e < 0.001 && (i = Math.min(i + 2e3, t)));
            }
            return i;
        }
        let l = I(this.decisionSignals.gameEventData, i, s);
        {
            let e = l.length > 0 ? Math.min(...l.map((e) => e.timestamp_ms)) : null,
                t = i + 5e3;
            null != e && (t = Math.min(t, e - 3e3)), (i = o(1e3 * Math.floor((i - 5e3) / 1e3), t, !1) ?? i);
        }
        {
            let e = l.length > 0 ? Math.max(...l.map((e) => e.timestamp_ms)) : null,
                t = s - 5e3;
            null != e && (t = Math.max(t, e + 3e3)), (s = o(1e3 * Math.ceil(t / 1e3), s + 5e3, !0) ?? s);
        }
        return (
            (i = Math.max(i, t)) >= (s = Math.min(s, n)) && ((i = e.startMs), (s = e.endMs)),
            { startMs: t, endMs: n, trimStartMs: i, trimEndMs: s }
        );
    }
    process(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        switch ((this.timeline.add({ signal: e, timestamp: t }), e.type)) {
            case m.Gy.MANUAL:
            case m.Gy.DISTRIBUTED:
                this.scheduleClip(e);
                break;
            case m.Gy.SHOUTING:
            case m.Gy.LAUGHTER:
            case m.Gy.GAME_EVENT: {
                let n = 0;
                if (e.type === m.Gy.GAME_EVENT) {
                    if (
                        (this.decisionSignals.gameEventData.push({
                            timestamp_ms: t,
                            score: e.score ?? 0,
                            name: e.eventName ?? e.eventIconTag,
                            additionalData: e.additionalData,
                        }),
                        1 !== e.importance)
                    )
                        break;
                    n = Math.max(Date.now(), t + 1e4);
                } else n = Date.now() + 1e4;
                if (
                    this.scheduledClips.some(
                        (e) =>
                            (e.signal.type === m.Gy.GAME_EVENT ||
                                e.signal.type === m.Gy.LAUGHTER ||
                                e.signal.type === m.Gy.SHOUTING) &&
                            t >= e.request.trimStartMs &&
                            t <= e.request.trimEndMs,
                    )
                ) {
                    Y.nx.info(
                        `decider: suppressing ${e.type} clip \u{2014} timestamp ${t} falls within an existing scheduled candidate's trimmed range`,
                    );
                    break;
                }
                this.scheduleClip(e, this.calculateAutoclipRequest(n), !0, !0);
            }
        }
    }
    clear() {
        this.enqueueSessionTransition("clear", () => this.clearAsync());
    }
    enqueueSessionTransition(e, t) {
        this.sessionTransition = this.sessionTransition
            .catch(() => {})
            .then(t)
            .catch((t) => Y.nx.error(`decider: ${e} failed`, t));
    }
    async clearAsync() {
        Y.nx.info(
            `decider: clear() called \u{2014} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${p.Ay.getCurrentClipsSession()?.id} pendingSessionGameKey=${this.pendingSessionGameKey} candidates=${p.Ay.getClipCandidates().length}`,
        ),
            this.unscheduleClip(),
            this.sessionEndTimeout.stop(),
            await this.processClipCandidates(),
            (this.currentSessionGameKey = null),
            (this.pendingSessionGameKey = null),
            await (0, H.YV)(),
            this.timeline.clear();
    }
    unscheduleClip() {
        for (let e of this.scheduledClips) e.timeout.stop();
        this.scheduledClips = [];
    }
    canScheduleClipCandidate(e) {
        let t = p.Ay.getCurrentClipsSession();
        if (null == t || c.Ay.getVisibleGame()?.isLauncher === !0) return !1;
        if (null != h.A.getVoiceChannelId()) return !0;
        let n = f.default.getCurrentUser(),
            i = n?.isStaff() === !0 || n?.isStaffPersonal() === !0,
            r = null != t.gameId && y.applicationIds.includes(t.gameId);
        return e.type === m.Gy.GAME_EVENT && i && r;
    }
    scheduleClip(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = p.Ay.getCurrentClipsSession()?.id;
        if (n && !this.canScheduleClipCandidate(e)) return;
        let s = Date.now(),
            o = t?.endMs != null ? t.endMs : s,
            l = t?.startMs != null ? t.startMs : o - Number(p.Ay.getSettings().clipsLength),
            u = {
                startMs: l,
                endMs: o,
                trimStartMs: t?.trimStartMs != null ? t.trimStartMs : l,
                trimEndMs: t?.trimEndMs != null ? t.trimEndMs : o,
            };
        Y.nx.info(`decider: scheduleClip signal=${e.type}, request=${JSON.stringify(t)}`);
        let c = { timeout: new a.Ep(), request: u, signal: e };
        this.scheduledClips.push(c),
            c.timeout.start(o > s ? o - s : 0, async () => {
                try {
                    let t = i ? this.adjustTrimForRms(u) : u;
                    Y.nx.info(
                        `decider: scheduled timeout fired \u{2014} saving clip (signal=${e.type}, finalRequest=${JSON.stringify(t)})`,
                    ),
                        await (0, H.yd)({
                            clipMethod: e.type === m.Gy.MANUAL ? "manual" : "auto",
                            request: t,
                            timeline: [...this.timeline.read(t.startMs, t.endMs)],
                            decision: { signal: e, timestamp: Date.now() },
                            isCandidate: n,
                            gameSessionId: r ?? void 0,
                        });
                } finally {
                    let e = this.scheduledClips.indexOf(c);
                    -1 !== e && this.scheduledClips.splice(e, 1);
                }
            });
    }
    handleVoiceChannelSelect() {
        this.enqueueSessionTransition("handleVoiceChannelSelect", () => this.handleVoiceChannelSelectAsync());
    }
    async handleVoiceChannelSelectAsync() {
        await this.clearAsync();
        let e = c.Ay.getVisibleGame();
        if (null == e) return;
        this.currentSessionGameKey = (0, c.Es)(e);
        let t = crypto.randomUUID();
        (0, H.mN)(t, e.id ?? null),
            Y.nx.info(
                `decider: handleVoiceChannelSelect \u{2014} new gaming session id: ${t}, for game: ${this.currentSessionGameKey}`,
            );
    }
    handleRunningGamesChange() {
        this.enqueueSessionTransition("handleRunningGamesChange", () => this.handleRunningGamesChangeAsync());
    }
    async handleRunningGamesChangeAsync() {
        let e = c.Ay.getVisibleGame(),
            t = null != e ? (0, c.Es)(e) : null;
        if (
            (Y.nx.info(
                `decider: handleRunningGamesChange visibleGame=${e?.name ?? "null"} newPrimaryKey=${t} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${p.Ay.getCurrentClipsSession()?.id} pendingSessionGameKey=${this.pendingSessionGameKey}`,
            ),
            null === this.currentSessionGameKey)
        ) {
            if (null != t) {
                this.currentSessionGameKey = t;
                let n = crypto.randomUUID();
                (0, H.mN)(n, e?.id ?? null),
                    Y.nx.info(`decider: handleRunningGamesChange \u{2014} starting session for ${t} (id=${n})`);
            } else Y.nx.info(`decider: handleRunningGamesChange \u{2014} not starting session (newPrimaryKey=${t})`);
            return;
        }
        if (t === this.currentSessionGameKey) {
            Y.nx.info("decider: handleRunningGamesChange \u2014 same primary, cancelling pending end"),
                this.sessionEndTimeout.stop(),
                (this.pendingSessionGameKey = null);
            return;
        }
        if (null === t) {
            Y.nx.info(
                "decider: handleRunningGamesChange \u2014 visible game became null, finalizing session immediately",
            ),
                this.sessionEndTimeout.stop(),
                this.unscheduleClip(),
                await this.processClipCandidates(),
                (this.currentSessionGameKey = null),
                await (0, H.YV)(),
                (this.pendingSessionGameKey = null);
            return;
        }
        this.pendingSessionGameKey === t
            ? Y.nx.info("decider: handleRunningGamesChange \u2014 already debouncing for this key")
            : (Y.nx.info(
                  `decider: handleRunningGamesChange \u{2014} primary game changed from ${this.currentSessionGameKey} to ${t}, debouncing 30000ms`,
              ),
              (this.pendingSessionGameKey = t),
              this.sessionEndTimeout.start(3e4, () => {
                  this.enqueueSessionTransition("sessionEndTimeout", async () => {
                      this.unscheduleClip(), await this.processClipCandidates(), (this.currentSessionGameKey = t);
                      let n = crypto.randomUUID();
                      (0, H.mN)(n, e?.id ?? null),
                          (this.pendingSessionGameKey = null),
                          Y.nx.info(
                              `decider: sessionEndTimeout fired after debounce \u{2014} finalizing previous session, started new session (newPrimaryKey=${t}, id=${n})`,
                          );
                  });
              }));
    }
    async debugStashDeciderData() {
        let e = p.Ay.getClipCandidates();
        if (0 === e.length) return void alert("no candidates to stash");
        let t = {
            decisionSignals: this.decisionSignals,
            clipCandidates: [...e],
            localUserId: _.default.getId(),
            gameId: p.Ay.getCurrentClipsSession()?.gameId ?? void 0,
        };
        await l.A.clips.debugStashClipDeciderData(t),
            Y.nx.info(`debugStashDeciderData: stashed ${e.length} candidates`);
    }
    static async debugRerunRanking() {
        Y.nx.info("DEBUG RERUN RANKING");
        let e = await l.A.clips.debugReadStashedClipDeciderData(),
            t = B(e.clipCandidates, e.decisionSignals, e.localUserId, e.gameId);
        Y.nx.info("ranked clips:", t),
            t.selected.forEach((e, t) => {
                Y.nx.info(`Clip ${t + 1} score ${e.score}, ${l.A.fileManager.basename(e.clip.filepath)}`);
            });
    }
    async processClipCandidates() {
        let e = p.Ay.getCurrentClipsSession(),
            t = p.Ay.getClipCandidates(),
            n = null == e ? [] : t.filter((t) => t.gameSessionId === e.id),
            i = null == e ? t : t.filter((t) => t.gameSessionId !== e.id),
            r = this.decisionSignals;
        this.decisionSignals = A();
        let s = B(n, r, _.default.getId(), e?.gameId ?? void 0);
        Y.nx.info("ranked clips:", s);
        let a = new Set(s.selected.map((e) => e.clip.id));
        await Promise.all(
            s.selected.map(async (e) => {
                try {
                    await (0, H.K7)(e.clip, e.score, e.audioEvents);
                } catch (e) {
                    Y.nx.error("decider: failed to promote clip candidate", e);
                }
            }),
        ),
            await Promise.all(
                [...n, ...i].map(async (e) => {
                    if (!a.has(e.id))
                        try {
                            await (0, H.oH)(e, !1);
                        } catch (e) {
                            Y.nx.error("decider: failed to delete unpromoted clip candidate", e);
                        }
                }),
            );
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(Math.max(p.Ay.getSettings().clipsLength, 6e4));
    }
}
let K = new W();
