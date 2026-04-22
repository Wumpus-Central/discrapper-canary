n.d(t, { P: () => d });
var l = n(64700),
    r = n(793574),
    i = n(688810),
    s = n(429913),
    a = n(67480),
    o = n(328968),
    u = n(733391);
let d = (e) => {
    let { applicationId: t, skuId: n, analyticsLocations: d } = e,
        { analyticsLocations: c } = (0, i.Ay)(d, r.A.SLAYER_STOREFRONT_PAYMENT_MODAL),
        C = (0, s.h)(t);
    return (
        l.useEffect(() => {
            null == C ||
                null == C.guildId ||
                null == n ||
                o.A.isFetchingForSKU(n) ||
                null != a.A.get(n) ||
                (0, u.qf)(C.guildId, n);
        }, [C, n]),
        { analyticsLocations: c }
    );
};
