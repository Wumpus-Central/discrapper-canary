r.d(t, { A: () => R });
var n = r(627968);
r(64700);
var i = r(503698),
    a = r.n(i),
    s = r(989349),
    l = r.n(s),
    o = r(17928),
    c = r(534514),
    d = r(287809),
    u = r(166403),
    m = r(428262),
    g = r(526292),
    x = r(422936),
    T = r(234419),
    p = r(410516),
    h = r(156601),
    I = r(788868),
    f = r(375708),
    j = r(196936);
function R(e) {
    let {
            isGift: t,
            premiumTier: r,
            offerTierMatchesCard: i,
            offerType: s,
            showYearlyPrice: R,
            priceOptions: _,
            textVariant: E,
            className: A,
            isApplicationHome: v,
            enablePremiumBrandRefresh: P,
            headerClassName: N,
            headingVariant: M = "heading-md/normal",
            headingColor: y,
        } = e,
        C = (0, o.bG)([u.A], () => u.A.getPremiumTypeSubscription()),
        b = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        U = (0, g.k5)(),
        S = (0, g.nf)(),
        w = r === I.PremiumTypes.TIER_0 ? I.pe.TIER_0 : I.pe.TIER_2,
        L = C?.hasActiveTrial ? b?.premiumType : U ? I.PremiumTypes.TIER_2 : null,
        O = (0, T.V)(),
        G = (0, x.O)(),
        D = r === I.PremiumTypes.TIER_0 ? I.gD.PREMIUM_MONTH_TIER_0 : I.gD.PREMIUM_MONTH_TIER_2,
        H = (0, p.N1)(D),
        F = null != G && (0, p.YJ)(G) === D,
        k = O?.subscription_trial;
    if (!v && !t && null != L && r === L && null != C && null != C.planIdFromItems) {
        let e = null != C.trialEndsAt ? l()(C?.trialEndsAt).diff(l()(), "d") : 0,
            t = I.hd[C.planIdFromItems],
            r = m.Ay.formatPriceString(m.Ay.getDefaultPrice(t.id), t.interval);
        return (0, n.jsx)(c.D, {
            variant: M,
            color: y,
            className: a()(j.K, N),
            children:
                s === I.Vk.PREMIUM_TRIAL
                    ? f.intl.format(f.t["2CGBri"], { remainingTime: e, price: r })
                    : C.planIdFromItems === I.gD.PREMIUM_YEAR_TIER_2
                      ? f.intl.format(f.t["+qqh6g"], { percent: S?.percentage ?? I.Cq, regularPrice: r })
                      : f.intl.formatToPlainString(f.t["3ZiutU"], {
                            percent: S?.percentage ?? I._$,
                            regularPrice: r,
                            numMonths: S?.duration ?? I.OJ,
                        }),
        });
    }
    if (!v && !t && i) {
        let e = m.Ay.formatPriceString(
            m.Ay.getDefaultPrice(r === I.PremiumTypes.TIER_0 ? I.gD.PREMIUM_MONTH_TIER_0 : I.gD.PREMIUM_MONTH_TIER_2),
            I.WT.MONTH,
        );
        if (s === I.Vk.PREMIUM_TRIAL)
            return (0, n.jsx)(c.D, {
                variant: M,
                color: y,
                className: a()(j.K, N),
                children: f.intl.format(f.t["9vyovu"], {
                    planName: (0, m.RH)(I.En[k?.sku_id ?? I.pe.NONE] ?? I.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, m.re)({
                        intervalType: k?.interval ?? I.WT.DAY,
                        intervalCount: k?.interval_count ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != G && null != H && F)
            return (0, n.jsx)(c.D, {
                variant: M,
                color: y,
                className: a()(j.K, N),
                children: f.intl.format(f.t.sJTwHQ, {
                    numMonths: G.discount.userUsageLimit ?? I.OJ,
                    discountedPrice: H,
                    regularPrice: e,
                }),
            });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(h.A, {
                subscriptionTier: w,
                isGift: t,
                className: null != A ? A : j.q,
                priceOptions: _,
                variant: E,
                isApplicationHome: v,
                enablePremiumBrandRefresh: P,
            }),
            R &&
                (0, n.jsx)(h.A, {
                    subscriptionTier: w,
                    interval: I.WT.YEAR,
                    className: null != A ? A : j.q,
                    isGift: t,
                    priceOptions: _,
                    variant: E,
                    isApplicationHome: v,
                    enablePremiumBrandRefresh: P,
                }),
        ],
    });
}
