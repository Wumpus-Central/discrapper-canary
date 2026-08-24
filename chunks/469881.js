"use strict";
n.d(t, { A: () => s });
var i = n(536637),
    r = n.n(i),
    a = n(375708);
let s = function (e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = r()().diff(r()(e), "s"),
        s = null != t ? t() : void 0,
        l = {
            seconds: a.t.sMPmtq,
            minutes: a.t.N9M4N1,
            hours: a.t.p0KedC,
            days: a.t.gjK5av,
            months: a.t.kHo4Or,
            years: a.t.KjKr2P,
        };
    function o(e, t) {
        var i;
        let r = ((i = n ? l : void 0), null != s && null != s[e] ? (s[e] ?? i?.[e] ?? null) : (i?.[e] ?? null));
        return null == r ? null : "string" == typeof r ? r : a.intl.formatToPlainString(r, { count: t });
    }
    if (i < 60) {
        let e = s?.seconds != null ? o("seconds", i) : o("minutes", 1);
        if (null != e) return e;
    }
    if (i < 3600) {
        let e = o("minutes", Math.floor(i / 60));
        if (null != e) return e;
    }
    if (i < 86400) {
        let e = o("hours", Math.floor(i / 3600));
        if (null != e) return e;
    }
    if (i < 2592e3) {
        let e = o("days", Math.floor(i / 86400));
        if (null != e) return e;
    }
    if (i < 31104e3) {
        let e = o("months", Math.floor(i / 2592e3));
        if (null != e) return e;
    }
    if (i >= 31104e3 && s?.years != null) {
        let e = o("years", Math.floor(i / 31104e3));
        if (null != e) return e;
    }
    return r()(e).format("LL");
};
