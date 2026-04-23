n.d(t, { A: () => I });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    a = n(419354),
    s = n(17928),
    o = n(866323),
    c = n(857250),
    u = n(97483),
    d = n(933832),
    m = n(661531),
    f = n(834730),
    x = n(289873),
    g = n(308528),
    A = n(775602),
    p = n(183555),
    E = n(679492),
    h = n(518477),
    N = n(985018),
    R = n(682676),
    b = n(861173);
let v = (e) => {
        let { message: t, userId: n, onClose: i } = e,
            { trackUserProfileAction: a } = (0, p.NJ)();
        return (0, l.jsxs)("div", {
            className: r()(b.oR, R.d6),
            children: [
                (0, l.jsx)(d.A, { size: "sm", className: R.RC, color: m.A.colors.STATUS_POSITIVE.css }),
                (0, l.jsxs)("div", {
                    className: R.Zx,
                    children: [
                        (0, l.jsx)(f.E, { color: "text-strong", variant: "text-sm/semibold", children: t }),
                        (0, l.jsx)(f.E, {
                            variant: "text-sm/semibold",
                            children: N.intl.format(N.t.QEW8Mq, {
                                onClick: () => {
                                    a({ action: "PRESS_REACT_REPLY_TOAST" }),
                                        i?.(),
                                        g.A.openPrivateChannel({ recipientIds: n });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    j = () =>
        (0, l.jsxs)("div", {
            className: r()(b.oR, R.d6),
            children: [
                (0, l.jsx)(x.y, { type: x.t.SPINNING_CIRCLE_SIMPLE, className: R.RC }),
                (0, l.jsx)(f.E, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: N.intl.string(N.t.tcARX0),
                }),
            ],
        }),
    I = (e) => {
        let { userId: t, onClose: n, className: i } = e,
            { interactionTypeSent: d, showInteractionToast: m } = (0, E.Pq)(),
            f = d === h.AQ.REPLY ? N.intl.string(N.t.BPaiaa) : N.intl.string(N.t.Ry2EtG),
            x = (0, s.bG)([A.A], () => A.A.useReducedMotion),
            g = (0, o.p)(
                m,
                {
                    from: { transform: x ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                    enter: { transform: "translateY(0)", opacity: 1 },
                    leave: { transform: x ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                    config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                    delay: 200,
                },
                "animate-always",
            );
        return (0, l.jsx)(l.Fragment, {
            children: g(
                (e, s) =>
                    s &&
                    (0, l.jsx)(a.animated.div, {
                        className: r()(R.Jt, i),
                        style: e,
                        children:
                            null != d
                                ? (0, l.jsx)(c.y, {
                                      message: "",
                                      type: u.Ck.CUSTOM,
                                      id: "react_reply_success_toast",
                                      options: { component: (0, l.jsx)(v, { userId: t, message: f, onClose: n }) },
                                  })
                                : (0, l.jsx)(c.y, {
                                      message: "",
                                      type: u.Ck.CUSTOM,
                                      id: "react_reply_loading_toast",
                                      options: { component: (0, l.jsx)(j, {}) },
                                  }),
                    }),
            ),
        });
    };
