"use strict";
n.d(t, { c: () => u });
var i = n(64700),
    r = n(635358),
    s = n(830382),
    a = n(354328),
    o = n(67480),
    l = n(788868);
function u(e) {
    let { applicationId: t, skuIDs: n } = e,
        u = (0, a.A)("shop_include_unpublished"),
        c = i.useMemo(() => n.filter((e) => !l.oz.includes(e)), [n]);
    i.useEffect(() => {
        for (let e of c) o.A.isFetching(e) || null != o.A.get(e) || (0, s.EX)(t, e, r.g.VARIANTS_GROUP, u);
    }, [t, c, u]);
}
