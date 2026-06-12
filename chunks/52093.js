"use strict";
n.d(t, { Ay: () => p, L5: () => f });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s);
n(17928);
var o = n(947641),
    l = n(661531),
    u = n(834730),
    c = n(534514);
n(287809), n(3738), n(801365), n(375708);
var d = n(629436);
let _ = r.createContext({ isCurrent: !1 });
function h(e) {
    let { children: t, isComplete: n, isCurrent: r, hasNextStep: s } = e;
    return (0, i.jsxs)("li", {
        className: a()(d.gY, { [d.HP]: n }, { [d.fS]: r }, { [d.h4]: s }),
        children: [
            (0, i.jsxs)("div", {
                className: d.cJ,
                children: [
                    (0, i.jsx)("div", {
                        className: d.$P,
                        children: n && (0, i.jsx)(o.r, { className: d.ap, color: l.A.colors.WHITE }),
                    }),
                    s && (0, i.jsx)("div", { className: d.UK }),
                ],
            }),
            (0, i.jsx)("div", {
                className: d.M7,
                children: (0, i.jsx)(_.Provider, { value: { isCurrent: r }, children: t }),
            }),
        ],
    });
}
function f(e) {
    let { children: t } = e,
        { isCurrent: n } = r.useContext(_);
    return (0, i.jsx)(u.E, { color: n ? "text-default" : "text-muted", variant: "text-xs/medium", children: t });
}
let p = function (e) {
    let { children: t, heading: n, steps: r, className: s } = e,
        o = r.findIndex((e) => !e.isComplete);
    return (0, i.jsxs)("div", {
        className: a()(d.iE, s),
        children: [
            (0, i.jsx)("div", {
                className: d.Mj,
                children: (0, i.jsx)(c.D, {
                    className: d.R_,
                    color: "text-strong",
                    variant: "text-xs/semibold",
                    children: n,
                }),
            }),
            (0, i.jsx)("div", {
                className: d.lp,
                children: (0, i.jsx)("ul", {
                    children: r.map((e, t) =>
                        (0, i.jsx)(
                            h,
                            {
                                isComplete: e.isComplete,
                                isCurrent: t === o,
                                hasNextStep: t < r.length - 1,
                                children: e.renderContent(e.isComplete),
                            },
                            t,
                        ),
                    ),
                }),
            }),
            t,
        ],
    });
};
