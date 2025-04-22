n.d(t, { Z: () => U }), n(997841);
var r = n(200651),
    i = n(192379),
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
    v = n(351402),
    O = n(853872),
    I = n(855775),
    S = n(695103),
    T = n(4912),
    A = n(630388),
    N = n(669079),
    C = n(987209),
    R = n(563132),
    P = n(45572),
    w = n(435020),
    D = n(119226),
    L = n(982204),
    x = n(981631),
    M = n(388032),
    k = n(718578);
function j(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)('div', {
              className: k.skuHeading,
              children: [
                  (0, r.jsx)(m.Z, { game: t }),
                  (0, r.jsx)(c.X6q, {
                      variant: 'heading-lg/bold',
                      className: k.skuHeadingText,
                      children: n.name
                  })
              ]
          });
}
function U(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: m } = e,
        { application: U, purchaseState: G, paymentSources: B, paymentSourceId: V, setHasAcceptedTerms: F, skusById: Z, skuPricePreviewsById: H, selectedSkuId: Y, isEmbeddedIAP: W, purchaseType: K, purchasePreviewError: z, devShelfFetchState: q, setPurchasePreviewError: Q, hasPaymentSources: X } = (0, R.JL)(),
        { isGift: J, giftRecipient: $ } = (0, C.wD)(),
        ee = J && (0, N.pO)($),
        { defaultPaymentSourceId: et, hasFetchedPaymentSources: en } = (0, l.cj)([O.Z], () => ({
            defaultPaymentSourceId: O.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: O.Z.hasFetchedPaymentSources
        }));
    o()(null != Y, 'Expected selectedSkuId');
    let er = Z[Y],
        ei = null == er ? void 0 : er.eligiblePaymentGateways,
        ea = H[Y],
        eo = null != V ? V : I.c,
        es = null != ea ? ea[eo] : null;
    o()(null != er, 'SKU must exist and be fetched.'), o()(null != U, 'Application must exist.');
    let el = (0, l.e7)([h.Z, S.Z], () => S.Z.inTestModeForApplication(U.id) || h.Z.inDevModeForApplication(U.id), [U.id]),
        ec = (0, l.e7)([y.Z], () => y.Z.enabled),
        eu = s.M.EEA_COUNTRIES.has(v.Z.ipCountryCodeWithFallback),
        ed = G === P.A.PURCHASING || G === P.A.COMPLETED,
        ef = (0, w.m)(B, V),
        e_ = null != ef ? ef.type : null;
    i.useEffect(() => {
        en &&
            V === et &&
            et !== I.c &&
            null == es &&
            (0, u.x2)(er.applicationId, er.id, et, { isGift: J })
                .then(() => {
                    Q(null);
                })
                .catch((e) => {
                    Q(e);
                });
    }, [et, en, V, er.applicationId, er.id, es, Q, J]);
    let ep = null != ei && ei.length > 0 && (V === I.c || null === e_) && X ? E.w.SELECT_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)('div', {
        className: k.stepBody,
        children: [
            (0, r.jsx)(E.Y, { paymentRestrictionBannerType: ep }),
            el
                ? (0, r.jsx)(
                      f.Z,
                      {
                          icon: (0, c.GSL)(T.Z),
                          iconSize: f.Z.Sizes.SMALL,
                          color: f.Z.Colors.WARNING,
                          className: k.errorBlock,
                          children: M.intl.string(M.t.OvMyMT)
                      },
                      'TEST_MODE'
                  )
                : null,
            (0, A.yE)(U.flags, x.udG.EMBEDDED) && q === h.O.ERROR
                ? (0, r.jsx)(
                      f.Z,
                      {
                          icon: (0, c.GSL)(T.Z),
                          iconSize: f.Z.Sizes.SMALL,
                          color: f.Z.Colors.ERROR,
                          className: k.errorBlock,
                          children: M.intl.string(M.t.tAmECg)
                      },
                      'DEV_SHELF_ERROR'
                  )
                : null,
            (0, r.jsx)(j, {
                application: U,
                sku: er,
                isEmbeddedIAP: W
            }),
            ee && (0, r.jsx)(D.Z, { sku: er }),
            null != $ ? (0, r.jsx)(b.s, { giftRecipient: $ }) : null,
            (0, r.jsx)(c.vwX, {
                tag: c.RB0.H5,
                children: J ? M.intl.string(M.t.PEjaCw) : M.intl.string(M.t.sail9P)
            }),
            null != es
                ? (0, r.jsx)(L.B, {
                      sku: er,
                      skuPricePreview: es
                  })
                : null == z
                  ? (0, r.jsx)(c.$jN, {
                        type: c.$jN.Type.WANDERING_CUBES,
                        className: k.invoiceSpinner
                    })
                  : (0, r.jsx)(L.E, {
                        sku: er,
                        value: ''
                    }),
            (0, r.jsxs)('div', {
                className: k.paymentSourceWrapper,
                children: [
                    (0, r.jsx)(c.vwX, {
                        tag: c.RB0.H5,
                        children: M.intl.string(M.t.mmDvV1)
                    }),
                    (0, r.jsx)(_.ZP, {
                        paymentSources: Object.values(B),
                        selectedPaymentSourceId: V,
                        onChange: a,
                        onPaymentSourceAdd: m,
                        hidePersonalInformation: ec,
                        paymentGatewayRestrictions: ei
                    })
                ]
            }),
            (0, r.jsx)(g.Z, {
                isActive: t,
                ref: n,
                children: (0, r.jsx)(p.Z, {
                    onChange: F,
                    forceShow: !0,
                    showWithdrawalWaiver: eu,
                    disabled: ed,
                    subscriptionPlan: null,
                    finePrintClassname: k.fineprint,
                    purchaseType: K,
                    isGift: J,
                    checkboxLabel: er.productLine === x.POd.COLLECTIBLES ? M.intl.format(M.t['1EdAlZ'], { paidURL: x.EYA.PAID_TERMS }) : void 0,
                    finePrint: (0, r.jsx)(d.Z, {
                        paymentSourceType: e_,
                        isEmbeddedIAP: W,
                        purchaseType: K,
                        productLine: er.productLine,
                        isGift: J
                    })
                })
            })
        ]
    });
}
