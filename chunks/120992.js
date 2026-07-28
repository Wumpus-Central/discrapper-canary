n.d(t, { c: () => u });
var l = n(582128),
    i = n(635358),
    r = n(830382),
    a = n(354328),
    s = n(67480),
    o = n(202541);
function u(e) {
    let { applicationId: t, skuIDs: n } = e,
        u = (0, a.A)("shop_include_unpublished"),
        c = l.useMemo(() => n.filter((e) => !o.oz.includes(e)), [n]);
    l.useEffect(() => {
        for (let e of c) s.A.isFetching(e) || null != s.A.get(e) || (0, r.EX)(t, e, i.g.VARIANTS_GROUP, u);
    }, [t, c, u]);
}
