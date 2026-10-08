n.d(t, { c: () => o });
var r = n(582128),
    l = n(635358),
    i = n(830382),
    s = n(354328),
    a = n(67480),
    u = n(202541);
function o(e) {
    let { applicationId: t, skuIDs: n } = e,
        o = (0, s.A)("shop_include_unpublished"),
        c = r.useMemo(() => n.filter((e) => !u.oz.includes(e)), [n]);
    r.useEffect(() => {
        for (let e of c) a.A.isFetching(e) || null != a.A.get(e) || (0, i.EX)(t, e, l.g.VARIANTS_GROUP, o);
    }, [t, c, o]);
}
