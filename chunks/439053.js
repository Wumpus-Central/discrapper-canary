n.d(e, { A: () => j });
var i = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    r = n(202091),
    a = n(17928),
    d = n(866323),
    o = n(857250),
    u = n(97483),
    c = n(933832),
    m = n(661531),
    A = n(834730),
    f = n(289873),
    g = n(308528),
    E = n(775602),
    x = n(183555),
    h = n(679492),
    I = n(518477),
    v = n(375708),
    p = n(988199),
    C = n(655214);
function y(t) {
    let { message: e, userId: n, onClose: l } = t,
        { trackUserProfileAction: r } = (0, x.NJ)();
    return (0, i.jsxs)("div", {
        className: s()(C.oR, p.d6),
        children: [
            (0, i.jsx)(c.CheckmarkLargeIcon, { size: "sm", className: p.RC, color: m.A.colors.STATUS_POSITIVE.css }),
            (0, i.jsxs)("div", {
                className: p.Zx,
                children: [
                    (0, i.jsx)(A.E, { color: "text-strong", variant: "text-sm/semibold", children: e }),
                    (0, i.jsx)(A.E, {
                        variant: "text-sm/semibold",
                        children: v.intl.format(v.t.QEW8Mq, {
                            onClick: () => {
                                (r({ action: "PRESS_REACT_REPLY_TOAST" }),
                                    l?.(),
                                    g.A.openPrivateChannel({ recipientIds: n }));
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function N() {
    return (0, i.jsxs)("div", {
        className: s()(C.oR, p.d6),
        children: [
            (0, i.jsx)(f.y, { type: f.t.SPINNING_CIRCLE_SIMPLE, className: p.RC }),
            (0, i.jsx)(A.E, { color: "text-strong", variant: "text-sm/semibold", children: v.intl.string(v.t.tcARX0) }),
        ],
    });
}
let j = (t) => {
    let { userId: e, onClose: n, className: l } = t,
        { interactionTypeSent: c, showInteractionToast: m } = (0, h.Pq)(),
        A = c === I.AQ.REPLY ? v.intl.string(v.t.BPaiaa) : v.intl.string(v.t.Ry2EtG),
        f = (0, a.bG)([E.Ay], () => E.Ay.useReducedMotion),
        g = (0, d.p)(
            m,
            {
                from: { transform: f ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: f ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                delay: 200,
            },
            "animate-always",
        );
    return (0, i.jsx)(i.Fragment, {
        children: g(
            (t, a) =>
                a &&
                (0, i.jsx)(r.animated.div, {
                    className: s()(p.Jt, l),
                    style: t,
                    children:
                        null != c
                            ? (0, i.jsx)(o.y, {
                                  message: "",
                                  type: u.Ck.CUSTOM,
                                  id: "react_reply_success_toast",
                                  options: { component: (0, i.jsx)(y, { userId: e, message: A, onClose: n }) },
                              })
                            : (0, i.jsx)(o.y, {
                                  message: "",
                                  type: u.Ck.CUSTOM,
                                  id: "react_reply_loading_toast",
                                  options: { component: (0, i.jsx)(N, {}) },
                              }),
                }),
        ),
    });
};
