t.d(n, { In: () => I, T0: () => N, fY: () => d });
var i = t(477900);
t(582128);
var l = t(503698),
    c = t.n(l),
    r = t(821609),
    o = t(297264),
    s = t(403581),
    a = t(43990),
    _ = t(939249),
    A = t(789645),
    T = t(818348),
    u = t(375708),
    E = t(698833);
function I(e) {
    let { children: n } = e;
    return (0, i.jsx)(o.D, { variant: "heading-sm/medium", color: "text-strong", className: E.ut, children: n });
}
function d(e) {
    let { text: n, onClick: t, icon: l = s.t, iconPosition: c } = e;
    return (0, i.jsx)(r.$, { onClick: t, text: n, size: "sm", icon: l, iconPosition: c, variant: "overlay-primary" });
}
function N(e) {
    let { className: n, ref: t, children: l, onClick: r } = e;
    return (0, i.jsx)(a.N, {
        theme: T.NJ.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: t,
                className: c()(E.lm, e, n),
                children: [
                    (0, i.jsx)("div", { className: E.qZ, children: l }),
                    (0, i.jsx)(_.D, {
                        focusProps: { offset: 6 },
                        className: E.b,
                        onClick: r,
                        "aria-label": u.intl.string(u.t.WAI6xu),
                        children: (0, i.jsx)(A.P, { size: "sm" }),
                    }),
                ],
            }),
    });
}
