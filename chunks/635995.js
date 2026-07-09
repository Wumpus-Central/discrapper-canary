"use strict";
n.d(t, { In: () => h, T0: () => f, fY: () => I });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(821609),
    l = n(534514),
    o = n(403581),
    d = n(43990),
    c = n(939249),
    u = n(789645),
    _ = n(818348),
    E = n(375708),
    A = n(192842);
function h(e) {
    let { children: t } = e;
    return (0, i.jsx)(l.D, { variant: "heading-sm/medium", color: "text-strong", className: A.ut, children: t });
}
function I(e) {
    let { text: t, onClick: n } = e;
    return (0, i.jsx)(s.$, { onClick: n, text: t, size: "sm", icon: o.t, variant: "overlay-primary" });
}
function f(e) {
    let { className: t, ref: n, children: r, onClick: s } = e;
    return (0, i.jsx)(d.N, {
        theme: _.NJ.DARKER,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: n,
                className: a()(A.lm, e, t),
                children: [
                    (0, i.jsx)("div", { className: A.qZ, children: r }),
                    (0, i.jsx)(c.D, {
                        focusProps: { offset: 6 },
                        className: A.b,
                        onClick: s,
                        "aria-label": E.intl.string(E.t.WAI6xu),
                        children: (0, i.jsx)(u.P, { size: "sm" }),
                    }),
                ],
            }),
    });
}
