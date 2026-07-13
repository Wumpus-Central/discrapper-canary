n.d(t, { In: () => I, T0: () => d, fY: () => R });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    c = n(821609),
    a = n(297264),
    s = n(403581),
    o = n(43990),
    _ = n(939249),
    u = n(789645),
    T = n(818348),
    A = n(375708),
    E = n(192842);
function I(e) {
    let { children: t } = e;
    return (0, i.jsx)(a.D, { variant: "heading-sm/medium", color: "text-strong", className: E.ut, children: t });
}
function R(e) {
    let { text: t, onClick: n } = e;
    return (0, i.jsx)(c.$, { onClick: n, text: t, size: "sm", icon: s.t, variant: "overlay-primary" });
}
function d(e) {
    let { className: t, ref: n, children: l, onClick: c } = e;
    return (0, i.jsx)(o.N, {
        theme: T.NJ.DARKER,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: n,
                className: r()(E.lm, e, t),
                children: [
                    (0, i.jsx)("div", { className: E.qZ, children: l }),
                    (0, i.jsx)(_.D, {
                        focusProps: { offset: 6 },
                        className: E.b,
                        onClick: c,
                        "aria-label": A.intl.string(A.t.WAI6xu),
                        children: (0, i.jsx)(u.P, { size: "sm" }),
                    }),
                ],
            }),
    });
}
