"use strict";
n.d(t, { F: () => g });
var l = n(64700),
    i = n(17928),
    s = n(318254),
    r = n(278416),
    a = n(561573),
    o = n(288106),
    u = n(240248),
    c = n(429635),
    d = n(375708);
let m = "{value}",
    h = { ORBS: s.C, TAG: r.g };
function p(e) {
    return null != e ? h[e] : void 0;
}
function f(e, t) {
    return null == e ? null : e.includes(m) ? (null == t ? null : e.replaceAll(m, String(t))) : e;
}
function g(e, t) {
    let { applicationId: n, skuId: s } = t,
        r = (0, c.A)({ applicationId: n }),
        m = l.useMemo(() => {
            let e = r?.storefront?.promotions;
            return null == e ? null : (Object.values(e)[0] ?? null);
        }, [r]),
        h =
            "gift_customization" === e || "sku_gift_badge" === e || "vc_gift_recommendations" === e
                ? o.QK.GIFT
                : o.QK.SELF_PURCHASE,
        g = (0, i.bG)(
            [a.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    for (let n of e) {
                        let e = n[t];
                        if (e?.amount != null) return e.amount;
                    }
                    return null;
                })(a.A.getRewardsForSkuId(s), h),
            [s, h],
        );
    return l.useMemo(() => {
        if (null == m) return null;
        let t = null != m.endsAt ? new Date(m.endsAt) : null;
        switch (e) {
            case "storefront_banner":
            case "vc_purchase_recommendations":
            case "vc_gift_recommendations": {
                let e = m.storefront?.headerText;
                if ((0, u.uJ)(e)) return null;
                return { Icon: p(m.pdp?.icon ?? null), text: e, tooltip: null, endsAt: t, rewardValue: null };
            }
            case "storefront_badge": {
                let e = m.storefront?.headerText;
                if ((0, u.uJ)(e)) return null;
                return {
                    Icon: p(m.pdp?.icon ?? "TAG"),
                    text: d.intl.string(d.t.cZCqGn),
                    tooltip: e,
                    endsAt: t,
                    rewardValue: null,
                };
            }
            case "pdp":
            case "card":
            case "gift_customization": {
                if (null == g) return null;
                let n = "gift_customization" === e ? m.checkout : m.pdp,
                    l = f(n?.label ?? null, g);
                if ((0, u.uJ)(l)) return null;
                return {
                    Icon: p(n?.icon ?? null),
                    text: l,
                    tooltip: f(n?.tooltip ?? null, g),
                    endsAt: t,
                    rewardValue: g,
                };
            }
            case "sku_purchase_badge":
            case "sku_gift_badge": {
                if (null == g) return null;
                let n = "sku_gift_badge" === e ? m.checkout : m.pdp,
                    l = f(n?.label ?? null, g);
                if ((0, u.uJ)(l)) return null;
                return {
                    Icon: p(n?.icon ?? null),
                    text: d.intl.string(d.t.cZCqGn),
                    tooltip: f(n?.tooltip ?? null, g),
                    endsAt: t,
                    rewardValue: g,
                };
            }
        }
    }, [e, m, g]);
}
