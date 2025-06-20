t.d(n, { b: () => y });
var i = t(255367),
    l = t(73800),
    s = t(512722),
    r = t.n(s),
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
    f = t(614277),
    _ = t(400981),
    m = t(435020),
    L = t(698708),
    g = t(921944);
function y(e) {
    let n,
        { handleClose: t, planGroup: s, onSubscriptionConfirmation: y, renderPurchaseConfirmation: S, postSuccessGuild: E, followupSKUInfo: b, continueSessionToInitialStep: v } = e,
        { activeSubscription: P, paymentSources: Z, paymentSourceId: O, selectedPlan: I, selectedSkuId: w, step: M, updatedSubscription: T, startingPremiumSubscriptionPlanIdRef: A, startingFractionalPremiumEndsAtRef: N } = (0, h.JL)(),
        { isGift: k, giftRecipient: U, giftCode: R, hasSentMessage: F, isSendingMessage: H, sendGiftMessage: B, claimableRewards: G, selectedGiftingPromotionReward: D } = (0, x.wD)(),
        { confirmationFooter: W } = (0, j.zb)(),
        z = null != W,
        Y = (0, C.id)(I, k, G),
        K = (0, d.Z)(),
        V = (0, C.a5)(I),
        q = (0, C.tK)(null == D ? void 0 : D.skuId),
        J = (0, m.$)(Z, O),
        Q = k && null != D && V;
    r()(null != I, 'Expected plan to selected'), r()(null != w, 'Expected selectedSkuId'), r()(null != M, 'Step should be set');
    let X = l.useCallback(() => {
        t(), null == y || y();
    }, [t, y]);
    return (
        l.useEffect(() => {
            !k || null == U || null == R || F || H || (0, u.pO)(U) || B({ onSubscriptionConfirmation: y });
        }, [B, k, U, R, F, H, y]),
        l.useEffect(() => {
            null != K && null != K.reminderNotice && Y && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, { dismissAction: g.L.INDIRECT_ACTION });
        }, [K, Y]),
        (n =
            null != S
                ? S(I, X, T)
                : null != v
                  ? (0, i.jsx)(c.VY, {})
                  : k
                    ? (0, i.jsx)(c.TB, {
                          planId: I.id,
                          onClose: X
                      })
                    : A.current === I.id
                      ? (0, i.jsx)(c.ZP, {
                            planId: I.id,
                            postSuccessGuild: E,
                            onClose: X,
                            paymentSourceType: J,
                            hideClose: z,
                            startingFractionalPremiumEndsAt: N.current
                        })
                      : (0, i.jsx)(c.ZP, {
                            followupSKUInfo: b,
                            startingPremiumSubscriptionPlanId: A.current,
                            planId: I.id,
                            onClose: X,
                            isDowngrade: null != P && (0, p.GY)(P, I.id, s),
                            paymentSourceType: J,
                            hideClose: z,
                            startingFractionalPremiumEndsAt: N.current
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(f.C3, {
                    children: [(0, i.jsx)(L.Z, {}), n]
                }),
                null != W && W,
                Q &&
                    null != q &&
                    (0, i.jsx)(_.Z, {
                        onClose: X,
                        selectedPromotionalDecoPurchaseRecord: q,
                        selectedGiftingPromotionReward: D
                    })
            ]
        })
    );
}
