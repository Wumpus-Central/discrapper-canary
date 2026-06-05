n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(989349),
    s = n.n(a),
    o = n(17928),
    c = n(534514),
    u = n(531260),
    m = n(287809),
    d = n(166403),
    g = n(428262),
    T = n(526292),
    x = n(422936),
    I = n(234419),
    p = n(410516),
    h = n(156601),
    f = n(788868),
    _ = n(375708),
    E = n(196936);
function A(e) {
    let {
            isGift: t,
            premiumTier: n,
            offerTierMatchesCard: i,
            offerType: a,
            showYearlyPrice: A,
            priceOptions: P,
            textVariant: R,
            className: j,
            isApplicationHome: v,
            enablePremiumBrandRefresh: M,
            headerClassName: N,
            headingVariant: y = "heading-md/normal",
            headingColor: C,
        } = e,
        U = (0, o.bG)([d.A], () => d.A.getPremiumTypeSubscription()),
        S = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        b = (0, u.A)(),
        L = (0, T.k5)(),
        w = (0, T.nf)(),
        O = n === f.PremiumTypes.TIER_0 ? f.pe.TIER_0 : f.pe.TIER_2,
        F = U?.hasActiveTrial ? S?.premiumType : L ? f.PremiumTypes.TIER_2 : null,
        G = (0, I.V)(),
        D = (0, x.O)(),
        k = n === f.PremiumTypes.TIER_0 ? f.gD.PREMIUM_MONTH_TIER_0 : f.gD.PREMIUM_MONTH_TIER_2,
        H = (0, p.N1)(k),
        Z = null != D && (0, p.YJ)(D) === k,
        V = G?.subscription_trial;
    if (!v && !t && null != F && n === F && null != U && null != U.planIdFromItems) {
        let e = null != U.trialEndsAt ? s()(U?.trialEndsAt).diff(s()(), "d") : 0,
            t = f.hd[U.planIdFromItems],
            n = g.Ay.formatPriceString(g.Ay.getDefaultPrice(t.id), t.interval),
            i = a === f.Vk.PREMIUM_TRIAL,
            o = U.planIdFromItems === f.gD.PREMIUM_YEAR_TIER_2;
        return (0, r.jsx)(c.D, {
            variant: y,
            color: C,
            className: l()((i || !o) && E.K, N),
            children: i
                ? _.intl.format(_.t["2CGBri"], { remainingTime: e, price: n })
                : o
                  ? _.intl.format(_.t.z2oQtA, {
                        percent: w?.percentage ?? f.Cq,
                        regularPrice: n,
                        renewalDate: g.Ay.getExpectedRenewalDate(U, b),
                    })
                  : _.intl.formatToPlainString(_.t["3ZiutU"], {
                        percent: w?.percentage ?? f._$,
                        regularPrice: n,
                        numMonths: w?.duration ?? f.OJ,
                    }),
        });
    }
    if (!v && !t && i) {
        let e = g.Ay.formatPriceString(
            g.Ay.getDefaultPrice(n === f.PremiumTypes.TIER_0 ? f.gD.PREMIUM_MONTH_TIER_0 : f.gD.PREMIUM_MONTH_TIER_2),
            f.WT.MONTH,
        );
        if (a === f.Vk.PREMIUM_TRIAL)
            return (0, r.jsx)(c.D, {
                variant: y,
                color: C,
                className: l()(E.K, N),
                children: _.intl.format(_.t["9vyovu"], {
                    planName: (0, g.RH)(f.En[V?.sku_id ?? f.pe.NONE] ?? f.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, g.re)({
                        intervalType: V?.interval ?? f.WT.DAY,
                        intervalCount: V?.interval_count ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != D && null != H && Z)
            return (0, r.jsx)(c.D, {
                variant: y,
                color: C,
                className: l()(E.K, N),
                children: _.intl.format(_.t.sJTwHQ, {
                    numMonths: D.discount.userUsageLimit ?? f.OJ,
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
                className: null != j ? j : E.q,
                priceOptions: P,
                variant: R,
                isApplicationHome: v,
                enablePremiumBrandRefresh: M,
            }),
            A &&
                (0, r.jsx)(h.A, {
                    subscriptionTier: O,
                    interval: f.WT.YEAR,
                    className: null != j ? j : E.q,
                    isGift: t,
                    priceOptions: P,
                    variant: R,
                    isApplicationHome: v,
                    enablePremiumBrandRefresh: M,
                }),
        ],
    });
}
