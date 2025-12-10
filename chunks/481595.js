n.d(t, { Z: () => G }), n(997841);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(742280),
    l = n(95015),
    c = n(399606),
    u = n(481060),
    d = n(16084),
    f = n(224550),
    p = n(609194),
    _ = n(275850),
    m = n(672971),
    h = n(115130),
    g = n(524995),
    E = n(925329),
    b = n(314182),
    y = n(396955),
    O = n(251660),
    v = n(246946),
    S = n(351402),
    I = n(853872),
    T = n(855775),
    C = n(695103),
    A = n(4912),
    N = n(669079),
    P = n(987209),
    R = n(563132),
    D = n(45572),
    w = n(435020),
    x = n(119226),
    L = n(982204),
    j = n(981631),
    M = n(388032),
    k = n(416439);
function U(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: k.skuHeading,
              children: [
                  (0, r.jsx)(E.Z, { game: t }),
                  (0, r.jsx)(u.Heading, {
                      variant: "heading-lg/bold",
                      className: k.skuHeadingText,
                      children: n.name,
                  }),
              ],
          });
}
function G(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: E } = e,
        {
            application: G,
            purchaseState: Z,
            paymentSources: B,
            paymentSourceId: F,
            setHasAcceptedTerms: V,
            skusById: H,
            skuPricePreviewsById: Y,
            selectedSkuId: W,
            isEmbeddedIAP: K,
            purchaseType: z,
            purchasePreviewError: q,
            devShelfFetchState: Q,
            setPurchasePreviewError: X,
            hasPaymentSources: J,
        } = (0, R.JL)(),
        { isGift: $, giftRecipient: ee } = (0, P.wD)(),
        et = $ && (0, N.pO)(ee),
        { fetched: en, hasAlreadyLinked: er } = (0, g.F)(G),
        { defaultPaymentSourceId: ei, hasFetchedPaymentSources: ea } = (0, c.cj)([I.Z], () => ({
            defaultPaymentSourceId: I.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: I.Z.hasFetchedPaymentSources,
        }));
    o()(null != W, "Expected selectedSkuId");
    let eo = H[W],
        es = null == eo ? void 0 : eo.eligiblePaymentGateways,
        el = Y[W],
        ec = null != F ? F : T.c,
        eu = null != el ? el[ec] : null;
    o()(null != eo, "SKU must exist and be fetched."), o()(null != G, "Application must exist.");
    let ed = (0, c.e7)([h.Z, C.Z], () => C.Z.inTestModeForApplication(G.id) || h.Z.inDevModeForApplication(G.id), [
            G.id,
        ]),
        ef = (0, c.e7)([v.Z], () => v.Z.enabled),
        ep = s.M.EEA_COUNTRIES.has(S.Z.ipCountryCodeWithFallback),
        e_ = Z === D.A.PURCHASING || Z === D.A.COMPLETED,
        em = (0, w.m)(B, F),
        eh = null != em ? em.type : null;
    i.useEffect(() => {
        ea &&
            F === ei &&
            ei !== T.c &&
            null == eu &&
            (0, d.x2)(eo.applicationId, eo.id, ei, { isGift: $ })
                .then(() => {
                    X(null);
                })
                .catch((e) => {
                    X(e);
                });
    }, [ei, ea, F, eo.applicationId, eo.id, eu, X, $]);
    let eg = null != es && es.length > 0 && (F === T.c || null === eh) && J ? y.w.SELECT_PAYMENT_METHOD : void 0,
        eE = eo.productLine === j.POd.SOCIAL_LAYER_GAME_ITEM,
        eb = et && !eE;
    return (0, r.jsxs)("div", {
        className: k.stepBody,
        children: [
            (0, r.jsx)(y.Y, { paymentRestrictionBannerType: eg }),
            ed
                ? (0, r.jsx)(
                      p.Z,
                      {
                          icon: (0, u.GSL)(A.Z),
                          iconSize: p.Z.Sizes.SMALL,
                          color: p.Z.Colors.WARNING,
                          className: k.errorBlock,
                          children: M.intl.string(M.t.OvMyMd),
                      },
                      "TEST_MODE",
                  )
                : null,
            (0, l.yE)(G.flags, j.udG.EMBEDDED) && Q === h.O.ERROR
                ? (0, r.jsx)(
                      p.Z,
                      {
                          icon: (0, u.GSL)(A.Z),
                          iconSize: p.Z.Sizes.SMALL,
                          color: p.Z.Colors.ERROR,
                          className: k.errorBlock,
                          children: M.intl.string(M.t.tAmECt),
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(U, {
                application: G,
                sku: eo,
                isEmbeddedIAP: K,
            }),
            eb && (0, r.jsx)(x.Z, { sku: eo }),
            null != ee ? (0, r.jsx)(O.s, { giftRecipient: ee }) : null,
            (0, r.jsx)(u.gNt, {
                label: $ ? M.intl.string(M.t.PEjaCx) : M.intl.string(M.t.sail9P),
                children:
                    null != eu
                        ? (0, r.jsx)(L.B, {
                              sku: eo,
                              skuPricePreview: eu,
                              application: G,
                          })
                        : null == q
                          ? (0, r.jsx)(u.$jN, {
                                type: u.$jN.Type.WANDERING_CUBES,
                                className: k.invoiceSpinner,
                            })
                          : (0, r.jsx)(L.E, {
                                sku: eo,
                                value: "",
                            }),
            }),
            (0, r.jsx)(_.ZP, {
                label: M.intl.string(M.t["mmDvV+"]),
                paymentSources: Object.values(B),
                selectedPaymentSourceId: F,
                onChange: a,
                onPaymentSourceAdd: E,
                hidePersonalInformation: ef,
                paymentGatewayRestrictions: es,
            }),
            (0, r.jsxs)(b.Z, {
                isActive: t,
                ref: n,
                children: [
                    (0, r.jsx)(m.Z, {
                        onChange: V,
                        forceShow: !0,
                        showWithdrawalWaiver: ep,
                        disabled: e_,
                        subscriptionPlan: null,
                        finePrintClassname: k.fineprint,
                        purchaseType: z,
                        isGift: $,
                        finePrint: (0, r.jsx)(f.Z, {
                            paymentSourceType: eh,
                            isEmbeddedIAP: K,
                            purchaseType: z,
                            productLine: eo.productLine,
                            isGift: $,
                            applicationName: G.name,
                            hasAlreadyLinked: !en || er,
                        }),
                    }),
                    eE &&
                        en &&
                        !er &&
                        !$ &&
                        (0, r.jsx)("div", {
                            className: k.socialLayerGameItemDisclaimer,
                            children: (0, r.jsx)(u.M14, {
                                type: "warning",
                                children: M.intl.string(M.t["6fBC//"]),
                            }),
                        }),
                ],
            }),
        ],
    });
}
