n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(990078),
    r = n(397927),
    o = n(73153),
    d = n(334738),
    c = n(461678),
    u = n(880457),
    h = n(164684),
    A = n(85109),
    _ = n(914703),
    m = n(932883),
    p = n(394953),
    g = n(654795),
    f = n(849077),
    E = n(652215),
    x = n(985018),
    I = n(285618);
let C = {
    [f.Th.MENTION]: [f.kR.SETTINGS],
    [f.Th.REPLY]: [f.kR.SETTINGS],
    [f.Th.REACTION]: [f.kR.SETTINGS],
    [f.Th.ANNOUNCEMENT]: [f.kR.SETTINGS],
    [f.Th.MESSAGE]: [f.kR.SETTINGS],
};
function N(e) {
    let { label: t, onClick: n, message: s, Icon: o, interactionType: d } = e,
        [c, u] = (0, l.useState)(!1),
        h = (0, m.op)();
    return (0, i.jsx)(a.m, {
        text: t,
        position: "top",
        spacing: 4,
        asContainer: !0,
        onTooltipShow: () => u(!0),
        onTooltipHide: () => u(!1),
        children: (0, i.jsx)(r.DUT, {
            className: I.XI,
            onClick: (e) => {
                (0, m.Ml)({ message: s, interactionType: d, viewId: h }), e.stopPropagation(), n(s);
            },
            children: (0, i.jsx)(o, { size: c ? "sm" : "xs", className: I.gE }),
        }),
    });
}
function T(e) {
    let { channel: t, message: n, label: s, Icon: o, Menu: d, interactionType: c, actionType: u } = e,
        h = (0, m.op)(),
        [A, _] = (0, l.useState)(!1),
        [p, f] = (0, l.useState)(!1),
        E = (0, l.useRef)(null),
        { openMenu: x, closeMenu: C } = (0, g.s)();
    return (0, i.jsx)(r.YNO, {
        shouldShow: p,
        animation: r.YNO.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: E,
        onRequestClose: () => {
            f(!1), C(n.id, u);
        },
        renderPopout: (e) =>
            (0, i.jsx)(r.lGe, {
                onClick: (e) => e.stopPropagation(),
                returnRef: E,
                children: (0, i.jsx)(d, { "data-menu-migrated": !0, renderPopoutProps: e, channel: t, message: n }),
            }),
        children: (e) =>
            (0, i.jsx)(a.m, {
                text: s,
                position: "top",
                spacing: 4,
                asContainer: !0,
                onTooltipShow: () => _(!0),
                onTooltipHide: () => _(!1),
                children: (0, i.jsx)(r.DUT, {
                    innerRef: E,
                    className: I.XI,
                    onClick: (e) => {
                        let t;
                        (0, m.Ml)({ message: n, interactionType: c, viewId: h }),
                            e.stopPropagation(),
                            f((t = !p)),
                            t ? x(n.id, u) : C(n.id, u);
                    },
                    children: (0, i.jsx)(o, {
                        ...e,
                        message: n,
                        "aria-label": s,
                        className: I.gE,
                        size: A ? "sm" : "xs",
                    }),
                }),
            }),
    });
}
let S = {
    [f.kR.ACK]: {
        type: "standard",
        Icon: r.A9s,
        label: x.intl.string(x.t.e6RscS),
        onClick: (e) => {
            o.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_ACK", messageId: e.id, channelId: e.channel_id }),
                d.ack(
                    e.channel_id,
                    { object: E.ZSU.MARK_MESSAGE_AS_READ_BUTTON, objectType: E.AnalyticsObjectTypes.ACK_MANUAL },
                    !0,
                    void 0,
                    e.id,
                );
        },
        interactionType: m.X8.ACK,
    },
    [f.kR.BOOKMARK]: {
        type: "menu",
        label: x.intl.string(x.t["9p3D9p"]),
        Icon: (e) =>
            null != A.A.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, i.jsx)(r.cFy, { ...e })
                : (0, i.jsx)(r.c$8, { ...e }),
        interactionType: m.X8.BOOKMARK,
        Menu: (e) => {
            let { message: t, renderPopoutProps: n } = e,
                l = (0, s.bG)([A.A], () => A.A.getSavedMessage(t.channel_id, t.id)),
                a = (0, u.P)({ message: t, savedMessage: l });
            return (0, i.jsxs)(r.W1t, {
                "data-menu-migrated-auto": !0,
                ...n,
                navId: "message-reminder-create",
                "aria-label": x.intl.string(x.t.mJ3P0N),
                onClose: n.closePopout,
                onSelect: () => null,
                children: [
                    null != l
                        ? (0, i.jsx)(r.Drp, {
                              id: "remove-from-for-later",
                              label: x.intl.string(x.t.SvXS1Z),
                              icon: r.cFy,
                              leadingAccessory: { type: "icon", icon: r.cFy },
                              action: () =>
                                  (0, h.x)({
                                      channelId: t.channel_id,
                                      messageId: t.id,
                                      dueAt: l.saveData.dueAt,
                                      displayToast: !0,
                                  }),
                          })
                        : (0, i.jsx)(r.Drp, {
                              id: "create-bookmark",
                              label: x.intl.string(x.t["9p3D9p"]),
                              icon: r.c$8,
                              leadingAccessory: { type: "icon", icon: r.c$8 },
                              action: () => (0, h.Y)({ channelId: t.channel_id, messageId: t.id, displayToast: !0 }),
                          }),
                    (0, i.jsx)(r.bXX, {}),
                    a,
                ],
            });
        },
    },
    [f.kR.SETTINGS]: {
        type: "menu",
        Icon: r.XFE,
        label: x.intl.string(x.t.h850Ss),
        interactionType: m.X8.SETTINGS,
        Menu: (e) => {
            let { channel: t, renderPopoutProps: n } = e;
            return t.isThread()
                ? (0, i.jsx)(_.A, { ...n, channel: t, navId: "thread-context", label: x.intl.string(x.t["1NBjqb"]) })
                : (0, i.jsx)(c.A, { ...n, channel: t, navId: "channel-context", label: x.intl.string(x.t.Xm41aV) });
        },
    },
};
function b(e) {
    let t,
        { message: n, channel: s, isUnread: a } = e,
        o =
            ((t = (0, p.i3)()),
            (0, l.useMemo)(() => {
                let e = f.Th.MENTION,
                    n = new Set();
                return a && n.add(f.kR.ACK), t && n.add(f.kR.BOOKMARK), C[e].forEach((e) => n.add(e)), Array.from(n);
            }, [n, a, t]));
    return (0, i.jsx)(r.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: I.o1,
        children: o.map((e) => {
            let t = S[e];
            switch (t.type) {
                case "standard":
                    return (0, i.jsx)(N, { ...t, actionType: e, message: n }, e);
                case "menu":
                    return (0, i.jsx)(T, { ...t, actionType: e, channel: s, message: n }, e);
            }
        }),
    });
}
