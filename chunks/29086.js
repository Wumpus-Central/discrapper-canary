g.d(v, { A: () => E, V: () => s });
var B = g(627968);
g(64700);
var C = g(503698),
    h = g.n(C),
    f = g(397927),
    Q = g(328006),
    H = g(857909),
    w = g(334840),
    M = g(653919),
    D = g(203656),
    t = g(583970),
    V = g(985018),
    l = g(197827);
function s(A) {
    return (0, B.jsxs)("div", {
        className: h()(l.zC, A.className),
        children: [
            (0, B.jsx)("div", {
                className: l.H,
                children:
                    "string" == typeof A.avatar
                        ? (0, B.jsx)("img", {
                              className: l.my,
                              src: A.avatar,
                              alt: `${A.username} avatar`,
                              width: 40,
                              height: 40,
                          })
                        : A.avatar,
            }),
            (0, B.jsxs)("div", {
                className: l.hQ,
                children: [
                    (0, B.jsxs)("div", {
                        className: l.QV,
                        children: [
                            "string" == typeof A.username
                                ? (0, B.jsx)(f.Text, {
                                      "data-text": A.username,
                                      className: A.usernameClassName,
                                      variant: "text-md/semibold",
                                      style: A.usernameStyle,
                                      children: A.username,
                                  })
                                : A.username,
                            void 0 !== A.decorations && (0, B.jsx)("div", { className: l.bw, children: A.decorations }),
                        ],
                    }),
                    null != A.message && (0, B.jsx)(f.Text, { variant: "text-md/medium", children: A.message }),
                    A.asset,
                ],
            }),
        ],
    });
}
let E = function (A) {
    let { className: v, ...g } = A;
    return (0, B.jsxs)("div", {
        className: h()(l.kL, v),
        children: [
            (0, B.jsx)(s, {
                className: l.E6,
                avatar: Q.A,
                username: "Roka",
                usernameStyle: { color: "var(--brand-400)" },
                message: V.intl.string(t.default.bpghV6),
            }),
            (0, B.jsx)(s, {
                className: l.E6,
                avatar: H.A,
                username: "hongo",
                usernameStyle: { color: "var(--green-230)" },
                message: V.intl.string(t.default.rnpv79),
            }),
            (0, B.jsx)(s, {
                avatar: w.A,
                username: "Lily",
                usernameStyle: { color: "var(--orange-300)" },
                message: V.intl.string(t.default.u7tjsh),
                decorations: (0, B.jsx)(D.M, { ...g }),
            }),
            (0, B.jsx)(s, {
                className: l.E6,
                avatar: M.A,
                username: "sharon",
                usernameStyle: { color: "var(--brand-400)" },
                message: V.intl.string(t.default.GlWVJH),
            }),
            (0, B.jsx)(s, {
                className: l.E6,
                avatar: w.A,
                username: "Lily",
                usernameStyle: { color: "var(--orange-300)" },
                message: V.intl.string(t.default.AIp9hh),
            }),
        ],
    });
};
