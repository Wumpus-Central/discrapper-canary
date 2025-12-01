n.d(t, { Z: () => v });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(913527),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(594174),
    d = n(78839),
    f = n(74538),
    p = n(140465),
    _ = n(622909),
    m = n(639119),
    h = n(230916),
    g = n(504865),
    E = n(474936),
    b = n(388032),
    y = n(560230);
function O(e) {
    var t;
    let { defaultPriceString: n, subscriptionPlan: i, discountOffer: a } = e,
        o = (0, h.Aq)(i);
    return (0, r.jsx)(r.Fragment, {
        children: b.intl.format(b.t.sJTwHQ, {
            numMonths: null != (t = a.discount.user_usage_limit) ? t : E.rt,
            discountedPrice: o,
            regularPrice: n,
        }),
    });
}
function v(e) {
    let {
            isGift: t,
            premiumTier: n,
            offerTierMatchesCard: i,
            offerType: o,
            showYearlyPrice: h,
            priceOptions: v,
            textVariant: S,
            className: I,
            isApplicationHome: T,
            enablePremiumBrandRefresh: A,
            headerClassName: C,
            headingVariant: N = "heading-md/normal",
            headingColor: P,
        } = e,
        R = (0, l.e7)([d.Z], () => d.Z.getPremiumTypeSubscription()),
        w = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        D = (0, p.t7)(),
        x = (0, p.lr)(),
        L = n === E.PremiumTypes.TIER_0 ? E.Si.TIER_0 : E.Si.TIER_2,
        j = (null == R ? void 0 : R.hasActiveTrial)
            ? null == w
                ? void 0
                : w.premiumType
            : D
              ? E.PremiumTypes.TIER_2
              : null,
        M = (0, m.N)(),
        k = (0, _.N)(),
        U = null == M ? void 0 : M.subscription_trial;
    if (!T && !t && null != j && n === j && null != R && null != R.planIdFromItems) {
        let e = null != R.trialEndsAt ? s()(null == R ? void 0 : R.trialEndsAt).diff(s()(), "d") : 0,
            t = E.GP[R.planIdFromItems],
            n = f.ZP.formatPriceString(f.ZP.getDefaultPrice(t.id), t.interval),
            i = () => {
                var t, r, i;
                return o === E.C.PREMIUM_TRIAL
                    ? b.intl.format(b.t["2CGBri"], {
                          remainingTime: e,
                          price: n,
                      })
                    : R.planIdFromItems === E.Xh.PREMIUM_YEAR_TIER_2
                      ? b.intl.format(b.t["+qqh6g"], {
                            percent: null != (t = null == x ? void 0 : x.percentage) ? t : E.Bo,
                            regularPrice: n,
                        })
                      : b.intl.formatToPlainString(b.t["3ZiutU"], {
                            percent: null != (r = null == x ? void 0 : x.percentage) ? r : E.M_,
                            regularPrice: n,
                            numMonths: null != (i = null == x ? void 0 : x.duration) ? i : E.rt,
                        });
            };
        return (0, r.jsx)(c.Heading, {
            variant: N,
            color: P,
            className: a()(y.trialHeader, C),
            children: i(),
        });
    }
    if (!T && !t && i) {
        let e = f.ZP.formatPriceString(
            f.ZP.getDefaultPrice(n === E.PremiumTypes.TIER_0 ? E.Xh.PREMIUM_MONTH_TIER_0 : E.Xh.PREMIUM_MONTH_TIER_2),
            E.rV.MONTH,
        );
        if (o === E.C.PREMIUM_TRIAL) {
            var G, Z, B, F;
            return (0, r.jsx)(c.Heading, {
                variant: N,
                color: P,
                className: a()(y.trialHeader, C),
                children: b.intl.format(b.t["9vyovu"], {
                    planName: (0, f.MF)(
                        null != (Z = E.IW[null != (G = null == U ? void 0 : U.sku_id) ? G : E.Si.NONE])
                            ? Z
                            : E.Xh.PREMIUM_MONTH_TIER_2,
                    ),
                    duration: (0, f.if)({
                        intervalType: null != (B = null == U ? void 0 : U.interval) ? B : E.rV.DAY,
                        intervalCount: null != (F = null == U ? void 0 : U.interval_count) ? F : 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        }
        if (null != k)
            return (0, r.jsx)(c.Heading, {
                variant: N,
                color: P,
                className: a()(y.trialHeader, C),
                children: (0, r.jsx)(O, {
                    defaultPriceString: e,
                    subscriptionPlan: E.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: k,
                }),
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.Z, {
                subscriptionTier: L,
                isGift: t,
                className: null != I ? I : y.price,
                priceOptions: v,
                variant: S,
                isApplicationHome: T,
                enablePremiumBrandRefresh: A,
            }),
            h &&
                (0, r.jsx)(g.Z, {
                    subscriptionTier: L,
                    interval: E.rV.YEAR,
                    className: null != I ? I : y.price,
                    isGift: t,
                    priceOptions: v,
                    variant: S,
                    isApplicationHome: T,
                    enablePremiumBrandRefresh: A,
                }),
        ],
    });
}
