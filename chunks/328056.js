n.d(t, { U: () => Q });
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
    C = n(418200),
    h = n(158032),
    f = n(830382),
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
    b = n(739508),
    N = n(45938),
    j = n(107351),
    R = n(708791),
    O = n(120700),
    M = n(991690),
    L = n(855986),
    k = n(10716),
    w = n(878014),
    D = n(202475),
    U = n(31823),
    G = n(316363),
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
                d = (0, L.bG)([k.A], () => k.A.getFetchState()),
                m = (0, w.W)(c, M.U.MAIN) && d === k.$.LOADING,
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
            planGroup: M = [],
            analyticsLocation: L,
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
            isRecurringGiftCheckout: er,
            giftSubscriptionPlanId: ea,
            setHasAcceptedTerms: es,
            setPurchaseState: eo,
            contextMetadata: eu,
            paymentSourceId: ec,
            setPurchaseError: ed,
            priceOptions: em,
            purchaseType: ep,
            quantity: eC,
            setEntitlementsGranted: eh,
            setAppliedUserDiscounts: ef,
            setUpdatedSubscription: eE,
            isExpressCheckoutEnabledForFooter: eS,
            setExpressCheckoutStatus: eg,
            order: eI,
            isOrderAwaitingSettlement: ey,
            setIsOrderSigning: eA,
            applyWalletBalance: eP,
            handleBillingErrorForPurchaseTokenAuth: ev,
            openInvoiceId: ex,
        } = (0, G.t4)((e) => ({
            openInvoiceId: e.getSharedCheckoutParams().openInvoiceId,
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
        e_ = (0, G.t4)((e) => e.getTenantParams(O.C.PREMIUM_CHECKOUT)),
        eT = null != e_ ? e_.referralCode : void 0,
        eb = eu.startTime,
        eN = (0, G.Q9)(),
        { paymentSources: ej } = (0, D.j)(),
        eR = (0, F.A)(),
        eO = (0, B.gU)(),
        {
            isGift: eM,
            selectedGiftStyle: eL,
            customGiftMessage: ek,
            emojiConfetti: ew,
            soundEffect: eD,
            giftRecipient: eU,
            selectedGiftingPromotionRewards: eG,
        } = (0, C.Pv)(),
        eF = (0, v.Mq)(eR),
        eB = (0, N.lo)(eU),
        eH = {};
    ((eH.gift_style = eL),
        (eH.reward_sku_ids = eF && !er ? eG : []),
        eB === N.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (a()(null != eU, "Gift recipient must be set at purchase review step for these gift options."),
            (eH.recipient_id = eU.id),
            (eH.custom_message = ek),
            (eH.emoji_id = ew?.id),
            (eH.emoji_name = ew?.id == null ? ew?.surrogates : void 0),
            (eH.sound_id = eD?.soundId)));
    let eW = eR?.id,
        { analyticsLocations: eV } = (0, u.Ay)(),
        eY = (0, P.W)(ej, ec),
        { giftCardBalance: eK, giftCardCurrency: eZ } = (0, d.h)(),
        { balance: eq } = (0, _.W0)(),
        [ez, e$] = i.useState(!1),
        [eQ, eJ] = i.useState(!1),
        eX = i.useRef(!0),
        e0 = i.useRef(!1);
    i.useEffect(
        () => () => {
            eX.current = !1;
        },
        [],
    );
    let { hasEntitlements: e2 } = (0, x.X)(eW, eM),
        e1 = null;
    ep === g.VVm.ONE_TIME &&
        (a()(null != en, "SKU must be selected for one-time purchases"),
        (e1 = eO[en] ?? null),
        a()(null != e1, "SKU must exist and be fetched."));
    let e3 = i.useCallback(() => {
            (eo(A.h.PURCHASING),
                es(!0),
                e$(!0),
                (0, s.ET)(),
                ed(null),
                T.default.track(g.HAw.PAYMENT_FLOW_COMPLETED, {
                    ...n,
                    subtotal: el?.subtotal,
                    tax: el?.tax,
                    expected_amount: el?.total,
                    expected_currency: el?.currency,
                    duration_ms: Date.now() - eb,
                    gift_card_balance: eK,
                    gift_card_currency: eZ,
                    is_split_with_gift_card: el?.isSplitWithGiftCard,
                    virtual_currency_balance: eq,
                }));
        }, [eo, es, ed, n, eb, el, eK, eZ, eq]),
        e4 = i.useCallback(
            (e) => {
                (eo(A.h.FAIL),
                    ed(e),
                    T.default.track(g.HAw.PAYMENT_FLOW_FAILED, {
                        ...n,
                        payment_error_code: e?.code,
                        payment_source_id: eY?.id,
                        payment_source_type: eY?.type,
                        duration_ms: Date.now() - eb,
                        gift_card_balance: eK,
                        gift_card_currency: eZ,
                        is_split_with_gift_card: el?.isSplitWithGiftCard,
                        virtual_currency_balance: eq,
                    }));
            },
            [eo, ed, n, eb, eY, eK, eZ, el, eq],
        ),
        { signOrder: e7, reportError: e6 } = (0, p.f)({
            order: eI,
            errorSource: "checkout_sign_order",
            onError: (e) => {
                (e4(e), ev(e));
            },
        }),
        e8 = i.useCallback(
            (e) =>
                e.customerActionCancelled
                    ? ((0, c.fE)(), eo(A.h.WAITING), { shouldReturnEarly: !0 })
                    : e.redirectConfirmation || e.pendingCustomerAction
                      ? (eJ(null != e.redirectURL), { shouldReturnEarly: !0 })
                      : (eo(A.h.COMPLETED), { shouldReturnEarly: !1 }),
            [eo],
        ),
        e5 = i.useCallback(() => {
            eQ || e$(!1);
        }, [eQ]),
        e9 = i.useCallback(
            (e, t, n) => {
                let l = e ?? null;
                (eE(l),
                    null != t && eh(t),
                    null != n && ef(n),
                    J(X, { fulfillment: { subscription: l, entitlements: t } }));
            },
            [J, X, eE, eh, ef],
        );
    async function te(e) {
        if (null != eI) {
            if (e0.current) return;
            e0.current = !0;
            try {
                if (
                    (await (async function (e) {
                        await V(e, (e) => !e.get("isOrderLocked") || null);
                    })(eN),
                    !eX.current)
                )
                    return;
                await (async function () {
                    (e3(), eA(!0));
                    try {
                        await (async function () {
                            let e = await (0, b.ob)(
                                    (function () {
                                        let { order: e } = eN.getState(),
                                            t = null != e ? e.billing_facet : null;
                                        return (0, P.W)(ej, null != t ? t.payment_source_id : null);
                                    })(),
                                ).catch(() => null),
                                t = await e7({
                                    loadId: eu.loadId,
                                    purchaseToken: (0, j.r)(),
                                    gatewayCheckoutContext: e,
                                });
                            if ("failed" === t.type) return;
                            let n =
                                "signed" === t.type
                                    ? t.order
                                    : await (async function (e) {
                                          (q(eN, e),
                                              (async function (e, t, n) {
                                                  for (let l = 0; ; l++) {
                                                      if (
                                                          (await new Promise((e) =>
                                                              setTimeout(e, Z[Math.min(l, Z.length - 1)]),
                                                          ),
                                                          !n() || null != K(e.getState(), t))
                                                      )
                                                          return;
                                                      let i = await (0, m.r$)(t.id);
                                                      null != i && n() && q(e, i);
                                                  }
                                              })(eN, e, () => eX.current));
                                          let t = await V(eN, (t) => K(t, e));
                                          return t.status !== Y.Re.SIGNED
                                              ? (e4(new o.Ay(z.intl.string(z.t.khEaRI))), null)
                                              : t;
                                      })(t.order);
                            if (null != n)
                                try {
                                    let e = await (0, m.Vw)(n.id);
                                    if (!eX.current) return;
                                    if (0 === e.length) throw new m.j2();
                                    (eo(A.h.COMPLETED), e9(null, e));
                                } catch (e) {
                                    e6(e, { orderId: n.id, loadId: eu.loadId });
                                }
                        })();
                    } finally {
                        (eA(!1), e5());
                    }
                })();
            } finally {
                e0.current = !1;
            }
            return;
        }
        let t = e ?? eY;
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
                        let e = (0, S.l6)(C, R.checkoutContext?.available_plans);
                        if (((t = (0, S.$Q)((0, S.y8)(d.id, !1, !1, e))), null != P)) {
                            let e = C.currency ?? R.currency,
                                n = (0, S.Pg)(P, d.id, 1, new Set(m));
                            ((n = (0, S.qn)(n)), (t = (0, S.UC)(n, e.toLowerCase(), C.paymentSourceId)));
                        }
                    }
                    if (null != M)
                        e = await (0, h.B1)({
                            planId: M,
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
                        let l = C.currency ?? R.currency;
                        e = g.AD1.has(y.type)
                            ? await (0, c.LD)(P, A, y, l, N)
                            : await (0, c.nV)(P, { paymentSource: y, currency: l }, n, t, u, o, N);
                    } else if (null != P) {
                        let l = (0, S.Pg)(P, d.id, 1, new Set(m)),
                            i = { paymentSource: y, currency: C.currency ?? R.currency };
                        (P.status === g.Dmq.PAUSED && (i.status = g.Dmq.ACTIVE),
                            P.isPausedAllowsResumeButNotUpdates || (i.items = l),
                            (e = await (0, c.nV)(P, i, n, t, u, o, N)));
                    } else
                        e = await (0, h.B1)({
                            planId: d.id,
                            currency: C.currency ?? R.currency,
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
            onPurchaseAttempt: e3,
            onPurchaseError: e4,
            onPurchaseComplete: e8,
            onPurchaseFinalize: e5,
            hasRedirectURL: eQ,
            isGift: eM,
            analyticsLocation: L,
            analyticsLocations: eV,
            subscriptionPlan: eR,
            planGroup: M,
            trialId: r,
            priceOptions: em,
            paymentSource: t,
            openInvoiceId: ex,
            premiumSubscription: et ?? null,
            onNext: e9,
            metadata: k,
            sku: e1,
            purchaseType: ep,
            referralCode: eT,
            loadId: eu.loadId,
            giftInfoOptions: eH,
            invoicePreview: el,
            renewalInvoicePreview: ei,
            giftSubscriptionPlanId: ea,
            quantity: eC,
            applyWalletBalance: eP ?? el?.applyWalletBalance,
        });
    }
    let tt = null != ex || (ep === g.VVm.ONE_TIME && !eM),
        tn = w && !tt;
    i.useLayoutEffect(() => {
        eS && null != r && eg(W.i.UNAVAILABLE);
    }, [eS, r, eg]);
    let tl =
        eS && null == r
            ? (0, l.jsx)(R.E1, {
                  type: "purchase_if_possible",
                  disablePurchase: U,
                  makePurchase: te,
                  isSubmitting: ez,
                  setIsSubmitting: e$,
              })
            : null;
    return ey
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
              isSubmitting: ez,
              onReviewButtonClick: function () {
                  return te();
              },
              needsPaymentSource: null == eY && !e2,
              onPaymentSourceAdd: Q,
          });
}
