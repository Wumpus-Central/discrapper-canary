n.d(t, { b: () => E });
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
function E(e) {
    let t,
        { handleClose: n, planGroup: l, onSubscriptionConfirmation: E, renderPurchaseConfirmation: g, postSuccessGuild: b, followupSKUInfo: S, continueSessionToInitialStep: v } = e,
        { activeSubscription: O, paymentSources: w, paymentSourceId: Z, selectedPlan: P, selectedSkuId: I, step: M, updatedSubscription: R, startingPremiumSubscriptionPlanIdRef: T, startingFractionalPremiumEndsAtRef: A } = (0, h.JL)(),
        { isGift: N, giftRecipient: U, giftCode: k, hasSentMessage: G, isSendingMessage: B, sendGiftMessage: H, claimableRewards: F, selectedGiftingPromotionReward: D } = (0, x.wD)(),
        { confirmationFooter: W } = (0, f.zb)(),
        z = null != W,
        Y = (0, C.id)(P, N, F),
        K = (0, d.Z)(),
        V = (0, C.a5)(P),
        q = (0, C.tK)(null == D ? void 0 : D.skuId),
        J = (0, _.$)(w, Z),
        Q = N && null != D && V;
    (s()(null != P, 'Expected plan to selected'), s()(null != I, 'Expected selectedSkuId'), s()(null != M, 'Step should be set'));
    let X = r.useCallback(() => {
        (n(), null == E || E());
    }, [n, E]);
    return (
        r.useEffect(() => {
            !N || null == U || null == k || G || B || (0, u.pO)(U) || H({ onSubscriptionConfirmation: E });
        }, [H, N, U, k, G, B, E]),
        r.useEffect(() => {
            null != K && null != K.reminderNotice && Y && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, { dismissAction: y.L.INDIRECT_ACTION });
        }, [K, Y]),
        (t =
            null != g
                ? g(P, X, R)
                : null != v
                  ? (0, i.jsx)(c.VY, {})
                  : N
                    ? (0, i.jsx)(c.TB, {
                          planId: P.id,
                          onClose: X
                      })
                    : T.current === P.id
                      ? (0, i.jsx)(c.ZP, {
                            planId: P.id,
                            postSuccessGuild: b,
                            onClose: X,
                            paymentSourceType: J,
                            hideClose: z,
                            startingFractionalPremiumEndsAt: A.current
                        })
                      : (0, i.jsx)(c.ZP, {
                            followupSKUInfo: S,
                            startingPremiumSubscriptionPlanId: T.current,
                            planId: P.id,
                            onClose: X,
                            isDowngrade: null != O && (0, p.GY)(O, P.id, l),
                            paymentSourceType: J,
                            hideClose: z,
                            startingFractionalPremiumEndsAt: A.current
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
