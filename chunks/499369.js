"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(20742),
    l = n(775602),
    u = n(166532),
    c = n(45938),
    d = n(682610),
    _ = n(763795),
    f = n(602980),
    p = n(788868),
    h = n(985018),
    E = n(156076);
function m(e) {
    let {
            currentStep: t,
            className: n,
            purchaseState: i,
            premiumType: m,
            onClose: g,
            hideCloseButton: A,
            showTrialBadge: I,
            showDiscountBadge: T,
            isGift: S,
            giftRecipient: y,
            isEligibleForTrial: N,
            enablePremiumBrandRefresh: v,
            forceBrandRefreshHeader: C,
            isDisplayingWowMomentConfirmation: O,
            isPremiumGroupPurchase: R,
        } = e,
        b = (0, a.bG)([l.A], () => l.A.useReducedMotion);
    return S && (0, c.Ik)(y) && t !== u.pn.CONFIRM
        ? (0, r.jsx)(o.rQ, {
              title: (() => {
                  switch (t) {
                      case u.pn.PLAN_SELECT:
                          return m === p.PremiumTypes.TIER_0 ? h.intl.string(h.t.rk4Uu8) : h.intl.string(h.t["7YWj6+"]);
                      case u.pn.ADD_PAYMENT_STEPS:
                          return h.intl.string(h.t.vHqbJE);
                      case u.pn.REVIEW:
                          return h.intl.string(h.t.wKaVLC);
                      default:
                          return h.intl.string(h.t["7YWj6+"]);
                  }
              })(),
              titleTextVariant: "heading-lg/semibold",
          })
        : v || O
          ? (0, r.jsx)(_.A, {
                hideCloseOnFullScreen: !0,
                forceBrandRefreshHeader: C,
                hideCloseButton: A,
                upgradeToPremiumType: m,
                onClose: g,
                isEligibleForTrial: N,
                showTrialBadge: I,
                showDiscountBadge: T,
                isPremiumGroupPurchase: R,
            })
          : (0, r.jsx)("div", {
                className: s()(E.Q$, n),
                children: (0, r.jsx)(d.A, {
                    hideCloseOnFullScreen: !0,
                    hideCloseButton: A,
                    shouldShowPrice: !0,
                    upgradeToPremiumType: m,
                    renderAnimation: () =>
                        m === p.PremiumTypes.TIER_0
                            ? (0, r.jsx)(f.Ss, { className: E.mv, currentStep: t, purchaseState: i, pause: b })
                            : m === p.PremiumTypes.TIER_1
                              ? (0, r.jsx)(f.LQ, { className: E.mv, currentStep: t, purchaseState: i, pause: b })
                              : (0, r.jsx)(f.Ec, { className: E.mv, currentStep: t, purchaseState: i, pause: b }),
                    plan: null,
                    isGift: !1,
                    className: E.wx,
                    onClose: g,
                    showTrialBadge: I,
                    showDiscountBadge: T,
                }),
            });
}
