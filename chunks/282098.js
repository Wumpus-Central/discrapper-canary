n.d(t, { A: () => eo, i: () => el }), n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(459838),
    s = n(451988),
    l = n(439372),
    o = n(77729),
    d = n(608960),
    c = n(952818),
    u = n(311043),
    _ = n(209932),
    E = n(280450),
    A = n(309010),
    h = n(287809),
    I = n(779559),
    f = n(915725);
class p {
    timeline = [];
    timelineLength;
    clipNow;
    constructor(e = 3e5, t) {
        (this.timelineLength = e), (this.clipNow = t);
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
        let e = this.clipNow() - this.timelineLength;
        for (; this.timeline.length > 0 && this.timeline[0].timestamp < e; ) this.timeline.shift();
    }
}
var T = n(439818),
    m = n(572164),
    g = n(831518),
    S = n(655180),
    N = n(31048),
    C = n(997649),
    O = n(106983),
    R = n(45926),
    L = n(557329);
let y = ["laughter", "shouting"],
    D = { laughter: "laughterData", shouting: "shoutingData" };
function v(e, t, n) {
    let i = 0,
        r = e.length - 1,
        a = -1;
    for (; i <= r; ) {
        let s = (i + r) >> 1,
            l = e[s].startMs;
        l < t || (n && l === t) ? ((a = s), (i = s + 1)) : (r = s - 1);
    }
    return a;
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var b = n(260549);
function M(e) {
    if (e.eventName !== O.C.MultiKill) return null;
    let t = e.additionalData?.killIds;
    return Array.isArray(t) && 0 !== t.length && t.every((e) => "string" == typeof e) ? t : null;
}
function P(e) {
    let t = new Map(),
        n = [];
    for (let i of e) {
        let e = M(i);
        if (null == e) {
            n.push(i);
            continue;
        }
        let r = t.get(e[0]);
        (null == r || e.length > r.killCount) && t.set(e[0], { event: i, killCount: e.length });
    }
    return [...n, ...Array.from(t.values(), (e) => e.event)];
}
function U(e) {
    let t = new Map();
    for (let n of e) {
        if (n.eventName !== O.C.Kill) continue;
        let e = n.additionalData?.id;
        "string" != typeof e || t.has(e) || t.set(e, n.timestamp_ms);
    }
    return t;
}
function w(e, t) {
    let n = M(e);
    if (null == n) return null;
    let i = t.get(n[0]);
    return null == i || i > e.timestamp_ms ? null : i;
}
let G = { width: 1920, height: 1080, fps: 30, blendMs: 0, audioTrackLabel: "0:montage" };
function x(e) {
    return e.decision.timestamp - e.length;
}
function k(e) {
    return e.decision.timestamp;
}
function F(e, t, n) {
    return { srcStartMs: e.startMs - t.beforeMs, srcEndMs: e.endMs + t.afterMs, ...n };
}
function V(e) {
    let t = [];
    for (let n of e) {
        let e = t[t.length - 1];
        if (null != e && n.srcStartMs <= e.srcEndMs) {
            (e.srcEndMs = Math.max(e.srcEndMs, n.srcEndMs)),
                (e.hasGame = !0 === e.hasGame || !0 === n.hasGame),
                (e.hasAudio = !0 === e.hasAudio || !0 === n.hasAudio),
                null != n.label && (e.label = null != e.label ? `${e.label} + ${n.label}` : n.label);
            continue;
        }
        t.push({ ...n });
    }
    return t;
}
function B(e, t) {
    let n = [],
        i = [];
    for (let r of e) {
        let e = (function (e, t) {
            let n = (e.srcStartMs + e.srcEndMs) / 2,
                i = null,
                r = 1 / 0;
            for (let a of t) {
                let t = x(a),
                    s = k(a);
                if (t <= e.srcStartMs && s >= e.srcEndMs) {
                    let e = Math.abs((t + s) / 2 - n);
                    e < r && ((r = e), (i = a));
                }
            }
            return i;
        })(r, t);
        if (null == e) {
            i.push(r);
            continue;
        }
        let a = x(e),
            s = k(e),
            l = Math.max(r.srcStartMs, a),
            o = Math.min(r.srcEndMs, s);
        if (o - l < 1e3) {
            i.push(r);
            continue;
        }
        n.push({ clip: e, videoStartMs: l - a, videoEndMs: o - a, label: r.label });
    }
    return { resolved: n, skipped: i };
}
function H(e, t, n) {
    let { width: i, height: r, fps: a, blendMs: s, audioTrackLabel: l } = n,
        o = { x: 0, y: 0, width: i, height: r },
        d = (function (e, t) {
            let n = e.map((e, t) => {
                    let n = Math.max(0, Math.round(e.videoStartMs)),
                        i = Math.min(e.clip.length, Math.round(e.videoEndMs));
                    return {
                        section: e,
                        index: t,
                        srcStart: n,
                        srcEnd: i,
                        durMs: i - n,
                        blendIn: 0,
                        dstStart: 0,
                        dstEnd: 0,
                    };
                }),
                i = 0;
            for (let e of n)
                (e.blendIn = 0 === e.index ? 0 : Math.min(t, e.durMs)),
                    (e.dstStart = 0 === e.index ? 0 : Math.max(0, i - e.blendIn)),
                    (e.dstEnd = e.dstStart + e.durMs),
                    (i = e.dstEnd);
            return n;
        })(e, s),
        c = [],
        u = new Map(),
        _ = [],
        E = [];
    return (
        d.forEach((e, n) => {
            let i = t(e.section.clip),
                r = u.get(i);
            null == r && ((r = `src_${e.index}`), u.set(i, r), c.push({ id: r, kind: "file", path: i }));
            let a = d[n + 1]?.blendIn ?? 0,
                s = {
                    input: r,
                    src_start_ms: e.srcStart,
                    src_end_ms: e.srcEnd,
                    dst_start_ms: e.dstStart,
                    dst_end_ms: e.dstEnd,
                    transform: o,
                };
            e.blendIn > 0 && (s.transition_in = { kind: "blend", duration_ms: e.blendIn }), _.push(s);
            let l = {
                input: r,
                src_start_ms: e.srcStart,
                src_end_ms: e.srcEnd,
                dst_start_ms: e.dstStart,
                dst_end_ms: e.dstEnd,
                volume: 1,
            };
            e.blendIn > 0 && (l.fade_in_ms = e.blendIn), a > 0 && (l.fade_out_ms = a), E.push(l);
        }),
        {
            version: 1,
            output: { width: i, height: r, fps: a, duration_ms: d.length > 0 ? d[d.length - 1].dstEnd : 0 },
            inputs: c,
            video_tracks: [{ clips: _ }],
            audio_tracks: [{ label: l, clips: E }],
        }
    );
}
var j = n(696016);
let W = new Map([
        [O.C.Kill, { beforeMs: 3e3, afterMs: 2e3 }],
        [O.C.Death, { beforeMs: 3e3, afterMs: 2e3 }],
        [O.C.MultiKill, { beforeMs: 3e3, afterMs: 2e3 }],
        [O.C.BombPlant, { beforeMs: 2e3, afterMs: 3e3 }],
        [O.C.BombDefused, { beforeMs: 3e3, afterMs: 5e3 }],
        [O.C.BombExploded, { beforeMs: 3e3, afterMs: 5e3 }],
    ]),
    Y = { beforeMs: 3e3, afterMs: 2e3 },
    K = { beforeMs: 2e3, afterMs: 4e3 },
    $ = 2 * b.U;
function z(e, t) {
    if (e.eventName !== t) return null;
    let n = e.additionalData?.round;
    return "number" == typeof n ? n : null;
}
function q(e) {
    return 1e3 * Math.floor(e / 1e3);
}
function Z(e, t, n) {
    let i = 0,
        r = e.length;
    for (; i < r; ) {
        let a = (i + r) >> 1,
            s = e[a].timestamp_ms;
        s < t || (!n && s === t) ? (i = a + 1) : (r = a);
    }
    return i;
}
var X = n(435558);
function Q(e) {
    return 1e3 * Math.floor(e / 1e3);
}
function J(e) {
    let t = x(e.clip);
    return { startMs: t + e.videoStartMs, endMs: t + e.videoEndMs };
}
function ee(e) {
    let { startMs: t, endMs: n } = J(e);
    return { srcStartMs: t, srcEndMs: n, label: e.label };
}
function et(e, t) {
    let n = 0,
        i = !0;
    for (let r of e) {
        if (null == r) continue;
        let e = r.videoEndMs - r.videoStartMs;
        (n += e), i || (n -= Math.min(t, e)), (i = !1);
    }
    return n;
}
let en = new Map([
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
                    [`game:${O.C.Kill}`]: { beforeMs: 1250, afterMs: 1250 },
                    [`game:${O.C.MultiKill}`]: { beforeMs: 1250, afterMs: 1250 },
                    [`game:${O.C.Death}`]: { beforeMs: 1250, afterMs: 1250 },
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
                events: { [`game:${O.C.Kill}`]: { beforeMs: 2e3, afterMs: 1e3 } },
            },
        ],
    ]),
    ei = ["cs2_round_summary", "highlight_reels", "kill_compilation"];
function er(e) {
    for (let t of ei) {
        let n = (function (e, t) {
            let n,
                i = (function (e) {
                    let t = [];
                    for (let n of e)
                        null != n.decision &&
                            t.push({ id: n.id, filepath: n.filepath, length: n.length, decision: n.decision });
                    return t;
                })(t.clipCandidates);
            if (0 === i.length)
                return (
                    j.nx.info(
                        `automontage: no usable clip candidates in this session (received ${t.clipCandidates.length}) - skipping montage`,
                    ),
                    null
                );
            let r = (e) => e.filepath;
            return "cs2_round_summary" === e
                ? null ==
                  (n = (function (e) {
                      let t,
                          n,
                          i,
                          r = [...e.gameEventData].sort((e, t) => e.timestamp_ms - t.timestamp_ms),
                          a = (function (e) {
                              let t = [],
                                  n = new Map(),
                                  i = null;
                              for (let r of e) {
                                  if (r.eventName === O.C.InMatchChange && r.additionalData?.inMatch !== !0) {
                                      n.clear(), (i = null);
                                      continue;
                                  }
                                  let e = z(r, O.C.RoundStart);
                                  if (null != e) {
                                      null != i && e <= i && n.clear(), n.set(e, r.timestamp_ms), (i = e);
                                      continue;
                                  }
                                  let a = z(r, O.C.RoundEnd);
                                  if (null == a) continue;
                                  let s = n.get(a);
                                  null != s &&
                                      (n.delete(a),
                                      r.timestamp_ms <= s || t.push({ number: a, startMs: s, endMs: r.timestamp_ms }));
                              }
                              return t.sort((e, t) => e.startMs - t.startMs);
                          })(r);
                      if (0 === a.length)
                          return (
                              j.nx.info(
                                  `automontage: no valid CS2 rounds reconstructed from ${r.length} game events - skipping round summary`,
                              ),
                              null
                          );
                      let s = (0, g.Q4)(e.gameId, r),
                          l =
                              ((t = (function (e, t) {
                                  if (e?.calculateModifiers == null || 0 === t.length) return () => 1;
                                  let n = q(t[0].timestamp_ms),
                                      i = q(t[t.length - 1].timestamp_ms),
                                      r = new Map(e.calculateModifiers(n, i).map((e) => [e.timestamp_ms, e.modifier]));
                                  return (e) => r.get(q(e)) ?? 1;
                              })(s, r)),
                              (n = new Float64Array(r.length + 1)),
                              (i = 0),
                              r.forEach((e, r) => {
                                  let a = e.score ?? 0;
                                  s?.rescoreEvent != null &&
                                      (a = e.eventName === O.C.Death ? -0.1 : (s.rescoreEvent(e) ?? a));
                                  let l = a * t(e.timestamp_ms);
                                  Number.isFinite(l) || (i++, (l = 0)), (n[r + 1] = n[r] + l);
                              }),
                              i > 0 &&
                                  j.nx.warn(`automontage: ignored ${i} non-finite event score(s) while ranking rounds`),
                              a
                                  .map((e) => {
                                      let t = Z(r, e.startMs, !1),
                                          i = Z(r, e.endMs, !1);
                                      return { round: e, score: n[i] - n[t] };
                                  })
                                  .sort((e, t) => t.score - e.score)),
                          o = l[0];
                      if (o.score <= $)
                          return (
                              j.nx.info(
                                  `automontage: best CS2 round ${o.round.number} scored ${o.score.toFixed(3)}, not above the ${$} minimum - skipping round summary`,
                              ),
                              null
                          );
                      let d = V(
                              (function (e, t) {
                                  let n = e.startMs + 23e3,
                                      i = [F({ startMs: n, endMs: n }, Y, { label: `r${e.number} context` })],
                                      r = Z(t, n, !1),
                                      a = Z(t, e.endMs, !0),
                                      s = t.slice(r, a),
                                      l = U(s),
                                      o = new Set(P(s.filter((e) => e.eventName === O.C.MultiKill)));
                                  for (let t of s) {
                                      let n = t.eventName;
                                      if (null == n) continue;
                                      let r = W.get(n);
                                      if (null == r) continue;
                                      let a = `r${e.number} ${n}`;
                                      if (n === O.C.MultiKill) {
                                          if (!o.has(t)) continue;
                                          let e = w(t, l) ?? t.timestamp_ms;
                                          i.push(F({ startMs: e, endMs: t.timestamp_ms }, r, { label: a }));
                                      } else
                                          i.push(
                                              F({ startMs: t.timestamp_ms, endMs: t.timestamp_ms }, r, { label: a }),
                                          );
                                  }
                                  return (
                                      i.push(
                                          F({ startMs: e.endMs, endMs: e.endMs }, K, {
                                              label: `r${e.number} round end`,
                                          }),
                                      ),
                                      i.sort((e, t) => e.srcStartMs - t.srcStartMs),
                                      i
                                  );
                              })(o.round, r),
                          ),
                          { resolved: c, skipped: u } = B(d, e.clipCandidates);
                      return 0 === c.length
                          ? (j.nx.info(
                                `automontage: no candidate clip covers any of the ${d.length} sections of best round ${o.round.number} (candidates=${e.clipCandidates.length}) - skipping round summary`,
                            ),
                            null)
                          : {
                                recipe: H(c, e.resolveInputPath, e.config),
                                resolved: c,
                                skipped: u,
                                bestRound: o,
                                rankedRounds: l,
                            };
                  })({
                      gameEventData: t.decisionSignals.gameEventData,
                      clipCandidates: i,
                      gameId: t.gameId,
                      config: { ...G, audioTrackLabel: "0:all", blendMs: 300 },
                      resolveInputPath: r,
                  }))
                    ? null
                    : { type: e, recipe: n.recipe, resolved: n.resolved, skipped: n.skipped }
                : (function (e, t, n, i) {
                      var r, a, s, l;
                      let o,
                          d = (function (e) {
                              let t = en.get(e);
                              if (null == t) throw Error(`Unrecognized automontage preset: ${e}`);
                              return t;
                          })(e),
                          c = (function (e, t, n, i) {
                              let { localUserId: r, gameId: a, ...s } = n,
                                  l = [],
                                  o = P(e ?? []),
                                  d = U(o),
                                  c = (0, g.Q4)(a, o);
                              function u(e, t) {
                                  return c?.isInGame == null || c.isInGame((e + t) / 2);
                              }
                              for (let e of o) {
                                  let t = e.eventName;
                                  if (null == t) continue;
                                  let n = i[`game:${t}`];
                                  if (null == n) continue;
                                  let r = w(e, d) ?? e.timestamp_ms,
                                      a = e.timestamp_ms;
                                  u(r, a) && l.push({ startMs: r, endMs: a, kind: "game", padding: n });
                              }
                              let _ = new Map();
                              for (let e of y) {
                                  let t = i[`audio:${e}`];
                                  null != t && _.set(e, t);
                              }
                              if (_.size > 0)
                                  for (let e of (function (e, t, n, i) {
                                      let { includeOtherUsers: r, laughterThreshold: a, shoutingThreshold: s } = n;
                                      if (0 === i.length) return [];
                                      let l = Object.keys(e).filter((e) => e === t || r),
                                          o = Number.MAX_VALUE,
                                          d = -Number.MAX_VALUE;
                                      for (let t of l) {
                                          let n = e[t];
                                          for (let e of [n.rmsData, ...i.map((e) => n[D[e]])])
                                              for (let t of e)
                                                  t.timestamp_ms < o && (o = t.timestamp_ms),
                                                      t.timestamp_ms > d && (d = t.timestamp_ms);
                                      }
                                      if (d < o) return [];
                                      let c = (d - o) / g.pn + 1;
                                      function u(e) {
                                          return (0, g.lq)(
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
                                              c,
                                          ).map((e) => e.value);
                                      }
                                      let _ = (0, R.A)(),
                                          E = {
                                              laughter: a ?? _.laughterEventThreshold,
                                              shouting: s ?? _.shoutingEventThreshold,
                                          },
                                          A = l.map((t) => u(e[t].rmsData)),
                                          h = (0, L.kV)(A, _),
                                          I = [];
                                      for (let t of i) {
                                          let n = l.map((n) => u(e[n][D[t]])),
                                              i = (0, L.br)(n, _, E[t]),
                                              r = null != h ? (0, L.ei)(i, h) : i;
                                          l.forEach((e, n) => {
                                              for (let i of (function (e) {
                                                  let t = [],
                                                      n = -1;
                                                  for (let i = 0; i <= e.length; i++) {
                                                      let r = i < e.length && e[i] > 0;
                                                      r && -1 === n && (n = i),
                                                          r ||
                                                              -1 === n ||
                                                              (t.push({ startChunk: n, endChunk: i - 1 }), (n = -1));
                                                  }
                                                  return t;
                                              })(r[n]))
                                                  i.endChunk - i.startChunk + 1 < _.minConsecutiveChunks ||
                                                      I.push({
                                                          kind: t,
                                                          userId: e,
                                                          startMs: o + i.startChunk * g.pn,
                                                          endMs: o + i.endChunk * g.pn,
                                                      });
                                          });
                                      }
                                      return I.sort((e, t) => e.startMs - t.startMs), I;
                                  })(t, r, s, Array.from(_.keys()))) {
                                      let t = _.get(e.kind);
                                      null != t &&
                                          u(e.startMs, e.endMs) &&
                                          l.push({ startMs: e.startMs, endMs: e.endMs, kind: "audio", padding: t });
                                  }
                              return l;
                          })(
                              t.decisionSignals.gameEventData,
                              t.decisionSignals.audioModelDataPerUser,
                              {
                                  localUserId: t.localUserId,
                                  gameId: t.gameId,
                                  includeOtherUsers: d.includeOtherUsers,
                                  laughterThreshold: d.laughterThreshold,
                                  shoutingThreshold: d.shoutingThreshold,
                              },
                              d.events,
                          );
                      if (0 === c.length)
                          return (
                              j.nx.info(
                                  `automontage: preset ${e} matched no events in this session - skipping montage`,
                              ),
                              null
                          );
                      let u =
                              d.startOnSilence || d.endOnSilence
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
                                                    if (i.type !== j.Gy.SPEAKING || null == e.timestamp) continue;
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
                                            for (; s < n.length && n[s].timestamp < e.start; ) s++;
                                            let t = new Map();
                                            for (; s < n.length && n[s].timestamp <= e.end; ) {
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
                                    (a = t.localUserId),
                                    d.includeOtherUsers ? [...r] : r.filter((e) => e.userId === a))
                                  : [],
                          _ = (function (e) {
                              let {
                                      selected: t,
                                      clipCandidates: n,
                                      config: i,
                                      resolveInputPath: r,
                                      speakingSpans: a,
                                      startOnSilence: s,
                                      endOnSilence: l,
                                      requireVoiceGamePair: o,
                                      maxDurationMs: d,
                                      scoreSection: c,
                                  } = e,
                                  u = V(
                                      (function (e, t, n, i) {
                                          let r = [];
                                          for (let a of e) {
                                              let e = F(a, a.padding, {
                                                  hasGame: "game" === a.kind,
                                                  hasAudio: "audio" === a.kind,
                                              });
                                              n &&
                                                  (e.srcStartMs = (function (e, t) {
                                                      let n = v(t, e, !1);
                                                      if (-1 === n) return e;
                                                      let i = t[n];
                                                      return e < i.endMs ? i.startMs : e;
                                                  })(e.srcStartMs, t)),
                                                  i &&
                                                      (e.srcEndMs = (function (e, t) {
                                                          let n = v(t, e, !0);
                                                          if (-1 === n) return e;
                                                          let i = t[n];
                                                          return e < i.endMs ? i.endMs : e;
                                                      })(e.srcEndMs, t)),
                                                  e.srcEndMs <= e.srcStartMs || r.push(e);
                                          }
                                          return r.sort((e, t) => e.srcStartMs - t.srcStartMs), r;
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
                                          })(a),
                                          s,
                                          l,
                                      ),
                                  ),
                                  _ = o ? u.filter((e) => !0 === e.hasGame && !0 === e.hasAudio) : u,
                                  E = [],
                                  A = [];
                              for (let e of _) e.srcEndMs - e.srcStartMs < 1e3 ? E.push(e) : A.push(e);
                              let { resolved: h, skipped: I } = B(A, n),
                                  { kept: f, removed: p } = (function (e, t, n, i) {
                                      let r = [...e],
                                          a = e
                                              .map((e, t) => {
                                                  let { startMs: n, endMs: r } = J(e);
                                                  return { id: t, score: i(n, r) };
                                              })
                                              .sort((e, t) => t.score - e.score),
                                          s = [],
                                          l = et(r, t);
                                      for (; l > n; ) {
                                          let n = a.pop();
                                          if (null == n) break;
                                          s.push(e[n.id]), (r[n.id] = null), (l = et(r, t));
                                      }
                                      return (
                                          s.length > 0 &&
                                              j.nx.info(
                                                  `automontage: removed ${s.length} lowest-scored section(s) to fit the ${n}ms maximum (durationMs=${l})`,
                                              ),
                                          { kept: r.filter((e) => null != e), removed: s, durationMs: l }
                                      );
                                  })(h, i.blendMs, d, c);
                              return {
                                  recipe: H(f, r, i),
                                  resolved: f,
                                  skipped: [...E, ...I, ...p.map(ee)],
                                  requestedSectionCount: _.length,
                                  trimmedSectionCount: p.length,
                              };
                          })({
                              selected: c,
                              clipCandidates: n,
                              config: { ...G, blendMs: d.blendMs },
                              resolveInputPath: i,
                              speakingSpans: u,
                              startOnSilence: d.startOnSilence,
                              endOnSilence: d.endOnSilence,
                              requireVoiceGamePair: d.requireVoiceGamePair,
                              maxDurationMs: 9e4,
                              scoreSection:
                                  ((s = t.decisionSignals.gameEventData),
                                  (l = t.gameId),
                                  (function (e, t) {
                                      if (0 === e.length) return () => 0;
                                      let n = () => 1;
                                      if (t?.calculateModifiers != null) {
                                          let i = Q(e[0].timestamp_ms),
                                              r = Q(e[e.length - 1].timestamp_ms),
                                              a = new Map(
                                                  t.calculateModifiers(i, r).map((e) => [e.timestamp_ms, e.modifier]),
                                              );
                                          n = (e) => a.get(Q(e)) ?? 1;
                                      }
                                      let i = new Float64Array(e.length + 1),
                                          r = 0;
                                      return (
                                          e.forEach((e, a) => {
                                              let s = e.score ?? 0;
                                              t?.rescoreEvent != null && (s = t.rescoreEvent(e) ?? s);
                                              let l = s * n(e.timestamp_ms);
                                              Number.isFinite(l) || (r++, (l = 0)), (i[a + 1] = i[a] + l);
                                          }),
                                          r > 0 &&
                                              j.nx.warn(
                                                  `automontage: ignored ${r} non-finite event score(s) while scoring sections`,
                                              ),
                                          (t, n) => {
                                              let r = (0, X.sortedIndexBy)(e, { timestamp_ms: t }, "timestamp_ms");
                                              return (
                                                  i[(0, X.sortedLastIndexBy)(e, { timestamp_ms: n }, "timestamp_ms")] -
                                                  i[r]
                                              );
                                          }
                                      );
                                  })((o = [...s].sort((e, t) => e.timestamp_ms - t.timestamp_ms)), (0, g.Q4)(l, o))),
                          });
                      return 0 === _.resolved.length
                          ? (j.nx.info(
                                _.trimmedSectionCount > 0
                                    ? `automontage: preset ${e} - all ${_.trimmedSectionCount} resolved section(s) were removed to fit the maximum duration - skipping montage`
                                    : `automontage: preset ${e} - no candidate clip covers any of the ${_.requestedSectionCount} requested sections (candidates=${n.length}, skipped=${_.skipped.length}) - skipping montage`,
                            ),
                            null)
                          : _.recipe.output.duration_ms < 25e3
                            ? (j.nx.info(
                                  `automontage: preset ${e} duration ${_.recipe.output.duration_ms}ms is below the 25000ms minimum - skipping montage`,
                              ),
                              null)
                            : { type: e, recipe: _.recipe, resolved: _.resolved, skipped: _.skipped };
                  })(e, t, i, r);
        })(t, e);
        if (null != n) return n;
    }
    return null;
}
var ea = n(160330);
function es(e, t) {
    if (e.length < 2) return !1;
    for (let n = e.length - 2; n < e.length; n++) if (e[n].value <= t) return !1;
    return !0;
}
class el extends l.A {
    timeline;
    scheduledClips = [];
    decisionSignals = (0, C.A)();
    sessionEndTimeout = new s.Ep();
    currentSessionGameKey = null;
    pendingSessionGameKey = null;
    sessionTransition = Promise.resolve();
    constructor() {
        super(), (this.timeline = new p(Math.max(f.Ay.getSettings().clipsLength, 6e4), N.l));
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
                      es(e.laughterData, 0.5) &&
                          this.process(
                              { type: j.Gy.LAUGHTER, userId: t.user_id, confidence: n.confidence },
                              n.timestamp_ms,
                          ))
                    : "shouting" === n.label
                      ? (e.shoutingData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence }),
                        es(e.shoutingData, 0.35) &&
                            this.process(
                                { type: j.Gy.SHOUTING, userId: t.user_id, confidence: n.confidence },
                                n.timestamp_ms,
                            ))
                      : "rms" === n.label && e.rmsData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence });
        }
    }
    handleSpeaking(e) {
        if (!(0, m.T)() || e.context !== a.x.DEFAULT) return;
        let t = f.Ay.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === E.default.getId() || t) &&
            this.process({ type: j.Gy.SPEAKING, speakingFlags: e.speakingFlags, userId: e.userId });
    }
    handleSoundboardPlayStart(e) {
        if (!(0, m.T)()) return;
        let t = _.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = d.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: j.Gy.SOUNDBOARD,
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
        if (!(0, m.T)()) return;
        let t = _.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = d.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: j.Gy.SOUNDBOARD,
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
            case j.Gy.DISTRIBUTED:
                return f.Ay.getSettings().clipSignals.enableDistributedSignals;
            case j.Gy.GAME_EVENT:
                return f.Ay.getSettings().clipSignals.enableGameSignals;
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
            { trimStartMs: i, trimEndMs: a } = e,
            s = new Map();
        for (let e of Object.values(this.decisionSignals.audioModelDataPerUser))
            for (let i of (0, g.Tv)(e.rmsData, t, n)) {
                r()(i.timestamp_ms % 1e3 == 0, "bad rms data");
                let e = s.get(i.timestamp_ms) ?? 0;
                s.set(i.timestamp_ms, e + i.value);
            }
        function l(e, t, n) {
            let i = null,
                r = Number.MAX_VALUE;
            for (let a = e; a <= t; a += 1e3) {
                let e = s.get(a) ?? 0;
                ((n && e < r) || (!n && e <= r)) && ((r = e), (i = a), !n && e < 0.001 && (i = Math.min(i + 2e3, t)));
            }
            return i;
        }
        let o = (0, C.p)(this.decisionSignals.gameEventData, i, a);
        {
            let e = o.length > 0 ? Math.min(...o.map((e) => e.timestamp_ms)) : null,
                t = i + 5e3;
            null != e && (t = Math.min(t, e - 3e3)), (i = l(1e3 * Math.floor((i - 5e3) / 1e3), t, !1) ?? i);
        }
        {
            let e = o.length > 0 ? Math.max(...o.map((e) => e.timestamp_ms)) : null,
                t = a - 5e3;
            null != e && (t = Math.max(t, e + 3e3)), (a = l(1e3 * Math.ceil(t / 1e3), a + 5e3, !0) ?? a);
        }
        return (
            (i = Math.max(i, t)) >= (a = Math.min(a, n)) && ((i = e.startMs), (a = e.endMs)),
            { startMs: t, endMs: n, trimStartMs: i, trimEndMs: a }
        );
    }
    process(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, N.l)();
        switch ((this.timeline.add({ signal: e, timestamp: t }), e.type)) {
            case j.Gy.MANUAL:
            case j.Gy.DISTRIBUTED:
                this.scheduleClip(e);
                break;
            case j.Gy.SHOUTING:
            case j.Gy.LAUGHTER:
            case j.Gy.GAME_EVENT: {
                let n = 0;
                if (e.type === j.Gy.GAME_EVENT) {
                    if ((this.decisionSignals.gameEventData.push({ ...e, timestamp_ms: t }), 1 !== e.importance)) break;
                    n = Math.max((0, N.l)(), t + 1e4);
                } else n = (0, N.l)() + 1e4;
                if (
                    this.scheduledClips.some(
                        (e) =>
                            (e.signal.type === j.Gy.GAME_EVENT ||
                                e.signal.type === j.Gy.LAUGHTER ||
                                e.signal.type === j.Gy.SHOUTING) &&
                            t >= e.request.trimStartMs &&
                            t <= e.request.trimEndMs,
                    )
                ) {
                    j.nx.info(
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
            .catch((t) => j.nx.error(`decider: ${e} failed`, t));
    }
    async clearAsync() {
        j.nx.info(
            `decider: clear() called \u{2014} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${f.Ay.getCurrentClipsSession()?.id} pendingSessionGameKey=${this.pendingSessionGameKey} candidates=${f.Ay.getClipCandidates().length}`,
        ),
            this.unscheduleClip(),
            this.sessionEndTimeout.stop(),
            await this.processClipCandidates(),
            (this.currentSessionGameKey = null),
            (this.pendingSessionGameKey = null),
            await (0, S.YV)(),
            this.timeline.clear();
    }
    unscheduleClip() {
        for (let e of this.scheduledClips) e.timeout.stop();
        this.scheduledClips = [];
    }
    canScheduleClipCandidate(e) {
        let t = f.Ay.getCurrentClipsSession();
        if (null == t || c.Ay.getVisibleGame()?.isLauncher === !0) return !1;
        if (null != A.Ay.getVoiceChannelId()) return !0;
        let n = h.default.getCurrentUser(),
            i = n?.isStaff() === !0 || n?.isStaffPersonal() === !0;
        return e.type === j.Gy.GAME_EVENT && i && (0, g.GC)(t.gameId ?? void 0);
    }
    scheduleClip(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = f.Ay.getCurrentClipsSession()?.id;
        if (n && !this.canScheduleClipCandidate(e)) return;
        let a = (0, N.l)(),
            l = t?.endMs != null ? t.endMs : a,
            o = t?.startMs != null ? t.startMs : l - Number(f.Ay.getSettings().clipsLength),
            d = {
                startMs: o,
                endMs: l,
                trimStartMs: t?.trimStartMs != null ? t.trimStartMs : o,
                trimEndMs: t?.trimEndMs != null ? t.trimEndMs : l,
            };
        j.nx.info(`decider: scheduleClip signal=${e.type}, request=${JSON.stringify(t)}`);
        let c = { timeout: new s.Ep(), request: d, signal: e };
        this.scheduledClips.push(c),
            c.timeout.start(l > a ? l - a : 0, async () => {
                try {
                    let t = i ? this.adjustTrimForRms(d) : d;
                    j.nx.info(
                        `decider: scheduled timeout fired \u{2014} saving clip (signal=${e.type}, finalRequest=${JSON.stringify(t)})`,
                    ),
                        await (0, S.yd)({
                            clipMethod: e.type === j.Gy.MANUAL ? "manual" : "auto",
                            request: t,
                            timeline: [...this.timeline.read(t.startMs, t.endMs)],
                            decision: { signal: e, timestamp: (0, N.l)() },
                            isCandidate: n,
                            gameSessionId: r ?? void 0,
                            decisionSignals: n ? this.decisionSignals : void 0,
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
        (0, S.Vp)(t, e.id ?? null),
            j.nx.info(
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
            (j.nx.info(
                `decider: handleRunningGamesChange visibleGame=${e?.name ?? "null"} newPrimaryKey=${t} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${f.Ay.getCurrentClipsSession()?.id} pendingSessionGameKey=${this.pendingSessionGameKey}`,
            ),
            null === this.currentSessionGameKey)
        ) {
            if (null != t) {
                this.currentSessionGameKey = t;
                let n = crypto.randomUUID();
                (0, S.Vp)(n, e?.id ?? null),
                    j.nx.info(`decider: handleRunningGamesChange \u{2014} starting session for ${t} (id=${n})`);
            } else j.nx.info(`decider: handleRunningGamesChange \u{2014} not starting session (newPrimaryKey=${t})`);
            return;
        }
        if (t === this.currentSessionGameKey) {
            j.nx.info("decider: handleRunningGamesChange \u2014 same primary, cancelling pending end"),
                this.sessionEndTimeout.stop(),
                (this.pendingSessionGameKey = null);
            return;
        }
        if (null === t) {
            j.nx.info(
                "decider: handleRunningGamesChange \u2014 visible game became null, finalizing session immediately",
            ),
                this.sessionEndTimeout.stop(),
                this.unscheduleClip(),
                await this.processClipCandidates(),
                (this.currentSessionGameKey = null),
                await (0, S.YV)(),
                (this.pendingSessionGameKey = null);
            return;
        }
        this.pendingSessionGameKey === t
            ? j.nx.info("decider: handleRunningGamesChange \u2014 already debouncing for this key")
            : (j.nx.info(
                  `decider: handleRunningGamesChange \u{2014} primary game changed from ${this.currentSessionGameKey} to ${t}, debouncing 30000ms`,
              ),
              (this.pendingSessionGameKey = t),
              this.sessionEndTimeout.start(3e4, () => {
                  this.enqueueSessionTransition("sessionEndTimeout", async () => {
                      this.unscheduleClip(), await this.processClipCandidates(), (this.currentSessionGameKey = t);
                      let n = crypto.randomUUID();
                      (0, S.Vp)(n, e?.id ?? null),
                          (this.pendingSessionGameKey = null),
                          j.nx.info(
                              `decider: sessionEndTimeout fired after debounce \u{2014} finalizing previous session, started new session (newPrimaryKey=${t}, id=${n})`,
                          );
                  });
              }));
    }
    async stashDeciderData(e, t, n, i) {
        let r = {
                decisionSignals: t,
                clipCandidates: [...e],
                localUserId: E.default.getId(),
                gameId: n?.gameId ?? void 0,
            },
            a = o.A.clips.debugStashClipDeciderData;
        null != a && (await a(r, i), j.nx.info(`stashDeciderData: stashed ${e.length} candidates to ${i}`));
    }
    static async debugRerunRanking(e) {
        j.nx.info(`DEBUG RERUN RANKING${null != e ? ` (${e})` : ""}`);
        let t = o.A.clips.debugReadStashedClipDeciderData;
        if (null == t) return;
        let n = await t(e),
            i = (0, g.Ly)(n.clipCandidates, n.decisionSignals, n.localUserId, n.gameId);
        j.nx.info("ranked clips:", i),
            i.selected.forEach((e, t) => {
                j.nx.info(`Clip ${t + 1} score ${e.score}, ${o.A.fileManager.basename(e.clip.filepath)}`);
            });
    }
    static async debugRunAutoMontage(e) {
        j.nx.info(`DEBUG RUN AUTO-MONTAGE${null != e ? ` (${e})` : ""}`);
        let t = o.A.clips.debugReadStashedClipDeciderData,
            n = o.A.clips.renderMontageRecipe;
        if (null == t || null == n)
            return void j.nx.warn("debugRunAutoMontage: stash read or render bridge unavailable on this host");
        let i = await t(e),
            r = {
                clipCandidates: i.clipCandidates,
                decisionSignals: i.decisionSignals,
                localUserId: i.localUserId,
                gameId: i.gameId,
            },
            a = performance.now(),
            s = er(r),
            l = performance.now() - a;
        if (null == s) return void j.nx.info(`debugRunAutoMontage: no recipe could be built (took ${l.toFixed(1)}ms)`);
        j.nx.info(
            `debugRunAutoMontage: recipe generated in ${l.toFixed(1)}ms \u{2014} type=${s.type} sections=${s.resolved.length} skipped=${s.skipped.length} durationMs=${s.recipe.output.duration_ms}`,
        );
        let d = o.A.fileManager.dirname(s.recipe.inputs[0].path),
            c = o.A.fileManager.join(d, `automontage_${s.type}_${Date.now()}.mp4`);
        j.nx.info(`debugRunAutoMontage: rendering \u{2014} output=${c}`);
        let u = performance.now();
        await n(JSON.stringify(s.recipe), c, ""),
            j.nx.info(`debugRunAutoMontage: video rendered in ${(performance.now() - u).toFixed(1)}ms \u{2014} ${c}`);
    }
    debugCreateRankableLaughterClip() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.default.getId(),
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4,
            n = (0, N.l)(),
            i = this.decisionSignals.audioModelDataPerUser[e];
        if (null != i) {
            for (let e of i.laughterData) e.timestamp_ms >= n - t && (e.value = 1);
            for (let e of i.rmsData) e.timestamp_ms >= n - t && (e.value = 0.9);
        } else
            j.nx.warn(
                "debugCreateRankableLaughterClip: no ML audio samples for the local user yet \u2014 join a VC and wait a moment before invoking",
            );
        this.process({ type: j.Gy.LAUGHTER, userId: e, confidence: 1 });
    }
    createSessionAutoMontage(e, t, n) {
        if (!I.A.getConfig({ location: "createSessionAutoMontage" }).enableAutomontage) return null;
        if (null == o.A.clips.renderMontageRecipe)
            return (
                j.nx.warn("decider: auto-montage unavailable (host is missing renderMontageRecipe) \u2014 skipping"),
                null
            );
        let i = er({
            clipCandidates: e,
            decisionSignals: t,
            localUserId: E.default.getId(),
            gameId: n?.gameId ?? void 0,
        });
        return null == i
            ? (j.nx.info("decider: no auto-montage could be built for this session"), null)
            : (j.nx.info(
                  `decider: auto-montage recipe built \u{2014} type=${i.type} sections=${i.resolved.length} skipped=${i.skipped.length} durationMs=${i.recipe.output.duration_ms}`,
              ),
              i);
    }
    buildMontagePlaceholderClip(e, t, n) {
        let i = (0, ea.A)("auto", j.nQ.CLIP, [], void 0, n?.id),
            r = new Set(e.resolved.map((e) => e.clip.id)),
            a = new Set(i.users);
        for (let e of t) if (r.has(e.id)) for (let t of e.users) a.add(t);
        let s = u.A.getGame(n?.gameId)?.name,
            l = o.A.fileManager.join(f.Ay.getSettings().storageLocation, `${e.type}_${i.id}.mp4`);
        return {
            ...i,
            filepath: l,
            type: j.nQ.CLIP,
            applicationName: s ?? i.applicationName,
            applicationId: n?.gameId ?? i.applicationId,
            users: Array.from(a),
            length: e.recipe.output.duration_ms,
            syncTimestamp: void 0,
            pending: !0,
        };
    }
    startAutoMontageRender(e, t, n) {
        async function i() {
            await Promise.all(
                n.map(async (e) => {
                    try {
                        await (0, S.oH)(e, !1);
                    } catch (e) {
                        j.nx.error("decider: failed to delete deferred auto-montage source clip", e);
                    }
                }),
            );
        }
        let r = o.A.clips.renderMontageRecipe;
        return null == r
            ? (j.nx.warn(
                  "decider: auto-montage render unavailable (host is missing renderMontageRecipe) \u2014 skipping",
              ),
              !1)
            : ((0, S.ef)(t),
              j.nx.info(
                  `decider: auto-montage render started - type=${e.type} output=${t.filepath} durationMs=${e.recipe.output.duration_ms} inputs=${e.recipe.inputs.length}`,
              ),
              (async function () {
                  try {
                      await r(JSON.stringify(e.recipe), t.filepath, (0, S.h5)(t)),
                          j.nx.info(`decider: auto-montage render succeeded \u{2014} ${t.filepath}`),
                          await (0, S.EM)(t);
                  } catch (e) {
                      j.nx.error("decider: auto-montage failed", e), await (0, S.t9)(t);
                  } finally {
                      await i();
                  }
              })(),
              !0);
    }
    async processClipCandidates() {
        let e = f.Ay.getCurrentClipsSession(),
            t = f.Ay.getClipCandidates(),
            n = null == e ? [] : t.filter((t) => t.gameSessionId === e.id),
            i = null == e ? t : t.filter((t) => t.gameSessionId !== e.id),
            r = this.decisionSignals;
        if (
            ((this.decisionSignals = (0, C.A)()),
            j.nx.info(
                `decider: processClipCandidates \u{2014} sessionId=${e?.id} candidates=${n.length} staleCandidates=${i.length} autoStashEnabled=${f.Ay.isAutoStashEnabled()}`,
            ),
            f.Ay.isAutoStashEnabled())
        )
            try {
                let t, i, a;
                await this.stashDeciderData(
                    n,
                    r,
                    e,
                    ((t = e?.id ?? "no-session"),
                    (i = u.A.getGame(e?.gameId)?.name),
                    (a = null != i ? (0, T.A)(i).slice(0, 40) : ""),
                    "" !== a ? `${t}_${a}` : t),
                );
            } catch (e) {
                j.nx.error("decider: auto-stash failed", e);
            }
        let a = (0, g.Ly)(n, r, E.default.getId(), e?.gameId ?? void 0);
        j.nx.info("ranked clips:", a);
        let s = null;
        try {
            s = this.createSessionAutoMontage(n, r, e);
        } catch (e) {
            j.nx.error("decider: auto-montage creation failed", e);
        }
        let l = a.selected;
        if (null != s && l.length > 2) {
            let e = s,
                t = new Map(
                    l.map((t) => [
                        t,
                        (function (e, t) {
                            let { startMs: n, endMs: i } = (0, g.tA)(e.clip),
                                r = 0;
                            for (let a of t.resolved) {
                                if (a.clip.id !== e.clip.id) continue;
                                let t = x(a.clip),
                                    s = t + a.videoStartMs;
                                r += Math.max(0, Math.min(i, t + a.videoEndMs) - Math.max(n, s));
                            }
                            return r;
                        })(t, e),
                    ]),
                ),
                n = l.reduce((e, n) => ((t.get(n) ?? 0) > (t.get(e) ?? 0) ? n : e)),
                i = t.get(n) ?? 0,
                r = i > 0 ? n : l.reduce((e, t) => (t.score < e.score ? t : e));
            (l = l.filter((e) => e !== r)),
                j.nx.info(
                    i > 0
                        ? `decider: auto-montage replaces the selected clip it already covers most (id=${r.clip.id}, score=${r.score}, overlapMs=${i})`
                        : `decider: auto-montage replaces worst selected clip (id=${r.clip.id}, score=${r.score})`,
                );
        }
        let o = new Set(l.map((e) => e.clip.id)),
            d = new Map();
        if (
            (await Promise.all(
                l.map(async (e) => {
                    try {
                        let t = await (0, S.K7)(e.clip, e.score, e.audioEvents);
                        null != t && d.set(t.id, t);
                    } catch (e) {
                        j.nx.error("decider: failed to promote clip candidate", e);
                    }
                }),
            ),
            null != s)
        )
            for (let e of l) {
                let t = d.get(e.clip.id);
                if (null != t && t.filepath !== e.clip.filepath)
                    for (let n of s.recipe.inputs) n.path === e.clip.filepath && (n.path = t.filepath);
            }
        let c = [];
        if (null != s)
            try {
                let t = this.buildMontagePlaceholderClip(s, n, e);
                this.startAutoMontageRender(s, t, c) || (s = null);
            } catch (e) {
                j.nx.error("decider: failed to start the auto-montage render", e), (s = null);
            }
        let _ = new Set(s?.recipe.inputs.map((e) => e.path) ?? []);
        await Promise.all(
            [...n, ...i].map(async (e) => {
                if (!o.has(e.id)) {
                    if (_.has(e.filepath)) return void c.push(e);
                    try {
                        await (0, S.oH)(e, !1);
                    } catch (e) {
                        j.nx.error("decider: failed to delete unpromoted clip candidate", e);
                    }
                }
            }),
        );
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(Math.max(f.Ay.getSettings().clipsLength, 6e4));
    }
}
let eo = new el();
