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
        { handleClose: n, planGroup: l, onSubscriptionConfirmation: S, renderPurchaseConfirmation: y, postSuccessGuild: E, followupSKUInfo: b, continueSessionToInitialStep: I } = e,
        { activeSubscription: N, paymentSources: T, paymentSourceId: M, selectedPlan: P, selectedSkuId: O, step: Z, updatedSubscription: v, startingPremiumSubscriptionPlanIdRef: w } = (0, x.JL)(),
        { isGift: k, giftRecipient: A, giftCode: U, hasSentMessage: R, isSendingMessage: F, sendGiftMessage: B, claimableRewards: H, selectedGiftingPromotionReward: W } = (0, _.wD)(),
        { confirmationFooter: G } = (0, h.zb)(),
        D = null != G,
        Y = (0, C.id)(P, k, H),
        z = (0, d.Z)(),
        K = (0, C.a5)(P),
        X = (0, C.tK)(null == W ? void 0 : W.skuId),
        V = (0, m.$)(T, M),
        Q = k && null != W && K;
    s()(null != P, 'Expected plan to selected'), s()(null != O, 'Expected selectedSkuId'), s()(null != Z, 'Step should be set');
    let q = i.useCallback(() => {
        n(), null == S || S();
    }, [n, S]);
    return (
        i.useEffect(() => {
            !k || null == A || null == U || R || F || (0, u.pO)(A) || B({ onSubscriptionConfirmation: S });
        }, [B, k, A, U, R, F, S]),
        i.useEffect(() => {
            null != z && null != z.reminderNotice && Y && (0, a.wH)(o.z.GIFTING_PROMOTION_REMINDER, z.dismissibleContentVersion, { dismissAction: g.L.INDIRECT_ACTION });
        }, [z, Y]),
        (t =
            null != y
                ? y(P, q, v)
                : null != I
                  ? (0, r.jsx)(c.VY, {})
                  : k
                    ? (0, r.jsx)(c.TB, {
                          planId: P.id,
                          onClose: q
                      })
                    : w.current === P.id
                      ? (0, r.jsx)(c.ZP, {
                            planId: P.id,
                            postSuccessGuild: E,
                            onClose: q,
                            paymentSourceType: V,
                            hideClose: D
                        })
                      : (0, r.jsx)(c.ZP, {
                            followupSKUInfo: b,
                            startingPremiumSubscriptionPlanId: w.current,
                            planId: P.id,
                            onClose: q,
                            isDowngrade: null != N && (0, p.GY)(N, P.id, l),
                            paymentSourceType: V,
                            hideClose: D
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(f.C3, {
                    children: [(0, r.jsx)(L.Z, {}), t]
                }),
                null != G && G,
                Q &&
                    null != X &&
                    (0, r.jsx)(j.Z, {
                        onClose: q,
                        selectedPromotionalDecoPurchaseRecord: X,
                        selectedGiftingPromotionReward: W
                    })
            ]
        })
    );
}
