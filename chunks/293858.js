n.d(t, { b: () => L });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(704215),
    o = n(605236),
    d = n(347896),
    c = n(717401),
    C = n(317269),
    u = n(669079),
    p = n(296848),
    h = n(987209),
    m = n(563132),
    _ = n(107998),
    f = n(614277),
    x = n(400981),
    j = n(435020),
    g = n(698708),
    b = n(921944);
function L(e) {
    let t,
        {
            handleClose: n,
            planGroup: l,
            onSubscriptionConfirmation: L,
            renderPurchaseConfirmation: v,
            postSuccessGuild: y,
            followupSKUInfo: S,
            continueSessionToInitialStep: I,
        } = e,
        {
            activeSubscription: w,
            paymentSources: O,
            paymentSourceId: P,
            selectedPlan: E,
            selectedSkuId: k,
            step: M,
            updatedSubscription: T,
            startingPremiumSubscriptionPlanIdRef: A,
            startingFractionalPremiumEndsAtRef: N,
        } = (0, m.JL)(),
        {
            isGift: Z,
            giftRecipient: B,
            giftCode: R,
            hasSentMessage: H,
            isSendingMessage: U,
            sendGiftMessage: F,
            claimableRewards: G,
            selectedGiftingPromotionReward: D,
        } = (0, h.wD)(),
        { confirmationFooter: W } = (0, _.zb)(),
        z = (0, c.id)(E, Z, G),
        K = (0, d.Z)(),
        Y = (0, c.a5)(E),
        V = (0, c.tK)(null == D ? void 0 : D.skuId),
        q = (0, j.$)(O, P),
        J = Z && null != D && Y;
    a()(null != E, "Expected plan to selected"),
        a()(null != k, "Expected selectedSkuId"),
        a()(null != M, "Step should be set");
    let Q = i.useCallback(() => {
        n(), null == L || L();
    }, [n, L]);
    i.useEffect(() => {
        !Z || null == B || null == R || H || U || (0, u.pO)(B) || F({ onSubscriptionConfirmation: L });
    }, [F, Z, B, R, H, U, L]),
        i.useEffect(() => {
            null != K &&
                null != K.reminderNotice &&
                z &&
                (0, o.wH)(s.z.GIFTING_PROMOTION_REMINDER, K.dismissibleContentVersion, {
                    dismissAction: b.L.INDIRECT_ACTION,
                });
        }, [K, z]);
    let X = null != I ? C.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != v) t = v(E, Q, T);
    else if (Z)
        t = (0, r.jsx)(C.TB, {
            planId: E.id,
            onClose: Q,
        });
    else {
        let e =
            A.current === E.id
                ? { postSuccessGuild: y }
                : {
                      followupSKUInfo: S,
                      startingPremiumSubscriptionPlanId: A.current,
                      isDowngrade: null != w && (0, p.GY)(w, E.id, l),
                  };
        t = (0, r.jsx)(
            C.ZP,
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
                    planId: E.id,
                    onClose: Q,
                    paymentSourceType: q,
                    hideClose: null != W,
                    startingFractionalPremiumEndsAt: N.current,
                    customCTAType: X,
                },
                e,
            ),
        );
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(f.C3, {
                children: [(0, r.jsx)(g.Z, {}), t],
            }),
            null != W && W,
            J &&
                null != V &&
                (0, r.jsx)(x.Z, {
                    onClose: Q,
                    selectedPromotionalDecoPurchaseRecord: V,
                    selectedGiftingPromotionReward: D,
                }),
        ],
    });
}
