n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(775602),
    o = n(166532),
    l = n(45938),
    c = n(28003),
    u = n(763795),
    d = n(602980),
    f = n(788868),
    p = n(985018),
    _ = n(812941);

function h(e) {
    let {
            currentStep: t,
            className: n,
            purchaseState: h,
            premiumType: m,
            onClose: g,
            hideCloseButton: E,
            showTrialBadge: b,
            showDiscountBadge: y,
            isGift: O,
            giftRecipient: A,
            isEligibleForTrial: v,
            enablePremiumBrandRefresh: S,
            isDisplayingWowMomentConfirmation: I,
            isPremiumGroupPurchase: T,
        } = e,
        C = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        N = () => {
            switch (t) {
                case o.pn.PLAN_SELECT:
                    return m === f.PremiumTypes.TIER_0 ? p.intl.string(p.t.rk4Uu8) : p.intl.string(p.t["7YWj6+"]);
                case o.pn.ADD_PAYMENT_STEPS:
                    return p.intl.string(p.t.vHqbJE);
                case o.pn.REVIEW:
                    return p.intl.string(p.t.wKaVLC);
                default:
                    return p.intl.string(p.t["7YWj6+"]);
            }
        };
    return O && (0, l.Ik)(A) && t !== o.pn.CONFIRM
        ? (0, r.jsxs)(a.rQ0, {
              className: _.sA,
              separator: !1,
              "data-migration-pending": !0,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: N(),
                  }),
                  (0, r.jsx)(a.s_y, {
                      onClick: g,
                      className: _.b,
                      innerClassName: _.Dd,
                      "data-migration-pending": !0,
                  }),
              ],
          })
        : S || I
          ? (0, r.jsx)(c.A, {
                hideCloseOnFullScreen: !0,
                hideCloseButton: E,
                upgradeToPremiumType: m,
                onClose: g,
                isEligibleForTrial: v,
                showTrialBadge: b,
                showDiscountBadge: y,
                isPremiumGroupPurchase: T,
            })
          : (0, r.jsx)("div", {
                className: n,
                children: (0, r.jsx)(u.A, {
                    hideCloseOnFullScreen: !0,
                    hideCloseButton: E,
                    shouldShowPrice: !0,
                    upgradeToPremiumType: m,
                    renderAnimation: () =>
                        m === f.PremiumTypes.TIER_0
                            ? (0, r.jsx)(d.Ss, {
                                  className: _.mv,
                                  currentStep: t,
                                  purchaseState: h,
                                  pause: C,
                              })
                            : m === f.PremiumTypes.TIER_1
                              ? (0, r.jsx)(d.LQ, {
                                    className: _.mv,
                                    currentStep: t,
                                    purchaseState: h,
                                    pause: C,
                                })
                              : (0, r.jsx)(d.Ec, {
                                    className: _.mv,
                                    currentStep: t,
                                    purchaseState: h,
                                    pause: C,
                                }),
                    plan: null,
                    isGift: !1,
                    className: _.wx,
                    onClose: g,
                    showTrialBadge: b,
                    showDiscountBadge: y,
                }),
            });
}
