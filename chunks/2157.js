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
        h = (0, s.x)({ surface: t, skuId: m }),
        C = l.useMemo(() => {
            if (null == p) return null;
            for (let e of h) {
                let t = p[e.promotionId];
                if (null != t) return t;
            }
            return null;
        }, [p, h]),
        f = (0, u.n)({ surface: t, skuId: m }),
        E = (0, a.j)(C, "pdp.label"),
        S = (0, a.j)(C, "pdp.tooltip"),
        I = (0, a.j)(C, "checkout.label"),
        g = (0, a.j)(C, "checkout.tooltip");
    return (
        (0, a.P)(n, t),
        l.useMemo(() => {
            if (null == C) return null;
            let e = (0, r.RD)(C.endsAt);
            switch (t) {
                case "gift_customization": {
                    if (null == f) return null;
                    let t = (0, r.Ew)(I, f.amount);
                    if ((0, i.uJ)(t)) return null;
                    return {
                        Icon: (0, r.LZ)(C.checkout?.icon ?? null),
                        text: t,
                        tooltip: (0, r.Ew)(g, f.amount),
                        endsAt: e,
                        flavor: C.flavor,
                        rewardRequirements: C.rewardRequirements,
                    };
                }
                case "pdp":
                case "card": {
                    let t = C.pdp,
                        n = (0, r.Ew)(E, f?.amount ?? null);
                    if ((0, i.uJ)(n)) return null;
                    return {
                        Icon: (0, r.LZ)(t?.icon ?? null),
                        text: n,
                        tooltip: (0, r.Ew)(S, f?.amount ?? null),
                        endsAt: e,
                        flavor: C.flavor,
                        rewardRequirements: C.rewardRequirements,
                        rewardStatus: C.rewardStatus,
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
                        flavor: C.flavor,
                        rewardRequirements: C.rewardRequirements,
                    };
                }
            }
        }, [t, C, f, E, S, I, g])
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
