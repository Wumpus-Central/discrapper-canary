var r = n(477900);
n(582128);
var i = n(503698),
    l = n.n(i),
    a = n(536637),
    s = n.n(a),
    o = n(855986),
    c = n(534514),
    u = n(531260),
    m = n(287809),
    d = n(166403),
    g = n(448645),
    I = n(526292),
    x = n(423814),
    T = n(77528),
    p = n(511484),
    h = n(156601),
    f = n(682901),
    j = n(792996),
    A = n(832773);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    isGift: t,
                    premiumTier: n,
                    offerTierMatchesCard: i,
                    offerType: a,
                    showYearlyPrice: E,
                    priceOptions: v,
                    textVariant: R,
                    className: P,
                    isApplicationHome: _,
                    enablePremiumBrandRefresh: y,
                    headerClassName: N,
                    headingVariant: M = "heading-sm/medium",
                    headingColor: S,
                } = e,
                C = (0, o.bG)([d.A], () => d.A.getPremiumTypeSubscription()),
                U = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
                b = (0, u.A)(),
                L = (0, I.k5)(),
                k = (0, I.nf)(),
                O = n === f.PremiumTypes.TIER_0 ? f.pe.TIER_0 : f.pe.TIER_2,
                w = C?.hasActiveTrial ? U?.premiumType : L ? f.PremiumTypes.TIER_2 : null,
                G = (0, T.V)(),
                D = (0, x.O)(),
                F = n === f.PremiumTypes.TIER_0 ? f.gD.PREMIUM_MONTH_TIER_0 : f.gD.PREMIUM_MONTH_TIER_2,
                H = (0, p.N1)(F),
                Z = null != D && (0, p.YJ)(D) === F,
                V = G?.subscriptionTrial;
            if (!_ && !t && null != w && n === w && null != C && null != C.planIdFromItems) {
                let e = null != C.trialEndsAt ? s()(C?.trialEndsAt).diff(s()(), "d") : 0,
                    t = f.hd[C.planIdFromItems],
                    n = g.Ay.formatPriceString(g.Ay.getDefaultPrice(t.id), t.interval),
                    i = a === f.Vk.PREMIUM_TRIAL,
                    o = C.planIdFromItems === f.gD.PREMIUM_YEAR_TIER_2;
                return (0, r.jsx)(c.D, {
                    variant: M,
                    color: S,
                    className: l()((i || !o) && A.K, N),
                    children:
                        null == C
                            ? null
                            : i
                              ? j.intl.format(j.t["2CGBri"], { remainingTime: e, price: n })
                              : o
                                ? j.intl.format(j.t.z2oQtA, {
                                      percent: k?.percentage ?? 20,
                                      regularPrice: n,
                                      renewalDate: g.Ay.getExpectedRenewalDate(C, b),
                                  })
                                : j.intl.formatToPlainString(j.t["3ZiutU"], {
                                      percent: k?.percentage ?? 30,
                                      regularPrice: n,
                                      numMonths: k?.duration ?? 1,
                                  }),
                });
            }
            if (!_ && !t && i) {
                let e = g.Ay.formatPriceString(
                    g.Ay.getDefaultPrice(
                        n === f.PremiumTypes.TIER_0 ? f.gD.PREMIUM_MONTH_TIER_0 : f.gD.PREMIUM_MONTH_TIER_2,
                    ),
                    f.WT.MONTH,
                );
                if (a === f.Vk.PREMIUM_TRIAL)
                    return (0, r.jsx)(c.D, {
                        variant: M,
                        color: S,
                        className: l()(A.K, N),
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
                if (null != D && null != H && Z)
                    return (0, r.jsx)(c.D, {
                        variant: M,
                        color: S,
                        className: l()(A.K, N),
                        children: j.intl.format(j.t.sJTwHQ, {
                            numMonths: D.discount.intervalCount ?? 1,
                            discountedPrice: H,
                            regularPrice: e,
                        }),
                    });
            }
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(h.A, {
                        subscriptionTier: O,
                        isGift: t,
                        className: null != P ? P : A.q,
                        priceOptions: v,
                        variant: R,
                        isApplicationHome: _,
                        enablePremiumBrandRefresh: y,
                    }),
                    E &&
                        (0, r.jsx)(h.A, {
                            subscriptionTier: O,
                            interval: f.WT.YEAR,
                            className: null != P ? P : A.q,
                            isGift: t,
                            priceOptions: v,
                            variant: R,
                            isApplicationHome: _,
                            enablePremiumBrandRefresh: y,
                        }),
                ],
            });
        },
    },
);
