n.d(t, { U: () => X });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(391048),
    o = n(830382),
    u = n(688810),
    c = n(669815),
    d = n(11939),
    m = n(158317),
    p = n(125114),
    h = n(313125),
    C = n(418200),
    f = n(158032),
    E = n(191115),
    S = n(448645),
    g = n(652215),
    I = n(682901),
    y = n(166532),
    A = n(566980),
    P = n(216641),
    v = n(810498),
    x = n(436102),
    _ = n(672619),
    T = n(129230),
    b = n(949192),
    N = n(45938),
    j = n(107351),
    R = n(708791),
    O = n(120700),
    L = n(991690),
    M = n(855986),
    k = n(10716),
    w = n(878014),
    D = n(202475),
    U = n(31823),
    G = n(682689),
    F = n(558620),
    B = n(427675),
    H = n(169797),
    W = n(136857),
    V = n(26279),
    Y = n(379912),
    K = n(792996);
function Z() {
    let e = null,
        t = new Set();
    function n() {
        null != e && ((e.isActive = !1), (e = null));
    }
    async function l(e, n) {
        t.has(e.id) || (t.add(e.id), await n(e));
    }
    return {
        signAndFulfill: async function (t) {
            let i = { isActive: !0 };
            function r() {
                return i.isActive;
            }
            let a = { watching: null },
                s = await t.signOrder((e) => {
                    (n(), (a.watching = t.watch(e, r)));
                });
            if ("failed" === s.type) {
                null != a.watching &&
                    ((e = i),
                    (async function (e, t, i) {
                        let { fulfill: r, clearError: a } = i,
                            s = await e;
                        t.isActive && null != s && s.status === V.Re.SIGNED && (n(), a(), await l(s, r));
                    })(a.watching, i, t));
                return;
            }
            n();
            let o =
                "signed" === s.type
                    ? s.order
                    : await (async function (e, t, n) {
                          let l = await t;
                          if (null != l && l.status === V.Re.SIGNED) return l;
                          let i = (0, p.A9)(e);
                          return (
                              (null != l || i) && n(new W.Ay(K.intl.string(i ? Y.default.dw0taq : K.t.khEaRI))), null
                          );
                      })(s.order, a.watching ?? t.watch(s.order, r), t.onError);
            null != o && (await l(o, t.fulfill));
        },
        stop: n,
    };
}
var q = n(705822);
function z(e, t) {
    let { order: n } = e;
    return null == n || n.id !== t.id || n.revision <= t.revision || n.status === V.Re.SIGNING_IN_PROGRESS ? null : n;
}
let $ = [1e3, 2e3, 4e3, 8e3, 1e4];
function Q(e, t) {
    let { order: n, setOrder: l } = e.getState();
    null != n && n.id === t.id && t.revision > n.revision && l(t);
}
function J(e) {
    let {
        renderFooter: t,
        tenantProvidedReviewButtonProps: n,
        onReviewButtonClick: l,
        onPaymentSourceAdd: r,
        disableSubmit: a,
        isSubmitting: s,
        needsPaymentSource: o,
    } = e;
    return t(
        (function (e) {
            let {
                    onReviewButtonClick: t,
                    needsPaymentSource: n,
                    isSubmitting: l,
                    disableSubmit: r,
                    onPaymentSourceAdd: a,
                    tenantProvidedReviewButtonProps: s,
                } = e,
                { hasPaymentSources: o } = (0, D.j)(),
                { setCheckoutReviewButtonLabel: u } = (0, G.t4)((e) => ({
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                })),
                { application: c } = (0, U.V)(),
                d = (0, M.bG)([k.A], () => k.A.getFetchState()),
                m = (0, w.W)(c, L.U.MAIN) && d === k.$.LOADING,
                p = l ?? !1,
                h = r ?? !1,
                C = (0, G.t4)((e) =>
                    e.getCheckoutReviewButtonProps({
                        tenantProvidedReviewButtonProps: s,
                        isReviewButtonDisabled: h,
                        isReviewButtonLoading: p,
                        needsPaymentSource: n,
                        hasPaymentSources: o,
                        isApplicationDevShelfLoading: m,
                        handlePaymentSourceAdd: a,
                        onReviewButtonClick: t,
                    }),
                );
            return (
                i.useEffect(() => {
                    u(C.text);
                }, [C.text, u]),
                C
            );
        })({
            onReviewButtonClick: l,
            isSubmitting: s,
            disableSubmit: a,
            onPaymentSourceAdd: r,
            tenantProvidedReviewButtonProps: n,
            needsPaymentSource: o,
        }),
    );
}
function X(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            trialId: r,
            planGroup: L = [],
            analyticsLocation: M,
            metadata: k,
            backButtonEligible: w,
            disableSubmit: U,
            onPaymentSourceAdd: W,
            handleStepChange: V,
            postPurchaseStep: Y = y.pn.CONFIRM,
            tenantProvidedReviewButtonProps: K,
        } = e,
        {
            activeSubscription: X,
            selectedSkuId: ee,
            invoicePreview: et,
            renewalInvoicePreview: en,
            giftSubscriptionPlanId: el,
            setHasAcceptedTerms: ei,
            setPurchaseState: er,
            contextMetadata: ea,
            paymentSourceId: es,
            setPurchaseError: eo,
            priceOptions: eu,
            purchaseType: ec,
            quantity: ed,
            setEntitlementsGranted: em,
            setAppliedUserDiscounts: ep,
            setUpdatedSubscription: eh,
            isExpressCheckoutEnabledForFooter: eC,
            setExpressCheckoutStatus: ef,
            order: eE,
            isOrderAwaitingSettlement: eS,
            setIsOrderSigning: eg,
            applyWalletBalance: eI,
            handleBillingErrorForPurchaseTokenAuth: ey,
            openInvoiceId: eA,
        } = (0, G.t4)((e) => ({
            openInvoiceId: e.getSharedCheckoutParams().openInvoiceId,
            selectedSkuId: e.selectedSkuId,
            invoicePreview: e.checkoutInvoicePreview,
            renewalInvoicePreview: e.renewalInvoicePreview,
            giftSubscriptionPlanId: e.getGiftSubscriptionPlanId(),
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            purchaseType: e.purchaseType,
            quantity: e.quantity,
            setEntitlementsGranted: e.setEntitlementsGranted,
            setAppliedUserDiscounts: e.setAppliedUserDiscounts,
            setUpdatedSubscription: e.setUpdatedSubscription,
            activeSubscription: e.activeSubscription,
            isExpressCheckoutEnabledForFooter: e.getExpressCheckoutVisibilityState().isExpressCheckoutEnabledForFooter,
            setExpressCheckoutStatus: e.setExpressCheckoutStatus,
            order: e.order,
            isOrderAwaitingSettlement: e.getIsOrderAwaitingSettlement(),
            setIsOrderSigning: e.setIsOrderSigning,
            applyWalletBalance: e.applyWalletBalance,
            handleBillingErrorForPurchaseTokenAuth: e.handleBillingErrorForPurchaseTokenAuth,
        })),
        eP = (0, G.t4)((e) => e.getTenantParams(O.C.PREMIUM_CHECKOUT)),
        ev = null != eP ? eP.referralCode : void 0,
        ex = ea.startTime,
        e_ = (0, G.Q9)(),
        { paymentSources: eT } = (0, D.j)(),
        eb = (0, F.A)(),
        eN = (0, B.gU)(),
        {
            isGift: ej,
            selectedGiftStyle: eR,
            customGiftMessage: eO,
            emojiConfetti: eL,
            soundEffect: eM,
            giftRecipient: ek,
            selectedGiftingPromotionRewards: ew,
        } = (0, C.Pv)(),
        eD = (0, v.Mq)(eb),
        eU = (0, N.lo)(ek),
        eG = {};
    ((eG.gift_style = eR),
        (eG.reward_sku_ids = eD ? ew : []),
        eU === N.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != ek, "Gift recipient must be set at purchase review step for these gift options."),
            (eG.recipient_id = ek.id),
            (eG.custom_message = eO),
            (eG.emoji_id = eL?.id),
            (eG.emoji_name = eL?.id == null ? eL?.surrogates : void 0),
            (eG.sound_id = eM?.soundId)));
    let eF = eb?.id,
        { analyticsLocations: eB } = (0, u.Ay)(),
        eH = (0, P.W)(eT, es),
        { giftCardBalance: eW, giftCardCurrency: eV } = (0, d.h)(),
        { balance: eY } = (0, _.W0)(),
        [eK, eZ] = i.useState(!1),
        [eq, ez] = i.useState(!1),
        e$ = i.useRef(!0),
        eQ = i.useRef(!1),
        [eJ] = i.useState(Z);
    i.useEffect(
        () => () => {
            ((e$.current = !1), eJ.stop());
        },
        [eJ],
    );
    let { hasEntitlements: eX } = (0, x.X)(eF, ej),
        e0 = null;
    ec === g.VVm.ONE_TIME &&
        (a()(null != ee, "SKU must be selected for one-time purchases"),
        (e0 = eN[ee] ?? null),
        a()(null != e0, "SKU must exist and be fetched."));
    let e2 = i.useCallback(() => {
            (er(A.h.PURCHASING),
                ei(!0),
                eZ(!0),
                (0, s.ET)(),
                eo(null),
                T.default.track(g.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: et?.subtotal,
                    tax: et?.tax,
                    expected_amount: et?.total,
                    expected_currency: et?.currency,
                    duration_ms: Date.now() - ex,
                    gift_card_balance: eW,
                    gift_card_currency: eV,
                    is_split_with_gift_card: et?.isSplitWithGiftCard,
                    virtual_currency_balance: eY,
                }));
        }, [er, ei, eo, n, ex, et, eW, eV, eY]),
        e1 = i.useCallback(
            (e) => {
                (er(A.h.FAIL),
                    eo(e),
                    T.default.track(g.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eH?.id,
                        payment_source_type: eH?.type,
                        duration_ms: Date.now() - ex,
                        gift_card_balance: eW,
                        gift_card_currency: eV,
                        is_split_with_gift_card: et?.isSplitWithGiftCard,
                        virtual_currency_balance: eY,
                    }));
            },
            [er, eo, n, ex, eH, eW, eV, et, eY],
        ),
        e3 = i.useCallback(() => eo(null), [eo]),
        e4 = i.useCallback((e) => Q(e_, e), [e_]),
        { signOrder: e7, reportError: e6 } = (0, h.f)({
            order: eE,
            errorSource: "checkout_sign_order",
            onSignFailure: e4,
            onError: (e) => {
                (e1(e), ey(e));
            },
        }),
        e8 = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), er(A.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (ez(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (er(A.h.COMPLETED), { shouldReturnEarly: !1 }),
            [er],
        ),
        e5 = i.useCallback(() => {
            eq || eZ(!1);
        }, [eq]),
        e9 = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (eh(l),
                    null != t && em(t),
                    null != n && ep(n),
                    V(Y, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [V, Y, eh, em, ep],
        );
    function te(e, t) {
        return (async function (e, t, n, l) {
            let i;
            Q(e, t);
            let r = (async function (e, t, n) {
                    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    for (let i = 0; ; i++) {
                        let r = $[Math.min(i, $.length - 1)];
                        if (
                            (await new Promise((e) =>
                                setTimeout(e, null != l ? Math.max(Math.min(r, l - Date.now()), 0) : r),
                            ),
                            !n() || null != z(e.getState(), t) || (null != l && Date.now() >= l))
                        )
                            return;
                        let a = await (0, m.r$)(t.id);
                        null != a && n() && Q(e, a);
                    }
                })(e, t, l, n),
                a = await (null != (i = z(e.getState(), t))
                    ? Promise.resolve(i)
                    : new Promise((n) => {
                          let l = !1,
                              i = (e) => {
                                  l || ((l = !0), a(), n(e));
                              },
                              a = e.subscribe(() => {
                                  let n = z(e.getState(), t);
                                  null != n && i(n);
                              });
                          !(async function (e, t) {
                              try {
                                  await e;
                              } finally {
                                  t();
                              }
                          })(r, () => i(z(e.getState(), t)));
                      }));
            return null == a && l()
                ? (async function (e, t) {
                      let n = await (0, m.r$)(t.id);
                      return (null != n && Q(e, n), z(e.getState(), t));
                  })(e, t)
                : a;
        })(e_, e, (0, p.FU)(e), () => e$.current && t());
    }
    async function tt(e) {
        try {
            let t = await (0, m.Vw)(e.id);
            if (
                (t.length > 0 &&
                    null != ee &&
                    (0, o.mF)({ skuId: ee, entitlements: t, libraryApplications: [], loadId: ea.loadId }),
                !e$.current)
            )
                return;
            if (0 === t.length) throw new m.j2();
            (er(A.h.COMPLETED), e9(null, t));
        } catch (t) {
            e6(t, { orderId: e.id, loadId: ea.loadId });
        }
    }
    async function tn(e) {
        if (null != eE) {
            if (eQ.current || (0, p.z1)(e_.getState().order)) return;
            eQ.current = !0;
            try {
                if (
                    (await (async function (e) {
                        var t;
                        let n;
                        await ((n = (t = (e) => !e.getIsOrderLocked() || null)(e.getState())),
                        null != n
                            ? Promise.resolve(n)
                            : new Promise((n) => {
                                  let l = e.subscribe(() => {
                                      let i = t(e.getState());
                                      null != i && (l(), n(i));
                                  });
                              }));
                    })(e_),
                    !e$.current)
                )
                    return;
                await (async function () {
                    (e2(), eg(!0));
                    try {
                        await (async function () {
                            let e = await (0, b.ob)(
                                (function () {
                                    let { order: e } = e_.getState(),
                                        t = null != e ? e.billing_facet : null;
                                    return (0, P.W)(eT, null != t ? t.payment_source_id : null);
                                })(),
                            ).catch(() => null);
                            await eJ.signAndFulfill({
                                signOrder: (t) =>
                                    e7({
                                        loadId: ea.loadId,
                                        purchaseToken: (0, j.r)(),
                                        gatewayCheckoutContext: e,
                                        onSigningDeferred: t,
                                    }),
                                watch: te,
                                fulfill: tt,
                                onError: e1,
                                clearError: e3,
                            });
                        })();
                    } finally {
                        (eg(!1), e5());
                    }
                })();
            } finally {
                eQ.current = !1;
            }
            return;
        }
        let t = e ?? eH;
        await (async function (e) {
            let {
                onPurchaseAttempt: t,
                onPurchaseError: n,
                onPurchaseComplete: l,
                onPurchaseFinalize: i,
                hasRedirectURL: r,
                isGift: s,
                analyticsLocation: u,
                analyticsLocations: d,
                subscriptionPlan: m,
                planGroup: p,
                trialId: h,
                priceOptions: C,
                paymentSource: y,
                openInvoiceId: A,
                premiumSubscription: P,
                onNext: v,
                metadata: x,
                sku: _,
                purchaseType: T,
                referralCode: b,
                loadId: N,
                giftInfoOptions: j,
                invoicePreview: R,
                renewalInvoicePreview: O,
                giftSubscriptionPlanId: L,
                quantity: M,
                applyWalletBalance: k,
            } = e;
            try {
                let e, n, i, w;
                if ((t(), r)) return;
                let D = !0 === k ? R?.paymentLegs : null;
                if (T === g.VVm.ONE_TIME)
                    (a()(null != _, "SKU must exist and be fetched."),
                        a()(null != R, "invoicePreview must exist."),
                        (e = await (0, o.XU)(_.applicationId, _.id, {
                            expectedAmount: R.total,
                            expectedCurrency: R.currency,
                            isGift: s,
                            paymentSource: y,
                            loadId: N,
                            giftInfoOptions: j,
                            quantity: M,
                            applyWalletBalance: k,
                            expectedPaymentLegs: D,
                        })));
                else {
                    let t;
                    (a()(null != m, "Missing subscriptionPlan"), a()(null != R, "Missing invoicePreview"));
                    let n = { amount: R.total, currency: R.currency };
                    if (null != L)
                        (a()(null != O, "Missing renewalInvoicePreview"),
                            (t = { amount: O.subtotal, currency: O.currency }));
                    else {
                        let e = (0, S.l6)(C, R.checkoutContext?.available_plans);
                        if (((t = (0, S.$Q)((0, S.y8)(m.id, !1, !1, e))), null != P)) {
                            let e = C.currency ?? R.currency,
                                n = (0, S.Pg)(P, m.id, 1, new Set(p));
                            ((n = (0, S.qn)(n)), (t = (0, S.UC)(n, e.toLowerCase(), C.paymentSourceId)));
                        }
                    }
                    if (null != L)
                        e = await (0, f.B1)({
                            planId: L,
                            currency: C.currency ?? R.currency,
                            paymentSource: y,
                            loadId: N,
                            giftInfoOptions: j,
                            expectedInvoicePrice: n,
                            expectedRenewalPrice: t,
                        });
                    else if (s) {
                        let t = R.total,
                            n = R.currency;
                        e = await (0, o.XU)(I.tv, m.skuId, {
                            expectedAmount: t,
                            expectedCurrency: n,
                            paymentSource: y,
                            subscriptionPlanId: m.id,
                            isGift: !0,
                            loadId: N,
                            giftInfoOptions: j,
                            quantity: M,
                            applyWalletBalance: k,
                            expectedPaymentLegs: D,
                        });
                    } else if (null != y && null != P && P.status === g.Dmq.PAST_DUE && null != A) {
                        let l = C.currency ?? R.currency;
                        e = g.AD1.has(y.type)
                            ? await (0, c.LD)(P, A, y, l, N)
                            : await (0, c.nV)(P, { paymentSource: y, currency: l }, n, t, d, u, N);
                    } else if (null != P) {
                        let l = (0, S.Pg)(P, m.id, 1, new Set(p)),
                            i = { paymentSource: y, currency: C.currency ?? R.currency };
                        (P.status === g.Dmq.PAUSED && (i.status = g.Dmq.ACTIVE),
                            P.isPausedAllowsResumeButNotUpdates || (i.items = l),
                            (e = await (0, c.nV)(P, i, n, t, d, u, N)));
                    } else
                        e = await (0, f.B1)({
                            planId: m.id,
                            currency: C.currency ?? R.currency,
                            paymentSource: y,
                            trialId: h,
                            metadata: x,
                            referralCode: b,
                            loadId: N,
                            expectedInvoicePrice: n,
                            expectedRenewalPrice: t,
                        });
                }
                let { shouldReturnEarly: U } = l(e);
                if (U) return;
                ("subscription" in e
                    ? (n = null != e.subscription ? E.A.createFromServer(e.subscription) : null)
                    : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0),
                    "appliedUserDiscounts" in e &&
                        (w =
                            null != e.appliedUserDiscounts && e.appliedUserDiscounts.length > 0
                                ? e.appliedUserDiscounts
                                : void 0),
                    v(n, i, w));
            } catch (e) {
                n(e);
            } finally {
                i();
            }
        })({
            onPurchaseAttempt: e2,
            onPurchaseError: e1,
            onPurchaseComplete: e8,
            onPurchaseFinalize: e5,
            hasRedirectURL: eq,
            isGift: ej,
            analyticsLocation: M,
            analyticsLocations: eB,
            subscriptionPlan: eb,
            planGroup: L,
            trialId: r,
            priceOptions: eu,
            paymentSource: t,
            openInvoiceId: eA,
            premiumSubscription: X ?? null,
            onNext: e9,
            metadata: k,
            sku: e0,
            purchaseType: ec,
            referralCode: ev,
            loadId: ea.loadId,
            giftInfoOptions: eG,
            invoicePreview: et,
            renewalInvoicePreview: en,
            giftSubscriptionPlanId: el,
            quantity: ed,
            applyWalletBalance: eI ?? et?.applyWalletBalance,
        });
    }
    let tl = null != eA || (ec === g.VVm.ONE_TIME && !ej),
        ti = w && !tl;
    i.useLayoutEffect(() => {
        eC && null != r && ef(q.i.UNAVAILABLE);
    }, [eC, r, ef]);
    let tr = !0 === U || (0, p.z1)(eE),
        ta =
            eC && null == r
                ? (0, l.jsx)(R.E1, {
                      type: "purchase_if_possible",
                      disablePurchase: tr,
                      makePurchase: tn,
                      isSubmitting: eK,
                      setIsSubmitting: eZ,
                  })
                : null;
    return eS
        ? null
        : (0, l.jsx)(J, {
              renderFooter: function (e) {
                  return (0, l.jsx)(H.lo, {
                      onBackClick: ti ? t : void 0,
                      primaryButtonProps: e,
                      stripeExpressCheckoutComponent: ta,
                  });
              },
              tenantProvidedReviewButtonProps: K,
              disableSubmit: tr,
              isSubmitting: eK,
              onReviewButtonClick: function () {
                  return tn();
              },
              needsPaymentSource: null == eH && !eX,
              onPaymentSourceAdd: W,
          });
}
