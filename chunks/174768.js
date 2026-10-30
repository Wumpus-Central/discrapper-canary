let i;
(n.d(t, { A: () => et }), n(321073), n(667532));
var r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(506774),
    o = n(73153),
    d = n(115718),
    c = n(280157),
    u = n(243264),
    _ = n(455234),
    E = n(940382),
    A = n(863005),
    h = n(363195),
    f = n(280450),
    I = n(358047),
    p = n(734057),
    T = n(31717),
    m = n(808728),
    g = n(696451),
    S = n(71393),
    N = n(576705),
    C = n(573163),
    O = n(309010),
    R = n(967198),
    L = n(543465),
    y = n(768038),
    D = n(403362),
    v = n(652215),
    b = n(105292);
let P = "seenQSTutorial";
function M(e) {
    return e === d.rD.USER || e === d.rD.USER_GLOBAL;
}
function U() {
    return [
        d.rD.USER,
        d.rD.GROUP_DM,
        d.rD.TEXT_CHANNEL,
        d.rD.GUILD,
        d.rD.APPLICATION,
        d.rD.GAME_PROFILE,
        d.rD.LINK,
        d.rD.IN_APP_NAVIGATION,
    ];
}
let w = 0,
    G = !1,
    x = !1,
    k = null,
    F = [],
    B = null,
    V = 0,
    H = [],
    j = [],
    W = null,
    Y = null;
function K() {
    ((x = S.A.getGuildCount() >= 3 || a().size(p.A.getMutablePrivateChannels()) >= 20), (H = []));
}
function $(e) {
    let t = (0, c.A)(e);
    if (null == t) return null;
    if (M(k)) {
        if (t.type !== d.rD.USER) return null;
    } else if (null != k && k !== t.type) return null;
    return t;
}
function z(e) {
    let { query: t, queryMode: n } = e,
        r = t.trim(),
        a = R.A.getGuildId() ?? void 0,
        s = new Set([`user:${f.default.getId()}`]);
    (null != a && s.add(`guild:${a}`),
        (Y = Date.now()),
        (i =
            i ??
            new d.Ay(q, U(), null != n ? 100 : 5, { frecencyBoosters: !0, blacklist: s, allowSnowflake: !0 }, 100)),
        (B = null),
        (V = r.length),
        (k = n),
        i.search(r));
}
function X(e) {
    ((j = j.filter((t) => t !== e)).unshift(e), j.length > 8 && (j.length = 8));
}
function q(e, t) {
    if (
        !(function (e, t) {
            if (e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) {
                let i = e[n],
                    r = t[n];
                if (i.record.id !== r.record.id || i.type !== r.type) return !1;
            }
            return !0;
        })(
            (e =
                "" === (t = t.trim()).trim()
                    ? (function () {
                          var e;
                          let t,
                              n = R.A.getGuildId() ?? void 0,
                              i = O.Ay.getChannelId() ?? void 0;
                          switch (k) {
                              case d.rD.USER_GLOBAL:
                              case d.rD.USER: {
                                  let e = f.default.getId();
                                  return y.Ay.getRecentlyTalked(i, 100).filter((t) => {
                                      let { record: n } = t;
                                      return n.id !== e;
                                  });
                              }
                              case d.rD.APPLICATION:
                                  return y.Ay.queryApplications({ query: "", limit: 100, fuzzy: !0 });
                              case d.rD.GAME_PROFILE:
                                  return [];
                              case d.rD.GUILD:
                                  return y.Ay.queryGuilds({ query: "", limit: 100, fuzzy: !0 });
                              case d.rD.TEXT_CHANNEL:
                                  return y.Ay.queryChannels({
                                      query: "",
                                      guildId: R.A.getGuildId(),
                                      limit: 100,
                                      fuzzy: !0,
                                      allowEmptyQueries: !0,
                                  });
                              case d.rD.VOICE_CHANNEL:
                                  return y.Ay.queryChannels({
                                      query: "",
                                      guildId: R.A.getGuildId(),
                                      limit: 100,
                                      fuzzy: !0,
                                      filter: () => !0,
                                      type: m.vM,
                                      allowEmptyQueries: !0,
                                  });
                          }
                          let r = [],
                              a = new Set(),
                              s = [],
                              l = O.Ay.getChannelId(),
                              o = I.Ay.getCurrentSidebarChannelId(l);
                          for (let e = 0; e < j.length; e += 1) {
                              if (j[e] === l || j[e] === o) continue;
                              let t = $(j[e]);
                              null != t &&
                                  ((t.type !== d.rD.TEXT_CHANNEL && t.type !== d.rD.VOICE_CHANNEL) ||
                                      N.A.can(v.xBc.VIEW_CHANNEL, t.record)) &&
                                  (s.push(t), a.size < 3 && a.add(j[e]));
                          }
                          let c =
                              ((e = (e) => e === i || a.has(e)),
                              (t = []),
                              T.A.getRecentlyEditedDrafts(T.C.ChannelMessage).forEach((n) => {
                                  let { channelId: i } = n;
                                  if (e(i)) return;
                                  let r = $(i);
                                  if (null != r) {
                                      if (
                                          (r.type === d.rD.TEXT_CHANNEL || r.type === d.rD.VOICE_CHANNEL) &&
                                          !N.A.can(v.xBc.SEND_MESSAGES, r.record)
                                      )
                                          return;
                                      t.push({ record: r, channelId: i });
                                  }
                              }),
                              t);
                          if (c.length > 0)
                              for (let e of (r.push((0, d.jF)(b.intl.string(b.t["4B63jZ"]))), c))
                                  (a.add(e.channelId), r.push(e.record));
                          let u = C.Ay.getMentionChannelIds().filter((e) => e !== i && !a.has(e)),
                              E = [];
                          for (let e = u.length - 1; e >= 0; e--) {
                              let t = u[e];
                              if (null == t) continue;
                              let n = $(t);
                              null != n && E.push({ channelId: t, result: n });
                          }
                          if (E.length > 0)
                              for (let { channelId: e, result: t } of (r.push((0, d.jF)(b.intl.string(b.t["61Df13"]))),
                              E))
                                  (a.add(t.record.id), a.add(e), r.push(t));
                          if (null != n) {
                              let e = m.Ay.getSelectableChannelIds(n)
                                  .filter((e) => {
                                      let t = p.A.getChannel(e);
                                      return (
                                          !(
                                              null == t ||
                                              e === i ||
                                              a.has(e) ||
                                              L.Ay.isChannelMuted(t.guild_id, e) ||
                                              (null != t.parent_id && L.Ay.isChannelMuted(t.guild_id, t.parent_id))
                                          ) && (0, _.Y)(t)
                                      );
                                  })
                                  .map((e) => $(e))
                                  .filter(D.Vq);
                              (Object.values(A.A.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
                                  for (let n in t) {
                                      let t = $(n);
                                      null == t || a.has(t.record.id) || e.push(t);
                                  }
                              }),
                                  e.length > 0 && (r.push((0, d.jF)(b.intl.string(b.t.ieCAhD))), (r = r.concat(e))));
                          }
                          let h = r.length > 0 ? 3 : 7;
                          return (
                              s.length > h && s.splice(h),
                              s.length > 0 && (r = [(0, d.jF)(b.intl.string(b.t["80lOZ1"])), ...s, ...r]),
                              r
                          );
                      })()
                    : e),
            H,
        )
    ) {
        H = e;
        var n = e,
            i = t;
        switch (k) {
            case d.rD.USER_GLOBAL:
            case d.rD.USER: {
                let e = k === d.rD.USER_GLOBAL ? null : S.A.getGuild(R.A.getGuildId());
                (n.unshift(
                    (0, d.jF)(
                        null != e
                            ? b.intl.formatToPlainString(b.t.FREzQs, { name: e.name })
                            : b.intl.string(b.t.XFYW1o),
                    ),
                ),
                    (F = n));
                break;
            }
            case d.rD.TEXT_CHANNEL:
                (n.unshift((0, d.jF)(b.intl.string(b.t.W26k4V))), (F = n));
                break;
            case d.rD.VOICE_CHANNEL:
                (n.unshift((0, d.jF)(b.intl.string(b.t.zUoI5C))), (F = n));
                break;
            case d.rD.GUILD:
                (n.unshift((0, d.jF)(b.intl.string(b.t.olADPs))), (F = n));
                break;
            case d.rD.APPLICATION:
                (n.unshift((0, d.jF)(b.intl.string(b.t.VwK1ld))), (F = n));
                break;
            case d.rD.GAME_PROFILE:
                (n.unshift((0, d.jF)(b.intl.string(b.t.gEp2SG))), (F = n));
                break;
            default: {
                let e = n.filter((e) => e.type === d.rD.GAME_PROFILE).slice(0, 3);
                F = [...n.filter((e) => e.type !== d.rD.GAME_PROFILE), ...e];
            }
        }
        if (i !== B) ((B = i), (V = Math.max(i.length, V)), (w = (0, d.Vv)(d.vB.DOWN, -1, F)));
        else {
            let e = F[w];
            null != e && e.type === d.rD.HEADER && (w = (0, d.Vv)(d.vB.DOWN, w, F));
        }
        ee.emitChange();
    }
}
function Z() {
    ((B = null), (V = 0), (H = []), null != i && (i.destroy(), (i = null)));
}
function Q() {
    if (null == i) return !1;
    i.refreshGameProfiles();
}
class J extends s.Ay.PersistedStore {
    static displayName = "QuickSwitcherStore";
    static persistKey = "QuickSwitcherStore";
    initialize(e) {
        (this.waitFor(A.A, f.default, I.Ay, p.A, T.A, u.A, m.Ay, g.Ay, S.A, N.A, C.Ay, O.Ay, R.A, h.A, L.Ay),
            this.syncWith([h.A], () => !0),
            (G = l.w.get(P) || !1),
            (j = e?.channelHistory ?? []));
    }
    getState() {
        return { channelHistory: j };
    }
    isOpen() {
        return null != i;
    }
    getResultTotals(e) {
        return null == i
            ? 0
            : null == e
              ? i.results.reduce((e, t) => (t.type !== d.rD.HEADER ? e + 1 : e), 0)
              : i.results.reduce((t, n) => (n.type === e ? t + 1 : t), 0);
    }
    channelNoticePredicate(e, t) {
        let n = Date.now() - t >= v.D2K;
        return x && n;
    }
    getFrequentGuilds() {
        return null != i ? i.queryGuilds("", 100) : null;
    }
    getFrequentGuildsLength() {
        return null != i ? i.queryGuilds("", 100).length : 0;
    }
    getChannelHistory() {
        return j;
    }
    getLastShowTimestamp() {
        return Y;
    }
    getProps() {
        return {
            theme: h.A.theme,
            query: null != i ? i.query : "",
            queryMode: k,
            results: F,
            selectedIndex: w,
            seenTutorial: G,
            maxQueryLength: V,
        };
    }
}
let ee = new J(o.h, {
        CONNECTION_OPEN: K,
        CONNECTION_OPEN_SUPPLEMENTAL: K,
        QUICKSWITCHER_SHOW: z,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: z,
        QUICKSWITCHER_HIDE: Z,
        OVERLAY_SET_INPUT_LOCKED: Z,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: Z,
        QUICKSWITCHER_SEARCH: function (e) {
            let { query: t, queryMode: n } = e,
                r = t.trim();
            if (null == i) return !1;
            if (k !== n) {
                (null == n ? i.setResultTypes(U()) : M(n) ? i.setResultTypes([d.rD.USER]) : i.setResultTypes([n]),
                    i.setLimit(null != n ? 100 : 5));
                let e = R.A.getGuildId() ?? void 0;
                n === d.rD.USER && null != e
                    ? i.setOptions({ userFilters: { guild: e, friends: !0 } }, !0)
                    : n === d.rD.VOICE_CHANNEL
                      ? i.setOptions({ voiceChannelGuildFilter: null }, !0)
                      : i.setOptions({ userFilters: null, voiceChannelGuildFilter: void 0 }, !0);
            }
            if ((k = n) === d.rD.USER) {
                let e = R.A.getGuildId() ?? null;
                i.search(r, e);
            } else i.search(r, void 0);
        },
        QUICKSWITCHER_SELECT: function (e) {
            w = e.selectedIndex;
        },
        QUICKSWITCHER_SWITCH_TO: function () {
            if (G) return !1;
            ((G = !0), l.w.set(P, !0));
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (((W = null), null == n)) return !1;
            X(n);
            let i = I.Ay.getSidebarState(n);
            if (
                i?.type !== E.PE.VIEW_CHANNEL ||
                i.channelId === n ||
                null == I.Ay.getCurrentSidebarChannelId(n) ||
                null != I.Ay.getGuildSidebarState(t)
            )
                return;
            let r = j;
            X(i.channelId);
            let a = { parentId: n, channelId: i.channelId, historyBeforeRestore: r };
            ((W = a),
                queueMicrotask(() => {
                    W === a && (W = null);
                }));
        },
        SIDEBAR_VIEW_CHANNEL: function (e) {
            let t = W;
            if (((W = null), e.sidebarType !== E.PE.VIEW_CHANNEL)) return !1;
            (null != t && t.parentId === e.baseChannelId && t.channelId !== e.channelId && (j = t.historyBeforeRestore),
                X(e.channelId));
        },
        GAME_AUTOCOMPLETE_FETCH_SUCCESS: Q,
        GAME_AUTOCOMPLETE_FETCH_FAILURE: Q,
    }),
    et = ee;
