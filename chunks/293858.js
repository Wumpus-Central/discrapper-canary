n.d(t, { b: () => E });
var i = n(255367),
    l = n(73800),
    s = n(512722),
    r = n.n(s),
    a = n(704215),
    C = n(605236),
    o = n(717401),
    d = n(286961),
    c = n(317269),
    u = n(669079),
    p = n(296848),
    x = n(987209),
    h = n(563132),
    f = n(107998),
    j = n(614277),
    m = n(400981),
    L = n(435020),
    _ = n(698708),
    g = n(921944);
function E(e) {
    let t,
        { handleClose: n, planGroup: s, onSubscriptionConfirmation: E, renderPurchaseConfirmation: y, postSuccessGuild: S, followupSKUInfo: M, continueSessionToInitialStep: Z } = e,
        { activeSubscription: P, paymentSources: v, paymentSourceId: I, selectedPlan: b, selectedSkuId: T, step: N, updatedSubscription: O, startingPremiumSubscriptionPlanIdRef: w, startingFractionalPremiumEndsAtRef: k } = (0, h.JL)(),
        { isGift: H, giftRecipient: R, giftCode: U, hasSentMessage: A, isSendingMessage: B, sendGiftMessage: F, claimableRewards: G, selectedGiftingPromotionReward: D } = (0, x.wD)(),
        { confirmationFooter: W } = (0, f.zb)(),
        Y = null != W,
        K = (0, o.id)(b, H, G),
        V = (0, d.Z)(),
        X = (0, o.a5)(b),
        z = (0, o.tK)(null == D ? void 0 : D.skuId),
        q = (0, L.$)(v, I),
        Q = H && null != D && X;
    r()(null != b, 'Expected plan to selected'), r()(null != T, 'Expected selectedSkuId'), r()(null != N, 'Step should be set');
    let J = l.useCallback(() => {
        n(), null == E || E();
    }, [n, E]);
    return (
        l.useEffect(() => {
            !H || null == R || null == U || A || B || (0, u.pO)(R) || F({ onSubscriptionConfirmation: E });
        }, [F, H, R, U, A, B, E]),
        l.useEffect(() => {
            null != V && null != V.reminderNotice && K && (0, C.wH)(a.z.GIFTING_PROMOTION_REMINDER, V.dismissibleContentVersion, { dismissAction: g.L.INDIRECT_ACTION });
        }, [V, K]),
        (t =
            null != y
                ? y(b, J, O)
                : null != Z
                  ? (0, i.jsx)(c.VY, {})
                  : H
                    ? (0, i.jsx)(c.TB, {
                          planId: b.id,
                          onClose: J
                      })
                    : w.current === b.id
                      ? (0, i.jsx)(c.ZP, {
                            planId: b.id,
                            postSuccessGuild: S,
                            onClose: J,
                            paymentSourceType: q,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: k.current
                        })
                      : (0, i.jsx)(c.ZP, {
                            followupSKUInfo: M,
                            startingPremiumSubscriptionPlanId: w.current,
                            planId: b.id,
                            onClose: J,
                            isDowngrade: null != P && (0, p.GY)(P, b.id, s),
                            paymentSourceType: q,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: k.current
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(j.C3, {
                    children: [(0, i.jsx)(_.Z, {}), t]
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
