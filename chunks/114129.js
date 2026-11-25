var i,
    r = n(73153),
    a = n(367513),
    s = n(149468),
    l = n(5180),
    o = n(976860),
    d = n(378570),
    c = n(734057),
    u = n(218461),
    _ = n(994500),
    E = n(309010),
    A = n(741961),
    f = n(543465),
    h = n(287809),
    I = n(20517),
    p = n(442325),
    m = n(858760),
    g = n(652215);
function T(e, t) {
    let { openVoiceChat: n = !0, transitionExtras: i } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = c.A.getChannel(e);
    (n && null != r && r.isGuildVocal() && a.A.updateChatOpen(e, !0),
        null != t ? (0, o.pX)(g.BVt.CHANNEL(t, e), { openChannel: !0, ...i }) : (0, d.iN)(e, i));
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    "route" === e.kind ? (0, o.pX)(e.routePath, t.transitionExtras) : T(e.channelId, e.guildId, t);
}
function N(e) {
    let t = p.A.getTabs();
    return {
        tab_kind: e.kind,
        tab_route: "route" === e.kind ? (0, I.nd)(e.routePath) : null,
        channel_id: "channel" === e.kind ? e.channelId : null,
        guild_id: "channel" !== e.kind || (0, l.ai)(e.guildId) ? null : e.guildId,
        tab_count: t.length,
        pinned_tab_count: t.filter((e) => e.pinned).length,
    };
}
function C(e, t) {
    let { method: n, isNewTab: i, focused: r, newTabPickerSelection: a = null } = t,
        l = p.A.getTabs(),
        o = { friends: 0, shop: 0, quests: 0, nitro: 0, conjure: 0, other: 0 };
    for (let e of l) "route" === e.kind && o[(0, I.nd)(e.routePath)]++;
    s.Ay.trackWithMetadata(g.HAw.CHANNEL_TAB_OPENED, {
        ...N(e),
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
                  if ("channel" !== e.kind) return { mention_count: 0, had_unread_dot: !1, had_typing_indicator: !1 };
                  let t = u.Ay.getMentionCount(e.channelId),
                      n = f.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId),
                      i =
                          0 === t &&
                          (function (e) {
                              let t = h.default.getCurrentUser()?.id;
                              for (let n in A.A.getTypingUsers(e)) {
                                  let e = h.default.getUser(n);
                                  if (null != e && e.id !== t && !_.A.isBlockedOrIgnored(e.id)) return !0;
                              }
                              return !1;
                          })(e.channelId);
                  return {
                      mention_count: t,
                      had_unread_dot: 0 === t && !i && !n && u.Ay.hasUnread(e.channelId),
                      had_typing_indicator: i,
                  };
              })(e)
            : { mention_count: null, had_unread_dot: null, had_typing_indicator: null }),
    });
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == p.A.getActiveTab()) return (S(e.location), null);
    let i = p.A.getTabs().length;
    r.h.dispatch(e);
    let a = p.A.getTabs();
    if (a.length <= i) return null;
    let s = a[a.length - 1];
    return (C(s, { method: t, isNewTab: !0, focused: p.A.getActiveTabId() === s.id, newTabPickerSelection: n }), s);
}
var R = (((i = {}).Passthrough = "passthrough"), (i.Noop = "noop"), (i.Navigated = "navigated"), i);
function L(e) {
    let t;
    if (!(0, m.Z6)("navigateActiveTabHistory")) return "passthrough";
    let n = p.A.getActiveTab();
    if (null == n || ("channel" === n.kind && E.Ay.getCurrentlySelectedChannelId() !== n.channelId))
        return "passthrough";
    let i = n.index + e;
    if (i < 0 || i >= n.entries.length) return "noop";
    let a = n.entries[i];
    if ("route" === a.kind) t = () => (0, o.pX)(a.routePath);
    else if (null != c.A.getChannel(a.channelId)) t = () => T(a.channelId, a.guildId);
    else {
        if (null == a.guildId) return "noop";
        let { guildId: e, channelId: n } = a;
        t = () => (0, o.pX)(g.BVt.CHANNEL(e, n));
    }
    return (r.h.dispatch({ type: -1 === e ? "CHANNEL_TABS_BACK" : "CHANNEL_TABS_FORWARD" }), t(), "navigated");
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = p.A.getTabs().find((t) => t.id === e);
    if (null != i) {
        if (p.A.getActiveTabId() === e) {
            if ("channel" !== i.kind) return;
            E.Ay.getCurrentlySelectedChannelId() !== i.channelId && T(i.channelId, i.guildId);
            return;
        }
        (r.h.dispatch({ type: "CHANNEL_TABS_SET_ACTIVE", tabId: i.id }),
            C(i, { method: t, isNewTab: !1, focused: !0 }),
            S(i, n));
    }
}
function D(e, t) {
    s.Ay.trackWithMetadata(g.HAw.CHANNEL_TAB_PIN_TOGGLED, { ...N(e), source: t, pinned: e.pinned });
}
n.d(
    t,
    {},
    {
        Aq: function (e, t) {
            let n = p.A.getTabs().findIndex((t) => t.id === e);
            r.h.dispatch({ type: "CHANNEL_TABS_MOVE", tabId: e, toIndex: t });
            let i = p.A.getTabs(),
                a = i.findIndex((t) => t.id === e);
            -1 !== n &&
                -1 !== a &&
                a !== n &&
                s.Ay.trackWithMetadata(g.HAw.CHANNEL_TAB_REORDERED, {
                    ...N(i[a]),
                    from_index: n,
                    to_index: a,
                    is_pinned: i[a].pinned,
                });
        },
        Bd: function (e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p.A.getActiveTabId();
            O(
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
            let { sourceTabId: i = p.A.getActiveTabId(), newTabPickerSelection: r = null } =
                arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            null !=
                O(
                    {
                        type: "CHANNEL_TABS_OPEN",
                        location: { kind: "channel", channelId: e, guildId: t },
                        sourceTabId: i,
                    },
                    n,
                    r,
                ) &&
                E.Ay.getCurrentlySelectedChannelId() !== e &&
                T(e, t);
        },
        FP: C,
        KV: function (e, t, n) {
            if (!(0, m.Z6)("switchToOpenChannelTab")) return !1;
            let i = p.A.getActiveTab();
            if (i?.kind === "channel" && i.channelId === e) return !1;
            let r = p.A.getTabs().find((t) => "channel" === t.kind && t.channelId === e);
            return null != r && (y(r.id, t, { openVoiceChat: !1, transitionExtras: n }), !0);
        },
        Qg: function (e, t) {
            let n = p.A.getOtherTabsToClose(e, t);
            if (0 === n.length) return;
            let i = p.A.getActiveTabId();
            for (let a of (r.h.dispatch({ type: "CHANNEL_TABS_CLOSE_OTHERS", tabId: e, mode: t }), n))
                s.Ay.trackWithMetadata(g.HAw.CHANNEL_TAB_CLOSED, {
                    ...N(a),
                    source: "all" === t ? "close_others" : "close_right",
                    was_active: a.id === i,
                    was_pinned: a.pinned,
                    closed_count: n.length,
                });
            let a = p.A.getActiveTab();
            null != a && a.id !== i && (C(a, { method: "close", isNewTab: !1, focused: !0 }), S(a));
        },
        RL: function (e, t, n) {
            let i = p.A.getTabs().find((t) => t.id === e)?.pinned;
            r.h.dispatch({ type: "CHANNEL_TABS_SET_PINNED", tabId: e, pinned: t });
            let a = p.A.getTabs().find((t) => t.id === e);
            null != a && i !== a.pinned && D(a, n);
        },
        TC: function (e) {
            let t = p.A.getTabs();
            if (t.length <= 1) return;
            let n = t.findIndex((e) => e.id === p.A.getActiveTabId());
            if (-1 === n) return;
            let i = (n + e + t.length) % t.length;
            y(t[i].id, "keyboard_cycle");
        },
        ZD: y,
        _U: function (e, t) {
            let n = p.A.getActiveTabId(),
                i = p.A.getTabs();
            r.h.dispatch({ type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath: e, routeLabel: t });
            let a = p.A.getActiveTab();
            null == n ||
                null == a ||
                i.some((e) => e.id === a.id) ||
                C(a, { method: "page_navigation", isNewTab: !0, focused: !0 });
        },
        a2: function () {
            return L(-1);
        },
        bi: D,
        f5: function (e, t) {
            let n = p.A.getTabs().find((t) => t.id === e);
            if (null == n) return;
            let i = p.A.getActiveTabId() === e;
            r.h.dispatch({ type: "CHANNEL_TABS_CLOSE", tabId: e });
            let a = !p.A.getTabs().some((t) => t.id === e);
            if (
                (a &&
                    s.Ay.trackWithMetadata(g.HAw.CHANNEL_TAB_CLOSED, {
                        ...N(n),
                        source: t,
                        was_active: i,
                        was_pinned: n.pinned,
                        closed_count: 1,
                    }),
                !i)
            )
                return;
            let l = p.A.getActiveTab();
            null != l && (a && C(l, { method: "close", isNewTab: !1, focused: !0 }), S(l));
        },
        kx: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return null != O({ type: "CHANNEL_TABS_OPEN", location: e, sourceTabId: null }, t, n);
        },
        l7: function (e) {
            null != O({ type: "CHANNEL_TABS_OPEN", location: (0, I.C2)() }, e) &&
                (0, o.JK)().location.pathname !== g.BVt.FRIENDS &&
                (0, o.pX)(g.BVt.FRIENDS);
        },
        oZ: function (e) {
            (0, m.Z6)("showCallViewOnJoin") && c.A.getChannel(e)?.isGuildVocal() === !0 && a.A.updateChatOpen(e, !1);
        },
        qu: function () {
            return L(1);
        },
        ug: R,
    },
);
