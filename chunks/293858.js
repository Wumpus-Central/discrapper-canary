n.d(t, { b: () => E });
var i = n(255367),
    l = n(73800),
    s = n(512722),
    r = n.n(s),
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
    j = n(614277),
    m = n(400981),
    _ = n(435020),
    g = n(698708),
    L = n(921944);
function E(e) {
    let t,
        { handleClose: n, planGroup: s, onSubscriptionConfirmation: E, renderPurchaseConfirmation: y, postSuccessGuild: S, followupSKUInfo: v, continueSessionToInitialStep: P } = e,
        { activeSubscription: b, paymentSources: I, paymentSourceId: T, selectedPlan: M, selectedSkuId: Z, step: N, updatedSubscription: O, startingPremiumSubscriptionPlanIdRef: R, startingFractionalPremiumEndsAtRef: k } = (0, h.JL)(),
        { isGift: U, giftRecipient: A, giftCode: w, hasSentMessage: H, isSendingMessage: F, sendGiftMessage: B, claimableRewards: G, selectedGiftingPromotionReward: D } = (0, x.wD)(),
        { confirmationFooter: W } = (0, f.zb)(),
        Y = null != W,
        K = (0, C.id)(M, U, G),
        V = (0, d.Z)(),
        X = (0, C.a5)(M),
        z = (0, C.tK)(null == D ? void 0 : D.skuId),
        q = (0, _.$)(I, T),
        Q = U && null != D && X;
    r()(null != M, 'Expected plan to selected'), r()(null != Z, 'Expected selectedSkuId'), r()(null != N, 'Step should be set');
    let J = l.useCallback(() => {
        n(), null == E || E();
    }, [n, E]);
    return (
        l.useEffect(() => {
            !U || null == A || null == w || H || F || (0, u.pO)(A) || B({ onSubscriptionConfirmation: E });
        }, [B, U, A, w, H, F, E]),
        l.useEffect(() => {
            null != V && null != V.reminderNotice && K && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, V.dismissibleContentVersion, { dismissAction: L.L.INDIRECT_ACTION });
        }, [V, K]),
        (t =
            null != y
                ? y(M, J, O)
                : null != P
                  ? (0, i.jsx)(c.VY, {})
                  : U
                    ? (0, i.jsx)(c.TB, {
                          planId: M.id,
                          onClose: J
                      })
                    : R.current === M.id
                      ? (0, i.jsx)(c.ZP, {
                            planId: M.id,
                            postSuccessGuild: S,
                            onClose: J,
                            paymentSourceType: q,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: k.current
                        })
                      : (0, i.jsx)(c.ZP, {
                            followupSKUInfo: v,
                            startingPremiumSubscriptionPlanId: R.current,
                            planId: M.id,
                            onClose: J,
                            isDowngrade: null != b && (0, p.GY)(b, M.id, s),
                            paymentSourceType: q,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: k.current
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(j.C3, {
                    children: [(0, i.jsx)(g.Z, {}), t]
                }),
                null != W && W,
                Q &&
                    null != z &&
                    (0, i.jsx)(m.Z, {
                        onClose: J,
                        selectedPromotionalDecoPurchaseRecord: z,
                        selectedGiftingPromotionReward: D
                    })
            ]
        })
    );
}
