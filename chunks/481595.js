n.d(t, { Z: () => U }), n(997841);
var r = n(255367),
    i = n(73800),
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
    S = n(695103),
    T = n(4912),
    A = n(630388),
    N = n(669079),
    C = n(987209),
    P = n(563132),
    R = n(45572),
    w = n(435020),
    D = n(119226),
    L = n(982204),
    x = n(981631),
    k = n(388032),
    M = n(808241);
function j(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)('div', {
              className: M.skuHeading,
              children: [
                  (0, r.jsx)(m.Z, { game: t }),
                  (0, r.jsx)(c.X6q, {
                      variant: 'heading-lg/bold',
                      className: M.skuHeadingText,
                      children: n.name
                  })
              ]
          });
}
function U(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: m } = e,
        { application: U, purchaseState: G, paymentSources: B, paymentSourceId: F, setHasAcceptedTerms: V, skusById: Z, skuPricePreviewsById: H, selectedSkuId: Y, isEmbeddedIAP: W, purchaseType: K, purchasePreviewError: z, devShelfFetchState: q, setPurchasePreviewError: Q, hasPaymentSources: X } = (0, P.JL)(),
        { isGift: J, giftRecipient: $ } = (0, C.wD)(),
        ee = J && (0, N.pO)($),
        { defaultPaymentSourceId: et, hasFetchedPaymentSources: en } = (0, l.cj)([v.Z], () => ({
            defaultPaymentSourceId: v.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: v.Z.hasFetchedPaymentSources
        }));
    o()(null != Y, 'Expected selectedSkuId');
    let er = Z[Y],
        ei = null == er ? void 0 : er.eligiblePaymentGateways,
        ea = H[Y],
        eo = null != F ? F : I.c,
        es = null != ea ? ea[eo] : null;
    o()(null != er, 'SKU must exist and be fetched.'), o()(null != U, 'Application must exist.');
    let el = (0, l.e7)([h.Z, S.Z], () => S.Z.inTestModeForApplication(U.id) || h.Z.inDevModeForApplication(U.id), [U.id]),
        ec = (0, l.e7)([y.Z], () => y.Z.enabled),
        eu = s.M.EEA_COUNTRIES.has(O.Z.ipCountryCodeWithFallback),
        ed = G === R.A.PURCHASING || G === R.A.COMPLETED,
        ef = (0, w.m)(B, F),
        e_ = null != ef ? ef.type : null;
    i.useEffect(() => {
        en &&
            F === et &&
            et !== I.c &&
            null == es &&
            (0, u.x2)(er.applicationId, er.id, et, { isGift: J })
                .then(() => {
                    Q(null);
                })
                .catch((e) => {
                    Q(e);
                });
    }, [et, en, F, er.applicationId, er.id, es, Q, J]);
    let ep = null != ei && ei.length > 0 && (F === I.c || null === e_) && X ? E.w.SELECT_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)('div', {
        className: M.stepBody,
        children: [
            (0, r.jsx)(E.Y, { paymentRestrictionBannerType: ep }),
            el
                ? (0, r.jsx)(
                      f.Z,
                      {
                          icon: (0, c.GSL)(T.Z),
                          iconSize: f.Z.Sizes.SMALL,
                          color: f.Z.Colors.WARNING,
                          className: M.errorBlock,
                          children: k.intl.string(k.t.OvMyMT)
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
                          className: M.errorBlock,
                          children: k.intl.string(k.t.tAmECg)
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
                children: J ? k.intl.string(k.t.PEjaCw) : k.intl.string(k.t.sail9P)
            }),
            null != es
                ? (0, r.jsx)(L.B, {
                      sku: er,
                      skuPricePreview: es
                  })
                : null == z
                  ? (0, r.jsx)(c.$jN, {
                        type: c.$jN.Type.WANDERING_CUBES,
                        className: M.invoiceSpinner
                    })
                  : (0, r.jsx)(L.E, {
                        sku: er,
                        value: ''
                    }),
            (0, r.jsxs)('div', {
                className: M.paymentSourceWrapper,
                children: [
                    (0, r.jsx)(c.vwX, {
                        tag: c.RB0.H5,
                        children: k.intl.string(k.t.mmDvV1)
                    }),
                    (0, r.jsx)(_.ZP, {
                        paymentSources: Object.values(B),
                        selectedPaymentSourceId: F,
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
                    onChange: V,
                    forceShow: !0,
                    showWithdrawalWaiver: eu,
                    disabled: ed,
                    subscriptionPlan: null,
                    finePrintClassname: M.fineprint,
                    purchaseType: K,
                    isGift: J,
                    checkboxLabel: er.productLine === x.POd.COLLECTIBLES ? k.intl.format(k.t['1EdAlZ'], { paidURL: x.EYA.PAID_TERMS }) : void 0,
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
