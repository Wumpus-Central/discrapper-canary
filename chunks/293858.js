t.d(r, { b: () => g });
var n = t(255367),
    i = t(73800),
    o = t(512722),
    a = t.n(o),
    l = t(704215),
    s = t(605236),
    d = t(717401),
    C = t(286961),
    c = t(317269),
    u = t(669079),
    p = t(296848),
    _ = t(987209),
    f = t(563132),
    m = t(107998),
    x = t(27034),
    h = t(400981),
    j = t(435020),
    L = t(698708),
    b = t(921944);
function g(e) {
    let r,
        {
            handleClose: t,
            planGroup: o,
            onSubscriptionConfirmation: g,
            renderPurchaseConfirmation: y,
            postSuccessGuild: S,
            followupSKUInfo: E,
            continueSessionToInitialStep: v,
        } = e,
        {
            activeSubscription: I,
            paymentSources: w,
            paymentSourceId: O,
            selectedPlan: P,
            selectedSkuId: M,
            step: T,
            updatedSubscription: Z,
            startingPremiumSubscriptionPlanIdRef: A,
            startingFractionalPremiumEndsAtRef: R,
        } = (0, f.JL)(),
        {
            isGift: N,
            giftRecipient: U,
            giftCode: B,
            hasSentMessage: k,
            isSendingMessage: F,
            sendGiftMessage: G,
            claimableRewards: H,
            selectedGiftingPromotionReward: D,
        } = (0, _.wD)(),
        { confirmationFooter: Y } = (0, m.zb)(),
        W = null != Y,
        z = (0, d.id)(P, N, H),
        V = (0, C.Z)(),
        K = (0, d.a5)(P),
        q = (0, d.tK)(null == D ? void 0 : D.skuId),
        J = (0, j.$)(w, O),
        Q = N && null != D && K;
    a()(null != P, "Expected plan to selected"),
        a()(null != M, "Expected selectedSkuId"),
        a()(null != T, "Step should be set");
    let X = i.useCallback(() => {
        t(), null == g || g();
    }, [t, g]);
    return (
        i.useEffect(() => {
            !N || null == U || null == B || k || F || (0, u.pO)(U) || G({ onSubscriptionConfirmation: g });
        }, [G, N, U, B, k, F, g]),
        i.useEffect(() => {
            null != V &&
                null != V.reminderNotice &&
                z &&
                (0, s.wH)(l.z.GIFTING_PROMOTION_REMINDER, V.dismissibleContentVersion, {
                    dismissAction: b.L.INDIRECT_ACTION,
                });
        }, [V, z]),
        (r =
            null != y
                ? y(P, X, Z)
                : null != v
                  ? (0, n.jsx)(c.VY, {})
                  : N
                    ? (0, n.jsx)(c.TB, {
                          planId: P.id,
                          onClose: X,
                      })
                    : A.current === P.id
                      ? (0, n.jsx)(c.ZP, {
                            planId: P.id,
                            postSuccessGuild: S,
                            onClose: X,
                            paymentSourceType: J,
                            hideClose: W,
                            startingFractionalPremiumEndsAt: R.current,
                        })
                      : (0, n.jsx)(c.ZP, {
                            followupSKUInfo: E,
                            startingPremiumSubscriptionPlanId: A.current,
                            planId: P.id,
                            onClose: X,
                            isDowngrade: null != I && (0, p.GY)(I, P.id, o),
                            paymentSourceType: J,
                            hideClose: W,
                            startingFractionalPremiumEndsAt: R.current,
                        })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(x.C3, {
                    children: [(0, n.jsx)(L.Z, {}), r],
                }),
                null != Y && Y,
                Q &&
                    null != q &&
                    (0, n.jsx)(h.Z, {
                        onClose: X,
                        selectedPromotionalDecoPurchaseRecord: q,
                        selectedGiftingPromotionReward: D,
                    }),
            ],
        })
    );
}
