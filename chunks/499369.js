"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(732955),
    l = n(775602),
    u = n(166532),
    c = n(45938),
    d = n(682610),
    _ = n(763795),
    f = n(602980),
    p = n(788868),
    h = n(985018),
    m = n(541863);
function E(e) {
    let {
            currentStep: t,
            className: n,
            purchaseState: i,
            premiumType: E,
            onClose: g,
            hideCloseButton: A,
            showTrialBadge: I,
            showDiscountBadge: T,
            isGift: S,
            giftRecipient: y,
            isEligibleForTrial: v,
            enablePremiumBrandRefresh: N,
            forceBrandRefreshHeader: C,
            isDisplayingWowMomentConfirmation: R,
            isPremiumGroupPurchase: O,
        } = e,
        b = (0, a.bG)([l.A], () => l.A.useReducedMotion),
        D = () => {
            switch (t) {
                case u.pn.PLAN_SELECT:
                    return E === p.PremiumTypes.TIER_0 ? h.intl.string(h.t.rk4Uu8) : h.intl.string(h.t["7YWj6+"]);
                case u.pn.ADD_PAYMENT_STEPS:
                    return h.intl.string(h.t.vHqbJE);
                case u.pn.REVIEW:
                    return h.intl.string(h.t.wKaVLC);
                default:
                    return h.intl.string(h.t["7YWj6+"]);
            }
        };
    return S && (0, c.Ik)(y) && t !== u.pn.CONFIRM
        ? (0, r.jsx)(o.rQ0, { title: D(), titleTextVariant: "heading-lg/semibold" })
        : N || R
          ? (0, r.jsx)(_.A, {
                hideCloseOnFullScreen: !0,
                forceBrandRefreshHeader: C,
                hideCloseButton: A,
                upgradeToPremiumType: E,
                onClose: g,
                isEligibleForTrial: v,
                showTrialBadge: I,
                showDiscountBadge: T,
                isPremiumGroupPurchase: O,
            })
          : (0, r.jsx)("div", {
                className: s()(m.Q$, n),
                children: (0, r.jsx)(d.A, {
                    hideCloseOnFullScreen: !0,
                    hideCloseButton: A,
                    shouldShowPrice: !0,
                    upgradeToPremiumType: E,
                    renderAnimation: () =>
                        E === p.PremiumTypes.TIER_0
                            ? (0, r.jsx)(f.Ss, { className: m.mv, currentStep: t, purchaseState: i, pause: b })
                            : E === p.PremiumTypes.TIER_1
                              ? (0, r.jsx)(f.LQ, { className: m.mv, currentStep: t, purchaseState: i, pause: b })
                              : (0, r.jsx)(f.Ec, { className: m.mv, currentStep: t, purchaseState: i, pause: b }),
                    plan: null,
                    isGift: !1,
                    className: m.wx,
                    onClose: g,
                    showTrialBadge: I,
                    showDiscountBadge: T,
                }),
            });
}
