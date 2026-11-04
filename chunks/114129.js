var i,
    r = n(73153),
    a = n(367513),
    s = n(976860),
    l = n(378570),
    o = n(734057),
    d = n(309010),
    c = n(967198),
    u = n(442325),
    _ = n(652215),
    E = n(746080);
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = o.A.getChannel(e);
    (null != i && i.isGuildVocal() && a.A.updateChatOpen(e, !n),
        null != t ? (0, s.pX)(_.BVt.CHANNEL(t, e), { openChannel: !0 }) : (0, l.iN)(e));
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    "route" === e.kind ? (0, s.pX)(e.routePath) : A(e.channelId, e.guildId, t);
}
function f(e, t) {
    let n = d.Ay.getCurrentlySelectedChannelId();
    0 === u.A.getTabs().length && (null == n || (0, E.jq)(n))
        ? A(e, t)
        : u.A.isAtMaxTabs() ||
          (r.h.dispatch({ type: "CHANNEL_TABS_OPEN", kind: "channel", channelId: e, guildId: t, active: !0 }),
          d.Ay.getCurrentlySelectedChannelId() !== e && A(e, t));
}
var I = (((i = {}).Passthrough = "passthrough"), (i.Noop = "noop"), (i.Navigated = "navigated"), i);
function p(e) {
    if (!u.A.isEnabled()) return "passthrough";
    let t = u.A.getActiveTab();
    if (null == t || ("channel" === t.kind && d.Ay.getCurrentlySelectedChannelId() !== t.channelId))
        return "passthrough";
    let n = t.index + e;
    if (n < 0 || n >= t.entries.length) return "noop";
    let i = t.entries[n];
    return "route" === i.kind
        ? (r.h.dispatch({ type: -1 === e ? "CHANNEL_TABS_BACK" : "CHANNEL_TABS_FORWARD" }),
          (0, s.pX)(i.routePath),
          "navigated")
        : null == o.A.getChannel(i.channelId)
          ? null != i.guildId
              ? (r.h.dispatch({ type: -1 === e ? "CHANNEL_TABS_BACK" : "CHANNEL_TABS_FORWARD" }),
                (0, s.pX)(_.BVt.CHANNEL(i.guildId, i.channelId)),
                "navigated")
              : "noop"
          : (r.h.dispatch({ type: -1 === e ? "CHANNEL_TABS_BACK" : "CHANNEL_TABS_FORWARD" }),
            A(i.channelId, i.guildId),
            "navigated");
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = u.A.getTabs().find((t) => t.id === e);
    if (null != n) {
        if (u.A.getActiveTabId() === e) {
            if ("channel" !== n.kind) return;
            d.Ay.getCurrentlySelectedChannelId() !== n.channelId
                ? A(n.channelId, n.guildId, t)
                : t && o.A.getChannel(n.channelId)?.isGuildVocal() === !0 && a.A.updateChatOpen(n.channelId, !1);
            return;
        }
        (r.h.dispatch({ type: "CHANNEL_TABS_SET_ACTIVE", tabId: e }), h(n, t));
    }
}
n.d(
    t,
    {},
    {
        Aq: function (e, t) {
            r.h.dispatch({ type: "CHANNEL_TABS_MOVE", tabId: e, toIndex: t });
        },
        Bd: function (e, t) {
            let n = d.Ay.getCurrentlySelectedChannelId();
            0 === u.A.getTabs().length && (null == n || (0, E.jq)(n))
                ? A(e, t)
                : r.h.dispatch({ type: "CHANNEL_TABS_OPEN", kind: "channel", channelId: e, guildId: t });
        },
        D5: f,
        JC: function () {
            let e = u.A.getActiveTab();
            if (null != e && "route" === e.kind) {
                if (u.A.isAtMaxTabs()) return;
                r.h.dispatch({
                    type: "CHANNEL_TABS_OPEN",
                    kind: "route",
                    routePath: e.routePath,
                    routeLabel: e.routeLabel,
                    active: !0,
                });
                return;
            }
            let t = e?.channelId ?? d.Ay.getCurrentlySelectedChannelId();
            null == t || f(t, e?.guildId ?? c.A.getGuildId() ?? null);
        },
        RL: function (e, t) {
            r.h.dispatch({ type: "CHANNEL_TABS_SET_PINNED", tabId: e, pinned: t });
        },
        TC: function (e) {
            let t = u.A.getTabs();
            if (t.length <= 1) return;
            let n = t.findIndex((e) => e.id === u.A.getActiveTabId());
            if (-1 === n) return;
            let i = (n + e + t.length) % t.length;
            m(t[i].id);
        },
        ZD: m,
        _U: function (e, t) {
            r.h.dispatch({ type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath: e, routeLabel: t });
        },
        a2: function () {
            return p(-1);
        },
        f5: function (e) {
            if (-1 === u.A.getTabs().findIndex((t) => t.id === e)) return;
            let t = u.A.getActiveTabId() === e;
            if ((r.h.dispatch({ type: "CHANNEL_TABS_CLOSE", tabId: e }), !t)) return;
            let n = u.A.getActiveTab();
            null != n && h(n);
        },
        lj: function (e) {
            r.h.dispatch({ type: "CHANNEL_TABS_SET_ENABLED", enabled: e });
        },
        qu: function () {
            return p(1);
        },
        ug: I,
    },
);
