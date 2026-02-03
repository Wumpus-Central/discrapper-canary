n.d(t, {
    A: () => k,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(284009),
    l = n.n(s),
    c = n(311907),
    u = n(397927),
    d = n(688810),
    f = n(608805),
    p = n(169797),
    _ = n(235986),
    h = n(810498),
    m = n(155984),
    g = n(683433),
    E = n(344159),
    y = n(367921),
    b = n(79387),
    O = n(45938),
    v = n(927578),
    A = n(937008),
    I = n(156312),
    S = n(495263),
    T = n(62590),
    C = n(224949),
    N = n(216641),
    w = n(999784),
    R = n(652215),
    P = n(789129);

function D(e, t, n) {
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

function L(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}

function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = (e) => {
    let { showBackButton: t, onBackClick: n, selectedSkuId: i } = e,
        { premiumSubscription: a, isGift: o, planGroup: s, isPrepaid: l, inReverseTrial: c } = e,
        {
            buttonLabel: d,
            analyticsLocations: f,
            application: _,
            hasAcceptedTerms: h,
            paymentSourceId: m,
            activeSubscription: g,
            devShelfFetchState: E,
            hasPaymentSources: b,
        } = (0, y.Ke)({
            premiumSubscription: a,
            isGift: o,
            planGroup: s,
            isPrepaid: l,
            inReverseTrial: c,
        }),
        O = (0, y.X1)(e, {
            buttonLabel: d,
            analyticsLocations: f,
            application: _,
            hasAcceptedTerms: h,
            paymentSourceId: m,
            activeSubscription: g,
            devShelfFetchState: E,
            hasPaymentSources: b,
        }),
        A = null != i && v.Ay.isPremiumSku(i) ? u.tvc : void 0;
    return (0, r.jsx)(p.cy, {
        onBackClick: t ? n : void 0,
        primaryButtonProps: M(L({}, O), {
            icon: A,
        }),
    });
};

function k(e) {
    let {
            premiumSubscription: t,
            setPurchaseState: n,
            onBack: a,
            onNext: s,
            legalTermsNodeRef: p,
            flashLegalTerms: D,
            invoiceError: x,
            planError: k,
            onPurchaseError: U,
            baseAnalyticsData: G,
            flowStartTime: V,
            trialId: F,
            planGroup: B,
            analyticsLocation: H,
            purchaseTokenAuthState: Y,
            openInvoiceId: W,
            metadata: K,
            backButtonEligible: z,
            disablePurchase: q,
            isTrial: Z = !1,
            onPaymentSourceAdd: Q,
        } = e,
        {
            selectedPlan: X,
            priceOptions: J,
            setHasAcceptedTerms: $,
            setPurchaseError: ee,
            purchaseType: et,
            paymentSourceId: en,
            paymentSources: er,
            selectedSkuId: ei,
            skusById: ea,
            skuPricePreviewsById: eo,
            referralCode: es,
            contextMetadata: el,
            invoicePreview: ec,
            inReverseTrial: eu,
            premiumBrandRefreshBackgroundClassName: ed,
        } = (0, I.P5)(),
        {
            isGift: ef,
            selectedGiftStyle: ep,
            customGiftMessage: e_,
            emojiConfetti: eh,
            soundEffect: em,
            giftRecipient: eg,
            selectedGiftingPromotionReward: eE,
        } = (0, A.Pv)(),
        ey = (0, h.Mq)(X),
        eb = (0, O.lo)(eg),
        eO = {};
    (eO.gift_style = ep),
        (eO.reward_sku_ids = ey && null != eE ? [eE] : []),
        eb === O.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (l()(null != eg, "Gift recipient must be set at purchase review step for these gift options."),
            (eO.recipient_id = eg.id),
            (eO.custom_message = e_),
            (eO.emoji_id = null == eh ? void 0 : eh.id),
            (eO.emoji_name = (null == eh ? void 0 : eh.id) == null ? (null == eh ? void 0 : eh.surrogates) : void 0),
            (eO.sound_id = null == em ? void 0 : em.soundId));
    let ev = null == X ? void 0 : X.id,
        eA = (0, T.$o)(F, J.paymentSourceId, ev),
        { analyticsLocations: eI } = (0, d.Ay)(),
        eS = (0, N.W)(er, en),
        [eT, eC] = i.useState(eA),
        [eN, ew] = i.useState(!1),
        { hasEntitlements: eR } = (0, E.X)(ev, ef),
        eP = (0, v.J$)(J.paymentSourceId),
        eD = eR || eA,
        eL = (0, m.l)(),
        ex = (0, c.bG)([C.A], () => C.A.currentOrderId),
        eM = null,
        ej = null;
    if (et === R.VVm.ONE_TIME) {
        var ek, eU;
        l()(null != ei, "SKU must be selected for one-time purchases"),
            (eM = null != (ek = ea[ei]) ? ek : null),
            l()(null != eM, "SKU must exist and be fetched.");
        let e = eo[ei],
            t = null != en ? en : b.B;
        ej = null != e ? (null != (eU = e[t]) ? eU : e[b.B]) : null;
    }
    let eG = async () => {
            await (0, S.l)({
                setPurchaseState: n,
                setHasAcceptedTerms: $,
                setIsSubmitting: eC,
                setPurchaseError: ee,
                hasRedirectURL: eN,
                setHasRedirectURL: ew,
                isGift: ef,
                baseAnalyticsData: G,
                analyticsLocation: H,
                analyticsLocations: eI,
                flowStartTime: V,
                subscriptionPlan: X,
                planGroup: B,
                trialId: F,
                priceOptions: J,
                paymentSource: eS,
                isPrepaidPaymentPastDue: eL,
                openInvoiceId: W,
                premiumSubscription: t,
                onNext: s,
                metadata: K,
                sku: eM,
                skuPricePreview: ej,
                purchaseType: et,
                referralCode: es,
                loadId: el.loadId,
                giftInfoOptions: eO,
                invoicePreview: ec,
                orderId: ex,
            });
        },
        eV = {
            baseAnalyticsData: G,
            flowStartTime: V,
            makePurchase: eG,
            onNext: s,
            onPurchaseError: U,
            paymentSource: eS,
            paymentSourceId: en,
            purchaseTokenAuthState: Y,
            setPurchaseState: n,
        },
        eF = i.useRef(eV);
    i.useEffect(() => {
        eF.current = eV;
    }),
        i.useEffect(() => {
            let { makePurchase: e } = eF.current;
            eA && !ef && null == t && e();
        }, [eA, ef, t]);
    let { enabled: eB } = (0, f.T0)({
        location: "PaymentModalReviewStepFooter",
    });
    if (eA) return null;
    let eH = null != W || (et === R.VVm.ONE_TIME && !ef),
        eY = z && !eH,
        eW = {
            legalTermsNodeRef: p,
            invoiceError: x,
            planError: k,
            disablePurchase: q,
            flashLegalTerms: D,
            isSubmitting: eT,
            premiumSubscription: t,
            isGift: ef,
            planGroup: B,
            isPrepaid: eP,
            isTrial: Z,
            makePurchase: eG,
            needsPaymentSource: null == eS && !eD,
            onNext: s,
            inReverseTrial: eu,
            onPaymentSourceAdd: Q,
        };
    return eB
        ? (0, r.jsx)(
              j,
              M(L({}, eW), {
                  selectedSkuId: ei,
                  showBackButton: eY,
                  onBackClick: a,
              }),
          )
        : (0, r.jsxs)(u.jlY, {
              "data-migration-pending": !0,
              align: _.A.Align.CENTER,
              className: o()(ed, P.H),
              children: [
                  (0, r.jsx)(y.Ay, L({}, eW)),
                  (0, r.jsx)(w.A, {}),
                  eY
                      ? (0, r.jsx)("div", {
                            className: P.a,
                            children: (0, r.jsx)(g.A, {
                                onClick: a,
                            }),
                        })
                      : null,
              ],
          });
}
