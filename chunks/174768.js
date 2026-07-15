"use strict";
let i;
n.d(t, { A: () => X }), n(321073), n(667532);
var r = n(735438),
    a = n.n(r),
    s = n(17928),
    l = n(506774),
    o = n(228366),
    d = n(115718),
    c = n(280157),
    u = n(243264),
    _ = n(455234),
    E = n(695633),
    A = n(363195),
    h = n(280450),
    I = n(734057),
    f = n(31717),
    p = n(808728),
    T = n(696451),
    m = n(71393),
    g = n(576705),
    S = n(568548),
    N = n(309010),
    C = n(967198),
    O = n(543465),
    R = n(768038),
    L = n(403362),
    D = n(363738),
    y = n(652215),
    v = n(375708);
let b = "seenQSTutorial";
function M() {
    let { enabled: e } = D.s.getConfig({ location: "QuickSwitcherStore.handleQuickSwitcherShow" });
    return [
        d.rD.USER,
        d.rD.GROUP_DM,
        d.rD.TEXT_CHANNEL,
        d.rD.GUILD,
        d.rD.APPLICATION,
        ...(e ? [d.rD.GAME_PROFILE] : []),
        d.rD.LINK,
        d.rD.IN_APP_NAVIGATION,
    ];
}
let P = 0,
    U = !1,
    w = !1,
    G = null,
    x = [],
    k = null,
    F = 0,
    V = [],
    B = [],
    H = null;
function j() {
    (w = m.A.getGuildCount() >= 3 || a().size(I.A.getMutablePrivateChannels()) >= 20), (V = []);
}
function W(e) {
    let t = (0, c.A)(e);
    return null == t || (null != G && G !== t.type) ? null : t;
}
function Y(e) {
    let { query: t, queryMode: n } = e,
        r = t.trim(),
        a = C.A.getGuildId() ?? void 0,
        s = new Set([`user:${h.default.getId()}`]);
    null != a && s.add(`guild:${a}`),
        (H = Date.now()),
        (i =
            i ??
            new d.Ay(K, M(), null != n ? 100 : 5, { frecencyBoosters: !0, blacklist: s, allowSnowflake: !0 }, 100)),
        (k = null),
        (F = r.length),
        (G = n),
        i.search(r);
}
function K(e, t) {
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
                          n = C.A.getGuildId() ?? void 0,
                          i = N.A.getChannelId() ?? void 0;
                      switch (G) {
                          case d.rD.USER: {
                              let e = h.default.getId();
                              return R.Ay.getRecentlyTalked(i, 100).filter((t) => {
                                  let { record: n } = t;
                                  return n.id !== e;
                              });
                          }
                          case d.rD.APPLICATION:
                              return R.Ay.queryApplications({ query: "", limit: 100, fuzzy: !0 });
                          case d.rD.GAME_PROFILE:
                              return [];
                          case d.rD.GUILD:
                              return R.Ay.queryGuilds({ query: "", limit: 100, fuzzy: !0 });
                          case d.rD.TEXT_CHANNEL:
                              return R.Ay.queryChannels({
                                  query: "",
                                  guildId: C.A.getGuildId(),
                                  limit: 100,
                                  fuzzy: !0,
                                  allowEmptyQueries: !0,
                              });
                          case d.rD.VOICE_CHANNEL:
                              return R.Ay.queryChannels({
                                  query: "",
                                  guildId: C.A.getGuildId(),
                                  limit: 100,
                                  fuzzy: !0,
                                  filter: () => !0,
                                  type: p.vM,
                                  allowEmptyQueries: !0,
                              });
                      }
                      let r = [],
                          a = new Set(),
                          s = [];
                      for (let e = 1; e < B.length; e += 1) {
                          let t = W(B[e]);
                          null != t &&
                              ((t.type !== d.rD.TEXT_CHANNEL && t.type !== d.rD.VOICE_CHANNEL) ||
                                  g.A.can(y.xBc.VIEW_CHANNEL, t.record)) &&
                              (s.push(t), a.size < 3 && a.add(B[e]));
                      }
                      let l =
                          ((e = (e) => e === i || a.has(e)),
                          (t = []),
                          f.A.getRecentlyEditedDrafts(f.C.ChannelMessage).forEach((n) => {
                              let { channelId: i } = n;
                              if (e(i)) return;
                              let r = W(i);
                              if (null != r) {
                                  if (
                                      (r.type === d.rD.TEXT_CHANNEL || r.type === d.rD.VOICE_CHANNEL) &&
                                      !g.A.can(y.xBc.SEND_MESSAGES, r.record)
                                  )
                                      return;
                                  t.push({ record: r, channelId: i });
                              }
                          }),
                          t);
                      if (l.length > 0)
                          for (let e of (r.push((0, d.jF)(v.intl.string(v.t["4B63jZ"]))), l))
                              a.add(e.channelId), r.push(e.record);
                      let o = S.Ay.getMentionChannelIds().filter((e) => e !== i && !a.has(e)),
                          c = [];
                      for (let e = o.length - 1; e >= 0; e--) {
                          let t = o[e];
                          if (null == t) continue;
                          let n = W(t);
                          null != n && c.push({ channelId: t, result: n });
                      }
                      if (c.length > 0)
                          for (let { channelId: e, result: t } of (r.push((0, d.jF)(v.intl.string(v.t["61Df13"]))), c))
                              a.add(t.record.id), a.add(e), r.push(t);
                      if (null != n) {
                          let e = p.Ay.getSelectableChannelIds(n)
                              .filter((e) => {
                                  let t = I.A.getChannel(e);
                                  return (
                                      !(
                                          null == t ||
                                          e === i ||
                                          a.has(e) ||
                                          O.Ay.isChannelMuted(t.guild_id, e) ||
                                          (null != t.parent_id && O.Ay.isChannelMuted(t.guild_id, t.parent_id))
                                      ) && (0, _.Y)(t)
                                  );
                              })
                              .map((e) => W(e))
                              .filter(L.Vq);
                          Object.values(E.A.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
                              for (let n in t) {
                                  let t = W(n);
                                  null == t || a.has(t.record.id) || e.push(t);
                              }
                          }),
                              e.length > 0 && (r.push((0, d.jF)(v.intl.string(v.t.ieCAhD))), (r = r.concat(e)));
                      }
                      let u = r.length > 0 ? 3 : 7;
                      return (
                          s.length > u && s.splice(u),
                          s.length > 0 && (r = [(0, d.jF)(v.intl.string(v.t["80lOZ1"])), ...s, ...r]),
                          r
                      );
                  })()
                : e),
        V,
    ) &&
        ((V = e),
        (function (e, t) {
            switch (G) {
                case d.rD.USER: {
                    let t = m.A.getGuild(C.A.getGuildId());
                    e.unshift(
                        (0, d.jF)(
                            null != t
                                ? v.intl.formatToPlainString(v.t.FREzQs, { name: t.name })
                                : v.intl.string(v.t.XFYW1o),
                        ),
                    ),
                        (x = e);
                    break;
                }
                case d.rD.TEXT_CHANNEL:
                    e.unshift((0, d.jF)(v.intl.string(v.t.W26k4V))), (x = e);
                    break;
                case d.rD.VOICE_CHANNEL:
                    e.unshift((0, d.jF)(v.intl.string(v.t.zUoI5C))), (x = e);
                    break;
                case d.rD.GUILD:
                    e.unshift((0, d.jF)(v.intl.string(v.t.olADPs))), (x = e);
                    break;
                case d.rD.APPLICATION:
                    e.unshift((0, d.jF)(v.intl.string(v.t.VwK1ld))), (x = e);
                    break;
                case d.rD.GAME_PROFILE:
                    e.unshift((0, d.jF)(v.intl.string(v.t.gEp2SG))), (x = e);
                    break;
                default: {
                    let { enabled: t } = D.s.getConfig({ location: "QuickSwitcherStore.updateResults" });
                    if (t) {
                        let t = e.filter((e) => e.type === d.rD.GAME_PROFILE).slice(0, 3);
                        x = [...e.filter((e) => e.type !== d.rD.GAME_PROFILE), ...t];
                    } else x = e;
                }
            }
            if (t !== k) (k = t), (F = Math.max(t.length, F)), (P = (0, d.Vv)(d.vB.DOWN, -1, x));
            else {
                let e = x[P];
                null != e && e.type === d.rD.HEADER && (P = (0, d.Vv)(d.vB.DOWN, P, x));
            }
            Z.emitChange();
        })(e, t));
}
function $() {
    (k = null), (F = 0), (V = []), null != i && (i.destroy(), (i = null));
}
function z() {
    if (null == i) return !1;
    i.refreshGameProfiles();
}
class q extends s.Ay.PersistedStore {
    static displayName = "QuickSwitcherStore";
    static persistKey = "QuickSwitcherStore";
    initialize(e) {
        this.waitFor(E.A, h.default, I.A, f.A, u.A, p.Ay, T.Ay, m.A, g.A, S.Ay, N.A, C.A, A.A, O.Ay),
            this.syncWith([A.A], () => !0),
            (U = l.w.get(b) || !1),
            (B = e?.channelHistory ?? []);
    }
    getState() {
        return { channelHistory: B };
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
        let n = Date.now() - t >= y.D2K;
        return w && n;
    }
    getFrequentGuilds() {
        return null != i ? i.queryGuilds("", 100) : null;
    }
    getFrequentGuildsLength() {
        return null != i ? i.queryGuilds("", 100).length : 0;
    }
    getChannelHistory() {
        return B;
    }
    getLastShowTimestamp() {
        return H;
    }
    getProps() {
        return {
            theme: A.A.theme,
            query: null != i ? i.query : "",
            queryMode: G,
            results: x,
            selectedIndex: P,
            seenTutorial: U,
            maxQueryLength: F,
        };
    }
}
let Z = new q(o.h, {
        CONNECTION_OPEN: j,
        CONNECTION_OPEN_SUPPLEMENTAL: j,
        QUICKSWITCHER_SHOW: Y,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: Y,
        QUICKSWITCHER_HIDE: $,
        OVERLAY_SET_INPUT_LOCKED: $,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: $,
        QUICKSWITCHER_SEARCH: function (e) {
            let { query: t, queryMode: n } = e,
                r = t.trim();
            if (null == i) return !1;
            if (G !== n) {
                i.setResultTypes(null != n ? [n] : M()), i.setLimit(null != n ? 100 : 5);
                let e = C.A.getGuildId() ?? void 0;
                n === d.rD.USER && null != e
                    ? i.setOptions({ userFilters: { guild: e, friends: !0 } }, !0)
                    : n === d.rD.VOICE_CHANNEL
                      ? i.setOptions({ voiceChannelGuildFilter: null }, !0)
                      : i.setOptions({ userFilters: null, voiceChannelGuildFilter: void 0 }, !0);
            }
            if ((G = n) === d.rD.USER) {
                let e = C.A.getGuildId() ?? null;
                i.search(r, e);
            } else i.search(r, void 0);
        },
        QUICKSWITCHER_SELECT: function (e) {
            P = e.selectedIndex;
        },
        QUICKSWITCHER_SWITCH_TO: function () {
            if (U) return !1;
            (U = !0), l.w.set(b, !0);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == t) return !1;
            (B = B.filter((e) => e !== t)).unshift(t), B.length > 8 && (B.length = 8);
        },
        GAME_AUTOCOMPLETE_FETCH_SUCCESS: z,
        GAME_AUTOCOMPLETE_FETCH_FAILURE: z,
    }),
    X = Z;
