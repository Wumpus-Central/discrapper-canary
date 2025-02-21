n.d(t, { b: () => E });
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
    _ = n(107998),
    j = n(614277),
    m = n(400981),
    L = n(698708),
    g = n(921944);
function E(e) {
    var t, n;
    let s,
        { handleClose: E, planGroup: S, onSubscriptionConfirmation: N, renderPurchaseConfirmation: y, postSuccessGuild: I, followupSKUInfo: v, continueSessionToInitialStep: O } = e,
        { activeSubscription: P, paymentSources: b, paymentSourceId: T, selectedPlan: M, selectedSkuId: Z, step: w, updatedSubscription: k, startingPremiumSubscriptionPlanIdRef: U } = (0, h.JL)(),
        { isGift: A, giftRecipient: R, giftCode: H, hasSentMessage: W, isSendingMessage: B, sendGiftMessage: F, claimableRewards: G, selectedGiftingPromotionReward: D } = (0, f.wD)(),
        { confirmationFooter: Y } = (0, _.zb)(),
        K = null != Y,
        X = (0, d.id)(M, A, G),
        z = (0, c.Z)(),
        V = (0, d.a5)(M),
        Q = (0, d.tK)(null == D ? void 0 : D.skuId),
        q = A && null != D && V;
    r()(null != M, 'Expected plan to selected'), r()(null != Z, 'Expected selectedSkuId'), r()(null != w, 'Step should be set');
    let J = i.useCallback(() => {
        E(), null == N || N();
    }, [E, N]);
    return (
        i.useEffect(() => {
            !(!A || null == R || null == H || W || B || (0, p.pO)(R)) && C.F.getCurrentConfig({ location: '36b986_1' }).enabled && F({ onSubscriptionConfirmation: N });
        }, [F, A, R, H, W, B, N]),
        i.useEffect(() => {
            null != z && null != z.reminderNotice && X && (0, o.wH)(a.z.GIFTING_PROMOTION_REMINDER, z.dismissibleContentVersion, { dismissAction: g.L.INDIRECT_ACTION });
        }, [z, X]),
        (s =
            null != y
                ? y(M, J, k)
                : null != O
                  ? (0, l.jsx)(u.VY, {})
                  : A
                    ? (0, l.jsx)(u.TB, {
                          planId: M.id,
                          onClose: J
                      })
                    : U.current === M.id
                      ? (0, l.jsx)(u.ZP, {
                            planId: M.id,
                            postSuccessGuild: I,
                            onClose: J,
                            paymentSourceType: null === (t = b[null != T ? T : '']) || void 0 === t ? void 0 : t.type,
                            hideClose: K
                        })
                      : (0, l.jsx)(u.ZP, {
                            followupSKUInfo: v,
                            startingPremiumSubscriptionPlanId: U.current,
                            planId: M.id,
                            onClose: J,
                            isDowngrade: null != P && (0, x.GY)(P, M.id, S),
                            paymentSourceType: null === (n = b[null != T ? T : '']) || void 0 === n ? void 0 : n.type,
                            hideClose: K
                        })),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(j.C3, {
                    children: [(0, l.jsx)(L.Z, {}), s]
                }),
                null != Y && Y,
                q &&
                    null != Q &&
                    (0, l.jsx)(m.Z, {
                        onClose: J,
                        selectedPromotionalDecoPurchaseRecord: Q,
                        selectedGiftingPromotionReward: D
                    })
            ]
        })
    );
}
