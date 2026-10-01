n.d(e, { A: () => o });
var l = n(477900);
n(582128);
var i = n(834730),
    a = n(853390),
    r = n(375708),
    s = n(767395);
function o(t) {
    let { start: e, end: n } = t,
        { elapsed: o, duration: c, percentage: u } = (0, a.Ay)({ start: e, end: n }),
        d = (function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return Math.floor(t / e) * e;
        })(o),
        A = c > 0 ? Math.round((d / c) * 100) : 0,
        f = (0, a.Ar)(d),
        p = (0, a.Ar)(c),
        g = r.intl.formatToPlainString(r.t.bnnNER, { elapsed: f, duration: p });
    return (0, l.jsxs)("div", {
        className: s.kL,
        children: [
            (0, l.jsx)(i.E, {
                variant: "text-xs/normal",
                color: "text-default",
                className: s.Qq,
                "aria-hidden": !0,
                children: (0, a.fU)(o),
            }),
            (0, l.jsx)("div", {
                role: "progressbar",
                className: s.M0,
                "aria-label": r.intl.string(r.t.z2lxfe),
                "aria-valuenow": A,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuetext": g,
                children: (0, l.jsx)("div", { className: s.qB, style: { width: `${100 * u}%` } }),
            }),
            (0, l.jsx)(i.E, {
                variant: "text-xs/normal",
                color: "text-default",
                className: s.Qq,
                "aria-hidden": !0,
                children: (0, a.fU)(c),
            }),
        ],
    });
}
