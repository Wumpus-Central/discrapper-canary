n.d(t, { U: () => $ });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(391048),
    o = n(136857),
    u = n(688810),
    c = n(781300),
    d = n(11939),
    m = n(158317),
    p = n(184684),
    h = n(418200),
    C = n(158032),
    f = n(830382),
    E = n(191115),
    S = n(722178),
    g = n(652215),
    I = n(682901),
    y = n(166532),
    A = n(566980),
    P = n(216641),
    v = n(810498),
    x = n(436102),
    _ = n(672619),
    T = n(129230),
    b = n(739508),
    N = n(45938),
    j = n(107351),
    R = n(708791),
    O = n(991690),
    M = n(855986),
    L = n(10716),
    k = n(878014),
    w = n(202475),
    D = n(31823),
    U = n(516106),
    G = n(558620),
    F = n(427675),
    B = n(169797),
    H = n(705822);
function W(e, t) {
    let n = t(e.getState());
    return null != n
        ? Promise.resolve(n)
        : new Promise((n) => {
              let l = e.subscribe(() => {
                  let i = t(e.getState());
                  null != i && (l(), n(i));
              });
          });
}
var V = n(26279);
function Y(e, t) {
    let { order: n } = e;
    return null == n || n.id !== t.id || n.revision <= t.revision || n.status === V.Re.SIGNING_IN_PROGRESS ? null : n;
}
let K = [1e3, 2e3, 4e3, 8e3, 1e4];
function Z(e, t) {
    let { order: n, setOrder: l } = e.getState();
    null != n && n.id === t.id && t.revision > n.revision && l(t);
}
var q = n(792996);
function z(e) {
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
                { hasPaymentSources: o } = (0, w.j)(),
                { setCheckoutReviewButtonLabel: u } = (0, U.t4)((e) => ({
                    setCheckoutReviewButtonLabel: e.setCheckoutReviewButtonLabel,
                })),
                { application: c } = (0, D.V)(),
                d = (0, M.bG)([L.A], () => L.A.getFetchState()),
                m = (0, k.W)(c, O.U.MAIN) && d === L.$.LOADING,
                p = l ?? !1,
                h = r ?? !1,
                C = (0, U.t4)((e) =>
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
function $(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            trialId: r,
            planGroup: O = [],
            analyticsLocation: M,
            openInvoiceId: L,
            metadata: k,
            backButtonEligible: D,
            disableSubmit: $,
            onPaymentSourceAdd: Q,
            handleStepChange: J,
            postPurchaseStep: X = y.pn.CONFIRM,
            tenantProvidedReviewButtonProps: ee,
        } = e,
        {
            activeSubscription: et,
            selectedSkuId: en,
            invoicePreview: el,
            renewalInvoicePreview: ei,
            isRecurringGiftCheckout: er,
            giftSubscriptionPlanId: ea,
            setHasAcceptedTerms: es,
            setPurchaseState: eo,
            contextMetadata: eu,
            paymentSourceId: ec,
            setPurchaseError: ed,
            priceOptions: em,
            purchaseType: ep,
            referralCode: eh,
            quantity: eC,
            setEntitlementsGranted: ef,
            setAppliedUserDiscounts: eE,
            setUpdatedSubscription: eS,
            isExpressCheckoutEnabledForFooter: eg,
            setExpressCheckoutStatus: eI,
            order: ey,
            isOrderAwaitingSettlement: eA,
            setIsOrderSigning: eP,
            applyWalletBalance: ev,
            handleBillingErrorForPurchaseTokenAuth: ex,
        } = (0, U.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            invoicePreview: e.checkoutInvoicePreview,
            renewalInvoicePreview: e.renewalInvoicePreview,
            isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
            giftSubscriptionPlanId: e.getGiftSubscriptionPlanId(),
            setHasAcceptedTerms: e.setHasAcceptedTerms,
            setPurchaseState: e.setPurchaseState,
            setPurchaseError: e.setPurchaseError,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
            purchaseType: e.purchaseType,
            referralCode: e.referralCode,
            quantity: e.quantity,
            setEntitlementsGranted: e.setEntitlementsGranted,
            setAppliedUserDiscounts: e.setAppliedUserDiscounts,
            setUpdatedSubscription: e.setUpdatedSubscription,
            activeSubscription: e.activeSubscription,
            isExpressCheckoutEnabledForFooter: e.getExpressCheckoutVisibilityState().isExpressCheckoutEnabledForFooter,
            setExpressCheckoutStatus: e.setExpressCheckoutStatus,
            order: e.order,
            isOrderAwaitingSettlement: e.get("isOrderAwaitingSettlement"),
            setIsOrderSigning: e.setIsOrderSigning,
            applyWalletBalance: e.applyWalletBalance,
            handleBillingErrorForPurchaseTokenAuth: e.handleBillingErrorForPurchaseTokenAuth,
        })),
        e_ = eu.startTime,
        eT = (0, U.Q9)(),
        { paymentSources: eb } = (0, w.j)(),
        eN = (0, G.A)(),
        ej = (0, F.gU)(),
        {
            isGift: eR,
            selectedGiftStyle: eO,
            customGiftMessage: eM,
            emojiConfetti: eL,
            soundEffect: ek,
            giftRecipient: ew,
            selectedGiftingPromotionRewards: eD,
        } = (0, h.Pv)(),
        eU = (0, v.Mq)(eN),
        eG = (0, N.lo)(ew),
        eF = {};
    ((eF.gift_style = eO),
        (eF.reward_sku_ids = eU && !er ? eD : []),
        eG === N.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != ew, "Gift recipient must be set at purchase review step for these gift options."),
            (eF.recipient_id = ew.id),
            (eF.custom_message = eM),
            (eF.emoji_id = eL?.id),
            (eF.emoji_name = eL?.id == null ? eL?.surrogates : void 0),
            (eF.sound_id = ek?.soundId)));
    let eB = eN?.id,
        { analyticsLocations: eH } = (0, u.Ay)(),
        eW = (0, P.W)(eb, ec),
        { giftCardBalance: eV, giftCardCurrency: eY } = (0, d.h)(),
        { balance: eK } = (0, _.W0)(),
        [eZ, eq] = i.useState(!1),
        [ez, e$] = i.useState(!1),
        eQ = i.useRef(!0),
        eJ = i.useRef(!1);
    i.useEffect(
        () => () => {
            eQ.current = !1;
        },
        [],
    );
    let { hasEntitlements: eX } = (0, x.X)(eB, eR),
        e0 = null;
    ep === g.VVm.ONE_TIME &&
        (a()(null != en, "SKU must be selected for one-time purchases"),
        (e0 = ej[en] ?? null),
        a()(null != e0, "SKU must exist and be fetched."));
    let e2 = i.useCallback(() => {
            (eo(A.h.PURCHASING),
                es(!0),
                eq(!0),
                (0, s.ET)(),
                ed(null),
                T.default.track(g.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: el?.subtotal,
                    tax: el?.tax,
                    expected_amount: el?.total,
                    expected_currency: el?.currency,
                    duration_ms: Date.now() - e_,
                    gift_card_balance: eV,
                    gift_card_currency: eY,
                    is_split_with_gift_card: el?.isSplitWithGiftCard,
                    virtual_currency_balance: eK,
                }));
        }, [eo, es, ed, n, e_, el, eV, eY, eK]),
        e1 = i.useCallback(
            (e) => {
                (eo(A.h.FAIL),
                    ed(e),
                    T.default.track(g.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eW?.id,
                        payment_source_type: eW?.type,
                        duration_ms: Date.now() - e_,
                        gift_card_balance: eV,
                        gift_card_currency: eY,
                        is_split_with_gift_card: el?.isSplitWithGiftCard,
                        virtual_currency_balance: eK,
                    }));
            },
            [eo, ed, n, e_, eW, eV, eY, el, eK],
        ),
        { signOrder: e3, reportError: e4 } = (0, p.f)({
            order: ey,
            errorSource: "checkout_sign_order",
            onError: (e) => {
                (e1(e), ex(e));
            },
        }),
        e7 = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), eo(A.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (e$(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (eo(A.h.COMPLETED), { shouldReturnEarly: !1 }),
            [eo],
        ),
        e6 = i.useCallback(() => {
            ez || eq(!1);
        }, [ez]),
        e5 = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (eS(l),
                    null != t && ef(t),
                    null != n && eE(n),
                    J(X, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [J, X, eS, ef, eE],
        );
    async function e8(e) {
        if (null != ey) {
            if (eJ.current) return;
            eJ.current = !0;
            try {
                if (
                    (await (async function (e) {
                        await W(e, (e) => !e.get("isOrderLocked") || null);
                    })(eT),
                    !eQ.current)
                )
                    return;
                await (async function () {
                    (e2(), eP(!0));
                    try {
                        await (async function () {
                            let e = await (0, b.ob)(
                                    (function () {
                                        let { order: e } = eT.getState(),
                                            t = null != e ? e.billing_facet : null;
                                        return (0, P.W)(eb, null != t ? t.payment_source_id : null);
                                    })(),
                                ).catch(() => null),
                                t = await e3({
                                    loadId: eu.loadId,
                                    purchaseToken: (0, j.r)(),
                                    gatewayCheckoutContext: e,
                                });
                            if ("failed" === t.type) return;
                            let n =
                                "signed" === t.type
                                    ? t.order
                                    : await (async function (e) {
                                          (Z(eT, e),
                                              (async function (e, t, n) {
                                                  for (let l = 0; ; l++) {
                                                      if (
                                                          (await new Promise((e) =>
                                                              setTimeout(e, K[Math.min(l, K.length - 1)]),
                                                          ),
                                                          !n() || null != Y(e.getState(), t))
                                                      )
                                                          return;
                                                      let i = await (0, m.r$)(t.id);
                                                      null != i && n() && Z(e, i);
                                                  }
                                              })(eT, e, () => eQ.current));
                                          let t = await W(eT, (t) => Y(t, e));
                                          return t.status !== V.Re.SIGNED
                                              ? (e1(new o.Ay(q.intl.string(q.t.khEaRI))), null)
                                              : t;
                                      })(t.order);
                            if (null != n)
                                try {
                                    let e = await (0, m.Vw)(n.id);
                                    if (!eQ.current) return;
                                    if (0 === e.length) throw new m.j2();
                                    (eo(A.h.COMPLETED), e5(null, e));
                                } catch (e) {
                                    e4(e, { orderId: n.id, loadId: eu.loadId });
                                }
                        })();
                    } finally {
                        (eP(!1), e6());
                    }
                })();
            } finally {
                eJ.current = !1;
            }
            return;
        }
        let t = e ?? eW;
        await (async function (e) {
            let {
                onPurchaseAttempt: t,
                onPurchaseError: n,
                onPurchaseComplete: l,
                onPurchaseFinalize: i,
                hasRedirectURL: r,
                isGift: s,
                analyticsLocation: o,
                analyticsLocations: u,
                subscriptionPlan: d,
                planGroup: m,
                trialId: p,
                priceOptions: h,
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
                giftSubscriptionPlanId: M,
                quantity: L,
                applyWalletBalance: k,
            } = e;
            try {
                let e, n, i, w;
                if ((t(), r)) return;
                let D = !0 === k ? R?.paymentLegs : null;
                if (T === g.VVm.ONE_TIME)
                    (a()(null != _, "SKU must exist and be fetched."),
                        a()(null != R, "invoicePreview must exist."),
                        (e = await (0, f.XU)(_.applicationId, _.id, {
                            expectedAmount: R.total,
                            expectedCurrency: R.currency,
                            isGift: s,
                            paymentSource: y,
                            loadId: N,
                            giftInfoOptions: j,
                            quantity: L,
                            applyWalletBalance: k,
                            expectedPaymentLegs: D,
                        })));
                else {
                    let t;
                    (a()(null != d, "Missing subscriptionPlan"), a()(null != R, "Missing invoicePreview"));
                    let n = { amount: R.total, currency: R.currency };
                    if (null != M)
                        (a()(null != O, "Missing renewalInvoicePreview"),
                            (t = { amount: O.subtotal, currency: O.currency }));
                    else {
                        let e = (0, S.l6)(h, R.checkoutContext?.available_plans);
                        if (((t = (0, S.$Q)((0, S.y8)(d.id, !1, !1, e))), null != P)) {
                            let e = h.currency ?? R.currency,
                                n = (0, S.Pg)(P, d.id, 1, new Set(m));
                            ((n = (0, S.qn)(n)), (t = (0, S.UC)(n, e.toLowerCase(), h.paymentSourceId)));
                        }
                    }
                    if (null != M)
                        e = await (0, C.B1)({
                            planId: M,
                            currency: h.currency ?? R.currency,
                            paymentSource: y,
                            loadId: N,
                            giftInfoOptions: j,
                            expectedInvoicePrice: n,
                            expectedRenewalPrice: t,
                        });
                    else if (s) {
                        let t = R.total,
                            n = R.currency;
                        e = await (0, f.XU)(I.tv, d.skuId, {
                            expectedAmount: t,
                            expectedCurrency: n,
                            paymentSource: y,
                            subscriptionPlanId: d.id,
                            isGift: !0,
                            loadId: N,
                            giftInfoOptions: j,
                            quantity: L,
                            applyWalletBalance: k,
                            expectedPaymentLegs: D,
                        });
                    } else if (null != y && null != P && P.status === g.Dmq.PAST_DUE && null != A) {
                        let l = h.currency ?? R.currency;
                        e = g.AD1.has(y.type)
                            ? await (0, c.LD)(P, A, y, l, N)
                            : await (0, c.nV)(P, { paymentSource: y, currency: l }, n, t, u, o, N);
                    } else if (null != P) {
                        let l = (0, S.Pg)(P, d.id, 1, new Set(m)),
                            i = { paymentSource: y, currency: h.currency ?? R.currency };
                        (P.status === g.Dmq.PAUSED && (i.status = g.Dmq.ACTIVE),
                            P.isPausedAllowsResumeButNotUpdates || (i.items = l),
                            (e = await (0, c.nV)(P, i, n, t, u, o, N)));
                    } else
                        e = await (0, C.B1)({
                            planId: d.id,
                            currency: h.currency ?? R.currency,
                            paymentSource: y,
                            trialId: p,
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
            onPurchaseComplete: e7,
            onPurchaseFinalize: e6,
            hasRedirectURL: ez,
            isGift: eR,
            analyticsLocation: M,
            analyticsLocations: eH,
            subscriptionPlan: eN,
            planGroup: O,
            trialId: r,
            priceOptions: em,
            paymentSource: t,
            openInvoiceId: L,
            premiumSubscription: et ?? null,
            onNext: e5,
            metadata: k,
            sku: e0,
            purchaseType: ep,
            referralCode: eh,
            loadId: eu.loadId,
            giftInfoOptions: eF,
            invoicePreview: el,
            renewalInvoicePreview: ei,
            giftSubscriptionPlanId: ea,
            quantity: eC,
            applyWalletBalance: ev ?? el?.applyWalletBalance,
        });
    }
    let e9 = null != L || (ep === g.VVm.ONE_TIME && !eR),
        te = D && !e9;
    i.useLayoutEffect(() => {
        eg && null != r && eI(H.i.UNAVAILABLE);
    }, [eg, r, eI]);
    let tt =
        eg && null == r
            ? (0, l.jsx)(R.E1, {
                  type: "purchase_if_possible",
                  disablePurchase: $,
                  makePurchase: e8,
                  isSubmitting: eZ,
                  setIsSubmitting: eq,
              })
            : null;
    return eA
        ? null
        : (0, l.jsx)(z, {
              renderFooter: function (e) {
                  return (0, l.jsx)(B.lo, {
                      onBackClick: te ? t : void 0,
                      primaryButtonProps: e,
                      stripeExpressCheckoutComponent: tt,
                  });
              },
              tenantProvidedReviewButtonProps: ee,
              disableSubmit: $,
              isSubmitting: eZ,
              onReviewButtonClick: function () {
                  return e8();
              },
              needsPaymentSource: null == eW && !eX,
              onPaymentSourceAdd: Q,
          });
}
