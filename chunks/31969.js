t.d(l, { F: () => _ });
var r = t(582128),
    n = t(17928),
    u = t(318254),
    o = t(278416),
    a = t(403581),
    i = t(561573),
    c = t(288106),
    s = t(240248),
    f = t(429635),
    d = t(206285),
    m = t(375708);
let p = "{value}",
    v = { ORBS: u.C, TAG: o.TagIcon, NITRO: a.t };
function g(e) {
    return null != e ? v[e] : void 0;
}
function w(e, l) {
    return null == e ? null : e.includes(p) ? (null == l ? null : e.replaceAll(p, String(l))) : e;
}
function _(e, l) {
    let { applicationId: t, skuId: u } = l,
        o = (0, f.A)({ applicationId: t }),
        a = (0, n.bG)([i.A], () => i.A.getPromotionIdsForSkuId(u), [u]),
        p = r.useMemo(() => {
            let e = o?.storefront?.promotions;
            if (null == e) return null;
            if (null == u) return Object.values(e)[0] ?? null;
            if (null == a) return null;
            for (let l of a) {
                let t = e[l];
                if (null != t) return t;
            }
            return null;
        }, [o, u, a]),
        v =
            "gift_customization" === e || "sku_gift_badge" === e || "vc_gift_recommendations" === e
                ? c.QK.GIFT
                : c.QK.SELF_PURCHASE,
        _ = (0, n.bG)(
            [i.A],
            () =>
                (function (e, l) {
                    if (null == e) return null;
                    for (let t of e) {
                        let e = t[l];
                        if (e?.amount != null && e.amount > 0) return e;
                    }
                    return null;
                })(i.A.getRewardsForSkuId(u), v),
            [u, v],
        );
    return r.useMemo(() => {
        if (null == p) return null;
        let l = null != p.endsAt ? new Date(p.endsAt) : null;
        switch (e) {
            case "storefront_banner": {
                let e = p.storefront?.headerText;
                if ((0, s.uJ)(e)) return null;
                return {
                    Icon: g(p.pdp?.icon ?? null),
                    text: e,
                    tooltip: null,
                    endsAt: l,
                    flavor: p.flavor,
                    reward: null,
                    rewardRequirements: p.rewardRequirements,
                };
            }
            case "storefront_badge": {
                let e = p.storefront?.headerText;
                if ((0, s.uJ)(e)) return null;
                return {
                    Icon: g("TAG"),
                    text: m.intl.string(d.default.hriMCc),
                    tooltip: e,
                    endsAt: l,
                    flavor: p.flavor,
                    reward: null,
                    rewardRequirements: p.rewardRequirements,
                };
            }
            case "gift_customization": {
                if (null == _) return null;
                let e = w(p.checkout?.label ?? null, _.amount);
                if ((0, s.uJ)(e)) return null;
                return {
                    Icon: g(p.checkout?.icon ?? null),
                    text: e,
                    tooltip: w(p.checkout?.tooltip ?? null, _.amount),
                    endsAt: l,
                    flavor: p.flavor,
                    reward: _,
                    rewardRequirements: p.rewardRequirements,
                };
            }
            case "pdp":
            case "card": {
                let e = p.pdp,
                    t = w(e?.label ?? null, _?.amount ?? null);
                if ((0, s.uJ)(t)) return null;
                return {
                    Icon: g(e?.icon ?? null),
                    text: t,
                    tooltip: w(e?.tooltip ?? null, _?.amount ?? null),
                    endsAt: l,
                    flavor: p.flavor,
                    reward: _,
                    rewardRequirements: p.rewardRequirements,
                };
            }
            case "vc_purchase_recommendations":
            case "vc_gift_recommendations": {
                let e = p.vcStream?.label;
                if ((0, s.uJ)(e)) return null;
                return {
                    Icon: g(p.vcStream?.icon ?? null),
                    text: e,
                    tooltip: p.vcStream?.tooltip ?? null,
                    endsAt: l,
                    flavor: p.flavor,
                    reward: null,
                    rewardRequirements: p.rewardRequirements,
                };
            }
            case "sku_purchase_badge":
            case "sku_gift_badge": {
                if (null == _) return null;
                let t = "sku_gift_badge" === e ? p.checkout : p.pdp,
                    r = w(t?.label ?? null, _.amount);
                if ((0, s.uJ)(r)) return null;
                return {
                    Icon: g("TAG"),
                    text: m.intl.string(d.default.hriMCc),
                    tooltip: w(t?.tooltip ?? null, _.amount),
                    endsAt: l,
                    flavor: p.flavor,
                    reward: _,
                    rewardRequirements: p.rewardRequirements,
                };
            }
        }
    }, [e, p, _]);
}
