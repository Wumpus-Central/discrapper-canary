u.d(t, { t: () => i });
var r = u(64700),
    e = u(989349),
    d = u.n(e),
    l = u(655752),
    s = u(878784);
function a(n, t) {
    return d()(n).add(t, "months").add(1, "day");
}
function i() {
    let n = (0, l.P)(),
        t = (0, s.Xb)();
    return (0, r.useMemo)(() => {
        if (null == n || null == t) return null;
        let u = n.tenureReqNumMonths,
            r = a(t, u);
        return {
            days: Math.max(0, a(t, u).diff(d()(), "days")),
            months: Math.max(0, Math.round(r.diff(d()(), "months", !0))),
        };
    }, [n, t]);
}
