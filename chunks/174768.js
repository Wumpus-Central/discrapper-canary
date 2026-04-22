"use strict";
let r;
n.d(t, { A: () => z }), n(321073), n(667532);
var i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(506774),
    l = n(73153),
    u = n(629357),
    d = n(280157),
    c = n(455234),
    _ = n(863005),
    f = n(544028),
    E = n(961350),
    h = n(734057),
    p = n(31717),
    m = n(808728),
    g = n(696451),
    A = n(71393),
    I = n(576705),
    T = n(222823),
    S = n(309010),
    y = n(967198),
    N = n(543465),
    O = n(248465),
    R = n(403362),
    v = n(652215),
    C = n(985018);
let b = "seenQSTutorial",
    D = [u.rD.USER, u.rD.GROUP_DM, u.rD.TEXT_CHANNEL, u.rD.GUILD, u.rD.APPLICATION, u.rD.LINK, u.rD.IN_APP_NAVIGATION],
    L = 0,
    w = !1,
    M = !1,
    P = null,
    U = [],
    k = null,
    x = 0,
    G = [],
    V = [],
    F = null;
function B() {
    (M = A.A.getGuildCount() >= 3 || s().size(h.A.getMutablePrivateChannels()) >= 20), (G = []);
}
function H(e) {
    let t = (0, d.A)(e);
    return null == t || (null != P && P !== t.type) ? null : t;
}
function Y(e) {
    let { query: t, queryMode: n } = e,
        i = t.trim(),
        s = y.A.getGuildId() ?? void 0,
        a = new Set([`user:${E.default.getId()}`]);
    null != s && a.add(`guild:${s}`),
        (F = Date.now()),
        (r = r ?? new u.Ay(W, D, null != n ? 100 : 5, { frecencyBoosters: !0, blacklist: a, allowSnowflake: !0 }, 100)),
        (k = null),
        (x = i.length),
        (P = n),
        r.search(i);
}
function W(e, t) {
    if (
        !(function (e, t) {
            if (e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) {
                let r = e[n],
                    i = t[n];
                if (r.record.id !== i.record.id) return !1;
            }
            return !0;
        })(
            (e =
                "" === (t = t.trim()).trim()
                    ? (function () {
                          var e;
                          let t,
                              n = y.A.getGuildId() ?? void 0,
                              r = S.A.getChannelId() ?? void 0;
                          switch (P) {
                              case u.rD.USER: {
                                  let e = E.default.getId();
                                  return O.Ay.getRecentlyTalked(r, 100).filter((t) => {
                                      let { record: n } = t;
                                      return n.id !== e;
                                  });
                              }
                              case u.rD.APPLICATION:
                                  return O.Ay.queryApplications({ query: "", limit: 100, fuzzy: !0 });
                              case u.rD.GUILD:
                                  return O.Ay.queryGuilds({ query: "", limit: 100, fuzzy: !0 });
                              case u.rD.TEXT_CHANNEL:
                                  return O.Ay.queryChannels({
                                      query: "",
                                      guildId: y.A.getGuildId(),
                                      limit: 100,
                                      fuzzy: !0,
                                      allowEmptyQueries: !0,
                                  });
                              case u.rD.VOICE_CHANNEL:
                                  return O.Ay.queryChannels({
                                      query: "",
                                      guildId: y.A.getGuildId(),
                                      limit: 100,
                                      fuzzy: !0,
                                      filter: () => !0,
                                      type: m.vM,
                                      allowEmptyQueries: !0,
                                  });
                          }
                          let i = [],
                              s = new Set(),
                              a = [];
                          for (let e = 1; e < V.length; e += 1) {
                              let t = H(V[e]);
                              null != t &&
                                  ((t.type !== u.rD.TEXT_CHANNEL && t.type !== u.rD.VOICE_CHANNEL) ||
                                      I.A.can(v.xBc.VIEW_CHANNEL, t.record)) &&
                                  (a.push(t), s.size < 3 && s.add(V[e]));
                          }
                          let o =
                              ((e = (e) => e === r || s.has(e)),
                              (t = []),
                              p.A.getRecentlyEditedDrafts(p.C.ChannelMessage).forEach((n) => {
                                  let { channelId: r } = n;
                                  if (e(r)) return;
                                  let i = H(r);
                                  null != i && t.push({ record: i, channelId: r });
                              }),
                              t);
                          if (o.length > 0)
                              for (let e of (i.push((0, u.jF)(C.intl.string(C.t["4B63jZ"]))), o))
                                  s.add(e.channelId), i.push(e.record);
                          let l = T.Ay.getMentionChannelIds()
                              .filter((e) => e !== r && !s.has(e))
                              .map((e) => H(e))
                              .filter(R.Vq)
                              .reverse();
                          if (l.length > 0)
                              for (let e of (i.push((0, u.jF)(C.intl.string(C.t["61Df13"]))), l))
                                  s.add(e.record.id), i.push(e);
                          if (null != n) {
                              let e = m.Ay.getSelectableChannelIds(n)
                                  .filter((e) => {
                                      let t = h.A.getChannel(e);
                                      return (
                                          !(
                                              null == t ||
                                              e === r ||
                                              s.has(e) ||
                                              N.Ay.isChannelMuted(t.guild_id, e) ||
                                              (null != t.parent_id && N.Ay.isChannelMuted(t.guild_id, t.parent_id))
                                          ) && (0, c.Y)(t)
                                      );
                                  })
                                  .map((e) => H(e))
                                  .filter(R.Vq);
                              Object.values(_.A.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
                                  for (let n in t) {
                                      let t = H(n);
                                      null == t || s.has(t.record.id) || e.push(t);
                                  }
                              }),
                                  e.length > 0 && (i.push((0, u.jF)(C.intl.string(C.t.ieCAhD))), (i = i.concat(e)));
                          }
                          let d = i.length > 0 ? 3 : 7;
                          return (
                              a.length > d && a.splice(d),
                              a.length > 0 && (i = [(0, u.jF)(C.intl.string(C.t["80lOZ1"])), ...a, ...i]),
                              i
                          );
                      })()
                    : e),
            G,
        )
    ) {
        G = e;
        var n = e,
            r = t;
        switch (P) {
            case u.rD.USER: {
                let e = A.A.getGuild(y.A.getGuildId());
                n.unshift(
                    (0, u.jF)(
                        null != e
                            ? C.intl.formatToPlainString(C.t.FREzQs, { name: e.name })
                            : C.intl.string(C.t.XFYW1o),
                    ),
                ),
                    (U = n);
                break;
            }
            case u.rD.TEXT_CHANNEL:
                n.unshift((0, u.jF)(C.intl.string(C.t.W26k4V))), (U = n);
                break;
            case u.rD.VOICE_CHANNEL:
                n.unshift((0, u.jF)(C.intl.string(C.t.zUoI5C))), (U = n);
                break;
            case u.rD.GUILD:
                n.unshift((0, u.jF)(C.intl.string(C.t.olADPs))), (U = n);
                break;
            case u.rD.APPLICATION:
                n.unshift((0, u.jF)(C.intl.string(C.t.VwK1ld))), (U = n);
                break;
            default:
                U = n;
        }
        if (r !== k) (k = r), (x = Math.max(r.length, x)), (L = (0, u.Vv)(u.vB.DOWN, -1, U));
        else {
            let e = U[L];
            null != e && e.type === u.rD.HEADER && (L = (0, u.Vv)(u.vB.DOWN, L, U));
        }
        $.emitChange();
    }
}
function j() {
    (k = null), (x = 0), (G = []), null != r && (r.destroy(), (r = null));
}
class K extends a.Ay.PersistedStore {
    static displayName = "QuickSwitcherStore";
    static persistKey = "QuickSwitcherStore";
    initialize(e) {
        this.waitFor(_.A, E.default, h.A, p.A, m.Ay, g.Ay, A.A, I.A, T.Ay, S.A, y.A, f.A, N.Ay),
            this.syncWith([f.A], () => !0),
            (w = o.w.get(b) || !1),
            (V = e?.channelHistory ?? []);
    }
    getState() {
        return { channelHistory: V };
    }
    isOpen() {
        return null != r;
    }
    getResultTotals(e) {
        return null == r
            ? 0
            : null == e
              ? r.results.reduce((e, t) => (t.type !== u.rD.HEADER ? e + 1 : e), 0)
              : r.results.reduce((t, n) => (n.type === e ? t + 1 : t), 0);
    }
    channelNoticePredicate(e, t) {
        let n = Date.now() - t >= v.D2K;
        return M && n;
    }
    getFrequentGuilds() {
        return null != r ? r.queryGuilds("", 100) : null;
    }
    getFrequentGuildsLength() {
        return null != r ? r.queryGuilds("", 100).length : 0;
    }
    getChannelHistory() {
        return V;
    }
    getLastShowTimestamp() {
        return F;
    }
    getProps() {
        return {
            theme: f.A.theme,
            query: null != r ? r.query : "",
            queryMode: P,
            results: U,
            selectedIndex: L,
            seenTutorial: w,
            maxQueryLength: x,
        };
    }
}
let $ = new K(l.h, {
        CONNECTION_OPEN: B,
        CONNECTION_OPEN_SUPPLEMENTAL: B,
        QUICKSWITCHER_SHOW: Y,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: Y,
        QUICKSWITCHER_HIDE: j,
        OVERLAY_SET_INPUT_LOCKED: j,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: j,
        QUICKSWITCHER_SEARCH: function (e) {
            let { query: t, queryMode: n } = e,
                i = t.trim();
            if (null == r) return !1;
            if (P !== n) {
                r.setResultTypes(null != n ? [n] : D), r.setLimit(null != n ? 100 : 5);
                let e = y.A.getGuildId() ?? void 0;
                n === u.rD.USER && null != e
                    ? r.setOptions({ userFilters: { guild: e, friends: !0 } }, !0)
                    : n === u.rD.VOICE_CHANNEL
                      ? r.setOptions({ voiceChannelGuildFilter: null }, !0)
                      : r.setOptions({ userFilters: null, voiceChannelGuildFilter: void 0 }, !0);
            }
            if ((P = n) === u.rD.USER) {
                let e = y.A.getGuildId() ?? null;
                r.search(i, e);
            } else r.search(i, void 0);
        },
        QUICKSWITCHER_SELECT: function (e) {
            L = e.selectedIndex;
        },
        QUICKSWITCHER_SWITCH_TO: function () {
            if (w) return !1;
            (w = !0), o.w.set(b, !0);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == t) return !1;
            (V = V.filter((e) => e !== t)).unshift(t), V.length > 8 && (V.length = 8);
        },
    }),
    z = $;
