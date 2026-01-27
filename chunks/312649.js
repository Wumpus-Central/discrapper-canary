n.d(t, {
    A: () => R,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(311907),
    u = n(397927),
    d = n(688810),
    f = n(235986),
    p = n(810498),
    _ = n(155984),
    h = n(683433),
    m = n(344159),
    g = n(658679),
    E = n(79387),
    y = n(45938),
    b = n(927578),
    O = n(937008),
    v = n(156312),
    A = n(495263),
    I = n(62590),
    S = n(224949),
    T = n(216641),
    C = n(999784),
    N = n(652215),
    w = n(789129);

function R(e) {
    let {
            premiumSubscription: t,
            setPurchaseState: n,
            onBack: a,
            onNext: o,
            legalTermsNodeRef: R,
            flashLegalTerms: P,
            invoiceError: D,
            planError: x,
            onPurchaseError: L,
            baseAnalyticsData: j,
            flowStartTime: M,
            trialId: k,
            planGroup: U,
            analyticsLocation: G,
            purchaseTokenAuthState: V,
            openInvoiceId: F,
            metadata: B,
            backButtonEligible: H,
            disablePurchase: Y,
            isTrial: W = !1,
            onPaymentSourceAdd: K,
        } = e,
        {
            selectedPlan: z,
            priceOptions: q,
            setHasAcceptedTerms: Z,
            setPurchaseError: X,
            purchaseType: Q,
            paymentSourceId: J,
            paymentSources: $,
            selectedSkuId: ee,
            skusById: et,
            skuPricePreviewsById: en,
            referralCode: er,
            contextMetadata: ei,
            invoicePreview: ea,
            inReverseTrial: es,
            premiumBrandRefreshBackgroundClassName: eo,
        } = (0, v.P5)(),
        {
            isGift: el,
            selectedGiftStyle: ec,
            customGiftMessage: eu,
            emojiConfetti: ed,
            soundEffect: ef,
            giftRecipient: ep,
            selectedGiftingPromotionReward: e_,
        } = (0, O.Pv)(),
        eh = (0, p.Mq)(z),
        em = (0, y.lo)(ep),
        eg = {};
    (eg.gift_style = ec),
        (eg.reward_sku_ids = eh && null != e_ ? [e_] : []),
        em === y.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (l()(null != ep, "Gift recipient must be set at purchase review step for these gift options."),
            (eg.recipient_id = ep.id),
            (eg.custom_message = eu),
            (eg.emoji_id = null == ed ? void 0 : ed.id),
            (eg.emoji_name = (null == ed ? void 0 : ed.id) == null ? (null == ed ? void 0 : ed.surrogates) : void 0),
            (eg.sound_id = null == ef ? void 0 : ef.soundId));
    let eE = null == z ? void 0 : z.id,
        ey = (0, I.$o)(k, q.paymentSourceId, eE),
        { analyticsLocations: eb } = (0, d.Ay)(),
        eO = (0, T.W)($, J),
        [ev, eA] = i.useState(ey),
        [eI, eS] = i.useState(!1),
        { hasEntitlements: eT } = (0, m.X)(eE, el),
        eC = (0, b.J$)(q.paymentSourceId),
        eN = eT || ey,
        ew = (0, _.l)(),
        eR = (0, c.bG)([S.A], () => S.A.currentOrderId),
        eP = null,
        eD = null;
    if (Q === N.VVm.ONE_TIME) {
        var ex;
        l()(null != ee, "SKU must be selected for one-time purchases"),
            (eP = null != (ex = et[ee]) ? ex : null),
            l()(null != eP, "SKU must exist and be fetched.");
        let e = en[ee],
            t = null != J ? J : E.B;
        eD = null != e ? e[t] : null;
    }
    let eL = async () => {
            await (0, A.l)({
                setPurchaseState: n,
                setHasAcceptedTerms: Z,
                setIsSubmitting: eA,
                setPurchaseError: X,
                hasRedirectURL: eI,
                setHasRedirectURL: eS,
                isGift: el,
                baseAnalyticsData: j,
                analyticsLocation: G,
                analyticsLocations: eb,
                flowStartTime: M,
                subscriptionPlan: z,
                planGroup: U,
                trialId: k,
                priceOptions: q,
                paymentSource: eO,
                isPrepaidPaymentPastDue: ew,
                openInvoiceId: F,
                premiumSubscription: t,
                onNext: o,
                metadata: B,
                sku: eP,
                skuPricePreview: eD,
                purchaseType: Q,
                referralCode: er,
                loadId: ei.loadId,
                giftInfoOptions: eg,
                invoicePreview: ea,
                orderId: eR,
            });
        },
        ej = {
            baseAnalyticsData: j,
            flowStartTime: M,
            makePurchase: eL,
            onNext: o,
            onPurchaseError: L,
            paymentSource: eO,
            paymentSourceId: J,
            purchaseTokenAuthState: V,
            setPurchaseState: n,
        },
        eM = i.useRef(ej);
    i.useEffect(() => {
        eM.current = ej;
    }),
        i.useEffect(() => {
            let { makePurchase: e } = eM.current;
            ey && !el && null == t && e();
        }, [ey, el, t]);
    let ek = null != F || (Q === N.VVm.ONE_TIME && !el),
        eU = H && !ek;
    return ey
        ? null
        : (0, r.jsxs)(u.jlY, {
              "data-migration-pending": !0,
              align: f.A.Align.CENTER,
              className: s()(eo, w.H),
              children: [
                  (0, r.jsx)(g.A, {
                      legalTermsNodeRef: R,
                      invoiceError: D,
                      planError: x,
                      disablePurchase: Y,
                      flashLegalTerms: P,
                      isSubmitting: ev,
                      premiumSubscription: t,
                      isGift: el,
                      planGroup: U,
                      isPrepaid: eC,
                      isTrial: W,
                      makePurchase: eL,
                      needsPaymentSource: null == eO && !eN,
                      onNext: o,
                      inReverseTrial: es,
                      onPaymentSourceAdd: K,
                  }),
                  (0, r.jsx)(C.A, {}),
                  eU
                      ? (0, r.jsx)("div", {
                            className: w.a,
                            children: (0, r.jsx)(h.A, {
                                onClick: a,
                            }),
                        })
                      : null,
              ],
          });
}
