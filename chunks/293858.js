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
    L = n(698708),
    g = n(921944);
function E(e) {
    let t,
        { handleClose: n, planGroup: s, onSubscriptionConfirmation: E, renderPurchaseConfirmation: y, postSuccessGuild: S, followupSKUInfo: Z, continueSessionToInitialStep: M } = e,
        { activeSubscription: v, paymentSources: P, paymentSourceId: b, selectedPlan: I, selectedSkuId: T, step: N, updatedSubscription: O, startingPremiumSubscriptionPlanIdRef: w, startingFractionalPremiumEndsAtRef: R } = (0, h.JL)(),
        { isGift: k, giftRecipient: H, giftCode: U, hasSentMessage: A, isSendingMessage: B, sendGiftMessage: F, claimableRewards: G, selectedGiftingPromotionReward: D } = (0, x.wD)(),
        { confirmationFooter: W } = (0, f.zb)(),
        Y = null != W,
        K = (0, C.id)(I, k, G),
        V = (0, d.Z)(),
        X = (0, C.a5)(I),
        z = (0, C.tK)(null == D ? void 0 : D.skuId),
        q = (0, _.$)(P, b),
        Q = k && null != D && X;
    r()(null != I, 'Expected plan to selected'), r()(null != T, 'Expected selectedSkuId'), r()(null != N, 'Step should be set');
    let J = l.useCallback(() => {
        n(), null == E || E();
    }, [n, E]);
    return (
        l.useEffect(() => {
            !k || null == H || null == U || A || B || (0, u.pO)(H) || F({ onSubscriptionConfirmation: E });
        }, [F, k, H, U, A, B, E]),
        l.useEffect(() => {
            null != V && null != V.reminderNotice && K && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, V.dismissibleContentVersion, { dismissAction: g.L.INDIRECT_ACTION });
        }, [V, K]),
        (t =
            null != y
                ? y(I, J, O)
                : null != M
                  ? (0, i.jsx)(c.VY, {})
                  : k
                    ? (0, i.jsx)(c.TB, {
                          planId: I.id,
                          onClose: J
                      })
                    : w.current === I.id
                      ? (0, i.jsx)(c.ZP, {
                            planId: I.id,
                            postSuccessGuild: S,
                            onClose: J,
                            paymentSourceType: q,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: R.current
                        })
                      : (0, i.jsx)(c.ZP, {
                            followupSKUInfo: Z,
                            startingPremiumSubscriptionPlanId: w.current,
                            planId: I.id,
                            onClose: J,
                            isDowngrade: null != v && (0, p.GY)(v, I.id, s),
                            paymentSourceType: q,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: R.current
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(j.C3, {
                    children: [(0, i.jsx)(L.Z, {}), t]
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
