"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(732955),
    l = n(775602),
    u = n(166532),
    c = n(45938),
    d = n(28003),
    _ = n(763795),
    f = n(602980),
    h = n(788868),
    p = n(985018),
    g = n(812941);
function E(e) {
    let {
            currentStep: t,
            className: n,
            purchaseState: i,
            premiumType: E,
            onClose: A,
            hideCloseButton: I,
            showTrialBadge: T,
            showDiscountBadge: y,
            isGift: S,
            giftRecipient: v,
            isEligibleForTrial: C,
            enablePremiumBrandRefresh: b,
            isDisplayingWowMomentConfirmation: N,
            isPremiumGroupPurchase: R,
        } = e,
        O = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        D = () => {
            switch (t) {
                case u.pn.PLAN_SELECT:
                    return E === h.PremiumTypes.TIER_0 ? p.intl.string(p.t.rk4Uu8) : p.intl.string(p.t["7YWj6+"]);
                case u.pn.ADD_PAYMENT_STEPS:
                    return p.intl.string(p.t.vHqbJE);
                case u.pn.REVIEW:
                    return p.intl.string(p.t.wKaVLC);
                default:
                    return p.intl.string(p.t["7YWj6+"]);
            }
        };
    return S && (0, c.Ik)(v) && t !== u.pn.CONFIRM
        ? (0, r.jsx)(o.rQ0, { title: D(), titleTextVariant: "heading-lg/semibold" })
        : b || N
          ? (0, r.jsx)(d.A, {
                hideCloseOnFullScreen: !0,
                hideCloseButton: I,
                upgradeToPremiumType: E,
                onClose: A,
                isEligibleForTrial: C,
                showTrialBadge: T,
                showDiscountBadge: y,
                isPremiumGroupPurchase: R,
            })
          : (0, r.jsx)("div", {
                className: a()(g.Q$, n),
                children: (0, r.jsx)(_.A, {
                    hideCloseOnFullScreen: !0,
                    hideCloseButton: I,
                    shouldShowPrice: !0,
                    upgradeToPremiumType: E,
                    renderAnimation: () =>
                        E === h.PremiumTypes.TIER_0
                            ? (0, r.jsx)(f.Ss, { className: g.mv, currentStep: t, purchaseState: i, pause: O })
                            : E === h.PremiumTypes.TIER_1
                              ? (0, r.jsx)(f.LQ, { className: g.mv, currentStep: t, purchaseState: i, pause: O })
                              : (0, r.jsx)(f.Ec, { className: g.mv, currentStep: t, purchaseState: i, pause: O }),
                    plan: null,
                    isGift: !1,
                    className: g.wx,
                    onClose: A,
                    showTrialBadge: T,
                    showDiscountBadge: y,
                }),
            });
}
