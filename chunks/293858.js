n.d(t, { b: () => S });
var r = n(200651),
    i = n(192379),
    l = n(512722),
    s = n.n(l),
    o = n(704215),
    a = n(605236),
    C = n(717401),
    d = n(286961),
    c = n(317269),
    u = n(669079),
    p = n(296848),
    _ = n(987209),
    x = n(563132),
    h = n(107998),
    f = n(614277),
    j = n(400981),
    m = n(435020),
    L = n(698708),
    g = n(921944);
function S(e) {
    let t,
        { handleClose: n, planGroup: l, onSubscriptionConfirmation: S, renderPurchaseConfirmation: E, postSuccessGuild: y, followupSKUInfo: I, continueSessionToInitialStep: b } = e,
        { activeSubscription: T, paymentSources: P, paymentSourceId: M, selectedPlan: O, selectedSkuId: Z, step: v, updatedSubscription: N, startingPremiumSubscriptionPlanIdRef: k, startingFractionalPremiumEndsAtRef: A } = (0, x.JL)(),
        { isGift: U, giftRecipient: w, giftCode: R, hasSentMessage: F, isSendingMessage: B, sendGiftMessage: H, claimableRewards: G, selectedGiftingPromotionReward: D } = (0, _.wD)(),
        { confirmationFooter: Y } = (0, h.zb)(),
        W = null != Y,
        z = (0, C.id)(O, U, G),
        K = (0, d.Z)(),
        X = (0, C.a5)(O),
        V = (0, C.tK)(null == D ? void 0 : D.skuId),
        Q = (0, m.$)(P, M),
        q = U && null != D && X;
    s()(null != O, 'Expected plan to selected'), s()(null != Z, 'Expected selectedSkuId'), s()(null != v, 'Step should be set');
    let J = i.useCallback(() => {
        n(), null == S || S();
    }, [n, S]);
    return (
        i.useEffect(() => {
            !U || null == w || null == R || F || B || (0, u.pO)(w) || H({ onSubscriptionConfirmation: S });
        }, [H, U, w, R, F, B, S]),
        i.useEffect(() => {
            null != K && null != K.reminderNotice && z && (0, a.wH)(o.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, { dismissAction: g.L.INDIRECT_ACTION });
        }, [K, z]),
        (t =
            null != E
                ? E(O, J, N)
                : null != b
                  ? (0, r.jsx)(c.VY, {})
                  : U
                    ? (0, r.jsx)(c.TB, {
                          planId: O.id,
                          onClose: J
                      })
                    : k.current === O.id
                      ? (0, r.jsx)(c.ZP, {
                            planId: O.id,
                            postSuccessGuild: y,
                            onClose: J,
                            paymentSourceType: Q,
                            hideClose: W,
                            startingFractionalPremiumEndsAt: A.current
                        })
                      : (0, r.jsx)(c.ZP, {
                            followupSKUInfo: I,
                            startingPremiumSubscriptionPlanId: k.current,
                            planId: O.id,
                            onClose: J,
                            isDowngrade: null != T && (0, p.GY)(T, O.id, l),
                            paymentSourceType: Q,
                            hideClose: W,
                            startingFractionalPremiumEndsAt: A.current
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(f.C3, {
                    children: [(0, r.jsx)(L.Z, {}), t]
                }),
                null != Y && Y,
                q &&
                    null != V &&
                    (0, r.jsx)(j.Z, {
                        onClose: J,
                        selectedPromotionalDecoPurchaseRecord: V,
                        selectedGiftingPromotionReward: D
                    })
            ]
        })
    );
}
