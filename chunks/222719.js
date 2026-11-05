var n = t(477900);
t(582128);
var l = t(503698),
    i = t.n(l),
    s = t(536637),
    a = t.n(s),
    c = t(855986),
    o = t(534514),
    u = t(531260),
    d = t(287809),
    m = t(166403),
    p = t(722178),
    x = t(526292),
    h = t(423814),
    A = t(77528),
    T = t(511484),
    I = t(156601),
    E = t(682901),
    f = t(792996),
    g = t(832773);
t.d(
    r,
    {},
    {
        A: function (e) {
            let {
                    isGift: r,
                    premiumTier: t,
                    offerTierMatchesCard: l,
                    offerType: s,
                    showYearlyPrice: R,
                    priceOptions: j,
                    textVariant: _,
                    className: v,
                    isApplicationHome: N,
                    enablePremiumBrandRefresh: M,
                    headerClassName: P,
                    headingVariant: y = "heading-sm/medium",
                    headingColor: b,
                } = e,
                O = (0, c.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
                C = (0, c.bG)([d.default], () => d.default.getCurrentUser()),
                U = (0, u.A)(),
                L = (0, x.k5)(),
                D = (0, x.nf)(),
                S = t === E.PremiumTypes.TIER_0 ? E.pe.TIER_0 : E.pe.TIER_2,
                G = O?.hasActiveTrial ? C?.premiumType : L ? E.PremiumTypes.TIER_2 : null,
                H = (0, A.V)(),
                k = (0, h.O)(),
                F = t === E.PremiumTypes.TIER_0 ? E.gD.PREMIUM_MONTH_TIER_0 : E.gD.PREMIUM_MONTH_TIER_2,
                B = (0, T.N1)(F),
                w = null != k && (0, T.YJ)(k) === F,
                V = H?.subscriptionTrial;
            if (!N && !r && null != G && t === G && null != O && null != O.planIdFromItems) {
                let e = null != O.trialEndsAt ? a()(O?.trialEndsAt).diff(a()(), "d") : 0,
                    r = E.hd[O.planIdFromItems],
                    t = p.Ay.formatPriceString(p.Ay.getDefaultPrice(r.id), r.interval),
                    l = s === E.Vk.PREMIUM_TRIAL,
                    c = O.planIdFromItems === E.gD.PREMIUM_YEAR_TIER_2;
                return (0, n.jsx)(o.D, {
                    variant: y,
                    color: b,
                    className: i()((l || !c) && g.K, P),
                    children:
                        null == O
                            ? null
                            : l
                              ? f.intl.format(f.t["2CGBri"], { remainingTime: e, price: t })
                              : c
                                ? f.intl.format(f.t.z2oQtA, {
                                      percent: D?.percentage ?? 20,
                                      regularPrice: t,
                                      renewalDate: p.Ay.getExpectedRenewalDate(O, U),
                                  })
                                : f.intl.formatToPlainString(f.t["3ZiutU"], {
                                      percent: D?.percentage ?? 30,
                                      regularPrice: t,
                                      numMonths: D?.duration ?? 1,
                                  }),
                });
            }
            if (!N && !r && l) {
                let e = p.Ay.formatPriceString(
                    p.Ay.getDefaultPrice(
                        t === E.PremiumTypes.TIER_0 ? E.gD.PREMIUM_MONTH_TIER_0 : E.gD.PREMIUM_MONTH_TIER_2,
                    ),
                    E.WT.MONTH,
                );
                if (s === E.Vk.PREMIUM_TRIAL)
                    return (0, n.jsx)(o.D, {
                        variant: y,
                        color: b,
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
                    return (0, n.jsx)(o.D, {
                        variant: y,
                        color: b,
                        className: i()(g.K, P),
                        children: f.intl.format(f.t.sJTwHQ, {
                            numMonths: k.discount.intervalCount ?? 1,
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
                        priceOptions: j,
                        variant: _,
                        isApplicationHome: N,
                        enablePremiumBrandRefresh: M,
                    }),
                    R &&
                        (0, n.jsx)(I.A, {
                            subscriptionTier: S,
                            interval: E.WT.YEAR,
                            className: null != v ? v : g.q,
                            isGift: r,
                            priceOptions: j,
                            variant: _,
                            isApplicationHome: N,
                            enablePremiumBrandRefresh: M,
                        }),
                ],
            });
        },
    },
);
