r.d(t, { t: () => d });
var a = r(64700),
    n = r(989349),
    i = r.n(n),
    s = r(655752),
    l = r(112848);
function o(e, t) {
    return i()(e).add(t, "months").add(1, "day");
}
function d() {
    let e = (0, s.P)(),
        t = (0, l.Xb)();
    return (0, a.useMemo)(() => {
        if (null == e || null == t) return null;
        let r = e.tenureReqNumMonths,
            a = o(t, r);
        return {
            days: Math.max(0, o(t, r).diff(i()(), "days")),
            months: Math.max(0, Math.round(a.diff(i()(), "months", !0))),
        };
    }, [e, t]);
}
