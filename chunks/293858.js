n.d(t, { b: () => E });
var l = n(255367),
    i = n(73800),
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
    _ = n(400981),
    L = n(435020),
    m = n(698708),
    g = n(921944);
function E(e) {
    let t,
        { handleClose: n, planGroup: s, onSubscriptionConfirmation: E, renderPurchaseConfirmation: S, postSuccessGuild: y, followupSKUInfo: I, continueSessionToInitialStep: P } = e,
        { activeSubscription: M, paymentSources: O, paymentSourceId: Z, selectedPlan: T, selectedSkuId: b, step: v, updatedSubscription: N, startingPremiumSubscriptionPlanIdRef: k, startingFractionalPremiumEndsAtRef: A } = (0, h.JL)(),
        { isGift: U, giftRecipient: R, giftCode: w, hasSentMessage: H, isSendingMessage: B, sendGiftMessage: F, claimableRewards: G, selectedGiftingPromotionReward: D } = (0, x.wD)(),
        { confirmationFooter: W } = (0, f.zb)(),
        K = null != W,
        Y = (0, C.id)(T, U, G),
        X = (0, d.Z)(),
        z = (0, C.a5)(T),
        V = (0, C.tK)(null == D ? void 0 : D.skuId),
        Q = (0, L.$)(O, Z),
        q = U && null != D && z;
    r()(null != T, 'Expected plan to selected'), r()(null != b, 'Expected selectedSkuId'), r()(null != v, 'Step should be set');
    let J = i.useCallback(() => {
        n(), null == E || E();
    }, [n, E]);
    return (
        i.useEffect(() => {
            !U || null == R || null == w || H || B || (0, u.pO)(R) || F({ onSubscriptionConfirmation: E });
        }, [F, U, R, w, H, B, E]),
        i.useEffect(() => {
            null != X && null != X.reminderNotice && Y && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, X.dismissibleContentVersion, { dismissAction: g.L.INDIRECT_ACTION });
        }, [X, Y]),
        (t =
            null != S
                ? S(T, J, N)
                : null != P
                  ? (0, l.jsx)(c.VY, {})
                  : U
                    ? (0, l.jsx)(c.TB, {
                          planId: T.id,
                          onClose: J
                      })
                    : k.current === T.id
                      ? (0, l.jsx)(c.ZP, {
                            planId: T.id,
                            postSuccessGuild: y,
                            onClose: J,
                            paymentSourceType: Q,
                            hideClose: K,
                            startingFractionalPremiumEndsAt: A.current
                        })
                      : (0, l.jsx)(c.ZP, {
                            followupSKUInfo: I,
                            startingPremiumSubscriptionPlanId: k.current,
                            planId: T.id,
                            onClose: J,
                            isDowngrade: null != M && (0, p.GY)(M, T.id, s),
                            paymentSourceType: Q,
                            hideClose: K,
                            startingFractionalPremiumEndsAt: A.current
                        })),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(j.C3, {
                    children: [(0, l.jsx)(m.Z, {}), t]
                }),
                null != W && W,
                q &&
                    null != V &&
                    (0, l.jsx)(_.Z, {
                        onClose: J,
                        selectedPromotionalDecoPurchaseRecord: V,
                        selectedGiftingPromotionReward: D
                    })
            ]
        })
    );
}
