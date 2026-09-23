r.d(t, { A: () => I });
var n = r(477900);
r(582128);
var i = r(503698),
    l = r.n(i),
    a = r(536637),
    s = r.n(a),
    o = r(17928),
    u = r(297264),
    c = r(531260),
    d = r(287809),
    m = r(166403),
    x = r(158045),
    p = r(526292),
    h = r(724651),
    f = r(732280),
    g = r(511484),
    A = r(156601),
    j = r(202541),
    E = r(375708),
    T = r(832773);
function I(e) {
    let {
            isGift: t,
            premiumTier: r,
            offerTierMatchesCard: i,
            offerType: a,
            showYearlyPrice: I,
            priceOptions: v,
            textVariant: R,
            className: N,
            isApplicationHome: P,
            enablePremiumBrandRefresh: _,
            headerClassName: M,
            headingVariant: y = "heading-md/normal",
            headingColor: C,
        } = e,
        S = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
        b = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        O = (0, c.A)(),
        G = (0, p.k5)(),
        L = (0, p.nf)(),
        U = r === j.PremiumTypes.TIER_0 ? j.pe.TIER_0 : j.pe.TIER_2,
        D = S?.hasActiveTrial ? b?.premiumType : G ? j.PremiumTypes.TIER_2 : null,
        w = (0, f.V)(),
        k = (0, h.O)(),
        B = r === j.PremiumTypes.TIER_0 ? j.gD.PREMIUM_MONTH_TIER_0 : j.gD.PREMIUM_MONTH_TIER_2,
        F = (0, g.N1)(B),
        H = null != k && (0, g.YJ)(k) === B,
        V = w?.subscriptionTrial;
    if (!P && !t && null != D && r === D && null != S && null != S.planIdFromItems) {
        let e = null != S.trialEndsAt ? s()(S?.trialEndsAt).diff(s()(), "d") : 0,
            t = j.hd[S.planIdFromItems],
            r = x.Ay.formatPriceString(x.Ay.getDefaultPrice(t.id), t.interval),
            i = a === j.Vk.PREMIUM_TRIAL,
            o = S.planIdFromItems === j.gD.PREMIUM_YEAR_TIER_2;
        return (0, n.jsx)(u.D, {
            variant: y,
            color: C,
            className: l()((i || !o) && T.K, M),
            children:
                null == S
                    ? null
                    : i
                      ? E.intl.format(E.t["2CGBri"], { remainingTime: e, price: r })
                      : o
                        ? E.intl.format(E.t.z2oQtA, {
                              percent: L?.percentage ?? j.Cq,
                              regularPrice: r,
                              renewalDate: x.Ay.getExpectedRenewalDate(S, O),
                          })
                        : E.intl.formatToPlainString(E.t["3ZiutU"], {
                              percent: L?.percentage ?? j._$,
                              regularPrice: r,
                              numMonths: L?.duration ?? j.OJ,
                          }),
        });
    }
    if (!P && !t && i) {
        let e = x.Ay.formatPriceString(
            x.Ay.getDefaultPrice(r === j.PremiumTypes.TIER_0 ? j.gD.PREMIUM_MONTH_TIER_0 : j.gD.PREMIUM_MONTH_TIER_2),
            j.WT.MONTH,
        );
        if (a === j.Vk.PREMIUM_TRIAL)
            return (0, n.jsx)(u.D, {
                variant: y,
                color: C,
                className: l()(T.K, M),
                children: E.intl.format(E.t["9vyovu"], {
                    planName: (0, x.RH)(j.En[V?.skuId ?? j.pe.NONE] ?? j.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, x.re)({
                        intervalType: V?.interval ?? j.WT.DAY,
                        intervalCount: V?.intervalCount ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != k && null != F && H)
            return (0, n.jsx)(u.D, {
                variant: y,
                color: C,
                className: l()(T.K, M),
                children: E.intl.format(E.t.sJTwHQ, {
                    numMonths: k.discount.intervalCount ?? j.OJ,
                    discountedPrice: F,
                    regularPrice: e,
                }),
            });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(A.A, {
                subscriptionTier: U,
                isGift: t,
                className: null != N ? N : T.q,
                priceOptions: v,
                variant: R,
                isApplicationHome: P,
                enablePremiumBrandRefresh: _,
            }),
            I &&
                (0, n.jsx)(A.A, {
                    subscriptionTier: U,
                    interval: j.WT.YEAR,
                    className: null != N ? N : T.q,
                    isGift: t,
                    priceOptions: v,
                    variant: R,
                    isApplicationHome: P,
                    enablePremiumBrandRefresh: _,
                }),
        ],
    });
}
