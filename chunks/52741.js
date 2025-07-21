i.d(t, { Z: () => j });
var n = i(255367);
i(73800);
var r = i(120356),
    l = i.n(r),
    a = i(913527),
    s = i.n(a),
    o = i(442837),
    c = i(481060),
    u = i(594174),
    d = i(78839),
    m = i(74538),
    C = i(140465),
    p = i(104494),
    g = i(639119),
    x = i(230916),
    f = i(504865),
    h = i(474936),
    v = i(388032),
    I = i(753023);
function T(e) {
    var t;
    let { defaultPriceString: i, subscriptionPlan: r, discountOffer: l } = e,
        a = (0, x.A)(r);
    return (0, n.jsx)(n.Fragment, {
        children: v.intl.format(v.t.sJTwHR, {
            numMonths: null != (t = l.discount.user_usage_limit) ? t : h.rt,
            discountedPrice: a,
            regularPrice: i
        })
    });
}
function j(e) {
    var t, i, r, a, x, j, P;
    let { isGift: E, premiumTier: N, offerTierMatchesCard: _, offerType: b, showYearlyPrice: S, priceOptions: R, textVariant: Z, className: y, isApplicationHome: w, enablePremiumBrandRefresh: M, headerClassName: O, headingVariant: L = 'heading-md/normal', headingColor: H } = e,
        A = (0, o.e7)([d.Z], () => d.Z.getPremiumTypeSubscription()),
        U = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        G = (0, C.t7)(),
        k = (0, C.lr)(),
        D = N === h.p9.TIER_0 ? h.Si.TIER_0 : h.Si.TIER_2,
        V = (null == A ? void 0 : A.hasActiveTrial) ? (null == U ? void 0 : U.premiumType) : G ? h.p9.TIER_2 : null,
        B = (0, g.N)(),
        F = (0, p.Ng)(),
        W = null == B ? void 0 : B.subscription_trial;
    if (!w && !E && null != V && N === V && null != A && null != A.planIdFromItems) {
        let e = null != A.trialEndsAt ? s()(null == A ? void 0 : A.trialEndsAt).diff(s()(), 'd') : 0,
            a = h.GP[A.planIdFromItems],
            o = m.ZP.formatPriceString(m.ZP.getDefaultPrice(a.id), a.interval);
        return (0, n.jsx)(c.X6q, {
            variant: L,
            color: H,
            className: l()(I.trialHeader, O),
            children:
                b === h.C.PREMIUM_TRIAL
                    ? v.intl.format(v.t['2CGBrq'], {
                          remainingTime: e,
                          price: o
                      })
                    : A.planIdFromItems === h.Xh.PREMIUM_YEAR_TIER_2
                      ? v.intl.format(v.t['+qqh6u'], {
                            percent: null != (t = null == k ? void 0 : k.percentage) ? t : h.Bo,
                            regularPrice: o
                        })
                      : v.intl.formatToPlainString(v.t['3Ziutb'], {
                            percent: null != (i = null == k ? void 0 : k.percentage) ? i : h.M_,
                            regularPrice: o,
                            numMonths: null != (r = null == k ? void 0 : k.duration) ? r : h.rt
                        })
        });
    }
    if (!w && !E && _) {
        let e = m.ZP.formatPriceString(m.ZP.getDefaultPrice(N === h.p9.TIER_0 ? h.Xh.PREMIUM_MONTH_TIER_0 : h.Xh.PREMIUM_MONTH_TIER_2), h.rV.MONTH);
        if (b === h.C.PREMIUM_TRIAL)
            return (0, n.jsx)(c.X6q, {
                variant: L,
                color: H,
                className: l()(I.trialHeader, O),
                children: v.intl.format(v.t['9vyovr'], {
                    planName: (0, m.aq)(null != (x = h.IW[null != (a = null == W ? void 0 : W.sku_id) ? a : h.Si.NONE]) ? x : h.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, m.if)({
                        intervalType: null != (j = null == W ? void 0 : W.interval) ? j : h.rV.DAY,
                        intervalCount: null != (P = null == W ? void 0 : W.interval_count) ? P : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        if (null != F)
            return (0, n.jsx)(c.X6q, {
                variant: L,
                color: H,
                className: l()(I.trialHeader, O),
                children: (0, n.jsx)(T, {
                    defaultPriceString: e,
                    subscriptionPlan: h.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: F
                })
            });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(f.Z, {
                subscriptionTier: D,
                isGift: E,
                className: null != y ? y : I.price,
                priceOptions: R,
                variant: Z,
                isApplicationHome: w,
                enablePremiumBrandRefresh: M
            }),
            S &&
                (0, n.jsx)(f.Z, {
                    subscriptionTier: D,
                    interval: h.rV.YEAR,
                    className: null != y ? y : I.price,
                    isGift: E,
                    priceOptions: R,
                    variant: Z,
                    isApplicationHome: w,
                    enablePremiumBrandRefresh: M
                })
        ]
    });
}
