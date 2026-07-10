"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(834730),
    a = n(853390),
    s = n(375708),
    l = n(498096);
function o(e) {
    let { start: t, end: n } = e,
        { elapsed: o, duration: d, percentage: c } = (0, a.Ay)({ start: t, end: n }),
        u = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return Math.floor(e / t) * t;
        })(o),
        _ = d > 0 ? Math.round((u / d) * 100) : 0,
        E = (0, a.Ar)(u),
        A = (0, a.Ar)(d),
        h = s.intl.formatToPlainString(s.t.wmUSiy, { count: E, max: A });
    return (0, i.jsxs)("div", {
        className: l.kL,
        children: [
            (0, i.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-default",
                className: l.Qq,
                "aria-hidden": !0,
                children: (0, a.fU)(o),
            }),
            (0, i.jsx)("div", {
                role: "progressbar",
                className: l.M0,
                "aria-valuenow": _,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuetext": h,
                children: (0, i.jsx)("div", { className: l.qB, style: { width: `${100 * c}%` } }),
            }),
            (0, i.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-default",
                className: l.Qq,
                "aria-hidden": !0,
                children: (0, a.fU)(d),
            }),
        ],
    });
}
