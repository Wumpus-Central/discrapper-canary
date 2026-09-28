n.d(t, { A: () => P });
var r = n(477900);
n(582128);
var l = n(503698),
    i = n.n(l),
    a = n(536637),
    s = n.n(a),
    o = n(17928),
    c = n(297264),
    u = n(531260),
    d = n(287809),
    m = n(166403),
    g = n(158045),
    x = n(526292),
    T = n(724651),
    p = n(732280),
    I = n(511484),
    h = n(156601),
    f = n(202541),
    j = n(375708),
    E = n(832773);
function P(e) {
    let {
            isGift: t,
            premiumTier: n,
            offerTierMatchesCard: l,
            offerType: a,
            showYearlyPrice: P,
            priceOptions: v,
            textVariant: A,
            className: R,
            isApplicationHome: _,
            enablePremiumBrandRefresh: N,
            headerClassName: y,
            headingVariant: C = "heading-md/normal",
            headingColor: M,
        } = e,
        b = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
        L = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        U = (0, u.A)(),
        S = (0, x.k5)(),
        k = (0, x.nf)(),
        O = n === f.PremiumTypes.TIER_0 ? f.pe.TIER_0 : f.pe.TIER_2,
        G = b?.hasActiveTrial ? L?.premiumType : S ? f.PremiumTypes.TIER_2 : null,
        w = (0, p.V)(),
        F = (0, T.O)(),
        D = n === f.PremiumTypes.TIER_0 ? f.gD.PREMIUM_MONTH_TIER_0 : f.gD.PREMIUM_MONTH_TIER_2,
        B = (0, I.N1)(D),
        H = null != F && (0, I.YJ)(F) === D,
        V = w?.subscriptionTrial;
    if (!_ && !t && null != G && n === G && null != b && null != b.planIdFromItems) {
        let e = null != b.trialEndsAt ? s()(b?.trialEndsAt).diff(s()(), "d") : 0,
            t = f.hd[b.planIdFromItems],
            n = g.Ay.formatPriceString(g.Ay.getDefaultPrice(t.id), t.interval),
            l = a === f.Vk.PREMIUM_TRIAL,
            o = b.planIdFromItems === f.gD.PREMIUM_YEAR_TIER_2;
        return (0, r.jsx)(c.D, {
            variant: C,
            color: M,
            className: i()((l || !o) && E.K, y),
            children:
                null == b
                    ? null
                    : l
                      ? j.intl.format(j.t["2CGBri"], { remainingTime: e, price: n })
                      : o
                        ? j.intl.format(j.t.z2oQtA, {
                              percent: k?.percentage ?? f.Cq,
                              regularPrice: n,
                              renewalDate: g.Ay.getExpectedRenewalDate(b, U),
                          })
                        : j.intl.formatToPlainString(j.t["3ZiutU"], {
                              percent: k?.percentage ?? f._$,
                              regularPrice: n,
                              numMonths: k?.duration ?? f.OJ,
                          }),
        });
    }
    if (!_ && !t && l) {
        let e = g.Ay.formatPriceString(
            g.Ay.getDefaultPrice(n === f.PremiumTypes.TIER_0 ? f.gD.PREMIUM_MONTH_TIER_0 : f.gD.PREMIUM_MONTH_TIER_2),
            f.WT.MONTH,
        );
        if (a === f.Vk.PREMIUM_TRIAL)
            return (0, r.jsx)(c.D, {
                variant: C,
                color: M,
                className: i()(E.K, y),
                children: j.intl.format(j.t["9vyovu"], {
                    planName: (0, g.RH)(f.En[V?.skuId ?? f.pe.NONE] ?? f.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, g.re)({
                        intervalType: V?.interval ?? f.WT.DAY,
                        intervalCount: V?.intervalCount ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != F && null != B && H)
            return (0, r.jsx)(c.D, {
                variant: C,
                color: M,
                className: i()(E.K, y),
                children: j.intl.format(j.t.sJTwHQ, {
                    numMonths: F.discount.intervalCount ?? f.OJ,
                    discountedPrice: B,
                    regularPrice: e,
                }),
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.A, {
                subscriptionTier: O,
                isGift: t,
                className: null != R ? R : E.q,
                priceOptions: v,
                variant: A,
                isApplicationHome: _,
                enablePremiumBrandRefresh: N,
            }),
            P &&
                (0, r.jsx)(h.A, {
                    subscriptionTier: O,
                    interval: f.WT.YEAR,
                    className: null != R ? R : E.q,
                    isGift: t,
                    priceOptions: v,
                    variant: A,
                    isApplicationHome: _,
                    enablePremiumBrandRefresh: N,
                }),
        ],
    });
}
