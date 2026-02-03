n.d(t, {
    A: () => y,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(92674),
    s = n(311907),
    l = n(397927),
    c = n(308528),
    u = n(775602),
    d = n(183555),
    f = n(679492),
    p = n(518477),
    _ = n(985018),
    h = n(852325),
    m = n(910200);
let g = (e) => {
        let { message: t, userId: n, onClose: i } = e,
            { trackUserProfileAction: o } = (0, d.NJ)();
        return (0, r.jsxs)("div", {
            className: a()(m.oR, h.d6),
            children: [
                (0, r.jsx)(l.A9s, {
                    size: "sm",
                    className: h.RC,
                    color: l.LU0.colors.STATUS_POSITIVE.css,
                }),
                (0, r.jsxs)("div", {
                    className: h.Zx,
                    children: [
                        (0, r.jsx)(l.Text, {
                            color: "text-strong",
                            variant: "text-sm/semibold",
                            children: t,
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            children: _.intl.format(_.t.QEW8Mq, {
                                onClick: () => {
                                    o({
                                        action: "PRESS_REACT_REPLY_TOAST",
                                    }),
                                        null == i || i(),
                                        c.A.openPrivateChannel({
                                            recipientIds: n,
                                        });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    E = () =>
        (0, r.jsxs)("div", {
            className: a()(m.oR, h.d6),
            children: [
                (0, r.jsx)(l.y$y, {
                    type: l.tVU.SPINNING_CIRCLE_SIMPLE,
                    className: h.RC,
                }),
                (0, r.jsx)(l.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: _.intl.string(_.t.tcARX0),
                }),
            ],
        }),
    y = (e) => {
        let { userId: t, onClose: n, className: i } = e,
            { interactionTypeSent: c, showInteractionToast: d } = (0, f.Pq)(),
            m = c === p.AQ.REPLY ? _.intl.string(_.t.BPaiaa) : _.intl.string(_.t.Ry2EtG),
            y = (0, s.bG)([u.A], () => u.A.useReducedMotion),
            b = (0, l.pnh)(
                d,
                {
                    from: {
                        transform: y ? "translateY(0)" : "translateY(16px)",
                        opacity: 0,
                    },
                    enter: {
                        transform: "translateY(0)",
                        opacity: 1,
                    },
                    leave: {
                        transform: y ? "translateY(0)" : "translateY(16px)",
                        opacity: 0,
                    },
                    config: {
                        mass: 1,
                        tension: 500,
                        friction: 18,
                        clamp: !0,
                    },
                    delay: 200,
                },
                "animate-always",
            );
        return (0, r.jsx)(r.Fragment, {
            children: b(
                (e, s) =>
                    s &&
                    (0, r.jsx)(o.animated.div, {
                        className: a()(h.Jt, i),
                        style: e,
                        children:
                            null != c
                                ? (0, r.jsx)(l.y8, {
                                      message: "",
                                      type: l.ToastType.CUSTOM,
                                      id: "react_reply_success_toast",
                                      options: {
                                          component: (0, r.jsx)(g, {
                                              userId: t,
                                              message: m,
                                              onClose: n,
                                          }),
                                      },
                                  })
                                : (0, r.jsx)(l.y8, {
                                      message: "",
                                      type: l.ToastType.CUSTOM,
                                      id: "react_reply_loading_toast",
                                      options: {
                                          component: (0, r.jsx)(E, {}),
                                      },
                                  }),
                    }),
            ),
        });
    };
