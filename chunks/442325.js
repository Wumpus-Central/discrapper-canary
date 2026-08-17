"use strict";
n.d(t, { A: () => g });
var i = n(574381),
    r = n(17928),
    a = n(228366),
    s = n(309010),
    l = n(967198),
    o = n(858760),
    d = n(746080);
let c = [],
    u = null,
    _ = 1,
    E = !1;
function A() {
    return E && o.A.getConfig({ location: "ChannelTabsStore" }).enabled && (0, i.xl)();
}
function h(e) {
    return { id: String(_++), ...e, pinned: !1, entries: [e], index: 0 };
}
function I(e, t, n, i) {
    return { id: e.id, pinned: e.pinned, ...t, entries: n, index: i };
}
function f(e) {
    return !A() && (0 === e.length || (1 === e.length && !e[0].pinned));
}
function p(e) {
    let t = c.find((e) => e.id === u);
    if (null == t) return !1;
    let n = t.index + e,
        i = t.entries[n];
    if (null == i) return !1;
    c = c.map((e) => (e.id === u ? I(e, i, e.entries, n) : e));
}
function T(e) {
    let { channel: t } = e;
    if (!A()) return !1;
    function n(e) {
        return "channel" === e.kind && e.channelId === t.id;
    }
    if (0 === c.filter((e) => n(e) && e.id !== u).length) return !1;
    let i = c.filter((e) => !n(e) || e.id === u);
    if (f(i)) {
        (c = []), (u = null);
        return;
    }
    c = i;
}
class m extends r.Ay.PersistedStore {
    static displayName = "ChannelTabsStore";
    static persistKey = "ChannelTabsStore";
    static migrations = [(e) => ({ tabs: [], activeTabId: null, enabled: e?.enabled ?? !1 })];
    initialize(e) {
        this.waitFor(s.Ay, l.A),
            (E = e?.enabled ?? !1),
            (c = e?.tabs ?? []),
            (u = e?.activeTabId ?? null),
            (_ =
                c.reduce((e, t) => {
                    let n = Number(t.id);
                    return Number.isFinite(n) && n > e ? n : e;
                }, 0) + 1),
            null == u || c.some((e) => e.id === u) || (u = c[0]?.id ?? null);
    }
    getState() {
        return { tabs: c, activeTabId: u, enabled: E };
    }
    getTabs() {
        return c;
    }
    getActiveTabId() {
        return u;
    }
    getActiveTab() {
        return c.find((e) => e.id === u) ?? null;
    }
    isEnabled() {
        return A();
    }
    isUserOptedIn() {
        return E;
    }
    isTabBarVisible() {
        return A() && c.length >= 1;
    }
    isAtMaxTabs() {
        return c.length >= 25;
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
let g = new m(a.h, {
    CHANNEL_TABS_OPEN: function (e) {
        if (c.length >= 25) return !1;
        if (0 === c.length) {
            let e = s.Ay.getCurrentlySelectedChannelId();
            if (null != e && !(0, d.jq)(e)) {
                let t = h({ kind: "channel", channelId: e, guildId: l.A.getGuildId() ?? null });
                (c = [t]), (u = t.id);
            }
        }
        let t = h(
            "route" === e.kind
                ? { kind: "route", routePath: e.routePath, routeLabel: e.routeLabel }
                : { kind: "channel", channelId: e.channelId, guildId: e.guildId },
        );
        (c = [...c, t]), (!0 === e.active || null == u) && (u = t.id);
    },
    CHANNEL_TABS_CLOSE: function (e) {
        let { tabId: t } = e,
            n = c.findIndex((e) => e.id === t);
        if (-1 === n || (A() && 1 === c.length)) return !1;
        let i = c[n].id === u;
        if (f((c = c.filter((e) => e.id !== t)))) {
            (c = []), (u = null);
            return;
        }
        i && (u = c[Math.min(n, c.length - 1)].id);
    },
    CHANNEL_TABS_SET_ACTIVE: function (e) {
        let { tabId: t } = e;
        if (u === t || null == c.find((e) => e.id === t)) return !1;
        u = t;
    },
    CHANNEL_TABS_MOVE: function (e) {
        let { tabId: t, toIndex: n } = e,
            i = c.findIndex((e) => e.id === t),
            r = Math.max(0, Math.min(n, c.length - 1));
        if (-1 === i || i === r) return !1;
        let a = [...c],
            [s] = a.splice(i, 1);
        a.splice(r, 0, s), (c = a);
    },
    CHANNEL_TABS_SET_PINNED: function (e) {
        let { tabId: t, pinned: n } = e,
            i = c.find((e) => e.id === t);
        if (null == i || i.pinned === n) return !1;
        c = c.map((e) => (e.id === t ? { ...e, pinned: n } : e));
    },
    CHANNEL_TABS_BACK: function () {
        return p(-1);
    },
    CHANNEL_TABS_FORWARD: function () {
        return p(1);
    },
    CHANNEL_TABS_SET_ENABLED: function (e) {
        let { enabled: t } = e;
        if (E === t) return !1;
        if (!(E = t)) {
            (c = []), (u = null);
            return;
        }
        !(function () {
            if (!A() || c.length > 0) return;
            let e = s.Ay.getCurrentlySelectedChannelId();
            if (null != e && !(0, d.jq)(e)) {
                let t = h({ kind: "channel", channelId: e, guildId: l.A.getGuildId() ?? null });
                (c = [t]), (u = t.id);
            }
        })();
    },
    CHANNEL_TABS_NAVIGATE_ROUTE: function (e) {
        let { routePath: t, routeLabel: n } = e;
        if (!A() || 0 === c.length || null == u) return !1;
        let i = c.find((e) => e.id === u);
        if (null == i || ("route" === i.kind && i.routePath === t)) return !1;
        let r = { kind: "route", routePath: t, routeLabel: n };
        if (i.pinned) {
            if (c.length >= 25) return !1;
            let e = h(r);
            return (c = [...c, e]), void (u = e.id);
        }
        c = c.map((e) => {
            if (e.id !== u) return e;
            let t = [...e.entries.slice(0, e.index + 1), r];
            return I(e, r, t, t.length - 1);
        });
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e;
        if (!A() || null == t || (0, d.jq)(t)) return !1;
        let i = { kind: "channel", channelId: t, guildId: n ?? null };
        if (0 === c.length) {
            let e = h(i);
            (c = [e]), (u = e.id);
            return;
        }
        if (null == u) return !1;
        let r = c.find((e) => e.id === u);
        if (null == r || ("channel" === r.kind && r.channelId === t)) return !1;
        if (r.pinned) {
            if (c.length >= 25) return !1;
            let e = h(i);
            return (c = [...c, e]), void (u = e.id);
        }
        c = c.map((e) => {
            if (e.id !== u) return e;
            let t = [...e.entries.slice(0, e.index + 1), i];
            return I(e, i, t, t.length - 1);
        });
    },
    CHANNEL_DELETE: T,
    THREAD_DELETE: T,
    LOGOUT: function () {
        if (0 === c.length) return !1;
        (c = []), (u = null);
    },
});
