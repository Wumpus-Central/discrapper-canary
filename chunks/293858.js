n.d(t, {
    b: function () {
        return S;
    }
});
var i = n(200651),
    l = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(704215),
    o = n(605236),
    C = n(881602),
    d = n(717401),
    u = n(286961),
    c = n(317269),
    p = n(669079),
    x = n(296848),
    h = n(987209),
    _ = n(563132),
    f = n(614277),
    j = n(400981),
    m = n(698708),
    L = n(921944);
function S(e) {
    var t, n;
    let s,
        { handleClose: S, planGroup: E, onSubscriptionConfirmation: g, renderPurchaseConfirmation: I, postSuccessGuild: M, followupSKUInfo: v, continueSessionToInitialStep: y } = e,
        { activeSubscription: T, paymentSources: N, paymentSourceId: P, selectedPlan: Z, selectedSkuId: A, step: U, updatedSubscription: O, startingPremiumSubscriptionPlanIdRef: k } = (0, _.usePaymentContext)(),
        { isGift: R, giftRecipient: b, giftCode: w, hasSentMessage: B, isSendingMessage: H, sendGiftMessage: F, claimableRewards: G, selectedGiftingPromotionReward: D } = (0, h.wD)(),
        W = (0, d.id)(Z, R, G),
        Y = (0, u.Z)(),
        K = (0, d.a5)(Z),
        V = (0, d.tK)(null == D ? void 0 : D.skuId),
        X = R && null != D && K;
    r()(null != Z, 'Expected plan to selected'), r()(null != A, 'Expected selectedSkuId'), r()(null != U, 'Step should be set');
    let Q = l.useCallback(() => {
        S(), null == g || g();
    }, [S, g]);
    return (
        l.useEffect(() => {
            if (!(!R || null == b || null == w || B || H || (0, p.pO)(b))) C.F.getCurrentConfig({ location: '36b986_1' }).enabled && F({ onSubscriptionConfirmation: g });
        }, [F, R, b, w, B, H, g]),
        l.useEffect(() => {
            null != Y && null != Y.reminderNotice && W && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, Y.dismissibleContentVersion, { dismissAction: L.L.INDIRECT_ACTION });
        }, [Y, W]),
        (s =
            null != I
                ? I(Z, Q, O)
                : null != y
                  ? (0, i.jsx)(c.VY, {})
                  : R
                    ? (0, i.jsx)(c.TB, {
                          planId: Z.id,
                          onClose: Q
                      })
                    : k.current === Z.id
                      ? (0, i.jsx)(c.ZP, {
                            planId: Z.id,
                            postSuccessGuild: M,
                            onClose: Q,
                            paymentSourceType: null === (t = N[null != P ? P : '']) || void 0 === t ? void 0 : t.type
                        })
                      : (0, i.jsx)(c.ZP, {
                            followupSKUInfo: v,
                            startingPremiumSubscriptionPlanId: k.current,
                            planId: Z.id,
                            onClose: Q,
                            isDowngrade: null != T && (0, x.GY)(T, Z.id, E),
                            paymentSourceType: null === (n = N[null != P ? P : '']) || void 0 === n ? void 0 : n.type
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(f.C3, {
                    children: [(0, i.jsx)(m.Z, {}), s]
                }),
                X &&
                    null != V &&
                    (0, i.jsx)(j.Z, {
                        onClose: Q,
                        selectedPromotionalDecoPurchaseRecord: V,
                        selectedGiftingPromotionReward: D
                    })
            ]
        })
    );
}
