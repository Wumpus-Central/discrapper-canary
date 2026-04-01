n.d(t, { B: () => d });
var a = n(64700),
    l = n(989349),
    s = n.n(l),
    i = n(311907),
    r = n(832163),
    o = n(985018);
function d() {
    let e,
        t =
            ((e = (0, i.bG)([r.A], () => r.A.getConfig()?.promotionEndDatetime, [])),
            a.useMemo(() => {
                if (null == e) return null;
                let t = s()(),
                    n = s()(e).diff(t, "days");
                return n <= 0 ? null : n;
            }, [e]));
    return a.useMemo(() => (null == t ? null : o.intl.formatToPlainString(o.t.BXpdIg, { days: Math.max(t, 1) })), [t]);
}
