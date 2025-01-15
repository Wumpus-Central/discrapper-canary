t.d(n, {
    Z: function () {
        return O;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(512722),
    s = t.n(r),
    a = t(442837),
    c = t(481060),
    o = t(355467),
    u = t(906732),
    d = t(600164),
    m = t(717401),
    p = t(160913),
    x = t(311821),
    h = t(459965),
    f = t(858987),
    v = t(975060),
    g = t(882712),
    S = t(855775),
    E = t(626135),
    j = t(669079),
    y = t(74538),
    P = t(987209),
    I = t(563132),
    T = t(632580),
    N = t(45572),
    b = t(919778),
    C = t(612853),
    _ = t(981631),
    Z = t(590826);
function O(e) {
    let { premiumSubscription: n, setPurchaseState: t, onBack: r, onNext: O, legalTermsNodeRef: A, flashLegalTerms: R, invoiceError: w, planError: M, onPurchaseError: L, baseAnalyticsData: k, flowStartTime: F, trialId: D, planGroup: U, analyticsLocation: B, purchaseTokenAuthState: G, openInvoiceId: H, metadata: W, backButtonEligible: V, disablePurchase: z, isTrial: K = !1 } = e,
        { selectedPlan: Y, priceOptions: X, setHasAcceptedTerms: q, setPurchaseError: J, purchaseType: Q, paymentSourceId: $, paymentSources: ee, selectedSkuId: en, skusById: et, skuPricePreviewsById: ei, referralCode: el, contextMetadata: er, invoicePreview: es, inReverseTrial: ea } = (0, I.usePaymentContext)(),
        { isGift: ec, selectedGiftStyle: eo, customGiftMessage: eu, emojiConfetti: ed, soundEffect: em, giftRecipient: ep, selectedGiftingPromotionReward: ex } = (0, P.wD)(),
        eh = (0, m.a5)(Y),
        ef = (0, j.MY)(ep),
        ev = {};
    (ev.gift_style = eo), (ev.reward_sku_ids = eh && (null == ex ? void 0 : ex.skuId) != null ? [null == ex ? void 0 : ex.skuId] : []), ef === j.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (s()(null != ep, 'Gift recipient must be set at purchase review step for these gift options.'), (ev.recipient_id = ep.id), (ev.custom_message = eu), (ev.emoji_id = null == ed ? void 0 : ed.id), (ev.emoji_name = (null == ed ? void 0 : ed.id) == null ? (null == ed ? void 0 : ed.surrogates) : void 0), (ev.sound_id = null == em ? void 0 : em.soundId));
    let eg = null == Y ? void 0 : Y.id,
        eS = (0, b.sE)(D, X.paymentSourceId, eg),
        eE = (0, a.e7)([v.Z], () => v.Z.popupCallbackCalled),
        { analyticsLocations: ej } = (0, u.ZP)(),
        ey = null != $ ? ee[$] : null,
        [eP, eI] = l.useState(eS),
        [eT, eN] = l.useState(!1),
        { hasEntitlements: eb } = (0, h.H)(eg, ec),
        eC = (0, y.Ap)(X.paymentSourceId),
        e_ = eb || eS,
        eZ = (0, p.U)(),
        eO = null,
        eA = null;
    if (Q === _.GZQ.ONE_TIME) {
        var eR;
        s()(null != en, 'SKU must be selected for one-time purchases'), (eO = null !== (eR = et[en]) && void 0 !== eR ? eR : null), s()(null != eO, 'SKU must exist and be fetched.');
        let e = ei[en],
            n = null != $ ? $ : S.c;
        eA = null != e ? e[n] : null;
    }
    let ew = async () => {
            await (0, T.H)({
                setPurchaseState: t,
                setHasAcceptedTerms: q,
                setIsSubmitting: eI,
                setPurchaseError: J,
                hasRedirectURL: eT,
                setHasRedirectURL: eN,
                isGift: ec,
                baseAnalyticsData: k,
                analyticsLocation: B,
                analyticsLocations: ej,
                flowStartTime: F,
                subscriptionPlan: Y,
                planGroup: U,
                trialId: D,
                priceOptions: X,
                paymentSource: ey,
                isPrepaidPaymentPastDue: eZ,
                openInvoiceId: H,
                premiumSubscription: n,
                onNext: O,
                metadata: W,
                sku: eO,
                skuPricePreview: eA,
                purchaseType: Q,
                referralCode: el,
                loadId: er.loadId,
                giftInfoOptions: ev,
                invoicePreview: es
            });
        },
        eM = {
            baseAnalyticsData: k,
            flowStartTime: F,
            makePurchase: ew,
            onNext: O,
            onPurchaseError: L,
            paymentSource: ey,
            paymentSourceId: $,
            purchaseTokenAuthState: G,
            setPurchaseState: t
        },
        eL = l.useRef(eM);
    l.useEffect(() => {
        eL.current = eM;
    }),
        l.useEffect(() => {
            let { baseAnalyticsData: e, flowStartTime: n, makePurchase: t, onNext: i, onPurchaseError: l, paymentSource: r, paymentSourceId: s, purchaseTokenAuthState: a, setPurchaseState: c } = eL.current;
            (async () => {
                if (!0 === eE)
                    try {
                        if (null == v.Z.redirectedPaymentId) return;
                        await (0, o.OP)(v.Z.redirectedPaymentId), c(N.A.COMPLETED), i();
                    } catch (t) {
                        c(N.A.FAIL),
                            l(t),
                            E.default.track(_.rMx.PAYMENT_FLOW_FAILED, {
                                ...e,
                                payment_error_code: null == t ? void 0 : t.code,
                                payment_source_id: s,
                                payment_source_type: null == r ? void 0 : r.type,
                                duration_ms: Date.now() - n
                            });
                    } finally {
                        eI(!1), (0, o.K2)();
                    }
                else a === g.I.SUCCESS && (await t());
            })();
        }, [eE]),
        l.useEffect(() => {
            let { makePurchase: e } = eL.current;
            eS && !ec && null == n && e();
        }, [eS, ec, n]);
    let ek = null != H || (Q === _.GZQ.ONE_TIME && !ec);
    return eS
        ? null
        : (0, i.jsxs)(c.ModalFooter, {
              align: d.Z.Align.CENTER,
              children: [
                  (0, i.jsx)(f.Z, {
                      legalTermsNodeRef: A,
                      invoiceError: w,
                      planError: M,
                      disablePurchase: z,
                      flashLegalTerms: R,
                      isSubmitting: eP,
                      premiumSubscription: n,
                      isGift: ec,
                      planGroup: U,
                      isPrepaid: eC,
                      isTrial: K,
                      makePurchase: ew,
                      needsPaymentSource: null == ey && !e_,
                      onNext: O,
                      inReverseTrial: ea
                  }),
                  (0, i.jsx)(C.Z, {}),
                  V && !ek
                      ? (0, i.jsx)('div', {
                            className: Z.back,
                            children: (0, i.jsx)(x.Z, { onClick: r })
                        })
                      : null
              ]
          });
}
