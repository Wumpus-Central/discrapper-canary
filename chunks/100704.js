var l = r(927813);
let n = 12 * l.A.Millis.HOUR,
    c = 10 * l.A.Millis.MINUTE;
r.d(
    e,
    {},
    {
        HB: n,
        d3: function (t) {
            let { fetchState: e, fetchedAt: r, needsPricing: l = !1, hasPricingCoverage: o = !1 } = t;
            if ("error" === e) return null == r || Date.now() - r > c;
            let i = l && !o;
            return "loading" === e ? i : null == r || i || Date.now() - r > n;
        },
        qq: c,
    },
);
