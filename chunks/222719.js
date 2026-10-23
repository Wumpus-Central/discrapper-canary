t.d(r, { A: () => R });
var n = t(477900);
t(582128);
var l = t(503698),
    i = t.n(l),
    a = t(536637),
    s = t.n(a),
    c = t(17928),
    u = t(297264),
    o = t(531260),
    d = t(287809),
    m = t(166403),
    p = t(927578),
    x = t(526292),
    h = t(724651),
    A = t(732280),
    T = t(511484),
    I = t(156601),
    E = t(202541),
    f = t(105292),
    g = t(832773);
function R(e) {
    let {
            isGift: r,
            premiumTier: t,
            offerTierMatchesCard: l,
            offerType: a,
            showYearlyPrice: R,
            priceOptions: _,
            textVariant: j,
            className: v,
            isApplicationHome: N,
            enablePremiumBrandRefresh: M,
            headerClassName: P,
            headingVariant: y = "heading-md/normal",
            headingColor: O,
        } = e,
        C = (0, c.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
        U = (0, c.bG)([d.default], () => d.default.getCurrentUser()),
        L = (0, o.A)(),
        b = (0, x.k5)(),
        D = (0, x.nf)(),
        S = t === E.PremiumTypes.TIER_0 ? E.pe.TIER_0 : E.pe.TIER_2,
        G = C?.hasActiveTrial ? U?.premiumType : b ? E.PremiumTypes.TIER_2 : null,
        H = (0, A.V)(),
        k = (0, h.O)(),
        F = t === E.PremiumTypes.TIER_0 ? E.gD.PREMIUM_MONTH_TIER_0 : E.gD.PREMIUM_MONTH_TIER_2,
        B = (0, T.N1)(F),
        w = null != k && (0, T.YJ)(k) === F,
        V = H?.subscriptionTrial;
    if (!N && !r && null != G && t === G && null != C && null != C.planIdFromItems) {
        let e = null != C.trialEndsAt ? s()(C?.trialEndsAt).diff(s()(), "d") : 0,
            r = E.hd[C.planIdFromItems],
            t = p.Ay.formatPriceString(p.Ay.getDefaultPrice(r.id), r.interval),
            l = a === E.Vk.PREMIUM_TRIAL,
            c = C.planIdFromItems === E.gD.PREMIUM_YEAR_TIER_2;
        return (0, n.jsx)(u.D, {
            variant: y,
            color: O,
            className: i()((l || !c) && g.K, P),
            children:
                null == C
                    ? null
                    : l
                      ? f.intl.format(f.t["2CGBri"], { remainingTime: e, price: t })
                      : c
                        ? f.intl.format(f.t.z2oQtA, {
                              percent: D?.percentage ?? E.Cq,
                              regularPrice: t,
                              renewalDate: p.Ay.getExpectedRenewalDate(C, L),
                          })
                        : f.intl.formatToPlainString(f.t["3ZiutU"], {
                              percent: D?.percentage ?? E._$,
                              regularPrice: t,
                              numMonths: D?.duration ?? E.OJ,
                          }),
        });
    }
    if (!N && !r && l) {
        let e = p.Ay.formatPriceString(
            p.Ay.getDefaultPrice(t === E.PremiumTypes.TIER_0 ? E.gD.PREMIUM_MONTH_TIER_0 : E.gD.PREMIUM_MONTH_TIER_2),
            E.WT.MONTH,
        );
        if (a === E.Vk.PREMIUM_TRIAL)
            return (0, n.jsx)(u.D, {
                variant: y,
                color: O,
                className: i()(g.K, P),
                children: f.intl.format(f.t["9vyovu"], {
                    planName: (0, p.RH)(E.En[V?.skuId ?? E.pe.NONE] ?? E.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, p.re)({
                        intervalType: V?.interval ?? E.WT.DAY,
                        intervalCount: V?.intervalCount ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != k && null != B && w)
            return (0, n.jsx)(u.D, {
                variant: y,
                color: O,
                className: i()(g.K, P),
                children: f.intl.format(f.t.sJTwHQ, {
                    numMonths: k.discount.intervalCount ?? E.OJ,
                    discountedPrice: B,
                    regularPrice: e,
                }),
            });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(I.A, {
                subscriptionTier: S,
                isGift: r,
                className: null != v ? v : g.q,
                priceOptions: _,
                variant: j,
                isApplicationHome: N,
                enablePremiumBrandRefresh: M,
            }),
            R &&
                (0, n.jsx)(I.A, {
                    subscriptionTier: S,
                    interval: E.WT.YEAR,
                    className: null != v ? v : g.q,
                    isGift: r,
                    priceOptions: _,
                    variant: j,
                    isApplicationHome: N,
                    enablePremiumBrandRefresh: M,
                }),
        ],
    });
}
