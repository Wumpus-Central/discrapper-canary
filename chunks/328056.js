n.d(t, { U: () => Q });
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(391048),
    o = n(830382),
    u = n(136857),
    c = n(688810),
    d = n(669815),
    m = n(11939),
    p = n(158317),
    C = n(313125),
    h = n(418200),
    f = n(158032),
    E = n(191115),
    S = n(448645),
    I = n(652215),
    g = n(682901),
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
    W = n(705822);
function V(e, t) {
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
var Y = n(26279);
function K(e, t) {
    let { order: n } = e;
    return null == n || n.id !== t.id || n.revision <= t.revision || n.status === Y.Re.SIGNING_IN_PROGRESS ? null : n;
}
let Z = [1e3, 2e3, 4e3, 8e3, 1e4];
function q(e, t) {
    let { order: n, setOrder: l } = e.getState();
    null != n && n.id === t.id && t.revision > n.revision && l(t);
}
var z = n(792996);
function $(e) {
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
                C = r ?? !1,
                h = (0, G.t4)((e) =>
                    e.getCheckoutReviewButtonProps({
                        tenantProvidedReviewButtonProps: s,
                        isReviewButtonDisabled: C,
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
                    u(h.text);
                }, [h.text, u]),
                h
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
function Q(e) {
    let {
            onBack: t,
            baseAnalyticsData: n,
            trialId: r,
            planGroup: L = [],
            analyticsLocation: M,
            metadata: k,
            backButtonEligible: w,
            disableSubmit: U,
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
            giftSubscriptionPlanId: er,
            setHasAcceptedTerms: ea,
            setPurchaseState: es,
            contextMetadata: eo,
            paymentSourceId: eu,
            setPurchaseError: ec,
            priceOptions: ed,
            purchaseType: em,
            quantity: ep,
            setEntitlementsGranted: eC,
            setAppliedUserDiscounts: eh,
            setUpdatedSubscription: ef,
            isExpressCheckoutEnabledForFooter: eE,
            setExpressCheckoutStatus: eS,
            order: eI,
            isOrderAwaitingSettlement: eg,
            setIsOrderSigning: ey,
            applyWalletBalance: eA,
            handleBillingErrorForPurchaseTokenAuth: eP,
            openInvoiceId: ev,
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
        ex = (0, G.t4)((e) => e.getTenantParams(O.C.PREMIUM_CHECKOUT)),
        e_ = null != ex ? ex.referralCode : void 0,
        eT = eo.startTime,
        eb = (0, G.Q9)(),
        { paymentSources: eN } = (0, D.j)(),
        ej = (0, F.A)(),
        eR = (0, B.gU)(),
        {
            isGift: eO,
            selectedGiftStyle: eL,
            customGiftMessage: eM,
            emojiConfetti: ek,
            soundEffect: ew,
            giftRecipient: eD,
            selectedGiftingPromotionRewards: eU,
        } = (0, h.Pv)(),
        eG = (0, v.Mq)(ej),
        eF = (0, N.lo)(eD),
        eB = {};
    ((eB.gift_style = eL),
        (eB.reward_sku_ids = eG ? eU : []),
        eF === N.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eD, "Gift recipient must be set at purchase review step for these gift options."),
            (eB.recipient_id = eD.id),
            (eB.custom_message = eM),
            (eB.emoji_id = ek?.id),
            (eB.emoji_name = ek?.id == null ? ek?.surrogates : void 0),
            (eB.sound_id = ew?.soundId)));
    let eH = ej?.id,
        { analyticsLocations: eW } = (0, c.Ay)(),
        eV = (0, P.W)(eN, eu),
        { giftCardBalance: eY, giftCardCurrency: eK } = (0, m.h)(),
        { balance: eZ } = (0, _.W0)(),
        [eq, ez] = i.useState(!1),
        [e$, eQ] = i.useState(!1),
        eJ = i.useRef(!0),
        eX = i.useRef(!1);
    i.useEffect(
        () => () => {
            eJ.current = !1;
        },
        [],
    );
    let { hasEntitlements: e0 } = (0, x.X)(eH, eO),
        e2 = null;
    em === I.VVm.ONE_TIME &&
        (a()(null != en, "SKU must be selected for one-time purchases"),
        (e2 = eR[en] ?? null),
        a()(null != e2, "SKU must exist and be fetched."));
    let e1 = i.useCallback(() => {
            (es(A.h.PURCHASING),
                ea(!0),
                ez(!0),
                (0, s.ET)(),
                ec(null),
                T.default.track(I.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: el?.subtotal,
                    tax: el?.tax,
                    expected_amount: el?.total,
                    expected_currency: el?.currency,
                    duration_ms: Date.now() - eT,
                    gift_card_balance: eY,
                    gift_card_currency: eK,
                    is_split_with_gift_card: el?.isSplitWithGiftCard,
                    virtual_currency_balance: eZ,
                }));
        }, [es, ea, ec, n, eT, el, eY, eK, eZ]),
        e3 = i.useCallback(
            (e) => {
                (es(A.h.FAIL),
                    ec(e),
                    T.default.track(I.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eV?.id,
                        payment_source_type: eV?.type,
                        duration_ms: Date.now() - eT,
                        gift_card_balance: eY,
                        gift_card_currency: eK,
                        is_split_with_gift_card: el?.isSplitWithGiftCard,
                        virtual_currency_balance: eZ,
                    }));
            },
            [es, ec, n, eT, eV, eY, eK, el, eZ],
        ),
        e4 = i.useCallback((e) => q(eb, e), [eb]),
        { signOrder: e7, reportError: e6 } = (0, C.f)({
            order: eI,
            errorSource: "checkout_sign_order",
            onSignFailure: e4,
            onError: (e) => {
                (e3(e), eP(e));
            },
        }),
        e8 = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, d.fE)(), es(A.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eQ(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (es(A.h.COMPLETED), { shouldReturnEarly: !1 }),
            [es],
        ),
        e5 = i.useCallback(() => {
            e$ || ez(!1);
        }, [e$]),
        e9 = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (ef(l),
                    null != t && eC(t),
                    null != n && eh(n),
                    J(X, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [J, X, ef, eC, eh],
        );
    async function te(e) {
        if (null != eI) {
            if (eX.current) return;
            eX.current = !0;
            try {
                if (
                    (await (async function (e) {
                        await V(e, (e) => !e.getIsOrderLocked() || null);
                    })(eb),
                    !eJ.current)
                )
                    return;
                await (async function () {
                    (e1(), ey(!0));
                    try {
                        await (async function () {
                            let e = await (0, b.ob)(
                                    (function () {
                                        let { order: e } = eb.getState(),
                                            t = null != e ? e.billing_facet : null;
                                        return (0, P.W)(eN, null != t ? t.payment_source_id : null);
                                    })(),
                                ).catch(() => null),
                                t = await e7({
                                    loadId: eo.loadId,
                                    purchaseToken: (0, j.r)(),
                                    gatewayCheckoutContext: e,
                                });
                            if ("failed" === t.type) return;
                            let n =
                                "signed" === t.type
                                    ? t.order
                                    : await (async function (e) {
                                          (q(eb, e),
                                              (async function (e, t, n) {
                                                  for (let l = 0; ; l++) {
                                                      if (
                                                          (await new Promise((e) =>
                                                              setTimeout(e, Z[Math.min(l, Z.length - 1)]),
                                                          ),
                                                          !n() || null != K(e.getState(), t))
                                                      )
                                                          return;
                                                      let i = await (0, p.r$)(t.id);
                                                      null != i && n() && q(e, i);
                                                  }
                                              })(eb, e, () => eJ.current));
                                          let t = await V(eb, (t) => K(t, e));
                                          return t.status !== Y.Re.SIGNED
                                              ? (e3(new u.Ay(z.intl.string(z.t.khEaRI))), null)
                                              : t;
                                      })(t.order);
                            if (null != n)
                                try {
                                    let e = await (0, p.Vw)(n.id);
                                    if (
                                        (e.length > 0 &&
                                            null != en &&
                                            (0, o.mF)({
                                                skuId: en,
                                                entitlements: e,
                                                libraryApplications: [],
                                                loadId: eo.loadId,
                                            }),
                                        !eJ.current)
                                    )
                                        return;
                                    if (0 === e.length) throw new p.j2();
                                    (es(A.h.COMPLETED), e9(null, e));
                                } catch (e) {
                                    e6(e, { orderId: n.id, loadId: eo.loadId });
                                }
                        })();
                    } finally {
                        (ey(!1), e5());
                    }
                })();
            } finally {
                eX.current = !1;
            }
            return;
        }
        let t = e ?? eV;
        await (async function (e) {
            let {
                onPurchaseAttempt: t,
                onPurchaseError: n,
                onPurchaseComplete: l,
                onPurchaseFinalize: i,
                hasRedirectURL: r,
                isGift: s,
                analyticsLocation: u,
                analyticsLocations: c,
                subscriptionPlan: m,
                planGroup: p,
                trialId: C,
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
                giftSubscriptionPlanId: L,
                quantity: M,
                applyWalletBalance: k,
            } = e;
            try {
                let e, n, i, w;
                if ((t(), r)) return;
                let D = !0 === k ? R?.paymentLegs : null;
                if (T === I.VVm.ONE_TIME)
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
                        let e = (0, S.l6)(h, R.checkoutContext?.available_plans);
                        if (((t = (0, S.$Q)((0, S.y8)(m.id, !1, !1, e))), null != P)) {
                            let e = h.currency ?? R.currency,
                                n = (0, S.Pg)(P, m.id, 1, new Set(p));
                            ((n = (0, S.qn)(n)), (t = (0, S.UC)(n, e.toLowerCase(), h.paymentSourceId)));
                        }
                    }
                    if (null != L)
                        e = await (0, f.B1)({
                            planId: L,
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
                        e = await (0, o.XU)(g.tv, m.skuId, {
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
                    } else if (null != y && null != P && P.status === I.Dmq.PAST_DUE && null != A) {
                        let l = h.currency ?? R.currency;
                        e = I.AD1.has(y.type)
                            ? await (0, d.LD)(P, A, y, l, N)
                            : await (0, d.nV)(P, { paymentSource: y, currency: l }, n, t, c, u, N);
                    } else if (null != P) {
                        let l = (0, S.Pg)(P, m.id, 1, new Set(p)),
                            i = { paymentSource: y, currency: h.currency ?? R.currency };
                        (P.status === I.Dmq.PAUSED && (i.status = I.Dmq.ACTIVE),
                            P.isPausedAllowsResumeButNotUpdates || (i.items = l),
                            (e = await (0, d.nV)(P, i, n, t, c, u, N)));
                    } else
                        e = await (0, f.B1)({
                            planId: m.id,
                            currency: h.currency ?? R.currency,
                            paymentSource: y,
                            trialId: C,
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
            onPurchaseAttempt: e1,
            onPurchaseError: e3,
            onPurchaseComplete: e8,
            onPurchaseFinalize: e5,
            hasRedirectURL: e$,
            isGift: eO,
            analyticsLocation: M,
            analyticsLocations: eW,
            subscriptionPlan: ej,
            planGroup: L,
            trialId: r,
            priceOptions: ed,
            paymentSource: t,
            openInvoiceId: ev,
            premiumSubscription: et ?? null,
            onNext: e9,
            metadata: k,
            sku: e2,
            purchaseType: em,
            referralCode: e_,
            loadId: eo.loadId,
            giftInfoOptions: eB,
            invoicePreview: el,
            renewalInvoicePreview: ei,
            giftSubscriptionPlanId: er,
            quantity: ep,
            applyWalletBalance: eA ?? el?.applyWalletBalance,
        });
    }
    let tt = null != ev || (em === I.VVm.ONE_TIME && !eO),
        tn = w && !tt;
    i.useLayoutEffect(() => {
        eE && null != r && eS(W.i.UNAVAILABLE);
    }, [eE, r, eS]);
    let tl =
        eE && null == r
            ? (0, l.jsx)(R.E1, {
                  type: "purchase_if_possible",
                  disablePurchase: U,
                  makePurchase: te,
                  isSubmitting: eq,
                  setIsSubmitting: ez,
              })
            : null;
    return eg
        ? null
        : (0, l.jsx)($, {
              renderFooter: function (e) {
                  return (0, l.jsx)(H.lo, {
                      onBackClick: tn ? t : void 0,
                      primaryButtonProps: e,
                      stripeExpressCheckoutComponent: tl,
                  });
              },
              tenantProvidedReviewButtonProps: ee,
              disableSubmit: U,
              isSubmitting: eq,
              onReviewButtonClick: function () {
                  return te();
              },
              needsPaymentSource: null == eV && !e0,
              onPaymentSourceAdd: Q,
          });
}
