n.d(t, {
    _M: () => G,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    o = n.n(a),
    s = n(397927),
    l = n(304072),
    c = n(608805),
    u = n(666468),
    d = n(810498),
    f = n(367921),
    p = n(494230),
    _ = n(369280),
    h = n(45938),
    m = n(927578),
    g = n(937008),
    E = n(156312),
    y = n(166532);
n(566980);
var b = n(50956),
    O = n(921925),
    v = n(592362),
    A = n(520796),
    I = n(800471),
    S = n(367160),
    T = n(112242),
    C = n(216641),
    N = n(69494),
    w = n(312649),
    R = n(482132),
    P = n(788868),
    D = n(818348),
    L = n(985018),
    x = n(763979);

function M(e, t, n) {
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

function j(e) {
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
                M(e, t, n[t]);
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
            selectedPlan: o,
            selectedSkuPricePreview: s,
            purchasePreviewError: l,
            purchaseType: c,
            invoicePreview: u,
            inReverseTrial: d,
            isEligibleForTrial: p,
            userTrialOffer: _,
            checkoutPaymentSources: h,
            hasCheckoutContextLoaded: y,
        } = (0, E.P5)(),
        { isGift: b } = (0, g.Pv)(),
        O = (0, C.W)(r, n),
        v = i.useMemo(() => {
            if (null == n) return !1;
            if (!y) return !0;
            let e = h.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [h, y, n]),
        A = i.useMemo(() => {
            if (null != o) {
                if ((0, m.xq)(o.id)) return P.LE;
                if ((0, m.z4)(o.id)) return P.DA;
            }
            return [];
        }, [o]),
        I = i.useMemo(
            () =>
                c === D.VV.ONE_TIME
                    ? null == n || v || null == s || null != l
                    : null == u || (!b && null != O && c === D.VV.SUBSCRIPTION && p && !O.canRedeemTrial()),
            [c, s, n, l, u, b, O, p, v],
        ),
        S = (0, m.J$)(a.paymentSourceId),
        T =
            c === D.VV.SUBSCRIPTION && null == o
                ? L.intl.string(L.t.YScQSF)
                : (0, f.Ro)({
                      purchaseType: c,
                      plan: o,
                      premiumSubscription: e,
                      isGift: b,
                      planGroup: A,
                      isPrepaidPaymentSource: S,
                      inReverseTrial: d,
                      paymentSourceId: n,
                      hasPaymentSources: t,
                  });
    return {
        paymentSource: O,
        isEligibleForTrial: p,
        planGroup: A,
        disablePurchase: I,
        buttonText: T,
        userTrialOffer: _,
    };
}

function G(e) {
    var t, n;
    let a,
        {
            handleStepChange: f,
            trialId: m,
            trialFooterMessageOverride: C,
            reviewWarningMessage: M,
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
            setUpdatedSubscription: Z,
            contextMetadata: Q,
            currencies: X,
            paymentSources: J,
            priceOptions: $,
            purchaseError: ee,
            purchaseTokenAuthState: et,
            selectedPlan: en,
            selectedSkuId: er,
            setCurrency: ei,
            setPaymentSourceId: ea,
            setPurchaseState: eo,
            setPurchaseError: es,
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
            isPremiumGroupPurchase: ey,
            isEligibleForDiscount: eb,
            discountOffer: eO,
        } = (0, E.P5)(),
        { isGift: ev, giftMessage: eA, giftRecipient: eI, claimableRewards: eS } = (0, g.Pv)();
    o()(null != el, "Step should be set");
    let eT = i.useRef(null),
        [eC, eN] = (0, l.A)(!1, k),
        { paymentSource: ew, isEligibleForTrial: eR, planGroup: eP, disablePurchase: eD, userTrialOffer: eL } = U(),
        ex = null != (t = null != m ? m : H) ? t : null,
        eM = null != ex && (!eu || P.TP[ex].skus.includes(er)) ? ex : null,
        ej = {
            user_trial_offer_id: null == eL ? void 0 : eL.id,
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
                Z(e),
                    null != t && ep(t),
                    null != n && e_(n),
                    f(y.pn.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t,
                        },
                    });
            },
            [f, Z, ep, e_],
        ),
        eU = null != en && P.Er.has(en.id) && null != ew && !(0, u.j2)(ew) ? Error(L.intl.string(L.t["2ik8ih"])) : null,
        eG = i.useRef(null),
        [eV, eF] = i.useState(null),
        eB = null == eO || null == (n = eO.discount) ? void 0 : n.plan_ids,
        eH = eb && null != eO && null != eB && null != en && eB.includes(en.id),
        eY = ev && (0, h.Ik)(eI),
        eW = null == Y && null == W && ef === D.VV.SUBSCRIPTION,
        eK = (0, I.vT)({
            isTrial: eR,
            isGift: ev,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: eh.current,
        }),
        ez = ev && ef === D.VV.ONE_TIME,
        eq = ez || (eK ? eW && eu : eu),
        eZ = (0, d.px)(en, ev, eS),
        eQ = i.useCallback(
            () =>
                eK
                    ? void f(y.pn.SKU_SELECT)
                    : ey
                      ? void f(y.pn.ADD_PAYMENT_STEPS)
                      : eZ
                        ? void f(y.pn.SELECT_FREE_SKU)
                        : ez
                          ? f(y.pn.GIFT_CUSTOMIZATION)
                          : f(y.pn.PLAN_SELECT),
            [f, eK, ez, eZ, ey],
        ),
        eX = () => {
            f(y.pn.ADD_PAYMENT_STEPS);
        },
        eJ = eD;
    eE && (eJ = !0);
    let e$ = null != G ? G : eP;
    if (ef === D.VV.ONE_TIME)
        a = (0, r.jsx)(T.A, {
            hasLegalTermsFlash: eC,
            legalTermsNodeRef: eG,
            onPaymentSourceChange: (e) => ea(null != e ? e.id : null),
            handlePaymentSourceAdd: () => f(y.pn.ADD_PAYMENT_STEPS),
        });
    else if (null == q || em || ev) {
        o()(null != en, "Expected plan to be selected");
        let e = {
            selectedPlanId: en.id,
            planGroup: e$,
            paymentSources: J,
            onPaymentSourceChange: (e) => ea(null != e ? e.id : null),
            priceOptions: $,
            currencies: X,
            onCurrencyChange: (e) => ei(e),
            handlePaymentSourceAdd: () => f(y.pn.ADD_PAYMENT_STEPS),
            setHasAcceptedTerms: ed,
            legalTermsNodeRef: eG,
            hasLegalTermsFlash: eC,
            trialId: eM,
            trialFooterMessageOverride: C,
            reviewWarningMessage: M,
            purchaseState: ec,
            referralTrialOfferId: H,
            isTrial: eR || (null != m && null != C),
            isDiscount: eH,
            handleClose: K,
        };
        a = z ? (0, r.jsx)(S._, j({}, e)) : (0, r.jsx)(p.A, j({}, e));
    } else
        o()(null != en, "Expected plan to be selected"),
            (a = (0, r.jsx)(_.A, {
                premiumSubscription: q,
                paymentSources: J,
                priceOptions: $,
                onPaymentSourceChange: (e) => {
                    ea(null != e ? e.id : null);
                },
                onPaymentSourceAdd: eX,
                planId: en.id,
                setHasAcceptedTerms: ed,
                legalTermsNodeRef: eG,
                hasLegalTermsFlash: eC,
                onInvoiceError: (e) => eF(e),
                planGroup: e$,
                currencies: X,
                onCurrencyChange: (e) => ei(e),
                hasOpenInvoice: null != V,
                purchaseState: ec,
                handleClose: K,
            }));
    let e0 = eg && eK && !ey && !z;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b.Z, {
                giftMessage: eA,
            }),
            !eY &&
                (0, r.jsx)(N.A, {
                    isEligibleForTrial: eR,
                }),
            (0, r.jsxs)(R.dZ, {
                children: [
                    e0 &&
                        (0, r.jsx)("div", {
                            className: x.AC,
                        }),
                    (0, r.jsxs)(s.BJc, {
                        direction: "vertical",
                        gap: 8,
                        children: [(0, r.jsx)(v.A, {}), (0, r.jsx)(O.A, {}), (0, r.jsx)(A.A, {})],
                    }),
                    a,
                ],
            }),
            (0, r.jsx)(R.UX, {
                children: (0, r.jsx)(w.A, {
                    premiumSubscription: null != q ? q : null,
                    setPurchaseState: eo,
                    onBack: eQ,
                    onNext: ek,
                    onPurchaseError: (e) => es(e),
                    legalTermsNodeRef: eG,
                    flashLegalTerms: () => eN(!0),
                    invoiceError: eV,
                    planError: eU,
                    analyticsLocation: B,
                    baseAnalyticsData: F,
                    flowStartTime: Q.startTime,
                    trialId: eM,
                    planGroup: e$,
                    purchaseTokenAuthState: et,
                    openInvoiceId: V,
                    backButtonEligible: eq,
                    metadata: ej,
                    isTrial: eR,
                    disablePurchase: eJ,
                    onPaymentSourceAdd: eX,
                }),
            }),
        ],
    });
}
