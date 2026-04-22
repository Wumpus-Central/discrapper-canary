e.d(n, { A: () => o });
var i = e(627968);
e(64700);
var l = e(834730),
    r = e(853390),
    a = e(985018),
    s = e(860464);
function o(t) {
    let { start: n, end: e } = t,
        { elapsed: o, duration: c, percentage: u } = (0, r.Ay)({ start: n, end: e }),
        d = (function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return Math.floor(t / n) * n;
        })(o),
        A = c > 0 ? Math.round((d / c) * 100) : 0,
        x = (0, r.Ar)(d),
        p = (0, r.Ar)(c),
        f = a.intl.formatToPlainString(a.t.wmUSiy, { count: x, max: p });
    return (0, i.jsxs)("div", {
        className: s.kL,
        children: [
            (0, i.jsx)(l.E, {
                variant: "text-xs/normal",
                color: "text-default",
                className: s.Qq,
                "aria-hidden": !0,
                children: (0, r.fU)(o),
            }),
            (0, i.jsx)("div", {
                role: "progressbar",
                className: s.M0,
                "aria-valuenow": A,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuetext": f,
                children: (0, i.jsx)("div", { className: s.qB, style: { width: `${100 * u}%` } }),
            }),
            (0, i.jsx)(l.E, {
                variant: "text-xs/normal",
                color: "text-default",
                className: s.Qq,
                "aria-hidden": !0,
                children: (0, r.fU)(c),
            }),
        ],
    });
}
