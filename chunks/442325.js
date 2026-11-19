(n(134528), n(947204));
var i = n(574381),
    r = n(855986),
    a = n(73153),
    s = n(283047),
    l = n(340344),
    o = n(650048),
    d = n(309010),
    c = n(967198),
    u = n(287809),
    _ = n(20517),
    E = n(858760),
    A = n(652215),
    f = n(746080);
function h() {
    return u.default.getCurrentUser()?.isStaff() === !0 ? 25 : 9;
}
let I = [],
    p = null,
    m = null,
    g = 1,
    T = null,
    S = !1,
    N = !1;
function C(e) {
    return N && E.A.getConfig({ location: e }).enabled && (0, i.xl)();
}
let O = [],
    R = new Set(),
    L = null,
    y = [],
    D = new s.A({ computeBonus: () => 100, lookupKey: (e) => e, afterCompute: () => {}, numFrequentlyItems: 10 });
function b() {
    let e = new Set(D.frequently);
    for (let t of Object.keys(D.usageHistory)) e.has(t) || delete D.usageHistory[t];
}
function v(e) {
    var t;
    return "route" === e.kind && e.routePath === A.BVt.FRIENDS
        ? (R.add(e.id), !1)
        : (R.delete(e.id),
          !("channel" !== e.kind || (0, f.jq)(e.channelId)) &&
              !!C("ChannelTabsStore.setFirstPage") &&
              ((t = e.channelId), D.track(t), b(), (O = O.filter((e) => e.channelId !== t)), !0));
}
function P(e) {
    return (t) => {
        let n = !1 !== e(t),
            i = I.find((e) => e.id === p),
            r = null != i && R.has(i.id) && v(i);
        return n || r;
    };
}
function M(e) {
    null != m && (e.has(m.tabId) || e.has(m.openerId)) && (m = null);
}
function U() {
    (null != p && m?.tabId === p && R.has(p)) || (m = null);
}
function w() {
    ((I = []), (p = null), (m = null));
}
function G(e) {
    I = I.map((t) => {
        if (t.id !== p) return t;
        let n = [...t.entries.slice(0, t.index + 1), e].slice(-50);
        return k(t, e, n, n.length - 1);
    });
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p,
        n = null != t ? (I.find((e) => e.id === t) ?? I.find((e) => e.id === p)) : void 0,
        i = null != n ? n.entries.slice(Math.max(0, n.index - 10), n.index + 1).map((e) => ({ ...e })) : [],
        r = i.at(-1),
        a = null != r && (0, _.Pp)(r, e) ? i : [...i, e].slice(-11);
    return { id: String(g++), ...e, pinned: !1, entries: a, index: a.length - 1 };
}
function k(e, t, n, i) {
    return { id: e.id, pinned: !0 === e.pinned, ...t, entries: n, index: i };
}
function F(e) {
    I = W(I.map((t) => (t.id === e ? { ...t, pinned: !1 } : t)));
}
function B(e) {
    let t = x(e);
    ((I = [t]), (p = t.id));
}
function V() {
    let e = (0, _.rv)(window.location);
    if (null != e) return e;
    let t = d.Ay.getCurrentlySelectedChannelId();
    return null == t || (0, f.jq)(t) ? null : { kind: "channel", channelId: t, guildId: c.A.getGuildId() ?? null };
}
function H() {
    let e = V();
    return null != e && (B(e), !0);
}
function j(e) {
    return "route" === e.kind
        ? { kind: "route", routePath: e.routePath, routeLabel: e.routeLabel }
        : { kind: "channel", channelId: e.channelId, guildId: e.guildId };
}
function W(e) {
    return [...e.filter((e) => e.pinned), ...e.filter((e) => !e.pinned)];
}
function Y(e, t) {
    if (((T = null), !C(t) || null == e)) return !1;
    if (0 === I.length) return B(e);
    let n = I.find((e) => e.id === p);
    if (null == n || (0, _.Pp)(n, e)) return !1;
    if ((U(), n.pinned)) {
        if (I.length >= h() && null != p) {
            ((T = p), F(p), G(e));
            return;
        }
        let t = x(e);
        ((I = [...I, t]), null != p && (m = { tabId: t.id, openerId: p, survivesSwitchToOpener: !0 }), (p = t.id));
        return;
    }
    G(e);
}
function K(e) {
    let t = I.find((e) => e.id === p);
    if (null == t) return !1;
    let n = t.index + e,
        i = t.entries[n];
    if (null == i) return !1;
    (U(), (I = I.map((e) => (e.id === p ? k(e, i, e.entries, n) : e))));
}
function $(e) {
    let { channel: t } = e;
    if (!C("ChannelTabsStore.handleChannelDelete")) return !1;
    let n = (e) => "channel" === e.kind && e.channelId === t.id && e.id !== p;
    if (!I.some(n)) return !1;
    (M(new Set(I.filter(n).map((e) => e.id))), (I = I.filter((e) => !n(e))));
}
class X extends r.Ay.PersistedStore {
    static displayName = "ChannelTabsStore";
    static persistKey = "ChannelTabsStore";
    static migrations = [(e) => ({ tabs: [], activeTabId: null, enabled: e?.enabled ?? !1 })];
    initialize(e) {
        (this.waitFor(l.A, o.A, d.Ay, c.A, u.default),
            this.syncWith([l.A], () => N),
            (N = e?.enabled ?? !1),
            (I = W(
                (e?.tabs ?? []).map((e) =>
                    (function (e) {
                        if (!Array.isArray(e.entries) || e.entries.length <= 50) return e;
                        let t = Math.min(Math.max(e.index, 0), e.entries.length - 1),
                            n = Math.min(t, e.entries.length - 50);
                        return { ...e, entries: e.entries.slice(n, n + 50), index: t - n };
                    })(k(e, j(e), e.entries, e.index)),
                ),
            )),
            (p = e?.activeTabId ?? null),
            (g =
                I.reduce((e, t) => {
                    let n = Number(t.id);
                    return Number.isFinite(n) && n > e ? n : e;
                }, 0) + 1),
            null == p || I.some((e) => e.id === p) || (p = I[0]?.id ?? null),
            D.overwriteHistory(
                (function (e) {
                    let t = {};
                    if (null == e || "object" != typeof e) return t;
                    for (let [n, i] of Object.entries(e)) {
                        let e = Array.isArray(i?.recentUses)
                            ? i.recentUses.filter((e) => "number" == typeof e && e > 0)
                            : [];
                        "number" == typeof i?.totalUses &&
                            0 !== e.length &&
                            (t[n] = { totalUses: i.totalUses, recentUses: e, frecency: -1, score: 0 });
                    }
                    return t;
                })(e?.openedChannels),
            ),
            b());
    }
    getState() {
        let e = {};
        for (let [t, { totalUses: n, recentUses: i }] of Object.entries(D.usageHistory))
            e[t] = { totalUses: n, recentUses: i };
        return { tabs: I, activeTabId: p, enabled: N, openedChannels: e };
    }
    getTabs() {
        return I;
    }
    getActiveTabId() {
        return p;
    }
    getActiveTab() {
        return I.find((e) => e.id === p) ?? null;
    }
    isEnabled() {
        return C("ChannelTabsStore.isEnabled");
    }
    isUserOptedIn() {
        return N;
    }
    isTabBarVisible() {
        return C("ChannelTabsStore.isTabBarVisible") && I.length > 0;
    }
    getTabUnpinnedAtLimit() {
        return I.find((e) => e.id === T) ?? null;
    }
    getRecentlyClosed() {
        return O;
    }
    getFrequentlyOpenedChannelIds() {
        let e = D.frequently;
        return (e !== L && ((L = e), (y = e.filter((e) => (D.usageHistory[e]?.totalUses ?? 0) >= 2))), y);
    }
    getMaxTabs() {
        return h();
    }
    isAtMaxTabs() {
        return I.length >= h();
    }
    canGoBackInActiveTab() {
        let e = this.getActiveTab();
        return null != e && e.index > 0;
    }
    canGoForwardInActiveTab() {
        let e = this.getActiveTab();
        return null != e && e.index < e.entries.length - 1;
    }
}
let z = new X(a.h, {
    CHANNEL_TABS_OPEN: function (e) {
        if (I.length >= h()) return !1;
        let t = x(j(e.location), void 0 === e.sourceTabId ? p : e.sourceTabId);
        ((I = [...I, t]),
            null == p
                ? (p = t.id)
                : !0 !== e.background && ((m = { tabId: t.id, openerId: p, survivesSwitchToOpener: !1 }), (p = t.id)),
            v(t));
    },
    CHANNEL_TABS_CLOSE: function (e) {
        var t;
        let n,
            i,
            r,
            { tabId: a } = e,
            s = I.findIndex((e) => e.id === a);
        if (-1 === s || 1 === I.length) return !1;
        let l = I[s];
        (l.id === p &&
            (p = ((n = I[(t = s)].id),
            (i = m?.tabId === n ? m.openerId : m?.openerId === n ? m.tabId : null),
            (r = [...I.slice(t + 1), ...I.slice(0, t).reverse()]).find((e) => e.id === i) ?? r[0]).id),
            (I = I.filter((e) => e.id !== a)),
            M(new Set([a])),
            (function (e) {
                if ((R.delete(e.id), "channel" !== e.kind || !C("ChannelTabsStore.recordClosedTab"))) return;
                let { channelId: t, guildId: n } = e;
                O = [{ channelId: t, guildId: n, closedAt: Date.now() }, ...O.filter((e) => e.channelId !== t)].slice(
                    0,
                    10,
                );
            })(l));
    },
    CHANNEL_TABS_SET_ACTIVE: function (e) {
        let { tabId: t } = e;
        if (p === t || null == I.find((e) => e.id === t)) return !1;
        if (null != m) {
            let e = p === m.tabId;
            ((e ? t === m.openerId : p === m.openerId && t === m.tabId) && (!e || m.survivesSwitchToOpener)) ||
                (m = null);
        }
        p = t;
    },
    CHANNEL_TABS_MOVE: function (e) {
        let { tabId: t, toIndex: n } = e,
            i = I.findIndex((e) => e.id === t);
        if (-1 === i) return !1;
        let r = I.filter((e) => e.pinned).length,
            [a, s] = I[i].pinned ? [0, r - 1] : [r, I.length - 1],
            l = Math.max(a, Math.min(n, s));
        if (i === l) return !1;
        let o = [...I],
            [d] = o.splice(i, 1);
        (o.splice(l, 0, d), (I = o));
    },
    CHANNEL_TABS_SET_PINNED: function (e) {
        let { tabId: t, pinned: n } = e,
            i = I.find((e) => e.id === t);
        if (null == i || i.pinned === n) return !1;
        let r = I.filter((e) => e.id !== i.id),
            a = r.filter((e) => e.pinned).length;
        I = [...r.slice(0, a), { ...i, pinned: n }, ...r.slice(a)];
    },
    CHANNEL_TABS_BACK: P(() => K(-1)),
    CHANNEL_TABS_FORWARD: P(() => K(1)),
    CHANNEL_TABS_SET_ENABLED: function (e) {
        let { enabled: t } = e;
        if (N === t) return !1;
        (N = t) ? 0 === I.length && C("ChannelTabsStore.handleSetEnabled") && H() : w();
    },
    CHANNEL_TABS_NAVIGATE_ROUTE: P(function (e) {
        let { routePath: t, routeLabel: n } = e;
        return Y({ kind: "route", routePath: t, routeLabel: n }, "ChannelTabsStore.handleNavigateRoute");
    }),
    CHANNEL_SELECT: P(function (e) {
        let { channelId: t, guildId: n } = e;
        return Y(
            null == t || (0, f.jq)(t) ? null : { kind: "channel", channelId: t, guildId: n ?? null },
            "ChannelTabsStore.handleChannelSelect",
        );
    }),
    CHANNEL_DELETE: $,
    CONNECTION_OPEN: function () {
        let e = !S;
        if (((S = !0), !C("ChannelTabsStore.handleConnectionOpen"))) return !1;
        if (!e && 0 === I.length) return H();
        let t = (function () {
            let e = I.length - h();
            if (e <= 0) return !1;
            let t = new Set(
                I.filter((e) => e.id !== p)
                    .slice(-e)
                    .map((e) => e.id),
            );
            return ((I = I.filter((e) => !t.has(e.id))), M(t), !0);
        })();
        return (
            (e &&
                (function () {
                    let e = V() ?? (0, _.rv)({ pathname: o.A.defaultRoute });
                    if (null == e) return !1;
                    let t = I.at(-1);
                    if (null == t || (t.pinned && I.length < h())) {
                        let t = x(e, null);
                        return ((I = [...I, t]), (p = t.id), !0);
                    }
                    return ((p = t.id), t.pinned && F(t.id), (0, _.Pp)(t, e) || G(e), !0);
                })()) ||
            t
        );
    },
    THREAD_DELETE: $,
    LOGOUT: function () {
        (w(), (R = new Set()), (O = []), D.overwriteHistory({}));
    },
});
n.d(t, {}, { A: z });
