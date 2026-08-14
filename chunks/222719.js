n.d(t, { A: () => P });
var r = n(477900);
n(582128);
var l = n(503698),
    i = n.n(l),
    a = n(989349),
    s = n.n(a),
    o = n(17928),
    c = n(297264),
    u = n(531260),
    d = n(287809),
    m = n(166403),
    g = n(158045),
    x = n(526292),
    T = n(724651),
    I = n(732280),
    f = n(511484),
    h = n(156601),
    p = n(202541),
    E = n(375708),
    A = n(934608);
function P(e) {
    let {
            isGift: t,
            premiumTier: n,
            offerTierMatchesCard: l,
            offerType: a,
            showYearlyPrice: P,
            priceOptions: j,
            textVariant: v,
            className: R,
            isApplicationHome: _,
            enablePremiumBrandRefresh: M,
            headerClassName: N,
            headingVariant: S = "heading-md/normal",
            headingColor: y,
        } = e,
        C = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
        U = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        L = (0, u.A)(),
        b = (0, x.k5)(),
        G = (0, x.nf)(),
        O = n === p.PremiumTypes.TIER_0 ? p.pe.TIER_0 : p.pe.TIER_2,
        k = C?.hasActiveTrial ? U?.premiumType : b ? p.PremiumTypes.TIER_2 : null,
        w = (0, I.V)(),
        D = (0, T.O)(),
        F = n === p.PremiumTypes.TIER_0 ? p.gD.PREMIUM_MONTH_TIER_0 : p.gD.PREMIUM_MONTH_TIER_2,
        H = (0, f.N1)(F),
        Z = null != D && (0, f.YJ)(D) === F,
        B = w?.subscriptionTrial;
    if (!_ && !t && null != k && n === k && null != C && null != C.planIdFromItems) {
        let e = null != C.trialEndsAt ? s()(C?.trialEndsAt).diff(s()(), "d") : 0,
            t = p.hd[C.planIdFromItems],
            n = g.Ay.formatPriceString(g.Ay.getDefaultPrice(t.id), t.interval),
            l = a === p.Vk.PREMIUM_TRIAL,
            o = C.planIdFromItems === p.gD.PREMIUM_YEAR_TIER_2;
        return (0, r.jsx)(c.D, {
            variant: S,
            color: y,
            className: i()((l || !o) && A.K, N),
            children:
                null == C
                    ? null
                    : l
                      ? E.intl.format(E.t["2CGBri"], { remainingTime: e, price: n })
                      : o
                        ? E.intl.format(E.t.z2oQtA, {
                              percent: G?.percentage ?? p.Cq,
                              regularPrice: n,
                              renewalDate: g.Ay.getExpectedRenewalDate(C, L),
                          })
                        : E.intl.formatToPlainString(E.t["3ZiutU"], {
                              percent: G?.percentage ?? p._$,
                              regularPrice: n,
                              numMonths: G?.duration ?? p.OJ,
                          }),
        });
    }
    if (!_ && !t && l) {
        let e = g.Ay.formatPriceString(
            g.Ay.getDefaultPrice(n === p.PremiumTypes.TIER_0 ? p.gD.PREMIUM_MONTH_TIER_0 : p.gD.PREMIUM_MONTH_TIER_2),
            p.WT.MONTH,
        );
        if (a === p.Vk.PREMIUM_TRIAL)
            return (0, r.jsx)(c.D, {
                variant: S,
                color: y,
                className: i()(A.K, N),
                children: E.intl.format(E.t["9vyovu"], {
                    planName: (0, g.RH)(p.En[B?.skuId ?? p.pe.NONE] ?? p.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, g.re)({
                        intervalType: B?.interval ?? p.WT.DAY,
                        intervalCount: B?.intervalCount ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != D && null != H && Z)
            return (0, r.jsx)(c.D, {
                variant: S,
                color: y,
                className: i()(A.K, N),
                children: E.intl.format(E.t.sJTwHQ, {
                    numMonths: D.discount.intervalCount ?? p.OJ,
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
                className: null != R ? R : A.q,
                priceOptions: j,
                variant: v,
                isApplicationHome: _,
                enablePremiumBrandRefresh: M,
            }),
            P &&
                (0, r.jsx)(h.A, {
                    subscriptionTier: O,
                    interval: p.WT.YEAR,
                    className: null != R ? R : A.q,
                    isGift: t,
                    priceOptions: j,
                    variant: v,
                    isApplicationHome: _,
                    enablePremiumBrandRefresh: M,
                }),
        ],
    });
}
