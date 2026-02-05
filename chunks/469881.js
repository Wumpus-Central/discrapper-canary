"use strict";
n.d(t, { A: () => p });
var r = n(989349),
    i = n.n(r),
    a = n(985018);
let s = 60,
    o = 3600,
    l = 86400,
    u = 2592e3,
    c = 31104e3,
    d = () => ({
        seconds: a.t.sMPmtq,
        minutes: a.t.N9M4N1,
        hours: a.t.p0KedC,
        days: a.t.gjK5av,
        months: a.t.kHo4Or,
        years: a.t.KjKr2P,
    }),
    _ = (e, t) => null != t && null != t[e],
    f = (e, t, n) => (_(e, t) ? (t[e] ?? n?.[e] ?? null) : (n?.[e] ?? null)),
    p = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = i()().diff(i()(e), "s"),
            _ = null != t ? t() : void 0,
            p = d(),
            h = (e, t) => {
                let r = f(e, _, n ? p : void 0);
                return null == r ? null : "string" == typeof r ? r : a.intl.formatToPlainString(r, { count: t });
            };
        if (r < s) {
            let e = _?.seconds != null ? h("seconds", r) : h("minutes", 1);
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
        if (r < u) {
            let e = h("days", Math.floor(r / l));
            if (null != e) return e;
        }
        if (r < c) {
            let e = h("months", Math.floor(r / u));
            if (null != e) return e;
        }
        if (r >= c && _?.years != null) {
            let e = h("years", Math.floor(r / c));
            if (null != e) return e;
        }
        return i()(e).format("LL");
    };
