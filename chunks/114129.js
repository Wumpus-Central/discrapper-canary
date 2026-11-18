var i,
    r = n(73153),
    a = n(367513),
    s = n(149468),
    l = n(5180),
    o = n(976860),
    d = n(378570),
    c = n(734057),
    u = n(309010),
    _ = n(20517),
    E = n(931519),
    A = n(652215);
function f(e, t) {
    let { openVoiceChat: n = !0, transitionExtras: i } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = c.A.getChannel(e);
    (n && null != r && r.isGuildVocal() && a.A.updateChatOpen(e, !0),
        null != t ? (0, o.pX)(A.BVt.CHANNEL(t, e), { openChannel: !0, ...i }) : (0, d.iN)(e, i));
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    "route" === e.kind ? (0, o.pX)(e.routePath, t.transitionExtras) : f(e.channelId, e.guildId, t);
}
function I(e) {
    let t = E.A.getTabs();
    return {
        tab_kind: e.kind,
        tab_route: "route" === e.kind ? (0, _.nd)(e.routePath) : null,
        channel_id: "channel" === e.kind ? e.channelId : null,
        guild_id: "channel" !== e.kind || (0, l.ai)(e.guildId) ? null : e.guildId,
        tab_count: t.length,
        pinned_tab_count: t.filter((e) => e.pinned).length,
    };
}
function p(e, t) {
    let { method: n, isNewTab: i, focused: r, newTabPickerSelection: a = null } = t,
        l = E.A.getTabs(),
        o = { friends: 0, shop: 0, quests: 0, nitro: 0, conjure: 0, other: 0 };
    for (let e of l) "route" === e.kind && o[(0, _.nd)(e.routePath)]++;
    s.Ay.trackWithMetadata(A.HAw.CHANNEL_TAB_OPENED, {
        ...I(e),
        method: n,
        is_new_tab: i,
        focused: r,
        tab_index: l.findIndex((t) => t.id === e.id),
        is_pinned: e.pinned,
        friends_tab_count: o.friends,
        shop_tab_count: o.shop,
        quests_tab_count: o.quests,
        nitro_tab_count: o.nitro,
        conjure_tab_count: o.conjure,
        other_page_tab_count: o.other,
        new_tab_section: a?.section ?? null,
        new_tab_result_index: a?.resultIndex ?? null,
    });
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == E.A.getActiveTab()) return (h(e.location), null);
    let i = E.A.getTabs().length;
    r.h.dispatch(e);
    let a = E.A.getTabs();
    if (a.length <= i) return null;
    let s = a[a.length - 1];
    return (p(s, { method: t, isNewTab: !0, focused: E.A.getActiveTabId() === s.id, newTabPickerSelection: n }), s);
}
var g = (((i = {}).Passthrough = "passthrough"), (i.Noop = "noop"), (i.Navigated = "navigated"), i);
function T(e) {
    let t;
    if (!E.A.isEnabled()) return "passthrough";
    let n = E.A.getActiveTab();
    if (null == n || ("channel" === n.kind && u.Ay.getCurrentlySelectedChannelId() !== n.channelId))
        return "passthrough";
    let i = n.index + e;
    if (i < 0 || i >= n.entries.length) return "noop";
    let a = n.entries[i];
    if ("route" === a.kind) t = () => (0, o.pX)(a.routePath);
    else if (null != c.A.getChannel(a.channelId)) t = () => f(a.channelId, a.guildId);
    else {
        if (null == a.guildId) return "noop";
        let { guildId: e, channelId: n } = a;
        t = () => (0, o.pX)(A.BVt.CHANNEL(e, n));
    }
    return (r.h.dispatch({ type: -1 === e ? "CHANNEL_TABS_BACK" : "CHANNEL_TABS_FORWARD" }), t(), "navigated");
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = E.A.getTabs().find((t) => t.id === e);
    if (null != i) {
        if (E.A.getActiveTabId() === e) {
            if ("channel" !== i.kind) return;
            u.Ay.getCurrentlySelectedChannelId() !== i.channelId && f(i.channelId, i.guildId);
            return;
        }
        (r.h.dispatch({ type: "CHANNEL_TABS_SET_ACTIVE", tabId: i.id }),
            p(i, { method: t, isNewTab: !1, focused: !0 }),
            h(i, n));
    }
}
function N(e, t) {
    s.Ay.trackWithMetadata(A.HAw.CHANNEL_TAB_PIN_TOGGLED, { ...I(e), source: t, pinned: e.pinned });
}
n.d(
    t,
    {},
    {
        Aq: function (e, t) {
            let n = E.A.getTabs().findIndex((t) => t.id === e);
            r.h.dispatch({ type: "CHANNEL_TABS_MOVE", tabId: e, toIndex: t });
            let i = E.A.getTabs(),
                a = i.findIndex((t) => t.id === e);
            -1 !== n &&
                -1 !== a &&
                a !== n &&
                s.Ay.trackWithMetadata(A.HAw.CHANNEL_TAB_REORDERED, {
                    ...I(i[a]),
                    from_index: n,
                    to_index: a,
                    is_pinned: i[a].pinned,
                });
        },
        Bd: function (e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.A.getActiveTabId();
            m(
                {
                    type: "CHANNEL_TABS_OPEN",
                    location: { kind: "channel", channelId: e, guildId: t },
                    background: !0,
                    sourceTabId: i,
                },
                n,
            );
        },
        D5: function (e, t, n) {
            let { sourceTabId: i = E.A.getActiveTabId(), newTabPickerSelection: r = null } =
                arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            null !=
                m(
                    {
                        type: "CHANNEL_TABS_OPEN",
                        location: { kind: "channel", channelId: e, guildId: t },
                        sourceTabId: i,
                    },
                    n,
                    r,
                ) &&
                u.Ay.getCurrentlySelectedChannelId() !== e &&
                f(e, t);
        },
        FP: p,
        KV: function (e, t, n) {
            if (!E.A.isEnabled()) return !1;
            let i = E.A.getActiveTab();
            if (i?.kind === "channel" && i.channelId === e) return !1;
            let r = E.A.getTabs().find((t) => "channel" === t.kind && t.channelId === e);
            return null != r && (S(r.id, t, { openVoiceChat: !1, transitionExtras: n }), !0);
        },
        RL: function (e, t, n) {
            let i = E.A.getTabs().find((t) => t.id === e)?.pinned;
            r.h.dispatch({ type: "CHANNEL_TABS_SET_PINNED", tabId: e, pinned: t });
            let a = E.A.getTabs().find((t) => t.id === e);
            null != a && i !== a.pinned && N(a, n);
        },
        TC: function (e) {
            let t = E.A.getTabs();
            if (t.length <= 1) return;
            let n = t.findIndex((e) => e.id === E.A.getActiveTabId());
            if (-1 === n) return;
            let i = (n + e + t.length) % t.length;
            S(t[i].id, "keyboard_cycle");
        },
        ZD: S,
        _U: function (e, t) {
            let n = E.A.getActiveTabId();
            r.h.dispatch({ type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath: e, routeLabel: t });
            let i = E.A.getActiveTab();
            null != n && null != i && i.id !== n && p(i, { method: "page_navigation", isNewTab: !0, focused: !0 });
        },
        a2: function () {
            return T(-1);
        },
        bi: N,
        f5: function (e, t) {
            let n = E.A.getTabs().find((t) => t.id === e);
            if (null == n) return;
            let i = E.A.getActiveTabId() === e;
            r.h.dispatch({ type: "CHANNEL_TABS_CLOSE", tabId: e });
            let a = !E.A.getTabs().some((t) => t.id === e);
            if (
                (a &&
                    s.Ay.trackWithMetadata(A.HAw.CHANNEL_TAB_CLOSED, {
                        ...I(n),
                        source: t,
                        was_active: i,
                        was_pinned: n.pinned,
                    }),
                !i)
            )
                return;
            let l = E.A.getActiveTab();
            null != l && (a && p(l, { method: "close", isNewTab: !1, focused: !0 }), h(l));
        },
        kx: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return null != m({ type: "CHANNEL_TABS_OPEN", location: e, sourceTabId: null }, t, n);
        },
        l7: function (e) {
            null != m({ type: "CHANNEL_TABS_OPEN", location: (0, _.C2)() }, e) &&
                (0, o.JK)().location.pathname !== A.BVt.FRIENDS &&
                (0, o.pX)(A.BVt.FRIENDS);
        },
        lj: function (e) {
            r.h.dispatch({ type: "CHANNEL_TABS_SET_ENABLED", enabled: e });
        },
        oZ: function (e) {
            E.A.isEnabled() && c.A.getChannel(e)?.isGuildVocal() === !0 && a.A.updateChatOpen(e, !1);
        },
        qu: function () {
            return T(1);
        },
        ug: g,
    },
);
