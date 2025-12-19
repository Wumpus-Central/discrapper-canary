n.d(t, { b: () => T });
var r = n(54381),
    l = n(473749),
    i = n(512722),
    a = n.n(i),
    s = n(704215),
    o = n(481060),
    u = n(223143),
    c = n(605236),
    d = n(347896),
    p = n(717401),
    m = n(885472),
    h = n(317269),
    f = n(585483),
    g = n(669079),
    y = n(296848),
    j = n(987209),
    v = n(563132),
    b = n(107998),
    O = n(614277),
    S = n(400981),
    x = n(435020),
    P = n(698708),
    E = n(981631),
    w = n(921944);
function I(e) {
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
}
function T(e) {
    let t,
        {
            handleClose: i,
            planGroup: T,
            onSubscriptionConfirmation: k,
            renderPurchaseConfirmation: C,
            postSuccessGuild: N,
            followupSKUInfo: M,
            continueSessionToInitialStep: _,
        } = e,
        {
            activeSubscription: A,
            paymentSources: R,
            paymentSourceId: L,
            selectedPlan: Z,
            selectedSkuId: D,
            step: F,
            updatedSubscription: G,
            startingPremiumSubscriptionPlanIdRef: B,
            startingFractionalPremiumEndsAtRef: U,
            isPremiumGroupPurchase: H,
        } = (0, v.JL)(),
        {
            isGift: z,
            giftRecipient: K,
            giftCode: W,
            hasSentMessage: V,
            isSendingMessage: Y,
            sendGiftMessage: q,
            claimableRewards: J,
            selectedGiftingPromotionReward: Q,
        } = (0, j.wD)(),
        { confirmationFooter: X } = (0, b.zb)(),
        $ = (0, p.id)(Z, z, J),
        ee = (0, d.Z)(),
        et = (0, p.a5)(Z),
        en = (0, u.QJ)(null == Q ? void 0 : Q.skuId),
        er = (0, x.$)(R, L),
        el = z && null != Q && et;
    a()(null != Z, "Expected plan to selected"),
        a()(null != D, "Expected selectedSkuId"),
        a()(null != F, "Step should be set");
    let ei = l.useCallback(() => {
        i(), null == k || k();
    }, [i, k]);
    l.useEffect(() => {
        function e() {
            H &&
                null != G &&
                G.hasAnyPremiumGroup &&
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("86948").then(n.bind(n, 153241));
                    return (t) => {
                        var n, l;
                        return (0, r.jsx)(
                            e,
                            ((n = I({}, t)),
                            (l = l = { subscription: G }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            n),
                        );
                    };
                });
        }
        return (
            f.S.subscribe(E.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
            () => {
                f.S.unsubscribe(E.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
            }
        );
    }, [H, G]),
        l.useEffect(() => {
            !z || null == K || null == W || V || Y || (0, g.pO)(K) || q({ onSubscriptionConfirmation: k });
        }, [q, z, K, W, V, Y, k]),
        l.useEffect(() => {
            null != ee &&
                null != ee.reminderNotice &&
                $ &&
                (0, c.wH)(s.z.GIFTING_PROMOTION_REMINDER, (0, m.m)(), { dismissAction: w.L.INDIRECT_ACTION });
        }, [ee, $]);
    let ea = null != _ ? h.PI.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != C) t = C(Z, ei, G);
    else if (z)
        t = (0, r.jsx)(h.TB, {
            planId: Z.id,
            onClose: ei,
        });
    else {
        let e =
            B.current === Z.id
                ? { postSuccessGuild: N }
                : {
                      followupSKUInfo: M,
                      startingPremiumSubscriptionPlanId: B.current,
                      isDowngrade: null != A && (0, y.GY)(A, Z.id, T),
                  };
        t = (0, r.jsx)(
            h.ZP,
            I(
                {
                    planId: Z.id,
                    onClose: ei,
                    paymentSourceType: er,
                    hideClose: null != X,
                    startingFractionalPremiumEndsAt: U.current,
                    customCTAType: ea,
                },
                e,
            ),
        );
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(O.C3, {
                children: [(0, r.jsx)(P.Z, {}), t],
            }),
            null != X && X,
            el &&
                null != en &&
                (0, r.jsx)(S.Z, {
                    reward: Q,
                    purchase: en,
                    onClose: ei,
                }),
        ],
    });
}
