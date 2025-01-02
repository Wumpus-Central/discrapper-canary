n.d(t, {
    b: function () {
        return L;
    }
});
var i = n(200651),
    l = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(605236),
    o = n(881602),
    C = n(717401),
    d = n(286961),
    u = n(317269),
    c = n(669079),
    p = n(296848),
    x = n(987209),
    h = n(563132),
    _ = n(614277),
    f = n(400981),
    j = n(698708),
    m = n(921944);
function L(e) {
    var t, n;
    let s,
        { handleClose: L, planGroup: S, onSubscriptionConfirmation: g, renderPurchaseConfirmation: E, postSuccessGuild: I, followupSKUInfo: M, continueSessionToInitialStep: v } = e,
        { activeSubscription: y, paymentSources: T, paymentSourceId: N, selectedPlan: P, selectedSkuId: Z, step: A, updatedSubscription: U, startingPremiumSubscriptionPlanIdRef: k } = (0, h.usePaymentContext)(),
        { isGift: O, giftRecipient: R, giftCode: b, hasSentMessage: w, isSendingMessage: B, sendGiftMessage: H, claimableRewards: F, selectedGiftingPromotionReward: G } = (0, x.wD)(),
        D = (0, C.id)(P, O, F),
        W = (0, d.Z)(),
        Y = (0, C.a5)(P),
        K = (0, C.tK)(null == G ? void 0 : G.skuId),
        V = O && null != G && Y;
    r()(null != P, 'Expected plan to selected'), r()(null != Z, 'Expected selectedSkuId'), r()(null != A, 'Step should be set');
    let X = l.useCallback(() => {
        L(), null == g || g();
    }, [L, g]);
    return (
        l.useEffect(() => {
            if (!(!O || null == R || null == b || w || B || (0, c.pO)(R))) o.F.getCurrentConfig({ location: '36b986_1' }).enabled && H({ onSubscriptionConfirmation: g });
        }, [H, O, R, b, w, B, g]),
        l.useEffect(() => {
            null != W && null != W.reminderNotice && D && (0, a.wH)(W.reminderNotice.dismissibleContent, W.dismissibleContentVersion, { dismissAction: m.L.INDIRECT_ACTION });
        }, [W, D]),
        (s =
            null != E
                ? E(P, X, U)
                : null != v
                  ? (0, i.jsx)(u.VY, {})
                  : O
                    ? (0, i.jsx)(u.TB, {
                          planId: P.id,
                          onClose: X
                      })
                    : k.current === P.id
                      ? (0, i.jsx)(u.ZP, {
                            planId: P.id,
                            postSuccessGuild: I,
                            onClose: X,
                            paymentSourceType: null === (t = T[null != N ? N : '']) || void 0 === t ? void 0 : t.type
                        })
                      : (0, i.jsx)(u.ZP, {
                            followupSKUInfo: M,
                            startingPremiumSubscriptionPlanId: k.current,
                            planId: P.id,
                            onClose: X,
                            isDowngrade: null != y && (0, p.GY)(y, P.id, S),
                            paymentSourceType: null === (n = T[null != N ? N : '']) || void 0 === n ? void 0 : n.type
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(_.C3, {
                    children: [(0, i.jsx)(j.Z, {}), s]
                }),
                V &&
                    null != K &&
                    (0, i.jsx)(f.Z, {
                        onClose: X,
                        selectedPromotionalDecoPurchaseRecord: K,
                        selectedGiftingPromotionReward: G
                    })
            ]
        })
    );
}
