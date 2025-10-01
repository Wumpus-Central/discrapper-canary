n.d(t, { b: () => y });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    l = n(704215),
    s = n(605236),
    d = n(347896),
    C = n(717401),
    c = n(317269),
    u = n(669079),
    p = n(296848),
    _ = n(987209),
    f = n(563132),
    h = n(107998),
    m = n(614277),
    x = n(400981),
    g = n(435020),
    j = n(698708),
    b = n(921944);
function y(e) {
    let t,
        {
            handleClose: n,
            planGroup: a,
            onSubscriptionConfirmation: y,
            renderPurchaseConfirmation: L,
            postSuccessGuild: v,
            followupSKUInfo: S,
            continueSessionToInitialStep: O,
        } = e,
        {
            activeSubscription: E,
            paymentSources: P,
            paymentSourceId: I,
            selectedPlan: w,
            selectedSkuId: T,
            step: k,
            updatedSubscription: A,
            startingPremiumSubscriptionPlanIdRef: M,
            startingFractionalPremiumEndsAtRef: Z,
        } = (0, f.JL)(),
        {
            isGift: N,
            giftRecipient: R,
            giftCode: F,
            hasSentMessage: B,
            isSendingMessage: U,
            sendGiftMessage: H,
            claimableRewards: G,
            selectedGiftingPromotionReward: D,
        } = (0, _.wD)(),
        { confirmationFooter: z } = (0, h.zb)(),
        K = (0, C.id)(w, N, G),
        Y = (0, d.Z)(),
        W = (0, C.a5)(w),
        V = (0, C.tK)(null == D ? void 0 : D.skuId),
        q = (0, g.$)(P, I),
        J = N && null != D && W;
    o()(null != w, "Expected plan to selected"),
        o()(null != T, "Expected selectedSkuId"),
        o()(null != k, "Step should be set");
    let X = i.useCallback(() => {
        n(), null == y || y();
    }, [n, y]);
    i.useEffect(() => {
        !N || null == R || null == F || B || U || (0, u.pO)(R) || H({ onSubscriptionConfirmation: y });
    }, [H, N, R, F, B, U, y]),
        i.useEffect(() => {
            null != Y &&
                null != Y.reminderNotice &&
                K &&
                (0, s.wH)(l.z.GIFTING_PROMOTION_REMINDER, Y.dismissibleContentVersion, {
                    dismissAction: b.L.INDIRECT_ACTION,
                });
        }, [Y, K]);
    let Q = null != O ? c.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != L) t = L(w, X, A);
    else if (N)
        t = (0, r.jsx)(c.TB, {
            planId: w.id,
            onClose: X,
        });
    else {
        let e =
            M.current === w.id
                ? { postSuccessGuild: v }
                : {
                      followupSKUInfo: S,
                      startingPremiumSubscriptionPlanId: M.current,
                      isDowngrade: null != E && (0, p.GY)(E, w.id, a),
                  };
        t = (0, r.jsx)(
            c.ZP,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    planId: w.id,
                    onClose: X,
                    paymentSourceType: q,
                    hideClose: null != z,
                    startingFractionalPremiumEndsAt: Z.current,
                    customCTAType: Q,
                },
                e,
            ),
        );
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(m.C3, {
                children: [(0, r.jsx)(j.Z, {}), t],
            }),
            null != z && z,
            J &&
                null != V &&
                (0, r.jsx)(x.Z, {
                    onClose: X,
                    selectedPromotionalDecoPurchaseRecord: V,
                    selectedGiftingPromotionReward: D,
                }),
        ],
    });
}
