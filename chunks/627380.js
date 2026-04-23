s.d(t, { t: () => o });
var n = s(64700),
    a = s(989349),
    r = s.n(a),
    l = s(655752),
    i = s(112848);
function d(e, t) {
    return r()(e).add(t, "months").add(1, "day");
}
function o() {
    let e = (0, l.P)(),
        t = (0, i.Xb)();
    return (0, n.useMemo)(() => {
        if (null == e || null == t) return null;
        let s = e.tenureReqNumMonths,
            n = d(t, s);
        return {
            days: Math.max(0, d(t, s).diff(r()(), "days")),
            months: Math.max(0, Math.round(n.diff(r()(), "months", !0))),
        };
    }, [e, t]);
}
