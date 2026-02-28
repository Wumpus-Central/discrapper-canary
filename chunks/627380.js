n.d(t, { t: () => o, x: () => d });
var r = n(64700),
    a = n(989349),
    s = n.n(a),
    l = n(112848),
    i = n(788868);
function d(e, t) {
    return Math.max(0, u(e, t).diff(s()(), "days"));
}
function u(e, t) {
    return s()(e).add(t, "months").add(1, "day");
}
function o() {
    let e = (0, l.$F)(),
        t = (0, l.Xb)();
    return (0, r.useMemo)(() => {
        let n;
        if (null == e || null == t) return null;
        if (e.status === l.Wo.UPCOMING) n = e.tenureReqNumMonths;
        else {
            let t = i.sp.indexOf(e.id),
                r = i.sp[t + 1];
            if (null == r || -1 === t) return null;
            n = i.VD[r].tenureReqNumMonths;
        }
        let r = u(t, n);
        return { days: d(t, n), months: Math.max(0, Math.round(r.diff(s()(), "months", !0))) };
    }, [e, t]);
}
