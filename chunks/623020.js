n.d(t, {
    _M: () => G,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(397927),
    l = n(304072),
    c = n(608805),
    u = n(666468),
    d = n(810498),
    f = n(494230),
    p = n(369280),
    _ = n(658679),
    h = n(45938),
    m = n(927578),
    g = n(937008),
    E = n(156312),
    b = n(166532);
n(566980);
var y = n(50956),
    O = n(921925),
    A = n(592362),
    v = n(520796),
    S = n(800471),
    I = n(412090),
    T = n(112242),
    C = n(216641),
    N = n(69494),
    R = n(312649),
    w = n(482132),
    P = n(788868),
    D = n(818348),
    x = n(985018),
    L = n(763979);

function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function M(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
let k = 500;

function U() {
    let {
            activeSubscription: e,
            hasPaymentSources: t,
            paymentSourceId: n,
            paymentSources: r,
            priceOptions: a,
            selectedPlan: s,
            selectedSkuPricePreview: o,
            purchasePreviewError: l,
            purchaseType: c,
            invoicePreview: u,
            inReverseTrial: d,
            isEligibleForTrial: f,
            userTrialOffer: p,
        } = (0, E.P5)(),
        { isGift: h } = (0, g.Pv)(),
        b = (0, C.W)(r, n),
        y = i.useMemo(() => {
            if (null != s) {
                if ((0, m.xq)(s.id)) return P.LE;
                if ((0, m.z4)(s.id)) return P.DA;
            }
            return [];
        }, [s]),
        O = i.useMemo(
            () =>
                c === D.VV.ONE_TIME
                    ? (null == o && null != n) || null != l
                    : null == u || (!h && null != b && c === D.VV.SUBSCRIPTION && f && !b.canRedeemTrial()),
            [c, o, n, l, u, h, b, f],
        ),
        A = (0, m.J$)(a.paymentSourceId),
        v =
            c === D.VV.SUBSCRIPTION && null == s
                ? x.intl.string(x.t.YScQSF)
                : (0, _.R)({
                      purchaseType: c,
                      plan: s,
                      premiumSubscription: e,
                      isGift: h,
                      planGroup: y,
                      isPrepaidPaymentSource: A,
                      inReverseTrial: d,
                      paymentSourceId: n,
                      hasPaymentSources: t,
                  });
    return {
        paymentSource: b,
        isEligibleForTrial: f,
        planGroup: y,
        disablePurchase: O,
        buttonText: v,
        userTrialOffer: p,
    };
}

function G(e) {
    var t, n;
    let a,
        {
            handleStepChange: _,
            trialId: m,
            trialFooterMessageOverride: C,
            reviewWarningMessage: j,
            planGroup: G,
            openInvoiceId: V,
            analyticsData: F,
            analyticsLocation: B,
            referralTrialOfferId: H,
            initialPlanId: Y,
            subscriptionTier: W,
            handleClose: K,
        } = e,
        { enabled: z } = (0, c.T0)({
            location: "payment_modal_review_step",
        }),
        {
            activeSubscription: q,
            setUpdatedSubscription: X,
            contextMetadata: Z,
            currencies: Q,
            paymentSources: $,
            priceOptions: J,
            purchaseError: ee,
            purchaseTokenAuthState: et,
            selectedPlan: en,
            selectedSkuId: er,
            setCurrency: ei,
            setPaymentSourceId: ea,
            setPurchaseState: es,
            setPurchaseError: eo,
            step: el,
            purchaseState: ec,
            isPremium: eu,
            setHasAcceptedTerms: ed,
            purchaseType: ef,
            setEntitlementsGranted: ep,
            setAppliedUserDiscounts: e_,
            startedPaymentFlowWithPaymentSourcesRef: eh,
            inReverseTrial: em,
            enablePremiumBrandRefresh: eg,
            disablePurchasesForStorybook: eE,
            isPremiumGroupPurchase: eb,
            isEligibleForDiscount: ey,
            discountOffer: eO,
        } = (0, E.P5)(),
        { isGift: eA, giftMessage: ev, giftRecipient: eS, claimableRewards: eI } = (0, g.Pv)();
    s()(null != el, "Step should be set");
    let eT = i.useRef(null),
        [eC, eN] = (0, l.A)(!1, k),
        { paymentSource: eR, isEligibleForTrial: ew, planGroup: eP, disablePurchase: eD, userTrialOffer: ex } = U(),
        eL = null != (t = null != m ? m : H) ? t : null,
        ej = null != eL && (!eu || P.TP[eL].skus.includes(er)) ? eL : null,
        eM = {
            user_trial_offer_id: null == ex ? void 0 : ex.id,
        };
    i.useEffect(() => {
        null != ee &&
            null != eT.current &&
            eT.current.scrollIntoView({
                behavior: "smooth",
            });
    }, [ee]);
    let ek = i.useCallback(
            (e, t, n) => {
                X(e),
                    null != t && ep(t),
                    null != n && e_(n),
                    _(b.pn.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t,
                        },
                    });
            },
            [_, X, ep, e_],
        ),
        eU = null != en && P.Er.has(en.id) && null != eR && !(0, u.j2)(eR) ? Error(x.intl.string(x.t["2ik8ih"])) : null,
        eG = i.useRef(null),
        [eV, eF] = i.useState(null),
        eB = null == eO || null == (n = eO.discount) ? void 0 : n.plan_ids,
        eH = ey && null != eO && null != eB && null != en && eB.includes(en.id),
        eY = eA && (0, h.Ik)(eS),
        eW = null == Y && null == W && ef === D.VV.SUBSCRIPTION,
        eK = (0, S.vT)({
            isTrial: ew,
            isGift: eA,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: eh.current,
        }),
        ez = eA && ef === D.VV.ONE_TIME,
        eq = ez || (eK ? eW && eu : eu),
        eX = (0, d.px)(en, eA, eI),
        eZ = i.useCallback(
            () =>
                eK
                    ? void _(b.pn.SKU_SELECT)
                    : eb
                      ? void _(b.pn.ADD_PAYMENT_STEPS)
                      : eX
                        ? void _(b.pn.SELECT_FREE_SKU)
                        : ez
                          ? _(b.pn.GIFT_CUSTOMIZATION)
                          : _(b.pn.PLAN_SELECT),
            [_, eK, ez, eX, eb],
        ),
        eQ = () => {
            _(b.pn.ADD_PAYMENT_STEPS);
        },
        e$ = eD;
    eE && (e$ = !0);
    let eJ = null != G ? G : eP;
    if (ef === D.VV.ONE_TIME)
        a = (0, r.jsx)(T.A, {
            hasLegalTermsFlash: eC,
            legalTermsNodeRef: eG,
            onPaymentSourceChange: (e) => ea(null != e ? e.id : null),
            handlePaymentSourceAdd: () => _(b.pn.ADD_PAYMENT_STEPS),
        });
    else if (null == q || em || eA) {
        s()(null != en, "Expected plan to be selected");
        let e = {
            selectedPlanId: en.id,
            planGroup: eJ,
            paymentSources: $,
            onPaymentSourceChange: (e) => ea(null != e ? e.id : null),
            priceOptions: J,
            currencies: Q,
            onCurrencyChange: (e) => ei(e),
            handlePaymentSourceAdd: () => _(b.pn.ADD_PAYMENT_STEPS),
            setHasAcceptedTerms: ed,
            legalTermsNodeRef: eG,
            hasLegalTermsFlash: eC,
            trialId: ej,
            trialFooterMessageOverride: C,
            reviewWarningMessage: j,
            purchaseState: ec,
            referralTrialOfferId: H,
            isTrial: ew || (null != m && null != C),
            isDiscount: eH,
            handleClose: K,
        };
        a = z ? (0, r.jsx)(I._, M({}, e)) : (0, r.jsx)(f.A, M({}, e));
    } else
        s()(null != en, "Expected plan to be selected"),
            (a = (0, r.jsx)(p.A, {
                premiumSubscription: q,
                paymentSources: $,
                priceOptions: J,
                onPaymentSourceChange: (e) => {
                    ea(null != e ? e.id : null);
                },
                onPaymentSourceAdd: eQ,
                planId: en.id,
                setHasAcceptedTerms: ed,
                legalTermsNodeRef: eG,
                hasLegalTermsFlash: eC,
                onInvoiceError: (e) => eF(e),
                planGroup: eJ,
                currencies: Q,
                onCurrencyChange: (e) => ei(e),
                hasOpenInvoice: null != V,
                purchaseState: ec,
                handleClose: K,
            }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.Z, {
                giftMessage: ev,
            }),
            !eY &&
                (0, r.jsx)(N.A, {
                    isEligibleForTrial: ew,
                }),
            (0, r.jsxs)(w.dZ, {
                children: [
                    eg &&
                        eK &&
                        !eb &&
                        (0, r.jsx)("div", {
                            className: L.AC,
                        }),
                    (0, r.jsxs)(o.BJc, {
                        direction: "vertical",
                        gap: 8,
                        children: [(0, r.jsx)(A.A, {}), (0, r.jsx)(O.A, {}), (0, r.jsx)(v.A, {})],
                    }),
                    a,
                ],
            }),
            (0, r.jsx)(w.UX, {
                children: (0, r.jsx)(R.A, {
                    premiumSubscription: null != q ? q : null,
                    setPurchaseState: es,
                    onBack: eZ,
                    onNext: ek,
                    onPurchaseError: (e) => eo(e),
                    legalTermsNodeRef: eG,
                    flashLegalTerms: () => eN(!0),
                    invoiceError: eV,
                    planError: eU,
                    analyticsLocation: B,
                    baseAnalyticsData: F,
                    flowStartTime: Z.startTime,
                    trialId: ej,
                    planGroup: eJ,
                    purchaseTokenAuthState: et,
                    openInvoiceId: V,
                    backButtonEligible: eq,
                    metadata: eM,
                    isTrial: ew,
                    disablePurchase: e$,
                    onPaymentSourceAdd: eQ,
                }),
            }),
        ],
    });
}
