"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(853390),
    a = n(985018),
    o = n(246453);
let l = 10;
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
    return Math.floor(e / t) * t;
}
function c(e) {
    let { start: t, end: n } = e,
        { elapsed: l, duration: c, percentage: d } = (0, s.Ay)({ start: t, end: n }),
        _ = u(l),
        f = c > 0 ? Math.round((_ / c) * 100) : 0,
        p = (0, s.Ar)(_),
        h = (0, s.Ar)(c),
        m = a.intl.formatToPlainString(a.t.wmUSiy, { count: p, max: h });
    return (0, r.jsxs)("div", {
        className: o.kL,
        children: [
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                className: o.Qq,
                "aria-hidden": !0,
                children: (0, s.fU)(l),
            }),
            (0, r.jsx)("div", {
                role: "progressbar",
                className: o.M0,
                "aria-valuenow": f,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuetext": m,
                children: (0, r.jsx)("div", { className: o.qB, style: { width: `${100 * d}%` } }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                className: o.Qq,
                "aria-hidden": !0,
                children: (0, s.fU)(c),
            }),
        ],
    });
}
