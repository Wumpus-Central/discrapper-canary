"use strict";
n.d(t, { Ay: () => f, L5: () => _ });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r);
n(17928);
var a = n(947641),
    o = n(661531),
    l = n(834730),
    u = n(534514);
n(287809), n(629455), n(801365), n(375708);
var c = n(629436);
function d(e) {
    let { children: t, isComplete: n, hasNextStep: r } = e;
    return (0, i.jsxs)("li", {
        className: s()(c.gY, { [c.HP]: n }, { [c.h4]: r }),
        children: [
            (0, i.jsxs)("div", {
                className: c.cJ,
                children: [
                    (0, i.jsx)("div", {
                        className: c.$P,
                        children: n && (0, i.jsx)(a.r, { className: c.ap, color: o.A.colors.WHITE }),
                    }),
                    r && (0, i.jsx)("div", { className: c.UK }),
                ],
            }),
            (0, i.jsx)("div", { className: c.M7, children: t }),
        ],
    });
}
function _(e) {
    let { children: t } = e;
    return (0, i.jsx)(l.E, { color: "text-muted", variant: "text-xs/medium", children: t });
}
let f = function (e) {
    let { children: t, heading: n, steps: r } = e;
    return (0, i.jsxs)("div", {
        className: c.iE,
        children: [
            (0, i.jsx)("div", {
                className: c.Mj,
                children: (0, i.jsx)(u.D, {
                    className: c.R_,
                    color: "text-strong",
                    variant: "text-xs/semibold",
                    children: n,
                }),
            }),
            (0, i.jsx)("div", {
                className: c.lp,
                children: (0, i.jsx)("ul", {
                    children: r.map((e, t) =>
                        (0, i.jsx)(
                            d,
                            { isComplete: e.isComplete, hasNextStep: t < r.length - 1, children: e.renderContent() },
                            t,
                        ),
                    ),
                }),
            }),
            t,
        ],
    });
};
