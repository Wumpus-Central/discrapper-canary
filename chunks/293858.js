n.d(t, { b: () => y });
var r = n(200651),
    i = n(192379),
    l = n(512722),
    s = n.n(l),
    o = n(704215),
    a = n(605236),
    C = n(881602),
    d = n(717401),
    c = n(286961),
    u = n(317269),
    p = n(669079),
    _ = n(296848),
    x = n(987209),
    f = n(563132),
    h = n(107998),
    j = n(614277),
    m = n(400981),
    L = n(435020),
    g = n(698708),
    S = n(921944);
function y(e) {
    let t,
        { handleClose: n, planGroup: l, onSubscriptionConfirmation: y, renderPurchaseConfirmation: E, postSuccessGuild: b, followupSKUInfo: N, continueSessionToInitialStep: I } = e,
        { activeSubscription: P, paymentSources: M, paymentSourceId: T, selectedPlan: v, selectedSkuId: Z, step: O, updatedSubscription: w, startingPremiumSubscriptionPlanIdRef: k } = (0, f.JL)(),
        { isGift: U, giftRecipient: A, giftCode: R, hasSentMessage: F, isSendingMessage: B, sendGiftMessage: H, claimableRewards: W, selectedGiftingPromotionReward: G } = (0, x.wD)(),
        { confirmationFooter: D } = (0, h.zb)(),
        Y = null != D,
        z = (0, d.id)(v, U, W),
        K = (0, c.Z)(),
        X = (0, d.a5)(v),
        V = (0, d.tK)(null == G ? void 0 : G.skuId),
        Q = (0, L.$)(M, T),
        q = U && null != G && X;
    s()(null != v, 'Expected plan to selected'), s()(null != Z, 'Expected selectedSkuId'), s()(null != O, 'Step should be set');
    let J = i.useCallback(() => {
        n(), null == y || y();
    }, [n, y]);
    return (
        i.useEffect(() => {
            !(!U || null == A || null == R || F || B || (0, p.pO)(A)) && C.F.getCurrentConfig({ location: '36b986_1' }).enabled && H({ onSubscriptionConfirmation: y });
        }, [H, U, A, R, F, B, y]),
        i.useEffect(() => {
            null != K && null != K.reminderNotice && z && (0, a.wH)(o.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, { dismissAction: S.L.INDIRECT_ACTION });
        }, [K, z]),
        (t =
            null != E
                ? E(v, J, w)
                : null != I
                  ? (0, r.jsx)(u.VY, {})
                  : U
                    ? (0, r.jsx)(u.TB, {
                          planId: v.id,
                          onClose: J
                      })
                    : k.current === v.id
                      ? (0, r.jsx)(u.ZP, {
                            planId: v.id,
                            postSuccessGuild: b,
                            onClose: J,
                            paymentSourceType: Q,
                            hideClose: Y
                        })
                      : (0, r.jsx)(u.ZP, {
                            followupSKUInfo: N,
                            startingPremiumSubscriptionPlanId: k.current,
                            planId: v.id,
                            onClose: J,
                            isDowngrade: null != P && (0, _.GY)(P, v.id, l),
                            paymentSourceType: Q,
                            hideClose: Y
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(j.C3, {
                    children: [(0, r.jsx)(g.Z, {}), t]
                }),
                null != D && D,
                q &&
                    null != V &&
                    (0, r.jsx)(m.Z, {
                        onClose: J,
                        selectedPromotionalDecoPurchaseRecord: V,
                        selectedGiftingPromotionReward: G
                    })
            ]
        })
    );
}
