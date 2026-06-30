n.d(e, { A: () => v });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(18005),
    s = n(17928),
    o = n(866323),
    c = n(857250),
    u = n(97483),
    d = n(933832),
    m = n(661531),
    x = n(834730),
    f = n(289873),
    E = n(308528),
    g = n(775602),
    p = n(183555),
    R = n(679492),
    N = n(518477),
    A = n(375708),
    j = n(682676),
    h = n(861173);
function b(t) {
    let { message: e, userId: n, onClose: l } = t,
        { trackUserProfileAction: a } = (0, p.NJ)();
    return (0, i.jsxs)("div", {
        className: r()(h.oR, j.d6),
        children: [
            (0, i.jsx)(d.A, { size: "sm", className: j.RC, color: m.A.colors.STATUS_POSITIVE.css }),
            (0, i.jsxs)("div", {
                className: j.Zx,
                children: [
                    (0, i.jsx)(x.E, { color: "text-strong", variant: "text-sm/semibold", children: e }),
                    (0, i.jsx)(x.E, {
                        variant: "text-sm/semibold",
                        children: A.intl.format(A.t.QEW8Mq, {
                            onClick: () => {
                                a({ action: "PRESS_REACT_REPLY_TOAST" }),
                                    l?.(),
                                    E.A.openPrivateChannel({ recipientIds: n });
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function I() {
    return (0, i.jsxs)("div", {
        className: r()(h.oR, j.d6),
        children: [
            (0, i.jsx)(f.y, { type: f.t.SPINNING_CIRCLE_SIMPLE, className: j.RC }),
            (0, i.jsx)(x.E, { color: "text-strong", variant: "text-sm/semibold", children: A.intl.string(A.t.tcARX0) }),
        ],
    });
}
let v = (t) => {
    let { userId: e, onClose: n, className: l } = t,
        { interactionTypeSent: d, showInteractionToast: m } = (0, R.Pq)(),
        x = d === N.AQ.REPLY ? A.intl.string(A.t.BPaiaa) : A.intl.string(A.t.Ry2EtG),
        f = (0, s.bG)([g.Ay], () => g.Ay.useReducedMotion),
        E = (0, o.p)(
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
        children: E(
            (t, s) =>
                s &&
                (0, i.jsx)(a.animated.div, {
                    className: r()(j.Jt, l),
                    style: t,
                    children:
                        null != d
                            ? (0, i.jsx)(c.y, {
                                  message: "",
                                  type: u.Ck.CUSTOM,
                                  id: "react_reply_success_toast",
                                  options: { component: (0, i.jsx)(b, { userId: e, message: x, onClose: n }) },
                              })
                            : (0, i.jsx)(c.y, {
                                  message: "",
                                  type: u.Ck.CUSTOM,
                                  id: "react_reply_loading_toast",
                                  options: { component: (0, i.jsx)(I, {}) },
                              }),
                }),
        ),
    });
};
