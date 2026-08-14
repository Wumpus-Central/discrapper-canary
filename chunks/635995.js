n.d(t, { In: () => u, T0: () => N, fY: () => R });
var i = n(477900);
n(582128);
var l = n(503698),
    c = n.n(l),
    r = n(821609),
    s = n(297264),
    o = n(403581),
    a = n(43990),
    _ = n(939249),
    A = n(789645),
    T = n(818348),
    E = n(375708),
    I = n(845730);
function u(e) {
    let { children: t } = e;
    return (0, i.jsx)(s.D, { variant: "heading-sm/medium", color: "text-strong", className: I.ut, children: t });
}
function R(e) {
    let { text: t, onClick: n } = e;
    return (0, i.jsx)(r.$, { onClick: n, text: t, size: "sm", icon: o.t, variant: "overlay-primary" });
}
function N(e) {
    let { className: t, ref: n, children: l, onClick: r } = e;
    return (0, i.jsx)(a.N, {
        theme: T.NJ.DARKER,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: n,
                className: c()(I.lm, e, t),
                children: [
                    (0, i.jsx)("div", { className: I.qZ, children: l }),
                    (0, i.jsx)(_.D, {
                        focusProps: { offset: 6 },
                        className: I.b,
                        onClick: r,
                        "aria-label": E.intl.string(E.t.WAI6xu),
                        children: (0, i.jsx)(A.P, { size: "sm" }),
                    }),
                ],
            }),
    });
}
