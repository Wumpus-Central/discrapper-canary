"use strict";
n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(4208),
    o = n(311907),
    l = n(397927),
    u = n(308528),
    c = n(775602),
    d = n(183555),
    _ = n(679492),
    f = n(518477),
    p = n(985018),
    h = n(466052),
    m = n(886981);
let E = (e) => {
        let { message: t, userId: n, onClose: i } = e,
            { trackUserProfileAction: a } = (0, d.NJ)();
        return (0, r.jsxs)("div", {
            className: s()(m.oR, h.d6),
            children: [
                (0, r.jsx)(l.A9s, { size: "sm", className: h.RC, color: l.LU0.colors.STATUS_POSITIVE.css }),
                (0, r.jsxs)("div", {
                    className: h.Zx,
                    children: [
                        (0, r.jsx)(l.Text, { color: "text-strong", variant: "text-sm/semibold", children: t }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            children: p.intl.format(p.t.QEW8Mq, {
                                onClick: () => {
                                    a({ action: "PRESS_REACT_REPLY_TOAST" }),
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
    g = () =>
        (0, r.jsxs)("div", {
            className: s()(m.oR, h.d6),
            children: [
                (0, r.jsx)(l.y$y, { type: l.tVU.SPINNING_CIRCLE_SIMPLE, className: h.RC }),
                (0, r.jsx)(l.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: p.intl.string(p.t.tcARX0),
                }),
            ],
        }),
    A = (e) => {
        let { userId: t, onClose: n, className: i } = e,
            { interactionTypeSent: u, showInteractionToast: d } = (0, _.Pq)(),
            m = u === f.AQ.REPLY ? p.intl.string(p.t.BPaiaa) : p.intl.string(p.t.Ry2EtG),
            A = (0, o.bG)([c.A], () => c.A.useReducedMotion),
            I = (0, l.pnh)(
                d,
                {
                    from: { transform: A ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                    enter: { transform: "translateY(0)", opacity: 1 },
                    leave: { transform: A ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                    config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                    delay: 200,
                },
                "animate-always",
            );
        return (0, r.jsx)(r.Fragment, {
            children: I(
                (e, o) =>
                    o &&
                    (0, r.jsx)(a.animated.div, {
                        className: s()(h.Jt, i),
                        style: e,
                        children:
                            null != u
                                ? (0, r.jsx)(l.y8, {
                                      message: "",
                                      type: l.ToastType.CUSTOM,
                                      id: "react_reply_success_toast",
                                      options: { component: (0, r.jsx)(E, { userId: t, message: m, onClose: n }) },
                                  })
                                : (0, r.jsx)(l.y8, {
                                      message: "",
                                      type: l.ToastType.CUSTOM,
                                      id: "react_reply_loading_toast",
                                      options: { component: (0, r.jsx)(g, {}) },
                                  }),
                    }),
            ),
        });
    };
