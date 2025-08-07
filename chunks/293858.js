r.d(t, { b: () => g });
var n = r(255367),
    i = r(73800),
    o = r(512722),
    a = r.n(o),
    l = r(704215),
    s = r(605236),
    d = r(717401),
    C = r(286961),
    c = r(317269),
    u = r(669079),
    p = r(296848),
    _ = r(987209),
    f = r(563132),
    m = r(107998),
    x = r(27034),
    h = r(400981),
    j = r(435020),
    L = r(698708),
    b = r(921944);
function g(e) {
    let t,
        {
            handleClose: r,
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
        r(), null == g || g();
    }, [r, g]);
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
        (t =
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
                    children: [(0, n.jsx)(L.Z, {}), t],
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
