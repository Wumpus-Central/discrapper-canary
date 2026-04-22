"use strict";
r.d(t, { t: () => c });
var a = r(64700),
    i = r(989349),
    n = r.n(i),
    l = r(655752),
    s = r(112848);
function o(e, t) {
    return n()(e).add(t, "months").add(1, "day");
}
function c() {
    let e = (0, l.P)(),
        t = (0, s.Xb)();
    return (0, a.useMemo)(() => {
        if (null == e || null == t) return null;
        let r = e.tenureReqNumMonths,
            a = o(t, r);
        return {
            days: Math.max(0, o(t, r).diff(n()(), "days")),
            months: Math.max(0, Math.round(a.diff(n()(), "months", !0))),
        };
    }, [e, t]);
}
