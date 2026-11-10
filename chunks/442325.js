(n(134528), n(947204));
var i = n(574381),
    r = n(855986),
    a = n(73153),
    s = n(50258),
    l = n(5180),
    o = n(650048),
    d = n(71393),
    c = n(309010),
    u = n(967198),
    _ = n(287809),
    E = n(33760),
    A = n(20517),
    f = n(858760),
    h = n(746080);
function I() {
    return _.default.getCurrentUser()?.isStaff() === !0 ? 25 : 9;
}
let p = [],
    m = null,
    T = [],
    g = 1,
    S = null,
    N = null,
    C = !1,
    O = !1;
function R() {
    return O && f.A.getConfig({ location: "ChannelTabsStore" }).enabled && (0, i.xl)();
}
function L(e) {
    T = [e, ...T.filter((t) => t !== e)].slice(0, I());
}
function y(e) {
    (null != m && m !== e && L(m), (m = e), L(e));
}
function D() {
    T = T.filter((e) => p.some((t) => t.id === e));
}
function b() {
    ((p = []), (m = null), (T = []), (S = null));
}
function v(e) {
    (S === m && (S = null),
        (p = p.map((t) => {
            if (t.id !== m) return t;
            let n = [...t.entries.slice(0, t.index + 1), e];
            return M(t, e, n, n.length - 1);
        })));
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m,
        n = null != t ? (p.find((e) => e.id === t) ?? p.find((e) => e.id === m)) : void 0,
        i = null != n ? n.entries.slice(Math.max(0, n.index - 10), n.index + 1).map((e) => ({ ...e })) : [],
        r = i.at(-1),
        a = null != r && (0, E.Pp)(r, e) ? i : [...i, e].slice(-11);
    return { id: String(g++), ...e, pinned: !1, entries: a, index: a.length - 1 };
}
function M(e, t, n, i) {
    return { id: e.id, pinned: e.pinned, pinScope: e.pinScope ?? null, ...t, entries: n, index: i };
}
function U(e) {
    if (p.length >= I() && null != m) {
        ((N = m), (p = F(p.map((e) => (e.id === m ? { ...e, pinned: !1, pinScope: null } : e)))), v(e));
        return;
    }
    let t = P(e);
    ((p = [...p, t]), y(t.id));
}
function w(e) {
    let t = P(e);
    ((p = [t]), y(t.id));
}
function G() {
    let e = (0, A.r)(window.location);
    if (null != e) return { kind: "route", ...e };
    let t = c.Ay.getCurrentlySelectedChannelId();
    return null == t || (0, h.jq)(t) ? null : { kind: "channel", channelId: t, guildId: u.A.getGuildId() ?? null };
}
function x() {
    let e = G();
    return null != e && (w(e), !0);
}
function k(e) {
    return {
        ...e,
        pinScope:
            e.pinned &&
            (function (e) {
                if (null == e || "object" != typeof e) return !1;
                let { kind: t, guildId: n } = e;
                return "dms" === t || ("guild" === t && "string" == typeof n);
            })(e.pinScope)
                ? e.pinScope
                : null,
    };
}
function F(e) {
    return [...e.filter((e) => e.pinned), ...e.filter((e) => !e.pinned)];
}
function B(e) {
    let t = p.find((e) => e.id === m);
    if (null == t) return !1;
    let n = t.index + e,
        i = t.entries[n];
    if (null == i) return !1;
    (S === m && (S = null), (p = p.map((e) => (e.id === m ? M(e, i, e.entries, n) : e))));
}
function V(e) {
    let t = p.filter((t) => t.pinScope?.kind === "guild" && !e(t.pinScope.guildId));
    if (0 === t.length) return !1;
    let n = t.map((e) => ({ ...e, pinned: !1, pinScope: null }));
    return ((p = [...p.filter((e) => e.pinned && !t.includes(e)), ...n, ...p.filter((e) => !e.pinned)]), !0);
}
function H(e) {
    let { channel: t } = e;
    if (!R()) return !1;
    function n(e) {
        return "channel" === e.kind && e.channelId === t.id;
    }
    if (0 === p.filter((e) => n(e) && e.id !== m).length) return !1;
    ((p = p.filter((e) => !n(e) || e.id === m)), D());
}
class j extends r.Ay.PersistedStore {
    static displayName = "ChannelTabsStore";
    static persistKey = "ChannelTabsStore";
    static migrations = [(e) => ({ tabs: [], activeTabId: null, enabled: e?.enabled ?? !1 })];
    initialize(e) {
        (this.waitFor(s.A, o.A, d.A, c.Ay, u.A, _.default),
            (O = e?.enabled ?? !1),
            (p = F((e?.tabs ?? []).map(k))),
            (m = e?.activeTabId ?? null),
            (T = []),
            (g =
                p.reduce((e, t) => {
                    let n = Number(t.id);
                    return Number.isFinite(n) && n > e ? n : e;
                }, 0) + 1),
            null == m || p.some((e) => e.id === m) || (m = p[0]?.id ?? null));
    }
    getState() {
        return { tabs: p, activeTabId: m, enabled: O };
    }
    getTabs() {
        return p;
    }
    getActiveTabId() {
        return m;
    }
    getActiveTab() {
        return p.find((e) => e.id === m) ?? null;
    }
    isEnabled() {
        return R();
    }
    isUserOptedIn() {
        return O;
    }
    isTabBarVisible() {
        return R() && p.length > 0;
    }
    getTabUnpinnedAtLimit() {
        return p.find((e) => e.id === N) ?? null;
    }
    isActiveTabFresh() {
        return null != S && S === m;
    }
    getMaxTabs() {
        return I();
    }
    isAtMaxTabs() {
        return p.length >= I();
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
let W = new j(a.h, {
    CHANNEL_TABS_OPEN: function (e) {
        if (p.length >= I()) return !1;
        let t = P(
            "route" === e.kind
                ? { kind: "route", routePath: e.routePath, routeLabel: e.routeLabel }
                : { kind: "channel", channelId: e.channelId, guildId: e.guildId },
            e.sourceTabId ?? m,
        );
        ((p = [...p, t]), (!0 === e.active || null == m) && y(t.id), !0 === e.fresh && (S = t.id));
    },
    CHANNEL_TABS_CLOSE: function (e) {
        let { tabId: t } = e,
            n = p.findIndex((e) => e.id === t);
        if (-1 === n || 1 === p.length) return !1;
        let i = p[n].id === m;
        if ((S === t && (S = null), (p = p.filter((e) => e.id !== t)), D(), i)) {
            let e = p[Math.min(n, p.length - 1)];
            ((m = null), y(T[0] ?? e.id));
        }
    },
    CHANNEL_TABS_SET_ACTIVE: function (e) {
        let { tabId: t } = e;
        if (m === t || null == p.find((e) => e.id === t)) return !1;
        y(t);
    },
    CHANNEL_TABS_MOVE: function (e) {
        let { tabId: t, toIndex: n } = e,
            i = p.findIndex((e) => e.id === t);
        if (-1 === i) return !1;
        let r = p.filter((e) => e.pinned).length,
            [a, s] = p[i].pinned ? [0, r - 1] : [r, p.length - 1],
            l = Math.max(a, Math.min(n, s));
        if (i === l) return !1;
        let o = [...p],
            [d] = o.splice(i, 1);
        (o.splice(l, 0, d), (p = o));
    },
    CHANNEL_TABS_SET_PINNED: function (e) {
        let { tabId: t, pinned: n, scope: i } = e,
            r = n ? (i ?? null) : null,
            a = p.find((e) => e.id === t);
        if (null == a || (a.pinned === n && (0, E._9)(a.pinScope, r))) return !1;
        if (a.pinned === n) {
            p = p.map((e) => (e.id === a.id ? { ...a, pinned: n, pinScope: r } : e));
            return;
        }
        let s = p.filter((e) => e.id !== a.id),
            l = s.filter((e) => e.pinned).length;
        p = [...s.slice(0, l), { ...a, pinned: n, pinScope: r }, ...s.slice(l)];
    },
    CHANNEL_TABS_BACK: function () {
        return B(-1);
    },
    CHANNEL_TABS_FORWARD: function () {
        return B(1);
    },
    CHANNEL_TABS_SET_ENABLED: function (e) {
        let { enabled: t } = e;
        if (O === t) return !1;
        (O = t) ? 0 === p.length && R() && x() : b();
    },
    CHANNEL_TABS_NAVIGATE_ROUTE: function (e) {
        let { routePath: t, routeLabel: n } = e;
        if (((N = null), !R())) return !1;
        let i = { kind: "route", routePath: t, routeLabel: n };
        if (0 === p.length) return w(i);
        let r = p.find((e) => e.id === m);
        return null != r && ("route" !== r.kind || r.routePath !== t) && ((0, E.Ss)(r, i) ? U(i) : void v(i));
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e;
        if (((N = null), !R() || null == t || (0, h.jq)(t))) return !1;
        let i = { kind: "channel", channelId: t, guildId: n ?? null };
        if (0 === p.length) return w(i);
        let r = p.find((e) => e.id === m);
        return null != r && ("channel" !== r.kind || r.channelId !== t) && ((0, E.Ss)(r, i) ? U(i) : void v(i));
    },
    CHANNEL_DELETE: H,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return !!R() && !0 !== t.unavailable && V((e) => e !== t.id);
    },
    CONNECTION_OPEN: function (e) {
        let { unavailableGuilds: t } = e,
            n = !C;
        if (((C = !0), !R())) return !1;
        if (!n && 0 === p.length) return x();
        let i = (function () {
                let e = p.length - I();
                if (e <= 0) return !1;
                let t = new Set(
                    p
                        .filter((e) => e.id !== m)
                        .slice(-e)
                        .map((e) => e.id),
                );
                return ((p = p.filter((e) => !t.has(e.id))), D(), !0);
            })(),
            r = V((e) => (0, l.ai)(e) || null != d.A.getGuild(e) || t.includes(e));
        return (
            (n &&
                (function () {
                    let e = (0, A.r)({ pathname: o.A.defaultRoute }),
                        t = G() ?? (null != e ? { kind: "route", ...e } : null);
                    if (null == t) return !1;
                    let n = p.at(-1);
                    if (null == n || (n.pinned && p.length < I())) {
                        let e = P(t, null);
                        return ((p = [...p, e]), y(e.id), !0);
                    }
                    return (
                        y(n.id),
                        n.pinned && (p = F(p.map((e) => (e.id === n.id ? { ...e, pinned: !1, pinScope: null } : e)))),
                        (0, E.Pp)(n, t) || v(t),
                        !0
                    );
                })()) ||
            i ||
            r
        );
    },
    THREAD_DELETE: H,
    LOGOUT: function () {
        if (0 === p.length) return !1;
        b();
    },
});
n.d(t, {}, { A: W });
