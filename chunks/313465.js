(n.d(t, { V1: () => M, HB: () => b }), n(321073));
var i = n(106983),
    r = n(831518),
    a = n(45926),
    s = n(557329);
let l = ["laughter", "shouting"],
    o = { laughter: "laughterData", shouting: "shoutingData" };
function d(e, t, n) {
    let i = 0,
        r = e.length - 1,
        a = -1;
    for (; i <= r;) {
        let s = (i + r) >> 1,
            l = e[s].startMs;
        l < t || (n && l === t) ? ((a = s), (i = s + 1)) : (r = s - 1);
    }
    return a;
}
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var c = n(260549);
function u(e) {
    if (e.eventName !== i.C.MultiKill) return null;
    let t = e.additionalData?.killIds;
    return Array.isArray(t) && 0 !== t.length && t.every((e) => "string" == typeof e) ? t : null;
}
function _(e) {
    let t = new Map(),
        n = [];
    for (let i of e) {
        let e = u(i);
        if (null == e) {
            n.push(i);
            continue;
        }
        let r = t.get(e[0]);
        (null == r || e.length > r.killCount) && t.set(e[0], { event: i, killCount: e.length });
    }
    return [...n, ...Array.from(t.values(), (e) => e.event)];
}
function E(e) {
    let t = new Map();
    for (let n of e) {
        if (n.eventName !== i.C.Kill) continue;
        let e = n.additionalData?.id;
        "string" != typeof e || t.has(e) || t.set(e, n.timestamp_ms);
    }
    return t;
}
function A(e, t) {
    let n = u(e);
    if (null == n) return null;
    let i = t.get(n[0]);
    return null == i || i > e.timestamp_ms ? null : i;
}
var h = n(598213),
    I = n(696016);
let f = new Map([
        [i.C.Kill, { beforeMs: 3e3, afterMs: 2e3 }],
        [i.C.Death, { beforeMs: 3e3, afterMs: 2e3 }],
        [i.C.MultiKill, { beforeMs: 3e3, afterMs: 2e3 }],
        [i.C.BombPlant, { beforeMs: 2e3, afterMs: 3e3 }],
        [i.C.BombDefused, { beforeMs: 3e3, afterMs: 5e3 }],
        [i.C.BombExploded, { beforeMs: 3e3, afterMs: 5e3 }],
    ]),
    p = { beforeMs: 3e3, afterMs: 2e3 },
    T = { beforeMs: 2e3, afterMs: 4e3 },
    m = 2 * c.U;
function g(e, t) {
    if (e.eventName !== t) return null;
    let n = e.additionalData?.round;
    return "number" == typeof n ? n : null;
}
function S(e) {
    return 1e3 * Math.floor(e / 1e3);
}
function N(e, t, n) {
    let i = 0,
        r = e.length;
    for (; i < r;) {
        let a = (i + r) >> 1,
            s = e[a].timestamp_ms;
        s < t || (!n && s === t) ? (i = a + 1) : (r = a);
    }
    return i;
}
var C = n(435558);
function O(e) {
    return 1e3 * Math.floor(e / 1e3);
}
function R(e) {
    let t = (0, h.lQ)(e.clip);
    return { startMs: t + e.videoStartMs, endMs: t + e.videoEndMs };
}
function L(e) {
    let { startMs: t, endMs: n } = R(e);
    return { srcStartMs: t, srcEndMs: n, label: e.label };
}
function y(e, t) {
    let n = 0,
        i = !0;
    for (let r of e) {
        if (null == r) continue;
        let e = r.videoEndMs - r.videoStartMs;
        ((n += e), i || (n -= Math.min(t, e)), (i = !1));
    }
    return n;
}
let D = new Map([
        [
            "highlight_reels",
            {
                includeOtherUsers: !0,
                startOnSilence: !0,
                endOnSilence: !0,
                requireVoiceGamePair: !0,
                blendMs: 300,
                laughterThreshold: 0.75,
                shoutingThreshold: 0.5,
                events: {
                    "audio:laughter": { beforeMs: 3e3, afterMs: 2e3 },
                    "audio:shouting": { beforeMs: 3e3, afterMs: 2e3 },
                    [`game:${i.C.Kill}`]: { beforeMs: 1250, afterMs: 1250 },
                    [`game:${i.C.MultiKill}`]: { beforeMs: 1250, afterMs: 1250 },
                    [`game:${i.C.Death}`]: { beforeMs: 1250, afterMs: 1250 },
                },
            },
        ],
        [
            "kill_compilation",
            {
                includeOtherUsers: !1,
                startOnSilence: !1,
                endOnSilence: !1,
                requireVoiceGamePair: !1,
                blendMs: 300,
                events: { [`game:${i.C.Kill}`]: { beforeMs: 2e3, afterMs: 1e3 } },
            },
        ],
    ]),
    v = ["cs2_round_summary", "highlight_reels", "kill_compilation"];
function b(e) {
    for (let t of v) {
        let n = (function (e, t) {
            let n,
                c,
                u = (function (e) {
                    let t = [];
                    for (let n of e)
                        null != n.decision &&
                            t.push({ id: n.id, filepath: n.filepath, length: n.length, decision: n.decision });
                    return t;
                })(t.clipCandidates);
            return 0 === u.length
                ? (I.nx.info(
                      `automontage: no usable clip candidates in this session (received ${t.clipCandidates.length}) - skipping montage`,
                  ),
                  null)
                : "cs2_round_summary" === e
                  ? ((n = { ...h.yC, audioTrackLabel: "0:all", blendMs: 300 }),
                    null ==
                    (c = (function (e) {
                        let t,
                            n,
                            a,
                            s = [...e.gameEventData].sort((e, t) => e.timestamp_ms - t.timestamp_ms),
                            l = (function (e) {
                                let t = [],
                                    n = new Map(),
                                    r = null;
                                for (let a of e) {
                                    if (a.eventName === i.C.InMatchChange && a.additionalData?.inMatch !== !0) {
                                        (n.clear(), (r = null));
                                        continue;
                                    }
                                    let e = g(a, i.C.RoundStart);
                                    if (null != e) {
                                        (null != r && e <= r && n.clear(), n.set(e, a.timestamp_ms), (r = e));
                                        continue;
                                    }
                                    let s = g(a, i.C.RoundEnd);
                                    if (null == s) continue;
                                    let l = n.get(s);
                                    null != l &&
                                        (n.delete(s),
                                        a.timestamp_ms <= l ||
                                            t.push({ number: s, startMs: l, endMs: a.timestamp_ms }));
                                }
                                return t.sort((e, t) => e.startMs - t.startMs);
                            })(s);
                        if (0 === l.length)
                            return (
                                I.nx.info(
                                    `automontage: no valid CS2 rounds reconstructed from ${s.length} game events - skipping round summary`,
                                ),
                                null
                            );
                        let o = (0, r.Q4)(e.gameId, s),
                            d =
                                ((t = (function (e, t) {
                                    if (e?.calculateModifiers == null || 0 === t.length) return () => 1;
                                    let n = S(t[0].timestamp_ms),
                                        i = S(t[t.length - 1].timestamp_ms),
                                        r = new Map(
                                            e.calculateModifiers(n, i).map((e) => [e.timestamp_ms, e.modifier]),
                                        );
                                    return (e) => r.get(S(e)) ?? 1;
                                })(o, s)),
                                (n = new Float64Array(s.length + 1)),
                                (a = 0),
                                s.forEach((e, r) => {
                                    let s = e.score ?? 0;
                                    o?.rescoreEvent != null &&
                                        (s = e.eventName === i.C.Death ? -0.1 : (o.rescoreEvent(e) ?? s));
                                    let l = s * t(e.timestamp_ms);
                                    (Number.isFinite(l) || (a++, (l = 0)), (n[r + 1] = n[r] + l));
                                }),
                                a > 0 &&
                                    I.nx.warn(
                                        `automontage: ignored ${a} non-finite event score(s) while ranking rounds`,
                                    ),
                                l
                                    .map((e) => {
                                        let t = N(s, e.startMs, !1),
                                            i = N(s, e.endMs, !1);
                                        return { round: e, score: n[i] - n[t] };
                                    })
                                    .sort((e, t) => t.score - e.score)),
                            c = d[0];
                        if (c.score <= m)
                            return (
                                I.nx.info(
                                    `automontage: best CS2 round ${c.round.number} scored ${c.score.toFixed(3)}, not above the ${m} minimum - skipping round summary`,
                                ),
                                null
                            );
                        let u = (function (e, t) {
                                let n = e.startMs + 23e3,
                                    r = [(0, h.Wp)({ startMs: n, endMs: n }, p, { label: `r${e.number} context` })],
                                    a = N(t, n, !1),
                                    s = N(t, e.endMs, !0),
                                    l = t.slice(a, s),
                                    o = E(l),
                                    d = new Set(_(l.filter((e) => e.eventName === i.C.MultiKill)));
                                for (let t of l) {
                                    let n = t.eventName;
                                    if (null == n) continue;
                                    let a = f.get(n);
                                    if (null == a) continue;
                                    let s = `r${e.number} ${n}`;
                                    if (n === i.C.MultiKill) {
                                        if (!d.has(t)) continue;
                                        let e = A(t, o) ?? t.timestamp_ms;
                                        r.push((0, h.Wp)({ startMs: e, endMs: t.timestamp_ms }, a, { label: s }));
                                    } else
                                        r.push(
                                            (0, h.Wp)({ startMs: t.timestamp_ms, endMs: t.timestamp_ms }, a, {
                                                label: s,
                                            }),
                                        );
                                }
                                return (
                                    r.push(
                                        (0, h.Wp)({ startMs: e.endMs, endMs: e.endMs }, T, {
                                            label: `r${e.number} round end`,
                                        }),
                                    ),
                                    r.sort((e, t) => e.srcStartMs - t.srcStartMs),
                                    r
                                );
                            })(c.round, s),
                            C = (0, h.X0)(u),
                            { resolved: O, skipped: R } = (0, h.z2)(C, e.clipCandidates);
                        return 0 === O.length
                            ? (I.nx.info(
                                  `automontage: no candidate clip covers any of the ${C.length} sections of best round ${c.round.number} (candidates=${e.clipCandidates.length}) - skipping round summary`,
                              ),
                              null)
                            : {
                                  durationMs: (0, h.s_)(O, e.config.blendMs),
                                  resolved: O,
                                  skipped: R,
                                  bestRound: c,
                                  rankedRounds: d,
                              };
                    })({
                        gameEventData: t.decisionSignals.gameEventData,
                        clipCandidates: u,
                        gameId: t.gameId,
                        config: n,
                    }))
                        ? null
                        : { type: e, config: n, durationMs: c.durationMs, resolved: c.resolved, skipped: c.skipped })
                  : (function (e, t, n) {
                        var i, c, u, f;
                        let p,
                            T = (function (e) {
                                let t = D.get(e);
                                if (null == t) throw Error(`Unrecognized automontage preset: ${e}`);
                                return t;
                            })(e),
                            m = (function (e, t, n, i) {
                                let { localUserId: d, gameId: c, ...u } = n,
                                    h = [],
                                    I = _(e ?? []),
                                    f = E(I),
                                    p = (0, r.Q4)(c, I);
                                function T(e, t) {
                                    return p?.isInGame == null || p.isInGame((e + t) / 2);
                                }
                                for (let e of I) {
                                    let t = e.eventName;
                                    if (null == t) continue;
                                    let n = i[`game:${t}`];
                                    if (null == n) continue;
                                    let r = A(e, f) ?? e.timestamp_ms,
                                        a = e.timestamp_ms;
                                    T(r, a) && h.push({ startMs: r, endMs: a, kind: "game", padding: n });
                                }
                                let m = new Map();
                                for (let e of l) {
                                    let t = i[`audio:${e}`];
                                    null != t && m.set(e, t);
                                }
                                if (m.size > 0)
                                    for (let e of (function (e, t, n, i) {
                                        let { includeOtherUsers: l, laughterThreshold: d, shoutingThreshold: c } = n;
                                        if (0 === i.length) return [];
                                        let u = Object.keys(e).filter((e) => e === t || l),
                                            _ = Number.MAX_VALUE,
                                            E = -Number.MAX_VALUE;
                                        for (let t of u) {
                                            let n = e[t];
                                            for (let e of [n.rmsData, ...i.map((e) => n[o[e]])])
                                                for (let t of e)
                                                    (t.timestamp_ms < _ && (_ = t.timestamp_ms),
                                                        t.timestamp_ms > E && (E = t.timestamp_ms));
                                        }
                                        if (E < _) return [];
                                        let A = (E - _) / r.pn + 1;
                                        function h(e) {
                                            return (0, r.lq)(
                                                [
                                                    ...(function (e) {
                                                        for (let t = 1; t < e.length; t++)
                                                            if (e[t].timestamp_ms < e[t - 1].timestamp_ms)
                                                                return [...e].sort(
                                                                    (e, t) => e.timestamp_ms - t.timestamp_ms,
                                                                );
                                                        return e;
                                                    })(e),
                                                ],
                                                _,
                                                A,
                                            ).map((e) => e.value);
                                        }
                                        let I = (0, a.A)(),
                                            f = {
                                                laughter: d ?? I.laughterEventThreshold,
                                                shouting: c ?? I.shoutingEventThreshold,
                                            },
                                            p = u.map((t) => h(e[t].rmsData)),
                                            T = (0, s.kV)(p, I),
                                            m = [];
                                        for (let t of i) {
                                            let n = u.map((n) => h(e[n][o[t]])),
                                                i = (0, s.br)(n, I, f[t]),
                                                a = null != T ? (0, s.ei)(i, T) : i;
                                            u.forEach((e, n) => {
                                                for (let i of (function (e) {
                                                    let t = [],
                                                        n = -1;
                                                    for (let i = 0; i <= e.length; i++) {
                                                        let r = i < e.length && e[i] > 0;
                                                        (r && -1 === n && (n = i),
                                                            r ||
                                                                -1 === n ||
                                                                (t.push({ startChunk: n, endChunk: i - 1 }), (n = -1)));
                                                    }
                                                    return t;
                                                })(a[n]))
                                                    i.endChunk - i.startChunk + 1 < I.minConsecutiveChunks ||
                                                        m.push({
                                                            kind: t,
                                                            userId: e,
                                                            startMs: _ + i.startChunk * r.pn,
                                                            endMs: _ + i.endChunk * r.pn,
                                                        });
                                            });
                                        }
                                        return (m.sort((e, t) => e.startMs - t.startMs), m);
                                    })(t, d, u, Array.from(m.keys()))) {
                                        let t = m.get(e.kind);
                                        null != t &&
                                            T(e.startMs, e.endMs) &&
                                            h.push({ startMs: e.startMs, endMs: e.endMs, kind: "audio", padding: t });
                                    }
                                return h;
                            })(
                                t.decisionSignals.gameEventData,
                                t.decisionSignals.audioModelDataPerUser,
                                {
                                    localUserId: t.localUserId,
                                    gameId: t.gameId,
                                    includeOtherUsers: T.includeOtherUsers,
                                    laughterThreshold: T.laughterThreshold,
                                    shoutingThreshold: T.shoutingThreshold,
                                },
                                T.events,
                            );
                        if (0 === m.length)
                            return (
                                I.nx.info(
                                    `automontage: preset ${e} matched no events in this session - skipping montage`,
                                ),
                                null
                            );
                        let g =
                                T.startOnSilence || T.endOnSilence
                                    ? ((i = (function (e) {
                                          let t = new Set(),
                                              n = [],
                                              i = [];
                                          for (let r of e)
                                              if (r.decision?.timestamp != null && null != r.length)
                                                  for (let e of (i.push({
                                                      start: r.decision.timestamp - r.length,
                                                      end: r.decision.timestamp,
                                                  }),
                                                  r.timeline ?? [])) {
                                                      let i = e.signal;
                                                      if (i.type !== I.Gy.SPEAKING || null == e.timestamp) continue;
                                                      let r = `${i.userId}|${e.timestamp}|${i.speakingFlags}`;
                                                      t.has(r) ||
                                                          (t.add(r),
                                                          n.push({
                                                              userId: i.userId,
                                                              timestamp: e.timestamp,
                                                              speaking: ((i.speakingFlags ?? 0) & 1) == 1,
                                                          }));
                                                  }
                                          if (0 === i.length) return [];
                                          i.sort((e, t) => e.start - t.start);
                                          let r = [];
                                          for (let e of i) {
                                              let t = r[r.length - 1];
                                              null != t && e.start <= t.end
                                                  ? (t.end = Math.max(t.end, e.end))
                                                  : r.push({ ...e });
                                          }
                                          n.sort((e, t) => e.timestamp - t.timestamp);
                                          let a = [],
                                              s = 0;
                                          for (let e of r) {
                                              for (; s < n.length && n[s].timestamp < e.start;) s++;
                                              let t = new Map();
                                              for (; s < n.length && n[s].timestamp <= e.end;) {
                                                  let e = n[s];
                                                  s++;
                                                  let i = t.get(e.userId);
                                                  e.speaking
                                                      ? null == i && t.set(e.userId, e.timestamp)
                                                      : null != i &&
                                                        (a.push({ userId: e.userId, startMs: i, endMs: e.timestamp }),
                                                        t.delete(e.userId));
                                              }
                                              for (let [n, i] of t) a.push({ userId: n, startMs: i, endMs: e.end });
                                          }
                                          return a;
                                      })(t.clipCandidates)),
                                      (c = t.localUserId),
                                      T.includeOtherUsers ? [...i] : i.filter((e) => e.userId === c))
                                    : [],
                            S = { ...h.yC, blendMs: T.blendMs },
                            N = (function (e) {
                                let {
                                        selected: t,
                                        clipCandidates: n,
                                        config: i,
                                        speakingSpans: r,
                                        startOnSilence: a,
                                        endOnSilence: s,
                                        requireVoiceGamePair: l,
                                        maxDurationMs: o,
                                        scoreSection: c,
                                    } = e,
                                    u = (function (e, t, n, i) {
                                        let r = [];
                                        for (let a of e) {
                                            let e = (0, h.Wp)(a, a.padding, {
                                                hasGame: "game" === a.kind,
                                                hasAudio: "audio" === a.kind,
                                            });
                                            (n &&
                                                (e.srcStartMs = (function (e, t) {
                                                    let n = d(t, e, !1);
                                                    if (-1 === n) return e;
                                                    let i = t[n];
                                                    return e < i.endMs ? i.startMs : e;
                                                })(e.srcStartMs, t)),
                                                i &&
                                                    (e.srcEndMs = (function (e, t) {
                                                        let n = d(t, e, !0);
                                                        if (-1 === n) return e;
                                                        let i = t[n];
                                                        return e < i.endMs ? i.endMs : e;
                                                    })(e.srcEndMs, t)),
                                                e.srcEndMs <= e.srcStartMs || r.push(e));
                                        }
                                        return (r.sort((e, t) => e.srcStartMs - t.srcStartMs), r);
                                    })(
                                        t,
                                        (function (e) {
                                            let t = [...e].sort((e, t) => e.startMs - t.startMs),
                                                n = [];
                                            for (let e of t) {
                                                let t = n[n.length - 1];
                                                null != t && e.startMs <= t.endMs
                                                    ? (t.endMs = Math.max(t.endMs, e.endMs))
                                                    : n.push({ startMs: e.startMs, endMs: e.endMs });
                                            }
                                            return n;
                                        })(r),
                                        a,
                                        s,
                                    ),
                                    _ = (0, h.X0)(u),
                                    E = l ? _.filter((e) => !0 === e.hasGame && !0 === e.hasAudio) : _,
                                    A = [],
                                    f = [];
                                for (let e of E) e.srcEndMs - e.srcStartMs < h.rx ? A.push(e) : f.push(e);
                                let { resolved: p, skipped: T } = (0, h.z2)(f, n),
                                    { kept: m, removed: g } = (function (e, t, n, i) {
                                        let r = [...e],
                                            a = e
                                                .map((e, t) => {
                                                    let { startMs: n, endMs: r } = R(e);
                                                    return { id: t, score: i(n, r) };
                                                })
                                                .sort((e, t) => t.score - e.score),
                                            s = [],
                                            l = y(r, t);
                                        for (; l > n;) {
                                            let n = a.pop();
                                            if (null == n) break;
                                            (s.push(e[n.id]), (r[n.id] = null), (l = y(r, t)));
                                        }
                                        return (
                                            s.length > 0 &&
                                                I.nx.info(
                                                    `automontage: removed ${s.length} lowest-scored section(s) to fit the ${n}ms maximum (durationMs=${l})`,
                                                ),
                                            { kept: r.filter((e) => null != e), removed: s, durationMs: l }
                                        );
                                    })(p, i.blendMs, o, c);
                                return {
                                    durationMs: (0, h.s_)(m, i.blendMs),
                                    resolved: m,
                                    skipped: [...A, ...T, ...g.map(L)],
                                    requestedSectionCount: E.length,
                                    trimmedSectionCount: g.length,
                                };
                            })({
                                selected: m,
                                clipCandidates: n,
                                config: S,
                                speakingSpans: g,
                                startOnSilence: T.startOnSilence,
                                endOnSilence: T.endOnSilence,
                                requireVoiceGamePair: T.requireVoiceGamePair,
                                maxDurationMs: 9e4,
                                scoreSection:
                                    ((u = t.decisionSignals.gameEventData),
                                    (f = t.gameId),
                                    (function (e, t) {
                                        if (0 === e.length) return () => 0;
                                        let n = () => 1;
                                        if (t?.calculateModifiers != null) {
                                            let i = O(e[0].timestamp_ms),
                                                r = O(e[e.length - 1].timestamp_ms),
                                                a = new Map(
                                                    t.calculateModifiers(i, r).map((e) => [e.timestamp_ms, e.modifier]),
                                                );
                                            n = (e) => a.get(O(e)) ?? 1;
                                        }
                                        let i = new Float64Array(e.length + 1),
                                            r = 0;
                                        return (
                                            e.forEach((e, a) => {
                                                let s = e.score ?? 0;
                                                t?.rescoreEvent != null && (s = t.rescoreEvent(e) ?? s);
                                                let l = s * n(e.timestamp_ms);
                                                (Number.isFinite(l) || (r++, (l = 0)), (i[a + 1] = i[a] + l));
                                            }),
                                            r > 0 &&
                                                I.nx.warn(
                                                    `automontage: ignored ${r} non-finite event score(s) while scoring sections`,
                                                ),
                                            (t, n) => {
                                                let r = (0, C.sortedIndexBy)(e, { timestamp_ms: t }, "timestamp_ms");
                                                return (
                                                    i[
                                                        (0, C.sortedLastIndexBy)(e, { timestamp_ms: n }, "timestamp_ms")
                                                    ] - i[r]
                                                );
                                            }
                                        );
                                    })((p = [...u].sort((e, t) => e.timestamp_ms - t.timestamp_ms)), (0, r.Q4)(f, p))),
                            });
                        return 0 === N.resolved.length
                            ? (I.nx.info(
                                  N.trimmedSectionCount > 0
                                      ? `automontage: preset ${e} - all ${N.trimmedSectionCount} resolved section(s) were removed to fit the maximum duration - skipping montage`
                                      : `automontage: preset ${e} - no candidate clip covers any of the ${N.requestedSectionCount} requested sections (candidates=${n.length}, skipped=${N.skipped.length}) - skipping montage`,
                              ),
                              null)
                            : N.durationMs < 25e3
                              ? (I.nx.info(
                                    `automontage: preset ${e} duration ${N.durationMs}ms is below the 25000ms minimum - skipping montage`,
                                ),
                                null)
                              : {
                                    type: e,
                                    config: S,
                                    durationMs: N.durationMs,
                                    resolved: N.resolved,
                                    skipped: N.skipped,
                                };
                    })(e, t, u);
        })(t, e);
        if (null != n) return n;
    }
    return null;
}
function M(e, t, n) {
    return (0, h.BA)(e.resolved, t, e.config, n);
}
