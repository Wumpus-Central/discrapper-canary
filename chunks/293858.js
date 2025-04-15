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
        { handleClose: n, planGroup: l, onSubscriptionConfirmation: S, renderPurchaseConfirmation: E, postSuccessGuild: y, followupSKUInfo: I, continueSessionToInitialStep: N } = e,
        { activeSubscription: b, paymentSources: T, paymentSourceId: M, selectedPlan: P, selectedSkuId: O, step: Z, updatedSubscription: v, startingPremiumSubscriptionPlanIdRef: A, startingFractionalPremiumEndsAtRef: k } = (0, x.JL)(),
        { isGift: U, giftRecipient: w, giftCode: R, hasSentMessage: F, isSendingMessage: B, sendGiftMessage: H, claimableRewards: W, selectedGiftingPromotionReward: G } = (0, _.wD)(),
        { confirmationFooter: D } = (0, h.zb)(),
        Y = null != D,
        z = (0, C.id)(P, U, W),
        K = (0, d.Z)(),
        X = (0, C.a5)(P),
        V = (0, C.tK)(null == G ? void 0 : G.skuId),
        Q = (0, m.$)(T, M),
        q = U && null != G && X;
    s()(null != P, 'Expected plan to selected'), s()(null != O, 'Expected selectedSkuId'), s()(null != Z, 'Step should be set');
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
                ? E(P, J, v)
                : null != N
                  ? (0, r.jsx)(c.VY, {})
                  : U
                    ? (0, r.jsx)(c.TB, {
                          planId: P.id,
                          onClose: J
                      })
                    : A.current === P.id
                      ? (0, r.jsx)(c.ZP, {
                            planId: P.id,
                            postSuccessGuild: y,
                            onClose: J,
                            paymentSourceType: Q,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: k.current
                        })
                      : (0, r.jsx)(c.ZP, {
                            followupSKUInfo: I,
                            startingPremiumSubscriptionPlanId: A.current,
                            planId: P.id,
                            onClose: J,
                            isDowngrade: null != b && (0, p.GY)(b, P.id, l),
                            paymentSourceType: Q,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: k.current
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(f.C3, {
                    children: [(0, r.jsx)(L.Z, {}), t]
                }),
                null != D && D,
                q &&
                    null != V &&
                    (0, r.jsx)(j.Z, {
                        onClose: J,
                        selectedPromotionalDecoPurchaseRecord: V,
                        selectedGiftingPromotionReward: G
                    })
            ]
        })
    );
}
