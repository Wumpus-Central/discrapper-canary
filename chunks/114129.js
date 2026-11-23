var i,
    r = n(73153),
    a = n(367513),
    s = n(149468),
    l = n(5180),
    o = n(976860),
    d = n(378570),
    c = n(734057),
    u = n(218461),
    _ = n(309010),
    E = n(543465),
    A = n(20517),
    f = n(442325),
    h = n(652215);
function I(e, t) {
    let { openVoiceChat: n = !0, transitionExtras: i } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = c.A.getChannel(e);
    (n && null != r && r.isGuildVocal() && a.A.updateChatOpen(e, !0),
        null != t ? (0, o.pX)(h.BVt.CHANNEL(t, e), { openChannel: !0, ...i }) : (0, d.iN)(e, i));
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    "route" === e.kind ? (0, o.pX)(e.routePath, t.transitionExtras) : I(e.channelId, e.guildId, t);
}
function m(e) {
    let t = f.A.getTabs();
    return {
        tab_kind: e.kind,
        tab_route: "route" === e.kind ? (0, A.nd)(e.routePath) : null,
        channel_id: "channel" === e.kind ? e.channelId : null,
        guild_id: "channel" !== e.kind || (0, l.ai)(e.guildId) ? null : e.guildId,
        tab_count: t.length,
        pinned_tab_count: t.filter((e) => e.pinned).length,
    };
}
function g(e, t) {
    let { method: n, isNewTab: i, focused: r, newTabPickerSelection: a = null } = t,
        l = f.A.getTabs(),
        o = { friends: 0, shop: 0, quests: 0, nitro: 0, conjure: 0, other: 0 };
    for (let e of l) "route" === e.kind && o[(0, A.nd)(e.routePath)]++;
    s.Ay.trackWithMetadata(h.HAw.CHANNEL_TAB_OPENED, {
        ...m(e),
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
        ...("tab_click" === n
            ? (function (e) {
                  if ("channel" !== e.kind) return { mention_count: 0, had_unread_dot: !1 };
                  let t = u.Ay.getMentionCount(e.channelId),
                      n = E.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId);
                  return { mention_count: t, had_unread_dot: 0 === t && !n && u.Ay.hasUnread(e.channelId) };
              })(e)
            : { mention_count: null, had_unread_dot: null }),
    });
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == f.A.getActiveTab()) return (p(e.location), null);
    let i = f.A.getTabs().length;
    r.h.dispatch(e);
    let a = f.A.getTabs();
    if (a.length <= i) return null;
    let s = a[a.length - 1];
    return (g(s, { method: t, isNewTab: !0, focused: f.A.getActiveTabId() === s.id, newTabPickerSelection: n }), s);
}
var S = (((i = {}).Passthrough = "passthrough"), (i.Noop = "noop"), (i.Navigated = "navigated"), i);
function N(e) {
    let t;
    if (!f.A.isEnabled()) return "passthrough";
    let n = f.A.getActiveTab();
    if (null == n || ("channel" === n.kind && _.Ay.getCurrentlySelectedChannelId() !== n.channelId))
        return "passthrough";
    let i = n.index + e;
    if (i < 0 || i >= n.entries.length) return "noop";
    let a = n.entries[i];
    if ("route" === a.kind) t = () => (0, o.pX)(a.routePath);
    else if (null != c.A.getChannel(a.channelId)) t = () => I(a.channelId, a.guildId);
    else {
        if (null == a.guildId) return "noop";
        let { guildId: e, channelId: n } = a;
        t = () => (0, o.pX)(h.BVt.CHANNEL(e, n));
    }
    return (r.h.dispatch({ type: -1 === e ? "CHANNEL_TABS_BACK" : "CHANNEL_TABS_FORWARD" }), t(), "navigated");
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = f.A.getTabs().find((t) => t.id === e);
    if (null != i) {
        if (f.A.getActiveTabId() === e) {
            if ("channel" !== i.kind) return;
            _.Ay.getCurrentlySelectedChannelId() !== i.channelId && I(i.channelId, i.guildId);
            return;
        }
        (r.h.dispatch({ type: "CHANNEL_TABS_SET_ACTIVE", tabId: i.id }),
            g(i, { method: t, isNewTab: !1, focused: !0 }),
            p(i, n));
    }
}
function O(e, t) {
    s.Ay.trackWithMetadata(h.HAw.CHANNEL_TAB_PIN_TOGGLED, { ...m(e), source: t, pinned: e.pinned });
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
                    ...m(i[a]),
                    from_index: n,
                    to_index: a,
                    is_pinned: i[a].pinned,
                });
        },
        Bd: function (e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.A.getActiveTabId();
            T(
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
            let { sourceTabId: i = f.A.getActiveTabId(), newTabPickerSelection: r = null } =
                arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            null !=
                T(
                    {
                        type: "CHANNEL_TABS_OPEN",
                        location: { kind: "channel", channelId: e, guildId: t },
                        sourceTabId: i,
                    },
                    n,
                    r,
                ) &&
                _.Ay.getCurrentlySelectedChannelId() !== e &&
                I(e, t);
        },
        FP: g,
        KV: function (e, t, n) {
            if (!f.A.isEnabled()) return !1;
            let i = f.A.getActiveTab();
            if (i?.kind === "channel" && i.channelId === e) return !1;
            let r = f.A.getTabs().find((t) => "channel" === t.kind && t.channelId === e);
            return null != r && (C(r.id, t, { openVoiceChat: !1, transitionExtras: n }), !0);
        },
        Qg: function (e, t) {
            let n = f.A.getOtherTabsToClose(e, t);
            if (0 === n.length) return;
            let i = f.A.getActiveTabId();
            for (let a of (r.h.dispatch({ type: "CHANNEL_TABS_CLOSE_OTHERS", tabId: e, mode: t }), n))
                s.Ay.trackWithMetadata(h.HAw.CHANNEL_TAB_CLOSED, {
                    ...m(a),
                    source: "all" === t ? "close_others" : "close_right",
                    was_active: a.id === i,
                    was_pinned: a.pinned,
                    closed_count: n.length,
                });
            let a = f.A.getActiveTab();
            null != a && a.id !== i && (g(a, { method: "close", isNewTab: !1, focused: !0 }), p(a));
        },
        RL: function (e, t, n) {
            let i = f.A.getTabs().find((t) => t.id === e)?.pinned;
            r.h.dispatch({ type: "CHANNEL_TABS_SET_PINNED", tabId: e, pinned: t });
            let a = f.A.getTabs().find((t) => t.id === e);
            null != a && i !== a.pinned && O(a, n);
        },
        TC: function (e) {
            let t = f.A.getTabs();
            if (t.length <= 1) return;
            let n = t.findIndex((e) => e.id === f.A.getActiveTabId());
            if (-1 === n) return;
            let i = (n + e + t.length) % t.length;
            C(t[i].id, "keyboard_cycle");
        },
        ZD: C,
        _U: function (e, t) {
            let n = f.A.getActiveTabId();
            r.h.dispatch({ type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath: e, routeLabel: t });
            let i = f.A.getActiveTab();
            null != n && null != i && i.id !== n && g(i, { method: "page_navigation", isNewTab: !0, focused: !0 });
        },
        a2: function () {
            return N(-1);
        },
        bi: O,
        f5: function (e, t) {
            let n = f.A.getTabs().find((t) => t.id === e);
            if (null == n) return;
            let i = f.A.getActiveTabId() === e;
            r.h.dispatch({ type: "CHANNEL_TABS_CLOSE", tabId: e });
            let a = !f.A.getTabs().some((t) => t.id === e);
            if (
                (a &&
                    s.Ay.trackWithMetadata(h.HAw.CHANNEL_TAB_CLOSED, {
                        ...m(n),
                        source: t,
                        was_active: i,
                        was_pinned: n.pinned,
                        closed_count: 1,
                    }),
                !i)
            )
                return;
            let l = f.A.getActiveTab();
            null != l && (a && g(l, { method: "close", isNewTab: !1, focused: !0 }), p(l));
        },
        kx: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return null != T({ type: "CHANNEL_TABS_OPEN", location: e, sourceTabId: null }, t, n);
        },
        l7: function (e) {
            null != T({ type: "CHANNEL_TABS_OPEN", location: (0, A.C2)() }, e) &&
                (0, o.JK)().location.pathname !== h.BVt.FRIENDS &&
                (0, o.pX)(h.BVt.FRIENDS);
        },
        oZ: function (e) {
            f.A.isEnabled() && c.A.getChannel(e)?.isGuildVocal() === !0 && a.A.updateChatOpen(e, !1);
        },
        qu: function () {
            return N(1);
        },
        ug: S,
    },
);
