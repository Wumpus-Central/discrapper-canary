n.d(t, {
    A: () => I,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(990078),
    a = n(397927),
    o = n(73153),
    c = n(334738),
    u = n(461678),
    d = n(880457),
    h = n(164684),
    p = n(85109),
    g = n(914703),
    f = n(932883),
    m = n(394953),
    b = n(654795),
    A = n(849077),
    y = n(652215),
    O = n(985018),
    _ = n(471135);

function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = {
    [A.Th.MENTION]: [A.kR.SETTINGS],
    [A.Th.REPLY]: [A.kR.SETTINGS],
    [A.Th.REACTION]: [A.kR.SETTINGS],
    [A.Th.ANNOUNCEMENT]: [A.kR.SETTINGS],
    [A.Th.MESSAGE]: [A.kR.SETTINGS],
};

function E(e) {
    let { label: t, onClick: n, message: i, Icon: o, interactionType: c } = e,
        [u, d] = (0, l.useState)(!1),
        h = (0, f.op)();
    return (0, r.jsx)(s.m, {
        text: t,
        position: "top",
        spacing: 4,
        asContainer: !0,
        onTooltipShow: () => d(!0),
        onTooltipHide: () => d(!1),
        children: (0, r.jsx)(a.DUT, {
            className: _.XI,
            onClick: (e) => {
                (0, f.Ml)({
                    message: i,
                    interactionType: c,
                    viewId: h,
                }),
                    e.stopPropagation(),
                    n(i);
            },
            children: (0, r.jsx)(o, {
                size: u ? "sm" : "xs",
                className: _.gE,
            }),
        }),
    });
}

function C(e) {
    let { channel: t, message: n, label: i, Icon: o, Menu: c, interactionType: u, actionType: d } = e,
        h = (0, f.op)(),
        [p, g] = (0, l.useState)(!1),
        [m, A] = (0, l.useState)(!1),
        y = (0, l.useRef)(null),
        { openMenu: O, closeMenu: v } = (0, b.s)();
    return (0, r.jsx)(a.YNO, {
        shouldShow: m,
        animation: a.YNO.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: y,
        onRequestClose: () => {
            A(!1), v(n.id, d);
        },
        renderPopout: (e) =>
            (0, r.jsx)(a.lGe, {
                onClick: (e) => e.stopPropagation(),
                returnRef: y,
                children: (0, r.jsx)(c, {
                    "data-menu-migrated": !0,
                    renderPopoutProps: e,
                    channel: t,
                    message: n,
                }),
            }),
        children: (e) =>
            (0, r.jsx)(s.m, {
                text: i,
                position: "top",
                spacing: 4,
                asContainer: !0,
                onTooltipShow: () => g(!0),
                onTooltipHide: () => g(!1),
                children: (0, r.jsx)(a.DUT, {
                    innerRef: y,
                    className: _.XI,
                    onClick: (e) => {
                        let t;
                        (0, f.Ml)({
                            message: n,
                            interactionType: u,
                            viewId: h,
                        }),
                            e.stopPropagation(),
                            A((t = !m)),
                            t ? O(n.id, d) : v(n.id, d);
                    },
                    children: (0, r.jsx)(
                        o,
                        x(j({}, e), {
                            message: n,
                            "aria-label": i,
                            className: _.gE,
                            size: p ? "sm" : "xs",
                        }),
                    ),
                }),
            }),
    });
}
let S = {
    [A.kR.ACK]: {
        type: "standard",
        Icon: a.A9s,
        label: O.intl.string(O.t.e6RscS),
        onClick: (e) => {
            o.h.dispatch({
                type: "NOTIFICATIONS_INBOX_ITEM_ACK",
                messageId: e.id,
                channelId: e.channel_id,
            }),
                c.ack(
                    e.channel_id,
                    {
                        object: y.ZSU.MARK_MESSAGE_AS_READ_BUTTON,
                        objectType: y.AnalyticsObjectTypes.ACK_MANUAL,
                    },
                    !0,
                    void 0,
                    e.id,
                );
        },
        interactionType: f.X8.ACK,
    },
    [A.kR.BOOKMARK]: {
        type: "menu",
        label: O.intl.string(O.t["9p3D9p"]),
        Icon: (e) =>
            null != p.A.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, r.jsx)(a.cFy, j({}, e))
                : (0, r.jsx)(a.c$8, j({}, e)),
        interactionType: f.X8.BOOKMARK,
        Menu: (e) => {
            let { message: t, renderPopoutProps: n } = e,
                l = (0, i.bG)([p.A], () => p.A.getSavedMessage(t.channel_id, t.id)),
                s = (0, d.P)({
                    message: t,
                    savedMessage: l,
                });
            return (0, r.jsxs)(
                a.W1t,
                x(
                    j(
                        {
                            "data-menu-migrated-auto": !0,
                        },
                        n,
                    ),
                    {
                        navId: "message-reminder-create",
                        "aria-label": O.intl.string(O.t.mJ3P0N),
                        onClose: n.closePopout,
                        onSelect: () => null,
                        children: [
                            null != l
                                ? (0, r.jsx)(a.Drp, {
                                      id: "remove-from-for-later",
                                      label: O.intl.string(O.t.SvXS1Z),
                                      icon: a.cFy,
                                      leadingAccessory: {
                                          type: "icon",
                                          icon: a.cFy,
                                      },
                                      action: () =>
                                          (0, h.x)({
                                              channelId: t.channel_id,
                                              messageId: t.id,
                                              dueAt: l.saveData.dueAt,
                                              displayToast: !0,
                                          }),
                                  })
                                : (0, r.jsx)(a.Drp, {
                                      id: "create-bookmark",
                                      label: O.intl.string(O.t["9p3D9p"]),
                                      icon: a.c$8,
                                      leadingAccessory: {
                                          type: "icon",
                                          icon: a.c$8,
                                      },
                                      action: () =>
                                          (0, h.Y)({
                                              channelId: t.channel_id,
                                              messageId: t.id,
                                              displayToast: !0,
                                          }),
                                  }),
                            (0, r.jsx)(a.bXX, {}),
                            s,
                        ],
                    },
                ),
            );
        },
    },
    [A.kR.SETTINGS]: {
        type: "menu",
        Icon: a.XFE,
        label: O.intl.string(O.t.h850Ss),
        interactionType: f.X8.SETTINGS,
        Menu: (e) => {
            let { channel: t, renderPopoutProps: n } = e;
            return t.isThread()
                ? (0, r.jsx)(
                      g.A,
                      x(j({}, n), {
                          channel: t,
                          navId: "thread-context",
                          label: O.intl.string(O.t["1NBjqb"]),
                      }),
                  )
                : (0, r.jsx)(
                      u.A,
                      x(j({}, n), {
                          channel: t,
                          navId: "channel-context",
                          label: O.intl.string(O.t.Xm41aV),
                      }),
                  );
        },
    },
};

function I(e) {
    let t,
        { message: n, channel: i, isUnread: s } = e,
        o =
            ((t = (0, m.i3)()),
            (0, l.useMemo)(() => {
                let e = A.Th.MENTION,
                    n = new Set();
                return s && n.add(A.kR.ACK), t && n.add(A.kR.BOOKMARK), v[e].forEach((e) => n.add(e)), Array.from(n);
            }, [n, s, t]));
    return (0, r.jsx)(a.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: _.o1,
        children: o.map((e) => {
            let t = S[e];
            switch (t.type) {
                case "standard":
                    return (0, r.jsx)(
                        E,
                        x(j({}, t), {
                            actionType: e,
                            message: n,
                        }),
                        e,
                    );
                case "menu":
                    return (0, r.jsx)(
                        C,
                        x(j({}, t), {
                            actionType: e,
                            channel: i,
                            message: n,
                        }),
                        e,
                    );
            }
        }),
    });
}
