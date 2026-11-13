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
    A = n(931519),
    f = n(652215),
    h = n(746080);
function I(e, t) {
    let n = _.A.getChannel(e);
    (null != n && n.isGuildVocal() && a.A.updateChatOpen(e, !0),
        null != t ? (0, c.pX)(f.BVt.CHANNEL(t, e), { openChannel: !0 }) : (0, u.iN)(e));
}
function p(e) {
    "route" === e.kind ? (0, c.pX)(e.routePath) : I(e.channelId, e.guildId);
}
function m(e) {
    let t = e.split(/[?#]/)[0];
    if (t === f.BVt.FRIENDS) return "friends";
    if (t === f.BVt.COLLECTIBLES_SHOP) return "shop";
    if (t === f.BVt.QUEST_HOME) return "quests";
    if (t === f.BVt.APPLICATION_STORE) return "nitro";
    let n = f.BVt.CHANNEL(o.pv.guildId(), h.VV.CONJURE, ":projectId?");
    return null != (0, d.B)(t, { path: n, exact: !0 }) ? "conjure" : "other";
}
function g(e) {
    let t = A.A.getTabs();
    return {
        tab_kind: e.kind,
        tab_route: "route" === e.kind ? m(e.routePath) : null,
        channel_id: "channel" === e.kind ? e.channelId : null,
        guild_id: "channel" !== e.kind || (0, l.ai)(e.guildId) ? null : e.guildId,
        tab_count: t.length,
        pinned_tab_count: t.filter((e) => e.pinned).length,
    };
}
function T(e, t, n, i) {
    let r = A.A.getTabs(),
        a = { friends: 0, shop: 0, quests: 0, nitro: 0, conjure: 0, other: 0 };
    for (let e of r) "route" === e.kind && a[m(e.routePath)]++;
    s.Ay.trackWithMetadata(f.HAw.CHANNEL_TAB_OPENED, {
        ...g(e),
        method: t,
        is_new_tab: n,
        focused: i,
        tab_index: r.findIndex((t) => t.id === e.id),
        is_pinned: e.pinned,
        friends_tab_count: a.friends,
        shop_tab_count: a.shop,
        quests_tab_count: a.quests,
        nitro_tab_count: a.nitro,
        conjure_tab_count: a.conjure,
        other_page_tab_count: a.other,
    });
}
function S(e, t) {
    let n = A.A.getTabs().length;
    r.h.dispatch({ type: "CHANNEL_TABS_OPEN", ...e });
    let i = A.A.getTabs();
    if (i.length <= n) return null;
    let a = i[i.length - 1];
    return (T(a, t, !0, A.A.getActiveTabId() === a.id), a);
}
var N = (((i = {}).Passthrough = "passthrough"), (i.Noop = "noop"), (i.Navigated = "navigated"), i);
function C(e) {
    if (!A.A.isEnabled()) return "passthrough";
    let t = A.A.getActiveTab();
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
                (0, c.pX)(f.BVt.CHANNEL(i.guildId, i.channelId)),
                "navigated")
              : "noop"
          : (r.h.dispatch({ type: -1 === e ? "CHANNEL_TABS_BACK" : "CHANNEL_TABS_FORWARD" }),
            I(i.channelId, i.guildId),
            "navigated");
}
function O(e, t) {
    let n = A.A.getTabs().find((t) => t.id === e);
    if (null != n) {
        if (A.A.getActiveTabId() === e) {
            if ("channel" !== n.kind) return;
            E.Ay.getCurrentlySelectedChannelId() !== n.channelId && I(n.channelId, n.guildId);
            return;
        }
        (r.h.dispatch({ type: "CHANNEL_TABS_SET_ACTIVE", tabId: n.id }), T(n, t, !1, !0), p(n));
    }
}
function R(e, t) {
    s.Ay.trackWithMetadata(f.HAw.CHANNEL_TAB_PIN_TOGGLED, { ...g(e), source: t, pinned: e.pinned });
}
n.d(
    t,
    {},
    {
        Aq: function (e, t) {
            let n = A.A.getTabs().findIndex((t) => t.id === e);
            r.h.dispatch({ type: "CHANNEL_TABS_MOVE", tabId: e, toIndex: t });
            let i = A.A.getTabs(),
                a = i.findIndex((t) => t.id === e);
            -1 !== n &&
                -1 !== a &&
                a !== n &&
                s.Ay.trackWithMetadata(f.HAw.CHANNEL_TAB_REORDERED, {
                    ...g(i[a]),
                    from_index: n,
                    to_index: a,
                    is_pinned: i[a].pinned,
                });
        },
        Bd: function (e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : A.A.getActiveTabId();
            null == A.A.getActiveTab() ? I(e, t) : S({ kind: "channel", channelId: e, guildId: t, sourceTabId: i }, n);
        },
        D5: function (e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : A.A.getActiveTabId();
            null == A.A.getActiveTab()
                ? I(e, t)
                : null != S({ kind: "channel", channelId: e, guildId: t, active: !0, sourceTabId: i }, n) &&
                  E.Ay.getCurrentlySelectedChannelId() !== e &&
                  I(e, t);
        },
        FP: T,
        Qo: function (e) {
            let t = A.A.getActiveTab();
            return null == t ? null : (S({ ...t.entries[t.index], active: !0, fresh: !0 }, e)?.id ?? null);
        },
        RL: function (e, t, n) {
            let i = A.A.getTabs().find((t) => t.id === e)?.pinned;
            r.h.dispatch({ type: "CHANNEL_TABS_SET_PINNED", tabId: e, pinned: t });
            let a = A.A.getTabs().find((t) => t.id === e);
            null != a && i !== a.pinned && R(a, n);
        },
        TC: function (e) {
            let t = A.A.getTabs();
            if (t.length <= 1) return;
            let n = t.findIndex((e) => e.id === A.A.getActiveTabId());
            if (-1 === n) return;
            let i = (n + e + t.length) % t.length;
            O(t[i].id, "keyboard_cycle");
        },
        ZD: O,
        _U: function (e, t) {
            let n = A.A.getActiveTabId();
            r.h.dispatch({ type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath: e, routeLabel: t });
            let i = A.A.getActiveTab();
            null != n && null != i && i.id !== n && T(i, "page_navigation", !0, !0);
        },
        a2: function () {
            return C(-1);
        },
        bi: R,
        f5: function (e, t) {
            let n = A.A.getTabs().find((t) => t.id === e);
            if (null == n) return;
            let i = A.A.getActiveTabId() === e;
            r.h.dispatch({ type: "CHANNEL_TABS_CLOSE", tabId: e });
            let a = !A.A.getTabs().some((t) => t.id === e);
            if (
                (a &&
                    s.Ay.trackWithMetadata(f.HAw.CHANNEL_TAB_CLOSED, {
                        ...g(n),
                        source: t,
                        was_active: i,
                        was_pinned: n.pinned,
                    }),
                !i)
            )
                return;
            let l = A.A.getActiveTab();
            null != l && (a && T(l, "close", !1, !0), p(l));
        },
        lj: function (e) {
            r.h.dispatch({ type: "CHANNEL_TABS_SET_ENABLED", enabled: e });
        },
        oZ: function (e) {
            A.A.isEnabled() && _.A.getChannel(e)?.isGuildVocal() === !0 && a.A.updateChatOpen(e, !1);
        },
        qu: function () {
            return C(1);
        },
        ug: N,
    },
);
