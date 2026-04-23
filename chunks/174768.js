"use strict";
let r;
n.d(t, { A: () => z }), n(321073), n(667532);
var i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(506774),
    l = n(73153),
    u = n(629357),
    c = n(280157),
    d = n(455234),
    _ = n(863005),
    f = n(544028),
    p = n(961350),
    h = n(734057),
    E = n(31717),
    m = n(808728),
    g = n(696451),
    A = n(71393),
    I = n(576705),
    T = n(222823),
    S = n(309010),
    y = n(967198),
    N = n(543465),
    v = n(248465),
    C = n(403362),
    O = n(652215),
    R = n(985018);
let b = "seenQSTutorial",
    D = [u.rD.USER, u.rD.GROUP_DM, u.rD.TEXT_CHANNEL, u.rD.GUILD, u.rD.APPLICATION, u.rD.LINK, u.rD.IN_APP_NAVIGATION],
    L = 0,
    w = !1,
    M = !1,
    P = null,
    x = [],
    k = null,
    U = 0,
    G = [],
    F = [],
    V = null;
function B() {
    (M = A.A.getGuildCount() >= 3 || s().size(h.A.getMutablePrivateChannels()) >= 20), (G = []);
}
function H(e) {
    let t = (0, c.A)(e);
    return null == t || (null != P && P !== t.type) ? null : t;
}
function j(e) {
    let { query: t, queryMode: n } = e,
        i = t.trim(),
        s = y.A.getGuildId() ?? void 0,
        a = new Set([`user:${p.default.getId()}`]);
    null != s && a.add(`guild:${s}`),
        (V = Date.now()),
        (r = r ?? new u.Ay(Y, D, null != n ? 100 : 5, { frecencyBoosters: !0, blacklist: a, allowSnowflake: !0 }, 100)),
        (k = null),
        (U = i.length),
        (P = n),
        r.search(i);
}
function Y(e, t) {
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
                                  let e = p.default.getId();
                                  return v.Ay.getRecentlyTalked(r, 100).filter((t) => {
                                      let { record: n } = t;
                                      return n.id !== e;
                                  });
                              }
                              case u.rD.APPLICATION:
                                  return v.Ay.queryApplications({ query: "", limit: 100, fuzzy: !0 });
                              case u.rD.GUILD:
                                  return v.Ay.queryGuilds({ query: "", limit: 100, fuzzy: !0 });
                              case u.rD.TEXT_CHANNEL:
                                  return v.Ay.queryChannels({
                                      query: "",
                                      guildId: y.A.getGuildId(),
                                      limit: 100,
                                      fuzzy: !0,
                                      allowEmptyQueries: !0,
                                  });
                              case u.rD.VOICE_CHANNEL:
                                  return v.Ay.queryChannels({
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
                          for (let e = 1; e < F.length; e += 1) {
                              let t = H(F[e]);
                              null != t &&
                                  ((t.type !== u.rD.TEXT_CHANNEL && t.type !== u.rD.VOICE_CHANNEL) ||
                                      I.A.can(O.xBc.VIEW_CHANNEL, t.record)) &&
                                  (a.push(t), s.size < 3 && s.add(F[e]));
                          }
                          let o =
                              ((e = (e) => e === r || s.has(e)),
                              (t = []),
                              E.A.getRecentlyEditedDrafts(E.C.ChannelMessage).forEach((n) => {
                                  let { channelId: r } = n;
                                  if (e(r)) return;
                                  let i = H(r);
                                  null != i && t.push({ record: i, channelId: r });
                              }),
                              t);
                          if (o.length > 0)
                              for (let e of (i.push((0, u.jF)(R.intl.string(R.t["4B63jZ"]))), o))
                                  s.add(e.channelId), i.push(e.record);
                          let l = T.Ay.getMentionChannelIds()
                              .filter((e) => e !== r && !s.has(e))
                              .map((e) => H(e))
                              .filter(C.Vq)
                              .reverse();
                          if (l.length > 0)
                              for (let e of (i.push((0, u.jF)(R.intl.string(R.t["61Df13"]))), l))
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
                                          ) && (0, d.Y)(t)
                                      );
                                  })
                                  .map((e) => H(e))
                                  .filter(C.Vq);
                              Object.values(_.A.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
                                  for (let n in t) {
                                      let t = H(n);
                                      null == t || s.has(t.record.id) || e.push(t);
                                  }
                              }),
                                  e.length > 0 && (i.push((0, u.jF)(R.intl.string(R.t.ieCAhD))), (i = i.concat(e)));
                          }
                          let c = i.length > 0 ? 3 : 7;
                          return (
                              a.length > c && a.splice(c),
                              a.length > 0 && (i = [(0, u.jF)(R.intl.string(R.t["80lOZ1"])), ...a, ...i]),
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
                            ? R.intl.formatToPlainString(R.t.FREzQs, { name: e.name })
                            : R.intl.string(R.t.XFYW1o),
                    ),
                ),
                    (x = n);
                break;
            }
            case u.rD.TEXT_CHANNEL:
                n.unshift((0, u.jF)(R.intl.string(R.t.W26k4V))), (x = n);
                break;
            case u.rD.VOICE_CHANNEL:
                n.unshift((0, u.jF)(R.intl.string(R.t.zUoI5C))), (x = n);
                break;
            case u.rD.GUILD:
                n.unshift((0, u.jF)(R.intl.string(R.t.olADPs))), (x = n);
                break;
            case u.rD.APPLICATION:
                n.unshift((0, u.jF)(R.intl.string(R.t.VwK1ld))), (x = n);
                break;
            default:
                x = n;
        }
        if (r !== k) (k = r), (U = Math.max(r.length, U)), (L = (0, u.Vv)(u.vB.DOWN, -1, x));
        else {
            let e = x[L];
            null != e && e.type === u.rD.HEADER && (L = (0, u.Vv)(u.vB.DOWN, L, x));
        }
        $.emitChange();
    }
}
function W() {
    (k = null), (U = 0), (G = []), null != r && (r.destroy(), (r = null));
}
class K extends a.Ay.PersistedStore {
    static displayName = "QuickSwitcherStore";
    static persistKey = "QuickSwitcherStore";
    initialize(e) {
        this.waitFor(_.A, p.default, h.A, E.A, m.Ay, g.Ay, A.A, I.A, T.Ay, S.A, y.A, f.A, N.Ay),
            this.syncWith([f.A], () => !0),
            (w = o.w.get(b) || !1),
            (F = e?.channelHistory ?? []);
    }
    getState() {
        return { channelHistory: F };
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
        let n = Date.now() - t >= O.D2K;
        return M && n;
    }
    getFrequentGuilds() {
        return null != r ? r.queryGuilds("", 100) : null;
    }
    getFrequentGuildsLength() {
        return null != r ? r.queryGuilds("", 100).length : 0;
    }
    getChannelHistory() {
        return F;
    }
    getLastShowTimestamp() {
        return V;
    }
    getProps() {
        return {
            theme: f.A.theme,
            query: null != r ? r.query : "",
            queryMode: P,
            results: x,
            selectedIndex: L,
            seenTutorial: w,
            maxQueryLength: U,
        };
    }
}
let $ = new K(l.h, {
        CONNECTION_OPEN: B,
        CONNECTION_OPEN_SUPPLEMENTAL: B,
        QUICKSWITCHER_SHOW: j,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: j,
        QUICKSWITCHER_HIDE: W,
        OVERLAY_SET_INPUT_LOCKED: W,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: W,
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
            (F = F.filter((e) => e !== t)).unshift(t), F.length > 8 && (F.length = 8);
        },
    }),
    z = $;
