"use strict";
n.d(t, { t: () => u });
var i = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(655752),
    o = n(878784);
function l(e, t) {
    return s()(e).add(t, "months").add(1, "day");
}
function u() {
    let e = (0, a.P)(),
        t = (0, o.Xb)();
    return (0, i.useMemo)(() => {
        if (null == e || null == t) return null;
        let n = e.tenureReqNumMonths,
            i = l(t, n);
        return {
            days: Math.max(0, l(t, n).diff(s()(), "days")),
            months: Math.max(0, Math.round(i.diff(s()(), "months", !0))),
        };
    }, [e, t]);
}
