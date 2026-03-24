a.d(t, { t: () => o });
var n = a(64700),
    r = a(989349),
    s = a.n(r),
    l = a(112848),
    i = a(788868);
function d(e, t) {
    return s()(e).add(t, "months").add(1, "day");
}
function o() {
    let e = (0, l.$F)(),
        t = (0, l.Xb)();
    return (0, n.useMemo)(() => {
        let a;
        if (null == e || null == t) return null;
        if (e.status === l.Wo.UPCOMING) a = e.tenureReqNumMonths;
        else {
            let t = i.sp.indexOf(e.id),
                n = i.sp[t + 1];
            if (null == n || -1 === t) return null;
            a = i.VD[n].tenureReqNumMonths;
        }
        let n = d(t, a);
        return {
            days: Math.max(0, d(t, a).diff(s()(), "days")),
            months: Math.max(0, Math.round(n.diff(s()(), "months", !0))),
        };
    }, [e, t]);
}
