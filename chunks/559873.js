"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(990078),
    a = n(397927),
    o = n(73153),
    c = n(334738),
    d = n(461678),
    u = n(880457),
    h = n(164684),
    A = n(85109),
    m = n(914703),
    _ = n(932883),
    p = n(394953),
    g = n(654795),
    f = n(849077),
    x = n(652215),
    E = n(985018),
    C = n(487397);
let I = {
    [f.Th.MENTION]: [f.kR.SETTINGS],
    [f.Th.REPLY]: [f.kR.SETTINGS],
    [f.Th.REACTION]: [f.kR.SETTINGS],
    [f.Th.ANNOUNCEMENT]: [f.kR.SETTINGS],
    [f.Th.MESSAGE]: [f.kR.SETTINGS],
};
function N(e) {
    let { label: t, onClick: n, message: l, Icon: o, interactionType: c } = e,
        [d, u] = (0, s.useState)(!1),
        h = (0, _.op)();
    return (0, i.jsx)(r.m, {
        text: t,
        position: "top",
        spacing: 4,
        asContainer: !0,
        onTooltipShow: () => u(!0),
        onTooltipHide: () => u(!1),
        children: (0, i.jsx)(a.DUT, {
            className: C.XI,
            onClick: (e) => {
                (0, _.Ml)({ message: l, interactionType: c, viewId: h }), e.stopPropagation(), n(l);
            },
            children: (0, i.jsx)(o, { size: d ? "sm" : "xs", className: C.gE }),
        }),
    });
}
function b(e) {
    let { channel: t, message: n, label: l, Icon: o, Menu: c, interactionType: d, actionType: u } = e,
        h = (0, _.op)(),
        [A, m] = (0, s.useState)(!1),
        [p, f] = (0, s.useState)(!1),
        x = (0, s.useRef)(null),
        { openMenu: E, closeMenu: I } = (0, g.s)();
    return (0, i.jsx)(a.YNO, {
        shouldShow: p,
        animation: a.YNO.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: x,
        onRequestClose: () => {
            f(!1), I(n.id, u);
        },
        renderPopout: (e) =>
            (0, i.jsx)(a.lGe, {
                onClick: (e) => e.stopPropagation(),
                returnRef: x,
                children: (0, i.jsx)(c, { "data-menu-migrated": !0, renderPopoutProps: e, channel: t, message: n }),
            }),
        children: (e) =>
            (0, i.jsx)(r.m, {
                text: l,
                position: "top",
                spacing: 4,
                asContainer: !0,
                onTooltipShow: () => m(!0),
                onTooltipHide: () => m(!1),
                children: (0, i.jsx)(a.DUT, {
                    innerRef: x,
                    className: C.XI,
                    onClick: (e) => {
                        let t;
                        (0, _.Ml)({ message: n, interactionType: d, viewId: h }),
                            e.stopPropagation(),
                            f((t = !p)),
                            t ? E(n.id, u) : I(n.id, u);
                    },
                    children: (0, i.jsx)(o, {
                        ...e,
                        message: n,
                        "aria-label": l,
                        className: C.gE,
                        size: A ? "sm" : "xs",
                    }),
                }),
            }),
    });
}
let S = {
    [f.kR.ACK]: {
        type: "standard",
        Icon: a.A9s,
        label: E.intl.string(E.t.e6RscS),
        onClick: (e) => {
            o.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_ACK", messageId: e.id, channelId: e.channel_id }),
                c.ack(
                    e.channel_id,
                    { object: x.ZSU.MARK_MESSAGE_AS_READ_BUTTON, objectType: x.AnalyticsObjectTypes.ACK_MANUAL },
                    !0,
                    void 0,
                    e.id,
                );
        },
        interactionType: _.X8.ACK,
    },
    [f.kR.BOOKMARK]: {
        type: "menu",
        label: E.intl.string(E.t["9p3D9p"]),
        Icon: (e) =>
            null != A.A.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, i.jsx)(a.cFy, { ...e })
                : (0, i.jsx)(a.c$8, { ...e }),
        interactionType: _.X8.BOOKMARK,
        Menu: (e) => {
            let { message: t, renderPopoutProps: n } = e,
                s = (0, l.bG)([A.A], () => A.A.getSavedMessage(t.channel_id, t.id)),
                r = (0, u.P)({ message: t, savedMessage: s });
            return (0, i.jsxs)(a.W1t, {
                "data-menu-migrated-auto": !0,
                ...n,
                navId: "message-reminder-create",
                "aria-label": E.intl.string(E.t.mJ3P0N),
                onClose: n.closePopout,
                onSelect: () => null,
                children: [
                    null != s
                        ? (0, i.jsx)(a.Drp, {
                              id: "remove-from-for-later",
                              label: E.intl.string(E.t.SvXS1Z),
                              icon: a.cFy,
                              leadingAccessory: { type: "icon", icon: a.cFy },
                              action: () =>
                                  (0, h.x)({
                                      channelId: t.channel_id,
                                      messageId: t.id,
                                      dueAt: s.saveData.dueAt,
                                      displayToast: !0,
                                  }),
                          })
                        : (0, i.jsx)(a.Drp, {
                              id: "create-bookmark",
                              label: E.intl.string(E.t["9p3D9p"]),
                              icon: a.c$8,
                              leadingAccessory: { type: "icon", icon: a.c$8 },
                              action: () => (0, h.Y)({ channelId: t.channel_id, messageId: t.id, displayToast: !0 }),
                          }),
                    (0, i.jsx)(a.bXX, {}),
                    r,
                ],
            });
        },
    },
    [f.kR.SETTINGS]: {
        type: "menu",
        Icon: a.XFE,
        label: E.intl.string(E.t.h850Ss),
        interactionType: _.X8.SETTINGS,
        Menu: (e) => {
            let { channel: t, renderPopoutProps: n } = e;
            return t.isThread()
                ? (0, i.jsx)(m.A, { ...n, channel: t, navId: "thread-context", label: E.intl.string(E.t["1NBjqb"]) })
                : (0, i.jsx)(d.A, { ...n, channel: t, navId: "channel-context", label: E.intl.string(E.t.Xm41aV) });
        },
    },
};
function T(e) {
    let t,
        { message: n, channel: l, isUnread: r } = e,
        o =
            ((t = (0, p.i3)()),
            (0, s.useMemo)(() => {
                let e = f.Th.MENTION,
                    n = new Set();
                return r && n.add(f.kR.ACK), t && n.add(f.kR.BOOKMARK), I[e].forEach((e) => n.add(e)), Array.from(n);
            }, [n, r, t]));
    return (0, i.jsx)(a.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: C.o1,
        children: o.map((e) => {
            let t = S[e];
            switch (t.type) {
                case "standard":
                    return (0, i.jsx)(N, { ...t, actionType: e, message: n }, e);
                case "menu":
                    return (0, i.jsx)(b, { ...t, actionType: e, channel: l, message: n }, e);
            }
        }),
    });
}
