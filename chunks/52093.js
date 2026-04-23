n.d(t, { Ay: () => h, L5: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(947641),
    r = n(827734),
    o = n(834730),
    d = n(534514);
n(714510), n(92246), n(985018);
var c = n(629436);
function u(e) {
    let { children: t, isComplete: n, hasNextStep: s } = e;
    return (0, i.jsxs)("li", {
        className: l()(c.gY, { [c.HP]: n }, { [c.h4]: s }),
        children: [
            (0, i.jsxs)("div", {
                className: c.cJ,
                children: [
                    (0, i.jsx)("div", {
                        className: c.$P,
                        children: n && (0, i.jsx)(a.r, { className: c.ap, color: r.A.colors.WHITE }),
                    }),
                    s && (0, i.jsx)("div", { className: c.UK }),
                ],
            }),
            (0, i.jsx)("div", { className: c.M7, children: t }),
        ],
    });
}
function p(e) {
    let { children: t } = e;
    return (0, i.jsx)(o.E, { color: "text-muted", variant: "text-xs/medium", children: t });
}
let h = function (e) {
    let { children: t, heading: n, steps: s } = e;
    return (0, i.jsxs)("div", {
        className: c.iE,
        children: [
            (0, i.jsx)("div", {
                className: c.Mj,
                children: (0, i.jsx)(d.D, {
                    className: c.R_,
                    color: "text-strong",
                    variant: "text-xs/semibold",
                    children: n,
                }),
            }),
            (0, i.jsx)("div", {
                className: c.lp,
                children: (0, i.jsx)("ul", {
                    children: s.map((e, t) =>
                        (0, i.jsx)(
                            u,
                            { isComplete: e.isComplete, hasNextStep: t < s.length - 1, children: e.renderContent() },
                            t,
                        ),
                    ),
                }),
            }),
            t,
        ],
    });
};
