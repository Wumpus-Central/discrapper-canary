(n(134528), n(947204));
var i = n(855986),
    r = n(73153),
    a = n(283047),
    s = n(340344),
    l = n(650048),
    o = n(309010),
    d = n(967198),
    c = n(287809),
    u = n(20517),
    _ = n(858760),
    E = n(652215),
    A = n(746080);
function f() {
    return c.default.getCurrentUser()?.isStaff() === !0 ? 25 : 9;
}
let h = [],
    I = null,
    p = null,
    m = 1,
    g = null,
    T = null,
    S = !1,
    N = !1,
    C = !1,
    O = [],
    R = new Set(),
    L = null,
    y = [],
    D = new a.A({ computeBonus: () => 100, lookupKey: (e) => e, afterCompute: () => {}, numFrequentlyItems: 10 });
function b() {
    let e = new Set(D.frequently);
    for (let t of Object.keys(D.usageHistory)) e.has(t) || delete D.usageHistory[t];
}
function v(e) {
    var t;
    return "route" === e.kind && e.routePath === E.BVt.FRIENDS
        ? (R.add(e.id), !1)
        : (R.delete(e.id),
          !("channel" !== e.kind || (0, A.jq)(e.channelId)) &&
              ((t = e.channelId), D.track(t), b(), (O = O.filter((e) => e.channelId !== t)), !0));
}
function P(e) {
    return (t) => {
        let n = !1 !== e(t),
            i = h.find((e) => e.id === I),
            r = null != i && R.has(i.id) && v(i);
        return n || r;
    };
}
function M(e) {
    if ((R.delete(e.id), "channel" !== e.kind)) return;
    let { channelId: t, guildId: n } = e;
    O = [{ channelId: t, guildId: n, closedAt: Date.now() }, ...O.filter((e) => e.channelId !== t)].slice(0, 10);
}
function U(e) {
    null != p && (e.has(p.tabId) || e.has(p.openerId)) && (p = null);
}
function w() {
    (null != I && p?.tabId === I && R.has(I)) || (p = null);
}
function G(e) {
    h = h.map((t) => {
        if (t.id !== I) return t;
        let n = [...t.entries.slice(0, t.index + 1), e].slice(-50);
        return k(t, e, n, n.length - 1);
    });
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I,
        n = null != t ? (h.find((e) => e.id === t) ?? h.find((e) => e.id === I)) : void 0,
        i = null != n ? n.entries.slice(Math.max(0, n.index - 10), n.index + 1).map((e) => ({ ...e })) : [],
        r = i.at(-1),
        a = null != r && (0, u.Pp)(r, e) ? i : [...i, e].slice(-11);
    return { id: String(m++), ...e, pinned: !1, entries: a, index: a.length - 1 };
}
function k(e, t, n, i) {
    return { id: e.id, pinned: !0 === e.pinned, ...t, entries: n, index: i };
}
function F(e) {
    h = W(h.map((t) => (t.id === e ? { ...t, pinned: !1 } : t)));
}
function B(e) {
    let t = x(e);
    ((h = [t]), (I = t.id));
}
function V() {
    let e = (0, u.rv)(window.location);
    if (null != e) return e;
    let t = o.Ay.getCurrentlySelectedChannelId();
    return null == t || (0, A.jq)(t) ? null : { kind: "channel", channelId: t, guildId: d.A.getGuildId() ?? null };
}
function H(e, t) {
    let n = h.findIndex((t) => t.id === e);
    return -1 === n ? [] : h.filter((e, i) => !e.pinned && i !== n && ("all" === t || i > n));
}
function j(e) {
    return "route" === e.kind
        ? { kind: "route", routePath: e.routePath, routeLabel: e.routeLabel }
        : { kind: "channel", channelId: e.channelId, guildId: e.guildId };
}
function W(e) {
    return [...e.filter((e) => e.pinned), ...e.filter((e) => !e.pinned)];
}
function Y(e) {
    if (!C || ((g = null), (T = null), null == e)) return !1;
    if (0 === h.length) return B(e);
    let t = h.find((e) => e.id === I);
    if (null == t || (0, u.Pp)(t, e)) return !1;
    if ((w(), t.pinned)) {
        let t = h.find((t) => (0, u.Pp)(t, e));
        if (null != t) {
            ((T = t.id), (I = t.id));
            return;
        }
        if (h.length >= f() && null != I) {
            ((g = I), F(I), G(e));
            return;
        }
        let n = x(e);
        ((h = [...h, n]), null != I && (p = { tabId: n.id, openerId: I, survivesSwitchToOpener: !0 }), (I = n.id));
        return;
    }
    G(e);
}
function K(e) {
    let t = h.find((e) => e.id === I);
    if (!C || null == t) return !1;
    let n = t.index + e,
        i = t.entries[n];
    if (null == i) return !1;
    (w(), (h = h.map((e) => (e.id === I ? k(e, i, e.entries, n) : e))));
}
function $() {
    let e;
    if (!N) {
        N = !0;
        let e = z();
        return (
            (function () {
                let e = V() ?? (0, u.rv)({ pathname: l.A.defaultRoute });
                if (null == e) return !1;
                let t = h.at(-1);
                if (null == t || (t.pinned && h.length < f())) {
                    let t = x(e, null);
                    return ((h = [...h, t]), (I = t.id), !0);
                }
                return ((I = t.id), t.pinned && F(t.id), (0, u.Pp)(t, e) || G(e), !0);
            })() || e
        );
    }
    return 0 === h.length ? null != (e = V()) && (B(e), !0) : z();
}
function X(e) {
    let t = (0, _.Z6)(e);
    return t !== C && ((C = t) && S && $(), !0);
}
function z() {
    let e = h.length - f();
    if (e <= 0) return !1;
    let t = new Set(
        h
            .filter((e) => e.id !== I)
            .slice(-e)
            .map((e) => e.id),
    );
    return ((h = h.filter((e) => !t.has(e.id))), U(t), !0);
}
function q(e) {
    let { channel: t } = e;
    if (!C) return !1;
    let n = (e) => "channel" === e.kind && e.channelId === t.id && e.id !== I;
    if (!h.some(n)) return !1;
    (U(new Set(h.filter(n).map((e) => e.id))), (h = h.filter((e) => !n(e))));
}
class Q extends i.Ay.PersistedStore {
    static displayName = "ChannelTabsStore";
    static persistKey = "ChannelTabsStore";
    static migrations = [(e) => ({ tabs: [], activeTabId: null, enabled: e?.enabled ?? !1 })];
    initialize(e) {
        (this.waitFor(s.A, l.A, o.Ay, d.A, c.default),
            this.syncWith([s.A], () => X("ChannelTabsStore.syncWith")),
            (h = W(
                (e?.tabs ?? []).map((e) =>
                    (function (e) {
                        if (!Array.isArray(e.entries) || e.entries.length <= 50) return e;
                        let t = Math.min(Math.max(e.index, 0), e.entries.length - 1),
                            n = Math.min(t, e.entries.length - 50);
                        return { ...e, entries: e.entries.slice(n, n + 50), index: t - n };
                    })(k(e, j(e), e.entries, e.index)),
                ),
            )),
            (I = e?.activeTabId ?? null),
            (m =
                h.reduce((e, t) => {
                    let n = Number(t.id);
                    return Number.isFinite(n) && n > e ? n : e;
                }, 0) + 1),
            null == I || h.some((e) => e.id === I) || (I = h[0]?.id ?? null),
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
            b(),
            X("ChannelTabsStore.initialize"));
    }
    getState() {
        let e = {};
        for (let [t, { totalUses: n, recentUses: i }] of Object.entries(D.usageHistory))
            e[t] = { totalUses: n, recentUses: i };
        return { tabs: h, activeTabId: I, openedChannels: e };
    }
    getTabs() {
        return h;
    }
    getActiveTabId() {
        return I;
    }
    getActiveTab() {
        return h.find((e) => e.id === I) ?? null;
    }
    getTabUnpinnedAtLimit() {
        return h.find((e) => e.id === g) ?? null;
    }
    getTabRefocusedFromPinned() {
        return h.find((e) => e.id === T) ?? null;
    }
    getOtherTabsToClose(e, t) {
        return H(e, t);
    }
    getCloseOtherTabsCount(e) {
        return H(e, "all").length;
    }
    getCloseTabsToRightCount(e) {
        return H(e, "right").length;
    }
    getRecentlyClosed() {
        return O;
    }
    getFrequentlyOpenedChannelIds() {
        let e = D.frequently;
        return (e !== L && ((L = e), (y = e.filter((e) => (D.usageHistory[e]?.totalUses ?? 0) >= 2))), y);
    }
    getMaxTabs() {
        return f();
    }
    isAtMaxTabs() {
        return h.length >= f();
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
let J = new Q(r.h, {
    CHANNEL_TABS_OPEN: function (e) {
        if (!C || h.length >= f()) return !1;
        let t = x(j(e.location), void 0 === e.sourceTabId ? I : e.sourceTabId);
        ((h = [...h, t]),
            null == I
                ? (I = t.id)
                : !0 !== e.background && ((p = { tabId: t.id, openerId: I, survivesSwitchToOpener: !1 }), (I = t.id)),
            v(t));
    },
    CHANNEL_TABS_CLOSE: function (e) {
        var t;
        let n,
            i,
            r,
            { tabId: a } = e;
        if (!C) return !1;
        let s = h.findIndex((e) => e.id === a);
        if (-1 === s || 1 === h.length) return !1;
        let l = h[s];
        (l.id === I &&
            (I = ((n = h[(t = s)].id),
            (i = p?.tabId === n ? p.openerId : p?.openerId === n ? p.tabId : null),
            (r = [...h.slice(t + 1), ...h.slice(0, t).reverse()]).find((e) => e.id === i) ?? r[0]).id),
            (h = h.filter((e) => e.id !== a)),
            U(new Set([a])),
            M(l));
    },
    CHANNEL_TABS_CLOSE_OTHERS: function (e) {
        let { tabId: t, mode: n } = e,
            i = H(t, n);
        if (0 === i.length) return !1;
        let r = new Set(i.map((e) => e.id));
        (null != I && r.has(I) && (I = t), (h = h.filter((e) => !r.has(e.id))), U(r), i.reverse().forEach(M));
    },
    CHANNEL_TABS_SET_ACTIVE: function (e) {
        let { tabId: t } = e;
        if (!C || I === t || null == h.find((e) => e.id === t)) return !1;
        if (null != p) {
            let e = I === p.tabId;
            ((e ? t === p.openerId : I === p.openerId && t === p.tabId) && (!e || p.survivesSwitchToOpener)) ||
                (p = null);
        }
        I = t;
    },
    CHANNEL_TABS_MOVE: function (e) {
        let { tabId: t, toIndex: n } = e;
        if (!C) return !1;
        let i = h.findIndex((e) => e.id === t);
        if (-1 === i) return !1;
        let r = h.filter((e) => e.pinned).length,
            [a, s] = h[i].pinned ? [0, r - 1] : [r, h.length - 1],
            l = Math.max(a, Math.min(n, s));
        if (i === l) return !1;
        let o = [...h],
            [d] = o.splice(i, 1);
        (o.splice(l, 0, d), (h = o));
    },
    CHANNEL_TABS_SET_PINNED: function (e) {
        let { tabId: t, pinned: n } = e,
            i = h.find((e) => e.id === t);
        if (!C || null == i || i.pinned === n) return !1;
        let r = h.filter((e) => e.id !== i.id),
            a = r.filter((e) => e.pinned).length;
        h = [...r.slice(0, a), { ...i, pinned: n }, ...r.slice(a)];
    },
    CHANNEL_TABS_BACK: P(() => K(-1)),
    CHANNEL_TABS_FORWARD: P(() => K(1)),
    CHANNEL_TABS_NAVIGATE_ROUTE: P(function (e) {
        let { routePath: t, routeLabel: n } = e;
        return Y({ kind: "route", routePath: t, routeLabel: n });
    }),
    CHANNEL_SELECT: P(function (e) {
        let { channelId: t, guildId: n } = e;
        return Y(null == t || (0, A.jq)(t) ? null : { kind: "channel", channelId: t, guildId: n ?? null });
    }),
    CHANNEL_DELETE: q,
    CONNECTION_OPEN: function () {
        return ((S = !0), !!X("ChannelTabsStore.handleConnectionOpen") || (C && $()));
    },
    THREAD_DELETE: q,
    LOGOUT: function () {
        ((h = []), (I = null), (p = null), (R = new Set()), (O = []), D.overwriteHistory({}));
    },
});
n.d(t, {}, { A: J });
