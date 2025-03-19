n.d(t, { Z: () => G }), n(789020);
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
    v = n(314182),
    y = n(251660),
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
    L = n(119226),
    x = n(982204),
    M = n(981631),
    k = n(388032),
    j = n(664279);
function U(e) {
    let { application: t, sku: n, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, r.jsxs)('div', {
              className: j.skuHeading,
              children: [
                  (0, r.jsx)(g.Z, { game: t }),
                  (0, r.jsx)(c.X6q, {
                      variant: 'heading-lg/bold',
                      className: j.skuHeadingText,
                      children: n.name
                  })
              ]
          });
}
function G(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: o, handlePaymentSourceAdd: g } = e,
        { application: G, purchaseState: B, paymentSources: F, paymentSourceId: V, setHasAcceptedTerms: Z, skusById: H, skuPricePreviewsById: W, selectedSkuId: Y, isEmbeddedIAP: K, purchaseType: z, purchasePreviewError: q, devShelfFetchState: Q, setPurchasePreviewError: X } = (0, w.JL)(),
        { isGift: J, giftRecipient: $ } = (0, P.wD)(),
        ee = J && (0, R.pO)($),
        { defaultPaymentSourceId: et, hasFetchedPaymentSources: en } = (0, l.cj)([S.Z], () => ({
            defaultPaymentSourceId: S.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: S.Z.hasFetchedPaymentSources
        }));
    a()(null != Y, 'Expected selectedSkuId');
    let er = H[Y],
        ei = W[Y],
        eo = null != V ? V : T.c,
        ea = null != ei ? ei[eo] : null;
    a()(null != er, 'SKU must exist and be fetched.'), a()(null != G, 'Application must exist.');
    let es = (0, l.e7)([h.Z, N.Z], () => N.Z.inTestModeForApplication(G.id) || h.Z.inDevModeForApplication(G.id), [G.id]),
        el = (0, l.e7)([O.Z], () => O.Z.enabled),
        ec = s.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
        eu = B === D.A.PURCHASING || B === D.A.COMPLETED,
        ed = null != V ? F[V].type : null,
        ef = (0, m.ed)('SKUInvoicePreview'),
        e_ = er.productLine === M.POd.COLLECTIBLES && ef;
    return (
        i.useEffect(() => {
            en &&
                V === et &&
                et !== T.c &&
                null == ea &&
                (0, u.x2)(er.applicationId, er.id, et, { isGift: J })
                    .then(() => {
                        X(null);
                    })
                    .catch((e) => {
                        X(e);
                    });
        }, [et, en, V, er.applicationId, er.id, ea, X, J]),
        (0, r.jsxs)('div', {
            className: j.stepBody,
            children: [
                es
                    ? (0, r.jsx)(
                          f.Z,
                          {
                              icon: (0, c.GSL)(A.Z),
                              iconSize: f.Z.Sizes.SMALL,
                              color: f.Z.Colors.WARNING,
                              className: j.errorBlock,
                              children: k.NW.string(k.t.OvMyMT)
                          },
                          'TEST_MODE'
                      )
                    : null,
                (0, C.yE)(G.flags, M.udG.EMBEDDED) && Q === h.O.ERROR
                    ? (0, r.jsx)(
                          f.Z,
                          {
                              icon: (0, c.GSL)(A.Z),
                              iconSize: f.Z.Sizes.SMALL,
                              color: f.Z.Colors.ERROR,
                              className: j.errorBlock,
                              children: k.NW.string(k.t.tAmECg)
                          },
                          'DEV_SHELF_ERROR'
                      )
                    : null,
                (0, r.jsx)(U, {
                    application: G,
                    sku: er,
                    isEmbeddedIAP: K
                }),
                ee && (0, r.jsx)(L.Z, { sku: er }),
                null != $ ? (0, r.jsx)(y.s, { giftRecipient: $ }) : null,
                (0, r.jsx)(c.vwX, {
                    tag: c.RB0.H5,
                    children: J ? k.NW.string(k.t.PEjaCw) : k.NW.string(k.t.sail9P)
                }),
                null != ea
                    ? (0, r.jsx)(x.B, {
                          sku: er,
                          skuPricePreview: ea
                      })
                    : null == q
                      ? (0, r.jsx)(c.$jN, {
                            type: c.$jN.Type.WANDERING_CUBES,
                            className: j.invoiceSpinner
                        })
                      : (0, r.jsx)(b.PO, {
                            className: j.invoice,
                            children: e_
                                ? (0, r.jsx)(E.C, {
                                      sku: er,
                                      value: null,
                                      className: j.subscriptionCostRow
                                  })
                                : (0, r.jsx)(b.R$, {
                                      label: er.name,
                                      value: null,
                                      className: j.subscriptionCostRow
                                  })
                        }),
                (0, r.jsxs)('div', {
                    className: j.paymentSourceWrapper,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            tag: c.RB0.H5,
                            children: k.NW.string(k.t.mmDvV1)
                        }),
                        (0, r.jsx)(_.Z, {
                            paymentSources: Object.values(F),
                            selectedPaymentSourceId: V,
                            onChange: o,
                            onPaymentSourceAdd: g,
                            hidePersonalInformation: el
                        })
                    ]
                }),
                (0, r.jsx)(v.Z, {
                    isActive: t,
                    ref: n,
                    children: (0, r.jsx)(p.Z, {
                        onChange: Z,
                        forceShow: !0,
                        showWithdrawalWaiver: ec,
                        disabled: eu,
                        subscriptionPlan: null,
                        finePrintClassname: j.fineprint,
                        purchaseType: z,
                        isGift: J,
                        checkboxLabel: er.productLine === M.POd.COLLECTIBLES ? k.NW.format(k.t['1EdAlZ'], { paidURL: M.EYA.PAID_TERMS }) : void 0,
                        finePrint: (0, r.jsx)(d.Z, {
                            paymentSourceType: ed,
                            isEmbeddedIAP: K,
                            purchaseType: z,
                            productLine: er.productLine,
                            isGift: J
                        })
                    })
                })
            ]
        })
    );
}
