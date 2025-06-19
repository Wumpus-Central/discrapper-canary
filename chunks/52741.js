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
    let { isGift: E, premiumTier: b, offerTierMatchesCard: _, offerType: N, showYearlyPrice: S, priceOptions: R, textVariant: Z, className: y, isApplicationHome: w, enablePremiumRebrandDesign: L, headerClassName: M, headingVariant: O = 'heading-md/normal', headingColor: H } = e,
        A = (0, o.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        U = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        D = (0, C.t7)(),
        G = (0, C.lr)(),
        k = b === h.p9.TIER_0 ? h.Si.TIER_0 : h.Si.TIER_2,
        V = (null == A ? void 0 : A.hasActiveTrial) ? (null == U ? void 0 : U.premiumType) : D ? h.p9.TIER_2 : null,
        F = (0, g.N)(),
        W = (0, p.Ng)(),
        B = null == F ? void 0 : F.subscription_trial;
    if (!w && !E && null != V && b === V && null != A && null != A.planIdFromItems) {
        let e = null != A.trialEndsAt ? s()(null == A ? void 0 : A.trialEndsAt).diff(s()(), 'd') : 0,
            a = h.GP[A.planIdFromItems],
            o = m.ZP.formatPriceString(m.ZP.getDefaultPrice(a.id), a.interval);
        return (0, i.jsx)(c.X6q, {
            variant: O,
            color: H,
            className: l()(v.trialHeader, M),
            children:
                N === h.C.PREMIUM_TRIAL
                    ? I.intl.format(I.t['2CGBrq'], {
                          remainingTime: e,
                          price: o
                      })
                    : A.planIdFromItems === h.Xh.PREMIUM_YEAR_TIER_2
                      ? I.intl.format(I.t['+qqh6u'], {
                            percent: null != (t = null == G ? void 0 : G.percentage) ? t : h.Bo,
                            regularPrice: o
                        })
                      : I.intl.formatToPlainString(I.t['3Ziutb'], {
                            percent: null != (n = null == G ? void 0 : G.percentage) ? n : h.M_,
                            regularPrice: o,
                            numMonths: null != (r = null == G ? void 0 : G.duration) ? r : h.rt
                        })
        });
    }
    if (!w && !E && _) {
        let e = m.ZP.formatPriceString(m.ZP.getDefaultPrice(b === h.p9.TIER_0 ? h.Xh.PREMIUM_MONTH_TIER_0 : h.Xh.PREMIUM_MONTH_TIER_2), h.rV.MONTH);
        if (N === h.C.PREMIUM_TRIAL)
            return (0, i.jsx)(c.X6q, {
                variant: O,
                color: H,
                className: l()(v.trialHeader, M),
                children: I.intl.format(I.t['9vyovr'], {
                    planName: (0, m.aq)(null != (x = h.IW[null != (a = null == B ? void 0 : B.sku_id) ? a : h.Si.NONE]) ? x : h.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, m.if)({
                        intervalType: null != (j = null == B ? void 0 : B.interval) ? j : h.rV.DAY,
                        intervalCount: null != (P = null == B ? void 0 : B.interval_count) ? P : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        if (null != W)
            return (0, i.jsx)(c.X6q, {
                variant: O,
                color: H,
                className: l()(v.trialHeader, M),
                children: (0, i.jsx)(T, {
                    defaultPriceString: e,
                    subscriptionPlan: h.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: W
                })
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.Z, {
                subscriptionTier: k,
                isGift: E,
                className: null != y ? y : v.price,
                priceOptions: R,
                variant: Z,
                isApplicationHome: w,
                enablePremiumRebrandDesign: L
            }),
            S &&
                (0, i.jsx)(f.Z, {
                    subscriptionTier: k,
                    interval: h.rV.YEAR,
                    className: null != y ? y : v.price,
                    isGift: E,
                    priceOptions: R,
                    variant: Z,
                    isApplicationHome: w,
                    enablePremiumRebrandDesign: L
                })
        ]
    });
}
