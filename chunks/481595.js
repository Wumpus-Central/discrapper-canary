n.d(t, { Z: () => U }), n(997841);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(742280),
    l = n(399606),
    c = n(481060),
    u = n(16084),
    d = n(224550),
    f = n(609194),
    _ = n(275850),
    p = n(672971),
    h = n(115130),
    m = n(925329),
    g = n(314182),
    E = n(396955),
    b = n(251660),
    y = n(246946),
    O = n(351402),
    v = n(853872),
    I = n(855775),
    T = n(695103),
    S = n(4912),
    A = n(630388),
    C = n(669079),
    N = n(987209),
    R = n(563132),
    P = n(45572),
    D = n(435020),
    w = n(119226),
    L = n(982204),
    x = n(981631),
    M = n(388032),
    j = n(138475);
function k(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: j.skuHeading,
              children: [
                  (0, r.jsx)(m.Z, { game: t }),
                  (0, r.jsx)(c.Heading, {
                      variant: "heading-lg/bold",
                      className: j.skuHeadingText,
                      children: n.name,
                  }),
              ],
          });
}
function U(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: m } = e,
        {
            application: U,
            purchaseState: G,
            paymentSources: B,
            paymentSourceId: Z,
            setHasAcceptedTerms: F,
            skusById: V,
            skuPricePreviewsById: H,
            selectedSkuId: Y,
            isEmbeddedIAP: W,
            purchaseType: K,
            purchasePreviewError: z,
            devShelfFetchState: q,
            setPurchasePreviewError: X,
            hasPaymentSources: Q,
        } = (0, R.JL)(),
        { isGift: J, giftRecipient: $ } = (0, N.wD)(),
        ee = J && (0, C.pO)($),
        { defaultPaymentSourceId: et, hasFetchedPaymentSources: en } = (0, l.cj)([v.Z], () => ({
            defaultPaymentSourceId: v.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: v.Z.hasFetchedPaymentSources,
        }));
    o()(null != Y, "Expected selectedSkuId");
    let er = V[Y],
        ei = null == er ? void 0 : er.eligiblePaymentGateways,
        ea = H[Y],
        eo = null != Z ? Z : I.c,
        es = null != ea ? ea[eo] : null;
    o()(null != er, "SKU must exist and be fetched."), o()(null != U, "Application must exist.");
    let el = (0, l.e7)([h.Z, T.Z], () => T.Z.inTestModeForApplication(U.id) || h.Z.inDevModeForApplication(U.id), [
            U.id,
        ]),
        ec = (0, l.e7)([y.Z], () => y.Z.enabled),
        eu = s.M.EEA_COUNTRIES.has(O.Z.ipCountryCodeWithFallback),
        ed = G === P.A.PURCHASING || G === P.A.COMPLETED,
        ef = (0, D.m)(B, Z),
        e_ = null != ef ? ef.type : null;
    i.useEffect(() => {
        en &&
            Z === et &&
            et !== I.c &&
            null == es &&
            (0, u.x2)(er.applicationId, er.id, et, { isGift: J })
                .then(() => {
                    X(null);
                })
                .catch((e) => {
                    X(e);
                });
    }, [et, en, Z, er.applicationId, er.id, es, X, J]);
    let ep = null != ei && ei.length > 0 && (Z === I.c || null === e_) && Q ? E.w.SELECT_PAYMENT_METHOD : void 0,
        eh = er.productLine === x.POd.SOCIAL_LAYER_GAME_ITEM,
        em = ee && !eh;
    return (0, r.jsxs)("div", {
        className: j.stepBody,
        children: [
            (0, r.jsx)(E.Y, { paymentRestrictionBannerType: ep }),
            el
                ? (0, r.jsx)(
                      f.Z,
                      {
                          icon: (0, c.GSL)(S.Z),
                          iconSize: f.Z.Sizes.SMALL,
                          color: f.Z.Colors.WARNING,
                          className: j.errorBlock,
                          children: M.intl.string(M.t.OvMyMd),
                      },
                      "TEST_MODE",
                  )
                : null,
            (0, A.yE)(U.flags, x.udG.EMBEDDED) && q === h.O.ERROR
                ? (0, r.jsx)(
                      f.Z,
                      {
                          icon: (0, c.GSL)(S.Z),
                          iconSize: f.Z.Sizes.SMALL,
                          color: f.Z.Colors.ERROR,
                          className: j.errorBlock,
                          children: M.intl.string(M.t.tAmECt),
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(k, {
                application: U,
                sku: er,
                isEmbeddedIAP: W,
            }),
            em && (0, r.jsx)(w.Z, { sku: er }),
            null != $ ? (0, r.jsx)(b.s, { giftRecipient: $ }) : null,
            (0, r.jsx)(c.gNt, {
                label: J ? M.intl.string(M.t.PEjaCx) : M.intl.string(M.t.sail9P),
                children:
                    null != es
                        ? (0, r.jsx)(L.B, {
                              sku: er,
                              skuPricePreview: es,
                              application: U,
                          })
                        : null == z
                          ? (0, r.jsx)(c.$jN, {
                                type: c.$jN.Type.WANDERING_CUBES,
                                className: j.invoiceSpinner,
                            })
                          : (0, r.jsx)(L.E, {
                                sku: er,
                                value: "",
                            }),
            }),
            (0, r.jsx)(_.ZP, {
                label: M.intl.string(M.t["mmDvV+"]),
                paymentSources: Object.values(B),
                selectedPaymentSourceId: Z,
                onChange: a,
                onPaymentSourceAdd: m,
                hidePersonalInformation: ec,
                paymentGatewayRestrictions: ei,
            }),
            (0, r.jsxs)(g.Z, {
                isActive: t,
                ref: n,
                children: [
                    (0, r.jsx)(p.Z, {
                        onChange: F,
                        forceShow: !0,
                        showWithdrawalWaiver: eu,
                        disabled: ed,
                        subscriptionPlan: null,
                        finePrintClassname: j.fineprint,
                        purchaseType: K,
                        isGift: J,
                        finePrint: (0, r.jsx)(d.Z, {
                            paymentSourceType: e_,
                            isEmbeddedIAP: W,
                            purchaseType: K,
                            productLine: er.productLine,
                            isGift: J,
                            applicationName: U.name,
                        }),
                    }),
                    eh &&
                        (0, r.jsx)("div", {
                            className: j.socialLayerGameItemDisclaimer,
                            children: (0, r.jsx)(c.M14, {
                                type: "warning",
                                children: M.intl.string(M.t["6fBC//"]),
                            }),
                        }),
                ],
            }),
        ],
    });
}
