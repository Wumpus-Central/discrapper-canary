n.d(t, { A: () => C });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(989349),
    a = n.n(s),
    o = n(17928),
    c = n(534514),
    u = n(531260),
    m = n(287809),
    d = n(166403),
    g = n(428262),
    x = n(526292),
    T = n(442123),
    I = n(422936),
    p = n(234419),
    h = n(410516),
    f = n(462887),
    j = n(289873),
    A = n(834730),
    E = n(736653),
    _ = n(97352),
    v = n(202541),
    P = n(375708),
    R = n(966522);
function y(e) {
    let { subscriptionTier: t, priceOptions: n } = e,
        i = (0, o.bG)([_.A], () => _.A.isLoadedForSKUs([t])),
        l = (0, f.q)((0, E.Ay)());
    if (!i) return (0, r.jsx)(j.y, { type: j.y.Type.PULSING_ELLIPSIS, className: R.xB });
    let s = _.A.getForSkuAndInterval((0, g.mH)(t), v.WT.MONTH),
        a = null != s ? (0, g.sS)(s, n, !1, !0) : null;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(A.E, {
                variant: "heading-xxl/extrabold",
                color: l ? "text-strong" : "text-overlay-light",
                tag: "span",
                children: (0, r.jsx)("span", { children: a }),
            }),
            (0, r.jsx)(A.E, { variant: "text-xs/medium", color: "text-muted", children: P.intl.string(P.t.lVQycU) }),
        ],
    });
}
var N = n(156601),
    M = n(86280);
function C(e) {
    let {
            isGift: t,
            premiumTier: n,
            offerTierMatchesCard: i,
            offerType: s,
            showYearlyPrice: f,
            priceOptions: j,
            textVariant: A,
            className: E,
            isApplicationHome: _,
            enablePremiumBrandRefresh: R,
            headerClassName: C,
            headingVariant: S = "heading-md/normal",
            headingColor: U,
        } = e,
        L = (0, o.bG)([d.A], () => d.A.getPremiumTypeSubscription()),
        b = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        O = (0, u.A)(),
        w = (0, x.k5)(),
        k = (0, x.nf)(),
        G = n === v.PremiumTypes.TIER_0 ? v.pe.TIER_0 : v.pe.TIER_2,
        D = L?.hasActiveTrial ? b?.premiumType : w ? v.PremiumTypes.TIER_2 : null,
        F = (0, p.V)(),
        H = (0, I.O)(),
        Z = n === v.PremiumTypes.TIER_0 ? v.gD.PREMIUM_MONTH_TIER_0 : v.gD.PREMIUM_MONTH_TIER_2,
        V = (0, h.N1)(Z),
        W = null != H && (0, h.YJ)(H) === Z,
        { useNewCopy: J } = T.A.useConfig({ location: `TierCardPrice${n}${t ? "" : " - DO NOT USE"}` }),
        B = F?.subscription_trial;
    if (!_ && !t && null != D && n === D && null != L && null != L.planIdFromItems) {
        let e = null != L.trialEndsAt ? a()(L?.trialEndsAt).diff(a()(), "d") : 0,
            t = v.hd[L.planIdFromItems],
            n = g.Ay.formatPriceString(g.Ay.getDefaultPrice(t.id), t.interval),
            i = s === v.Vk.PREMIUM_TRIAL,
            o = L.planIdFromItems === v.gD.PREMIUM_YEAR_TIER_2;
        return (0, r.jsx)(c.D, {
            variant: S,
            color: U,
            className: l()((i || !o) && M.K, C),
            children: i
                ? P.intl.format(P.t["2CGBri"], { remainingTime: e, price: n })
                : o
                  ? P.intl.format(P.t.z2oQtA, {
                        percent: k?.percentage ?? v.Cq,
                        regularPrice: n,
                        renewalDate: g.Ay.getExpectedRenewalDate(L, O),
                    })
                  : P.intl.formatToPlainString(P.t["3ZiutU"], {
                        percent: k?.percentage ?? v._$,
                        regularPrice: n,
                        numMonths: k?.duration ?? v.OJ,
                    }),
        });
    }
    if (!_ && !t && i) {
        let e = g.Ay.formatPriceString(
            g.Ay.getDefaultPrice(n === v.PremiumTypes.TIER_0 ? v.gD.PREMIUM_MONTH_TIER_0 : v.gD.PREMIUM_MONTH_TIER_2),
            v.WT.MONTH,
        );
        if (s === v.Vk.PREMIUM_TRIAL)
            return (0, r.jsx)(c.D, {
                variant: S,
                color: U,
                className: l()(M.K, C),
                children: P.intl.format(P.t["9vyovu"], {
                    planName: (0, g.RH)(v.En[B?.sku_id ?? v.pe.NONE] ?? v.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, g.re)({
                        intervalType: B?.interval ?? v.WT.DAY,
                        intervalCount: B?.interval_count ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != H && null != V && W)
            return (0, r.jsx)(c.D, {
                variant: S,
                color: U,
                className: l()(M.K, C),
                children: P.intl.format(P.t.sJTwHQ, {
                    numMonths: H.discount.userUsageLimit ?? v.OJ,
                    discountedPrice: V,
                    regularPrice: e,
                }),
            });
    }
    return t && J
        ? (0, r.jsx)(y, { subscriptionTier: G, priceOptions: j })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(N.A, {
                      subscriptionTier: G,
                      isGift: t,
                      className: null != E ? E : M.q,
                      priceOptions: j,
                      variant: A,
                      isApplicationHome: _,
                      enablePremiumBrandRefresh: R,
                  }),
                  f &&
                      (0, r.jsx)(N.A, {
                          subscriptionTier: G,
                          interval: v.WT.YEAR,
                          className: null != E ? E : M.q,
                          isGift: t,
                          priceOptions: j,
                          variant: A,
                          isApplicationHome: _,
                          enablePremiumBrandRefresh: R,
                      }),
              ],
          });
}
