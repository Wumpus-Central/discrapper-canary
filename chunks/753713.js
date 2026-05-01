"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(834730),
    s = n(853390),
    a = n(375708),
    o = n(860464);
function l(e) {
    let { start: t, end: n } = e,
        { elapsed: l, duration: u, percentage: c } = (0, s.Ay)({ start: t, end: n }),
        d = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return Math.floor(e / t) * t;
        })(l),
        _ = u > 0 ? Math.round((d / u) * 100) : 0,
        f = (0, s.Ar)(d),
        h = (0, s.Ar)(u),
        p = a.intl.formatToPlainString(a.t.wmUSiy, { count: f, max: h });
    return (0, i.jsxs)("div", {
        className: o.kL,
        children: [
            (0, i.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-default",
                className: o.Qq,
                "aria-hidden": !0,
                children: (0, s.fU)(l),
            }),
            (0, i.jsx)("div", {
                role: "progressbar",
                className: o.M0,
                "aria-valuenow": _,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuetext": p,
                children: (0, i.jsx)("div", { className: o.qB, style: { width: `${100 * c}%` } }),
            }),
            (0, i.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-default",
                className: o.Qq,
                "aria-hidden": !0,
                children: (0, s.fU)(u),
            }),
        ],
    });
}
