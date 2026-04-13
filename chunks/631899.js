"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(687498),
    a = n(158954),
    o = n(311907),
    l = n(133636),
    u = n(381342),
    c = n(816758),
    d = n(471296),
    _ = n(275106),
    f = n(178090),
    p = n(602425),
    h = n(346640),
    m = n(75772),
    E = n(985018),
    g = n(128572);
let A = 80;
function I(e) {
    let { resource: t, amount: n } = e,
        i = h.k[t];
    return (0, r.jsxs)(c.A, {
        className: g.CZ,
        children: [
            (0, r.jsx)("img", { src: i.asset, alt: E.intl.string(i.name), className: g.RN }),
            (0, r.jsx)(f.A, { className: g.Ht, variant: "text-lg/bold", children: E.intl.string(i.name) }),
            (0, r.jsxs)(f.A, { variant: "text-lg/bold", children: ["x", n] }),
        ],
    });
}
function T(e) {
    let { rewards: t, rewardTitle: n, setScreen: i } = e,
        u = (0, o.bG)([l.A], () => l.A.getLastXPGained()),
        T = (0, a.zhh)({
            from: { opacity: 0, transform: `translateY(${A}px)` },
            to: { opacity: 1, transform: "translateY(0px)" },
        });
    return (0, r.jsx)("div", {
        className: g.y$,
        children: (0, r.jsxs)(s.animated.div, {
            className: g.FZ,
            style: T,
            children: [
                (0, r.jsx)(d.A, { children: n }),
                (0, r.jsxs)("div", {
                    className: g._J,
                    children: [
                        (0, r.jsx)("div", { className: g.Bp }),
                        (0, r.jsxs)(_.A, {
                            className: g.ey,
                            children: [
                                Object.keys(t).map((e) => (0, r.jsx)(I, { resource: e, amount: t[e] ?? 0 }, e)),
                                u > 0
                                    ? (0, r.jsxs)(c.A, {
                                          className: g.CZ,
                                          children: [
                                              (0, r.jsx)(f.A, {
                                                  className: g.Ht,
                                                  variant: "text-lg/bold",
                                                  children: E.intl.string(m.default["9brroY"]),
                                              }),
                                              (0, r.jsxs)(f.A, { variant: "text-lg/bold", children: ["+", u] }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: g.xx,
                    children: (0, r.jsx)(p.A, { text: E.intl.string(E.t["3PatSz"]), onClick: () => i(h.Q0.MAIN) }),
                }),
            ],
        }),
    });
}
let S = (0, i.forwardRef)(function (e, t) {
    let { score: n, activityDescription: i, rewardTitle: s, rewards: a, children: o, background: l, setScreen: c } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: g.kL,
        children: [
            (0, r.jsxs)("div", {
                className: g.lw,
                children: [
                    (0, r.jsx)(u.A, { onClick: () => c(h.Q0.MAIN) }),
                    null != n && (0, r.jsx)(f.A, { variant: "heading-xxl/normal", children: n }),
                ],
            }),
            l,
            (0, r.jsx)("div", { className: g.LO, children: o }),
            null != a
                ? (0, r.jsx)(T, { rewards: a, rewardTitle: s, setScreen: c })
                : null != i
                  ? (0, r.jsx)(f.A, { className: g.h_, variant: "heading-xxl/normal", children: i })
                  : null,
        ],
    });
});
