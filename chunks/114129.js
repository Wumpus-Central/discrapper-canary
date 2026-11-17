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
    A = n(20517),
    f = n(931519),
    h = n(652215),
    I = n(746080);
function p(e, t) {
    let { openVoiceChat: n = !0, transitionExtras: i } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = _.A.getChannel(e);
    (n && null != r && r.isGuildVocal() && a.A.updateChatOpen(e, !0),
        null != t ? (0, c.pX)(h.BVt.CHANNEL(t, e), { openChannel: !0, ...i }) : (0, u.iN)(e, i));
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    "route" === e.kind ? (0, c.pX)(e.routePath, t.transitionExtras) : p(e.channelId, e.guildId, t);
}
function g(e) {
    let t = e.split(/[?#]/)[0];
    if (t === h.BVt.FRIENDS) return "friends";
    if (t === h.BVt.COLLECTIBLES_SHOP) return "shop";
    if (t === h.BVt.QUEST_HOME) return "quests";
    if (t === h.BVt.APPLICATION_STORE) return "nitro";
    let n = h.BVt.CHANNEL(o.pv.guildId(), I.VV.CONJURE, ":projectId?");
    return null != (0, d.B)(t, { path: n, exact: !0 }) ? "conjure" : "other";
}
function T(e) {
    let t = f.A.getTabs();
    return {
        tab_kind: e.kind,
        tab_route: "route" === e.kind ? g(e.routePath) : null,
        channel_id: "channel" === e.kind ? e.channelId : null,
        guild_id: "channel" !== e.kind || (0, l.ai)(e.guildId) ? null : e.guildId,
        tab_count: t.length,
        pinned_tab_count: t.filter((e) => e.pinned).length,
    };
}
function S(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        a = f.A.getTabs(),
        l = { friends: 0, shop: 0, quests: 0, nitro: 0, conjure: 0, other: 0 };
    for (let e of a) "route" === e.kind && l[g(e.routePath)]++;
    s.Ay.trackWithMetadata(h.HAw.CHANNEL_TAB_OPENED, {
        ...T(e),
        method: t,
        is_new_tab: n,
        focused: i,
        tab_index: a.findIndex((t) => t.id === e.id),
        is_pinned: e.pinned,
        friends_tab_count: l.friends,
        shop_tab_count: l.shop,
        quests_tab_count: l.quests,
        nitro_tab_count: l.nitro,
        conjure_tab_count: l.conjure,
        other_page_tab_count: l.other,
        new_tab_section: r?.section ?? null,
        new_tab_result_index: r?.resultIndex ?? null,
    });
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = f.A.getTabs().length;
    r.h.dispatch(e);
    let a = f.A.getTabs();
    if (a.length <= i) return null;
    let s = a[a.length - 1];
    return (S(s, t, !0, f.A.getActiveTabId() === s.id, n), s);
}
var C = (((i = {}).Passthrough = "passthrough"), (i.Noop = "noop"), (i.Navigated = "navigated"), i);
function O(e) {
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
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = f.A.getTabs().find((t) => t.id === e);
    if (null != i) {
        if (f.A.getActiveTabId() === e) {
            if ("channel" !== i.kind) return;
            E.Ay.getCurrentlySelectedChannelId() !== i.channelId && p(i.channelId, i.guildId);
            return;
        }
        (r.h.dispatch({ type: "CHANNEL_TABS_SET_ACTIVE", tabId: i.id }), S(i, t, !1, !0), m(i, n));
    }
}
function L(e, t) {
    s.Ay.trackWithMetadata(h.HAw.CHANNEL_TAB_PIN_TOGGLED, { ...T(e), source: t, pinned: e.pinned });
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
                    ...T(i[a]),
                    from_index: n,
                    to_index: a,
                    is_pinned: i[a].pinned,
                });
        },
        Bd: function (e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.A.getActiveTabId();
            null == f.A.getActiveTab()
                ? p(e, t)
                : N(
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
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.A.getActiveTabId(),
                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            null == f.A.getActiveTab()
                ? p(e, t)
                : null !=
                      N(
                          {
                              type: "CHANNEL_TABS_OPEN",
                              location: { kind: "channel", channelId: e, guildId: t },
                              sourceTabId: i,
                          },
                          n,
                          r,
                      ) &&
                  E.Ay.getCurrentlySelectedChannelId() !== e &&
                  p(e, t);
        },
        FP: S,
        KV: function (e, t, n) {
            if (!f.A.isEnabled()) return !1;
            let i = f.A.getActiveTab();
            if (i?.kind === "channel" && i.channelId === e) return !1;
            let r = f.A.getTabs().find((t) => "channel" === t.kind && t.channelId === e);
            return null != r && (R(r.id, t, { openVoiceChat: !1, transitionExtras: n }), !0);
        },
        RL: function (e, t, n) {
            let i = f.A.getTabs().find((t) => t.id === e)?.pinned;
            r.h.dispatch({ type: "CHANNEL_TABS_SET_PINNED", tabId: e, pinned: t });
            let a = f.A.getTabs().find((t) => t.id === e);
            null != a && i !== a.pinned && L(a, n);
        },
        TC: function (e) {
            let t = f.A.getTabs();
            if (t.length <= 1) return;
            let n = t.findIndex((e) => e.id === f.A.getActiveTabId());
            if (-1 === n) return;
            let i = (n + e + t.length) % t.length;
            R(t[i].id, "keyboard_cycle");
        },
        ZD: R,
        _U: function (e, t) {
            let n = f.A.getActiveTabId();
            r.h.dispatch({ type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath: e, routeLabel: t });
            let i = f.A.getActiveTab();
            null != n && null != i && i.id !== n && S(i, "page_navigation", !0, !0);
        },
        a2: function () {
            return O(-1);
        },
        bi: L,
        f5: function (e, t) {
            let n = f.A.getTabs().find((t) => t.id === e);
            if (null == n) return;
            let i = f.A.getActiveTabId() === e;
            r.h.dispatch({ type: "CHANNEL_TABS_CLOSE", tabId: e });
            let a = !f.A.getTabs().some((t) => t.id === e);
            if (
                (a &&
                    s.Ay.trackWithMetadata(h.HAw.CHANNEL_TAB_CLOSED, {
                        ...T(n),
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
        hL: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return N({ type: "CHANNEL_TABS_OPEN", location: e, sourceTabId: null }, t, n)?.id ?? null;
        },
        l7: function (e) {
            if (null == f.A.getActiveTab()) return ((0, c.pX)(h.BVt.FRIENDS), null);
            let t = N({ type: "CHANNEL_TABS_OPEN", location: (0, A.C2)() }, e);
            return null == t
                ? null
                : ((0, c.JK)().location.pathname !== h.BVt.FRIENDS && (0, c.pX)(h.BVt.FRIENDS), t.id);
        },
        lj: function (e) {
            r.h.dispatch({ type: "CHANNEL_TABS_SET_ENABLED", enabled: e });
        },
        oZ: function (e) {
            f.A.isEnabled() && _.A.getChannel(e)?.isGuildVocal() === !0 && a.A.updateChatOpen(e, !1);
        },
        qu: function () {
            return O(1);
        },
        ug: C,
    },
);
