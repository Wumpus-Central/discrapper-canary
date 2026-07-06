l.d(t, { F: () => C });
var i = l(64700),
    n = l(17928),
    a = l(318254),
    r = l(278416),
    s = l(561573),
    o = l(288106),
    c = l(240248),
    u = l(429635),
    d = l(430825),
    h = l(375708);
let p = "{value}",
    S = { ORBS: a.C, TAG: r.g };
function _(e) {
    return null != e ? S[e] : void 0;
}
function f(e, t) {
    return null == e ? null : e.includes(p) ? (null == t ? null : e.replaceAll(p, String(t))) : e;
}
function C(e, t) {
    let { applicationId: l, skuId: a } = t,
        r = (0, u.A)({ applicationId: l }),
        p = i.useMemo(() => {
            let e = r?.storefront?.promotions;
            return null == e ? null : (Object.values(e)[0] ?? null);
        }, [r]),
        S =
            "gift_customization" === e || "sku_gift_badge" === e || "vc_gift_recommendations" === e
                ? o.QK.GIFT
                : o.QK.SELF_PURCHASE,
        C = (0, n.bG)(
            [s.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    for (let l of e) {
                        let e = l[t];
                        if (e?.amount != null) return e.amount;
                    }
                    return null;
                })(s.A.getRewardsForSkuId(a), S),
            [a, S],
        );
    return i.useMemo(() => {
        if (null == p) return null;
        let t = null != p.endsAt ? new Date(p.endsAt) : null;
        switch (e) {
            case "storefront_banner": {
                let e = p.storefront?.headerText;
                if ((0, c.uJ)(e)) return null;
                return { Icon: _(p.pdp?.icon ?? null), text: e, tooltip: null, endsAt: t, rewardValue: null };
            }
            case "storefront_badge": {
                let e = p.storefront?.headerText;
                if ((0, c.uJ)(e)) return null;
                return {
                    Icon: _("TAG"),
                    text: h.intl.string(d.default.hriMCc),
                    tooltip: e,
                    endsAt: t,
                    rewardValue: null,
                };
            }
            case "pdp":
            case "card":
            case "gift_customization": {
                if (null == C) return null;
                let l = "gift_customization" === e ? p.checkout : p.pdp,
                    i = f(l?.label ?? null, C);
                if ((0, c.uJ)(i)) return null;
                return {
                    Icon: _(l?.icon ?? null),
                    text: i,
                    tooltip: f(l?.tooltip ?? null, C),
                    endsAt: t,
                    rewardValue: C,
                };
            }
            case "vc_purchase_recommendations":
            case "vc_gift_recommendations": {
                let e = p.vcStream?.label;
                if ((0, c.uJ)(e)) return null;
                return {
                    Icon: _(p.vcStream?.icon ?? null),
                    text: e,
                    tooltip: p.vcStream?.tooltip ?? null,
                    endsAt: t,
                    rewardValue: null,
                };
            }
            case "sku_purchase_badge":
            case "sku_gift_badge": {
                if (null == C) return null;
                let l = "sku_gift_badge" === e ? p.checkout : p.pdp,
                    i = f(l?.label ?? null, C);
                if ((0, c.uJ)(i)) return null;
                return {
                    Icon: _("TAG"),
                    text: h.intl.string(d.default.hriMCc),
                    tooltip: f(l?.tooltip ?? null, C),
                    endsAt: t,
                    rewardValue: C,
                };
            }
        }
    }, [e, p, C]);
}
