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
    _ = n(609194),
    p = n(275850),
    h = n(672971),
    m = n(115130),
    g = n(535139),
    E = n(925329),
    b = n(314182),
    y = n(396955),
    O = n(251660),
    v = n(246946),
    I = n(351402),
    T = n(853872),
    S = n(855775),
    A = n(695103),
    C = n(4912),
    N = n(669079),
    R = n(987209),
    P = n(563132),
    D = n(45572),
    w = n(435020),
    L = n(119226),
    x = n(982204),
    M = n(981631),
    k = n(388032),
    j = n(416439);
function U(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: j.skuHeading,
              children: [
                  (0, r.jsx)(E.Z, { game: t }),
                  (0, r.jsx)(u.Heading, {
                      variant: "heading-lg/bold",
                      className: j.skuHeadingText,
                      children: n.name,
                  }),
              ],
          });
}
function G(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: E } = e,
        {
            application: G,
            purchaseState: B,
            paymentSources: Z,
            paymentSourceId: F,
            setHasAcceptedTerms: V,
            skusById: H,
            skuPricePreviewsById: Y,
            selectedSkuId: W,
            isEmbeddedIAP: K,
            purchaseType: z,
            purchasePreviewError: q,
            devShelfFetchState: X,
            setPurchasePreviewError: Q,
            hasPaymentSources: J,
        } = (0, P.JL)(),
        { isGift: $, giftRecipient: ee } = (0, R.wD)(),
        et = $ && (0, N.pO)(ee),
        { fetched: en, hasAlreadyLinked: er } = (0, g.F)(G),
        { defaultPaymentSourceId: ei, hasFetchedPaymentSources: ea } = (0, c.cj)([T.Z], () => ({
            defaultPaymentSourceId: T.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: T.Z.hasFetchedPaymentSources,
        }));
    o()(null != W, "Expected selectedSkuId");
    let eo = H[W],
        es = null == eo ? void 0 : eo.eligiblePaymentGateways,
        el = Y[W],
        ec = null != F ? F : S.c,
        eu = null != el ? el[ec] : null;
    o()(null != eo, "SKU must exist and be fetched."), o()(null != G, "Application must exist.");
    let ed = (0, c.e7)([m.Z, A.Z], () => A.Z.inTestModeForApplication(G.id) || m.Z.inDevModeForApplication(G.id), [
            G.id,
        ]),
        ef = (0, c.e7)([v.Z], () => v.Z.enabled),
        e_ = s.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
        ep = B === D.A.PURCHASING || B === D.A.COMPLETED,
        eh = (0, w.m)(Z, F),
        em = null != eh ? eh.type : null;
    i.useEffect(() => {
        ea &&
            F === ei &&
            ei !== S.c &&
            null == eu &&
            (0, d.x2)(eo.applicationId, eo.id, ei, { isGift: $ })
                .then(() => {
                    Q(null);
                })
                .catch((e) => {
                    Q(e);
                });
    }, [ei, ea, F, eo.applicationId, eo.id, eu, Q, $]);
    let eg = null != es && es.length > 0 && (F === S.c || null === em) && J ? y.w.SELECT_PAYMENT_METHOD : void 0,
        eE = eo.productLine === M.POd.SOCIAL_LAYER_GAME_ITEM,
        eb = et && !eE;
    return (0, r.jsxs)("div", {
        className: j.stepBody,
        children: [
            (0, r.jsx)(y.Y, { paymentRestrictionBannerType: eg }),
            ed
                ? (0, r.jsx)(
                      _.Z,
                      {
                          icon: (0, u.GSL)(C.Z),
                          iconSize: _.Z.Sizes.SMALL,
                          color: _.Z.Colors.WARNING,
                          className: j.errorBlock,
                          children: k.intl.string(k.t.OvMyMd),
                      },
                      "TEST_MODE",
                  )
                : null,
            (0, l.yE)(G.flags, M.udG.EMBEDDED) && X === m.O.ERROR
                ? (0, r.jsx)(
                      _.Z,
                      {
                          icon: (0, u.GSL)(C.Z),
                          iconSize: _.Z.Sizes.SMALL,
                          color: _.Z.Colors.ERROR,
                          className: j.errorBlock,
                          children: k.intl.string(k.t.tAmECt),
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(U, {
                application: G,
                sku: eo,
                isEmbeddedIAP: K,
            }),
            eb && (0, r.jsx)(L.Z, { sku: eo }),
            null != ee ? (0, r.jsx)(O.s, { giftRecipient: ee }) : null,
            (0, r.jsx)(u.gNt, {
                label: $ ? k.intl.string(k.t.PEjaCx) : k.intl.string(k.t.sail9P),
                children:
                    null != eu
                        ? (0, r.jsx)(x.B, {
                              sku: eo,
                              skuPricePreview: eu,
                              application: G,
                          })
                        : null == q
                          ? (0, r.jsx)(u.$jN, {
                                type: u.$jN.Type.WANDERING_CUBES,
                                className: j.invoiceSpinner,
                            })
                          : (0, r.jsx)(x.E, {
                                sku: eo,
                                value: "",
                            }),
            }),
            (0, r.jsx)(p.ZP, {
                label: k.intl.string(k.t["mmDvV+"]),
                paymentSources: Object.values(Z),
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
                    (0, r.jsx)(h.Z, {
                        onChange: V,
                        forceShow: !0,
                        showWithdrawalWaiver: e_,
                        disabled: ep,
                        subscriptionPlan: null,
                        finePrintClassname: j.fineprint,
                        purchaseType: z,
                        isGift: $,
                        finePrint: (0, r.jsx)(f.Z, {
                            paymentSourceType: em,
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
                            className: j.socialLayerGameItemDisclaimer,
                            children: (0, r.jsx)(u.M14, {
                                type: "warning",
                                children: k.intl.string(k.t["6fBC//"]),
                            }),
                        }),
                ],
            }),
        ],
    });
}
