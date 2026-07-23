n.d(t, { In: () => I, T0: () => N, fY: () => R });
var i = n(627968);
n(64700);
var l = n(503698),
    c = n.n(l),
    r = n(821609),
    a = n(297264),
    s = n(403581),
    o = n(43990),
    _ = n(939249),
    T = n(789645),
    A = n(818348),
    E = n(375708),
    u = n(845730);
function I(e) {
    let { children: t } = e;
    return (0, i.jsx)(a.D, { variant: "heading-sm/medium", color: "text-strong", className: u.ut, children: t });
}
function R(e) {
    let { text: t, onClick: n } = e;
    return (0, i.jsx)(r.$, { onClick: n, text: t, size: "sm", icon: s.t, variant: "overlay-primary" });
}
function N(e) {
    let { className: t, ref: n, children: l, onClick: r } = e;
    return (0, i.jsx)(o.N, {
        theme: A.NJ.DARKER,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: n,
                className: c()(u.lm, e, t),
                children: [
                    (0, i.jsx)("div", { className: u.qZ, children: l }),
                    (0, i.jsx)(_.D, {
                        focusProps: { offset: 6 },
                        className: u.b,
                        onClick: r,
                        "aria-label": E.intl.string(E.t.WAI6xu),
                        children: (0, i.jsx)(T.P, { size: "sm" }),
                    }),
                ],
            }),
    });
}
