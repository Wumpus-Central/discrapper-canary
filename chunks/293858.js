n.d(t, { b: () => g });
var i = n(255367),
    r = n(73800),
    l = n(512722),
    s = n.n(l),
    a = n(704215),
    o = n(605236),
    C = n(717401),
    d = n(286961),
    c = n(317269),
    u = n(669079),
    p = n(296848),
    x = n(987209),
    h = n(563132),
    f = n(107998),
    j = n(27034),
    m = n(400981),
    _ = n(435020),
    L = n(698708),
    y = n(921944);
function g(e) {
    let t,
        { handleClose: n, planGroup: l, onSubscriptionConfirmation: g, renderPurchaseConfirmation: E, postSuccessGuild: S, followupSKUInfo: v, continueSessionToInitialStep: b } = e,
        { activeSubscription: O, paymentSources: P, paymentSourceId: Z, selectedPlan: I, selectedSkuId: w, step: T, updatedSubscription: M, startingPremiumSubscriptionPlanIdRef: A, startingFractionalPremiumEndsAtRef: R } = (0, h.JL)(),
        { isGift: N, giftRecipient: U, giftCode: k, hasSentMessage: B, isSendingMessage: H, sendGiftMessage: F, claimableRewards: G, selectedGiftingPromotionReward: D } = (0, x.wD)(),
        { confirmationFooter: W } = (0, f.zb)(),
        z = null != W,
        Y = (0, C.id)(I, N, G),
        K = (0, d.Z)(),
        V = (0, C.a5)(I),
        q = (0, C.tK)(null == D ? void 0 : D.skuId),
        J = (0, _.$)(P, Z),
        Q = N && null != D && V;
    (s()(null != I, 'Expected plan to selected'), s()(null != w, 'Expected selectedSkuId'), s()(null != T, 'Step should be set'));
    let X = r.useCallback(() => {
        (n(), null == g || g());
    }, [n, g]);
    return (
        r.useEffect(() => {
            !N || null == U || null == k || B || H || (0, u.pO)(U) || F({ onSubscriptionConfirmation: g });
        }, [F, N, U, k, B, H, g]),
        r.useEffect(() => {
            null != K && null != K.reminderNotice && Y && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, { dismissAction: y.L.INDIRECT_ACTION });
        }, [K, Y]),
        (t =
            null != E
                ? E(I, X, M)
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
                            hideClose: z,
                            startingFractionalPremiumEndsAt: R.current
                        })
                      : (0, i.jsx)(c.ZP, {
                            followupSKUInfo: v,
                            startingPremiumSubscriptionPlanId: A.current,
                            planId: I.id,
                            onClose: X,
                            isDowngrade: null != O && (0, p.GY)(O, I.id, l),
                            paymentSourceType: J,
                            hideClose: z,
                            startingFractionalPremiumEndsAt: R.current
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(j.C3, {
                    children: [(0, i.jsx)(L.Z, {}), t]
                }),
                null != W && W,
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
