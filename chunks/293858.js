n.d(t, { b: () => E });
var l = n(200651),
    i = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(704215),
    o = n(605236),
    C = n(881602),
    d = n(717401),
    u = n(286961),
    c = n(317269),
    p = n(669079),
    x = n(296848),
    h = n(987209),
    _ = n(563132),
    f = n(614277),
    j = n(400981),
    m = n(698708),
    L = n(921944);
function E(e) {
    var t, n;
    let s,
        { handleClose: E, planGroup: g, onSubscriptionConfirmation: S, renderPurchaseConfirmation: I, postSuccessGuild: N, followupSKUInfo: T, continueSessionToInitialStep: M } = e,
        { activeSubscription: v, paymentSources: y, paymentSourceId: Z, selectedPlan: P, selectedSkuId: k, step: U, updatedSubscription: A, startingPremiumSubscriptionPlanIdRef: O } = (0, _.JL)(),
        { isGift: R, giftRecipient: w, giftCode: b, hasSentMessage: H, isSendingMessage: B, sendGiftMessage: F, claimableRewards: G, selectedGiftingPromotionReward: D } = (0, h.wD)(),
        W = (0, d.id)(P, R, G),
        Y = (0, u.Z)(),
        K = (0, d.a5)(P),
        X = (0, d.tK)(null == D ? void 0 : D.skuId),
        z = R && null != D && K;
    r()(null != P, 'Expected plan to selected'), r()(null != k, 'Expected selectedSkuId'), r()(null != U, 'Step should be set');
    let V = i.useCallback(() => {
        E(), null == S || S();
    }, [E, S]);
    return (
        i.useEffect(() => {
            !(!R || null == w || null == b || H || B || (0, p.pO)(w)) && C.F.getCurrentConfig({ location: '36b986_1' }).enabled && F({ onSubscriptionConfirmation: S });
        }, [F, R, w, b, H, B, S]),
        i.useEffect(() => {
            null != Y && null != Y.reminderNotice && W && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, Y.dismissibleContentVersion, { dismissAction: L.L.INDIRECT_ACTION });
        }, [Y, W]),
        (s =
            null != I
                ? I(P, V, A)
                : null != M
                  ? (0, l.jsx)(c.VY, {})
                  : R
                    ? (0, l.jsx)(c.TB, {
                          planId: P.id,
                          onClose: V
                      })
                    : O.current === P.id
                      ? (0, l.jsx)(c.ZP, {
                            planId: P.id,
                            postSuccessGuild: N,
                            onClose: V,
                            paymentSourceType: null === (t = y[null != Z ? Z : '']) || void 0 === t ? void 0 : t.type
                        })
                      : (0, l.jsx)(c.ZP, {
                            followupSKUInfo: T,
                            startingPremiumSubscriptionPlanId: O.current,
                            planId: P.id,
                            onClose: V,
                            isDowngrade: null != v && (0, x.GY)(v, P.id, g),
                            paymentSourceType: null === (n = y[null != Z ? Z : '']) || void 0 === n ? void 0 : n.type
                        })),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(f.C3, {
                    children: [(0, l.jsx)(m.Z, {}), s]
                }),
                z &&
                    null != X &&
                    (0, l.jsx)(j.Z, {
                        onClose: V,
                        selectedPromotionalDecoPurchaseRecord: X,
                        selectedGiftingPromotionReward: D
                    })
            ]
        })
    );
}
