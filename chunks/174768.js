"use strict";
let i;
n.d(t, { A: () => q }), n(321073), n(667532);
var r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(506774),
    l = n(228366),
    u = n(115718),
    c = n(280157),
    d = n(455234),
    _ = n(695633),
    h = n(363195),
    f = n(495544),
    p = n(734057),
    E = n(31717),
    m = n(808728),
    g = n(696451),
    A = n(71393),
    I = n(576705),
    T = n(568548),
    S = n(309010),
    y = n(967198),
    C = n(543465),
    N = n(768038),
    v = n(403362),
    R = n(363738),
    O = n(652215),
    b = n(375708);
let D = "seenQSTutorial";
function L() {
    let { enabled: e } = R.s.getConfig({ location: "QuickSwitcherStore.handleQuickSwitcherShow" });
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
let w = 0,
    M = !1,
    P = !1,
    x = null,
    k = [],
    U = null,
    G = 0,
    F = [],
    V = [],
    B = null;
function j() {
    (P = A.A.getGuildCount() >= 3 || s().size(p.A.getMutablePrivateChannels()) >= 20), (F = []);
}
function H(e) {
    let t = (0, c.A)(e);
    return null == t || (null != x && x !== t.type) ? null : t;
}
function Y(e) {
    let { query: t, queryMode: n } = e,
        r = t.trim(),
        s = y.A.getGuildId() ?? void 0,
        a = new Set([`user:${f.default.getId()}`]);
    null != s && a.add(`guild:${s}`),
        (B = Date.now()),
        (i =
            i ??
            new u.Ay(W, L(), null != n ? 100 : 5, { frecencyBoosters: !0, blacklist: a, allowSnowflake: !0 }, 100)),
        (U = null),
        (G = r.length),
        (x = n),
        i.search(r);
}
function W(e, t) {
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
                              n = y.A.getGuildId() ?? void 0,
                              i = S.A.getChannelId() ?? void 0;
                          switch (x) {
                              case u.rD.USER: {
                                  let e = f.default.getId();
                                  return N.Ay.getRecentlyTalked(i, 100).filter((t) => {
                                      let { record: n } = t;
                                      return n.id !== e;
                                  });
                              }
                              case u.rD.APPLICATION:
                                  return N.Ay.queryApplications({ query: "", limit: 100, fuzzy: !0 });
                              case u.rD.GAME_PROFILE:
                                  return N.Ay.queryGames("", 100).map((e, t) => ({
                                      type: u.rD.GAME_PROFILE,
                                      record: e,
                                      score: (0, N.zy)((0, N.XA)(e.name, "", t)),
                                      comparator: e.name,
                                      sortable: e.name.toLocaleLowerCase(),
                                  }));
                              case u.rD.GUILD:
                                  return N.Ay.queryGuilds({ query: "", limit: 100, fuzzy: !0 });
                              case u.rD.TEXT_CHANNEL:
                                  return N.Ay.queryChannels({
                                      query: "",
                                      guildId: y.A.getGuildId(),
                                      limit: 100,
                                      fuzzy: !0,
                                      allowEmptyQueries: !0,
                                  });
                              case u.rD.VOICE_CHANNEL:
                                  return N.Ay.queryChannels({
                                      query: "",
                                      guildId: y.A.getGuildId(),
                                      limit: 100,
                                      fuzzy: !0,
                                      filter: () => !0,
                                      type: m.vM,
                                      allowEmptyQueries: !0,
                                  });
                          }
                          let r = [],
                              s = new Set(),
                              a = [];
                          for (let e = 1; e < V.length; e += 1) {
                              let t = H(V[e]);
                              null != t &&
                                  ((t.type !== u.rD.TEXT_CHANNEL && t.type !== u.rD.VOICE_CHANNEL) ||
                                      I.A.can(O.xBc.VIEW_CHANNEL, t.record)) &&
                                  (a.push(t), s.size < 3 && s.add(V[e]));
                          }
                          let o =
                              ((e = (e) => e === i || s.has(e)),
                              (t = []),
                              E.A.getRecentlyEditedDrafts(E.C.ChannelMessage).forEach((n) => {
                                  let { channelId: i } = n;
                                  if (e(i)) return;
                                  let r = H(i);
                                  null != r && t.push({ record: r, channelId: i });
                              }),
                              t);
                          if (o.length > 0)
                              for (let e of (r.push((0, u.jF)(b.intl.string(b.t["4B63jZ"]))), o))
                                  s.add(e.channelId), r.push(e.record);
                          let l = T.Ay.getMentionChannelIds().filter((e) => e !== i && !s.has(e)),
                              c = [];
                          for (let e = l.length - 1; e >= 0; e--) {
                              let t = l[e];
                              if (null == t) continue;
                              let n = H(t);
                              null != n && c.push({ channelId: t, result: n });
                          }
                          if (c.length > 0)
                              for (let { channelId: e, result: t } of (r.push((0, u.jF)(b.intl.string(b.t["61Df13"]))),
                              c))
                                  s.add(t.record.id), s.add(e), r.push(t);
                          if (null != n) {
                              let e = m.Ay.getSelectableChannelIds(n)
                                  .filter((e) => {
                                      let t = p.A.getChannel(e);
                                      return (
                                          !(
                                              null == t ||
                                              e === i ||
                                              s.has(e) ||
                                              C.Ay.isChannelMuted(t.guild_id, e) ||
                                              (null != t.parent_id && C.Ay.isChannelMuted(t.guild_id, t.parent_id))
                                          ) && (0, d.Y)(t)
                                      );
                                  })
                                  .map((e) => H(e))
                                  .filter(v.Vq);
                              Object.values(_.A.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
                                  for (let n in t) {
                                      let t = H(n);
                                      null == t || s.has(t.record.id) || e.push(t);
                                  }
                              }),
                                  e.length > 0 && (r.push((0, u.jF)(b.intl.string(b.t.ieCAhD))), (r = r.concat(e)));
                          }
                          let h = r.length > 0 ? 3 : 7;
                          return (
                              a.length > h && a.splice(h),
                              a.length > 0 && (r = [(0, u.jF)(b.intl.string(b.t["80lOZ1"])), ...a, ...r]),
                              r
                          );
                      })()
                    : e),
            F,
        )
    ) {
        F = e;
        var n = e,
            i = t;
        switch (x) {
            case u.rD.USER: {
                let e = A.A.getGuild(y.A.getGuildId());
                n.unshift(
                    (0, u.jF)(
                        null != e
                            ? b.intl.formatToPlainString(b.t.FREzQs, { name: e.name })
                            : b.intl.string(b.t.XFYW1o),
                    ),
                ),
                    (k = n);
                break;
            }
            case u.rD.TEXT_CHANNEL:
                n.unshift((0, u.jF)(b.intl.string(b.t.W26k4V))), (k = n);
                break;
            case u.rD.VOICE_CHANNEL:
                n.unshift((0, u.jF)(b.intl.string(b.t.zUoI5C))), (k = n);
                break;
            case u.rD.GUILD:
                n.unshift((0, u.jF)(b.intl.string(b.t.olADPs))), (k = n);
                break;
            case u.rD.APPLICATION:
                n.unshift((0, u.jF)(b.intl.string(b.t.VwK1ld))), (k = n);
                break;
            case u.rD.GAME_PROFILE:
                n.unshift((0, u.jF)(b.intl.string(b.t.gEp2SG))), (k = n);
                break;
            default:
                k = n;
        }
        if (i !== U) (U = i), (G = Math.max(i.length, G)), (w = (0, u.Vv)(u.vB.DOWN, -1, k));
        else {
            let e = k[w];
            null != e && e.type === u.rD.HEADER && (w = (0, u.Vv)(u.vB.DOWN, w, k));
        }
        z.emitChange();
    }
}
function K() {
    (U = null), (G = 0), (F = []), null != i && (i.destroy(), (i = null));
}
class $ extends a.Ay.PersistedStore {
    static displayName = "QuickSwitcherStore";
    static persistKey = "QuickSwitcherStore";
    initialize(e) {
        this.waitFor(_.A, f.default, p.A, E.A, m.Ay, g.Ay, A.A, I.A, T.Ay, S.A, y.A, h.A, C.Ay),
            this.syncWith([h.A], () => !0),
            (M = o.w.get(D) || !1),
            (V = e?.channelHistory ?? []);
    }
    getState() {
        return { channelHistory: V };
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
        let n = Date.now() - t >= O.D2K;
        return P && n;
    }
    getFrequentGuilds() {
        return null != i ? i.queryGuilds("", 100) : null;
    }
    getFrequentGuildsLength() {
        return null != i ? i.queryGuilds("", 100).length : 0;
    }
    getChannelHistory() {
        return V;
    }
    getLastShowTimestamp() {
        return B;
    }
    getProps() {
        return {
            theme: h.A.theme,
            query: null != i ? i.query : "",
            queryMode: x,
            results: k,
            selectedIndex: w,
            seenTutorial: M,
            maxQueryLength: G,
        };
    }
}
let z = new $(l.h, {
        CONNECTION_OPEN: j,
        CONNECTION_OPEN_SUPPLEMENTAL: j,
        QUICKSWITCHER_SHOW: Y,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: Y,
        QUICKSWITCHER_HIDE: K,
        OVERLAY_SET_INPUT_LOCKED: K,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: K,
        QUICKSWITCHER_SEARCH: function (e) {
            let { query: t, queryMode: n } = e,
                r = t.trim();
            if (null == i) return !1;
            if (x !== n) {
                i.setResultTypes(null != n ? [n] : L()), i.setLimit(null != n ? 100 : 5);
                let e = y.A.getGuildId() ?? void 0;
                n === u.rD.USER && null != e
                    ? i.setOptions({ userFilters: { guild: e, friends: !0 } }, !0)
                    : n === u.rD.VOICE_CHANNEL
                      ? i.setOptions({ voiceChannelGuildFilter: null }, !0)
                      : i.setOptions({ userFilters: null, voiceChannelGuildFilter: void 0 }, !0);
            }
            if ((x = n) === u.rD.USER) {
                let e = y.A.getGuildId() ?? null;
                i.search(r, e);
            } else i.search(r, void 0);
        },
        QUICKSWITCHER_SELECT: function (e) {
            w = e.selectedIndex;
        },
        QUICKSWITCHER_SWITCH_TO: function () {
            if (M) return !1;
            (M = !0), o.w.set(D, !0);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == t) return !1;
            (V = V.filter((e) => e !== t)).unshift(t), V.length > 8 && (V.length = 8);
        },
    }),
    q = z;
