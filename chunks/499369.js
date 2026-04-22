n.d(t, { A: () => b });
var a = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    i = n(311907),
    s = n(20742),
    o = n(775602),
    u = n(166532),
    c = n(45938),
    d = n(682610),
    m = n(763795),
    p = n(602980),
    _ = n(788868),
    f = n(985018),
    g = n(39660);
function b(e) {
    let {
            currentStep: t,
            className: n,
            purchaseState: r,
            premiumType: b,
            onClose: v,
            hideCloseButton: x,
            showTrialBadge: h,
            showDiscountBadge: I,
            isGift: A,
            giftRecipient: y,
            isEligibleForTrial: T,
            enablePremiumBrandRefresh: E,
            forceBrandRefreshHeader: C,
            isDisplayingWowMomentConfirmation: P,
            isPremiumGroupPurchase: L,
        } = e,
        S = (0, i.bG)([o.A], () => o.A.useReducedMotion);
    return A && (0, c.Ik)(y) && t !== u.pn.CONFIRM
        ? (0, a.jsx)(s.rQ, {
              title: (() => {
                  switch (t) {
                      case u.pn.PLAN_SELECT:
                          return b === _.PremiumTypes.TIER_0 ? f.intl.string(f.t.rk4Uu8) : f.intl.string(f.t["7YWj6+"]);
                      case u.pn.ADD_PAYMENT_STEPS:
                          return f.intl.string(f.t.vHqbJE);
                      case u.pn.REVIEW:
                          return f.intl.string(f.t.wKaVLC);
                      default:
                          return f.intl.string(f.t["7YWj6+"]);
                  }
              })(),
              titleTextVariant: "heading-lg/semibold",
          })
        : E || P
          ? (0, a.jsx)(m.A, {
                hideCloseOnFullScreen: !0,
                forceBrandRefreshHeader: C,
                hideCloseButton: x,
                upgradeToPremiumType: b,
                onClose: v,
                isEligibleForTrial: T,
                showTrialBadge: h,
                showDiscountBadge: I,
                isPremiumGroupPurchase: L,
            })
          : (0, a.jsx)("div", {
                className: l()(g.Q$, n),
                children: (0, a.jsx)(d.A, {
                    hideCloseOnFullScreen: !0,
                    hideCloseButton: x,
                    shouldShowPrice: !0,
                    upgradeToPremiumType: b,
                    renderAnimation: () =>
                        b === _.PremiumTypes.TIER_0
                            ? (0, a.jsx)(p.Ss, { className: g.mv, currentStep: t, purchaseState: r, pause: S })
                            : b === _.PremiumTypes.TIER_1
                              ? (0, a.jsx)(p.LQ, { className: g.mv, currentStep: t, purchaseState: r, pause: S })
                              : (0, a.jsx)(p.Ec, { className: g.mv, currentStep: t, purchaseState: r, pause: S }),
                    plan: null,
                    isGift: !1,
                    className: g.wx,
                    onClose: v,
                    showTrialBadge: h,
                    showDiscountBadge: I,
                }),
            });
}
