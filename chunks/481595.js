n.d(t, { Z: () => Z }), n(789020);
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(742280),
    l = n(399606),
    u = n(481060),
    c = n(16084),
    d = n(224550),
    f = n(609194),
    _ = n(275850),
    p = n(672971),
    h = n(115130),
    m = n(228624),
    g = n(925329),
    E = n(215148),
    v = n(653798),
    y = n(314182),
    I = n(251660),
    T = n(246946),
    b = n(351402),
    S = n(853872),
    A = n(855775),
    N = n(695103),
    C = n(4912),
    R = n(630388),
    O = n(669079),
    D = n(937615),
    x = n(987209),
    L = n(563132),
    P = n(45572),
    w = n(119226),
    M = n(981631),
    k = n(388032),
    U = n(215409);
function G(e) {
    let { sku: t, skuPricePreview: n } = e;
    s()(null != n.amount, 'SKU must have a price set.');
    let r = n.amount - n.tax,
        a = (0, m.ed)('SKUInvoice'),
        o = t.productLine === M.POd.COLLECTIBLES && a;
    return !n.tax_inclusive && n.tax > 0
        ? (0, i.jsxs)(v.PO, {
              className: U.invoice,
              children: [
                  o
                      ? (0, i.jsx)(E.C, {
                            sku: t,
                            value: (0, D.T4)(r, n.currency),
                            className: U.subscriptionCostRow
                        })
                      : (0, i.jsx)(v.R$, {
                            label: t.name,
                            value: (0, D.T4)(r, n.currency),
                            className: U.subscriptionCostRow
                        }),
                  (0, i.jsx)(v.R$, {
                      label: k.intl.string(k.t['/I8zmJ']),
                      value: (0, D.T4)(n.tax, n.currency),
                      className: U.subscriptionCostRow
                  }),
                  (0, i.jsx)(v.KU, {}),
                  (0, i.jsx)(v.Ji, {
                      label: k.intl.format(k.t['+B5KfH'], {}),
                      value: (0, D.T4)(n.amount, n.currency),
                      className: U.subscriptionCostRow
                  })
              ]
          })
        : (0, i.jsx)(v.PO, {
              className: U.invoice,
              children: o
                  ? (0, i.jsx)(E.C, {
                        sku: t,
                        value: (0, D.T4)(n.amount, n.currency),
                        className: U.subscriptionCostRow
                    })
                  : (0, i.jsx)(v.R$, {
                        label: t.name,
                        value: (0, D.T4)(n.amount, n.currency),
                        className: U.subscriptionCostRow
                    })
          });
}
function B(e) {
    let { application: t, sku: n, isEmbeddedIAP: r } = e;
    return !0 !== r
        ? null
        : (0, i.jsxs)('div', {
              className: U.skuHeading,
              children: [
                  (0, i.jsx)(g.Z, { game: t }),
                  (0, i.jsx)(u.X6q, {
                      variant: 'heading-lg/bold',
                      className: U.skuHeadingText,
                      children: n.name
                  })
              ]
          });
}
function Z(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: g } = e,
        { application: D, purchaseState: Z, paymentSources: F, paymentSourceId: V, setHasAcceptedTerms: j, skusById: H, skuPricePreviewsById: Y, selectedSkuId: W, isEmbeddedIAP: K, purchaseType: z, purchasePreviewError: q, devShelfFetchState: Q, setPurchasePreviewError: X } = (0, L.JL)(),
        { isGift: J, giftRecipient: $ } = (0, x.wD)(),
        ee = J && (0, O.pO)($),
        { defaultPaymentSourceId: et, hasFetchedPaymentSources: en } = (0, l.cj)([S.Z], () => ({
            defaultPaymentSourceId: S.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: S.Z.hasFetchedPaymentSources
        }));
    s()(null != W, 'Expected selectedSkuId');
    let ei = H[W],
        er = Y[W],
        ea = null != V ? V : A.c,
        es = null != er ? er[ea] : null;
    s()(null != ei, 'SKU must exist and be fetched.'), s()(null != D, 'Application must exist.');
    let eo = (0, l.e7)([h.Z, N.Z], () => N.Z.inTestModeForApplication(D.id) || h.Z.inDevModeForApplication(D.id), [D.id]),
        el = (0, l.e7)([T.Z], () => T.Z.enabled),
        eu = o.M.EEA_COUNTRIES.has(b.Z.ipCountryCodeWithFallback),
        ec = Z === P.A.PURCHASING || Z === P.A.COMPLETED,
        ed = null != V ? F[V].type : null,
        ef = (0, m.ed)('SKUInvoice'),
        e_ = ei.productLine === M.POd.COLLECTIBLES && ef;
    return (
        r.useEffect(() => {
            en &&
                V === et &&
                et !== A.c &&
                null == es &&
                (0, c.x2)(ei.applicationId, ei.id, et, { isGift: J })
                    .then(() => {
                        X(null);
                    })
                    .catch((e) => {
                        X(e);
                    });
        }, [et, en, V, ei.applicationId, ei.id, es, X, J]),
        (0, i.jsxs)('div', {
            className: U.stepBody,
            children: [
                eo
                    ? (0, i.jsx)(
                          f.Z,
                          {
                              icon: (0, u.GSL)(C.Z),
                              iconSize: f.Z.Sizes.SMALL,
                              color: f.Z.Colors.WARNING,
                              className: U.errorBlock,
                              children: k.intl.string(k.t.OvMyMT)
                          },
                          'TEST_MODE'
                      )
                    : null,
                (0, R.yE)(D.flags, M.udG.EMBEDDED) && Q === h.O.ERROR
                    ? (0, i.jsx)(
                          f.Z,
                          {
                              icon: (0, u.GSL)(C.Z),
                              iconSize: f.Z.Sizes.SMALL,
                              color: f.Z.Colors.ERROR,
                              className: U.errorBlock,
                              children: k.intl.string(k.t.tAmECg)
                          },
                          'DEV_SHELF_ERROR'
                      )
                    : null,
                (0, i.jsx)(B, {
                    application: D,
                    sku: ei,
                    isEmbeddedIAP: K
                }),
                ee && (0, i.jsx)(w.Z, { sku: ei }),
                null != $ ? (0, i.jsx)(I.s, { giftRecipient: $ }) : null,
                (0, i.jsx)(u.vwX, {
                    tag: u.RB0.H5,
                    children: J ? k.intl.string(k.t.PEjaCw) : k.intl.string(k.t.sail9P)
                }),
                null != es
                    ? (0, i.jsx)(G, {
                          sku: ei,
                          skuPricePreview: es
                      })
                    : null == q
                      ? (0, i.jsx)(u.$jN, {
                            type: u.$jN.Type.WANDERING_CUBES,
                            className: U.invoiceSpinner
                        })
                      : (0, i.jsx)(v.PO, {
                            className: U.invoice,
                            children: e_
                                ? (0, i.jsx)(E.C, {
                                      sku: ei,
                                      value: null,
                                      className: U.subscriptionCostRow
                                  })
                                : (0, i.jsx)(v.R$, {
                                      label: ei.name,
                                      value: null,
                                      className: U.subscriptionCostRow
                                  })
                        }),
                (0, i.jsxs)('div', {
                    className: U.paymentSourceWrapper,
                    children: [
                        (0, i.jsx)(u.vwX, {
                            tag: u.RB0.H5,
                            children: k.intl.string(k.t.mmDvV1)
                        }),
                        (0, i.jsx)(_.Z, {
                            paymentSources: Object.values(F),
                            selectedPaymentSourceId: V,
                            onChange: a,
                            onPaymentSourceAdd: g,
                            hidePersonalInformation: el
                        })
                    ]
                }),
                (0, i.jsx)(y.Z, {
                    isActive: t,
                    ref: n,
                    children: (0, i.jsx)(p.Z, {
                        onChange: j,
                        forceShow: !0,
                        showWithdrawalWaiver: eu,
                        disabled: ec,
                        subscriptionPlan: null,
                        finePrintClassname: U.fineprint,
                        purchaseType: z,
                        isGift: J,
                        checkboxLabel: ei.productLine === M.POd.COLLECTIBLES ? k.intl.format(k.t['1EdAlZ'], { paidURL: M.EYA.PAID_TERMS }) : void 0,
                        finePrint: (0, i.jsx)(d.Z, {
                            paymentSourceType: ed,
                            isEmbeddedIAP: K,
                            purchaseType: z,
                            productLine: ei.productLine,
                            isGift: J
                        })
                    })
                })
            ]
        })
    );
}
