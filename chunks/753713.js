var l = e(477900);
e(582128);
var i = e(834730),
    a = e(853390),
    r = e(792996),
    s = e(767395);
e.d(
    n,
    {},
    {
        A: function (t) {
            let { start: n, end: e } = t,
                { elapsed: o, duration: c, percentage: u } = (0, a.Ay)({ start: n, end: e }),
                d = (function (t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    return Math.floor(t / n) * n;
                })(o),
                A = c > 0 ? Math.round((d / c) * 100) : 0,
                f = (0, a.Ar)(d),
                g = (0, a.Ar)(c),
                m = r.intl.formatToPlainString(r.t.bnnNER, { elapsed: f, duration: g });
            return (0, l.jsxs)("div", {
                className: s.kL,
                children: [
                    (0, l.jsx)(i.E, {
                        variant: "body-xs/normal",
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
                        "aria-valuetext": m,
                        children: (0, l.jsx)("div", { className: s.qB, style: { width: `${100 * u}%` } }),
                    }),
                    (0, l.jsx)(i.E, {
                        variant: "body-xs/normal",
                        color: "text-default",
                        className: s.Qq,
                        "aria-hidden": !0,
                        children: (0, a.fU)(c),
                    }),
                ],
            });
        },
    },
);
