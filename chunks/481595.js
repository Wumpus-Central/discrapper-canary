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
    p = n(275850),
    _ = n(672971),
    h = n(115130),
    m = n(228624),
    g = n(925329),
    E = n(215148),
    v = n(653798),
    b = n(314182),
    y = n(251660),
    O = n(246946),
    S = n(351402),
    I = n(853872),
    T = n(855775),
    N = n(695103),
    A = n(4912),
    C = n(630388),
    R = n(669079),
    P = n(937615),
    w = n(987209),
    D = n(563132),
    x = n(45572),
    L = n(119226),
    M = n(981631),
    k = n(388032),
    j = n(772228);
function U(e) {
    let { sku: t, skuPricePreview: n } = e;
    a()(null != n.amount, 'SKU must have a price set.');
    let i = n.amount - n.tax,
        o = (0, m.ed)('SKUInvoice'),
        s = t.productLine === M.POd.COLLECTIBLES && o;
    return !n.tax_inclusive && n.tax > 0
        ? (0, r.jsxs)(v.PO, {
              className: j.invoice,
              children: [
                  s
                      ? (0, r.jsx)(E.C, {
                            sku: t,
                            value: (0, P.T4)(i, n.currency),
                            className: j.subscriptionCostRow
                        })
                      : (0, r.jsx)(v.R$, {
                            label: t.name,
                            value: (0, P.T4)(i, n.currency),
                            className: j.subscriptionCostRow
                        }),
                  (0, r.jsx)(v.R$, {
                      label: k.NW.string(k.t['/I8zmJ']),
                      value: (0, P.T4)(n.tax, n.currency),
                      className: j.subscriptionCostRow
                  }),
                  (0, r.jsx)(v.KU, {}),
                  (0, r.jsx)(v.Ji, {
                      label: k.NW.format(k.t['+B5KfH'], {}),
                      value: (0, P.T4)(n.amount, n.currency),
                      className: j.subscriptionCostRow
                  })
              ]
          })
        : (0, r.jsx)(v.PO, {
              className: j.invoice,
              children: s
                  ? (0, r.jsx)(E.C, {
                        sku: t,
                        value: (0, P.T4)(n.amount, n.currency),
                        className: j.subscriptionCostRow
                    })
                  : (0, r.jsx)(v.R$, {
                        label: t.name,
                        value: (0, P.T4)(n.amount, n.currency),
                        className: j.subscriptionCostRow
                    })
          });
}
function G(e) {
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
function B(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: o, handlePaymentSourceAdd: g } = e,
        { application: P, purchaseState: B, paymentSources: Z, paymentSourceId: F, setHasAcceptedTerms: V, skusById: H, skuPricePreviewsById: W, selectedSkuId: Y, isEmbeddedIAP: K, purchaseType: z, purchasePreviewError: q, devShelfFetchState: Q, setPurchasePreviewError: X } = (0, D.JL)(),
        { isGift: J, giftRecipient: $ } = (0, w.wD)(),
        ee = J && (0, R.pO)($),
        { defaultPaymentSourceId: et, hasFetchedPaymentSources: en } = (0, l.cj)([I.Z], () => ({
            defaultPaymentSourceId: I.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: I.Z.hasFetchedPaymentSources
        }));
    a()(null != Y, 'Expected selectedSkuId');
    let er = H[Y],
        ei = W[Y],
        eo = null != F ? F : T.c,
        ea = null != ei ? ei[eo] : null;
    a()(null != er, 'SKU must exist and be fetched.'), a()(null != P, 'Application must exist.');
    let es = (0, l.e7)([h.Z, N.Z], () => N.Z.inTestModeForApplication(P.id) || h.Z.inDevModeForApplication(P.id), [P.id]),
        el = (0, l.e7)([O.Z], () => O.Z.enabled),
        ec = s.M.EEA_COUNTRIES.has(S.Z.ipCountryCodeWithFallback),
        eu = B === x.A.PURCHASING || B === x.A.COMPLETED,
        ed = null != F ? Z[F].type : null,
        ef = (0, m.ed)('SKUInvoice'),
        ep = er.productLine === M.POd.COLLECTIBLES && ef;
    return (
        i.useEffect(() => {
            en &&
                F === et &&
                et !== T.c &&
                null == ea &&
                (0, u.x2)(er.applicationId, er.id, et, { isGift: J })
                    .then(() => {
                        X(null);
                    })
                    .catch((e) => {
                        X(e);
                    });
        }, [et, en, F, er.applicationId, er.id, ea, X, J]),
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
                (0, C.yE)(P.flags, M.udG.EMBEDDED) && Q === h.O.ERROR
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
                (0, r.jsx)(G, {
                    application: P,
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
                    ? (0, r.jsx)(U, {
                          sku: er,
                          skuPricePreview: ea
                      })
                    : null == q
                      ? (0, r.jsx)(c.$jN, {
                            type: c.$jN.Type.WANDERING_CUBES,
                            className: j.invoiceSpinner
                        })
                      : (0, r.jsx)(v.PO, {
                            className: j.invoice,
                            children: ep
                                ? (0, r.jsx)(E.C, {
                                      sku: er,
                                      value: null,
                                      className: j.subscriptionCostRow
                                  })
                                : (0, r.jsx)(v.R$, {
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
                        (0, r.jsx)(p.Z, {
                            paymentSources: Object.values(Z),
                            selectedPaymentSourceId: F,
                            onChange: o,
                            onPaymentSourceAdd: g,
                            hidePersonalInformation: el
                        })
                    ]
                }),
                (0, r.jsx)(b.Z, {
                    isActive: t,
                    ref: n,
                    children: (0, r.jsx)(_.Z, {
                        onChange: V,
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
