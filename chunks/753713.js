e.d(n, { A: () => o });
var i = e(477900);
e(582128);
var l = e(834730),
    a = e(853390),
    r = e(375708),
    s = e(767395);
function o(t) {
    let { start: n, end: e } = t,
        { elapsed: o, duration: c, percentage: u } = (0, a.Ay)({ start: n, end: e }),
        d = (function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return Math.floor(t / n) * n;
        })(o),
        A = c > 0 ? Math.round((d / c) * 100) : 0,
        x = (0, a.Ar)(d),
        p = (0, a.Ar)(c),
        f = r.intl.formatToPlainString(r.t.bnnNER, { elapsed: x, duration: p });
    return (0, i.jsxs)("div", {
        className: s.kL,
        children: [
            (0, i.jsx)(l.E, {
                variant: "text-xs/normal",
                color: "text-default",
                className: s.Qq,
                "aria-hidden": !0,
                children: (0, a.fU)(o),
            }),
            (0, i.jsx)("div", {
                role: "progressbar",
                className: s.M0,
                "aria-label": r.intl.string(r.t.z2lxfe),
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
                children: (0, a.fU)(c),
            }),
        ],
    });
}
