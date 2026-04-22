n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(990078),
    r = n(939249),
    o = n(265872),
    d = n(305866),
    c = n(933832),
    u = n(606096),
    h = n(997146),
    A = n(861672),
    _ = n(477782),
    m = n(782603),
    g = n(331322),
    p = n(73153),
    f = n(334738),
    E = n(461678),
    x = n(880457),
    I = n(164684),
    C = n(85109),
    b = n(914703),
    N = n(932883),
    S = n(394953),
    v = n(654795),
    T = n(849077),
    y = n(652215),
    R = n(985018),
    j = n(285618);
let L = {
    [T.Th.MENTION]: [T.kR.SETTINGS],
    [T.Th.REPLY]: [T.kR.SETTINGS],
    [T.Th.REACTION]: [T.kR.SETTINGS],
    [T.Th.ANNOUNCEMENT]: [T.kR.SETTINGS],
    [T.Th.MESSAGE]: [T.kR.SETTINGS],
};
function O(e) {
    let { label: t, onClick: n, message: s, Icon: o, interactionType: d } = e,
        [c, u] = (0, l.useState)(!1),
        h = (0, N.op)();
    return (0, i.jsx)(a.m, {
        text: t,
        position: "top",
        spacing: 4,
        asContainer: !0,
        onTooltipShow: () => u(!0),
        onTooltipHide: () => u(!1),
        children: (0, i.jsx)(r.D, {
            className: j.XI,
            onClick: (e) => {
                (0, N.Ml)({ message: s, interactionType: d, viewId: h }), e.stopPropagation(), n(s);
            },
            children: (0, i.jsx)(o, { size: c ? "sm" : "xs", className: j.gE }),
        }),
    });
}
function G(e) {
    let { channel: t, message: n, label: s, Icon: c, Menu: u, interactionType: h, actionType: A } = e,
        _ = (0, N.op)(),
        [m, g] = (0, l.useState)(!1),
        [p, f] = (0, l.useState)(!1),
        E = (0, l.useRef)(null),
        { openMenu: x, closeMenu: I } = (0, v.s)();
    return (0, i.jsx)(o.Y, {
        shouldShow: p,
        animation: o.Y.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: E,
        onRequestClose: () => {
            f(!1), I(n.id, A);
        },
        renderPopout: (e) =>
            (0, i.jsx)(d.l, {
                onClick: (e) => e.stopPropagation(),
                returnRef: E,
                children: (0, i.jsx)(u, { "data-menu-migrated": !0, renderPopoutProps: e, channel: t, message: n }),
            }),
        children: (e) =>
            (0, i.jsx)(a.m, {
                text: s,
                position: "top",
                spacing: 4,
                asContainer: !0,
                onTooltipShow: () => g(!0),
                onTooltipHide: () => g(!1),
                children: (0, i.jsx)(r.D, {
                    innerRef: E,
                    className: j.XI,
                    onClick: (e) => {
                        let t;
                        (0, N.Ml)({ message: n, interactionType: h, viewId: _ }),
                            e.stopPropagation(),
                            f((t = !p)),
                            t ? x(n.id, A) : I(n.id, A);
                    },
                    children: (0, i.jsx)(c, {
                        ...e,
                        message: n,
                        "aria-label": s,
                        className: j.gE,
                        size: m ? "sm" : "xs",
                    }),
                }),
            }),
    });
}
let D = {
    [T.kR.ACK]: {
        type: "standard",
        Icon: c.A,
        label: R.intl.string(R.t.e6RscS),
        onClick: (e) => {
            p.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_ACK", messageId: e.id, channelId: e.channel_id }),
                f.ack(
                    e.channel_id,
                    { object: y.ZSU.MARK_MESSAGE_AS_READ_BUTTON, objectType: y.AnalyticsObjectTypes.ACK_MANUAL },
                    !0,
                    void 0,
                    e.id,
                );
        },
        interactionType: N.X8.ACK,
    },
    [T.kR.BOOKMARK]: {
        type: "menu",
        label: R.intl.string(R.t["9p3D9p"]),
        Icon: (e) =>
            null != C.A.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, i.jsx)(u.c, { ...e })
                : (0, i.jsx)(h.c, { ...e }),
        interactionType: N.X8.BOOKMARK,
        Menu: (e) => {
            let { message: t, renderPopoutProps: n } = e,
                l = (0, s.bG)([C.A], () => C.A.getSavedMessage(t.channel_id, t.id)),
                a = (0, x.P)({ message: t, savedMessage: l });
            return (0, i.jsxs)(A.W, {
                "data-menu-migrated-auto": !0,
                ...n,
                navId: "message-reminder-create",
                "aria-label": R.intl.string(R.t.mJ3P0N),
                onClose: n.closePopout,
                onSelect: () => null,
                children: [
                    null != l
                        ? (0, i.jsx)(_.Dr, {
                              id: "remove-from-for-later",
                              label: R.intl.string(R.t.SvXS1Z),
                              icon: u.c,
                              leadingAccessory: { type: "icon", icon: u.c },
                              action: () =>
                                  (0, I.x)({
                                      channelId: t.channel_id,
                                      messageId: t.id,
                                      dueAt: l.saveData.dueAt,
                                      displayToast: !0,
                                  }),
                          })
                        : (0, i.jsx)(_.Dr, {
                              id: "create-bookmark",
                              label: R.intl.string(R.t["9p3D9p"]),
                              icon: h.c,
                              leadingAccessory: { type: "icon", icon: h.c },
                              action: () => (0, I.Y)({ channelId: t.channel_id, messageId: t.id, displayToast: !0 }),
                          }),
                    (0, i.jsx)(_.bX, {}),
                    a,
                ],
            });
        },
    },
    [T.kR.SETTINGS]: {
        type: "menu",
        Icon: m.X,
        label: R.intl.string(R.t.h850Ss),
        interactionType: N.X8.SETTINGS,
        Menu: (e) => {
            let { channel: t, renderPopoutProps: n } = e;
            return t.isThread()
                ? (0, i.jsx)(b.A, { ...n, channel: t, navId: "thread-context", label: R.intl.string(R.t["1NBjqb"]) })
                : (0, i.jsx)(E.A, { ...n, channel: t, navId: "channel-context", label: R.intl.string(R.t.Xm41aV) });
        },
    },
};
function M(e) {
    let t,
        { message: n, channel: s, isUnread: a } = e,
        r =
            ((t = (0, S.i3)()),
            (0, l.useMemo)(() => {
                let e = T.Th.MENTION,
                    n = new Set();
                return a && n.add(T.kR.ACK), t && n.add(T.kR.BOOKMARK), L[e].forEach((e) => n.add(e)), Array.from(n);
            }, [n, a, t]));
    return (0, i.jsx)(g.B, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: j.o1,
        children: r.map((e) => {
            let t = D[e];
            switch (t.type) {
                case "standard":
                    return (0, i.jsx)(O, { ...t, actionType: e, message: n }, e);
                case "menu":
                    return (0, i.jsx)(G, { ...t, actionType: e, channel: s, message: n }, e);
            }
        }),
    });
}
