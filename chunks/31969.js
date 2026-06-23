"use strict";
n.d(t, { F: () => E });
var l = n(64700),
    i = n(17928),
    s = n(318254),
    r = n(278416),
    a = n(561573),
    o = n(288106),
    u = n(240248),
    c = n(429635),
    d = n(430825),
    m = n(375708);
let h = "{value}",
    p = { ORBS: s.C, TAG: r.g };
function f(e) {
    return null != e ? p[e] : void 0;
}
function g(e, t) {
    return null == e ? null : e.includes(h) ? (null == t ? null : e.replaceAll(h, String(t))) : e;
}
function E(e, t) {
    let { applicationId: n, skuId: s } = t,
        r = (0, c.A)({ applicationId: n }),
        h = l.useMemo(() => {
            let e = r?.storefront?.promotions;
            return null == e ? null : (Object.values(e)[0] ?? null);
        }, [r]),
        p =
            "gift_customization" === e || "sku_gift_badge" === e || "vc_gift_recommendations" === e
                ? o.QK.GIFT
                : o.QK.SELF_PURCHASE,
        E = (0, i.bG)(
            [a.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    for (let n of e) {
                        let e = n[t];
                        if (e?.amount != null) return e.amount;
                    }
                    return null;
                })(a.A.getRewardsForSkuId(s), p),
            [s, p],
        );
    return l.useMemo(() => {
        if (null == h) return null;
        let t = null != h.endsAt ? new Date(h.endsAt) : null;
        switch (e) {
            case "storefront_banner":
            case "vc_purchase_recommendations":
            case "vc_gift_recommendations": {
                let e = h.storefront?.headerText;
                if ((0, u.uJ)(e)) return null;
                return { Icon: f(h.pdp?.icon ?? null), text: e, tooltip: null, endsAt: t, rewardValue: null };
            }
            case "storefront_badge": {
                let e = h.storefront?.headerText;
                if ((0, u.uJ)(e)) return null;
                return {
                    Icon: f(h.pdp?.icon ?? "TAG"),
                    text: m.intl.string(d.default.hriMCc),
                    tooltip: e,
                    endsAt: t,
                    rewardValue: null,
                };
            }
            case "pdp":
            case "card":
            case "gift_customization": {
                if (null == E) return null;
                let n = "gift_customization" === e ? h.checkout : h.pdp,
                    l = g(n?.label ?? null, E);
                if ((0, u.uJ)(l)) return null;
                return {
                    Icon: f(n?.icon ?? null),
                    text: l,
                    tooltip: g(n?.tooltip ?? null, E),
                    endsAt: t,
                    rewardValue: E,
                };
            }
            case "sku_purchase_badge":
            case "sku_gift_badge": {
                if (null == E) return null;
                let n = "sku_gift_badge" === e ? h.checkout : h.pdp,
                    l = g(n?.label ?? null, E);
                if ((0, u.uJ)(l)) return null;
                return {
                    Icon: f(n?.icon ?? null),
                    text: m.intl.string(d.default.hriMCc),
                    tooltip: g(n?.tooltip ?? null, E),
                    endsAt: t,
                    rewardValue: E,
                };
            }
        }
    }, [e, h, E]);
}
