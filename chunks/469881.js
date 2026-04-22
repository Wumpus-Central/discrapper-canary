"use strict";
n.d(t, { A: () => a });
var r = n(989349),
    i = n.n(r),
    s = n(985018);
let a = function (e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = i()().diff(i()(e), "s"),
        a = null != t ? t() : void 0,
        o = {
            seconds: s.t.sMPmtq,
            minutes: s.t.N9M4N1,
            hours: s.t.p0KedC,
            days: s.t.gjK5av,
            months: s.t.kHo4Or,
            years: s.t.KjKr2P,
        },
        l = (e, t) => {
            var r;
            let i = ((r = n ? o : void 0), null != a && null != a[e] ? (a[e] ?? r?.[e] ?? null) : (r?.[e] ?? null));
            return null == i ? null : "string" == typeof i ? i : s.intl.formatToPlainString(i, { count: t });
        };
    if (r < 60) {
        let e = a?.seconds != null ? l("seconds", r) : l("minutes", 1);
        if (null != e) return e;
    }
    if (r < 3600) {
        let e = l("minutes", Math.floor(r / 60));
        if (null != e) return e;
    }
    if (r < 86400) {
        let e = l("hours", Math.floor(r / 3600));
        if (null != e) return e;
    }
    if (r < 2592e3) {
        let e = l("days", Math.floor(r / 86400));
        if (null != e) return e;
    }
    if (r < 31104e3) {
        let e = l("months", Math.floor(r / 2592e3));
        if (null != e) return e;
    }
    if (r >= 31104e3 && a?.years != null) {
        let e = l("years", Math.floor(r / 31104e3));
        if (null != e) return e;
    }
    return i()(e).format("LL");
};
