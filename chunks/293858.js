n.d(t, { b: () => w });
var l = n(54381),
    r = n(473749),
    i = n(512722),
    a = n.n(i),
    s = n(704215),
    o = n(481060),
    u = n(605236),
    c = n(347896),
    d = n(717401),
    m = n(885472),
    p = n(317269),
    h = n(585483),
    f = n(669079),
    g = n(296848),
    v = n(987209),
    j = n(563132),
    y = n(107998),
    b = n(614277),
    S = n(400981),
    x = n(435020),
    P = n(698708),
    O = n(981631),
    E = n(921944);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function w(e) {
    let t,
        {
            handleClose: i,
            planGroup: w,
            onSubscriptionConfirmation: T,
            renderPurchaseConfirmation: k,
            postSuccessGuild: C,
            followupSKUInfo: N,
            continueSessionToInitialStep: M,
        } = e,
        {
            activeSubscription: R,
            paymentSources: _,
            paymentSourceId: A,
            selectedPlan: L,
            selectedSkuId: Z,
            step: D,
            updatedSubscription: F,
            startingPremiumSubscriptionPlanIdRef: B,
            startingFractionalPremiumEndsAtRef: G,
            isPremiumGroupPurchase: H,
        } = (0, j.JL)(),
        {
            isGift: U,
            giftRecipient: z,
            giftCode: K,
            hasSentMessage: W,
            isSendingMessage: V,
            sendGiftMessage: Y,
            claimableRewards: q,
            selectedGiftingPromotionReward: J,
        } = (0, v.wD)(),
        { confirmationFooter: Q } = (0, y.zb)(),
        X = (0, d.id)(L, U, q),
        $ = (0, c.Z)(),
        ee = (0, d.a5)(L),
        et = (0, d.tK)(null == J ? void 0 : J.skuId),
        en = (0, x.$)(_, A),
        el = U && null != J && ee;
    a()(null != L, "Expected plan to selected"),
        a()(null != Z, "Expected selectedSkuId"),
        a()(null != D, "Step should be set");
    let er = r.useCallback(() => {
        i(), null == T || T();
    }, [i, T]);
    r.useEffect(() => {
        function e() {
            H &&
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("86948").then(n.bind(n, 153241));
                    return (t) => (0, l.jsx)(e, I({}, t));
                });
        }
        return (
            h.S.subscribe(O.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                h.S.unsubscribe(O.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [H]),
        r.useEffect(() => {
            !U || null == z || null == K || W || V || (0, f.pO)(z) || Y({ onSubscriptionConfirmation: T });
        }, [Y, U, z, K, W, V, T]),
        r.useEffect(() => {
            null != $ &&
                null != $.reminderNotice &&
                X &&
                (0, u.wH)(s.z.GIFTING_PROMOTION_REMINDER, (0, m.m)(), { dismissAction: E.L.INDIRECT_ACTION });
        }, [$, X]);
    let ei = null != M ? p.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != k) t = k(L, er, F);
    else if (U)
        t = (0, l.jsx)(p.TB, {
            planId: L.id,
            onClose: er,
        });
    else {
        let e =
            B.current === L.id
                ? { postSuccessGuild: C }
                : {
                      followupSKUInfo: N,
                      startingPremiumSubscriptionPlanId: B.current,
                      isDowngrade: null != R && (0, g.GY)(R, L.id, w),
                  };
        t = (0, l.jsx)(
            p.ZP,
            I(
                {
                    planId: L.id,
                    onClose: er,
                    paymentSourceType: en,
                    hideClose: null != Q,
                    startingFractionalPremiumEndsAt: G.current,
                    customCTAType: ei,
                },
                e,
            ),
        );
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(b.C3, {
                children: [(0, l.jsx)(P.Z, {}), t],
            }),
            null != Q && Q,
            el &&
                null != et &&
                (0, l.jsx)(S.Z, {
                    onClose: er,
                    selectedPromotionalDecoPurchaseRecord: et,
                    selectedGiftingPromotionReward: J,
                }),
        ],
    });
}
