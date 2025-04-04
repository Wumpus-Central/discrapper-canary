n.d(t, { Z: () => B }), n(789020);
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
    m = n(228624),
    g = n(925329),
    E = n(215148),
    b = n(653798),
    y = n(314182),
    v = n(251660),
    O = n(246946),
    I = n(351402),
    S = n(853872),
    T = n(855775),
    N = n(695103),
    A = n(4912),
    C = n(630388),
    R = n(669079),
    P = n(987209),
    w = n(563132),
    D = n(45572),
    L = n(435020),
    x = n(119226),
    M = n(982204),
    k = n(981631),
    j = n(388032),
    U = n(718578);
function G(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)('div', {
              className: U.skuHeading,
              children: [
                  (0, r.jsx)(g.Z, { game: t }),
                  (0, r.jsx)(c.X6q, {
                      variant: 'heading-lg/bold',
                      className: U.skuHeadingText,
                      children: n.name
                  })
              ]
          });
}
function B(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: o, handlePaymentSourceAdd: g } = e,
        { application: B, purchaseState: F, paymentSources: V, paymentSourceId: Z, setHasAcceptedTerms: H, skusById: W, skuPricePreviewsById: Y, selectedSkuId: K, isEmbeddedIAP: z, purchaseType: q, purchasePreviewError: Q, devShelfFetchState: X, setPurchasePreviewError: J } = (0, w.JL)(),
        { isGift: $, giftRecipient: ee } = (0, P.wD)(),
        et = $ && (0, R.pO)(ee),
        { defaultPaymentSourceId: en, hasFetchedPaymentSources: er } = (0, l.cj)([S.Z], () => ({
            defaultPaymentSourceId: S.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: S.Z.hasFetchedPaymentSources
        }));
    a()(null != K, 'Expected selectedSkuId');
    let ei = W[K],
        eo = Y[K],
        ea = null != Z ? Z : T.c,
        es = null != eo ? eo[ea] : null;
    a()(null != ei, 'SKU must exist and be fetched.'), a()(null != B, 'Application must exist.');
    let el = (0, l.e7)([h.Z, N.Z], () => N.Z.inTestModeForApplication(B.id) || h.Z.inDevModeForApplication(B.id), [B.id]),
        ec = (0, l.e7)([O.Z], () => O.Z.enabled),
        eu = s.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
        ed = F === D.A.PURCHASING || F === D.A.COMPLETED,
        ef = (0, L.m)(V, Z),
        e_ = null != ef ? ef.type : null,
        ep = (0, m.ed)('SKUInvoicePreview'),
        eh = ei.productLine === k.POd.COLLECTIBLES && ep;
    return (
        i.useEffect(() => {
            er &&
                Z === en &&
                en !== T.c &&
                null == es &&
                (0, u.x2)(ei.applicationId, ei.id, en, { isGift: $ })
                    .then(() => {
                        J(null);
                    })
                    .catch((e) => {
                        J(e);
                    });
        }, [en, er, Z, ei.applicationId, ei.id, es, J, $]),
        (0, r.jsxs)('div', {
            className: U.stepBody,
            children: [
                el
                    ? (0, r.jsx)(
                          f.Z,
                          {
                              icon: (0, c.GSL)(A.Z),
                              iconSize: f.Z.Sizes.SMALL,
                              color: f.Z.Colors.WARNING,
                              className: U.errorBlock,
                              children: j.NW.string(j.t.OvMyMT)
                          },
                          'TEST_MODE'
                      )
                    : null,
                (0, C.yE)(B.flags, k.udG.EMBEDDED) && X === h.O.ERROR
                    ? (0, r.jsx)(
                          f.Z,
                          {
                              icon: (0, c.GSL)(A.Z),
                              iconSize: f.Z.Sizes.SMALL,
                              color: f.Z.Colors.ERROR,
                              className: U.errorBlock,
                              children: j.NW.string(j.t.tAmECg)
                          },
                          'DEV_SHELF_ERROR'
                      )
                    : null,
                (0, r.jsx)(G, {
                    application: B,
                    sku: ei,
                    isEmbeddedIAP: z
                }),
                et && (0, r.jsx)(x.Z, { sku: ei }),
                null != ee ? (0, r.jsx)(v.s, { giftRecipient: ee }) : null,
                (0, r.jsx)(c.vwX, {
                    tag: c.RB0.H5,
                    children: $ ? j.NW.string(j.t.PEjaCw) : j.NW.string(j.t.sail9P)
                }),
                null != es
                    ? (0, r.jsx)(M.B, {
                          sku: ei,
                          skuPricePreview: es
                      })
                    : null == Q
                      ? (0, r.jsx)(c.$jN, {
                            type: c.$jN.Type.WANDERING_CUBES,
                            className: U.invoiceSpinner
                        })
                      : (0, r.jsx)(b.PO, {
                            className: U.invoice,
                            children: eh
                                ? (0, r.jsx)(E.C, {
                                      sku: ei,
                                      value: null,
                                      className: U.subscriptionCostRow
                                  })
                                : (0, r.jsx)(b.R$, {
                                      label: ei.name,
                                      value: null,
                                      className: U.subscriptionCostRow
                                  })
                        }),
                (0, r.jsxs)('div', {
                    className: U.paymentSourceWrapper,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            tag: c.RB0.H5,
                            children: j.NW.string(j.t.mmDvV1)
                        }),
                        (0, r.jsx)(_.Z, {
                            paymentSources: Object.values(V),
                            selectedPaymentSourceId: Z,
                            onChange: o,
                            onPaymentSourceAdd: g,
                            hidePersonalInformation: ec
                        })
                    ]
                }),
                (0, r.jsx)(y.Z, {
                    isActive: t,
                    ref: n,
                    children: (0, r.jsx)(p.Z, {
                        onChange: H,
                        forceShow: !0,
                        showWithdrawalWaiver: eu,
                        disabled: ed,
                        subscriptionPlan: null,
                        finePrintClassname: U.fineprint,
                        purchaseType: q,
                        isGift: $,
                        checkboxLabel: ei.productLine === k.POd.COLLECTIBLES ? j.NW.format(j.t['1EdAlZ'], { paidURL: k.EYA.PAID_TERMS }) : void 0,
                        finePrint: (0, r.jsx)(d.Z, {
                            paymentSourceType: e_,
                            isEmbeddedIAP: z,
                            purchaseType: q,
                            productLine: ei.productLine,
                            isGift: $
                        })
                    })
                })
            ]
        })
    );
}
