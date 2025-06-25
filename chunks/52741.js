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
    g = n(639119),
    x = n(230916),
    f = n(504865),
    h = n(474936),
    I = n(388032),
    v = n(753023);
function T(e) {
    var t;
    let { defaultPriceString: n, subscriptionPlan: r, discountOffer: l } = e,
        a = (0, x.A)(r);
    return (0, i.jsx)(i.Fragment, {
        children: I.intl.format(I.t.sJTwHR, {
            numMonths: null != (t = l.discount.user_usage_limit) ? t : h.rt,
            discountedPrice: a,
            regularPrice: n
        })
    });
}
function j(e) {
    var t, n, r, a, x, j, P;
    let { isGift: E, premiumTier: _, offerTierMatchesCard: N, offerType: R, showYearlyPrice: S, priceOptions: b, textVariant: Z, className: y, isApplicationHome: w, enablePremiumBrandRefresh: M, headerClassName: L, headingVariant: O = 'heading-md/normal', headingColor: H } = e,
        A = (0, o.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        U = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        G = (0, C.t7)(),
        k = (0, C.lr)(),
        D = _ === h.p9.TIER_0 ? h.Si.TIER_0 : h.Si.TIER_2,
        V = (null == A ? void 0 : A.hasActiveTrial) ? (null == U ? void 0 : U.premiumType) : G ? h.p9.TIER_2 : null,
        F = (0, g.N)(),
        B = (0, p.Ng)(),
        W = null == F ? void 0 : F.subscription_trial;
    if (!w && !E && null != V && _ === V && null != A && null != A.planIdFromItems) {
        let e = null != A.trialEndsAt ? s()(null == A ? void 0 : A.trialEndsAt).diff(s()(), 'd') : 0,
            a = h.GP[A.planIdFromItems],
            o = m.ZP.formatPriceString(m.ZP.getDefaultPrice(a.id), a.interval);
        return (0, i.jsx)(c.X6q, {
            variant: O,
            color: H,
            className: l()(v.trialHeader, L),
            children:
                R === h.C.PREMIUM_TRIAL
                    ? I.intl.format(I.t['2CGBrq'], {
                          remainingTime: e,
                          price: o
                      })
                    : A.planIdFromItems === h.Xh.PREMIUM_YEAR_TIER_2
                      ? I.intl.format(I.t['+qqh6u'], {
                            percent: null != (t = null == k ? void 0 : k.percentage) ? t : h.Bo,
                            regularPrice: o
                        })
                      : I.intl.formatToPlainString(I.t['3Ziutb'], {
                            percent: null != (n = null == k ? void 0 : k.percentage) ? n : h.M_,
                            regularPrice: o,
                            numMonths: null != (r = null == k ? void 0 : k.duration) ? r : h.rt
                        })
        });
    }
    if (!w && !E && N) {
        let e = m.ZP.formatPriceString(m.ZP.getDefaultPrice(_ === h.p9.TIER_0 ? h.Xh.PREMIUM_MONTH_TIER_0 : h.Xh.PREMIUM_MONTH_TIER_2), h.rV.MONTH);
        if (R === h.C.PREMIUM_TRIAL)
            return (0, i.jsx)(c.X6q, {
                variant: O,
                color: H,
                className: l()(v.trialHeader, L),
                children: I.intl.format(I.t['9vyovr'], {
                    planName: (0, m.aq)(null != (x = h.IW[null != (a = null == W ? void 0 : W.sku_id) ? a : h.Si.NONE]) ? x : h.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, m.if)({
                        intervalType: null != (j = null == W ? void 0 : W.interval) ? j : h.rV.DAY,
                        intervalCount: null != (P = null == W ? void 0 : W.interval_count) ? P : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        if (null != B)
            return (0, i.jsx)(c.X6q, {
                variant: O,
                color: H,
                className: l()(v.trialHeader, L),
                children: (0, i.jsx)(T, {
                    defaultPriceString: e,
                    subscriptionPlan: h.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: B
                })
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.Z, {
                subscriptionTier: D,
                isGift: E,
                className: null != y ? y : v.price,
                priceOptions: b,
                variant: Z,
                isApplicationHome: w,
                enablePremiumBrandRefresh: M
            }),
            S &&
                (0, i.jsx)(f.Z, {
                    subscriptionTier: D,
                    interval: h.rV.YEAR,
                    className: null != y ? y : v.price,
                    isGift: E,
                    priceOptions: b,
                    variant: Z,
                    isApplicationHome: w,
                    enablePremiumBrandRefresh: M
                })
        ]
    });
}
