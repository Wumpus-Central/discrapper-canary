h.d(v, { A: () => a, V: () => s });
var g = h(627968);
h(64700);
var B = h(503698),
    C = h.n(B),
    f = h(397927),
    M = h(328006),
    H = h(857909),
    Q = h(334840),
    w = h(653919),
    t = h(203656),
    D = h(814364),
    l = h(985018),
    V = h(27198);
function s(A) {
    return (0, g.jsxs)("div", {
        className: C()(V.zC, A.className),
        children: [
            (0, g.jsx)("div", {
                className: V.H,
                children:
                    "string" == typeof A.avatar
                        ? (0, g.jsx)("img", {
                              className: V.my,
                              src: A.avatar,
                              alt: `${A.username} avatar`,
                              width: 40,
                              height: 40,
                          })
                        : A.avatar,
            }),
            (0, g.jsxs)("div", {
                className: V.hQ,
                children: [
                    (0, g.jsxs)("div", {
                        className: V.QV,
                        children: [
                            "string" == typeof A.username
                                ? (0, g.jsx)(f.Text, {
                                      "data-text": A.username,
                                      className: A.usernameClassName,
                                      variant: "text-md/semibold",
                                      style: A.usernameStyle,
                                      children: A.username,
                                  })
                                : A.username,
                            void 0 !== A.decorations && (0, g.jsx)("div", { className: V.bw, children: A.decorations }),
                        ],
                    }),
                    null != A.message && (0, g.jsx)(f.Text, { variant: "text-md/medium", children: A.message }),
                    A.asset,
                ],
            }),
        ],
    });
}
let a = function (A) {
    let { className: v, ...h } = A;
    return (0, g.jsxs)("div", {
        className: C()(V.kL, v),
        children: [
            (0, g.jsx)(s, {
                className: V.E6,
                avatar: M.A,
                username: "Roka",
                usernameStyle: { color: "var(--brand-400)" },
                message: l.intl.string(D.default.bpghV6),
            }),
            (0, g.jsx)(s, {
                className: V.E6,
                avatar: H.A,
                username: "hongo",
                usernameStyle: { color: "var(--green-230)" },
                message: l.intl.string(D.default.rnpv79),
            }),
            (0, g.jsx)(s, {
                avatar: Q.A,
                username: "Lily",
                usernameStyle: { color: "var(--orange-300)" },
                message: l.intl.string(D.default.u7tjsh),
                decorations: (0, g.jsx)(t.M, { ...h }),
            }),
            (0, g.jsx)(s, {
                className: V.E6,
                avatar: w.A,
                username: "sharon",
                usernameStyle: { color: "var(--brand-400)" },
                message: l.intl.string(D.default.GlWVJH),
            }),
            (0, g.jsx)(s, {
                className: V.E6,
                avatar: Q.A,
                username: "Lily",
                usernameStyle: { color: "var(--orange-300)" },
                message: l.intl.string(D.default.AIp9hh),
            }),
        ],
    });
};
