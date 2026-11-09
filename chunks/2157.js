var l = n(582128),
    i = n(240248),
    r = n(936785),
    a = n(879043),
    s = n(296045),
    o = n(556766),
    u = n(459005),
    c = n(25082),
    d = n(792996);
function m(e) {
    let { surface: t, applicationId: n, skuId: m } = e,
        p = (0, o.m)(n),
        C = (0, s.x)({ surface: t, skuId: m }),
        h = l.useMemo(() => {
            if (null == p) return null;
            for (let e of C) {
                let t = p[e.promotionId];
                if (null != t) return t;
            }
            return null;
        }, [p, C]),
        f = (0, u.n)({ surface: t, skuId: m }),
        E = (0, a.j)(h, "pdp.label"),
        S = (0, a.j)(h, "pdp.tooltip"),
        I = (0, a.j)(h, "checkout.label"),
        g = (0, a.j)(h, "checkout.tooltip");
    return (
        (0, a.P)(n, t),
        l.useMemo(() => {
            if (null == h) return null;
            let e = (0, r.RD)(h.endsAt);
            switch (t) {
                case "gift_customization": {
                    if (null == f) return null;
                    let t = (0, r.Ew)(I, f.amount);
                    if ((0, i.uJ)(t)) return null;
                    return {
                        Icon: (0, r.LZ)(h.checkout?.icon ?? null),
                        text: t,
                        tooltip: (0, r.Ew)(g, f.amount),
                        endsAt: e,
                        flavor: h.flavor,
                        rewardRequirements: h.rewardRequirements,
                    };
                }
                case "pdp":
                case "card": {
                    let t = h.pdp,
                        n = (0, r.Ew)(E, f?.amount ?? null);
                    if ((0, i.uJ)(n)) return null;
                    return {
                        Icon: (0, r.LZ)(t?.icon ?? null),
                        text: n,
                        tooltip: (0, r.Ew)(S, f?.amount ?? null),
                        endsAt: e,
                        flavor: h.flavor,
                        rewardRequirements: h.rewardRequirements,
                        rewardStatus: h.rewardStatus,
                    };
                }
                case "sku_purchase_badge":
                case "sku_gift_badge": {
                    if (null == f) return null;
                    let n = "sku_gift_badge" === t ? I : E,
                        l = "sku_gift_badge" === t ? g : S,
                        a = (0, r.Ew)(n, f.amount);
                    if ((0, i.uJ)(a)) return null;
                    return {
                        Icon: (0, r.LZ)("TAG"),
                        text: d.intl.string(c.default.hriMCc),
                        tooltip: (0, r.Ew)(l, f.amount),
                        endsAt: e,
                        flavor: h.flavor,
                        rewardRequirements: h.rewardRequirements,
                    };
                }
            }
        }, [t, h, f, E, S, I, g])
    );
}
n.d(
    t,
    {},
    {
        D: m,
        b: function (e) {
            let { surface: t, applicationId: n, skuId: i } = e,
                r = m({ surface: t, applicationId: n, skuId: i }),
                a = (0, u.n)({ surface: t, skuId: i }),
                o = (0, s.x)({ surface: t, skuId: i });
            return l.useMemo(() => ({ display: r, reward: a, offers: o }), [r, a, o]);
        },
    },
);
