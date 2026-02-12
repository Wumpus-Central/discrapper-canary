"use strict";
n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(40153),
    o = n(311907),
    l = n(397927),
    u = n(308528),
    c = n(775602),
    d = n(183555),
    _ = n(679492),
    f = n(518477),
    h = n(985018),
    p = n(852325),
    g = n(910200);
let E = (e) => {
        let { message: t, userId: n, onClose: i } = e,
            { trackUserProfileAction: s } = (0, d.NJ)();
        return (0, r.jsxs)("div", {
            className: a()(g.oR, p.d6),
            children: [
                (0, r.jsx)(l.A9s, { size: "sm", className: p.RC, color: l.LU0.colors.STATUS_POSITIVE.css }),
                (0, r.jsxs)("div", {
                    className: p.Zx,
                    children: [
                        (0, r.jsx)(l.Text, { color: "text-strong", variant: "text-sm/semibold", children: t }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            children: h.intl.format(h.t.QEW8Mq, {
                                onClick: () => {
                                    s({ action: "PRESS_REACT_REPLY_TOAST" }),
                                        i?.(),
                                        u.A.openPrivateChannel({ recipientIds: n });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    A = () =>
        (0, r.jsxs)("div", {
            className: a()(g.oR, p.d6),
            children: [
                (0, r.jsx)(l.y$y, { type: l.tVU.SPINNING_CIRCLE_SIMPLE, className: p.RC }),
                (0, r.jsx)(l.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: h.intl.string(h.t.tcARX0),
                }),
            ],
        }),
    I = (e) => {
        let { userId: t, onClose: n, className: i } = e,
            { interactionTypeSent: u, showInteractionToast: d } = (0, _.Pq)(),
            g = u === f.AQ.REPLY ? h.intl.string(h.t.BPaiaa) : h.intl.string(h.t.Ry2EtG),
            I = (0, o.bG)([c.A], () => c.A.useReducedMotion),
            T = (0, l.pnh)(
                d,
                {
                    from: { transform: I ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                    enter: { transform: "translateY(0)", opacity: 1 },
                    leave: { transform: I ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                    config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                    delay: 200,
                },
                "animate-always",
            );
        return (0, r.jsx)(r.Fragment, {
            children: T(
                (e, o) =>
                    o &&
                    (0, r.jsx)(s.animated.div, {
                        className: a()(p.Jt, i),
                        style: e,
                        children:
                            null != u
                                ? (0, r.jsx)(l.y8, {
                                      message: "",
                                      type: l.ToastType.CUSTOM,
                                      id: "react_reply_success_toast",
                                      options: { component: (0, r.jsx)(E, { userId: t, message: g, onClose: n }) },
                                  })
                                : (0, r.jsx)(l.y8, {
                                      message: "",
                                      type: l.ToastType.CUSTOM,
                                      id: "react_reply_loading_toast",
                                      options: { component: (0, r.jsx)(A, {}) },
                                  }),
                    }),
            ),
        });
    };
