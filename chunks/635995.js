n.d(t, { In: () => N, T0: () => f, fY: () => p });
var i = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    r = n(821609),
    l = n(534514),
    c = n(403581),
    o = n(43990),
    d = n(939249),
    u = n(789645),
    m = n(818348),
    A = n(375708),
    g = n(192842);
function N(e) {
    let { children: t } = e;
    return (0, i.jsx)(l.D, { variant: "heading-sm/medium", color: "text-strong", className: g.ut, children: t });
}
function p(e) {
    let { text: t, onClick: n } = e;
    return (0, i.jsx)(r.$, { onClick: n, text: t, size: "sm", icon: c.t, variant: "overlay-primary" });
}
function f(e) {
    let { className: t, ref: n, children: a, onClick: r } = e;
    return (0, i.jsx)(o.N, {
        theme: m.NJ.DARKER,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: n,
                className: s()(g.lm, e, t),
                children: [
                    (0, i.jsx)("div", { className: g.qZ, children: a }),
                    (0, i.jsx)(d.D, {
                        focusProps: { offset: 6 },
                        className: g.b,
                        onClick: r,
                        "aria-label": A.intl.string(A.t.WAI6xu),
                        children: (0, i.jsx)(u.P, { size: "sm" }),
                    }),
                ],
            }),
    });
}
