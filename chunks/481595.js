n.d(t, { Z: () => U }), n(997841);
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
    g = n(925329),
    E = n(314182),
    b = n(396955),
    y = n(251660),
    O = n(246946),
    v = n(351402),
    I = n(853872),
    T = n(855775),
    S = n(695103),
    A = n(4912),
    C = n(669079),
    N = n(987209),
    R = n(563132),
    P = n(45572),
    D = n(435020),
    w = n(119226),
    L = n(982204),
    x = n(981631),
    M = n(388032),
    k = n(416439);
function j(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)("div", {
              className: k.skuHeading,
              children: [
                  (0, r.jsx)(g.Z, { game: t }),
                  (0, r.jsx)(u.Heading, {
                      variant: "heading-lg/bold",
                      className: k.skuHeadingText,
                      children: n.name,
                  }),
              ],
          });
}
function U(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: g } = e,
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
        { defaultPaymentSourceId: et, hasFetchedPaymentSources: en } = (0, c.cj)([I.Z], () => ({
            defaultPaymentSourceId: I.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: I.Z.hasFetchedPaymentSources,
        }));
    o()(null != Y, "Expected selectedSkuId");
    let er = V[Y],
        ei = null == er ? void 0 : er.eligiblePaymentGateways,
        ea = H[Y],
        eo = null != Z ? Z : T.c,
        es = null != ea ? ea[eo] : null;
    o()(null != er, "SKU must exist and be fetched."), o()(null != U, "Application must exist.");
    let el = (0, c.e7)([m.Z, S.Z], () => S.Z.inTestModeForApplication(U.id) || m.Z.inDevModeForApplication(U.id), [
            U.id,
        ]),
        ec = (0, c.e7)([O.Z], () => O.Z.enabled),
        eu = s.M.EEA_COUNTRIES.has(v.Z.ipCountryCodeWithFallback),
        ed = G === P.A.PURCHASING || G === P.A.COMPLETED,
        ef = (0, D.m)(B, Z),
        e_ = null != ef ? ef.type : null;
    i.useEffect(() => {
        en &&
            Z === et &&
            et !== T.c &&
            null == es &&
            (0, d.x2)(er.applicationId, er.id, et, { isGift: J })
                .then(() => {
                    X(null);
                })
                .catch((e) => {
                    X(e);
                });
    }, [et, en, Z, er.applicationId, er.id, es, X, J]);
    let ep = null != ei && ei.length > 0 && (Z === T.c || null === e_) && Q ? b.w.SELECT_PAYMENT_METHOD : void 0,
        eh = er.productLine === x.POd.SOCIAL_LAYER_GAME_ITEM,
        em = ee && !eh;
    return (0, r.jsxs)("div", {
        className: k.stepBody,
        children: [
            (0, r.jsx)(b.Y, { paymentRestrictionBannerType: ep }),
            el
                ? (0, r.jsx)(
                      _.Z,
                      {
                          icon: (0, u.GSL)(A.Z),
                          iconSize: _.Z.Sizes.SMALL,
                          color: _.Z.Colors.WARNING,
                          className: k.errorBlock,
                          children: M.intl.string(M.t.OvMyMd),
                      },
                      "TEST_MODE",
                  )
                : null,
            (0, l.yE)(U.flags, x.udG.EMBEDDED) && q === m.O.ERROR
                ? (0, r.jsx)(
                      _.Z,
                      {
                          icon: (0, u.GSL)(A.Z),
                          iconSize: _.Z.Sizes.SMALL,
                          color: _.Z.Colors.ERROR,
                          className: k.errorBlock,
                          children: M.intl.string(M.t.tAmECt),
                      },
                      "DEV_SHELF_ERROR",
                  )
                : null,
            (0, r.jsx)(j, {
                application: U,
                sku: er,
                isEmbeddedIAP: W,
            }),
            em && (0, r.jsx)(w.Z, { sku: er }),
            null != $ ? (0, r.jsx)(y.s, { giftRecipient: $ }) : null,
            (0, r.jsx)(u.gNt, {
                label: J ? M.intl.string(M.t.PEjaCx) : M.intl.string(M.t.sail9P),
                children:
                    null != es
                        ? (0, r.jsx)(L.B, {
                              sku: er,
                              skuPricePreview: es,
                              application: U,
                          })
                        : null == z
                          ? (0, r.jsx)(u.$jN, {
                                type: u.$jN.Type.WANDERING_CUBES,
                                className: k.invoiceSpinner,
                            })
                          : (0, r.jsx)(L.E, {
                                sku: er,
                                value: "",
                            }),
            }),
            (0, r.jsx)(p.ZP, {
                label: M.intl.string(M.t["mmDvV+"]),
                paymentSources: Object.values(B),
                selectedPaymentSourceId: Z,
                onChange: a,
                onPaymentSourceAdd: g,
                hidePersonalInformation: ec,
                paymentGatewayRestrictions: ei,
            }),
            (0, r.jsxs)(E.Z, {
                isActive: t,
                ref: n,
                children: [
                    (0, r.jsx)(h.Z, {
                        onChange: F,
                        forceShow: !0,
                        showWithdrawalWaiver: eu,
                        disabled: ed,
                        subscriptionPlan: null,
                        finePrintClassname: k.fineprint,
                        purchaseType: K,
                        isGift: J,
                        finePrint: (0, r.jsx)(f.Z, {
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
