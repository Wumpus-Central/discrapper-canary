n.d(t, { b: () => v });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    l = n(704215),
    s = n(605236),
    C = n(347896),
    d = n(717401),
    c = n(317269),
    u = n(585483),
    p = n(669079),
    _ = n(296848),
    f = n(987209),
    h = n(563132),
    m = n(107998),
    x = n(27034),
    j = n(400981),
    b = n(435020),
    g = n(698708),
    L = n(981631),
    y = n(921944);
function v(e) {
    let t,
        {
            handleClose: n,
            planGroup: a,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: S,
            postSuccessGuild: O,
            followupSKUInfo: E,
            continueSessionToInitialStep: P,
        } = e,
        {
            activeSubscription: I,
            paymentSources: w,
            paymentSourceId: k,
            selectedPlan: M,
            selectedSkuId: T,
            step: A,
            updatedSubscription: Z,
            startingPremiumSubscriptionPlanIdRef: N,
            startingFractionalPremiumEndsAtRef: R,
        } = (0, h.JL)(),
        {
            isGift: F,
            giftRecipient: B,
            giftCode: U,
            hasSentMessage: H,
            isSendingMessage: G,
            sendGiftMessage: D,
            claimableRewards: Y,
            selectedGiftingPromotionReward: z,
        } = (0, f.wD)(),
        { confirmationFooter: K, maybeOpenMarketingMomentRewardsModal: W } = (0, m.zb)(),
        V = null != K,
        q = (0, d.id)(M, F, Y),
        J = (0, C.Z)(),
        X = (0, d.a5)(M),
        Q = (0, d.tK)(null == z ? void 0 : z.skuId),
        $ = (0, b.$)(w, k),
        ee = F && null != z && X;
    o()(null != M, "Expected plan to selected"),
        o()(null != T, "Expected selectedSkuId"),
        o()(null != A, "Step should be set");
    let et = i.useCallback(() => {
        n(), null == v || v();
    }, [n, v]);
    return (
        i.useEffect(() => {
            function e() {
                null == W || W();
            }
            return (
                u.S.subscribe(L.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e),
                () => {
                    u.S.unsubscribe(L.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e);
                }
            );
        }, [W]),
        i.useEffect(() => {
            !F || null == B || null == U || H || G || (0, p.pO)(B) || D({ onSubscriptionConfirmation: v });
        }, [D, F, B, U, H, G, v]),
        i.useEffect(() => {
            null != J &&
                null != J.reminderNotice &&
                q &&
                (0, s.wH)(l.z.GIFTING_PROMOTION_REMINDER, J.dismissibleContentVersion, {
                    dismissAction: y.L.INDIRECT_ACTION,
                });
        }, [J, q]),
        (t =
            null != S
                ? S(M, et, Z)
                : null != P
                  ? (0, r.jsx)(c.VY, {})
                  : F
                    ? (0, r.jsx)(c.TB, {
                          planId: M.id,
                          onClose: et,
                      })
                    : N.current === M.id
                      ? (0, r.jsx)(c.ZP, {
                            planId: M.id,
                            postSuccessGuild: O,
                            onClose: et,
                            paymentSourceType: $,
                            hideClose: V,
                            startingFractionalPremiumEndsAt: R.current,
                        })
                      : (0, r.jsx)(c.ZP, {
                            followupSKUInfo: E,
                            startingPremiumSubscriptionPlanId: N.current,
                            planId: M.id,
                            onClose: et,
                            isDowngrade: null != I && (0, _.GY)(I, M.id, a),
                            paymentSourceType: $,
                            hideClose: V,
                            startingFractionalPremiumEndsAt: R.current,
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(x.C3, {
                    children: [(0, r.jsx)(g.Z, {}), t],
                }),
                null != K && K,
                ee &&
                    null != Q &&
                    (0, r.jsx)(j.Z, {
                        onClose: et,
                        selectedPromotionalDecoPurchaseRecord: Q,
                        selectedGiftingPromotionReward: z,
                    }),
            ],
        })
    );
}
