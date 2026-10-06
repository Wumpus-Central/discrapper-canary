t.d(n, { In: () => u, T0: () => O, fY: () => N });
var i = t(477900);
t(582128);
var c = t(503698),
    l = t.n(c),
    o = t(821609),
    s = t(297264),
    r = t(403581),
    a = t(43990),
    _ = t(939249),
    T = t(789645),
    A = t(818348),
    E = t(375708),
    I = t(698833);
function u(e) {
    let { children: n } = e;
    return (0, i.jsx)(s.D, { variant: "heading-sm/medium", color: "text-strong", className: I.ut, children: n });
}
function N(e) {
    let { text: n, onClick: t, icon: c = r.t, iconPosition: l } = e;
    return (0, i.jsx)(o.$, { onClick: t, text: n, size: "sm", icon: c, iconPosition: l, variant: "overlay-primary" });
}
function O(e) {
    let { className: n, ref: t, children: c, onClick: o } = e;
    return (0, i.jsx)(a.N, {
        theme: A.NJ.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: t,
                className: l()(I.lm, e, n),
                children: [
                    (0, i.jsx)("div", { className: I.qZ, children: c }),
                    (0, i.jsx)(_.D, {
                        focusProps: { offset: 6 },
                        className: I.b,
                        onClick: o,
                        "aria-label": E.intl.string(E.t.WAI6xu),
                        children: (0, i.jsx)(T.P, { size: "sm" }),
                    }),
                ],
            }),
    });
}
