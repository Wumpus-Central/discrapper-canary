var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(359689),
    l = n.n(s),
    o = n(32690);
function d(e) {
    return `var(--space-${e})`;
}
n.d(
    t,
    {},
    {
        B: function (e) {
            var t;
            let {
                as: n = "div",
                gap: r = 8,
                direction: s = "vertical",
                align: c = "stretch",
                justify: u = "start",
                wrap: _ = !1,
                padding: E = 0,
                fullWidth: A = !0,
                style: h,
                className: f,
                children: I,
                ref: p,
                ...m
            } = e;
            return (0, i.jsx)(n, {
                ref: p,
                "data-align": c,
                "data-justify": u,
                "data-direction": s,
                "data-wrap": _,
                "data-full-width": A,
                className: a()(o.t, f),
                style: {
                    ...h,
                    gap: d(r),
                    ...("number" == typeof (t = E) || "string" == typeof t
                        ? { padding: d(t) }
                        : Object.entries(t).reduce((e, t) => {
                              let [n, i] = t;
                              return ((e[`padding${l()(n)}`] = d(i)), e);
                          }, {})),
                },
                ...m,
                children: I,
            });
        },
    },
);
