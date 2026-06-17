"use strict";
n.d(t, { A: () => D });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(989349),
    o = n.n(a),
    l = n(17928),
    u = n(534514),
    c = n(531260),
    d = n(287809),
    _ = n(166403),
    h = n(428262),
    f = n(526292),
    p = n(442123),
    E = n(422936),
    m = n(234419),
    g = n(410516),
    A = n(462887),
    I = n(289873),
    T = n(834730),
    S = n(736653),
    y = n(97352),
    C = n(788868),
    N = n(375708),
    v = n(966522);
function R(e) {
    let { subscriptionTier: t, priceOptions: n } = e,
        r = (0, l.bG)([y.A], () => y.A.isLoadedForSKUs([t])),
        s = (0, A.q)((0, S.Ay)());
    if (!r) return (0, i.jsx)(I.y, { type: I.y.Type.PULSING_ELLIPSIS, className: v.xB });
    let a = y.A.getForSkuAndInterval((0, h.mH)(t), C.WT.MONTH),
        o = null != a ? (0, h.sS)(a, n, !1, !0) : null;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(T.E, {
                variant: "heading-xxl/extrabold",
                color: s ? "text-strong" : "always-white",
                tag: "span",
                children: (0, i.jsx)("span", { children: o }),
            }),
            (0, i.jsx)(T.E, { variant: "text-xs/medium", color: "text-muted", children: N.intl.string(N.t.lVQycU) }),
        ],
    });
}
var O = n(156601),
    b = n(86280);
function D(e) {
    let {
            isGift: t,
            premiumTier: n,
            offerTierMatchesCard: r,
            offerType: a,
            showYearlyPrice: A,
            priceOptions: I,
            textVariant: T,
            className: S,
            isApplicationHome: y,
            enablePremiumBrandRefresh: v,
            headerClassName: D,
            headingVariant: L = "heading-md/normal",
            headingColor: w,
        } = e,
        M = (0, l.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        P = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
        x = (0, c.A)(),
        k = (0, f.k5)(),
        U = (0, f.nf)(),
        G = n === C.PremiumTypes.TIER_0 ? C.pe.TIER_0 : C.pe.TIER_2,
        F = M?.hasActiveTrial ? P?.premiumType : k ? C.PremiumTypes.TIER_2 : null,
        V = (0, m.V)(),
        B = (0, E.O)(),
        j = n === C.PremiumTypes.TIER_0 ? C.gD.PREMIUM_MONTH_TIER_0 : C.gD.PREMIUM_MONTH_TIER_2,
        H = (0, g.N1)(j),
        Y = null != B && (0, g.YJ)(B) === j,
        { useNewCopy: W } = p.A.useConfig({ location: `TierCardPrice${n}${t ? "" : " - DO NOT USE"}` }),
        K = V?.subscription_trial;
    if (!y && !t && null != F && n === F && null != M && null != M.planIdFromItems) {
        let e = null != M.trialEndsAt ? o()(M?.trialEndsAt).diff(o()(), "d") : 0,
            t = C.hd[M.planIdFromItems],
            n = h.Ay.formatPriceString(h.Ay.getDefaultPrice(t.id), t.interval),
            r = a === C.Vk.PREMIUM_TRIAL,
            l = M.planIdFromItems === C.gD.PREMIUM_YEAR_TIER_2;
        return (0, i.jsx)(u.D, {
            variant: L,
            color: w,
            className: s()((r || !l) && b.K, D),
            children: r
                ? N.intl.format(N.t["2CGBri"], { remainingTime: e, price: n })
                : l
                  ? N.intl.format(N.t.z2oQtA, {
                        percent: U?.percentage ?? C.Cq,
                        regularPrice: n,
                        renewalDate: h.Ay.getExpectedRenewalDate(M, x),
                    })
                  : N.intl.formatToPlainString(N.t["3ZiutU"], {
                        percent: U?.percentage ?? C._$,
                        regularPrice: n,
                        numMonths: U?.duration ?? C.OJ,
                    }),
        });
    }
    if (!y && !t && r) {
        let e = h.Ay.formatPriceString(
            h.Ay.getDefaultPrice(n === C.PremiumTypes.TIER_0 ? C.gD.PREMIUM_MONTH_TIER_0 : C.gD.PREMIUM_MONTH_TIER_2),
            C.WT.MONTH,
        );
        if (a === C.Vk.PREMIUM_TRIAL)
            return (0, i.jsx)(u.D, {
                variant: L,
                color: w,
                className: s()(b.K, D),
                children: N.intl.format(N.t["9vyovu"], {
                    planName: (0, h.RH)(C.En[K?.sku_id ?? C.pe.NONE] ?? C.gD.PREMIUM_MONTH_TIER_2),
                    duration: (0, h.re)({
                        intervalType: K?.interval ?? C.WT.DAY,
                        intervalCount: K?.interval_count ?? 30,
                        capitalize: !1,
                    }),
                    price: e,
                }),
            });
        if (null != B && null != H && Y)
            return (0, i.jsx)(u.D, {
                variant: L,
                color: w,
                className: s()(b.K, D),
                children: N.intl.format(N.t.sJTwHQ, {
                    numMonths: B.discount.userUsageLimit ?? C.OJ,
                    discountedPrice: H,
                    regularPrice: e,
                }),
            });
    }
    return t && W
        ? (0, i.jsx)(R, { subscriptionTier: G, priceOptions: I })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(O.A, {
                      subscriptionTier: G,
                      isGift: t,
                      className: null != S ? S : b.q,
                      priceOptions: I,
                      variant: T,
                      isApplicationHome: y,
                      enablePremiumBrandRefresh: v,
                  }),
                  A &&
                      (0, i.jsx)(O.A, {
                          subscriptionTier: G,
                          interval: C.WT.YEAR,
                          className: null != S ? S : b.q,
                          isGift: t,
                          priceOptions: I,
                          variant: T,
                          isApplicationHome: y,
                          enablePremiumBrandRefresh: v,
                      }),
              ],
          });
}
