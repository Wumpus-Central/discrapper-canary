n.d(t, { Z: () => j });
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    a = n(913527),
    s = n.n(a),
    o = n(442837),
    c = n(481060),
    u = n(594174),
    d = n(78839),
    m = n(74538),
    C = n(140465),
    p = n(104494),
    x = n(639119),
    g = n(230916),
    h = n(504865),
    f = n(474936),
    I = n(388032),
    v = n(753023);
function T(e) {
    var t;
    let { defaultPriceString: n, subscriptionPlan: r, discountOffer: l } = e,
        a = (0, g.A)(r);
    return (0, i.jsx)(i.Fragment, {
        children: I.intl.format(I.t.sJTwHR, {
            numMonths: null != (t = l.discount.user_usage_limit) ? t : f.rt,
            discountedPrice: a,
            regularPrice: n
        })
    });
}
function j(e) {
    var t, n, r, a, g, j, P;
    let { isGift: E, premiumTier: N, offerTierMatchesCard: b, offerType: S, showYearlyPrice: _, priceOptions: R, textVariant: Z, className: y, isApplicationHome: w, enablePremiumBrandRefresh: M, headerClassName: O, headingVariant: L = 'heading-md/normal', headingColor: H } = e,
        A = (0, o.e7)([d.Z], () => d.Z.getPremiumTypeSubscription()),
        U = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        G = (0, C.t7)(),
        k = (0, C.lr)(),
        D = N === f.p9.TIER_0 ? f.Si.TIER_0 : f.Si.TIER_2,
        B = (null == A ? void 0 : A.hasActiveTrial) ? (null == U ? void 0 : U.premiumType) : G ? f.p9.TIER_2 : null,
        V = (0, x.N)(),
        F = (0, p.Ng)(),
        W = null == V ? void 0 : V.subscription_trial;
    if (!w && !E && null != B && N === B && null != A && null != A.planIdFromItems) {
        let e = null != A.trialEndsAt ? s()(null == A ? void 0 : A.trialEndsAt).diff(s()(), 'd') : 0,
            a = f.GP[A.planIdFromItems],
            o = m.ZP.formatPriceString(m.ZP.getDefaultPrice(a.id), a.interval);
        return (0, i.jsx)(c.X6q, {
            variant: L,
            color: H,
            className: l()(v.trialHeader, O),
            children:
                S === f.C.PREMIUM_TRIAL
                    ? I.intl.format(I.t['2CGBrq'], {
                          remainingTime: e,
                          price: o
                      })
                    : A.planIdFromItems === f.Xh.PREMIUM_YEAR_TIER_2
                      ? I.intl.format(I.t['+qqh6u'], {
                            percent: null != (t = null == k ? void 0 : k.percentage) ? t : f.Bo,
                            regularPrice: o
                        })
                      : I.intl.formatToPlainString(I.t['3Ziutb'], {
                            percent: null != (n = null == k ? void 0 : k.percentage) ? n : f.M_,
                            regularPrice: o,
                            numMonths: null != (r = null == k ? void 0 : k.duration) ? r : f.rt
                        })
        });
    }
    if (!w && !E && b) {
        let e = m.ZP.formatPriceString(m.ZP.getDefaultPrice(N === f.p9.TIER_0 ? f.Xh.PREMIUM_MONTH_TIER_0 : f.Xh.PREMIUM_MONTH_TIER_2), f.rV.MONTH);
        if (S === f.C.PREMIUM_TRIAL)
            return (0, i.jsx)(c.X6q, {
                variant: L,
                color: H,
                className: l()(v.trialHeader, O),
                children: I.intl.format(I.t['9vyovr'], {
                    planName: (0, m.aq)(null != (g = f.IW[null != (a = null == W ? void 0 : W.sku_id) ? a : f.Si.NONE]) ? g : f.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, m.if)({
                        intervalType: null != (j = null == W ? void 0 : W.interval) ? j : f.rV.DAY,
                        intervalCount: null != (P = null == W ? void 0 : W.interval_count) ? P : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        if (null != F)
            return (0, i.jsx)(c.X6q, {
                variant: L,
                color: H,
                className: l()(v.trialHeader, O),
                children: (0, i.jsx)(T, {
                    defaultPriceString: e,
                    subscriptionPlan: f.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: F
                })
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.Z, {
                subscriptionTier: D,
                isGift: E,
                className: null != y ? y : v.price,
                priceOptions: R,
                variant: Z,
                isApplicationHome: w,
                enablePremiumBrandRefresh: M
            }),
            _ &&
                (0, i.jsx)(h.Z, {
                    subscriptionTier: D,
                    interval: f.rV.YEAR,
                    className: null != y ? y : v.price,
                    isGift: E,
                    priceOptions: R,
                    variant: Z,
                    isApplicationHome: w,
                    enablePremiumBrandRefresh: M
                })
        ]
    });
}
