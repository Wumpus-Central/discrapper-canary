n.d(t, {
    A: () => Y,
    u: () => m,
}),
    n(896048),
    n(321073),
    n(638769);
var r,
    i,
    l = n(311907),
    s = n(73153),
    a = n(21119),
    u = n(95701),
    o = n(734057),
    d = n(197305),
    c = n(576705),
    h = n(383501),
    f = n(543465),
    g = n(287809),
    I = n(914853),
    A = n(41984),
    S = n(956753),
    E = n(833551),
    p = n(42589),
    y = n(406595),
    v = n(672396),
    _ = n(652215);

function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var m = (((i = {}).Text = "TEXT"), (i.Voice = "VOICE"), i);
class M {
    get size() {
        return this._channelsByChannelId.size;
    }
    getChannel(e) {
        var t;
        return null != (t = this._channelsByChannelId.get(e)) ? t : null;
    }
    upsert(e) {
        this._channelsByChannelId.set(e.candidate.channelId, e), (this._isDirty = !0);
    }
    delete(e) {
        this._channelsByChannelId.has(e) && (this._channelsByChannelId.delete(e), (this._isDirty = !0));
    }
    applyBatch(e) {
        e(), (this._isDirty = !0);
    }
    rebuildSortedIndexIfDirty(e) {
        if (!this._isDirty) return;
        let t = [];
        for (let [n, r] of this._channelsByChannelId.entries()) {
            let i = e(r);
            i > 0 &&
                t.push({
                    channelId: n,
                    score: i,
                });
        }
        t.sort((e, t) => (e.score !== t.score ? t.score - e.score : e.channelId < t.channelId ? -1 : 1));
        let n = t.slice(0, this._maxItems);
        (this._sortedScoreIndex = n),
            (this._sortedChannelIdSet = new Set(n.map((e) => e.channelId))),
            (this._isDirty = !1);
    }
    getSortedChannels() {
        let e = [];
        for (let { channelId: t } of this._sortedScoreIndex) {
            let n = this._channelsByChannelId.get(t);
            null != n && e.push(n);
        }
        return e;
    }
    getSortedChannelIds() {
        return this._sortedScoreIndex.map((e) => e.channelId);
    }
    hasSortedChannelId(e) {
        return this._sortedChannelIdSet.has(e);
    }
    clear() {
        this._channelsByChannelId.clear(),
            (this._sortedScoreIndex = []),
            this._sortedChannelIdSet.clear(),
            (this._isDirty = !1);
    }
    constructor(e) {
        O(this, "_maxItems", void 0),
            O(this, "_channelsByChannelId", void 0),
            O(this, "_sortedScoreIndex", void 0),
            O(this, "_sortedChannelIdSet", void 0),
            O(this, "_isDirty", void 0),
            (this._maxItems = e),
            (this._channelsByChannelId = new Map()),
            (this._sortedScoreIndex = []),
            (this._sortedChannelIdSet = new Set()),
            (this._isDirty = !1);
    }
}
let T = !1,
    N = null,
    C = new M(100),
    D = new M(100);

function w() {
    return E.default.isAnyOverlayRendering();
}

function U(e) {
    return T !== e && ((T = e), !0);
}

function b() {
    var e, t;
    let n = h.A.getChannelId();
    if (null == n) return null;
    let r = o.A.getChannel(n);
    return null != (e = null == r || null == (t = r.getGuildId) ? void 0 : t.call(r)) ? e : null;
}

function G(e) {
    let { isAlreadyTracked: t, guildId: n, updatingUserId: r, providers: i } = e;
    return (
        !!(
            t ||
            (function (e, t) {
                if (null == e) return !1;
                if (null != N && e === N) return !0;
                let n = b();
                return (null != n && e === n) || t.getNormalizedGuildAffinity(e) > 0.001;
            })(n, i)
        ) || !!(null != r && i.getNormalizedUserAffinity(r) > 0.0028)
    );
}

function P(e) {
    let t = d.A.affinities,
        n = 0;
    for (let e = 0; e < t.length; e += 1) {
        var r;
        let i = null != (r = t[e].score) ? r : 0;
        i > n && (n = i);
    }
    return (
        n <= 0 && (n = 1),
        {
            getNormalizedGuildAffinity: (e) => {
                var t, r;
                let i = (null != (t = null == (r = d.A.getGuildAffinity(e)) ? void 0 : r.score) ? t : 0) / n;
                return i <= 0 ? 0 : i >= 1 ? 1 : i;
            },
            getNormalizedUserAffinity: (t) => {
                var n, r;
                let i = a.A.getUserAffinity(t);
                if (null == i ? void 0 : i.isFriend) return 0.4;
                let l = null != (n = null == i ? void 0 : i.communicationProbability) ? n : 0,
                    s = e.includeVcProbability
                        ? Math.max(l, null != (r = null == i ? void 0 : i.vcProbability) ? r : 0)
                        : l;
                return s <= 0 ? 0 : s >= 1 ? 1 : s;
            },
        }
    );
}

function R(e, t) {
    let n = (0, p.aU)(e.candidate, {
        voiceGuildId: b(),
        mostRecentGuildId: N,
    });
    return (
        e.score *
        (1 + n) *
        (e.candidate.kind === p.G.DirectMessage || e.candidate.kind === p.G.GroupDM ? 1 : 1 + (0, p.EB)(e.candidate, t))
    );
}

function L() {
    let e = P({
            includeVcProbability: !1,
        }),
        t = P({
            includeVcProbability: !0,
        });
    C.rebuildSortedIndexIfDirty((t) => R(t, e)), D.rebuildSortedIndexIfDirty((e) => R(e, t));
}

function F() {
    return {
        mentionCount: 0,
        lastDirectMentionAtMs: null,
        lastRoleMentionAtMs: null,
        unread: !1,
        lastUnreadAtMs: null,
        lastMessageAtMs: null,
        recentMessageAuthorIds: new Map(),
        recentMessageAuthorId: null,
        typingUserIdsWithTimestampMs: new Map(),
        typingUserIds: [],
        isTyping: !1,
        unreadOrMentionAgeMs: null,
    };
}

function V(e, t) {
    var n, r, i, l;
    let s = o.A.getChannel(e);
    if (null == s) return !1;
    let [a] = y.A.isFavorite(I.x.MESSAGES, e);
    if (a || (null == (r = s.isPrivate) ? void 0 : r.call(s))) return !1;
    let d = null != (n = null == (i = s.getGuildId) ? void 0 : i.call(s)) ? n : null;
    return (
        !(null == d || f.Ay.isGuildOrCategoryOrChannelMuted(d, s.id)) &&
        !!c.A.can(_.xBc.READ_MESSAGE_HISTORY, s) &&
        ("TEXT" === t ? (0, u.ke)(s.type) : (null == (l = s.isVocal) ? void 0 : l.call(s)) === !0)
    );
}

function x(e, t, n) {
    var r;
    if (!V(e, "TEXT")) return null;
    let i = o.A.getChannel(e);
    if (null == i) return null;
    let l = (0, p.o5)({
        id: i.id,
        getGuildId: () => {
            var e, t;
            return null != (e = null == (t = i.getGuildId) ? void 0 : t.call(i)) ? e : null;
        },
        isDM: () => {
            var e, t;
            return null != (e = null == (t = i.isDM) ? void 0 : t.call(i)) && e;
        },
        isGroupDM: () => {
            var e, t;
            return null != (e = null == (t = i.isGroupDM) ? void 0 : t.call(i)) && e;
        },
        isMultiUserDM: () => {
            var e, t;
            return null != (e = null == (t = i.isMultiUserDM) ? void 0 : t.call(i)) && e;
        },
        recipients: null != (r = i.recipients) ? r : [],
        isVocal: () => {
            var e, t;
            return null != (e = null == (t = i.isVocal) ? void 0 : t.call(i)) && e;
        },
    });
    if (null == l || l.kind !== p.G.GuildText) return null;
    let s = C.getChannel(e);
    if (null != s) return s;
    let a = new p.Qb(l, t, n);
    return C.upsert(a), a;
}

function j(e) {
    var t, n;
    let r = o.A.getChannel(e);
    if (null == r) return !1;
    let i = null != (t = null == (n = r.getGuildId) ? void 0 : n.call(r)) ? t : null;
    if (null == i || !f.Ay.isGuildOrCategoryOrChannelMuted(i, e)) return !1;
    let l = null != C.getChannel(e),
        s = null != D.getChannel(e);
    return l && C.delete(e), s && D.delete(e), l || s;
}
class k extends (r = l.Ay.Store) {
    initialize() {
        this.waitFor(o.A, d.A, y.A, E.default, c.A, h.A, a.A, g.default, f.Ay);
    }
    getActiveNowChannelByChannelId(e, t) {
        return "TEXT" === t ? C.getChannel(e) : D.getChannel(e);
    }
    getActiveNowChannels(e) {
        let { kind: t } = e;
        return "VOICE" === t ? D.getSortedChannels() : C.getSortedChannels();
    }
    getActiveNowChannelIds(e) {
        let { kind: t } = e;
        return "VOICE" === t ? D.getSortedChannelIds() : C.getSortedChannelIds();
    }
    hasActiveNowChannelId(e) {
        let { kind: t, channelId: n } = e;
        return "VOICE" === t ? D.hasSortedChannelId(n) : C.hasSortedChannelId(n);
    }
    getScoreForChannelId(e) {
        var t;
        let n = null != (t = C.getChannel(e)) ? t : D.getChannel(e);
        if (null == n) return null;
        let r = P({
            includeVcProbability: n.candidate.kind === p.G.GuildVoice,
        });
        return R(n, r);
    }
    getScoreBreakdownForChannelId(e) {
        var t, n;
        let r = null != (t = null != (n = C.getChannel(e)) ? n : D.getChannel(e)) ? t : null;
        if (null == r) return null;
        let i = r.candidate.kind === p.G.GuildVoice ? "VOICE" : "TEXT",
            l = P({
                includeVcProbability: r.candidate.kind === p.G.GuildVoice,
            }),
            s = (0, p.aU)(r.candidate, {
                voiceGuildId: b(),
                mostRecentGuildId: N,
            }),
            a = r.candidate.kind === p.G.DirectMessage || r.candidate.kind === p.G.GroupDM,
            u = a ? 0 : (0, p.EB)(r.candidate, l),
            o = r.score;
        return {
            channelId: e,
            kind: i,
            baseScore: o,
            contextBoost: s,
            guildAffinity: null != r.candidate.guildId ? l.getNormalizedGuildAffinity(r.candidate.guildId) : 0,
            finalScore: o * (1 + s) * (a ? 1 : 1 + u),
            scoreInfo: r.lastScoreInfo,
        };
    }
}
O(k, "displayName", "OverlayActiveNowStore");
let W = (e) => (0, S.R)(e, "OverlayActiveNowStore"),
    Y = new k(
        s.h,
        __OVERLAY__ || (!v.OX && !v.ed)
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: W(function (e) {
                      if (e.tab !== I.x.MESSAGES) return !1;
                      let t = e.targetId;
                      if (e.isFavorite) {
                          let e = null != C.getChannel(t),
                              n = null != D.getChannel(t);
                          return e && C.delete(t), n && D.delete(t), e || n;
                      }
                      return !1;
                  }),
                  OVERLAY_MOUNTED: W(function (e) {
                      let t = U(!0);
                      return L(), t;
                  }),
                  OVERLAY_UPDATE_OVERLAY_METHOD: W(function (e) {
                      let { overlayMethod: t } = e;
                      if (t === A.Ue.OutOfProcess || t === A.Ue.OutOfProcessLimitedInteraction) {
                          let e = U(!0);
                          return L(), e;
                      }
                      return !w() && U(!1);
                  }),
                  OVERLAY_CRASHED: W(function (e) {
                      return !w() && U(!1);
                  }),
                  OVERLAY_SET_INPUT_LOCKED: W(function (e) {
                      if (e.locked) return !1;
                      let t = U(!0);
                      return L(), t;
                  }),
                  MESSAGE_CREATE: W(function (e) {
                      var t, n, r, i, l, s, a, d, c, h;
                      if (!T || e.optimistic) return !1;
                      let f = null != (t = null == (l = g.default.getCurrentUser()) ? void 0 : l.id) ? t : null,
                          I =
                              null != (n = null == (a = e.message) || null == (s = a.author) ? void 0 : s.id)
                                  ? n
                                  : null;
                      if (null == f || null == I || I === f) return !1;
                      let A = o.A.getChannel(e.channelId);
                      if (null == A || A.isPrivate() || !(0, u.ke)(A.type)) return !1;
                      let S = (function (e) {
                              let t = e.timestamp;
                              if (null == t) return Date.now();
                              let n = new Date(t).getTime();
                              return Number.isFinite(n) ? n : Date.now();
                          })(e.message),
                          E = P({
                              includeVcProbability: !1,
                          }),
                          p = null != (r = null == (d = A.getGuildId) ? void 0 : d.call(A)) ? r : null;
                      if (
                          !G({
                              isAlreadyTracked: null != C.getChannel(e.channelId),
                              guildId: p,
                              updatingUserId: I,
                              providers: E,
                          })
                      )
                          return !1;
                      let y = x(e.channelId, F(), E);
                      if (null == y) return !1;
                      let v = (null != (i = null == (c = e.message) ? void 0 : c.mentions) ? i : []).some(
                              (e) => (null == e ? void 0 : e.id) === f,
                          ),
                          _ = null == (h = e.message) ? void 0 : h.mention_roles,
                          O = Array.isArray(_) && _.length > 0,
                          m = y.prepareForUpdate(S),
                          M = new Map(m.recentMessageAuthorIds);
                      M.set(I, S);
                      let N = {
                          lastMessageAtMs: S,
                          unread: !0,
                          lastUnreadAtMs: S,
                          recentMessageAuthorId: I,
                          recentMessageAuthorIds: M,
                      };
                      return (
                          (v || O) &&
                              ((N.mentionCount = Math.max(m.mentionCount, +!!v + +!!O)),
                              v && (N.lastDirectMentionAtMs = S),
                              O && (N.lastRoleMentionAtMs = S)),
                          y.updateSignalsAndRescore(N, S),
                          y.prunable && C.delete(e.channelId),
                          L(),
                          !0
                      );
                  }),
                  MESSAGE_ACK: W(function (e) {
                      if (!T) return !1;
                      let t = C.getChannel(e.channelId);
                      if (null == t) return !1;
                      let n = Date.now(),
                          r = {
                              unread: !1,
                              lastUnreadAtMs: null,
                          };
                      return (
                          null != e.newMentionCount &&
                              (e.newMentionCount > 0
                                  ? ((r.mentionCount = e.newMentionCount),
                                    null == t.signals.lastDirectMentionAtMs && (r.lastDirectMentionAtMs = n))
                                  : ((r.mentionCount = 0),
                                    (r.lastDirectMentionAtMs = null),
                                    (r.lastRoleMentionAtMs = null))),
                          t.updateSignalsAndRescore(r, n),
                          t.prunable && C.delete(e.channelId),
                          L(),
                          !0
                      );
                  }),
                  TYPING_START: W(function (e) {
                      var t, n, r, i;
                      if (!T) return !1;
                      let l = null != (t = null == (r = g.default.getCurrentUser()) ? void 0 : r.id) ? t : null;
                      if (null == l || e.userId === l) return !1;
                      let s = o.A.getChannel(e.channelId);
                      if (null == s || s.isPrivate() || !(0, u.ke)(s.type)) return !1;
                      let a = Date.now(),
                          d = P({
                              includeVcProbability: !1,
                          }),
                          c = null != (n = null == (i = s.getGuildId) ? void 0 : i.call(s)) ? n : null;
                      if (
                          !G({
                              isAlreadyTracked: null != C.getChannel(e.channelId),
                              guildId: c,
                              updatingUserId: e.userId,
                              providers: d,
                          })
                      )
                          return !1;
                      let h = x(e.channelId, F(), d);
                      if (null == h) return !1;
                      let f = new Map(h.prepareForUpdate(a).typingUserIdsWithTimestampMs);
                      f.set(e.userId, a);
                      let I = Array.from(f.keys());
                      return (
                          h.updateSignalsAndRescore(
                              {
                                  typingUserIdsWithTimestampMs: f,
                                  typingUserIds: I,
                                  isTyping: I.length > 0,
                              },
                              a,
                          ),
                          h.prunable && C.delete(e.channelId),
                          L(),
                          !0
                      );
                  }),
                  VOICE_STATE_UPDATES: W(function (e) {
                      if (!T) return !1;
                      let t = Date.now(),
                          n = P({
                              includeVcProbability: !0,
                          }),
                          r = !1;
                      return (
                          D.applyBatch(() => {
                              for (let c of e.voiceStates) {
                                  var i, l, s, a, u, d;
                                  let e = c.userId,
                                      h = null != (i = c.channelId) ? i : null,
                                      f = null != (l = c.oldChannelId) ? l : null,
                                      g = (n) => {
                                          let i = D.getChannel(n);
                                          if (null == i) return;
                                          let l = i.signals,
                                              s = new Map(l.voiceUsersWithJoinTimestampMs);
                                          s.delete(e);
                                          let a = new Map(l.streamUsersWithTimestampMs);
                                          a.delete(e);
                                          let u = new Map(l.videoUsersWithTimestampMs);
                                          u.delete(e);
                                          let o = new Map(l.lastUnmuteActivityAtMs);
                                          o.delete(e);
                                          let d = new Map(l.lastUndeafenActivityAtMs);
                                          d.delete(e),
                                              i.updateSignalsAndRescore(
                                                  {
                                                      voiceUsersWithJoinTimestampMs: s,
                                                      streamUsersWithTimestampMs: a,
                                                      videoUsersWithTimestampMs: u,
                                                      lastUnmuteActivityAtMs: o,
                                                      lastUndeafenActivityAtMs: d,
                                                  },
                                                  t,
                                              ),
                                              i.prunable && D.delete(n),
                                              (r = !0);
                                      };
                                  if ((null != f && f !== h && g(f), null != h)) {
                                      let i = o.A.getChannel(h),
                                          l =
                                              null != (s = null == i || null == (a = i.getGuildId) ? void 0 : a.call(i))
                                                  ? s
                                                  : null;
                                      if (
                                          !G({
                                              isAlreadyTracked: null != D.getChannel(h),
                                              guildId: l,
                                              updatingUserId: e,
                                              providers: n,
                                          })
                                      )
                                          continue;
                                      let g = (function (e, t, n) {
                                          var r;
                                          if (!V(e, "VOICE")) return null;
                                          let i = o.A.getChannel(e);
                                          if (null == i) return null;
                                          let l = (0, p.o5)({
                                              id: i.id,
                                              getGuildId: () => {
                                                  var e, t;
                                                  return null != (e = null == (t = i.getGuildId) ? void 0 : t.call(i))
                                                      ? e
                                                      : null;
                                              },
                                              isDM: () => {
                                                  var e, t;
                                                  return null != (e = null == (t = i.isDM) ? void 0 : t.call(i)) && e;
                                              },
                                              isGroupDM: () => {
                                                  var e, t;
                                                  return (
                                                      null != (e = null == (t = i.isGroupDM) ? void 0 : t.call(i)) && e
                                                  );
                                              },
                                              isMultiUserDM: () => {
                                                  var e, t;
                                                  return (
                                                      null !=
                                                          (e = null == (t = i.isMultiUserDM) ? void 0 : t.call(i)) && e
                                                  );
                                              },
                                              recipients: null != (r = i.recipients) ? r : [],
                                              isVocal: () => {
                                                  var e, t;
                                                  return (
                                                      null != (e = null == (t = i.isVocal) ? void 0 : t.call(i)) && e
                                                  );
                                              },
                                          });
                                          if (null == l || l.kind !== p.G.GuildVoice) return null;
                                          let s = D.getChannel(e);
                                          if (null != s) return s;
                                          let a = new p.Qb(l, t, n);
                                          return D.upsert(a), a;
                                      })(
                                          h,
                                          (function () {
                                              var e, t;
                                              return (
                                                  (e = (function (e) {
                                                      for (var t = 1; t < arguments.length; t++) {
                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                              r = Object.keys(n);
                                                          "function" == typeof Object.getOwnPropertySymbols &&
                                                              (r = r.concat(
                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(n, e)
                                                                          .enumerable;
                                                                  }),
                                                              )),
                                                              r.forEach(function (t) {
                                                                  O(e, t, n[t]);
                                                              });
                                                      }
                                                      return e;
                                                  })({}, F())),
                                                  (t = t =
                                                      {
                                                          voiceUsersWithJoinTimestampMs: new Map(),
                                                          lastVoiceJoinAtMs: null,
                                                          lastUnmuteActivityAtMs: new Map(),
                                                          lastUndeafenActivityAtMs: new Map(),
                                                          streamUsersWithTimestampMs: new Map(),
                                                          videoUsersWithTimestampMs: new Map(),
                                                      }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                      : (function (e, t) {
                                                            var n = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var r = Object.getOwnPropertySymbols(e);
                                                                n.push.apply(n, r);
                                                            }
                                                            return n;
                                                        })(Object(t)).forEach(function (n) {
                                                            Object.defineProperty(
                                                                e,
                                                                n,
                                                                Object.getOwnPropertyDescriptor(t, n),
                                                            );
                                                        }),
                                                  e
                                              );
                                          })(),
                                          n,
                                      );
                                      if (null == g) continue;
                                      let I = g.prepareForUpdate(t),
                                          A = null == f || f !== h,
                                          S = new Map(I.voiceUsersWithJoinTimestampMs);
                                      A && !S.has(e) && S.set(e, t);
                                      let E = new Map(I.streamUsersWithTimestampMs);
                                      c.selfStream ? E.has(e) || E.set(e, t) : E.delete(e);
                                      let y = new Map(I.videoUsersWithTimestampMs);
                                      c.selfVideo ? y.has(e) || y.set(e, t) : y.delete(e);
                                      let v = new Map(I.lastUnmuteActivityAtMs);
                                      if (!c.selfMute && !c.mute) {
                                          let n = null != (u = v.get(e)) ? u : null;
                                          (null == n || t - n >= 15e3) && v.set(e, t);
                                      }
                                      let _ = new Map(I.lastUndeafenActivityAtMs);
                                      if (!c.selfDeaf && !c.deaf) {
                                          let n = null != (d = _.get(e)) ? d : null;
                                          (null == n || t - n >= 15e3) && _.set(e, t);
                                      }
                                      g.updateSignalsAndRescore(
                                          {
                                              voiceUsersWithJoinTimestampMs: S,
                                              lastVoiceJoinAtMs: A ? t : I.lastVoiceJoinAtMs,
                                              streamUsersWithTimestampMs: E,
                                              videoUsersWithTimestampMs: y,
                                              lastUnmuteActivityAtMs: v,
                                              lastUndeafenActivityAtMs: _,
                                          },
                                          t,
                                      ),
                                          g.prunable && D.delete(h),
                                          (r = !0);
                                  }
                              }
                          }),
                          r && L(),
                          r
                      );
                  }),
                  VOICE_CHANNEL_SELECT: W(function (e) {
                      return L(), !0;
                  }),
                  RTC_CONNECTION_STATE: W(function (e) {
                      return L(), !0;
                  }),
                  CHANNEL_SELECT: W(function (e) {
                      var t, n;
                      let { channelId: r } = e;
                      if (null == r) return !1;
                      let i = o.A.getChannel(r);
                      return (
                          !(null == i || i.isPrivate()) &&
                          ((N = null != (t = null == (n = i.getGuildId) ? void 0 : n.call(i)) ? t : null), L(), !0)
                      );
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: W(function (e) {
                      return j(e.channelId);
                  }),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: W(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of C.getSortedChannels())
                          e.candidate.guildId === t && (n = j(e.candidate.channelId) || n);
                      for (let e of D.getSortedChannels())
                          e.candidate.guildId === t && (n = j(e.candidate.channelId) || n);
                      return n;
                  }),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: W(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of C.getSortedChannels())
                          e.candidate.guildId === t && (n = j(e.candidate.channelId) || n);
                      for (let e of D.getSortedChannels())
                          e.candidate.guildId === t && (n = j(e.candidate.channelId) || n);
                      return n;
                  }),
                  LOGOUT: W(function () {
                      let e = C.size > 0 || D.size > 0;
                      return C.clear(), D.clear(), (T = !1), (N = null), e;
                  }),
              },
    );
