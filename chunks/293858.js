t.d(r, { b: () => g });
var n = t(255367),
    i = t(73800),
    l = t(512722),
    o = t.n(l),
    a = t(704215),
    s = t(605236),
    d = t(717401),
    C = t(286961),
    c = t(317269),
    u = t(669079),
    p = t(296848),
    _ = t(987209),
    f = t(563132),
    m = t(107998),
    x = t(27034),
    h = t(400981),
    j = t(435020),
    L = t(698708),
    b = t(921944);
function g(e) {
    let r,
        { handleClose: t, planGroup: l, onSubscriptionConfirmation: g, renderPurchaseConfirmation: y, postSuccessGuild: S, followupSKUInfo: E, continueSessionToInitialStep: v } = e,
        { activeSubscription: I, paymentSources: w, paymentSourceId: O, selectedPlan: M, selectedSkuId: P, step: T, updatedSubscription: Z, startingPremiumSubscriptionPlanIdRef: A, startingFractionalPremiumEndsAtRef: R } = (0, f.JL)(),
        { isGift: N, giftRecipient: U, giftCode: k, hasSentMessage: B, isSendingMessage: F, sendGiftMessage: G, claimableRewards: H, selectedGiftingPromotionReward: D } = (0, _.wD)(),
        { confirmationFooter: W } = (0, m.zb)(),
        Y = null != W,
        z = (0, d.id)(M, N, H),
        K = (0, C.Z)(),
        V = (0, d.a5)(M),
        q = (0, d.tK)(null == D ? void 0 : D.skuId),
        J = (0, j.$)(w, O),
        Q = N && null != D && V;
    (o()(null != M, 'Expected plan to selected'), o()(null != P, 'Expected selectedSkuId'), o()(null != T, 'Step should be set'));
    let X = i.useCallback(() => {
        (t(), null == g || g());
    }, [t, g]);
    return (
        i.useEffect(() => {
            !N || null == U || null == k || B || F || (0, u.pO)(U) || G({ onSubscriptionConfirmation: g });
        }, [G, N, U, k, B, F, g]),
        i.useEffect(() => {
            null != K && null != K.reminderNotice && z && (0, s.wH)(a.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, { dismissAction: b.L.INDIRECT_ACTION });
        }, [K, z]),
        (r =
            null != y
                ? y(M, X, Z)
                : null != v
                  ? (0, n.jsx)(c.VY, {})
                  : N
                    ? (0, n.jsx)(c.TB, {
                          planId: M.id,
                          onClose: X
                      })
                    : A.current === M.id
                      ? (0, n.jsx)(c.ZP, {
                            planId: M.id,
                            postSuccessGuild: S,
                            onClose: X,
                            paymentSourceType: J,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: R.current
                        })
                      : (0, n.jsx)(c.ZP, {
                            followupSKUInfo: E,
                            startingPremiumSubscriptionPlanId: A.current,
                            planId: M.id,
                            onClose: X,
                            isDowngrade: null != I && (0, p.GY)(I, M.id, l),
                            paymentSourceType: J,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: R.current
                        })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(x.C3, {
                    children: [(0, n.jsx)(L.Z, {}), r]
                }),
                null != W && W,
                Q &&
                    null != q &&
                    (0, n.jsx)(h.Z, {
                        onClose: X,
                        selectedPromotionalDecoPurchaseRecord: q,
                        selectedGiftingPromotionReward: D
                    })
            ]
        })
    );
}
