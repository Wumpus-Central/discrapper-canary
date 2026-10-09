(n.d(t, { tA: () => I, Ly: () => p, Q4: () => h, pn: () => m, Tv: () => T, GC: () => f, lq: () => g }), n(321073));
var i = n(284009),
    r = n.n(i),
    a = n(997649),
    s = n(786661),
    l = n(510373),
    o = n(565120),
    d = n(521306),
    c = n(45926),
    u = n(557329),
    _ = n(781183),
    E = n(696016);
let A = [s.E, l.e, o.S, d.P];
function h(e, t) {
    if (null == e) return;
    let n = A.find((t) => t.applicationIds.includes(e));
    return n?.create(t);
}
function f(e) {
    return null != e && A.some((t) => t.applicationIds.includes(e));
}
function I(e) {
    r()(null != e.decision, "clip missing .decision");
    let t = e.decision.timestamp - e.length;
    return null != e.editMetadata
        ? { startMs: t + 1e3 * e.editMetadata.start, endMs: t + 1e3 * e.editMetadata.end }
        : { startMs: t, endMs: e.decision.timestamp };
}
function p(e, t, n, i) {
    let s,
        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        { requestedCount: o = 3, preTrimmedSignalsByFilepath: d, debug: A = !1 } = l,
        f = { ...(0, c.A)(), ...l.config },
        p = [],
        S = Object.keys(t.audioModelDataPerUser).length,
        N = [...t.gameEventData].sort((e, t) => e.timestamp_ms - t.timestamp_ms),
        C = h(i, N),
        O = null != C ? N : [],
        R = Number.MAX_VALUE,
        L = -Number.MAX_VALUE;
    for (let e in t.audioModelDataPerUser) {
        let n = t.audioModelDataPerUser[e];
        for (let e of [n.laughterData, n.shoutingData, n.rmsData])
            0 !== e.length && ((R = Math.min(R, e[0].timestamp_ms)), (L = Math.max(L, e[e.length - 1].timestamp_ms)));
    }
    null != C && R <= L && (s = C.calculateModifiers?.(R, L));
    let y = (function (e) {
        if (null == e) return () => 1;
        let t = new Map(e.map((e) => [e.timestamp_ms, e.modifier]));
        return (e) => t.get(1e3 * Math.floor(e / 1e3)) ?? 1;
    })(s);
    function D(e) {
        return C?.eventScoreMultiplier?.(e) ?? 1;
    }
    function v(e) {
        return C?.canAnchorReaction(e) ?? !1;
    }
    for (let i of e) {
        let e;
        r()(null != i.decision, "candidate clip missing .decision");
        let s = i.decision.timestamp - i.length;
        function b(e, n) {
            let a = d?.[i.filepath],
                l = {};
            if (null != a) {
                let t = 1e3 * Math.floor(s / 1e3);
                function o(i) {
                    return T(
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
                        laughterData: T(r.laughterData, e, n),
                        shoutingData: T(r.shoutingData, e, n),
                        rmsData: T(r.rmsData, e, n),
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
                    r()(t % m == 0 && n % m == 0, "bad timestamps!");
                    let i = (n - t) / m + 1,
                        a = {};
                    for (let n in e) {
                        let r = e[n];
                        a[n] = {
                            laughterData: g(r.laughterData, t, i),
                            shoutingData: g(r.shoutingData, t, i),
                            rmsData: g(r.rmsData, t, i),
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
        let { startMs: l, endMs: o } = I(i),
            { userIds: c, pLaughter: h, pShouting: N, rms: C, gridStartMs: R, chunkCount: L } = b(l, o),
            M = c.indexOf(n),
            P = (0, a.p)(O, l, o),
            U = P.filter(v);
        null != R &&
            L > 0 &&
            U.length > 0 &&
            (e = U.map((e) => Math.max(0, Math.min(L - 1, Math.round((e.timestamp_ms - R) / 1e3)))));
        let w = (function (e, t) {
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
                let d = (0, u.br)(i, t, t.laughterEventThreshold),
                    c = (0, u.br)(r, t, t.shoutingEventThreshold),
                    _ = t.requireAttribution ? (0, u.bU)(a, t) : void 0,
                    E = null != _ ? (0, u.ei)(d, _) : d,
                    A = null != _ ? (0, u.ei)(c, _) : c,
                    h = (0, u.v$)(a, t),
                    f = (0, u.Dk)(E, h),
                    I = (0, u.Dk)(A, h),
                    {
                        mainEventScore: p,
                        anchors: T,
                        events: m,
                    } = (0, u.aT)({ laughter: E, shouting: A }, { laughter: f, shouting: I }, s, t),
                    g = t.gameEventsAsReactionAnchors && null != l ? l.map((e) => ({ tStart: e, tEnd: e })) : [],
                    S = (0, u.Mf)([...T, ...g], t.eventChainGapChunks),
                    N = (0, u.tf)(S, f, I, s, t),
                    { laughter: C, shouting: O } = (0, u.Lj)(d, c, a, t),
                    { coOccurrenceScore: R, coContribPerChunk: L } = (0, u.k0)(C, O, t),
                    y = p,
                    D = N;
                if (t.normalizeComponents) {
                    ((y = (p - t.sMainMedian) / t.sMainIqr), (D = (N - t.sReactionMedian) / t.sReactionIqr));
                    let e = Math.max(1, o - 1);
                    n = (R - t.sCoMedianPerPair * e) / (t.sCoIqrPerPair * e);
                } else n = Math.log1p(R);
                let v = o <= 1,
                    b = v ? t.soloReactionWeight : t.reactionWeight,
                    M = v ? t.soloCoOccurrenceWeight : t.coOccurrenceWeight;
                return {
                    audioScore: t.mainWeight * y + b * D + M * n,
                    components: t.normalizeComponents
                        ? { mainEventScore: y, reactionScore: D, coOccurrenceScore: n }
                        : { mainEventScore: p, reactionScore: N, coOccurrenceScore: R },
                    debug: {
                        pGatedLaughter: E,
                        pGatedShouting: A,
                        intensityLaughter: f,
                        intensityShouting: I,
                        rmsWeighted: h,
                        mainEvents: m,
                        reactionAnchors: S,
                        coContribPerChunk: L,
                    },
                };
            })({ pLaughter: h, pShouting: N, rms: C, main: M, gameEventChunks: e, participantCount: S }, f),
            G = (function (e, t, n) {
                let i = 0;
                for (let r of e) {
                    let e = t(r.timestamp_ms),
                        a = n(r);
                    i += (r.score ?? 0) * e * a;
                }
                return i;
            })(P, y, D),
            x = (0.5 + (0, _.ry)(w.audioScore)) * (1 + Math.tanh(G / f.gameSquashScale)) - 0.5,
            k = b(s, i.decision.timestamp),
            F = k.gridStartMs,
            B =
                null != F
                    ? (function (e, t) {
                          let { pLaughter: n, pShouting: i, rms: r } = e;
                          if (0 === n.length) return [];
                          let a = (0, u.br)(n, t, t.laughterEventThreshold),
                              s = (0, u.br)(i, t, t.shoutingEventThreshold);
                          return (0, u.e3)((0, u.Lj)(a, s, r, t), t);
                      })({ pLaughter: k.pLaughter, pShouting: k.pShouting, rms: k.rms }, f).map((e) => ({
                          type: "laughter" === e.emotion ? E.Gy.LAUGHTER : E.Gy.SHOUTING,
                          userId: k.userIds[e.channel],
                          startMs: F + 1e3 * e.tStart,
                          endMs: F + (e.tEnd + 1) * 1e3,
                          peakMs: F + 1e3 * e.peakT,
                          peakConfidence: e.peakV,
                      }))
                    : [],
            V = {
                clip: i,
                score: x,
                audioScore: w.audioScore,
                gameEventsScore: G,
                hasAudio: h.length > 0,
                hasGameEvents: P.length > 0,
                audioEvents: B,
            };
        if (A) {
            V.components = { ...w.components, gameEventsScore: G };
            let e = null != R ? (R - l) / 1e3 : 0;
            V.debug = {
                ...w.debug,
                userIds: c,
                tsSec: Array.from({ length: L }, (t, n) => e + n),
                pLaughter: h,
                pShouting: N,
                rms: C,
            };
        }
        p.push(V);
    }
    p.sort((e, t) => t.score - e.score);
    let M = (function (e, t, n, i) {
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
                        let { startMs: t, endMs: n } = I(e.clip);
                        for (let e of o) {
                            let { startMs: i, endMs: r } = I(e.clip);
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
    })(p, f, o, C?.gameAxisScoreThreshold);
    return { allClipsRanked: p, selected: M };
}
function T(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
let m = 1e3;
function g(e, t, n) {
    let i = [],
        a = 0;
    for (let s = 0; s < n; s++) {
        let n = t + m * s,
            l = e[a];
        null != l && l.timestamp_ms === n
            ? (i.push({ ...l }), a++)
            : (null != l && r()(l.timestamp_ms % m == 0, `bad timestamp! ${l.timestamp_ms}`),
              i.push({ value: 0, timestamp_ms: n }));
    }
    return (r()(i.length === n, "bad track!"), i);
}
