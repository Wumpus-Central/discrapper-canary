r.d(t, { c: () => c });
var n = r(64700),
    u = r(635358),
    l = r(830382),
    i = r(354328),
    s = r(67480),
    a = r(788868);
function c(e) {
    let { applicationId: t, skuIDs: r } = e,
        c = (0, i.A)("shop_include_unpublished"),
        o = n.useMemo(() => r.filter((e) => !a.oz.includes(e)), [r]);
    n.useEffect(() => {
        for (let e of o) s.A.isFetching(e) || null != s.A.get(e) || (0, l.EX)(t, e, u.g.VARIANTS_GROUP, c);
    }, [t, o, c]);
}
