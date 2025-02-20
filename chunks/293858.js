n.d(t, { b: () => g });
var l = n(200651),
    i = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(704215),
    o = n(605236),
    C = n(881602),
    d = n(717401),
    c = n(286961),
    u = n(317269),
    p = n(669079),
    x = n(296848),
    f = n(987209),
    h = n(563132),
    _ = n(614277),
    j = n(400981),
    m = n(698708),
    L = n(921944);
function g(e) {
    var t, n;
    let s,
        { handleClose: g, planGroup: E, onSubscriptionConfirmation: S, renderPurchaseConfirmation: N, postSuccessGuild: y, followupSKUInfo: I, continueSessionToInitialStep: O } = e,
        { activeSubscription: v, paymentSources: P, paymentSourceId: b, selectedPlan: T, selectedSkuId: M, step: Z, updatedSubscription: w, startingPremiumSubscriptionPlanIdRef: k } = (0, h.JL)(),
        { isGift: U, giftRecipient: A, giftCode: R, hasSentMessage: H, isSendingMessage: W, sendGiftMessage: B, claimableRewards: F, selectedGiftingPromotionReward: G } = (0, f.wD)(),
        D = (0, d.id)(T, U, F),
        Y = (0, c.Z)(),
        K = (0, d.a5)(T),
        X = (0, d.tK)(null == G ? void 0 : G.skuId),
        z = U && null != G && K;
    r()(null != T, 'Expected plan to selected'), r()(null != M, 'Expected selectedSkuId'), r()(null != Z, 'Step should be set');
    let V = i.useCallback(() => {
        g(), null == S || S();
    }, [g, S]);
    return (
        i.useEffect(() => {
            !(!U || null == A || null == R || H || W || (0, p.pO)(A)) && C.F.getCurrentConfig({ location: '36b986_1' }).enabled && B({ onSubscriptionConfirmation: S });
        }, [B, U, A, R, H, W, S]),
        i.useEffect(() => {
            null != Y && null != Y.reminderNotice && D && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, Y.dismissibleContentVersion, { dismissAction: L.L.INDIRECT_ACTION });
        }, [Y, D]),
        (s =
            null != N
                ? N(T, V, w)
                : null != O
                  ? (0, l.jsx)(u.VY, {})
                  : U
                    ? (0, l.jsx)(u.TB, {
                          planId: T.id,
                          onClose: V
                      })
                    : k.current === T.id
                      ? (0, l.jsx)(u.ZP, {
                            planId: T.id,
                            postSuccessGuild: y,
                            onClose: V,
                            paymentSourceType: null === (t = P[null != b ? b : '']) || void 0 === t ? void 0 : t.type
                        })
                      : (0, l.jsx)(u.ZP, {
                            followupSKUInfo: I,
                            startingPremiumSubscriptionPlanId: k.current,
                            planId: T.id,
                            onClose: V,
                            isDowngrade: null != v && (0, x.GY)(v, T.id, E),
                            paymentSourceType: null === (n = P[null != b ? b : '']) || void 0 === n ? void 0 : n.type
                        })),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(_.C3, {
                    children: [(0, l.jsx)(m.Z, {}), s]
                }),
                z &&
                    null != X &&
                    (0, l.jsx)(j.Z, {
                        onClose: V,
                        selectedPromotionalDecoPurchaseRecord: X,
                        selectedGiftingPromotionReward: G
                    })
            ]
        })
    );
}
