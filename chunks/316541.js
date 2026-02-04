n.d(t, {
    A: () => Y,
    u: () => O,
}),
    n(896048),
    n(321073),
    n(638769);
var l,
    r,
    i = n(311907),
    s = n(73153),
    a = n(21119),
    o = n(95701),
    u = n(734057),
    c = n(197305),
    d = n(576705),
    h = n(383501),
    g = n(543465),
    f = n(287809),
    p = n(914853),
    I = n(41984),
    m = n(956753),
    E = n(833551),
    A = n(42589),
    y = n(406595),
    S = n(652215);

function v(e, t, n) {
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
var O = (((r = {}).Text = "TEXT"), (r.Voice = "VOICE"), r);
class b {
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
        for (let [n, l] of this._channelsByChannelId.entries()) {
            let r = e(l);
            r > 0 &&
                t.push({
                    channelId: n,
                    score: r,
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
        v(this, "_maxItems", void 0),
            v(this, "_channelsByChannelId", void 0),
            v(this, "_sortedScoreIndex", void 0),
            v(this, "_sortedChannelIdSet", void 0),
            v(this, "_isDirty", void 0),
            (this._maxItems = e),
            (this._channelsByChannelId = new Map()),
            (this._sortedScoreIndex = []),
            (this._sortedChannelIdSet = new Set()),
            (this._isDirty = !1);
    }
}
let N = !1,
    T = null,
    _ = !1,
    C = new b(100),
    x = new b(100);

function D() {
    return E.default.isAnyOverlayRendering();
}

function M(e) {
    return (!!e || !_) && N !== e && ((N = e), !0);
}

function j() {
    var e, t;
    let n = h.A.getChannelId();
    if (null == n) return null;
    let l = u.A.getChannel(n);
    return null != (e = null == l || null == (t = l.getGuildId) ? void 0 : t.call(l)) ? e : null;
}

function w(e) {
    let { isAlreadyTracked: t, guildId: n, updatingUserId: l, providers: r } = e;
    return (
        !!(
            t ||
            (function (e, t) {
                if (null == e) return !1;
                if (null != T && e === T) return !0;
                let n = j();
                return (null != n && e === n) || t.getNormalizedGuildAffinity(e) > 0.001;
            })(n, r)
        ) || !!(null != l && r.getNormalizedUserAffinity(l) > 0.0028)
    );
}

function P(e) {
    let t = c.A.affinities,
        n = 0;
    for (let e = 0; e < t.length; e += 1) {
        var l;
        let r = null != (l = t[e].score) ? l : 0;
        r > n && (n = r);
    }
    return (
        n <= 0 && (n = 1),
        {
            getNormalizedGuildAffinity: (e) => {
                var t, l;
                let r = (null != (t = null == (l = c.A.getGuildAffinity(e)) ? void 0 : l.score) ? t : 0) / n;
                return r <= 0 ? 0 : r >= 1 ? 1 : r;
            },
            getNormalizedUserAffinity: (t) => {
                var n, l;
                let r = a.A.getUserAffinity(t);
                if (null == r ? void 0 : r.isFriend) return 0.4;
                let i = null != (n = null == r ? void 0 : r.communicationProbability) ? n : 0,
                    s = e.includeVcProbability
                        ? Math.max(i, null != (l = null == r ? void 0 : r.vcProbability) ? l : 0)
                        : i;
                return s <= 0 ? 0 : s >= 1 ? 1 : s;
            },
        }
    );
}

function R(e, t) {
    let n = (0, A.aU)(e.candidate, {
        voiceGuildId: j(),
        mostRecentGuildId: T,
    });
    return (
        e.score *
        (1 + n) *
        (e.candidate.kind === A.G.DirectMessage || e.candidate.kind === A.G.GroupDM ? 1 : 1 + (0, A.EB)(e.candidate, t))
    );
}

function U() {
    let e = P({
            includeVcProbability: !1,
        }),
        t = P({
            includeVcProbability: !0,
        });
    C.rebuildSortedIndexIfDirty((t) => R(t, e)), x.rebuildSortedIndexIfDirty((e) => R(e, t));
}

function G() {
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

function L(e, t) {
    var n, l, r, i;
    let s = u.A.getChannel(e);
    if (null == s) return !1;
    let [a] = y.A.isFavorite(p.x.MESSAGES, e);
    if (a || (null == (l = s.isPrivate) ? void 0 : l.call(s))) return !1;
    let c = null != (n = null == (r = s.getGuildId) ? void 0 : r.call(s)) ? n : null;
    return (
        !(null == c || g.Ay.isGuildOrCategoryOrChannelMuted(c, s.id)) &&
        !!d.A.can(S.xBc.READ_MESSAGE_HISTORY, s) &&
        ("TEXT" === t ? (0, o.ke)(s.type) : (null == (i = s.isVocal) ? void 0 : i.call(s)) === !0)
    );
}

function k(e, t, n) {
    var l;
    if (!L(e, "TEXT")) return null;
    let r = u.A.getChannel(e);
    if (null == r) return null;
    let i = (0, A.o5)({
        id: r.id,
        getGuildId: () => {
            var e, t;
            return null != (e = null == (t = r.getGuildId) ? void 0 : t.call(r)) ? e : null;
        },
        isDM: () => {
            var e, t;
            return null != (e = null == (t = r.isDM) ? void 0 : t.call(r)) && e;
        },
        isGroupDM: () => {
            var e, t;
            return null != (e = null == (t = r.isGroupDM) ? void 0 : t.call(r)) && e;
        },
        isMultiUserDM: () => {
            var e, t;
            return null != (e = null == (t = r.isMultiUserDM) ? void 0 : t.call(r)) && e;
        },
        recipients: null != (l = r.recipients) ? l : [],
        isVocal: () => {
            var e, t;
            return null != (e = null == (t = r.isVocal) ? void 0 : t.call(r)) && e;
        },
    });
    if (null == i || i.kind !== A.G.GuildText) return null;
    let s = C.getChannel(e);
    if (null != s) return s;
    let a = new A.Qb(i, t, n);
    return C.upsert(a), a;
}

function F(e) {
    var t, n;
    let l = u.A.getChannel(e);
    if (null == l) return !1;
    let r = null != (t = null == (n = l.getGuildId) ? void 0 : n.call(l)) ? t : null;
    if (null == r || !g.Ay.isGuildOrCategoryOrChannelMuted(r, e)) return !1;
    let i = null != C.getChannel(e),
        s = null != x.getChannel(e);
    return i && C.delete(e), s && x.delete(e), i || s;
}
class V extends (l = i.Ay.Store) {
    initialize() {
        this.waitFor(u.A, c.A, y.A, E.default, d.A, h.A, a.A, f.default, g.Ay);
    }
    getActiveNowChannelByChannelId(e, t) {
        return "TEXT" === t ? C.getChannel(e) : x.getChannel(e);
    }
    getActiveNowChannels(e) {
        let { kind: t } = e;
        return "VOICE" === t ? x.getSortedChannels() : C.getSortedChannels();
    }
    getActiveNowChannelIds(e) {
        let { kind: t } = e;
        return "VOICE" === t ? x.getSortedChannelIds() : C.getSortedChannelIds();
    }
    hasActiveNowChannelId(e) {
        let { kind: t, channelId: n } = e;
        return "VOICE" === t ? x.hasSortedChannelId(n) : C.hasSortedChannelId(n);
    }
    getScoreForChannelId(e) {
        var t;
        let n = null != (t = C.getChannel(e)) ? t : x.getChannel(e);
        if (null == n) return null;
        let l = P({
            includeVcProbability: n.candidate.kind === A.G.GuildVoice,
        });
        return R(n, l);
    }
    getScoreBreakdownForChannelId(e) {
        var t, n;
        let l = null != (t = null != (n = C.getChannel(e)) ? n : x.getChannel(e)) ? t : null;
        if (null == l) return null;
        let r = l.candidate.kind === A.G.GuildVoice ? "VOICE" : "TEXT",
            i = P({
                includeVcProbability: l.candidate.kind === A.G.GuildVoice,
            }),
            s = (0, A.aU)(l.candidate, {
                voiceGuildId: j(),
                mostRecentGuildId: T,
            }),
            a = l.candidate.kind === A.G.DirectMessage || l.candidate.kind === A.G.GroupDM,
            o = a ? 0 : (0, A.EB)(l.candidate, i),
            u = l.score;
        return {
            channelId: e,
            kind: r,
            baseScore: u,
            contextBoost: s,
            guildAffinity: null != l.candidate.guildId ? i.getNormalizedGuildAffinity(l.candidate.guildId) : 0,
            finalScore: u * (1 + s) * (a ? 1 : 1 + o),
            scoreInfo: l.lastScoreInfo,
        };
    }
}
v(V, "displayName", "OverlayActiveNowStore");
let H = (e) => (0, m.v$)(e, "OverlayActiveNowStore"),
    Y = new V(
        s.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: H(function (e) {
                      if (e.tab !== p.x.MESSAGES) return !1;
                      let t = e.targetId;
                      if (e.isFavorite) {
                          let e = null != C.getChannel(t),
                              n = null != x.getChannel(t);
                          return e && C.delete(t), n && x.delete(t), e || n;
                      }
                      return !1;
                  }),
                  OVERLAY_MOUNTED: H(function (e) {
                      return M(!0), U(), !0;
                  }),
                  OVERLAY_UPDATE_OVERLAY_METHOD: H(function (e) {
                      let { overlayMethod: t } = e;
                      return t === I.Ue.OutOfProcess || t === I.Ue.OutOfProcessLimitedInteraction
                          ? (M(!0), U(), !0)
                          : !D() && M(!1);
                  }),
                  OVERLAY_CRASHED: H(function (e) {
                      return !D() && M(!1);
                  }),
                  OVERLAY_SET_INPUT_LOCKED: H(function (e) {
                      return !e.locked && (M(!0), U(), !0);
                  }),
                  FRIENDS_LIST_POPOUT_MOUNTED: H(function () {
                      return (_ = !0), M(!0), U(), !0;
                  }),
                  MESSAGE_CREATE: H(function (e) {
                      var t, n, l, r, i, s, a, c, d, h;
                      if (!N || e.optimistic) return !1;
                      let g = null != (t = null == (i = f.default.getCurrentUser()) ? void 0 : i.id) ? t : null,
                          p =
                              null != (n = null == (a = e.message) || null == (s = a.author) ? void 0 : s.id)
                                  ? n
                                  : null;
                      if (null == g || null == p || p === g) return !1;
                      let I = u.A.getChannel(e.channelId);
                      if (null == I || I.isPrivate() || !(0, o.ke)(I.type)) return !1;
                      let m = (function (e) {
                              let t = e.timestamp;
                              if (null == t) return Date.now();
                              let n = new Date(t).getTime();
                              return Number.isFinite(n) ? n : Date.now();
                          })(e.message),
                          E = P({
                              includeVcProbability: !1,
                          }),
                          A = null != (l = null == (c = I.getGuildId) ? void 0 : c.call(I)) ? l : null;
                      if (
                          !w({
                              isAlreadyTracked: null != C.getChannel(e.channelId),
                              guildId: A,
                              updatingUserId: p,
                              providers: E,
                          })
                      )
                          return !1;
                      let y = k(e.channelId, G(), E);
                      if (null == y) return !1;
                      let S = (null != (r = null == (d = e.message) ? void 0 : d.mentions) ? r : []).some(
                              (e) => (null == e ? void 0 : e.id) === g,
                          ),
                          v = null == (h = e.message) ? void 0 : h.mention_roles,
                          O = Array.isArray(v) && v.length > 0,
                          b = y.prepareForUpdate(m),
                          T = new Map(b.recentMessageAuthorIds);
                      T.set(p, m);
                      let _ = {
                          lastMessageAtMs: m,
                          unread: !0,
                          lastUnreadAtMs: m,
                          recentMessageAuthorId: p,
                          recentMessageAuthorIds: T,
                      };
                      return (
                          (S || O) &&
                              ((_.mentionCount = Math.max(b.mentionCount, +!!S + +!!O)),
                              S && (_.lastDirectMentionAtMs = m),
                              O && (_.lastRoleMentionAtMs = m)),
                          y.updateSignalsAndRescore(_, m),
                          y.prunable && C.delete(e.channelId),
                          U(),
                          !0
                      );
                  }),
                  MESSAGE_ACK: H(function (e) {
                      if (!N) return !1;
                      let t = C.getChannel(e.channelId);
                      if (null == t) return !1;
                      let n = Date.now(),
                          l = {
                              unread: !1,
                              lastUnreadAtMs: null,
                          };
                      return (
                          null != e.newMentionCount &&
                              (e.newMentionCount > 0
                                  ? ((l.mentionCount = e.newMentionCount),
                                    null == t.signals.lastDirectMentionAtMs && (l.lastDirectMentionAtMs = n))
                                  : ((l.mentionCount = 0),
                                    (l.lastDirectMentionAtMs = null),
                                    (l.lastRoleMentionAtMs = null))),
                          t.updateSignalsAndRescore(l, n),
                          t.prunable && C.delete(e.channelId),
                          U(),
                          !0
                      );
                  }),
                  TYPING_START: H(function (e) {
                      var t, n, l, r;
                      if (!N) return !1;
                      let i = null != (t = null == (l = f.default.getCurrentUser()) ? void 0 : l.id) ? t : null;
                      if (null == i || e.userId === i) return !1;
                      let s = u.A.getChannel(e.channelId);
                      if (null == s || s.isPrivate() || !(0, o.ke)(s.type)) return !1;
                      let a = Date.now(),
                          c = P({
                              includeVcProbability: !1,
                          }),
                          d = null != (n = null == (r = s.getGuildId) ? void 0 : r.call(s)) ? n : null;
                      if (
                          !w({
                              isAlreadyTracked: null != C.getChannel(e.channelId),
                              guildId: d,
                              updatingUserId: e.userId,
                              providers: c,
                          })
                      )
                          return !1;
                      let h = k(e.channelId, G(), c);
                      if (null == h) return !1;
                      let g = new Map(h.prepareForUpdate(a).typingUserIdsWithTimestampMs);
                      g.set(e.userId, a);
                      let p = Array.from(g.keys());
                      return (
                          h.updateSignalsAndRescore(
                              {
                                  typingUserIdsWithTimestampMs: g,
                                  typingUserIds: p,
                                  isTyping: p.length > 0,
                              },
                              a,
                          ),
                          h.prunable && C.delete(e.channelId),
                          U(),
                          !0
                      );
                  }),
                  VOICE_STATE_UPDATES: H(function (e) {
                      if (!N) return !1;
                      let t = Date.now(),
                          n = P({
                              includeVcProbability: !0,
                          }),
                          l = !1;
                      return (
                          x.applyBatch(() => {
                              for (let d of e.voiceStates) {
                                  var r, i, s, a, o, c;
                                  let e = d.userId,
                                      h = null != (r = d.channelId) ? r : null,
                                      g = null != (i = d.oldChannelId) ? i : null,
                                      f = (n) => {
                                          let r = x.getChannel(n);
                                          if (null == r) return;
                                          let i = r.signals,
                                              s = new Map(i.voiceUsersWithJoinTimestampMs);
                                          s.delete(e);
                                          let a = new Map(i.streamUsersWithTimestampMs);
                                          a.delete(e);
                                          let o = new Map(i.videoUsersWithTimestampMs);
                                          o.delete(e);
                                          let u = new Map(i.lastUnmuteActivityAtMs);
                                          u.delete(e);
                                          let c = new Map(i.lastUndeafenActivityAtMs);
                                          c.delete(e),
                                              r.updateSignalsAndRescore(
                                                  {
                                                      voiceUsersWithJoinTimestampMs: s,
                                                      streamUsersWithTimestampMs: a,
                                                      videoUsersWithTimestampMs: o,
                                                      lastUnmuteActivityAtMs: u,
                                                      lastUndeafenActivityAtMs: c,
                                                  },
                                                  t,
                                              ),
                                              r.prunable && x.delete(n),
                                              (l = !0);
                                      };
                                  if ((null != g && g !== h && f(g), null != h)) {
                                      let r = u.A.getChannel(h),
                                          i =
                                              null != (s = null == r || null == (a = r.getGuildId) ? void 0 : a.call(r))
                                                  ? s
                                                  : null;
                                      if (
                                          !w({
                                              isAlreadyTracked: null != x.getChannel(h),
                                              guildId: i,
                                              updatingUserId: e,
                                              providers: n,
                                          })
                                      )
                                          continue;
                                      let f = (function (e, t, n) {
                                          var l;
                                          if (!L(e, "VOICE")) return null;
                                          let r = u.A.getChannel(e);
                                          if (null == r) return null;
                                          let i = (0, A.o5)({
                                              id: r.id,
                                              getGuildId: () => {
                                                  var e, t;
                                                  return null != (e = null == (t = r.getGuildId) ? void 0 : t.call(r))
                                                      ? e
                                                      : null;
                                              },
                                              isDM: () => {
                                                  var e, t;
                                                  return null != (e = null == (t = r.isDM) ? void 0 : t.call(r)) && e;
                                              },
                                              isGroupDM: () => {
                                                  var e, t;
                                                  return (
                                                      null != (e = null == (t = r.isGroupDM) ? void 0 : t.call(r)) && e
                                                  );
                                              },
                                              isMultiUserDM: () => {
                                                  var e, t;
                                                  return (
                                                      null !=
                                                          (e = null == (t = r.isMultiUserDM) ? void 0 : t.call(r)) && e
                                                  );
                                              },
                                              recipients: null != (l = r.recipients) ? l : [],
                                              isVocal: () => {
                                                  var e, t;
                                                  return (
                                                      null != (e = null == (t = r.isVocal) ? void 0 : t.call(r)) && e
                                                  );
                                              },
                                          });
                                          if (null == i || i.kind !== A.G.GuildVoice) return null;
                                          let s = x.getChannel(e);
                                          if (null != s) return s;
                                          let a = new A.Qb(i, t, n);
                                          return x.upsert(a), a;
                                      })(
                                          h,
                                          (function () {
                                              var e, t;
                                              return (
                                                  (e = (function (e) {
                                                      for (var t = 1; t < arguments.length; t++) {
                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                              l = Object.keys(n);
                                                          "function" == typeof Object.getOwnPropertySymbols &&
                                                              (l = l.concat(
                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(n, e)
                                                                          .enumerable;
                                                                  }),
                                                              )),
                                                              l.forEach(function (t) {
                                                                  v(e, t, n[t]);
                                                              });
                                                      }
                                                      return e;
                                                  })({}, G())),
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
                                                                var l = Object.getOwnPropertySymbols(e);
                                                                n.push.apply(n, l);
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
                                      if (null == f) continue;
                                      let p = f.prepareForUpdate(t),
                                          I = null == g || g !== h,
                                          m = new Map(p.voiceUsersWithJoinTimestampMs);
                                      I && !m.has(e) && m.set(e, t);
                                      let E = new Map(p.streamUsersWithTimestampMs);
                                      d.selfStream ? E.has(e) || E.set(e, t) : E.delete(e);
                                      let y = new Map(p.videoUsersWithTimestampMs);
                                      d.selfVideo ? y.has(e) || y.set(e, t) : y.delete(e);
                                      let S = new Map(p.lastUnmuteActivityAtMs);
                                      if (!d.selfMute && !d.mute) {
                                          let n = null != (o = S.get(e)) ? o : null;
                                          (null == n || t - n >= 15e3) && S.set(e, t);
                                      }
                                      let O = new Map(p.lastUndeafenActivityAtMs);
                                      if (!d.selfDeaf && !d.deaf) {
                                          let n = null != (c = O.get(e)) ? c : null;
                                          (null == n || t - n >= 15e3) && O.set(e, t);
                                      }
                                      f.updateSignalsAndRescore(
                                          {
                                              voiceUsersWithJoinTimestampMs: m,
                                              lastVoiceJoinAtMs: I ? t : p.lastVoiceJoinAtMs,
                                              streamUsersWithTimestampMs: E,
                                              videoUsersWithTimestampMs: y,
                                              lastUnmuteActivityAtMs: S,
                                              lastUndeafenActivityAtMs: O,
                                          },
                                          t,
                                      ),
                                          f.prunable && x.delete(h),
                                          (l = !0);
                                  }
                              }
                          }),
                          l && U(),
                          l
                      );
                  }),
                  VOICE_CHANNEL_SELECT: H(function (e) {
                      return U(), !0;
                  }),
                  RTC_CONNECTION_STATE: H(function (e) {
                      return U(), !0;
                  }),
                  CHANNEL_SELECT: H(function (e) {
                      var t, n;
                      let { channelId: l } = e;
                      if (null == l) return !1;
                      let r = u.A.getChannel(l);
                      return (
                          !(null == r || r.isPrivate()) &&
                          ((T = null != (t = null == (n = r.getGuildId) ? void 0 : n.call(r)) ? t : null), U(), !0)
                      );
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: H(function (e) {
                      return F(e.channelId);
                  }),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: H(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of C.getSortedChannels())
                          e.candidate.guildId === t && (n = F(e.candidate.channelId) || n);
                      for (let e of x.getSortedChannels())
                          e.candidate.guildId === t && (n = F(e.candidate.channelId) || n);
                      return n;
                  }),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: H(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of C.getSortedChannels())
                          e.candidate.guildId === t && (n = F(e.candidate.channelId) || n);
                      for (let e of x.getSortedChannels())
                          e.candidate.guildId === t && (n = F(e.candidate.channelId) || n);
                      return n;
                  }),
                  LOGOUT: H(function () {
                      let e = C.size > 0 || x.size > 0;
                      return C.clear(), x.clear(), (N = !1), (_ = !1), (T = null), e;
                  }),
              },
    );
