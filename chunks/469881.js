"use strict";
n.d(t, { A: () => a });
var i = n(989349),
    r = n.n(i),
    s = n(375708);
let a = function (e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = r()().diff(r()(e), "s"),
        a = null != t ? t() : void 0,
        o = {
            seconds: s.t.sMPmtq,
            minutes: s.t.N9M4N1,
            hours: s.t.p0KedC,
            days: s.t.gjK5av,
            months: s.t.kHo4Or,
            years: s.t.KjKr2P,
        };
    function l(e, t) {
        var i;
        let r = ((i = n ? o : void 0), null != a && null != a[e] ? (a[e] ?? i?.[e] ?? null) : (i?.[e] ?? null));
        return null == r ? null : "string" == typeof r ? r : s.intl.formatToPlainString(r, { count: t });
    }
    if (i < 60) {
        let e = a?.seconds != null ? l("seconds", i) : l("minutes", 1);
        if (null != e) return e;
    }
    if (i < 3600) {
        let e = l("minutes", Math.floor(i / 60));
        if (null != e) return e;
    }
    if (i < 86400) {
        let e = l("hours", Math.floor(i / 3600));
        if (null != e) return e;
    }
    if (i < 2592e3) {
        let e = l("days", Math.floor(i / 86400));
        if (null != e) return e;
    }
    if (i < 31104e3) {
        let e = l("months", Math.floor(i / 2592e3));
        if (null != e) return e;
    }
    if (i >= 31104e3 && a?.years != null) {
        let e = l("years", Math.floor(i / 31104e3));
        if (null != e) return e;
    }
    return r()(e).format("LL");
};
