n.d(r, { b: () => b });
var t = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    l = n(704215),
    s = n(605236),
    C = n(717401),
    d = n(286961),
    c = n(317269),
    p = n(669079),
    u = n(296848),
    _ = n(987209),
    x = n(563132),
    f = n(107998),
    m = n(27034),
    h = n(400981),
    j = n(435020),
    L = n(698708),
    g = n(921944);
function b(e) {
    let r,
        {
            handleClose: n,
            planGroup: o,
            onSubscriptionConfirmation: b,
            renderPurchaseConfirmation: y,
            postSuccessGuild: S,
            followupSKUInfo: v,
            continueSessionToInitialStep: E,
        } = e,
        {
            activeSubscription: I,
            paymentSources: P,
            paymentSourceId: T,
            selectedPlan: O,
            selectedSkuId: w,
            step: Z,
            updatedSubscription: M,
            startingPremiumSubscriptionPlanIdRef: A,
            startingFractionalPremiumEndsAtRef: R,
        } = (0, x.JL)(),
        {
            isGift: B,
            giftRecipient: N,
            giftCode: k,
            hasSentMessage: F,
            isSendingMessage: U,
            sendGiftMessage: H,
            claimableRewards: G,
            selectedGiftingPromotionReward: D,
        } = (0, _.wD)(),
        { confirmationFooter: z } = (0, f.zb)(),
        Y = null != z,
        W = (0, C.id)(O, B, G),
        K = (0, d.Z)(),
        V = (0, C.a5)(O),
        q = (0, C.tK)(null == D ? void 0 : D.skuId),
        J = (0, j.$)(P, T),
        Q = B && null != D && V;
    a()(null != O, "Expected plan to selected"),
        a()(null != w, "Expected selectedSkuId"),
        a()(null != Z, "Step should be set");
    let X = i.useCallback(() => {
        n(), null == b || b();
    }, [n, b]);
    return (
        i.useEffect(() => {
            !B || null == N || null == k || F || U || (0, p.pO)(N) || H({ onSubscriptionConfirmation: b });
        }, [H, B, N, k, F, U, b]),
        i.useEffect(() => {
            null != K &&
                null != K.reminderNotice &&
                W &&
                (0, s.wH)(l.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, {
                    dismissAction: g.L.INDIRECT_ACTION,
                });
        }, [K, W]),
        (r =
            null != y
                ? y(O, X, M)
                : null != E
                  ? (0, t.jsx)(c.VY, {})
                  : B
                    ? (0, t.jsx)(c.TB, {
                          planId: O.id,
                          onClose: X,
                      })
                    : A.current === O.id
                      ? (0, t.jsx)(c.ZP, {
                            planId: O.id,
                            postSuccessGuild: S,
                            onClose: X,
                            paymentSourceType: J,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: R.current,
                        })
                      : (0, t.jsx)(c.ZP, {
                            followupSKUInfo: v,
                            startingPremiumSubscriptionPlanId: A.current,
                            planId: O.id,
                            onClose: X,
                            isDowngrade: null != I && (0, u.GY)(I, O.id, o),
                            paymentSourceType: J,
                            hideClose: Y,
                            startingFractionalPremiumEndsAt: R.current,
                        })),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)(m.C3, {
                    children: [(0, t.jsx)(L.Z, {}), r],
                }),
                null != z && z,
                Q &&
                    null != q &&
                    (0, t.jsx)(h.Z, {
                        onClose: X,
                        selectedPromotionalDecoPurchaseRecord: q,
                        selectedGiftingPromotionReward: D,
                    }),
            ],
        })
    );
}
