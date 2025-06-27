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
    m = t(400981),
    _ = t(435020),
    L = t(698708),
    g = t(921944);
function y(e) {
    let n,
        { handleClose: t, planGroup: r, onSubscriptionConfirmation: y, renderPurchaseConfirmation: E, postSuccessGuild: S, followupSKUInfo: v, continueSessionToInitialStep: P } = e,
        { activeSubscription: Z, paymentSources: b, paymentSourceId: I, selectedPlan: O, selectedSkuId: T, step: M, updatedSubscription: w, startingPremiumSubscriptionPlanIdRef: A, startingFractionalPremiumEndsAtRef: N } = (0, h.JL)(),
        { isGift: R, giftRecipient: k, giftCode: U, hasSentMessage: B, isSendingMessage: H, sendGiftMessage: F, claimableRewards: G, selectedGiftingPromotionReward: D } = (0, x.wD)(),
        { confirmationFooter: W } = (0, f.zb)(),
        z = null != W,
        Y = (0, C.id)(O, R, G),
        K = (0, d.Z)(),
        V = (0, C.a5)(O),
        q = (0, C.tK)(null == D ? void 0 : D.skuId),
        J = (0, _.$)(b, I),
        Q = R && null != D && V;
    s()(null != O, 'Expected plan to selected'), s()(null != T, 'Expected selectedSkuId'), s()(null != M, 'Step should be set');
    let X = l.useCallback(() => {
        t(), null == y || y();
    }, [t, y]);
    return (
        l.useEffect(() => {
            !R || null == k || null == U || B || H || (0, u.pO)(k) || F({ onSubscriptionConfirmation: y });
        }, [F, R, k, U, B, H, y]),
        l.useEffect(() => {
            null != K && null != K.reminderNotice && Y && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, { dismissAction: g.L.INDIRECT_ACTION });
        }, [K, Y]),
        (n =
            null != E
                ? E(O, X, w)
                : null != P
                  ? (0, i.jsx)(c.VY, {})
                  : R
                    ? (0, i.jsx)(c.TB, {
                          planId: O.id,
                          onClose: X
                      })
                    : A.current === O.id
                      ? (0, i.jsx)(c.ZP, {
                            planId: O.id,
                            postSuccessGuild: S,
                            onClose: X,
                            paymentSourceType: J,
                            hideClose: z,
                            startingFractionalPremiumEndsAt: N.current
                        })
                      : (0, i.jsx)(c.ZP, {
                            followupSKUInfo: v,
                            startingPremiumSubscriptionPlanId: A.current,
                            planId: O.id,
                            onClose: X,
                            isDowngrade: null != Z && (0, p.GY)(Z, O.id, r),
                            paymentSourceType: J,
                            hideClose: z,
                            startingFractionalPremiumEndsAt: N.current
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(j.C3, {
                    children: [(0, i.jsx)(L.Z, {}), n]
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
