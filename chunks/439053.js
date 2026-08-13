n.d(t, { A: () => O });
var i = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    s = n(53466),
    a = n(17928),
    o = n(866323),
    u = n(857250),
    c = n(97483),
    d = n(933832),
    E = n(661531),
    m = n(834730),
    f = n(289873),
    x = n(308528),
    R = n(775602),
    p = n(183555),
    g = n(679492),
    A = n(518477),
    I = n(375708),
    _ = n(167388),
    h = n(871645);
function N(e) {
    let { message: t, userId: n, onClose: l } = e,
        { trackUserProfileAction: s } = (0, p.NJ)();
    return (0, i.jsxs)("div", {
        className: r()(h.oR, _.d6),
        children: [
            (0, i.jsx)(d.A, { size: "sm", className: _.RC, color: E.A.colors.STATUS_POSITIVE.css }),
            (0, i.jsxs)("div", {
                className: _.Zx,
                children: [
                    (0, i.jsx)(m.E, { color: "text-strong", variant: "text-sm/semibold", children: t }),
                    (0, i.jsx)(m.E, {
                        variant: "text-sm/semibold",
                        children: I.intl.format(I.t.QEW8Mq, {
                            onClick: () => {
                                s({ action: "PRESS_REACT_REPLY_TOAST" }),
                                    l?.(),
                                    x.A.openPrivateChannel({ recipientIds: n });
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function v() {
    return (0, i.jsxs)("div", {
        className: r()(h.oR, _.d6),
        children: [
            (0, i.jsx)(f.y, { type: f.t.SPINNING_CIRCLE_SIMPLE, className: _.RC }),
            (0, i.jsx)(m.E, { color: "text-strong", variant: "text-sm/semibold", children: I.intl.string(I.t.tcARX0) }),
        ],
    });
}
let O = (e) => {
    let { userId: t, onClose: n, className: l } = e,
        { interactionTypeSent: d, showInteractionToast: E } = (0, g.Pq)(),
        m = d === A.AQ.REPLY ? I.intl.string(I.t.BPaiaa) : I.intl.string(I.t.Ry2EtG),
        f = (0, a.bG)([R.Ay], () => R.Ay.useReducedMotion),
        x = (0, o.p)(
            E,
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
        children: x(
            (e, a) =>
                a &&
                (0, i.jsx)(s.animated.div, {
                    className: r()(_.Jt, l),
                    style: e,
                    children:
                        null != d
                            ? (0, i.jsx)(u.y, {
                                  message: "",
                                  type: c.Ck.CUSTOM,
                                  id: "react_reply_success_toast",
                                  options: { component: (0, i.jsx)(N, { userId: t, message: m, onClose: n }) },
                              })
                            : (0, i.jsx)(u.y, {
                                  message: "",
                                  type: c.Ck.CUSTOM,
                                  id: "react_reply_loading_toast",
                                  options: { component: (0, i.jsx)(v, {}) },
                              }),
                }),
        ),
    });
};
