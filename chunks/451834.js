n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(620792),
    s = n(442837),
    l = n(481060),
    c = n(493683),
    u = n(607070),
    d = n(785717),
    f = n(510659),
    p = n(228168),
    _ = n(388032),
    m = n(570447),
    h = n(141291);
let g = (e) => {
        let { message: t, userId: n, onClose: i } = e,
            { trackUserProfileAction: o } = (0, d.KZ)();
        return (0, r.jsxs)("div", {
            className: a()(h.toast, m.toastPadding),
            children: [
                (0, r.jsx)(l.dz2, {
                    size: "sm",
                    className: m.toastIcon,
                    color: l.TVs.colors.STATUS_POSITIVE.css,
                }),
                (0, r.jsxs)("div", {
                    className: m.successToast,
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
                                    o({ action: "PRESS_REACT_REPLY_TOAST" }),
                                        null == i || i(),
                                        c.Z.openPrivateChannel({ recipientIds: n });
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
            className: a()(h.toast, m.toastPadding),
            children: [
                (0, r.jsx)(l.$jN, {
                    type: l.RAz.SPINNING_CIRCLE_SIMPLE,
                    className: m.toastIcon,
                }),
                (0, r.jsx)(l.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: _.intl.string(_.t.tcARX0),
                }),
            ],
        }),
    b = (e) => {
        let { userId: t, onClose: n, className: i } = e,
            { interactionTypeSent: c, showInteractionToast: d } = (0, f.Xo)(),
            h = c === p.P.REPLY ? _.intl.string(_.t.BPaiaa) : _.intl.string(_.t.Ry2EtG),
            b = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
            y = (0, l.Yzy)(
                d,
                {
                    from: {
                        transform: b ? "translateY(0)" : "translateY(16px)",
                        opacity: 0,
                    },
                    enter: {
                        transform: "translateY(0)",
                        opacity: 1,
                    },
                    leave: {
                        transform: b ? "translateY(0)" : "translateY(16px)",
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
            children: y(
                (e, s) =>
                    s &&
                    (0, r.jsx)(o.animated.div, {
                        className: a()(m.toastContainer, i),
                        style: e,
                        children:
                            null != c
                                ? (0, r.jsx)(l.FNi, {
                                      message: "",
                                      type: l.ToastType.CUSTOM,
                                      id: "react_reply_success_toast",
                                      options: {
                                          component: (0, r.jsx)(g, {
                                              userId: t,
                                              message: h,
                                              onClose: n,
                                          }),
                                      },
                                  })
                                : (0, r.jsx)(l.FNi, {
                                      message: "",
                                      type: l.ToastType.CUSTOM,
                                      id: "react_reply_loading_toast",
                                      options: { component: (0, r.jsx)(E, {}) },
                                  }),
                    }),
            ),
        });
    };
