var i,
    r = n(73153),
    a = n(367513),
    s = n(149468),
    l = n(5180),
    o = n(463347),
    d = n(334465),
    c = n(976860),
    u = n(378570),
    _ = n(734057),
    E = n(309010),
    A = n(967198),
    f = n(442325),
    h = n(652215),
    I = n(746080);
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = _.A.getChannel(e);
    (null != i && i.isGuildVocal() && a.A.updateChatOpen(e, !n),
        null != t ? (0, c.pX)(h.BVt.CHANNEL(t, e), { openChannel: !0 }) : (0, u.iN)(e));
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    "route" === e.kind ? (0, c.pX)(e.routePath) : p(e.channelId, e.guildId, t);
}
function T(e) {
    let t = e.split(/[?#]/)[0];
    if (t === h.BVt.FRIENDS) return "friends";
    if (t === h.BVt.COLLECTIBLES_SHOP) return "shop";
    if (t === h.BVt.QUEST_HOME) return "quests";
    let n = h.BVt.CHANNEL(o.pv.guildId(), I.VV.CONJURE, ":projectId?");
    return null != (0, d.B)(t, { path: n, exact: !0 }) ? "conjure" : "other";
}
function g(e) {
    let t = f.A.getTabs();
    return {
        tab_kind: e.kind,
        tab_route: "route" === e.kind ? T(e.routePath) : null,
        channel_id: "channel" === e.kind ? e.channelId : null,
        guild_id: "channel" !== e.kind || (0, l.ai)(e.guildId) ? null : e.guildId,
        tab_count: t.length,
        pinned_tab_count: t.filter((e) => e.pinned).length,
    };
}
function S(e, t, n, i) {
    let r = f.A.getTabs(),
        a = { friends: 0, shop: 0, quests: 0, conjure: 0, other: 0 };
    for (let e of r) "route" === e.kind && a[T(e.routePath)]++;
    s.Ay.trackWithMetadata(h.HAw.CHANNEL_TAB_OPENED, {
        ...g(e),
        method: t,
        is_new_tab: n,
        focused: i,
        tab_index: r.findIndex((t) => t.id === e.id),
        is_pinned: e.pinned,
        friends_tab_count: a.friends,
        shop_tab_count: a.shop,
        quests_tab_count: a.quests,
        conjure_tab_count: a.conjure,
        other_page_tab_count: a.other,
    });
}
function N(e, t) {
    let n = f.A.getTabs().length;
    r.h.dispatch({ type: "CHANNEL_TABS_OPEN", ...e });
    let i = f.A.getTabs();
    if (i.length > n) {
        let e = i[i.length - 1];
        S(e, t, !0, f.A.getActiveTabId() === e.id);
    }
}
function C(e, t, n) {
    let i = E.Ay.getCurrentlySelectedChannelId();
    0 === f.A.getTabs().length && (null == i || (0, I.jq)(i))
        ? p(e, t)
        : f.A.isAtMaxTabs() ||
          (N({ kind: "channel", channelId: e, guildId: t, active: !0 }, n),
          E.Ay.getCurrentlySelectedChannelId() !== e && p(e, t));
}
var O = (((i = {}).Passthrough = "passthrough"), (i.Noop = "noop"), (i.Navigated = "navigated"), i);
function R(e) {
    if (!f.A.isEnabled()) return "passthrough";
    let t = f.A.getActiveTab();
    if (null == t || ("channel" === t.kind && E.Ay.getCurrentlySelectedChannelId() !== t.channelId))
        return "passthrough";
    let n = t.index + e;
    if (n < 0 || n >= t.entries.length) return "noop";
    let i = t.entries[n];
    return "route" === i.kind
        ? (r.h.dispatch({ type: -1 === e ? "CHANNEL_TABS_BACK" : "CHANNEL_TABS_FORWARD" }),
          (0, c.pX)(i.routePath),
          "navigated")
        : null == _.A.getChannel(i.channelId)
          ? null != i.guildId
              ? (r.h.dispatch({ type: -1 === e ? "CHANNEL_TABS_BACK" : "CHANNEL_TABS_FORWARD" }),
                (0, c.pX)(h.BVt.CHANNEL(i.guildId, i.channelId)),
                "navigated")
              : "noop"
          : (r.h.dispatch({ type: -1 === e ? "CHANNEL_TABS_BACK" : "CHANNEL_TABS_FORWARD" }),
            p(i.channelId, i.guildId),
            "navigated");
}
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = f.A.getTabs().find((t) => t.id === e);
    if (null != i) {
        if (f.A.getActiveTabId() === e) {
            if ("channel" !== i.kind) return;
            E.Ay.getCurrentlySelectedChannelId() !== i.channelId
                ? p(i.channelId, i.guildId, n)
                : n && _.A.getChannel(i.channelId)?.isGuildVocal() === !0 && a.A.updateChatOpen(i.channelId, !1);
            return;
        }
        (r.h.dispatch({ type: "CHANNEL_TABS_SET_ACTIVE", tabId: e }), S(i, t, !1, !0), m(i, n));
    }
}
n.d(
    t,
    {},
    {
        Aq: function (e, t) {
            let n = f.A.getTabs().findIndex((t) => t.id === e);
            r.h.dispatch({ type: "CHANNEL_TABS_MOVE", tabId: e, toIndex: t });
            let i = f.A.getTabs(),
                a = i.findIndex((t) => t.id === e);
            -1 !== n &&
                -1 !== a &&
                a !== n &&
                s.Ay.trackWithMetadata(h.HAw.CHANNEL_TAB_REORDERED, {
                    ...g(i[a]),
                    from_index: n,
                    to_index: a,
                    is_pinned: i[a].pinned,
                });
        },
        Bd: function (e, t, n) {
            let i = E.Ay.getCurrentlySelectedChannelId();
            0 === f.A.getTabs().length && (null == i || (0, I.jq)(i))
                ? p(e, t)
                : N({ kind: "channel", channelId: e, guildId: t }, n);
        },
        D5: C,
        FP: S,
        JC: function (e) {
            let t = f.A.getActiveTab();
            if (null != t && "route" === t.kind) {
                if (f.A.isAtMaxTabs()) return;
                N({ kind: "route", routePath: t.routePath, routeLabel: t.routeLabel, active: !0 }, e);
                return;
            }
            let n = t?.channelId ?? E.Ay.getCurrentlySelectedChannelId();
            null == n || C(n, t?.guildId ?? A.A.getGuildId() ?? null, e);
        },
        RL: function (e, t, n) {
            let i = f.A.getTabs().find((t) => t.id === e)?.pinned;
            r.h.dispatch({ type: "CHANNEL_TABS_SET_PINNED", tabId: e, pinned: t });
            let a = f.A.getTabs().find((t) => t.id === e);
            null != a &&
                i !== a.pinned &&
                s.Ay.trackWithMetadata(h.HAw.CHANNEL_TAB_PIN_TOGGLED, { ...g(a), source: n, pinned: a.pinned });
        },
        TC: function (e) {
            let t = f.A.getTabs();
            if (t.length <= 1) return;
            let n = t.findIndex((e) => e.id === f.A.getActiveTabId());
            if (-1 === n) return;
            let i = (n + e + t.length) % t.length;
            L(t[i].id, "keyboard_cycle");
        },
        ZD: L,
        _U: function (e, t) {
            let n = f.A.getActiveTabId(),
                i = new Set(f.A.getTabs().map((e) => e.id));
            r.h.dispatch({ type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath: e, routeLabel: t });
            let a = f.A.getActiveTab();
            null != n && null != a && a.id !== n && S(a, "page_navigation", !i.has(a.id), !0);
        },
        a2: function () {
            return R(-1);
        },
        f5: function (e, t) {
            let n = f.A.getTabs().find((t) => t.id === e);
            if (null == n) return;
            let i = f.A.getActiveTabId() === e;
            r.h.dispatch({ type: "CHANNEL_TABS_CLOSE", tabId: e });
            let a = !f.A.getTabs().some((t) => t.id === e);
            if (
                (a &&
                    s.Ay.trackWithMetadata(h.HAw.CHANNEL_TAB_CLOSED, {
                        ...g(n),
                        source: t,
                        was_active: i,
                        was_pinned: n.pinned,
                    }),
                !i)
            )
                return;
            let l = f.A.getActiveTab();
            null != l && (a && S(l, "close", !1, !0), m(l));
        },
        lj: function (e) {
            r.h.dispatch({ type: "CHANNEL_TABS_SET_ENABLED", enabled: e });
        },
        qu: function () {
            return R(1);
        },
        ug: O,
    },
);
