t.d(n, { b: () => y });
var i = t(255367),
    l = t(73800),
    r = t(512722),
    s = t.n(r),
    a = t(704215),
    o = t(605236),
    C = t(717401),
    d = t(286961),
    c = t(317269),
    u = t(669079),
    p = t(296848),
    x = t(987209),
    h = t(563132),
    f = t(107998),
    j = t(614277),
    _ = t(400981),
    m = t(435020),
    L = t(698708),
    g = t(921944);
function y(e) {
    let n,
        { handleClose: t, planGroup: r, onSubscriptionConfirmation: y, renderPurchaseConfirmation: E, postSuccessGuild: S, followupSKUInfo: v, continueSessionToInitialStep: P } = e,
        { activeSubscription: Z, paymentSources: b, paymentSourceId: O, selectedPlan: I, selectedSkuId: M, step: w, updatedSubscription: T, startingPremiumSubscriptionPlanIdRef: A, startingFractionalPremiumEndsAtRef: k } = (0, h.JL)(),
        { isGift: U, giftRecipient: N, giftCode: R, hasSentMessage: B, isSendingMessage: F, sendGiftMessage: H, claimableRewards: G, selectedGiftingPromotionReward: D } = (0, x.wD)(),
        { confirmationFooter: W } = (0, f.zb)(),
        z = null != W,
        Y = (0, C.id)(I, U, G),
        K = (0, d.Z)(),
        V = (0, C.a5)(I),
        q = (0, C.tK)(null == D ? void 0 : D.skuId),
        J = (0, m.$)(b, O),
        Q = U && null != D && V;
    s()(null != I, 'Expected plan to selected'), s()(null != M, 'Expected selectedSkuId'), s()(null != w, 'Step should be set');
    let X = l.useCallback(() => {
        t(), null == y || y();
    }, [t, y]);
    return (
        l.useEffect(() => {
            !U || null == N || null == R || B || F || (0, u.pO)(N) || H({ onSubscriptionConfirmation: y });
        }, [H, U, N, R, B, F, y]),
        l.useEffect(() => {
            null != K && null != K.reminderNotice && Y && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, { dismissAction: g.L.INDIRECT_ACTION });
        }, [K, Y]),
        (n =
            null != E
                ? E(I, X, T)
                : null != P
                  ? (0, i.jsx)(c.VY, {})
                  : U
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
                            startingFractionalPremiumEndsAt: k.current
                        })
                      : (0, i.jsx)(c.ZP, {
                            followupSKUInfo: v,
                            startingPremiumSubscriptionPlanId: A.current,
                            planId: I.id,
                            onClose: X,
                            isDowngrade: null != Z && (0, p.GY)(Z, I.id, r),
                            paymentSourceType: J,
                            hideClose: z,
                            startingFractionalPremiumEndsAt: k.current
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(j.C3, {
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
