let r;
n.d(t, {
    A: () => el,
}),
    n(321073),
    n(896048),
    n(264879),
    n(667532),
    n(733351),
    n(747238);
var i,
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(506774),
    c = n(73153),
    u = n(629357),
    d = n(280157),
    f = n(455234),
    p = n(863005),
    _ = n(544028),
    h = n(961350),
    m = n(734057),
    g = n(31717),
    E = n(808728),
    b = n(696451),
    y = n(71393),
    O = n(576705),
    A = n(222823),
    v = n(309010),
    S = n(967198),
    I = n(543465),
    T = n(248465),
    C = n(403362),
    N = n(652215),
    R = n(985018);

function w(e, t, n) {
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
let P = "seenQSTutorial",
    D = 5,
    x = 7,
    L = 3,
    j = 100,
    M = [u.rD.USER, u.rD.GROUP_DM, u.rD.TEXT_CHANNEL, u.rD.GUILD, u.rD.APPLICATION, u.rD.LINK, u.rD.IN_APP_NAVIGATION],
    k = 0,
    U = !1,
    G = !1,
    V = null,
    F = [],
    B = null,
    H = 0,
    Y = [],
    W = [],
    K = null;

function z() {
    (G = y.A.getGuildCount() >= 3 || s().size(m.A.getMutablePrivateChannels()) >= 20), (Y = []);
}

function q(e) {
    let t = [];
    return (
        g.A.getRecentlyEditedDrafts(g.C.ChannelMessage).forEach((n) => {
            let { channelId: r } = n;
            if (e(r)) return;
            let i = X(r);
            if (null != i) {
                let e = {
                    record: i,
                    channelId: r,
                };
                t.push(e);
            }
        }),
        t
    );
}

function X(e) {
    let t = (0, d.A)(e);
    return null == t || (null != V && V !== t.type) ? null : t;
}

function Z() {
    var e, t;
    let n = null != (e = S.A.getGuildId()) ? e : void 0,
        r = null != (t = v.A.getChannelId()) ? t : void 0;
    switch (V) {
        case u.rD.USER: {
            let e = h.default.getId();
            return T.Ay.getRecentlyTalked(r, 100).filter((t) => {
                let { record: n } = t;
                return n.id !== e;
            });
        }
        case u.rD.APPLICATION:
            return T.Ay.queryApplications({
                query: "",
                limit: 100,
                fuzzy: !0,
            });
        case u.rD.GUILD:
            return T.Ay.queryGuilds({
                query: "",
                limit: 100,
                fuzzy: !0,
            });
        case u.rD.TEXT_CHANNEL:
            return T.Ay.queryChannels({
                query: "",
                guildId: S.A.getGuildId(),
                limit: 100,
                fuzzy: !0,
                allowEmptyQueries: !0,
            });
        case u.rD.VOICE_CHANNEL:
            return T.Ay.queryChannels({
                query: "",
                guildId: S.A.getGuildId(),
                limit: 100,
                fuzzy: !0,
                filter: () => !0,
                type: E.vM,
                allowEmptyQueries: !0,
            });
    }
    let i = [],
        a = new Set(),
        s = q((e) => e === r || W.includes(e) || a.has(e));
    if (s.length > 0)
        for (let e of (i.push((0, u.jF)(R.intl.string(R.t["4B63jZ"]))), s)) a.add(e.channelId), i.push(e.record);
    let o = A.Ay.getMentionChannelIds()
        .filter((e) => e !== r && !W.includes(e) && !a.has(e))
        .map((e) => X(e))
        .filter(C.Vq)
        .reverse();
    if (o.length > 0) for (let e of (i.push((0, u.jF)(R.intl.string(R.t["61Df13"]))), o)) a.add(e.record.id), i.push(e);
    if (null != n) {
        let e = E.Ay.getSelectableChannelIds(n)
            .filter((e) => {
                let t = m.A.getChannel(e);
                return (
                    !(
                        null == t ||
                        e === r ||
                        W.includes(e) ||
                        a.has(e) ||
                        I.Ay.isChannelMuted(t.guild_id, e) ||
                        (null != t.parent_id && I.Ay.isChannelMuted(t.guild_id, t.parent_id))
                    ) && (0, f.Y)(t)
                );
            })
            .map((e) => X(e))
            .filter((e) => e);
        Object.values(p.A.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
            for (let n in t) {
                let t = X(n);
                null == t || a.has(t.record.id) || W.includes(n) || e.push(t);
            }
        }),
            e.length > 0 && (i.push((0, u.jF)(R.intl.string(R.t.ieCAhD))), (i = i.concat(e)));
    }
    let l = Math.min((i.length > 0 ? L : x) + 1, W.length),
        c = [];
    for (let e = 1; e < l; e += 1) {
        let t = X(W[e]);
        null != t &&
            ((t.type !== u.rD.TEXT_CHANNEL && t.type !== u.rD.VOICE_CHANNEL) ||
                O.A.can(N.xBc.VIEW_CHANNEL, t.record)) &&
            (c.push(t), a.add(t.record.id));
    }
    return c.length > 0 && (i = [(0, u.jF)(R.intl.string(R.t["80lOZ1"])), ...c, ...i]), i;
}

function Q(e, t) {
    switch (V) {
        case u.rD.USER: {
            let t = y.A.getGuild(S.A.getGuildId());
            e.unshift(
                (0, u.jF)(
                    null != t
                        ? R.intl.formatToPlainString(R.t.FREzQs, {
                              name: t.name,
                          })
                        : R.intl.string(R.t.XFYW1o),
                ),
            ),
                (F = e);
            break;
        }
        case u.rD.TEXT_CHANNEL:
            e.unshift((0, u.jF)(R.intl.string(R.t.W26k4V))), (F = e);
            break;
        case u.rD.VOICE_CHANNEL:
            e.unshift((0, u.jF)(R.intl.string(R.t.zUoI5C))), (F = e);
            break;
        case u.rD.GUILD:
            e.unshift((0, u.jF)(R.intl.string(R.t.olADPs))), (F = e);
            break;
        case u.rD.APPLICATION:
            e.unshift((0, u.jF)(R.intl.string(R.t.VwK1ld))), (F = e);
            break;
        default:
            F = e;
    }
    if (t !== B) (B = t), (H = Math.max(t.length, H)), (k = (0, u.Vv)(u.vB.DOWN, -1, F));
    else {
        let e = F[k];
        null != e && e.type === u.rD.HEADER && (k = (0, u.Vv)(u.vB.DOWN, k, F));
    }
    eo.emitChange();
}

function $(e) {
    var t;
    let { query: n, queryMode: i } = e,
        a = n.trim(),
        s = null != (t = S.A.getGuildId()) ? t : void 0,
        o = new Set(["user:".concat(h.default.getId())]);
    null != s && o.add("guild:".concat(s)),
        (K = Date.now()),
        (r =
            null != r
                ? r
                : new u.Ay(
                      et,
                      M,
                      null != i ? j : D,
                      {
                          frecencyBoosters: !0,
                          blacklist: o,
                          allowSnowflake: !0,
                      },
                      j,
                  )),
        (B = null),
        (H = a.length),
        (V = i),
        r.search(a);
}

function J(e) {
    let { channelId: t } = e;
    if (null == t) return !1;
    (W = W.filter((e) => e !== t)).unshift(t), W.length > x + 1 && (W.length = x + 1);
}

function ee(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            i = t[n];
        if (r.record.id !== i.record.id) return !1;
    }
    return !0;
}

function et(e, t) {
    ee((e = "" === (t = t.trim()).trim() ? Z() : e), Y) || ((Y = e), Q(e, t));
}

function en() {
    (B = null), (H = 0), (Y = []), null != r && (r.destroy(), (r = null));
}

function er(e) {
    var t, n;
    let { query: i, queryMode: a } = e,
        s = i.trim();
    if (null == r) return !1;
    if (V !== a) {
        r.setResultTypes(null != a ? [a] : M), r.setLimit(null != a ? j : D);
        let e = null != (t = S.A.getGuildId()) ? t : void 0;
        a === u.rD.USER && null != e
            ? r.setOptions(
                  {
                      userFilters: {
                          guild: e,
                          friends: !0,
                      },
                  },
                  !0,
              )
            : a === u.rD.VOICE_CHANNEL
              ? r.setOptions(
                    {
                        voiceChannelGuildFilter: null,
                    },
                    !0,
                )
              : r.setOptions(
                    {
                        userFilters: null,
                        voiceChannelGuildFilter: void 0,
                    },
                    !0,
                );
    }
    if ((V = a) === u.rD.USER) {
        let e = null != (n = S.A.getGuildId()) ? n : null;
        r.search(s, e);
    } else r.search(s, void 0);
}

function ei(e) {
    k = e.selectedIndex;
}

function ea() {
    if (U) return !1;
    (U = !0), l.w.set(P, !0);
}
class es extends (i = o.Ay.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(p.A, h.default, m.A, g.A, E.Ay, b.Ay, y.A, O.A, A.Ay, v.A, S.A, _.A, I.Ay),
            this.syncWith([_.A], () => !0),
            (U = l.w.get(P) || !1),
            (W = null != (t = null == e ? void 0 : e.channelHistory) ? t : []);
    }
    getState() {
        return {
            channelHistory: W,
        };
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
        let n = Date.now() - t >= N.D2K;
        return G && n;
    }
    getFrequentGuilds() {
        return null != r ? r.queryGuilds("", 100) : null;
    }
    getFrequentGuildsLength() {
        return null != r ? r.queryGuilds("", 100).length : 0;
    }
    getChannelHistory() {
        return W;
    }
    getLastShowTimestamp() {
        return K;
    }
    getProps() {
        return {
            theme: _.A.theme,
            query: null != r ? r.query : "",
            queryMode: V,
            results: F,
            selectedIndex: k,
            seenTutorial: U,
            maxQueryLength: H,
        };
    }
}
w(es, "displayName", "QuickSwitcherStore"), w(es, "persistKey", "QuickSwitcherStore");
let eo = new es(c.h, {
        CONNECTION_OPEN: z,
        CONNECTION_OPEN_SUPPLEMENTAL: z,
        QUICKSWITCHER_SHOW: $,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: $,
        QUICKSWITCHER_HIDE: en,
        OVERLAY_SET_INPUT_LOCKED: en,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: en,
        QUICKSWITCHER_SEARCH: er,
        QUICKSWITCHER_SELECT: ei,
        QUICKSWITCHER_SWITCH_TO: ea,
        CHANNEL_SELECT: J,
    }),
    el = eo;
