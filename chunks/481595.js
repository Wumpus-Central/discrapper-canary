n.d(t, { Z: () => j }), n(997841);
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
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
    E = n(251660),
    b = n(246946),
    y = n(351402),
    v = n(853872),
    O = n(855775),
    I = n(695103),
    S = n(4912),
    T = n(630388),
    N = n(669079),
    A = n(987209),
    C = n(563132),
    R = n(45572),
    P = n(435020),
    w = n(119226),
    D = n(982204),
    L = n(981631),
    x = n(388032),
    M = n(808241);
function k(e) {
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
function j(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: o, handlePaymentSourceAdd: m } = e,
        { application: j, purchaseState: U, paymentSources: G, paymentSourceId: B, setHasAcceptedTerms: F, skusById: V, skuPricePreviewsById: Z, selectedSkuId: H, isEmbeddedIAP: W, purchaseType: Y, purchasePreviewError: K, devShelfFetchState: z, setPurchasePreviewError: q } = (0, C.JL)(),
        { isGift: Q, giftRecipient: X } = (0, A.wD)(),
        J = Q && (0, N.pO)(X),
        { defaultPaymentSourceId: $, hasFetchedPaymentSources: ee } = (0, l.cj)([v.Z], () => ({
            defaultPaymentSourceId: v.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: v.Z.hasFetchedPaymentSources
        }));
    a()(null != H, 'Expected selectedSkuId');
    let et = V[H],
        en = Z[H],
        er = null != B ? B : O.c,
        ei = null != en ? en[er] : null;
    a()(null != et, 'SKU must exist and be fetched.'), a()(null != j, 'Application must exist.');
    let eo = (0, l.e7)([h.Z, I.Z], () => I.Z.inTestModeForApplication(j.id) || h.Z.inDevModeForApplication(j.id), [j.id]),
        ea = (0, l.e7)([b.Z], () => b.Z.enabled),
        es = s.M.EEA_COUNTRIES.has(y.Z.ipCountryCodeWithFallback),
        el = U === R.A.PURCHASING || U === R.A.COMPLETED,
        ec = (0, P.m)(G, B),
        eu = null != ec ? ec.type : null;
    return (
        i.useEffect(() => {
            ee &&
                B === $ &&
                $ !== O.c &&
                null == ei &&
                (0, u.x2)(et.applicationId, et.id, $, { isGift: Q })
                    .then(() => {
                        q(null);
                    })
                    .catch((e) => {
                        q(e);
                    });
        }, [$, ee, B, et.applicationId, et.id, ei, q, Q]),
        (0, r.jsxs)('div', {
            className: M.stepBody,
            children: [
                eo
                    ? (0, r.jsx)(
                          f.Z,
                          {
                              icon: (0, c.GSL)(S.Z),
                              iconSize: f.Z.Sizes.SMALL,
                              color: f.Z.Colors.WARNING,
                              className: M.errorBlock,
                              children: x.NW.string(x.t.OvMyMT)
                          },
                          'TEST_MODE'
                      )
                    : null,
                (0, T.yE)(j.flags, L.udG.EMBEDDED) && z === h.O.ERROR
                    ? (0, r.jsx)(
                          f.Z,
                          {
                              icon: (0, c.GSL)(S.Z),
                              iconSize: f.Z.Sizes.SMALL,
                              color: f.Z.Colors.ERROR,
                              className: M.errorBlock,
                              children: x.NW.string(x.t.tAmECg)
                          },
                          'DEV_SHELF_ERROR'
                      )
                    : null,
                (0, r.jsx)(k, {
                    application: j,
                    sku: et,
                    isEmbeddedIAP: W
                }),
                J && (0, r.jsx)(w.Z, { sku: et }),
                null != X ? (0, r.jsx)(E.s, { giftRecipient: X }) : null,
                (0, r.jsx)(c.vwX, {
                    tag: c.RB0.H5,
                    children: Q ? x.NW.string(x.t.PEjaCw) : x.NW.string(x.t.sail9P)
                }),
                null != ei
                    ? (0, r.jsx)(D.B, {
                          sku: et,
                          skuPricePreview: ei
                      })
                    : null == K
                      ? (0, r.jsx)(c.$jN, {
                            type: c.$jN.Type.WANDERING_CUBES,
                            className: M.invoiceSpinner
                        })
                      : (0, r.jsx)(D.E, {
                            sku: et,
                            value: ''
                        }),
                (0, r.jsxs)('div', {
                    className: M.paymentSourceWrapper,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            tag: c.RB0.H5,
                            children: x.NW.string(x.t.mmDvV1)
                        }),
                        (0, r.jsx)(_.Z, {
                            paymentSources: Object.values(G),
                            selectedPaymentSourceId: B,
                            onChange: o,
                            onPaymentSourceAdd: m,
                            hidePersonalInformation: ea
                        })
                    ]
                }),
                (0, r.jsx)(g.Z, {
                    isActive: t,
                    ref: n,
                    children: (0, r.jsx)(p.Z, {
                        onChange: F,
                        forceShow: !0,
                        showWithdrawalWaiver: es,
                        disabled: el,
                        subscriptionPlan: null,
                        finePrintClassname: M.fineprint,
                        purchaseType: Y,
                        isGift: Q,
                        checkboxLabel: et.productLine === L.POd.COLLECTIBLES ? x.NW.format(x.t['1EdAlZ'], { paidURL: L.EYA.PAID_TERMS }) : void 0,
                        finePrint: (0, r.jsx)(d.Z, {
                            paymentSourceType: eu,
                            isEmbeddedIAP: W,
                            purchaseType: Y,
                            productLine: et.productLine,
                            isGift: Q
                        })
                    })
                })
            ]
        })
    );
}
