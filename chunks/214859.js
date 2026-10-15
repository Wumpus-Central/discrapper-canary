(n.d(t, { V1: () => Y, $Q: () => W }), n(321073));
var i = n(106983),
    r = n(144705),
    a = n(786661),
    s = n(510373),
    l = n(565120),
    o = n(521306),
    d = n(160850),
    c = n(45926),
    u = n(557329);
let _ = ["laughter", "shouting"],
    E = { laughter: "laughterData", shouting: "shoutingData" };
function A(e, t, n) {
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
var h = n(260549),
    f = n(696016);
function I(e) {
    let t = e.additionalData?.[f.A_];
    return Array.isArray(t) && 0 !== t.length && t.every((e) => "string" == typeof e) ? t : null;
}
function p(e) {
    let t = new Map(),
        n = [];
    for (let i of e) {
        let e = I(i);
        if (null == e) {
            n.push(i);
            continue;
        }
        let r = t.get(e[0]);
        (null == r || e.length > r.killCount) && t.set(e[0], { event: i, killCount: e.length });
    }
    return [...n, ...Array.from(t.values(), (e) => e.event)];
}
function T(e) {
    let t = new Map();
    for (let n of e) {
        let e = n.additionalData?.[f.gy];
        "string" != typeof e || t.has(e) || t.set(e, n.timestamp_ms);
    }
    return t;
}
function m(e, t) {
    let n = I(e);
    if (null == n) return null;
    let i = t.get(n[0]);
    return null == i || i > e.timestamp_ms ? null : i;
}
var g = n(598213);
let S = new Map([
        [i.C.Kill, { beforeMs: 3e3, afterMs: 2e3 }],
        [i.C.Death, { beforeMs: 3e3, afterMs: 2e3 }],
        [i.C.MultiKill, { beforeMs: 3e3, afterMs: 2e3 }],
        [i.C.BombPlant, { beforeMs: 2e3, afterMs: 3e3 }],
        [i.C.BombDefused, { beforeMs: 3e3, afterMs: 5e3 }],
        [i.C.BombExploded, { beforeMs: 3e3, afterMs: 5e3 }],
    ]),
    N = { beforeMs: 3e3, afterMs: 2e3 },
    C = { beforeMs: 2e3, afterMs: 4e3 },
    O = 2 * h.U;
function R(e, t) {
    if (e.eventName !== t) return null;
    let n = e.additionalData?.round;
    return "number" == typeof n ? n : null;
}
function L(e) {
    return 1e3 * Math.floor(e / 1e3);
}
function y(e, t, n) {
    let i = 0,
        r = e.length;
    for (; i < r;) {
        let a = (i + r) >> 1,
            s = e[a].timestamp_ms;
        s < t || (!n && s === t) ? (i = a + 1) : (r = a);
    }
    return i;
}
var D = n(435558);
function v(e) {
    return 1e3 * Math.floor(e / 1e3);
}
function b(e) {
    let t = (0, g.lQ)(e.clip);
    return { startMs: t + e.videoStartMs, endMs: t + e.videoEndMs };
}
function M(e) {
    let { startMs: t, endMs: n } = b(e);
    return { srcStartMs: t, srcEndMs: n, label: e.label };
}
function P(e, t) {
    let n = 0,
        i = !0;
    for (let r of e) {
        if (null == r) continue;
        let e = r.videoEndMs - r.videoStartMs;
        ((n += e), i || (n -= Math.min(t, e)), (i = !1));
    }
    return n;
}
var U = n(801344),
    w = n(979563);
let G = {
        "audio:laughter": { beforeMs: 3e3, afterMs: 2e3 },
        "audio:shouting": { beforeMs: 3e3, afterMs: 2e3 },
        [`game:${i.C.Kill}`]: { beforeMs: 1250, afterMs: 1250 },
        [`game:${i.C.MultiKill}`]: { beforeMs: 1250, afterMs: 1250 },
        [`game:${i.C.Death}`]: { beforeMs: 1250, afterMs: 1250 },
    },
    x = { [`game:${i.C.Kill}`]: { beforeMs: 2e3, afterMs: 1e3 } },
    k = {
        [`game:${U.n_.ChampionKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${U.n_.DoubleKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${U.n_.TripleKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${U.n_.QuadraKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${U.n_.PentaKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${U.n_.TeamFightWin}`]: { beforeMs: 3e3, afterMs: 0 },
        [`game:${U.n_.DragonSteal}`]: { beforeMs: 5e3, afterMs: 1e3 },
        [`game:${U.n_.BaronSteal}`]: { beforeMs: 5e3, afterMs: 1e3 },
    },
    F = {
        [`game:${U.n_.ChampionKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${U.n_.DoubleKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${U.n_.TripleKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${U.n_.QuadraKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${U.n_.PentaKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
    },
    B = {
        [`game:${r.I.Kill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${r.I.MultiKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${r.I.TeamFightWin}`]: { beforeMs: 3e3, afterMs: 0 },
    },
    V = {
        [`game:${r.I.Kill}`]: { beforeMs: 6e3, afterMs: 2e3 },
        [`game:${r.I.MultiKill}`]: { beforeMs: 6e3, afterMs: 2e3 },
    },
    H = {
        [`game:${w.d.Goal}`]: { beforeMs: 8e3, afterMs: 3e3 },
        [`game:${w.d.Save}`]: { beforeMs: 5e3, afterMs: 3e3 },
        [`game:${w.d.EpicSave}`]: { beforeMs: 5e3, afterMs: 3e3 },
    },
    j = [
        {
            type: "cs2_round_summary",
            applicationIds: a.E.applicationIds,
            kind: "custom",
            build: function (e, t, n) {
                let r = { ...g.yC, audioTrackLabel: "0:all", blendMs: 300 },
                    a = (function (e) {
                        let t,
                            n,
                            r,
                            a = [...e.gameEventData].sort((e, t) => e.timestamp_ms - t.timestamp_ms),
                            s = (function (e) {
                                let t = [],
                                    n = new Map(),
                                    r = null;
                                for (let a of e) {
                                    if (a.eventName === i.C.InMatchChange && a.additionalData?.inMatch !== !0) {
                                        (n.clear(), (r = null));
                                        continue;
                                    }
                                    let e = R(a, i.C.RoundStart);
                                    if (null != e) {
                                        (null != r && e <= r && n.clear(), n.set(e, a.timestamp_ms), (r = e));
                                        continue;
                                    }
                                    let s = R(a, i.C.RoundEnd);
                                    if (null == s) continue;
                                    let l = n.get(s);
                                    null != l &&
                                        (n.delete(s),
                                        a.timestamp_ms <= l ||
                                            t.push({ number: s, startMs: l, endMs: a.timestamp_ms }));
                                }
                                return t.sort((e, t) => e.startMs - t.startMs);
                            })(a);
                        if (0 === s.length)
                            return (
                                f.nx.info(
                                    `automontage: no valid CS2 rounds reconstructed from ${a.length} game events - skipping round summary`,
                                ),
                                null
                            );
                        let l = (0, d.Q4)(e.gameId, a),
                            o =
                                ((t = (function (e, t) {
                                    if (e?.calculateModifiers == null || 0 === t.length) return () => 1;
                                    let n = L(t[0].timestamp_ms),
                                        i = L(t[t.length - 1].timestamp_ms),
                                        r = new Map(
                                            e.calculateModifiers(n, i).map((e) => [e.timestamp_ms, e.modifier]),
                                        );
                                    return (e) => r.get(L(e)) ?? 1;
                                })(l, a)),
                                (n = new Float64Array(a.length + 1)),
                                (r = 0),
                                a.forEach((e, a) => {
                                    let s = e.score ?? 0;
                                    l?.rescoreEvent != null &&
                                        (s = e.eventName === i.C.Death ? -0.1 : (l.rescoreEvent(e) ?? s));
                                    let o = s * t(e.timestamp_ms);
                                    (Number.isFinite(o) || (r++, (o = 0)), (n[a + 1] = n[a] + o));
                                }),
                                r > 0 &&
                                    f.nx.warn(
                                        `automontage: ignored ${r} non-finite event score(s) while ranking rounds`,
                                    ),
                                s
                                    .map((e) => {
                                        let t = y(a, e.startMs, !1),
                                            i = y(a, e.endMs, !1);
                                        return { round: e, score: n[i] - n[t] };
                                    })
                                    .sort((e, t) => t.score - e.score)),
                            c = o[0];
                        if (c.score <= O)
                            return (
                                f.nx.info(
                                    `automontage: best CS2 round ${c.round.number} scored ${c.score.toFixed(3)}, not above the ${O} minimum - skipping round summary`,
                                ),
                                null
                            );
                        let u = (function (e, t) {
                                let n = e.startMs + 23e3,
                                    r = [(0, g.Wp)({ startMs: n, endMs: n }, N, { label: `r${e.number} context` })],
                                    a = y(t, n, !1),
                                    s = y(t, e.endMs, !0),
                                    l = t.slice(a, s),
                                    o = T(l),
                                    d = new Set(p(l.filter((e) => e.eventName === i.C.MultiKill)));
                                for (let t of l) {
                                    let n = t.eventName;
                                    if (null == n) continue;
                                    let a = S.get(n);
                                    if (null == a) continue;
                                    let s = `r${e.number} ${n}`;
                                    if (n === i.C.MultiKill) {
                                        if (!d.has(t)) continue;
                                        let e = m(t, o) ?? t.timestamp_ms;
                                        r.push((0, g.Wp)({ startMs: e, endMs: t.timestamp_ms }, a, { label: s }));
                                    } else
                                        r.push(
                                            (0, g.Wp)({ startMs: t.timestamp_ms, endMs: t.timestamp_ms }, a, {
                                                label: s,
                                            }),
                                        );
                                }
                                return (
                                    r.push(
                                        (0, g.Wp)({ startMs: e.endMs, endMs: e.endMs }, C, {
                                            label: `r${e.number} round end`,
                                        }),
                                    ),
                                    r.sort((e, t) => e.srcStartMs - t.srcStartMs),
                                    r
                                );
                            })(c.round, a),
                            _ = (0, g.X0)(u),
                            { resolved: E, skipped: A } = (0, g.z2)(_, e.clipCandidates);
                        return 0 === E.length
                            ? (f.nx.info(
                                  `automontage: no candidate clip covers any of the ${_.length} sections of best round ${c.round.number} (candidates=${e.clipCandidates.length}) - skipping round summary`,
                              ),
                              null)
                            : {
                                  durationMs: (0, g.s_)(E, e.config.blendMs),
                                  resolved: E,
                                  skipped: A,
                                  bestRound: c,
                                  rankedRounds: o,
                              };
                    })({
                        gameEventData: t.decisionSignals.gameEventData,
                        clipCandidates: n,
                        gameId: t.gameId,
                        config: r,
                    });
                return null == a
                    ? null
                    : { type: e, config: r, durationMs: a.durationMs, resolved: a.resolved, skipped: a.skipped };
            },
            weight: 2,
        },
        {
            type: "cs2_highlight_reels",
            applicationIds: a.E.applicationIds,
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
                events: G,
            },
            weight: 2,
        },
        {
            type: "cs2_kill_compilation",
            applicationIds: a.E.applicationIds,
            kind: "preset",
            settings: {
                includeOtherUsers: !1,
                startOnSilence: !1,
                endOnSilence: !1,
                requireVoiceGamePair: !1,
                blendMs: 300,
                minDurationMs: 25e3,
                maxDurationMs: 9e4,
                events: x,
            },
            weight: 1,
        },
        {
            type: "league_of_legends_game_highlights",
            applicationIds: l.S.applicationIds,
            kind: "preset",
            settings: {
                includeOtherUsers: !1,
                startOnSilence: !1,
                endOnSilence: !1,
                requireVoiceGamePair: !1,
                blendMs: 300,
                minDurationMs: 3e4,
                maxDurationMs: 9e4,
                events: k,
            },
            weight: 2,
        },
        {
            type: "league_of_legends_kill_compil",
            applicationIds: l.S.applicationIds,
            kind: "preset",
            settings: {
                includeOtherUsers: !1,
                startOnSilence: !1,
                endOnSilence: !1,
                requireVoiceGamePair: !1,
                blendMs: 300,
                minDurationMs: 3e4,
                maxDurationMs: 6e4,
                events: F,
            },
            weight: 1,
        },
        {
            type: "dota_2_game_highlights",
            applicationIds: s.e.applicationIds,
            kind: "preset",
            settings: {
                includeOtherUsers: !1,
                startOnSilence: !1,
                endOnSilence: !1,
                requireVoiceGamePair: !1,
                blendMs: 300,
                minDurationMs: 3e4,
                maxDurationMs: 9e4,
                events: B,
            },
            weight: 2,
        },
        {
            type: "dota_2_kill_compil",
            applicationIds: s.e.applicationIds,
            kind: "preset",
            settings: {
                includeOtherUsers: !1,
                startOnSilence: !1,
                endOnSilence: !1,
                requireVoiceGamePair: !1,
                blendMs: 300,
                minDurationMs: 3e4,
                maxDurationMs: 6e4,
                events: V,
            },
            weight: 1,
        },
        {
            type: "rocket_league_goal_and_save_compil",
            applicationIds: o.P.applicationIds,
            kind: "preset",
            settings: {
                includeOtherUsers: !1,
                startOnSilence: !1,
                endOnSilence: !1,
                requireVoiceGamePair: !1,
                blendMs: 300,
                minDurationMs: 3e4,
                maxDurationMs: 6e4,
                events: H,
            },
            weight: 1,
        },
    ];
function W(e) {
    var t = (function (e, t) {
            var n, i;
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
            return (
                (n = e.filter((e) => null == e.applicationIds || (null != t && e.applicationIds.includes(t)))),
                (i = r),
                n
                    .map((e) => ({ montage: e, key: Math.pow(i(), 1 / e.weight) }))
                    .sort((e, t) => t.key - e.key)
                    .map((e) => {
                        let { montage: t } = e;
                        return t;
                    })
            );
        })(j, e.gameId),
        n = e;
    let i = (function (e) {
        let t = [];
        for (let n of e)
            null != n.decision && t.push({ id: n.id, filepath: n.filepath, length: n.length, decision: n.decision });
        return t;
    })(n.clipCandidates);
    if (0 === i.length)
        return (
            f.nx.info(
                `automontage: no usable clip candidates in this session (received ${n.clipCandidates.length}) - skipping montage`,
            ),
            null
        );
    for (let e of t) {
        let t =
            "custom" === e.kind
                ? e.build(e.type, n, i)
                : (function (e, t, n, i) {
                      var r, a, s, l;
                      let o,
                          h = (function (e, t, n, i) {
                              let { localUserId: r, gameId: a, ...s } = n,
                                  l = [],
                                  o = p(e ?? []),
                                  A = T(o),
                                  h = (0, d.Q4)(a, o);
                              function f(e, t) {
                                  return h?.isInGame == null || h.isInGame((e + t) / 2);
                              }
                              for (let e of o) {
                                  let t = e.eventName;
                                  if (null == t) continue;
                                  let n = i[`game:${t}`];
                                  if (null == n) continue;
                                  let r = m(e, A) ?? e.clipWindow?.startMs ?? e.timestamp_ms,
                                      a = e.clipWindow?.endMs ?? e.timestamp_ms;
                                  f(r, a) && l.push({ startMs: r, endMs: a, kind: "game", padding: n });
                              }
                              let I = new Map();
                              for (let e of _) {
                                  let t = i[`audio:${e}`];
                                  null != t && I.set(e, t);
                              }
                              if (I.size > 0)
                                  for (let e of (function (e, t, n, i) {
                                      let { includeOtherUsers: r, laughterThreshold: a, shoutingThreshold: s } = n;
                                      if (0 === i.length) return [];
                                      let l = Object.keys(e).filter((e) => e === t || r),
                                          o = Number.MAX_VALUE,
                                          _ = -Number.MAX_VALUE;
                                      for (let t of l) {
                                          let n = e[t];
                                          for (let e of [n.rmsData, ...i.map((e) => n[E[e]])])
                                              for (let t of e)
                                                  (t.timestamp_ms < o && (o = t.timestamp_ms),
                                                      t.timestamp_ms > _ && (_ = t.timestamp_ms));
                                      }
                                      if (_ < o) return [];
                                      let A = (_ - o) / d.pn + 1;
                                      function h(e) {
                                          return (0, d.lq)(
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
                                              o,
                                              A,
                                          ).map((e) => e.value);
                                      }
                                      let f = (0, c.A)(),
                                          I = {
                                              laughter: a ?? f.laughterEventThreshold,
                                              shouting: s ?? f.shoutingEventThreshold,
                                          },
                                          p = l.map((t) => h(e[t].rmsData)),
                                          T = (0, u.kV)(p, f),
                                          m = [];
                                      for (let t of i) {
                                          let n = l.map((n) => h(e[n][E[t]])),
                                              i = (0, u.br)(n, f, I[t]),
                                              r = null != T ? (0, u.ei)(i, T) : i;
                                          l.forEach((e, n) => {
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
                                                          startMs: o + i.startChunk * d.pn,
                                                          endMs: o + i.endChunk * d.pn,
                                                      });
                                          });
                                      }
                                      return (m.sort((e, t) => e.startMs - t.startMs), m);
                                  })(t, r, s, Array.from(I.keys()))) {
                                      let t = I.get(e.kind);
                                      null != t &&
                                          f(e.startMs, e.endMs) &&
                                          l.push({ startMs: e.startMs, endMs: e.endMs, kind: "audio", padding: t });
                                  }
                              return l;
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
                      if (0 === h.length)
                          return (
                              f.nx.info(
                                  `automontage: preset ${e} matched no events in this session - skipping montage`,
                              ),
                              null
                          );
                      let I =
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
                                                    if (i.type !== f.Gy.SPEAKING || null == e.timestamp) continue;
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
                                    (a = n.localUserId),
                                    t.includeOtherUsers ? [...r] : r.filter((e) => e.userId === a))
                                  : [],
                          S = { ...g.yC, blendMs: t.blendMs },
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
                                  c = (function (e, t, n, i) {
                                      let r = [];
                                      for (let a of e) {
                                          let e = (0, g.Wp)(a, a.padding, {
                                              hasGame: "game" === a.kind,
                                              hasAudio: "audio" === a.kind,
                                          });
                                          (n &&
                                              (e.srcStartMs = (function (e, t) {
                                                  let n = A(t, e, !1);
                                                  if (-1 === n) return e;
                                                  let i = t[n];
                                                  return e < i.endMs ? i.startMs : e;
                                              })(e.srcStartMs, t)),
                                              i &&
                                                  (e.srcEndMs = (function (e, t) {
                                                      let n = A(t, e, !0);
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
                                  u = (0, g.X0)(c),
                                  _ = l ? u.filter((e) => !0 === e.hasGame && !0 === e.hasAudio) : u,
                                  E = [],
                                  h = [];
                              for (let e of _) e.srcEndMs - e.srcStartMs < g.rx ? E.push(e) : h.push(e);
                              let { resolved: I, skipped: p } = (0, g.z2)(h, n),
                                  { kept: T, removed: m } = (function (e, t, n, i) {
                                      let r = [...e],
                                          a = e
                                              .map((e, t) => {
                                                  let { startMs: n, endMs: r } = b(e);
                                                  return { id: t, score: i(n, r) };
                                              })
                                              .sort((e, t) => t.score - e.score),
                                          s = [],
                                          l = P(r, t);
                                      for (; l > n;) {
                                          let n = a.pop();
                                          if (null == n) break;
                                          (s.push(e[n.id]), (r[n.id] = null), (l = P(r, t)));
                                      }
                                      return (
                                          s.length > 0 &&
                                              f.nx.info(
                                                  `automontage: removed ${s.length} lowest-scored section(s) to fit the ${n}ms maximum (durationMs=${l})`,
                                              ),
                                          { kept: r.filter((e) => null != e), removed: s, durationMs: l }
                                      );
                                  })(I, i.blendMs, o, d);
                              return {
                                  durationMs: (0, g.s_)(T, i.blendMs),
                                  resolved: T,
                                  skipped: [...E, ...p, ...m.map(M)],
                                  requestedSectionCount: _.length,
                                  trimmedSectionCount: m.length,
                              };
                          })({
                              selected: h,
                              clipCandidates: i,
                              config: S,
                              speakingSpans: I,
                              startOnSilence: t.startOnSilence,
                              endOnSilence: t.endOnSilence,
                              requireVoiceGamePair: t.requireVoiceGamePair,
                              maxDurationMs: t.maxDurationMs,
                              scoreSection:
                                  ((s = n.decisionSignals.gameEventData),
                                  (l = n.gameId),
                                  (function (e, t) {
                                      if (0 === e.length) return () => 0;
                                      let n = () => 1;
                                      if (t?.calculateModifiers != null) {
                                          let i = v(e[0].timestamp_ms),
                                              r = v(e[e.length - 1].timestamp_ms),
                                              a = new Map(
                                                  t.calculateModifiers(i, r).map((e) => [e.timestamp_ms, e.modifier]),
                                              );
                                          n = (e) => a.get(v(e)) ?? 1;
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
                                              f.nx.warn(
                                                  `automontage: ignored ${r} non-finite event score(s) while scoring sections`,
                                              ),
                                          (t, n) => {
                                              let r = (0, D.sortedIndexBy)(e, { timestamp_ms: t }, "timestamp_ms");
                                              return (
                                                  i[(0, D.sortedLastIndexBy)(e, { timestamp_ms: n }, "timestamp_ms")] -
                                                  i[r]
                                              );
                                          }
                                      );
                                  })((o = [...s].sort((e, t) => e.timestamp_ms - t.timestamp_ms)), (0, d.Q4)(l, o))),
                          });
                      return 0 === N.resolved.length
                          ? (f.nx.info(
                                N.trimmedSectionCount > 0
                                    ? `automontage: preset ${e} - all ${N.trimmedSectionCount} resolved section(s) were removed to fit the ${t.maxDurationMs}ms maximum - skipping montage`
                                    : `automontage: preset ${e} - no candidate clip covers any of the ${N.requestedSectionCount} requested sections (candidates=${i.length}, skipped=${N.skipped.length}) - skipping montage`,
                            ),
                            null)
                          : N.durationMs < t.minDurationMs
                            ? (f.nx.info(
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
                  })(e.type, e.settings, n, i);
        if (null != t) return t;
    }
    return null;
}
function Y(e, t, n) {
    return (0, g.BA)(e.resolved, t, e.config, n);
}
