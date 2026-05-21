r.d(t, { A: () => A });
var i = r(627968);
r(64700);
var n = r(503698),
    a = r.n(n),
    s = r(989349),
    l = r.n(s),
    o = r(17928),
    c = r(534514),
    d = r(287809),
    u = r(166403),
    m = r(428262),
    g = r(526292),
    x = r(422936),
    p = r(234419),
    T = r(410516),
    h = r(156601),
    I = r(788868),
    f = r(375708),
    j = r(196936);
function A(e) {
    let {
            isGift: t,
            premiumTier: r,
            offerTierMatchesCard: n,
            offerType: s,
            showYearlyPrice: A,
            priceOptions: R,
            textVariant: _,
            className: v,
            isApplicationHome: E,
            enablePremiumBrandRefresh: P,
            headerClassName: N,
            headingVariant: C = "heading-md/normal",
            headingColor: y,
        } = e,
        M = (0, o.bG)([u.A], () => u.A.getPremiumTypeSubscription()),
        b = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        S = (0, g.k5)(),
        U = (0, g.nf)(),
        w = r === I.PremiumTypes.TIER_0 ? I.pe.TIER_0 : I.pe.TIER_2,
        L = M?.hasActiveTrial ? b?.premiumType : S ? I.PremiumTypes.TIER_2 : null,
        O = (0, p.V)(),
        G = (0, x.O)(),
        D = (0, T.N1)(I.gD.PREMIUM_MONTH_TIER_2),
        H = O?.subscription_trial;
    if (!E && !t && null != L && r === L && null != M && null != M.planIdFromItems) {
        let e = null != M.trialEndsAt ? l()(M?.trialEndsAt).diff(l()(), "d") : 0,
            t = I.hd[M.planIdFromItems],
            r = m.Ay.formatPriceString(m.Ay.getDefaultPrice(t.id), t.interval);
        return (0, i.jsx)(c.D, {
            variant: C,
            color: y,
            className: a()(j.K, N),
            children:
                s === I.Vk.PREMIUM_TRIAL
                    ? f.intl.format(f.t["2CGBri"], { remainingTime: e, price: r })
                    : M.planIdFromItems === I.gD.PREMIUM_YEAR_TIER_2
                      ? f.intl.format(f.t["+qqh6g"], { percent: U?.percentage ?? I.Cq, regularPrice: r })
                      : f.intl.formatToPlainString(f.t["3ZiutU"], {
                            percent: U?.percentage ?? I._$,
                            regularPrice: r,
                            numMonths: U?.duration ?? I.OJ,
                        }),
        });
    }
    if (!E && !t && n) {
        let e = m.Ay.formatPriceString(
            m.Ay.getDefaultPrice(r === I.PremiumTypes.TIER_0 ? I.gD.PREMIUM_MONTH_TIER_0 : I.gD.PREMIUM_MONTH_TIER_2),
            I.WT.MONTH,
        );
        if (s === I.Vk.PREMIUM_TRIAL)
            return (0, i.jsx)(c.D, {
                variant: C,
                color: y,
                className: a()(j.K, N),
                children: f.intl.format(f.t["9vyovu"], {
                    planName: (0, m.RH)(I.En[H?.sku_id ?? I.pe.NONE] ?? I.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, m.re)({
                        intervalType: H?.interval ?? I.WT.DAY,
                        intervalCount: H?.interval_count ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != G && null != D)
            return (0, i.jsx)(c.D, {
                variant: C,
                color: y,
                className: a()(j.K, N),
                children: f.intl.format(f.t.sJTwHQ, {
                    numMonths: G.discount.userUsageLimit ?? I.OJ,
                    discountedPrice: D,
                    regularPrice: e,
                }),
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.A, {
                subscriptionTier: w,
                isGift: t,
                className: null != v ? v : j.q,
                priceOptions: R,
                variant: _,
                isApplicationHome: E,
                enablePremiumBrandRefresh: P,
            }),
            A &&
                (0, i.jsx)(h.A, {
                    subscriptionTier: w,
                    interval: I.WT.YEAR,
                    className: null != v ? v : j.q,
                    isGift: t,
                    priceOptions: R,
                    variant: _,
                    isApplicationHome: E,
                    enablePremiumBrandRefresh: P,
                }),
        ],
    });
}
