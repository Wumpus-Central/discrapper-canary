(n.d(t, { V1: () => k, HB: () => x }), n(321073));
var i = n(106983),
    r = n(786661),
    a = n(236059),
    s = n(45926),
    l = n(557329);
let o = ["laughter", "shouting"],
    d = { laughter: "laughterData", shouting: "shoutingData" };
function c(e, t, n) {
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
var u = n(260549),
    _ = n(696016);
function E(e) {
    let t = e.additionalData?.[_.A_];
    return Array.isArray(t) && 0 !== t.length && t.every((e) => "string" == typeof e) ? t : null;
}
function A(e) {
    let t = new Map(),
        n = [];
    for (let i of e) {
        let e = E(i);
        if (null == e) {
            n.push(i);
            continue;
        }
        let r = t.get(e[0]);
        (null == r || e.length > r.killCount) && t.set(e[0], { event: i, killCount: e.length });
    }
    return [...n, ...Array.from(t.values(), (e) => e.event)];
}
function h(e) {
    let t = new Map();
    for (let n of e) {
        let e = n.additionalData?.[_.gy];
        "string" != typeof e || t.has(e) || t.set(e, n.timestamp_ms);
    }
    return t;
}
function f(e, t) {
    let n = E(e);
    if (null == n) return null;
    let i = t.get(n[0]);
    return null == i || i > e.timestamp_ms ? null : i;
}
var I = n(598213);
let p = new Map([
        [i.C.Kill, { beforeMs: 3e3, afterMs: 2e3 }],
        [i.C.Death, { beforeMs: 3e3, afterMs: 2e3 }],
        [i.C.MultiKill, { beforeMs: 3e3, afterMs: 2e3 }],
        [i.C.BombPlant, { beforeMs: 2e3, afterMs: 3e3 }],
        [i.C.BombDefused, { beforeMs: 3e3, afterMs: 5e3 }],
        [i.C.BombExploded, { beforeMs: 3e3, afterMs: 5e3 }],
    ]),
    T = { beforeMs: 3e3, afterMs: 2e3 },
    m = { beforeMs: 2e3, afterMs: 4e3 },
    g = 2 * u.U;
function S(e, t) {
    if (e.eventName !== t) return null;
    let n = e.additionalData?.round;
    return "number" == typeof n ? n : null;
}
function N(e) {
    return 1e3 * Math.floor(e / 1e3);
}
function C(e, t, n) {
    let i = 0,
        r = e.length;
    for (; i < r;) {
        let a = (i + r) >> 1,
            s = e[a].timestamp_ms;
        s < t || (!n && s === t) ? (i = a + 1) : (r = a);
    }
    return i;
}
var O = n(435558);
function R(e) {
    return 1e3 * Math.floor(e / 1e3);
}
function L(e) {
    let t = (0, I.lQ)(e.clip);
    return { startMs: t + e.videoStartMs, endMs: t + e.videoEndMs };
}
function y(e) {
    let { startMs: t, endMs: n } = L(e);
    return { srcStartMs: t, srcEndMs: n, label: e.label };
}
function D(e, t) {
    let n = 0,
        i = !0;
    for (let r of e) {
        if (null == r) continue;
        let e = r.videoEndMs - r.videoStartMs;
        ((n += e), i || (n -= Math.min(t, e)), (i = !1));
    }
    return n;
}
var v = n(876474),
    b = n(801344);
let M = {
        "audio:laughter": { beforeMs: 3e3, afterMs: 2e3 },
        "audio:shouting": { beforeMs: 3e3, afterMs: 2e3 },
        [`game:${i.C.Kill}`]: { beforeMs: 1250, afterMs: 1250 },
        [`game:${i.C.MultiKill}`]: { beforeMs: 1250, afterMs: 1250 },
        [`game:${i.C.Death}`]: { beforeMs: 1250, afterMs: 1250 },
    },
    P = { [`game:${i.C.Kill}`]: { beforeMs: 2e3, afterMs: 1e3 } },
    U = {
        [`game:${b.n_.ChampionKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${b.n_.DoubleKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${b.n_.TripleKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${b.n_.QuadraKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${b.n_.PentaKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${b.n_.TeamFightWin}`]: { beforeMs: 3e3, afterMs: 0 },
        [`game:${b.n_.DragonSteal}`]: { beforeMs: 5e3, afterMs: 1e3 },
        [`game:${b.n_.BaronSteal}`]: { beforeMs: 5e3, afterMs: 1e3 },
    },
    w = {
        [`game:${b.n_.ChampionKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${b.n_.DoubleKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${b.n_.TripleKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${b.n_.QuadraKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${b.n_.PentaKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
    },
    G = [
        {
            type: "cs2_round_summary",
            applicationIds: r.E.applicationIds,
            kind: "custom",
            build: function (e, t, n) {
                let r = { ...I.yC, audioTrackLabel: "0:all", blendMs: 300 },
                    s = (function (e) {
                        let t,
                            n,
                            r,
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
                                    let e = S(a, i.C.RoundStart);
                                    if (null != e) {
                                        (null != r && e <= r && n.clear(), n.set(e, a.timestamp_ms), (r = e));
                                        continue;
                                    }
                                    let s = S(a, i.C.RoundEnd);
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
                                _.nx.info(
                                    `automontage: no valid CS2 rounds reconstructed from ${s.length} game events - skipping round summary`,
                                ),
                                null
                            );
                        let o = (0, a.Q4)(e.gameId, s),
                            d =
                                ((t = (function (e, t) {
                                    if (e?.calculateModifiers == null || 0 === t.length) return () => 1;
                                    let n = N(t[0].timestamp_ms),
                                        i = N(t[t.length - 1].timestamp_ms),
                                        r = new Map(
                                            e.calculateModifiers(n, i).map((e) => [e.timestamp_ms, e.modifier]),
                                        );
                                    return (e) => r.get(N(e)) ?? 1;
                                })(o, s)),
                                (n = new Float64Array(s.length + 1)),
                                (r = 0),
                                s.forEach((e, a) => {
                                    let s = e.score ?? 0;
                                    o?.rescoreEvent != null &&
                                        (s = e.eventName === i.C.Death ? -0.1 : (o.rescoreEvent(e) ?? s));
                                    let l = s * t(e.timestamp_ms);
                                    (Number.isFinite(l) || (r++, (l = 0)), (n[a + 1] = n[a] + l));
                                }),
                                r > 0 &&
                                    _.nx.warn(
                                        `automontage: ignored ${r} non-finite event score(s) while ranking rounds`,
                                    ),
                                l
                                    .map((e) => {
                                        let t = C(s, e.startMs, !1),
                                            i = C(s, e.endMs, !1);
                                        return { round: e, score: n[i] - n[t] };
                                    })
                                    .sort((e, t) => t.score - e.score)),
                            c = d[0];
                        if (c.score <= g)
                            return (
                                _.nx.info(
                                    `automontage: best CS2 round ${c.round.number} scored ${c.score.toFixed(3)}, not above the ${g} minimum - skipping round summary`,
                                ),
                                null
                            );
                        let u = (function (e, t) {
                                let n = e.startMs + 23e3,
                                    r = [(0, I.Wp)({ startMs: n, endMs: n }, T, { label: `r${e.number} context` })],
                                    a = C(t, n, !1),
                                    s = C(t, e.endMs, !0),
                                    l = t.slice(a, s),
                                    o = h(l),
                                    d = new Set(A(l.filter((e) => e.eventName === i.C.MultiKill)));
                                for (let t of l) {
                                    let n = t.eventName;
                                    if (null == n) continue;
                                    let a = p.get(n);
                                    if (null == a) continue;
                                    let s = `r${e.number} ${n}`;
                                    if (n === i.C.MultiKill) {
                                        if (!d.has(t)) continue;
                                        let e = f(t, o) ?? t.timestamp_ms;
                                        r.push((0, I.Wp)({ startMs: e, endMs: t.timestamp_ms }, a, { label: s }));
                                    } else
                                        r.push(
                                            (0, I.Wp)({ startMs: t.timestamp_ms, endMs: t.timestamp_ms }, a, {
                                                label: s,
                                            }),
                                        );
                                }
                                return (
                                    r.push(
                                        (0, I.Wp)({ startMs: e.endMs, endMs: e.endMs }, m, {
                                            label: `r${e.number} round end`,
                                        }),
                                    ),
                                    r.sort((e, t) => e.srcStartMs - t.srcStartMs),
                                    r
                                );
                            })(c.round, s),
                            E = (0, I.X0)(u),
                            { resolved: O, skipped: R } = (0, I.z2)(E, e.clipCandidates);
                        return 0 === O.length
                            ? (_.nx.info(
                                  `automontage: no candidate clip covers any of the ${E.length} sections of best round ${c.round.number} (candidates=${e.clipCandidates.length}) - skipping round summary`,
                              ),
                              null)
                            : {
                                  durationMs: (0, I.s_)(O, e.config.blendMs),
                                  resolved: O,
                                  skipped: R,
                                  bestRound: c,
                                  rankedRounds: d,
                              };
                    })({
                        gameEventData: t.decisionSignals.gameEventData,
                        clipCandidates: n,
                        gameId: t.gameId,
                        config: r,
                    });
                return null == s
                    ? null
                    : { type: e, config: r, durationMs: s.durationMs, resolved: s.resolved, skipped: s.skipped };
            },
        },
        {
            type: "highlight_reels",
            applicationIds: null,
            kind: "preset",
            settings: {
                includeOtherUsers: !0,
                startOnSilence: !0,
                endOnSilence: !0,
                requireVoiceGamePair: !0,
                blendMs: 300,
                minDurationMs: 25e3,
                maxDurationMs: 9e4,
                laughterThreshold: 0.75,
                shoutingThreshold: 0.5,
                events: M,
            },
        },
        {
            type: "kill_compilation",
            applicationIds: r.E.applicationIds,
            kind: "preset",
            settings: {
                includeOtherUsers: !1,
                startOnSilence: !1,
                endOnSilence: !1,
                requireVoiceGamePair: !1,
                blendMs: 300,
                minDurationMs: 25e3,
                maxDurationMs: 9e4,
                events: P,
            },
        },
        {
            type: "league_of_legends_game_highlights",
            applicationIds: [v.m],
            kind: "preset",
            settings: {
                includeOtherUsers: !1,
                startOnSilence: !1,
                endOnSilence: !1,
                requireVoiceGamePair: !1,
                blendMs: 300,
                minDurationMs: 3e4,
                maxDurationMs: 9e4,
                events: U,
            },
        },
        {
            type: "league_of_legends_kill_compil",
            applicationIds: [v.m],
            kind: "preset",
            settings: {
                includeOtherUsers: !1,
                startOnSilence: !1,
                endOnSilence: !1,
                requireVoiceGamePair: !1,
                blendMs: 300,
                minDurationMs: 3e4,
                maxDurationMs: 6e4,
                events: w,
            },
        },
    ];
function x(e) {
    var t,
        n = ((t = e.gameId), G.filter((e) => null == e.applicationIds || (null != t && e.applicationIds.includes(t)))),
        i = e;
    let r = (function (e) {
        let t = [];
        for (let n of e)
            null != n.decision && t.push({ id: n.id, filepath: n.filepath, length: n.length, decision: n.decision });
        return t;
    })(i.clipCandidates);
    if (0 === r.length)
        return (
            _.nx.info(
                `automontage: no usable clip candidates in this session (received ${i.clipCandidates.length}) - skipping montage`,
            ),
            null
        );
    for (let e of n) {
        let t =
            "custom" === e.kind
                ? e.build(e.type, i, r)
                : (function (e, t, n, i) {
                      var r, u, E, p;
                      let T,
                          m = (function (e, t, n, i) {
                              let { localUserId: r, gameId: c, ...u } = n,
                                  _ = [],
                                  E = A(e ?? []),
                                  I = h(E),
                                  p = (0, a.Q4)(c, E);
                              function T(e, t) {
                                  return p?.isInGame == null || p.isInGame((e + t) / 2);
                              }
                              for (let e of E) {
                                  let t = e.eventName;
                                  if (null == t) continue;
                                  let n = i[`game:${t}`];
                                  if (null == n) continue;
                                  let r = f(e, I) ?? e.clipWindow?.startMs ?? e.timestamp_ms,
                                      a = e.clipWindow?.endMs ?? e.timestamp_ms;
                                  T(r, a) && _.push({ startMs: r, endMs: a, kind: "game", padding: n });
                              }
                              let m = new Map();
                              for (let e of o) {
                                  let t = i[`audio:${e}`];
                                  null != t && m.set(e, t);
                              }
                              if (m.size > 0)
                                  for (let e of (function (e, t, n, i) {
                                      let { includeOtherUsers: r, laughterThreshold: o, shoutingThreshold: c } = n;
                                      if (0 === i.length) return [];
                                      let u = Object.keys(e).filter((e) => e === t || r),
                                          _ = Number.MAX_VALUE,
                                          E = -Number.MAX_VALUE;
                                      for (let t of u) {
                                          let n = e[t];
                                          for (let e of [n.rmsData, ...i.map((e) => n[d[e]])])
                                              for (let t of e)
                                                  (t.timestamp_ms < _ && (_ = t.timestamp_ms),
                                                      t.timestamp_ms > E && (E = t.timestamp_ms));
                                      }
                                      if (E < _) return [];
                                      let A = (E - _) / a.pn + 1;
                                      function h(e) {
                                          return (0, a.lq)(
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
                                      let f = (0, s.A)(),
                                          I = {
                                              laughter: o ?? f.laughterEventThreshold,
                                              shouting: c ?? f.shoutingEventThreshold,
                                          },
                                          p = u.map((t) => h(e[t].rmsData)),
                                          T = (0, l.kV)(p, f),
                                          m = [];
                                      for (let t of i) {
                                          let n = u.map((n) => h(e[n][d[t]])),
                                              i = (0, l.br)(n, f, I[t]),
                                              r = null != T ? (0, l.ei)(i, T) : i;
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
                                              })(r[n]))
                                                  i.endChunk - i.startChunk + 1 < f.minConsecutiveChunks ||
                                                      m.push({
                                                          kind: t,
                                                          userId: e,
                                                          startMs: _ + i.startChunk * a.pn,
                                                          endMs: _ + i.endChunk * a.pn,
                                                      });
                                          });
                                      }
                                      return (m.sort((e, t) => e.startMs - t.startMs), m);
                                  })(t, r, u, Array.from(m.keys()))) {
                                      let t = m.get(e.kind);
                                      null != t &&
                                          T(e.startMs, e.endMs) &&
                                          _.push({ startMs: e.startMs, endMs: e.endMs, kind: "audio", padding: t });
                                  }
                              return _;
                          })(
                              n.decisionSignals.gameEventData,
                              n.decisionSignals.audioModelDataPerUser,
                              {
                                  localUserId: n.localUserId,
                                  gameId: n.gameId,
                                  includeOtherUsers: t.includeOtherUsers,
                                  laughterThreshold: t.laughterThreshold,
                                  shoutingThreshold: t.shoutingThreshold,
                              },
                              t.events,
                          );
                      if (0 === m.length)
                          return (
                              _.nx.info(
                                  `automontage: preset ${e} matched no events in this session - skipping montage`,
                              ),
                              null
                          );
                      let g =
                              t.startOnSilence || t.endOnSilence
                                  ? ((r = (function (e) {
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
                                                    if (i.type !== _.Gy.SPEAKING || null == e.timestamp) continue;
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
                                    })(n.clipCandidates)),
                                    (u = n.localUserId),
                                    t.includeOtherUsers ? [...r] : r.filter((e) => e.userId === u))
                                  : [],
                          S = { ...I.yC, blendMs: t.blendMs },
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
                                      scoreSection: d,
                                  } = e,
                                  u = (function (e, t, n, i) {
                                      let r = [];
                                      for (let a of e) {
                                          let e = (0, I.Wp)(a, a.padding, {
                                              hasGame: "game" === a.kind,
                                              hasAudio: "audio" === a.kind,
                                          });
                                          (n &&
                                              (e.srcStartMs = (function (e, t) {
                                                  let n = c(t, e, !1);
                                                  if (-1 === n) return e;
                                                  let i = t[n];
                                                  return e < i.endMs ? i.startMs : e;
                                              })(e.srcStartMs, t)),
                                              i &&
                                                  (e.srcEndMs = (function (e, t) {
                                                      let n = c(t, e, !0);
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
                                  E = (0, I.X0)(u),
                                  A = l ? E.filter((e) => !0 === e.hasGame && !0 === e.hasAudio) : E,
                                  h = [],
                                  f = [];
                              for (let e of A) e.srcEndMs - e.srcStartMs < I.rx ? h.push(e) : f.push(e);
                              let { resolved: p, skipped: T } = (0, I.z2)(f, n),
                                  { kept: m, removed: g } = (function (e, t, n, i) {
                                      let r = [...e],
                                          a = e
                                              .map((e, t) => {
                                                  let { startMs: n, endMs: r } = L(e);
                                                  return { id: t, score: i(n, r) };
                                              })
                                              .sort((e, t) => t.score - e.score),
                                          s = [],
                                          l = D(r, t);
                                      for (; l > n;) {
                                          let n = a.pop();
                                          if (null == n) break;
                                          (s.push(e[n.id]), (r[n.id] = null), (l = D(r, t)));
                                      }
                                      return (
                                          s.length > 0 &&
                                              _.nx.info(
                                                  `automontage: removed ${s.length} lowest-scored section(s) to fit the ${n}ms maximum (durationMs=${l})`,
                                              ),
                                          { kept: r.filter((e) => null != e), removed: s, durationMs: l }
                                      );
                                  })(p, i.blendMs, o, d);
                              return {
                                  durationMs: (0, I.s_)(m, i.blendMs),
                                  resolved: m,
                                  skipped: [...h, ...T, ...g.map(y)],
                                  requestedSectionCount: A.length,
                                  trimmedSectionCount: g.length,
                              };
                          })({
                              selected: m,
                              clipCandidates: i,
                              config: S,
                              speakingSpans: g,
                              startOnSilence: t.startOnSilence,
                              endOnSilence: t.endOnSilence,
                              requireVoiceGamePair: t.requireVoiceGamePair,
                              maxDurationMs: t.maxDurationMs,
                              scoreSection:
                                  ((E = n.decisionSignals.gameEventData),
                                  (p = n.gameId),
                                  (function (e, t) {
                                      if (0 === e.length) return () => 0;
                                      let n = () => 1;
                                      if (t?.calculateModifiers != null) {
                                          let i = R(e[0].timestamp_ms),
                                              r = R(e[e.length - 1].timestamp_ms),
                                              a = new Map(
                                                  t.calculateModifiers(i, r).map((e) => [e.timestamp_ms, e.modifier]),
                                              );
                                          n = (e) => a.get(R(e)) ?? 1;
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
                                              _.nx.warn(
                                                  `automontage: ignored ${r} non-finite event score(s) while scoring sections`,
                                              ),
                                          (t, n) => {
                                              let r = (0, O.sortedIndexBy)(e, { timestamp_ms: t }, "timestamp_ms");
                                              return (
                                                  i[(0, O.sortedLastIndexBy)(e, { timestamp_ms: n }, "timestamp_ms")] -
                                                  i[r]
                                              );
                                          }
                                      );
                                  })((T = [...E].sort((e, t) => e.timestamp_ms - t.timestamp_ms)), (0, a.Q4)(p, T))),
                          });
                      return 0 === N.resolved.length
                          ? (_.nx.info(
                                N.trimmedSectionCount > 0
                                    ? `automontage: preset ${e} - all ${N.trimmedSectionCount} resolved section(s) were removed to fit the ${t.maxDurationMs}ms maximum - skipping montage`
                                    : `automontage: preset ${e} - no candidate clip covers any of the ${N.requestedSectionCount} requested sections (candidates=${i.length}, skipped=${N.skipped.length}) - skipping montage`,
                            ),
                            null)
                          : N.durationMs < t.minDurationMs
                            ? (_.nx.info(
                                  `automontage: preset ${e} duration ${N.durationMs}ms is below the ${t.minDurationMs}ms minimum - skipping montage`,
                              ),
                              null)
                            : {
                                  type: e,
                                  config: S,
                                  durationMs: N.durationMs,
                                  resolved: N.resolved,
                                  skipped: N.skipped,
                              };
                  })(e.type, e.settings, i, r);
        if (null != t) return t;
    }
    return null;
}
function k(e, t, n) {
    return (0, I.BA)(e.resolved, t, e.config, n);
}
