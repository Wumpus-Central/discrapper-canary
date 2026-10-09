n.d(t, { c: () => c });
var r = n(582128),
    l = n(635358),
    i = n(830382),
    s = n(354328),
    a = n(67480),
    u = n(202541);
function c(e) {
    let { applicationId: t, skuIDs: n } = e,
        c = (0, s.A)("shop_include_unpublished"),
        o = r.useMemo(() => n.filter((e) => !u.oz.includes(e)), [n]);
    r.useEffect(() => {
        for (let e of o) a.A.isFetching(e) || null != a.A.get(e) || (0, i.EX)(t, e, l.g.VARIANTS_GROUP, c);
    }, [t, o, c]);
}
