"use strict";
n.d(t, { P: () => c });
var r = n(64700),
    i = n(793574),
    s = n(688810),
    a = n(429913),
    o = n(67480),
    l = n(328968),
    u = n(733391);
let c = (e) => {
    let { applicationId: t, skuId: n, analyticsLocations: c } = e,
        { analyticsLocations: d } = (0, s.Ay)(c, i.A.SLAYER_STOREFRONT_PAYMENT_MODAL),
        _ = (0, a.h)(t);
    return (
        r.useEffect(() => {
            null == _ ||
                null == _.guildId ||
                null == n ||
                l.A.isFetchingForSKU(n) ||
                null != o.A.get(n) ||
                (0, u.qf)(_.guildId, n);
        }, [_, n]),
        { analyticsLocations: d }
    );
};
