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
    m = [],
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
    m = [e, ...m.filter((t) => t !== e)].slice(0, h());
}
function U(e) {
    (null != p && p !== e && M(p), (p = e), M(e));
}
function w() {
    m = m.filter((e) => I.some((t) => t.id === e));
}
function G() {
    ((I = []), (p = null), (m = []));
}
function x(e) {
    I = I.map((t) => {
        if (t.id !== p) return t;
        let n = [...t.entries.slice(0, t.index + 1), e].slice(-50);
        return F(t, e, n, n.length - 1);
    });
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p,
        n = null != t ? (I.find((e) => e.id === t) ?? I.find((e) => e.id === p)) : void 0,
        i = null != n ? n.entries.slice(Math.max(0, n.index - 10), n.index + 1).map((e) => ({ ...e })) : [],
        r = i.at(-1),
        a = null != r && (0, _.Pp)(r, e) ? i : [...i, e].slice(-11);
    return { id: String(g++), ...e, pinned: !1, entries: a, index: a.length - 1 };
}
function F(e, t, n, i) {
    return { id: e.id, pinned: !0 === e.pinned, ...t, entries: n, index: i };
}
function B(e) {
    I = Y(I.map((t) => (t.id === e ? { ...t, pinned: !1 } : t)));
}
function V(e) {
    let t = k(e);
    ((I = [t]), U(t.id));
}
function H() {
    let e = (0, _.rv)(window.location);
    if (null != e) return e;
    let t = d.Ay.getCurrentlySelectedChannelId();
    return null == t || (0, f.jq)(t) ? null : { kind: "channel", channelId: t, guildId: c.A.getGuildId() ?? null };
}
function j() {
    let e = H();
    return null != e && (V(e), !0);
}
function W(e) {
    return "route" === e.kind
        ? { kind: "route", routePath: e.routePath, routeLabel: e.routeLabel }
        : { kind: "channel", channelId: e.channelId, guildId: e.guildId };
}
function Y(e) {
    return [...e.filter((e) => e.pinned), ...e.filter((e) => !e.pinned)];
}
function K(e, t) {
    if (((T = null), !C(t) || null == e)) return !1;
    if (0 === I.length) return V(e);
    let n = I.find((e) => e.id === p);
    if (null == n || (0, _.Pp)(n, e)) return !1;
    if (n.pinned) {
        if (I.length >= h() && null != p) {
            ((T = p), B(p), x(e));
            return;
        }
        let t = k(e);
        ((I = [...I, t]), U(t.id));
        return;
    }
    x(e);
}
function $(e) {
    let t = I.find((e) => e.id === p);
    if (null == t) return !1;
    let n = t.index + e,
        i = t.entries[n];
    if (null == i) return !1;
    I = I.map((e) => (e.id === p ? F(e, i, e.entries, n) : e));
}
function X(e) {
    let { channel: t } = e;
    if (!C("ChannelTabsStore.handleChannelDelete")) return !1;
    let n = (e) => "channel" === e.kind && e.channelId === t.id && e.id !== p;
    if (!I.some(n)) return !1;
    ((I = I.filter((e) => !n(e))), w());
}
class z extends r.Ay.PersistedStore {
    static displayName = "ChannelTabsStore";
    static persistKey = "ChannelTabsStore";
    static migrations = [(e) => ({ tabs: [], activeTabId: null, enabled: e?.enabled ?? !1 })];
    initialize(e) {
        (this.waitFor(l.A, o.A, d.Ay, c.A, u.default),
            (N = e?.enabled ?? !1),
            (I = Y(
                (e?.tabs ?? []).map((e) =>
                    (function (e) {
                        if (!Array.isArray(e.entries) || e.entries.length <= 50) return e;
                        let t = Math.min(Math.max(e.index, 0), e.entries.length - 1),
                            n = Math.min(t, e.entries.length - 50);
                        return { ...e, entries: e.entries.slice(n, n + 50), index: t - n };
                    })(F(e, W(e), e.entries, e.index)),
                ),
            )),
            (p = e?.activeTabId ?? null),
            (m = []),
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
let q = new z(a.h, {
    CHANNEL_TABS_OPEN: function (e) {
        if (I.length >= h()) return !1;
        let t = k(W(e.location), void 0 === e.sourceTabId ? p : e.sourceTabId);
        ((I = [...I, t]), (!0 !== e.background || null == p) && U(t.id), v(t));
    },
    CHANNEL_TABS_CLOSE: function (e) {
        let { tabId: t } = e,
            n = I.findIndex((e) => e.id === t);
        if (-1 === n || 1 === I.length) return !1;
        let i = I[n],
            r = i.id === p;
        if (
            ((I = I.filter((e) => e.id !== t)),
            w(),
            !(function (e) {
                if ((R.delete(e.id), "channel" !== e.kind || !C("ChannelTabsStore.recordClosedTab"))) return;
                let { channelId: t, guildId: n } = e;
                O = [{ channelId: t, guildId: n, closedAt: Date.now() }, ...O.filter((e) => e.channelId !== t)].slice(
                    0,
                    10,
                );
            })(i),
            r)
        ) {
            let e = I[Math.min(n, I.length - 1)];
            ((p = null), U(m[0] ?? e.id));
        }
    },
    CHANNEL_TABS_SET_ACTIVE: function (e) {
        let { tabId: t } = e;
        if (p === t || null == I.find((e) => e.id === t)) return !1;
        U(t);
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
    CHANNEL_TABS_BACK: P(() => $(-1)),
    CHANNEL_TABS_FORWARD: P(() => $(1)),
    CHANNEL_TABS_SET_ENABLED: function (e) {
        let { enabled: t } = e;
        if (N === t) return !1;
        (N = t) ? 0 === I.length && C("ChannelTabsStore.handleSetEnabled") && j() : G();
    },
    CHANNEL_TABS_NAVIGATE_ROUTE: P(function (e) {
        let { routePath: t, routeLabel: n } = e;
        return K({ kind: "route", routePath: t, routeLabel: n }, "ChannelTabsStore.handleNavigateRoute");
    }),
    CHANNEL_SELECT: P(function (e) {
        let { channelId: t, guildId: n } = e;
        return K(
            null == t || (0, f.jq)(t) ? null : { kind: "channel", channelId: t, guildId: n ?? null },
            "ChannelTabsStore.handleChannelSelect",
        );
    }),
    CHANNEL_DELETE: X,
    CONNECTION_OPEN: function () {
        let e = !S;
        if (((S = !0), !C("ChannelTabsStore.handleConnectionOpen"))) return !1;
        if (!e && 0 === I.length) return j();
        let t = (function () {
            let e = I.length - h();
            if (e <= 0) return !1;
            let t = new Set(
                I.filter((e) => e.id !== p)
                    .slice(-e)
                    .map((e) => e.id),
            );
            return ((I = I.filter((e) => !t.has(e.id))), w(), !0);
        })();
        return (
            (e &&
                (function () {
                    let e = H() ?? (0, _.rv)({ pathname: o.A.defaultRoute });
                    if (null == e) return !1;
                    let t = I.at(-1);
                    if (null == t || (t.pinned && I.length < h())) {
                        let t = k(e, null);
                        return ((I = [...I, t]), U(t.id), !0);
                    }
                    return (U(t.id), t.pinned && B(t.id), (0, _.Pp)(t, e) || x(e), !0);
                })()) ||
            t
        );
    },
    THREAD_DELETE: X,
    LOGOUT: function () {
        (G(), (R = new Set()), (O = []), D.overwriteHistory({}));
    },
});
n.d(t, {}, { A: q });
