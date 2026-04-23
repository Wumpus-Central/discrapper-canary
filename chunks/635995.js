"use strict";
n.d(t, { In: () => m, T0: () => T, fY: () => I });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r);
if (21552 == n.j) var s = n(821609);
if (21552 == n.j) var a = n(534514);
if (21552 == n.j) var o = n(403581);
if (21552 == n.j) var c = n(43990);
if (21552 == n.j) var u = n(939249);
if (21552 == n.j) var d = n(789645);
var _ = n(818348),
    E = n(985018),
    A = n(192842);
let m = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(a.D, { variant: "heading-sm/medium", color: "text-strong", className: A.ut, children: t });
    },
    I = (e) => {
        let { text: t, onClick: n } = e;
        return (0, i.jsx)(s.$, { onClick: n, text: t, size: "sm", icon: o.t, variant: "secondary" });
    };
function T(e) {
    let { className: t, ref: n, children: r, onClick: s } = e;
    return (0, i.jsx)(c.N, {
        theme: _.NJ.DARKER,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: n,
                className: l()(A.lm, e, t),
                children: [
                    (0, i.jsx)("div", { className: A.qZ, children: r }),
                    (0, i.jsx)(u.D, {
                        focusProps: { offset: 6 },
                        className: A.b,
                        onClick: s,
                        "aria-label": E.intl.string(E.t.WAI6xu),
                        children: (0, i.jsx)(d.P, { size: "sm" }),
                    }),
                ],
            }),
    });
}
