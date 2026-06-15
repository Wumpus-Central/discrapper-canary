n.d(u, { t: () => s });
var l = n(64700),
    t = n(989349),
    r = n.n(t),
    i = n(655752),
    d = n(878784);
function a(e, u) {
    return r()(e).add(u, "months").add(1, "day");
}
function s() {
    let e = (0, i.P)(),
        u = (0, d.Xb)();
    return (0, l.useMemo)(() => {
        if (null == e || null == u) return null;
        let n = e.tenureReqNumMonths,
            l = a(u, n);
        return {
            days: Math.max(0, a(u, n).diff(r()(), "days")),
            months: Math.max(0, Math.round(l.diff(r()(), "months", !0))),
        };
    }, [e, u]);
}
