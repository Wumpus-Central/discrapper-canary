n.d(t, { In: () => A, T0: () => f, fY: () => _ });
var o = n(477900);
n(582128);
var l = n(503698),
    a = n.n(l),
    r = n(821609),
    i = n(297264),
    d = n(403581),
    s = n(43990),
    u = n(939249),
    p = n(789645),
    c = n(818348),
    b = n(660183),
    m = n(698833);
function A(e) {
    let { children: t } = e;
    return (0, o.jsx)(i.D, { variant: "heading-sm/medium", color: "text-strong", className: m.ut, children: t });
}
function _(e) {
    let { text: t, onClick: n, icon: l = d.t, iconPosition: a } = e;
    return (0, o.jsx)(r.$, { onClick: n, text: t, size: "sm", icon: l, iconPosition: a, variant: "overlay-primary" });
}
function f(e) {
    let { className: t, ref: n, children: l, onClick: r } = e;
    return (0, o.jsx)(s.N, {
        theme: c.NJ.DARK,
        children: (e) =>
            (0, o.jsxs)("div", {
                ref: n,
                className: a()(m.lm, e, t),
                children: [
                    (0, o.jsx)("div", { className: m.qZ, children: l }),
                    (0, o.jsx)(u.D, {
                        focusProps: { offset: 6 },
                        className: m.b,
                        onClick: r,
                        "aria-label": b.intl.string(b.t.WAI6xu),
                        children: (0, o.jsx)(p.P, { size: "sm" }),
                    }),
                ],
            }),
    });
}
