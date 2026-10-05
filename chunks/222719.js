t.d(r, { A: () => A });
var n = t(477900);
t(582128);
var i = t(503698),
    l = t.n(i),
    a = t(536637),
    s = t.n(a),
    o = t(17928),
    c = t(297264),
    d = t(531260),
    u = t(287809),
    m = t(166403),
    x = t(158045),
    p = t(526292),
    h = t(724651),
    g = t(732280),
    f = t(511484),
    j = t(156601),
    T = t(202541),
    E = t(375708),
    I = t(832773);
function A(e) {
    let {
            isGift: r,
            premiumTier: t,
            offerTierMatchesCard: i,
            offerType: a,
            showYearlyPrice: A,
            priceOptions: v,
            textVariant: N,
            className: R,
            isApplicationHome: _,
            enablePremiumBrandRefresh: P,
            headerClassName: M,
            headingVariant: C = "heading-md/normal",
            headingColor: y,
        } = e,
        b = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
        O = (0, o.bG)([u.default], () => u.default.getCurrentUser()),
        S = (0, d.A)(),
        U = (0, p.k5)(),
        D = (0, p.nf)(),
        G = t === T.PremiumTypes.TIER_0 ? T.pe.TIER_0 : T.pe.TIER_2,
        k = b?.hasActiveTrial ? O?.premiumType : U ? T.PremiumTypes.TIER_2 : null,
        L = (0, g.V)(),
        B = (0, h.O)(),
        H = t === T.PremiumTypes.TIER_0 ? T.gD.PREMIUM_MONTH_TIER_0 : T.gD.PREMIUM_MONTH_TIER_2,
        w = (0, f.N1)(H),
        F = null != B && (0, f.YJ)(B) === H,
        V = L?.subscriptionTrial;
    if (!_ && !r && null != k && t === k && null != b && null != b.planIdFromItems) {
        let e = null != b.trialEndsAt ? s()(b?.trialEndsAt).diff(s()(), "d") : 0,
            r = T.hd[b.planIdFromItems],
            t = x.Ay.formatPriceString(x.Ay.getDefaultPrice(r.id), r.interval),
            i = a === T.Vk.PREMIUM_TRIAL,
            o = b.planIdFromItems === T.gD.PREMIUM_YEAR_TIER_2;
        return (0, n.jsx)(c.D, {
            variant: C,
            color: y,
            className: l()((i || !o) && I.K, M),
            children:
                null == b
                    ? null
                    : i
                      ? E.intl.format(E.t["2CGBri"], { remainingTime: e, price: t })
                      : o
                        ? E.intl.format(E.t.z2oQtA, {
                              percent: D?.percentage ?? T.Cq,
                              regularPrice: t,
                              renewalDate: x.Ay.getExpectedRenewalDate(b, S),
                          })
                        : E.intl.formatToPlainString(E.t["3ZiutU"], {
                              percent: D?.percentage ?? T._$,
                              regularPrice: t,
                              numMonths: D?.duration ?? T.OJ,
                          }),
        });
    }
    if (!_ && !r && i) {
        let e = x.Ay.formatPriceString(
            x.Ay.getDefaultPrice(t === T.PremiumTypes.TIER_0 ? T.gD.PREMIUM_MONTH_TIER_0 : T.gD.PREMIUM_MONTH_TIER_2),
            T.WT.MONTH,
        );
        if (a === T.Vk.PREMIUM_TRIAL)
            return (0, n.jsx)(c.D, {
                variant: C,
                color: y,
                className: l()(I.K, M),
                children: E.intl.format(E.t["9vyovu"], {
                    planName: (0, x.RH)(T.En[V?.skuId ?? T.pe.NONE] ?? T.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, x.re)({
                        intervalType: V?.interval ?? T.WT.DAY,
                        intervalCount: V?.intervalCount ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != B && null != w && F)
            return (0, n.jsx)(c.D, {
                variant: C,
                color: y,
                className: l()(I.K, M),
                children: E.intl.format(E.t.sJTwHQ, {
                    numMonths: B.discount.intervalCount ?? T.OJ,
                    discountedPrice: w,
                    regularPrice: e,
                }),
            });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(j.A, {
                subscriptionTier: G,
                isGift: r,
                className: null != R ? R : I.q,
                priceOptions: v,
                variant: N,
                isApplicationHome: _,
                enablePremiumBrandRefresh: P,
            }),
            A &&
                (0, n.jsx)(j.A, {
                    subscriptionTier: G,
                    interval: T.WT.YEAR,
                    className: null != R ? R : I.q,
                    isGift: r,
                    priceOptions: v,
                    variant: N,
                    isApplicationHome: _,
                    enablePremiumBrandRefresh: P,
                }),
        ],
    });
}
