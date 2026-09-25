n.d(t, { A: () => A });
var r = n(477900);
n(582128);
var l = n(503698),
    i = n.n(l),
    a = n(536637),
    s = n.n(a),
    o = n(17928),
    c = n(297264),
    u = n(531260),
    d = n(287809),
    m = n(166403),
    g = n(158045),
    x = n(526292),
    h = n(724651),
    p = n(732280),
    I = n(511484),
    f = n(156601),
    T = n(202541),
    E = n(375708),
    j = n(832773);
function A(e) {
    let {
            isGift: t,
            premiumTier: n,
            offerTierMatchesCard: l,
            offerType: a,
            showYearlyPrice: A,
            priceOptions: v,
            textVariant: N,
            className: C,
            isApplicationHome: y,
            enablePremiumBrandRefresh: _,
            headerClassName: P,
            headingVariant: R = "heading-md/normal",
            headingColor: S,
        } = e,
        L = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
        M = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        b = (0, u.A)(),
        U = (0, x.k5)(),
        G = (0, x.nf)(),
        F = n === T.PremiumTypes.TIER_0 ? T.pe.TIER_0 : T.pe.TIER_2,
        D = L?.hasActiveTrial ? M?.premiumType : U ? T.PremiumTypes.TIER_2 : null,
        w = (0, p.V)(),
        O = (0, h.O)(),
        k = n === T.PremiumTypes.TIER_0 ? T.gD.PREMIUM_MONTH_TIER_0 : T.gD.PREMIUM_MONTH_TIER_2,
        B = (0, I.N1)(k),
        H = null != O && (0, I.YJ)(O) === k,
        V = w?.subscriptionTrial;
    if (!y && !t && null != D && n === D && null != L && null != L.planIdFromItems) {
        let e = null != L.trialEndsAt ? s()(L?.trialEndsAt).diff(s()(), "d") : 0,
            t = T.hd[L.planIdFromItems],
            n = g.Ay.formatPriceString(g.Ay.getDefaultPrice(t.id), t.interval),
            l = a === T.Vk.PREMIUM_TRIAL,
            o = L.planIdFromItems === T.gD.PREMIUM_YEAR_TIER_2;
        return (0, r.jsx)(c.D, {
            variant: R,
            color: S,
            className: i()((l || !o) && j.K, P),
            children:
                null == L
                    ? null
                    : l
                      ? E.intl.format(E.t["2CGBri"], { remainingTime: e, price: n })
                      : o
                        ? E.intl.format(E.t.z2oQtA, {
                              percent: G?.percentage ?? T.Cq,
                              regularPrice: n,
                              renewalDate: g.Ay.getExpectedRenewalDate(L, b),
                          })
                        : E.intl.formatToPlainString(E.t["3ZiutU"], {
                              percent: G?.percentage ?? T._$,
                              regularPrice: n,
                              numMonths: G?.duration ?? T.OJ,
                          }),
        });
    }
    if (!y && !t && l) {
        let e = g.Ay.formatPriceString(
            g.Ay.getDefaultPrice(n === T.PremiumTypes.TIER_0 ? T.gD.PREMIUM_MONTH_TIER_0 : T.gD.PREMIUM_MONTH_TIER_2),
            T.WT.MONTH,
        );
        if (a === T.Vk.PREMIUM_TRIAL)
            return (0, r.jsx)(c.D, {
                variant: R,
                color: S,
                className: i()(j.K, P),
                children: E.intl.format(E.t["9vyovu"], {
                    planName: (0, g.RH)(T.En[V?.skuId ?? T.pe.NONE] ?? T.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, g.re)({
                        intervalType: V?.interval ?? T.WT.DAY,
                        intervalCount: V?.intervalCount ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != O && null != B && H)
            return (0, r.jsx)(c.D, {
                variant: R,
                color: S,
                className: i()(j.K, P),
                children: E.intl.format(E.t.sJTwHQ, {
                    numMonths: O.discount.intervalCount ?? T.OJ,
                    discountedPrice: B,
                    regularPrice: e,
                }),
            });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.A, {
                subscriptionTier: F,
                isGift: t,
                className: null != C ? C : j.q,
                priceOptions: v,
                variant: N,
                isApplicationHome: y,
                enablePremiumBrandRefresh: _,
            }),
            A &&
                (0, r.jsx)(f.A, {
                    subscriptionTier: F,
                    interval: T.WT.YEAR,
                    className: null != C ? C : j.q,
                    isGift: t,
                    priceOptions: v,
                    variant: N,
                    isApplicationHome: y,
                    enablePremiumBrandRefresh: _,
                }),
        ],
    });
}
