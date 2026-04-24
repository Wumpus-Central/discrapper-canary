"use strict";
r.d(t, { t: () => c });
var i = r(64700),
    a = r(989349),
    n = r.n(a),
    s = r(655752),
    l = r(112848);
function o(e, t) {
    return n()(e).add(t, "months").add(1, "day");
}
function c() {
    let e = (0, s.P)(),
        t = (0, l.Xb)();
    return (0, i.useMemo)(() => {
        if (null == e || null == t) return null;
        let r = e.tenureReqNumMonths,
            i = o(t, r);
        return {
            days: Math.max(0, o(t, r).diff(n()(), "days")),
            months: Math.max(0, Math.round(i.diff(n()(), "months", !0))),
        };
    }, [e, t]);
}
