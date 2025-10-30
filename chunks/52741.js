n.d(t, { Z: () => v });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(913527),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(594174),
    d = n(78839),
    f = n(74538),
    _ = n(140465),
    p = n(104494),
    h = n(639119),
    m = n(230916),
    g = n(504865),
    E = n(474936),
    b = n(388032),
    y = n(40747);
function O(e) {
    var t;
    let { defaultPriceString: n, subscriptionPlan: i, discountOffer: a } = e,
        o = (0, m.Aq)(i);
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
            showYearlyPrice: m,
            priceOptions: v,
            textVariant: I,
            className: T,
            isApplicationHome: S,
            enablePremiumBrandRefresh: A,
            headerClassName: C,
            headingVariant: N = "heading-md/normal",
            headingColor: R,
        } = e,
        P = (0, l.e7)([d.Z], () => d.Z.getPremiumTypeSubscription()),
        w = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        D = (0, _.t7)(),
        x = (0, _.lr)(),
        L = n === E.PremiumTypes.TIER_0 ? E.Si.TIER_0 : E.Si.TIER_2,
        M = (null == P ? void 0 : P.hasActiveTrial)
            ? null == w
                ? void 0
                : w.premiumType
            : D
              ? E.PremiumTypes.TIER_2
              : null,
        k = (0, h.N)(),
        j = (0, p.Ng)(),
        U = null == k ? void 0 : k.subscription_trial;
    if (!S && !t && null != M && n === M && null != P && null != P.planIdFromItems) {
        let e = null != P.trialEndsAt ? s()(null == P ? void 0 : P.trialEndsAt).diff(s()(), "d") : 0,
            t = E.GP[P.planIdFromItems],
            n = f.ZP.formatPriceString(f.ZP.getDefaultPrice(t.id), t.interval),
            i = () => {
                var t, r, i;
                return o === E.C.PREMIUM_TRIAL
                    ? b.intl.format(b.t["2CGBri"], {
                          remainingTime: e,
                          price: n,
                      })
                    : P.planIdFromItems === E.Xh.PREMIUM_YEAR_TIER_2
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
            color: R,
            className: a()(y.trialHeader, C),
            children: i(),
        });
    }
    if (!S && !t && i) {
        let e = f.ZP.formatPriceString(
            f.ZP.getDefaultPrice(n === E.PremiumTypes.TIER_0 ? E.Xh.PREMIUM_MONTH_TIER_0 : E.Xh.PREMIUM_MONTH_TIER_2),
            E.rV.MONTH,
        );
        if (o === E.C.PREMIUM_TRIAL) {
            var G, B, Z, F;
            return (0, r.jsx)(c.Heading, {
                variant: N,
                color: R,
                className: a()(y.trialHeader, C),
                children: b.intl.format(b.t["9vyovu"], {
                    planName: (0, f.aq)(
                        null != (B = E.IW[null != (G = null == U ? void 0 : U.sku_id) ? G : E.Si.NONE])
                            ? B
                            : E.Xh.PREMIUM_MONTH_TIER_2,
                    ),
                    duration: (0, f.if)({
                        intervalType: null != (Z = null == U ? void 0 : U.interval) ? Z : E.rV.DAY,
                        intervalCount: null != (F = null == U ? void 0 : U.interval_count) ? F : 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        }
        if (null != j)
            return (0, r.jsx)(c.Heading, {
                variant: N,
                color: R,
                className: a()(y.trialHeader, C),
                children: (0, r.jsx)(O, {
                    defaultPriceString: e,
                    subscriptionPlan: E.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: j,
                }),
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.Z, {
                subscriptionTier: L,
                isGift: t,
                className: null != T ? T : y.price,
                priceOptions: v,
                variant: I,
                isApplicationHome: S,
                enablePremiumBrandRefresh: A,
            }),
            m &&
                (0, r.jsx)(g.Z, {
                    subscriptionTier: L,
                    interval: E.rV.YEAR,
                    className: null != T ? T : y.price,
                    isGift: t,
                    priceOptions: v,
                    variant: I,
                    isApplicationHome: S,
                    enablePremiumBrandRefresh: A,
                }),
        ],
    });
}
