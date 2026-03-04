"use strict";
n.d(t, { In: () => _, T0: () => A, fY: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(732955),
    a = n(397927),
    o = n(818348),
    E = n(985018),
    c = n(659039);
let _ = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(a.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: c.ut,
            children: t,
        });
    },
    d = (e) => {
        let { text: t, onClick: n } = e;
        return (0, i.jsx)(s.$nd, { onClick: n, text: t, size: "sm", icon: a.tvc, variant: "secondary" });
    };
function A(e) {
    let { className: t, ref: n, children: r, onClick: s } = e;
    return (0, i.jsx)(a.NPJ, {
        theme: o.NJ.DARKER,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: n,
                className: l()(c.lm, e, t),
                children: [
                    (0, i.jsx)("div", { className: c.qZ, children: r }),
                    (0, i.jsx)(a.DUT, {
                        focusProps: { offset: 6 },
                        className: c.b,
                        onClick: s,
                        "aria-label": E.intl.string(E.t.WAI6xu),
                        children: (0, i.jsx)(a.PGe, { size: "sm" }),
                    }),
                ],
            }),
    });
}
