(n.d(t, { tA: () => x, Ly: () => k, Q4: () => w, pn: () => B, Tv: () => F, GC: () => G, lq: () => V }), n(321073));
var i = n(284009),
    r = n.n(i),
    a = n(997649);
n(775443);
var s = n(260549),
    l = n(106983);
function o(e, t, n, i) {
    let a = (n - t) / 1e3 + 1,
        s = [];
    for (let n = 0; n < a; n++) {
        let a = t + 1e3 * n,
            l = e.findLast((e) => e.timestamp_ms <= a);
        (r()(null != l, "bad timeline!"), s.push(i(l)));
    }
    return s;
}
var d = n(171251);
class c {
    gameAxisScoreThreshold = 0.35;
    gameStateTimeline = [];
    constructor(e) {
        this.gameStateTimeline = (function (e) {
            let t = { inGame: !0, inMatch: !0, bombPlanted: !1 },
                n = [{ ...t, timestamp_ms: 0 }];
            function i(e, i) {
                let r = { ...t, ...e };
                (r.inGame !== t.inGame || r.inMatch !== t.inMatch || r.bombPlanted !== t.bombPlanted) &&
                    (Object.assign(t, r), n.push({ ...r, timestamp_ms: i }));
            }
            for (let n of e)
                switch (n.eventName) {
                    case l.C.PlayStateChange: {
                        let e = n.additionalData?.playing === !0;
                        i({ inGame: e, bombPlanted: e && t.bombPlanted }, n.timestamp_ms);
                        break;
                    }
                    case l.C.InMatchChange: {
                        let e = n.additionalData?.inMatch === !0;
                        i(e ? { inMatch: e } : { inMatch: e, inGame: !1, bombPlanted: !1 }, n.timestamp_ms);
                        break;
                    }
                    case l.C.BombPlant:
                        i({ bombPlanted: !0 }, n.timestamp_ms);
                        break;
                    case l.C.BombDefused:
                    case l.C.BombExploded:
                    case l.C.RoundEnd:
                        i({ bombPlanted: !1 }, n.timestamp_ms);
                }
            return n;
        })(e);
    }
    calculateModifiers(e, t) {
        let n = this.gameStateTimeline,
            i = [],
            r = (t - e) / 1e3 + 1;
        for (let t = 0; t < r; t++) {
            let r = e + 1e3 * t,
                a = _(n, r),
                s = 1;
            (a.inGame ? a.bombPlanted && (s *= 2) : (s /= 4), i.push({ timestamp_ms: r, modifier: s }));
        }
        return i;
    }
    getInGameState(e, t) {
        return o(this.gameStateTimeline, e, t, (e) => e.inGame);
    }
    rescoreEvent(e) {
        return (0, l.z)(e) ? (0, s.n)(e).score : void 0;
    }
    isInGame(e) {
        return _(this.gameStateTimeline, e).inGame;
    }
    isInMatch(e) {
        return _(this.gameStateTimeline, e).inMatch;
    }
    canAnchorReaction(e) {
        let t = e.eventName;
        return (
            t === l.C.Kill || t === l.C.MultiKill || t === l.C.Death || t === l.C.BombDefused || t === l.C.BombExploded
        );
    }
}
let u = { applicationIds: d.l, create: (e) => new c(e) };
function _(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return (r()(null != n, "bad timeline!"), n);
}
var E = n(115171),
    A = n(144705);
class h {
    gameAxisScoreThreshold = 0.35;
    gameStateTimeline = [];
    constructor(e) {
        this.gameStateTimeline = (function (e) {
            let t = { playing: !1, inMatch: !1 },
                n = [{ ...t, timestamp_ms: 0 }];
            function i(e, i) {
                let r = { ...t, ...e };
                (r.playing !== t.playing || r.inMatch !== t.inMatch) &&
                    (Object.assign(t, r), n.push({ ...r, timestamp_ms: i }));
            }
            for (let t of e)
                switch (t.eventName) {
                    case A.I.PlayStateChange:
                        i({ playing: t.additionalData?.playing === !0 }, t.timestamp_ms);
                        break;
                    case A.I.InMatchChange: {
                        let e = t.additionalData?.inMatch === !0;
                        i(e ? { inMatch: e } : { inMatch: e, playing: !1 }, t.timestamp_ms);
                    }
                }
            return n;
        })(e);
    }
    calculateModifiers(e, t) {
        let n = this.gameStateTimeline,
            i = [],
            r = (t - e) / 1e3 + 1;
        for (let t = 0; t < r; t++) {
            let r = e + 1e3 * t,
                a = I(n, r).playing ? 1 : 1 / 4;
            i.push({ timestamp_ms: r, modifier: a });
        }
        return i;
    }
    getInGameState(e, t) {
        return o(this.gameStateTimeline, e, t, (e) => e.playing);
    }
    rescoreEvent(e) {
        return (0, A.j)(e) ? (0, E.d)(e).score : void 0;
    }
    isInGame(e) {
        return I(this.gameStateTimeline, e).playing;
    }
    isInMatch(e) {
        return I(this.gameStateTimeline, e).inMatch;
    }
    canAnchorReaction(e) {
        let t = e.eventName;
        return t === A.I.Kill || t === A.I.MultiKill || t === A.I.Death || t === A.I.RoshanKill;
    }
}
function I(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return (r()(null != n, "bad timeline!"), n);
}
var f = n(876474),
    p = n(801344);
let T = new Set([
    p.n_.ChampionKill,
    p.n_.ChampionDeath,
    p.n_.DoubleKill,
    p.n_.TripleKill,
    p.n_.QuadraKill,
    p.n_.PentaKill,
    p.n_.DragonSteal,
    p.n_.BaronSteal,
]);
class m {
    gameEvents;
    gameAxisScoreThreshold = 0.17;
    gameStateTimeline = [];
    constructor(e) {
        ((this.gameEvents = e),
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
                                case p.n_.GameStart:
                                    return "game_start";
                                case p.n_.GameEnd:
                                    return "game_end";
                                case p.n_.ChampionDeath:
                                    return "death";
                                case p.n_.Respawn:
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
            })(this.gameEvents)));
    }
    calculateModifiers(e, t) {
        let n = this.gameStateTimeline,
            i = [],
            r = (t - e) / 1e3 + 1;
        for (let t = 0; t < r; t++) {
            let r = e + 1e3 * t,
                a = S(n, r),
                s = 1;
            (a.in_game ? a.is_dead && (s *= p.pw) : (s *= p.ym), i.push({ timestamp_ms: r, modifier: s }));
        }
        return i;
    }
    eventScoreMultiplier(e) {
        if (e.eventName !== p.n_.ChampionKill) return 1;
        let t = e.additionalData?.[p.kt];
        return "number" != typeof t ? 1 : (0, p.nS)(t);
    }
    getInGameState(e, t) {
        return o(this.gameStateTimeline, e, t, (e) => e.in_game);
    }
    rescoreEvent(e) {
        return null != e.eventName ? p.j3[e.eventName]?.scoreBoost : void 0;
    }
    isInGame(e) {
        return S(this.gameStateTimeline, e).in_game;
    }
    canAnchorReaction(e) {
        return null != e.eventName && T.has(e.eventName);
    }
}
let g = { applicationIds: [f.m], create: (e) => new m(e) };
function S(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return (r()(null != n, "bad timeline!"), n);
}
var N = n(190443),
    C = n(979563);
let O = 1 / 4,
    R = new Set([C.d.Goal, C.d.Save, C.d.EpicSave, C.d.Demolition, C.d.Demolished, C.d.BicycleHit, C.d.FlipReset]);
class L {
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
                    case C.d.MatchStart:
                        i(!0, t.timestamp_ms);
                        break;
                    case C.d.MatchEnd:
                        i(!1, t.timestamp_ms);
                        break;
                    default:
                        null != t.eventName && null != C._[t.eventName] && i(!0, t.timestamp_ms);
                }
            return n;
        })(e);
    }
    calculateModifiers(e, t) {
        let n = [],
            i = (t - e) / 1e3 + 1;
        for (let t = 0; t < i; t++) {
            let i = e + 1e3 * t,
                r = D(this.gameStateTimeline, i);
            n.push({ timestamp_ms: i, modifier: r.inMatch ? 1 : O });
        }
        return n;
    }
    getInGameState(e, t) {
        return o(this.gameStateTimeline, e, t, (e) => e.inMatch);
    }
    rescoreEvent(e) {
        return null != e.eventName ? C._[e.eventName]?.scoreBoost : void 0;
    }
    isInGame(e) {
        return D(this.gameStateTimeline, e).inMatch;
    }
    canAnchorReaction(e) {
        return null != e.eventName && R.has(e.eventName);
    }
}
let y = { applicationIds: [N.e], create: (e) => new L(e) };
function D(e, t) {
    let n = e.findLast((e) => e.timestamp_ms <= t);
    return (r()(null != n, "bad timeline!"), n);
}
var v = n(45926),
    b = n(557329),
    M = n(781183),
    P = n(696016);
let U = [u, { applicationIds: ["356875988589740042"], create: (e) => new h(e) }, g, y];
function w(e, t) {
    if (null == e) return;
    let n = U.find((t) => t.applicationIds.includes(e));
    return n?.create(t);
}
function G(e) {
    return null != e && U.some((t) => t.applicationIds.includes(e));
}
function x(e) {
    r()(null != e.decision, "clip missing .decision");
    let t = e.decision.timestamp - e.length;
    return null != e.editMetadata
        ? { startMs: t + 1e3 * e.editMetadata.start, endMs: t + 1e3 * e.editMetadata.end }
        : { startMs: t, endMs: e.decision.timestamp };
}
function k(e, t, n, i) {
    let s,
        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        { requestedCount: o = 3, preTrimmedSignalsByFilepath: d, debug: c = !1 } = l,
        u = { ...(0, v.A)(), ...l.config },
        _ = [],
        E = Object.keys(t.audioModelDataPerUser).length,
        A = [...t.gameEventData].sort((e, t) => e.timestamp_ms - t.timestamp_ms),
        h = w(i, A),
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
    function g(e) {
        return h?.canAnchorReaction(e) ?? !1;
    }
    for (let i of e) {
        let e;
        r()(null != i.decision, "candidate clip missing .decision");
        let s = i.decision.timestamp - i.length;
        function S(e, n) {
            let a = d?.[i.filepath],
                l = {};
            if (null != a) {
                let t = 1e3 * Math.floor(s / 1e3);
                function o(i) {
                    return F(
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
                        laughterData: F(r.laughterData, e, n),
                        shoutingData: F(r.shoutingData, e, n),
                        rmsData: F(r.rmsData, e, n),
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
                    r()(t % B == 0 && n % B == 0, "bad timestamps!");
                    let i = (n - t) / B + 1,
                        a = {};
                    for (let n in e) {
                        let r = e[n];
                        a[n] = {
                            laughterData: V(r.laughterData, t, i),
                            shoutingData: V(r.shoutingData, t, i),
                            rmsData: V(r.rmsData, t, i),
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
                (_.push(t.laughterData.map((e) => e.value)),
                    E.push(t.shoutingData.map((e) => e.value)),
                    A.push(t.rmsData.map((e) => e.value)));
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
        let { startMs: l, endMs: o } = x(i),
            { userIds: A, pLaughter: h, pShouting: f, rms: p, gridStartMs: N, chunkCount: C } = S(l, o),
            O = A.indexOf(n),
            R = (0, a.p)(I, l, o),
            L = R.filter(g);
        null != N &&
            C > 0 &&
            L.length > 0 &&
            (e = L.map((e) => Math.max(0, Math.min(C - 1, Math.round((e.timestamp_ms - N) / 1e3)))));
        let y = (function (e, t) {
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
                let d = (0, b.br)(i, t, t.laughterEventThreshold),
                    c = (0, b.br)(r, t, t.shoutingEventThreshold),
                    u = t.requireAttribution ? (0, b.bU)(a, t) : void 0,
                    _ = null != u ? (0, b.ei)(d, u) : d,
                    E = null != u ? (0, b.ei)(c, u) : c,
                    A = (0, b.v$)(a, t),
                    h = (0, b.Dk)(_, A),
                    I = (0, b.Dk)(E, A),
                    {
                        mainEventScore: f,
                        anchors: p,
                        events: T,
                    } = (0, b.aT)({ laughter: _, shouting: E }, { laughter: h, shouting: I }, s, t),
                    m = t.gameEventsAsReactionAnchors && null != l ? l.map((e) => ({ tStart: e, tEnd: e })) : [],
                    g = (0, b.Mf)([...p, ...m], t.eventChainGapChunks),
                    S = (0, b.tf)(g, h, I, s, t),
                    { laughter: N, shouting: C } = (0, b.Lj)(d, c, a, t),
                    { coOccurrenceScore: O, coContribPerChunk: R } = (0, b.k0)(N, C, t),
                    L = f,
                    y = S;
                if (t.normalizeComponents) {
                    ((L = (f - t.sMainMedian) / t.sMainIqr), (y = (S - t.sReactionMedian) / t.sReactionIqr));
                    let e = Math.max(1, o - 1);
                    n = (O - t.sCoMedianPerPair * e) / (t.sCoIqrPerPair * e);
                } else n = Math.log1p(O);
                let D = o <= 1,
                    v = D ? t.soloReactionWeight : t.reactionWeight,
                    M = D ? t.soloCoOccurrenceWeight : t.coOccurrenceWeight;
                return {
                    audioScore: t.mainWeight * L + v * y + M * n,
                    components: t.normalizeComponents
                        ? { mainEventScore: L, reactionScore: y, coOccurrenceScore: n }
                        : { mainEventScore: f, reactionScore: S, coOccurrenceScore: O },
                    debug: {
                        pGatedLaughter: _,
                        pGatedShouting: E,
                        intensityLaughter: h,
                        intensityShouting: I,
                        rmsWeighted: A,
                        mainEvents: T,
                        reactionAnchors: g,
                        coContribPerChunk: R,
                    },
                };
            })({ pLaughter: h, pShouting: f, rms: p, main: O, gameEventChunks: e, participantCount: E }, u),
            D = (function (e, t, n) {
                let i = 0;
                for (let r of e) {
                    let e = t(r.timestamp_ms),
                        a = n(r);
                    i += (r.score ?? 0) * e * a;
                }
                return i;
            })(R, T, m),
            v = (0.5 + (0, M.ry)(y.audioScore)) * (1 + Math.tanh(D / u.gameSquashScale)) - 0.5,
            U = S(s, i.decision.timestamp),
            w = U.gridStartMs,
            G =
                null != w
                    ? (function (e, t) {
                          let { pLaughter: n, pShouting: i, rms: r } = e;
                          if (0 === n.length) return [];
                          let a = (0, b.br)(n, t, t.laughterEventThreshold),
                              s = (0, b.br)(i, t, t.shoutingEventThreshold);
                          return (0, b.e3)((0, b.Lj)(a, s, r, t), t);
                      })({ pLaughter: U.pLaughter, pShouting: U.pShouting, rms: U.rms }, u).map((e) => ({
                          type: "laughter" === e.emotion ? P.Gy.LAUGHTER : P.Gy.SHOUTING,
                          userId: U.userIds[e.channel],
                          startMs: w + 1e3 * e.tStart,
                          endMs: w + (e.tEnd + 1) * 1e3,
                          peakMs: w + 1e3 * e.peakT,
                          peakConfidence: e.peakV,
                      }))
                    : [],
            k = {
                clip: i,
                score: v,
                audioScore: y.audioScore,
                gameEventsScore: D,
                hasAudio: h.length > 0,
                hasGameEvents: R.length > 0,
                audioEvents: G,
            };
        if (c) {
            k.components = { ...y.components, gameEventsScore: D };
            let e = null != N ? (N - l) / 1e3 : 0;
            k.debug = {
                ...y.debug,
                userIds: A,
                tsSec: Array.from({ length: C }, (t, n) => e + n),
                pLaughter: h,
                pShouting: f,
                rms: p,
            };
        }
        _.push(k);
    }
    _.sort((e, t) => t.score - e.score);
    let N = (function (e, t, n, i) {
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
                        let { startMs: t, endMs: n } = x(e.clip);
                        for (let e of o) {
                            let { startMs: i, endMs: r } = x(e.clip);
                            if (Math.min(n, r) - Math.max(t, i) >= 5e3) return !0;
                        }
                        return !1;
                    })(t),
            );
            return null != t && ((t.selectedVia = e.axis), o.push(t), d.add(t), !0);
        }
        let u = l.map((e) => e.quota),
            _ = !0;
        for (; o.length < n && _;) {
            _ = !1;
            for (let e = 0; e < l.length && o.length !== n; e++) !(u[e] <= 0) && c(l[e]) && (u[e]--, (_ = !0));
        }
        for (_ = !0; o.length < n && _;)
            for (let e of ((_ = !1), l)) {
                if (o.length === n) break;
                c(e) && (_ = !0);
            }
        return o;
    })(_, u, o, h?.gameAxisScoreThreshold);
    return { allClipsRanked: _, selected: N };
}
function F(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
let B = 1e3;
function V(e, t, n) {
    let i = [],
        a = 0;
    for (let s = 0; s < n; s++) {
        let n = t + B * s,
            l = e[a];
        null != l && l.timestamp_ms === n
            ? (i.push({ ...l }), a++)
            : (null != l && r()(l.timestamp_ms % B == 0, `bad timestamp! ${l.timestamp_ms}`),
              i.push({ value: 0, timestamp_ms: n }));
    }
    return (r()(i.length === n, "bad track!"), i);
}
