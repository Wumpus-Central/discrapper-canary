n.d(t, { b: () => v });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(704215),
    o = n(605236),
    C = n(538981),
    d = n(347896),
    c = n(717401),
    u = n(317269),
    p = n(585483),
    x = n(669079),
    _ = n(296848),
    h = n(987209),
    f = n(563132),
    m = n(107998),
    j = n(27034),
    L = n(400981),
    b = n(435020),
    g = n(698708),
    S = n(981631),
    y = n(921944);
function v(e) {
    let t,
        {
            handleClose: n,
            planGroup: l,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: E,
            postSuccessGuild: O,
            followupSKUInfo: P,
            continueSessionToInitialStep: M,
        } = e,
        {
            activeSubscription: w,
            paymentSources: k,
            paymentSourceId: I,
            selectedPlan: A,
            selectedSkuId: T,
            step: Z,
            updatedSubscription: N,
            startingPremiumSubscriptionPlanIdRef: B,
            startingFractionalPremiumEndsAtRef: R,
        } = (0, f.JL)(),
        {
            isGift: U,
            giftRecipient: H,
            giftCode: F,
            hasSentMessage: G,
            isSendingMessage: D,
            sendGiftMessage: K,
            claimableRewards: z,
            selectedGiftingPromotionReward: W,
        } = (0, h.wD)(),
        { confirmationFooter: Y } = (0, m.zb)(),
        V = null != Y,
        q = (0, c.id)(A, U, z),
        J = (0, d.Z)(),
        Q = (0, c.a5)(A),
        X = (0, c.tK)(null == W ? void 0 : W.skuId),
        $ = (0, C.r)(),
        ee = (0, b.$)(k, I),
        et = U && null != W && Q;
    a()(null != A, "Expected plan to selected"),
        a()(null != T, "Expected selectedSkuId"),
        a()(null != Z, "Step should be set");
    let en = i.useCallback(() => {
        n(), null == v || v();
    }, [n, v]);
    return (
        i.useEffect(() => {
            function e() {
                null == $ || $();
            }
            return (
                p.S.subscribe(S.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e),
                () => {
                    p.S.unsubscribe(S.CkL.PREMIUM_PAYMENT_MODAL_CLOSED, e);
                }
            );
        }, [$]),
        i.useEffect(() => {
            !U || null == H || null == F || G || D || (0, x.pO)(H) || K({ onSubscriptionConfirmation: v });
        }, [K, U, H, F, G, D, v]),
        i.useEffect(() => {
            null != J &&
                null != J.reminderNotice &&
                q &&
                (0, o.wH)(s.z.GIFTING_PROMOTION_REMINDER, J.dismissibleContentVersion, {
                    dismissAction: y.L.INDIRECT_ACTION,
                });
        }, [J, q]),
        (t =
            null != E
                ? E(A, en, N)
                : null != M
                  ? (0, r.jsx)(u.VY, {})
                  : U
                    ? (0, r.jsx)(u.TB, {
                          planId: A.id,
                          onClose: en,
                      })
                    : B.current === A.id
                      ? (0, r.jsx)(u.ZP, {
                            planId: A.id,
                            postSuccessGuild: O,
                            onClose: en,
                            paymentSourceType: ee,
                            hideClose: V,
                            startingFractionalPremiumEndsAt: R.current,
                        })
                      : (0, r.jsx)(u.ZP, {
                            followupSKUInfo: P,
                            startingPremiumSubscriptionPlanId: B.current,
                            planId: A.id,
                            onClose: en,
                            isDowngrade: null != w && (0, _.GY)(w, A.id, l),
                            paymentSourceType: ee,
                            hideClose: V,
                            startingFractionalPremiumEndsAt: R.current,
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(j.C3, {
                    children: [(0, r.jsx)(g.Z, {}), t],
                }),
                null != Y && Y,
                et &&
                    null != X &&
                    (0, r.jsx)(L.Z, {
                        onClose: en,
                        selectedPromotionalDecoPurchaseRecord: X,
                        selectedGiftingPromotionReward: W,
                    }),
            ],
        })
    );
}
