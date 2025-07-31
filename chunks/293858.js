t.d(n, { b: () => y });
var i = t(255367),
    r = t(73800),
    l = t(512722),
    s = t.n(l),
    a = t(704215),
    o = t(605236),
    C = t(717401),
    d = t(286961),
    c = t(317269),
    u = t(669079),
    p = t(296848),
    x = t(987209),
    h = t(563132),
    j = t(107998),
    f = t(27034),
    m = t(400981),
    _ = t(435020),
    L = t(698708),
    g = t(921944);
function y(e) {
    let n,
        { handleClose: t, planGroup: l, onSubscriptionConfirmation: y, renderPurchaseConfirmation: E, postSuccessGuild: S, followupSKUInfo: v, continueSessionToInitialStep: b } = e,
        { activeSubscription: P, paymentSources: O, paymentSourceId: Z, selectedPlan: I, selectedSkuId: M, step: T, updatedSubscription: w, startingPremiumSubscriptionPlanIdRef: A, startingFractionalPremiumEndsAtRef: R } = (0, h.JL)(),
        { isGift: N, giftRecipient: U, giftCode: k, hasSentMessage: B, isSendingMessage: H, sendGiftMessage: F, claimableRewards: G, selectedGiftingPromotionReward: D } = (0, x.wD)(),
        { confirmationFooter: z } = (0, j.zb)(),
        W = null != z,
        Y = (0, C.id)(I, N, G),
        K = (0, d.Z)(),
        V = (0, C.a5)(I),
        q = (0, C.tK)(null == D ? void 0 : D.skuId),
        J = (0, _.$)(O, Z),
        Q = N && null != D && V;
    (s()(null != I, 'Expected plan to selected'), s()(null != M, 'Expected selectedSkuId'), s()(null != T, 'Step should be set'));
    let X = r.useCallback(() => {
        (t(), null == y || y());
    }, [t, y]);
    return (
        r.useEffect(() => {
            !N || null == U || null == k || B || H || (0, u.pO)(U) || F({ onSubscriptionConfirmation: y });
        }, [F, N, U, k, B, H, y]),
        r.useEffect(() => {
            null != K && null != K.reminderNotice && Y && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, { dismissAction: g.L.INDIRECT_ACTION });
        }, [K, Y]),
        (n =
            null != E
                ? E(I, X, w)
                : null != b
                  ? (0, i.jsx)(c.VY, {})
                  : N
                    ? (0, i.jsx)(c.TB, {
                          planId: I.id,
                          onClose: X
                      })
                    : A.current === I.id
                      ? (0, i.jsx)(c.ZP, {
                            planId: I.id,
                            postSuccessGuild: S,
                            onClose: X,
                            paymentSourceType: J,
                            hideClose: W,
                            startingFractionalPremiumEndsAt: R.current
                        })
                      : (0, i.jsx)(c.ZP, {
                            followupSKUInfo: v,
                            startingPremiumSubscriptionPlanId: A.current,
                            planId: I.id,
                            onClose: X,
                            isDowngrade: null != P && (0, p.GY)(P, I.id, l),
                            paymentSourceType: J,
                            hideClose: W,
                            startingFractionalPremiumEndsAt: R.current
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(f.C3, {
                    children: [(0, i.jsx)(L.Z, {}), n]
                }),
                null != z && z,
                Q &&
                    null != q &&
                    (0, i.jsx)(m.Z, {
                        onClose: X,
                        selectedPromotionalDecoPurchaseRecord: q,
                        selectedGiftingPromotionReward: D
                    })
            ]
        })
    );
}
