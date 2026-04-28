t.d(u, { t: () => s });
var l = t(64700),
    e = t(989349),
    r = t.n(e),
    d = t(655752),
    a = t(112848);
function i(n, u) {
    return r()(n).add(u, "months").add(1, "day");
}
function s() {
    let n = (0, d.P)(),
        u = (0, a.Xb)();
    return (0, l.useMemo)(() => {
        if (null == n || null == u) return null;
        let t = n.tenureReqNumMonths,
            l = i(u, t);
        return {
            days: Math.max(0, i(u, t).diff(r()(), "days")),
            months: Math.max(0, Math.round(l.diff(r()(), "months", !0))),
        };
    }, [n, u]);
}
