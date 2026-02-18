n.d(t, { A: () => d });
var i = n(64700),
    l = n(989349),
    s = n.n(l),
    a = n(311907),
    r = n(832163),
    o = n(985018);
function d() {
    let e = (0, a.bG)([r.A], () => r.A.getConfig()?.promotionEndDatetime, []);
    return i.useMemo(() => {
        if (null == e) return null;
        let t = s()(),
            n = s()(e).diff(t, "days");
        return n <= 0 ? null : o.intl.formatToPlainString(o.t.BXpdIg, { days: Math.max(n, 1) });
    }, [e]);
}
