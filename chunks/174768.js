"use strict";
let i;
n.d(t, { A: () => Q }), n(321073), n(667532);
var r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(506774),
    l = n(228366),
    u = n(115718),
    c = n(280157),
    d = n(243264),
    _ = n(929396),
    h = n(455234),
    f = n(695633),
    p = n(363195),
    E = n(495544),
    m = n(734057),
    g = n(31717),
    A = n(808728),
    I = n(696451),
    T = n(71393),
    S = n(576705),
    y = n(568548),
    C = n(309010),
    N = n(967198),
    v = n(543465),
    R = n(768038),
    O = n(403362),
    b = n(363738),
    D = n(652215),
    L = n(375708);
let w = "seenQSTutorial";
function M() {
    let { enabled: e } = b.s.getConfig({ location: "QuickSwitcherStore.handleQuickSwitcherShow" });
    return [
        u.rD.USER,
        u.rD.GROUP_DM,
        u.rD.TEXT_CHANNEL,
        u.rD.GUILD,
        u.rD.APPLICATION,
        ...(e ? [u.rD.GAME_PROFILE] : []),
        u.rD.LINK,
        u.rD.IN_APP_NAVIGATION,
    ];
}
let P = 0,
    x = !1,
    k = !1,
    U = null,
    G = [],
    F = null,
    V = 0,
    B = [],
    j = [],
    H = null;
function Y() {
    (k = T.A.getGuildCount() >= 3 || s().size(m.A.getMutablePrivateChannels()) >= 20), (B = []);
}
function W(e) {
    let t = (0, c.A)(e);
    return null == t || (null != U && U !== t.type) ? null : t;
}
function K(e) {
    let { query: t, queryMode: n } = e,
        r = t.trim(),
        s = N.A.getGuildId() ?? void 0,
        a = new Set([`user:${E.default.getId()}`]);
    null != s && a.add(`guild:${s}`),
        (H = Date.now()),
        (i =
            i ??
            new u.Ay($, M(), null != n ? 100 : 5, { frecencyBoosters: !0, blacklist: a, allowSnowflake: !0 }, 100)),
        (F = null),
        (V = r.length),
        (U = n),
        i.search(r);
}
function $(e, t) {
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
                              n = N.A.getGuildId() ?? void 0,
                              i = C.A.getChannelId() ?? void 0;
                          switch (U) {
                              case u.rD.USER: {
                                  let e = E.default.getId();
                                  return R.Ay.getRecentlyTalked(i, 100).filter((t) => {
                                      let { record: n } = t;
                                      return n.id !== e;
                                  });
                              }
                              case u.rD.APPLICATION:
                                  return R.Ay.queryApplications({ query: "", limit: 100, fuzzy: !0 });
                              case u.rD.GAME_PROFILE:
                                  return R.Ay.queryGames("", 100).map((e, t) => ({
                                      type: u.rD.GAME_PROFILE,
                                      record: (0, _.Sj)(e),
                                      score: (0, R.zy)((0, R.XA)(e.name, "", t)),
                                      comparator: e.name,
                                      sortable: e.name.toLocaleLowerCase(),
                                  }));
                              case u.rD.GUILD:
                                  return R.Ay.queryGuilds({ query: "", limit: 100, fuzzy: !0 });
                              case u.rD.TEXT_CHANNEL:
                                  return R.Ay.queryChannels({
                                      query: "",
                                      guildId: N.A.getGuildId(),
                                      limit: 100,
                                      fuzzy: !0,
                                      allowEmptyQueries: !0,
                                  });
                              case u.rD.VOICE_CHANNEL:
                                  return R.Ay.queryChannels({
                                      query: "",
                                      guildId: N.A.getGuildId(),
                                      limit: 100,
                                      fuzzy: !0,
                                      filter: () => !0,
                                      type: A.vM,
                                      allowEmptyQueries: !0,
                                  });
                          }
                          let r = [],
                              s = new Set(),
                              a = [];
                          for (let e = 1; e < j.length; e += 1) {
                              let t = W(j[e]);
                              null != t &&
                                  ((t.type !== u.rD.TEXT_CHANNEL && t.type !== u.rD.VOICE_CHANNEL) ||
                                      S.A.can(D.xBc.VIEW_CHANNEL, t.record)) &&
                                  (a.push(t), s.size < 3 && s.add(j[e]));
                          }
                          let o =
                              ((e = (e) => e === i || s.has(e)),
                              (t = []),
                              g.A.getRecentlyEditedDrafts(g.C.ChannelMessage).forEach((n) => {
                                  let { channelId: i } = n;
                                  if (e(i)) return;
                                  let r = W(i);
                                  null != r && t.push({ record: r, channelId: i });
                              }),
                              t);
                          if (o.length > 0)
                              for (let e of (r.push((0, u.jF)(L.intl.string(L.t["4B63jZ"]))), o))
                                  s.add(e.channelId), r.push(e.record);
                          let l = y.Ay.getMentionChannelIds().filter((e) => e !== i && !s.has(e)),
                              c = [];
                          for (let e = l.length - 1; e >= 0; e--) {
                              let t = l[e];
                              if (null == t) continue;
                              let n = W(t);
                              null != n && c.push({ channelId: t, result: n });
                          }
                          if (c.length > 0)
                              for (let { channelId: e, result: t } of (r.push((0, u.jF)(L.intl.string(L.t["61Df13"]))),
                              c))
                                  s.add(t.record.id), s.add(e), r.push(t);
                          if (null != n) {
                              let e = A.Ay.getSelectableChannelIds(n)
                                  .filter((e) => {
                                      let t = m.A.getChannel(e);
                                      return (
                                          !(
                                              null == t ||
                                              e === i ||
                                              s.has(e) ||
                                              v.Ay.isChannelMuted(t.guild_id, e) ||
                                              (null != t.parent_id && v.Ay.isChannelMuted(t.guild_id, t.parent_id))
                                          ) && (0, h.Y)(t)
                                      );
                                  })
                                  .map((e) => W(e))
                                  .filter(O.Vq);
                              Object.values(f.A.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
                                  for (let n in t) {
                                      let t = W(n);
                                      null == t || s.has(t.record.id) || e.push(t);
                                  }
                              }),
                                  e.length > 0 && (r.push((0, u.jF)(L.intl.string(L.t.ieCAhD))), (r = r.concat(e)));
                          }
                          let d = r.length > 0 ? 3 : 7;
                          return (
                              a.length > d && a.splice(d),
                              a.length > 0 && (r = [(0, u.jF)(L.intl.string(L.t["80lOZ1"])), ...a, ...r]),
                              r
                          );
                      })()
                    : e),
            B,
        )
    ) {
        B = e;
        var n = e,
            i = t;
        switch (U) {
            case u.rD.USER: {
                let e = T.A.getGuild(N.A.getGuildId());
                n.unshift(
                    (0, u.jF)(
                        null != e
                            ? L.intl.formatToPlainString(L.t.FREzQs, { name: e.name })
                            : L.intl.string(L.t.XFYW1o),
                    ),
                ),
                    (G = n);
                break;
            }
            case u.rD.TEXT_CHANNEL:
                n.unshift((0, u.jF)(L.intl.string(L.t.W26k4V))), (G = n);
                break;
            case u.rD.VOICE_CHANNEL:
                n.unshift((0, u.jF)(L.intl.string(L.t.zUoI5C))), (G = n);
                break;
            case u.rD.GUILD:
                n.unshift((0, u.jF)(L.intl.string(L.t.olADPs))), (G = n);
                break;
            case u.rD.APPLICATION:
                n.unshift((0, u.jF)(L.intl.string(L.t.VwK1ld))), (G = n);
                break;
            case u.rD.GAME_PROFILE:
                n.unshift((0, u.jF)(L.intl.string(L.t.gEp2SG))), (G = n);
                break;
            default:
                G = n;
        }
        if (i !== F) (F = i), (V = Math.max(i.length, V)), (P = (0, u.Vv)(u.vB.DOWN, -1, G));
        else {
            let e = G[P];
            null != e && e.type === u.rD.HEADER && (P = (0, u.Vv)(u.vB.DOWN, P, G));
        }
        X.emitChange();
    }
}
function z() {
    (F = null), (V = 0), (B = []), null != i && (i.destroy(), (i = null));
}
function q() {
    if (null == i) return !1;
    i.refreshGameProfiles();
}
class Z extends a.Ay.PersistedStore {
    static displayName = "QuickSwitcherStore";
    static persistKey = "QuickSwitcherStore";
    initialize(e) {
        this.waitFor(f.A, E.default, m.A, g.A, d.A, A.Ay, I.Ay, T.A, S.A, y.Ay, C.A, N.A, p.A, v.Ay),
            this.syncWith([p.A], () => !0),
            (x = o.w.get(w) || !1),
            (j = e?.channelHistory ?? []);
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
              ? i.results.reduce((e, t) => (t.type !== u.rD.HEADER ? e + 1 : e), 0)
              : i.results.reduce((t, n) => (n.type === e ? t + 1 : t), 0);
    }
    channelNoticePredicate(e, t) {
        let n = Date.now() - t >= D.D2K;
        return k && n;
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
        return H;
    }
    getProps() {
        return {
            theme: p.A.theme,
            query: null != i ? i.query : "",
            queryMode: U,
            results: G,
            selectedIndex: P,
            seenTutorial: x,
            maxQueryLength: V,
        };
    }
}
let X = new Z(l.h, {
        CONNECTION_OPEN: Y,
        CONNECTION_OPEN_SUPPLEMENTAL: Y,
        QUICKSWITCHER_SHOW: K,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: K,
        QUICKSWITCHER_HIDE: z,
        OVERLAY_SET_INPUT_LOCKED: z,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: z,
        QUICKSWITCHER_SEARCH: function (e) {
            let { query: t, queryMode: n } = e,
                r = t.trim();
            if (null == i) return !1;
            if (U !== n) {
                i.setResultTypes(null != n ? [n] : M()), i.setLimit(null != n ? 100 : 5);
                let e = N.A.getGuildId() ?? void 0;
                n === u.rD.USER && null != e
                    ? i.setOptions({ userFilters: { guild: e, friends: !0 } }, !0)
                    : n === u.rD.VOICE_CHANNEL
                      ? i.setOptions({ voiceChannelGuildFilter: null }, !0)
                      : i.setOptions({ userFilters: null, voiceChannelGuildFilter: void 0 }, !0);
            }
            if ((U = n) === u.rD.USER) {
                let e = N.A.getGuildId() ?? null;
                i.search(r, e);
            } else i.search(r, void 0);
        },
        QUICKSWITCHER_SELECT: function (e) {
            P = e.selectedIndex;
        },
        QUICKSWITCHER_SWITCH_TO: function () {
            if (x) return !1;
            (x = !0), o.w.set(w, !0);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == t) return !1;
            (j = j.filter((e) => e !== t)).unshift(t), j.length > 8 && (j.length = 8);
        },
        GAME_AUTOCOMPLETE_FETCH_SUCCESS: q,
        GAME_AUTOCOMPLETE_FETCH_FAILURE: q,
    }),
    Q = X;
