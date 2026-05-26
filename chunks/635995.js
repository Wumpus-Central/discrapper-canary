"use strict";
n.d(t, { In: () => p, T0: () => m, fY: () => E });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(821609),
    o = n(534514),
    l = n(403581),
    u = n(43990),
    c = n(939249),
    d = n(789645),
    _ = n(818348),
    f = n(375708),
    h = n(192842);
let p = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(o.D, { variant: "heading-sm/medium", color: "text-strong", className: h.ut, children: t });
    },
    E = (e) => {
        let { text: t, onClick: n } = e;
        return (0, i.jsx)(a.$, { onClick: n, text: t, size: "sm", icon: l.t, variant: "overlay-primary" });
    };
function m(e) {
    let { className: t, ref: n, children: r, onClick: a } = e;
    return (0, i.jsx)(u.N, {
        theme: _.NJ.DARKER,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: n,
                className: s()(h.lm, e, t),
                children: [
                    (0, i.jsx)("div", { className: h.qZ, children: r }),
                    (0, i.jsx)(c.D, {
                        focusProps: { offset: 6 },
                        className: h.b,
                        onClick: a,
                        "aria-label": f.intl.string(f.t.WAI6xu),
                        children: (0, i.jsx)(d.P, { size: "sm" }),
                    }),
                ],
            }),
    });
}
