n.d(t, { Z: () => L }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(906732),
    f = n(597688),
    _ = n(445794),
    p = n(600164),
    h = n(717401),
    m = n(160913),
    g = n(311821),
    E = n(459965),
    b = n(858987),
    y = n(855775),
    O = n(669079),
    v = n(74538),
    I = n(987209),
    T = n(563132),
    S = n(632580),
    A = n(919778),
    C = n(877820),
    N = n(435020),
    R = n(612853),
    P = n(981631),
    w = n(388032),
    D = n(62868),
    x = n(133529);
function L(e) {
    let {
            premiumSubscription: t,
            setPurchaseState: n,
            onBack: a,
            onNext: s,
            legalTermsNodeRef: L,
            flashLegalTerms: M,
            invoiceError: k,
            planError: j,
            onPurchaseError: U,
            baseAnalyticsData: G,
            flowStartTime: B,
            trialId: Z,
            planGroup: F,
            analyticsLocation: V,
            purchaseTokenAuthState: H,
            openInvoiceId: Y,
            metadata: W,
            backButtonEligible: K,
            disablePurchase: z,
            isTrial: q = !1,
            onPaymentSourceAdd: X,
        } = e,
        {
            selectedPlan: Q,
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
        } = (0, T.JL)(),
        {
            isGift: ef,
            selectedGiftStyle: e_,
            customGiftMessage: ep,
            emojiConfetti: eh,
            soundEffect: em,
            giftRecipient: eg,
            selectedGiftingPromotionReward: eE,
        } = (0, I.wD)(),
        eb = (0, h.a5)(Q),
        ey = (0, O.MY)(eg),
        eO = {};
    (eO.gift_style = e_),
        (eO.reward_sku_ids = eb && (null == eE ? void 0 : eE.skuId) != null ? [null == eE ? void 0 : eE.skuId] : []),
        ey === O.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
            (l()(null != eg, "Gift recipient must be set at purchase review step for these gift options."),
            (eO.recipient_id = eg.id),
            (eO.custom_message = ep),
            (eO.emoji_id = null == eh ? void 0 : eh.id),
            (eO.emoji_name = (null == eh ? void 0 : eh.id) == null ? (null == eh ? void 0 : eh.surrogates) : void 0),
            (eO.sound_id = null == em ? void 0 : em.soundId));
    let ev = null == Q ? void 0 : Q.id,
        eI = (0, A.sE)(Z, J.paymentSourceId, ev),
        { analyticsLocations: eT } = (0, d.ZP)(),
        eS = (0, N.m)(er, en),
        [eA, eC] = i.useState(eI),
        [eN, eR] = i.useState(!1),
        { hasEntitlements: eP } = (0, E.H)(ev, ef),
        ew = (0, v.Ap)(J.paymentSourceId),
        eD = eP || eI,
        ex = (0, m.U)(),
        eL = (0, c.e7)([C.Z], () => C.Z.currentOrderId),
        eM = null,
        ek = null;
    if (et === P.GZQ.ONE_TIME) {
        var ej;
        l()(null != ei, "SKU must be selected for one-time purchases"),
            (eM = null != (ej = ea[ei]) ? ej : null),
            l()(null != eM, "SKU must exist and be fetched.");
        let e = eo[ei],
            t = null != en ? en : y.c;
        ek = null != e ? e[t] : null;
    }
    let eU = (0, _.Iw)(et === P.GZQ.ONE_TIME ? f.Z.getProduct(ei) : void 0),
        eG = null !== eU,
        eB = async () => {
            await (0, S.H)({
                setPurchaseState: n,
                setHasAcceptedTerms: $,
                setIsSubmitting: eC,
                setPurchaseError: ee,
                hasRedirectURL: eN,
                setHasRedirectURL: eR,
                isGift: ef,
                baseAnalyticsData: G,
                analyticsLocation: V,
                analyticsLocations: eT,
                flowStartTime: B,
                subscriptionPlan: Q,
                planGroup: F,
                trialId: Z,
                priceOptions: J,
                paymentSource: eS,
                isPrepaidPaymentPastDue: ex,
                openInvoiceId: Y,
                premiumSubscription: t,
                onNext: s,
                metadata: W,
                sku: eM,
                skuPricePreview: ek,
                purchaseType: et,
                referralCode: es,
                loadId: el.loadId,
                giftInfoOptions: eO,
                invoicePreview: ec,
                orderId: eL,
            });
        },
        eZ = {
            baseAnalyticsData: G,
            flowStartTime: B,
            makePurchase: eB,
            onNext: s,
            onPurchaseError: U,
            paymentSource: eS,
            paymentSourceId: en,
            purchaseTokenAuthState: H,
            setPurchaseState: n,
        },
        eF = i.useRef(eZ);
    i.useEffect(() => {
        eF.current = eZ;
    }),
        i.useEffect(() => {
            let { makePurchase: e } = eF.current;
            eI && !ef && null == t && e();
        }, [eI, ef, t]);
    let eV = null != Y || (et === P.GZQ.ONE_TIME && !ef),
        eH = K && !eV;
    return eI
        ? null
        : (0, r.jsxs)(u.mzw, {
              "data-migration-pending": !0,
              align: p.Z.Align.CENTER,
              className: o()({ [D.modalFooterDiscount]: eG }, ed, D.modalFooter),
              children: [
                  eG &&
                      (0, r.jsx)("img", {
                          src: x.Z,
                          alt: "",
                          className: D.discountFooterBackground,
                      }),
                  (0, r.jsx)(b.Z, {
                      legalTermsNodeRef: L,
                      invoiceError: k,
                      planError: j,
                      disablePurchase: z,
                      flashLegalTerms: M,
                      isSubmitting: eA,
                      premiumSubscription: t,
                      isGift: ef,
                      planGroup: F,
                      isPrepaid: ew,
                      isTrial: q,
                      makePurchase: eB,
                      needsPaymentSource: null == eS && !eD,
                      onNext: s,
                      inReverseTrial: eu,
                      onPaymentSourceAdd: X,
                  }),
                  (0, r.jsx)(R.Z, {
                      iconClassName: eG ? D.discountColor : null,
                      textClassName: eG ? D.discountColor : null,
                  }),
                  eH
                      ? (0, r.jsx)("div", {
                            className: D.back,
                            children: (0, r.jsx)(g.Z, {
                                onClick: a,
                                className: o()({ [D.discountColor]: eG }),
                            }),
                        })
                      : null,
                  eG &&
                      !eH &&
                      (0, r.jsx)(u.Text, {
                          variant: "text-xs/semibold",
                          className: D.discountFooterText,
                          lineClamp: 2,
                          children: w.intl.formatToPlainString(w.t.IhKBNX, { discountOfferAmount: eU }),
                      }),
              ],
          });
}
