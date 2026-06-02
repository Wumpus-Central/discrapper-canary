r.d(t, { c: () => o });
var n = r(64700),
    a = r(635358),
    l = r(830382),
    i = r(354328),
    u = r(67480),
    s = r(788868);
function o(e) {
    let { applicationId: t, skuIDs: r } = e,
        o = (0, i.A)("shop_include_unpublished"),
        c = n.useMemo(() => r.filter((e) => !s.oz.includes(e)), [r]);
    n.useEffect(() => {
        for (let e of c) u.A.isFetching(e) || null != u.A.get(e) || (0, l.EX)(t, e, a.g.VARIANTS_GROUP, o);
    }, [t, c, o]);
}
