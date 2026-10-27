n.d(t, { c: () => c });
var l = n(582128),
    r = n(635358),
    i = n(830382),
    a = n(354328),
    s = n(67480),
    u = n(202541);
function c(e) {
    let { applicationId: t, skuIDs: n } = e,
        c = (0, a.A)("shop_include_unpublished"),
        o = l.useMemo(() => n.filter((e) => !u.oz.includes(e)), [n]);
    l.useEffect(() => {
        for (let e of o) s.A.isFetching(e) || null != s.A.get(e) || (0, i.EX)(t, e, r.g.VARIANTS_GROUP, c);
    }, [t, o, c]);
}
