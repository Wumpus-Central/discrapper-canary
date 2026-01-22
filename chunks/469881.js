n.d(t, {
    A: () => _,
});
var r = n(989349),
    i = n.n(r),
    a = n(985018);
let s = 60,
    o = 3600,
    l = 86400,
    c = 2592e3,
    u = 31104e3,
    d = () => ({
        seconds: a.t.sMPmtq,
        minutes: a.t.N9M4N1,
        hours: a.t.p0KedC,
        days: a.t.gjK5av,
        months: a.t.kHo4Or,
        years: a.t.KjKr2P,
    }),
    f = (e, t) => null != t && null != t[e],
    p = (e, t, n) => {
        var r, i, a;
        return f(e, t)
            ? null != (i = null != (a = t[e]) ? a : null == n ? void 0 : n[e])
                ? i
                : null
            : null != (r = null == n ? void 0 : n[e])
              ? r
              : null;
    },
    _ = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = i()().diff(i()(e), "s"),
            f = null != t ? t() : void 0,
            _ = d(),
            h = (e, t) => {
                let r = p(e, f, n ? _ : void 0);
                return null == r
                    ? null
                    : "string" == typeof r
                      ? r
                      : a.intl.formatToPlainString(r, {
                            count: t,
                        });
            };
        if (r < s) {
            let e = (null == f ? void 0 : f.seconds) != null ? h("seconds", r) : h("minutes", 1);
            if (null != e) return e;
        }
        if (r < o) {
            let e = h("minutes", Math.floor(r / s));
            if (null != e) return e;
        }
        if (r < l) {
            let e = h("hours", Math.floor(r / o));
            if (null != e) return e;
        }
        if (r < c) {
            let e = h("days", Math.floor(r / l));
            if (null != e) return e;
        }
        if (r < u) {
            let e = h("months", Math.floor(r / c));
            if (null != e) return e;
        }
        if (r >= u && (null == f ? void 0 : f.years) != null) {
            let e = h("years", Math.floor(r / u));
            if (null != e) return e;
        }
        return i()(e).format("LL");
    };
