s.d(e, { A: () => _ });
var n = s(477900);
s(582128);
var a = s(503698),
    i = s.n(a),
    l = s(202091),
    r = s(17928),
    o = s(866323),
    c = s(857250),
    d = s(97483),
    m = s(933832),
    x = s(661531),
    u = s(834730),
    E = s(289873),
    h = s(308528),
    j = s(775602),
    p = s(183555),
    g = s(679492),
    A = s(518477),
    v = s(375708),
    N = s(988199),
    C = s(655214);
function y(t) {
    let { message: e, userId: s, onClose: a } = t,
        { trackUserProfileAction: l } = (0, p.NJ)();
    return (0, n.jsxs)("div", {
        className: i()(C.oR, N.d6),
        children: [
            (0, n.jsx)(m.CheckmarkLargeIcon, { size: "sm", className: N.RC, color: x.A.colors.STATUS_POSITIVE.css }),
            (0, n.jsxs)("div", {
                className: N.Zx,
                children: [
                    (0, n.jsx)(u.E, { color: "text-strong", variant: "text-sm/semibold", children: e }),
                    (0, n.jsx)(u.E, {
                        variant: "text-sm/semibold",
                        children: v.intl.format(v.t.QEW8Mq, {
                            onClick: () => {
                                (l({ action: "PRESS_REACT_REPLY_TOAST" }),
                                    a?.(),
                                    h.A.openPrivateChannel({ recipientIds: s }));
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
        className: i()(C.oR, N.d6),
        children: [
            (0, n.jsx)(E.y, { type: E.t.SPINNING_CIRCLE_SIMPLE, className: N.RC }),
            (0, n.jsx)(u.E, { color: "text-strong", variant: "text-sm/semibold", children: v.intl.string(v.t.tcARX0) }),
        ],
    });
}
let _ = (t) => {
    let { userId: e, onClose: s, className: a } = t,
        { interactionTypeSent: m, showInteractionToast: x } = (0, g.Pq)(),
        u = m === A.AQ.REPLY ? v.intl.string(v.t.BPaiaa) : v.intl.string(v.t.Ry2EtG),
        E = (0, r.bG)([j.Ay], () => j.Ay.useReducedMotion),
        h = (0, o.p)(
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
        children: h(
            (t, r) =>
                r &&
                (0, n.jsx)(l.animated.div, {
                    className: i()(N.Jt, a),
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
