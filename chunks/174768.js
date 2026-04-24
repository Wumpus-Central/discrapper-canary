"use strict";
let i;
n.d(t, { A: () => $ }), n(321073), n(667532);
var r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(506774),
    l = n(228366),
    d = n(115718),
    _ = n(280157),
    u = n(455234),
    c = n(695633),
    E = n(363195),
    h = n(495544),
    m = n(734057),
    f = n(31717),
    g = n(808728),
    p = n(696451),
    A = n(71393),
    I = n(576705),
    T = n(222823),
    S = n(309010),
    N = n(967198),
    C = n(543465),
    R = n(768038),
    O = n(403362),
    y = n(652215),
    v = n(985018);
let D = "seenQSTutorial",
    L = [d.rD.USER, d.rD.GROUP_DM, d.rD.TEXT_CHANNEL, d.rD.GUILD, d.rD.APPLICATION, d.rD.LINK, d.rD.IN_APP_NAVIGATION],
    b = 0,
    w = !1,
    P = !1,
    k = null,
    M = [],
    U = null,
    x = 0,
    G = [],
    V = [],
    F = null;
function B() {
    (P = A.A.getGuildCount() >= 3 || s().size(m.A.getMutablePrivateChannels()) >= 20), (G = []);
}
function H(e) {
    let t = (0, _.A)(e);
    return null == t || (null != k && k !== t.type) ? null : t;
}
function j(e) {
    let { query: t, queryMode: n } = e,
        r = t.trim(),
        s = N.A.getGuildId() ?? void 0,
        a = new Set([`user:${h.default.getId()}`]);
    null != s && a.add(`guild:${s}`),
        (F = Date.now()),
        (i = i ?? new d.Ay(W, L, null != n ? 100 : 5, { frecencyBoosters: !0, blacklist: a, allowSnowflake: !0 }, 100)),
        (U = null),
        (x = r.length),
        (k = n),
        i.search(r);
}
function W(e, t) {
    if (
        !(function (e, t) {
            if (e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) {
                let i = e[n],
                    r = t[n];
                if (i.record.id !== r.record.id) return !1;
            }
            return !0;
        })(
            (e =
                "" === (t = t.trim()).trim()
                    ? (function () {
                          var e;
                          let t,
                              n = N.A.getGuildId() ?? void 0,
                              i = S.A.getChannelId() ?? void 0;
                          switch (k) {
                              case d.rD.USER: {
                                  let e = h.default.getId();
                                  return R.Ay.getRecentlyTalked(i, 100).filter((t) => {
                                      let { record: n } = t;
                                      return n.id !== e;
                                  });
                              }
                              case d.rD.APPLICATION:
                                  return R.Ay.queryApplications({ query: "", limit: 100, fuzzy: !0 });
                              case d.rD.GUILD:
                                  return R.Ay.queryGuilds({ query: "", limit: 100, fuzzy: !0 });
                              case d.rD.TEXT_CHANNEL:
                                  return R.Ay.queryChannels({
                                      query: "",
                                      guildId: N.A.getGuildId(),
                                      limit: 100,
                                      fuzzy: !0,
                                      allowEmptyQueries: !0,
                                  });
                              case d.rD.VOICE_CHANNEL:
                                  return R.Ay.queryChannels({
                                      query: "",
                                      guildId: N.A.getGuildId(),
                                      limit: 100,
                                      fuzzy: !0,
                                      filter: () => !0,
                                      type: g.vM,
                                      allowEmptyQueries: !0,
                                  });
                          }
                          let r = [],
                              s = new Set(),
                              a = [];
                          for (let e = 1; e < V.length; e += 1) {
                              let t = H(V[e]);
                              null != t &&
                                  ((t.type !== d.rD.TEXT_CHANNEL && t.type !== d.rD.VOICE_CHANNEL) ||
                                      I.A.can(y.xBc.VIEW_CHANNEL, t.record)) &&
                                  (a.push(t), s.size < 3 && s.add(V[e]));
                          }
                          let o =
                              ((e = (e) => e === i || s.has(e)),
                              (t = []),
                              f.A.getRecentlyEditedDrafts(f.C.ChannelMessage).forEach((n) => {
                                  let { channelId: i } = n;
                                  if (e(i)) return;
                                  let r = H(i);
                                  null != r && t.push({ record: r, channelId: i });
                              }),
                              t);
                          if (o.length > 0)
                              for (let e of (r.push((0, d.jF)(v.intl.string(v.t["4B63jZ"]))), o))
                                  s.add(e.channelId), r.push(e.record);
                          let l = T.Ay.getMentionChannelIds().filter((e) => e !== i && !s.has(e)),
                              _ = [];
                          for (let e = l.length - 1; e >= 0; e--) {
                              let t = l[e];
                              if (null == t) continue;
                              let n = H(t);
                              null != n && _.push({ channelId: t, result: n });
                          }
                          if (_.length > 0)
                              for (let { channelId: e, result: t } of (r.push((0, d.jF)(v.intl.string(v.t["61Df13"]))),
                              _))
                                  s.add(t.record.id), s.add(e), r.push(t);
                          if (null != n) {
                              let e = g.Ay.getSelectableChannelIds(n)
                                  .filter((e) => {
                                      let t = m.A.getChannel(e);
                                      return (
                                          !(
                                              null == t ||
                                              e === i ||
                                              s.has(e) ||
                                              C.Ay.isChannelMuted(t.guild_id, e) ||
                                              (null != t.parent_id && C.Ay.isChannelMuted(t.guild_id, t.parent_id))
                                          ) && (0, u.Y)(t)
                                      );
                                  })
                                  .map((e) => H(e))
                                  .filter(O.Vq);
                              Object.values(c.A.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
                                  for (let n in t) {
                                      let t = H(n);
                                      null == t || s.has(t.record.id) || e.push(t);
                                  }
                              }),
                                  e.length > 0 && (r.push((0, d.jF)(v.intl.string(v.t.ieCAhD))), (r = r.concat(e)));
                          }
                          let E = r.length > 0 ? 3 : 7;
                          return (
                              a.length > E && a.splice(E),
                              a.length > 0 && (r = [(0, d.jF)(v.intl.string(v.t["80lOZ1"])), ...a, ...r]),
                              r
                          );
                      })()
                    : e),
            G,
        )
    ) {
        G = e;
        var n = e,
            i = t;
        switch (k) {
            case d.rD.USER: {
                let e = A.A.getGuild(N.A.getGuildId());
                n.unshift(
                    (0, d.jF)(
                        null != e
                            ? v.intl.formatToPlainString(v.t.FREzQs, { name: e.name })
                            : v.intl.string(v.t.XFYW1o),
                    ),
                ),
                    (M = n);
                break;
            }
            case d.rD.TEXT_CHANNEL:
                n.unshift((0, d.jF)(v.intl.string(v.t.W26k4V))), (M = n);
                break;
            case d.rD.VOICE_CHANNEL:
                n.unshift((0, d.jF)(v.intl.string(v.t.zUoI5C))), (M = n);
                break;
            case d.rD.GUILD:
                n.unshift((0, d.jF)(v.intl.string(v.t.olADPs))), (M = n);
                break;
            case d.rD.APPLICATION:
                n.unshift((0, d.jF)(v.intl.string(v.t.VwK1ld))), (M = n);
                break;
            default:
                M = n;
        }
        if (i !== U) (U = i), (x = Math.max(i.length, x)), (b = (0, d.Vv)(d.vB.DOWN, -1, M));
        else {
            let e = M[b];
            null != e && e.type === d.rD.HEADER && (b = (0, d.Vv)(d.vB.DOWN, b, M));
        }
        z.emitChange();
    }
}
function Y() {
    (U = null), (x = 0), (G = []), null != i && (i.destroy(), (i = null));
}
class K extends a.Ay.PersistedStore {
    static displayName = "QuickSwitcherStore";
    static persistKey = "QuickSwitcherStore";
    initialize(e) {
        this.waitFor(c.A, h.default, m.A, f.A, g.Ay, p.Ay, A.A, I.A, T.Ay, S.A, N.A, E.A, C.Ay),
            this.syncWith([E.A], () => !0),
            (w = o.w.get(D) || !1),
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
              ? i.results.reduce((e, t) => (t.type !== d.rD.HEADER ? e + 1 : e), 0)
              : i.results.reduce((t, n) => (n.type === e ? t + 1 : t), 0);
    }
    channelNoticePredicate(e, t) {
        let n = Date.now() - t >= y.D2K;
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
        return F;
    }
    getProps() {
        return {
            theme: E.A.theme,
            query: null != i ? i.query : "",
            queryMode: k,
            results: M,
            selectedIndex: b,
            seenTutorial: w,
            maxQueryLength: x,
        };
    }
}
let z = new K(l.h, {
        CONNECTION_OPEN: B,
        CONNECTION_OPEN_SUPPLEMENTAL: B,
        QUICKSWITCHER_SHOW: j,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: j,
        QUICKSWITCHER_HIDE: Y,
        OVERLAY_SET_INPUT_LOCKED: Y,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: Y,
        QUICKSWITCHER_SEARCH: function (e) {
            let { query: t, queryMode: n } = e,
                r = t.trim();
            if (null == i) return !1;
            if (k !== n) {
                i.setResultTypes(null != n ? [n] : L), i.setLimit(null != n ? 100 : 5);
                let e = N.A.getGuildId() ?? void 0;
                n === d.rD.USER && null != e
                    ? i.setOptions({ userFilters: { guild: e, friends: !0 } }, !0)
                    : n === d.rD.VOICE_CHANNEL
                      ? i.setOptions({ voiceChannelGuildFilter: null }, !0)
                      : i.setOptions({ userFilters: null, voiceChannelGuildFilter: void 0 }, !0);
            }
            if ((k = n) === d.rD.USER) {
                let e = N.A.getGuildId() ?? null;
                i.search(r, e);
            } else i.search(r, void 0);
        },
        QUICKSWITCHER_SELECT: function (e) {
            b = e.selectedIndex;
        },
        QUICKSWITCHER_SWITCH_TO: function () {
            if (w) return !1;
            (w = !0), o.w.set(D, !0);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == t) return !1;
            (V = V.filter((e) => e !== t)).unshift(t), V.length > 8 && (V.length = 8);
        },
    }),
    $ = z;
