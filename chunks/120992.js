r.d(t, { c: () => a });
var n = r(64700),
    u = r(635358),
    i = r(830382),
    c = r(354328),
    s = r(67480),
    l = r(202541);
function a(e) {
    let { applicationId: t, skuIDs: r } = e,
        a = (0, c.A)("shop_include_unpublished"),
        o = n.useMemo(() => r.filter((e) => !l.oz.includes(e)), [r]);
    n.useEffect(() => {
        for (let e of o) s.A.isFetching(e) || null != s.A.get(e) || (0, i.EX)(t, e, u.g.VARIANTS_GROUP, a);
    }, [t, o, a]);
}
