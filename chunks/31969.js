"use strict";
n.d(t, { F: () => f });
var l = n(64700),
    i = n(17928),
    s = n(318254),
    r = n(278416),
    a = n(561573),
    o = n(288106),
    u = n(240248),
    c = n(429635);
let d = "{value}",
    m = { ORBS: s.C, TAG: r.g };
function h(e) {
    return null != e ? m[e] : void 0;
}
function p(e, t) {
    return null == e ? null : e.includes(d) ? (null == t ? null : e.replaceAll(d, String(t))) : e;
}
function f(e, t) {
    let { applicationId: n, skuId: s } = t,
        r = (0, c.A)({ applicationId: n }),
        d = l.useMemo(() => {
            let e = r?.storefront?.promotions;
            return null == e ? null : (Object.values(e)[0] ?? null);
        }, [r]),
        m = "gift" === e ? o.QK.GIFT : o.QK.SELF_PURCHASE,
        f = (0, i.bG)(
            [a.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    for (let n of e) {
                        let e = n[t];
                        if (e?.amount != null) return e.amount;
                    }
                    return null;
                })(a.A.getRewardsForSkuId(s), m),
            [s, m],
        );
    return l.useMemo(() => {
        if (null == d) return null;
        let t = null != d.endsAt ? new Date(d.endsAt) : null;
        switch (e) {
            case "storefront_banner": {
                let e = d.storefront?.headerText;
                if ((0, u.uJ)(e)) return null;
                return { Icon: h(d.pdp?.icon ?? null), text: e, tooltip: null, endsAt: t };
            }
            case "pdp":
            case "gift": {
                if (null == f) return null;
                let n = "gift" === e ? d.checkout : d.pdp,
                    l = p(n?.label ?? null, f);
                if ((0, u.uJ)(l)) return null;
                return { Icon: h(n?.icon ?? null), text: l, tooltip: p(n?.tooltip ?? null, f), endsAt: t };
            }
            case "wishlist_recommendations":
                return null;
        }
    }, [e, d, f]);
}
