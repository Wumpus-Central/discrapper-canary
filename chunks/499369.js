"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(775602),
    o = n(166532),
    l = n(45938),
    u = n(28003),
    c = n(763795),
    d = n(602980),
    _ = n(788868),
    f = n(985018),
    p = n(812941);
function h(e) {
    let {
            currentStep: t,
            className: n,
            purchaseState: h,
            premiumType: m,
            onClose: g,
            hideCloseButton: E,
            showTrialBadge: A,
            showDiscountBadge: I,
            isGift: T,
            giftRecipient: y,
            isEligibleForTrial: S,
            enablePremiumBrandRefresh: v,
            isDisplayingWowMomentConfirmation: C,
            isPremiumGroupPurchase: b,
        } = e,
        N = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        R = () => {
            switch (t) {
                case o.pn.PLAN_SELECT:
                    return m === _.PremiumTypes.TIER_0 ? f.intl.string(f.t.rk4Uu8) : f.intl.string(f.t["7YWj6+"]);
                case o.pn.ADD_PAYMENT_STEPS:
                    return f.intl.string(f.t.vHqbJE);
                case o.pn.REVIEW:
                    return f.intl.string(f.t.wKaVLC);
                default:
                    return f.intl.string(f.t["7YWj6+"]);
            }
        };
    return T && (0, l.Ik)(y) && t !== o.pn.CONFIRM
        ? (0, r.jsxs)(a.rQ0, {
              className: p.sA,
              separator: !1,
              "data-migration-pending": !0,
              children: [
                  (0, r.jsx)(a.Heading, { variant: "heading-lg/semibold", children: R() }),
                  (0, r.jsx)(a.s_y, { onClick: g, className: p.b, innerClassName: p.Dd, "data-migration-pending": !0 }),
              ],
          })
        : v || C
          ? (0, r.jsx)(u.A, {
                hideCloseOnFullScreen: !0,
                hideCloseButton: E,
                upgradeToPremiumType: m,
                onClose: g,
                isEligibleForTrial: S,
                showTrialBadge: A,
                showDiscountBadge: I,
                isPremiumGroupPurchase: b,
            })
          : (0, r.jsx)("div", {
                className: n,
                children: (0, r.jsx)(c.A, {
                    hideCloseOnFullScreen: !0,
                    hideCloseButton: E,
                    shouldShowPrice: !0,
                    upgradeToPremiumType: m,
                    renderAnimation: () =>
                        m === _.PremiumTypes.TIER_0
                            ? (0, r.jsx)(d.Ss, { className: p.mv, currentStep: t, purchaseState: h, pause: N })
                            : m === _.PremiumTypes.TIER_1
                              ? (0, r.jsx)(d.LQ, { className: p.mv, currentStep: t, purchaseState: h, pause: N })
                              : (0, r.jsx)(d.Ec, { className: p.mv, currentStep: t, purchaseState: h, pause: N }),
                    plan: null,
                    isGift: !1,
                    className: p.wx,
                    onClose: g,
                    showTrialBadge: A,
                    showDiscountBadge: I,
                }),
            });
}
