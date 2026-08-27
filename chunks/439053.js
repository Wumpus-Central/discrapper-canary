s.d(e, { A: () => f });
var n = s(477900);
s(582128);
var i = s(503698),
    a = s.n(i),
    r = s(221877),
    l = s(17928),
    o = s(866323),
    c = s(857250),
    d = s(97483),
    m = s(933832),
    x = s(661531),
    u = s(834730),
    E = s(289873),
    j = s(308528),
    v = s(775602),
    h = s(183555),
    g = s(679492),
    A = s(518477),
    N = s(375708),
    p = s(988199),
    C = s(655214);
function y(t) {
    let { message: e, userId: s, onClose: i } = t,
        { trackUserProfileAction: r } = (0, h.NJ)();
    return (0, n.jsxs)("div", {
        className: a()(C.oR, p.d6),
        children: [
            (0, n.jsx)(m.CheckmarkLargeIcon, { size: "sm", className: p.RC, color: x.A.colors.STATUS_POSITIVE.css }),
            (0, n.jsxs)("div", {
                className: p.Zx,
                children: [
                    (0, n.jsx)(u.E, { color: "text-strong", variant: "text-sm/semibold", children: e }),
                    (0, n.jsx)(u.E, {
                        variant: "text-sm/semibold",
                        children: N.intl.format(N.t.QEW8Mq, {
                            onClick: () => {
                                r({ action: "PRESS_REACT_REPLY_TOAST" }),
                                    i?.(),
                                    j.A.openPrivateChannel({ recipientIds: s });
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function I() {
    return (0, n.jsxs)("div", {
        className: a()(C.oR, p.d6),
        children: [
            (0, n.jsx)(E.y, { type: E.t.SPINNING_CIRCLE_SIMPLE, className: p.RC }),
            (0, n.jsx)(u.E, { color: "text-strong", variant: "text-sm/semibold", children: N.intl.string(N.t.tcARX0) }),
        ],
    });
}
let f = (t) => {
    let { userId: e, onClose: s, className: i } = t,
        { interactionTypeSent: m, showInteractionToast: x } = (0, g.Pq)(),
        u = m === A.AQ.REPLY ? N.intl.string(N.t.BPaiaa) : N.intl.string(N.t.Ry2EtG),
        E = (0, l.bG)([v.Ay], () => v.Ay.useReducedMotion),
        j = (0, o.p)(
            x,
            {
                from: { transform: E ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: E ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                delay: 200,
            },
            "animate-always",
        );
    return (0, n.jsx)(n.Fragment, {
        children: j(
            (t, l) =>
                l &&
                (0, n.jsx)(r.animated.div, {
                    className: a()(p.Jt, i),
                    style: t,
                    children:
                        null != m
                            ? (0, n.jsx)(c.y, {
                                  message: "",
                                  type: d.Ck.CUSTOM,
                                  id: "react_reply_success_toast",
                                  options: { component: (0, n.jsx)(y, { userId: e, message: u, onClose: s }) },
                              })
                            : (0, n.jsx)(c.y, {
                                  message: "",
                                  type: d.Ck.CUSTOM,
                                  id: "react_reply_loading_toast",
                                  options: { component: (0, n.jsx)(I, {}) },
                              }),
                }),
        ),
    });
};
