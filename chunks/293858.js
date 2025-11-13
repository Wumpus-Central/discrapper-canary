n.d(t, { b: () => v });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(704215),
    o = n(605236),
    d = n(347896),
    C = n(717401),
    c = n(885472),
    u = n(317269),
    p = n(669079),
    h = n(296848),
    m = n(987209),
    f = n(563132),
    x = n(107998),
    _ = n(614277),
    j = n(400981),
    g = n(435020),
    b = n(698708),
    y = n(921944);
function v(e) {
    let t,
        {
            handleClose: n,
            planGroup: l,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: L,
            postSuccessGuild: S,
            followupSKUInfo: O,
            continueSessionToInitialStep: P,
        } = e,
        {
            activeSubscription: E,
            paymentSources: w,
            paymentSourceId: I,
            selectedPlan: M,
            selectedSkuId: k,
            step: A,
            updatedSubscription: T,
            startingPremiumSubscriptionPlanIdRef: Z,
            startingFractionalPremiumEndsAtRef: N,
        } = (0, f.JL)(),
        {
            isGift: R,
            giftRecipient: B,
            giftCode: U,
            hasSentMessage: H,
            isSendingMessage: F,
            sendGiftMessage: G,
            claimableRewards: D,
            selectedGiftingPromotionReward: K,
        } = (0, m.wD)(),
        { confirmationFooter: z } = (0, x.zb)(),
        V = (0, C.id)(M, R, D),
        W = (0, d.Z)(),
        Y = (0, C.a5)(M),
        q = (0, C.tK)(null == K ? void 0 : K.skuId),
        J = (0, g.$)(w, I),
        Q = R && null != K && Y;
    a()(null != M, "Expected plan to selected"),
        a()(null != k, "Expected selectedSkuId"),
        a()(null != A, "Step should be set");
    let X = i.useCallback(() => {
        n(), null == v || v();
    }, [n, v]);
    i.useEffect(() => {
        !R || null == B || null == U || H || F || (0, p.pO)(B) || G({ onSubscriptionConfirmation: v });
    }, [G, R, B, U, H, F, v]),
        i.useEffect(() => {
            null != W &&
                null != W.reminderNotice &&
                V &&
                (0, o.wH)(s.z.GIFTING_PROMOTION_REMINDER, (0, c.m)(), { dismissAction: y.L.INDIRECT_ACTION });
        }, [W, V]);
    let $ = null != P ? u.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != L) t = L(M, X, T);
    else if (R)
        t = (0, r.jsx)(u.TB, {
            planId: M.id,
            onClose: X,
        });
    else {
        let e =
            Z.current === M.id
                ? { postSuccessGuild: S }
                : {
                      followupSKUInfo: O,
                      startingPremiumSubscriptionPlanId: Z.current,
                      isDowngrade: null != E && (0, h.GY)(E, M.id, l),
                  };
        t = (0, r.jsx)(
            u.ZP,
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
                    planId: M.id,
                    onClose: X,
                    paymentSourceType: J,
                    hideClose: null != z,
                    startingFractionalPremiumEndsAt: N.current,
                    customCTAType: $,
                },
                e,
            ),
        );
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(_.C3, {
                children: [(0, r.jsx)(b.Z, {}), t],
            }),
            null != z && z,
            Q &&
                null != q &&
                (0, r.jsx)(j.Z, {
                    onClose: X,
                    selectedPromotionalDecoPurchaseRecord: q,
                    selectedGiftingPromotionReward: K,
                }),
        ],
    });
}
