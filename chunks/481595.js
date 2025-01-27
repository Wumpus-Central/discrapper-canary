r.d(n, {
    Z: function () {
        return V;
    }
});
var i = r(789020);
var a = r(200651),
    o = r(192379),
    s = r(512722),
    l = r.n(s),
    u = r(742280),
    c = r(399606),
    d = r(481060),
    f = r(16084),
    p = r(224550),
    h = r(609194),
    _ = r(275850),
    m = r(672971),
    g = r(115130),
    E = r(228624),
    v = r(925329),
    y = r(215148),
    b = r(653798),
    I = r(314182),
    T = r(251660),
    S = r(246946),
    A = r(351402),
    C = r(853872),
    N = r(855775),
    R = r(695103),
    O = r(4912),
    D = r(630388),
    L = r(669079),
    x = r(937615),
    w = r(987209),
    P = r(563132),
    M = r(45572),
    k = r(119226),
    U = r(981631),
    B = r(388032),
    G = r(215409);
function Z(e) {
    let { sku: n, skuPricePreview: r } = e;
    l()(null != r.amount, 'SKU must have a price set.');
    let i = r.amount - r.tax,
        o = (0, E.ed)('SKUInvoice'),
        s = n.productLine === U.POd.COLLECTIBLES && o;
    return !r.tax_inclusive && r.tax > 0
        ? (0, a.jsxs)(b.PO, {
              className: G.invoice,
              children: [
                  s
                      ? (0, a.jsx)(y.C, {
                            sku: n,
                            value: (0, x.T4)(i, r.currency),
                            className: G.subscriptionCostRow
                        })
                      : (0, a.jsx)(b.R$, {
                            label: n.name,
                            value: (0, x.T4)(i, r.currency),
                            className: G.subscriptionCostRow
                        }),
                  (0, a.jsx)(b.R$, {
                      label: B.intl.string(B.t['/I8zmJ']),
                      value: (0, x.T4)(r.tax, r.currency),
                      className: G.subscriptionCostRow
                  }),
                  (0, a.jsx)(b.KU, {}),
                  (0, a.jsx)(b.Ji, {
                      label: B.intl.format(B.t['+B5KfH'], {}),
                      value: (0, x.T4)(r.amount, r.currency),
                      className: G.subscriptionCostRow
                  })
              ]
          })
        : (0, a.jsx)(b.PO, {
              className: G.invoice,
              children: s
                  ? (0, a.jsx)(y.C, {
                        sku: n,
                        value: (0, x.T4)(r.amount, r.currency),
                        className: G.subscriptionCostRow
                    })
                  : (0, a.jsx)(b.R$, {
                        label: n.name,
                        value: (0, x.T4)(r.amount, r.currency),
                        className: G.subscriptionCostRow
                    })
          });
}
function F(e) {
    let { application: n, sku: r, isEmbeddedIAP: i } = e;
    return !0 !== i
        ? null
        : (0, a.jsxs)('div', {
              className: G.skuHeading,
              children: [
                  (0, a.jsx)(v.Z, { game: n }),
                  (0, a.jsx)(d.Heading, {
                      variant: 'heading-lg/bold',
                      className: G.skuHeadingText,
                      children: r.name
                  })
              ]
          });
}
function V(e) {
    let { hasLegalTermsFlash: n, legalTermsNodeRef: r, onPaymentSourceChange: i, handlePaymentSourceAdd: s } = e,
        { application: v, purchaseState: x, paymentSources: V, paymentSourceId: j, setHasAcceptedTerms: H, skusById: Y, skuPricePreviewsById: W, selectedSkuId: K, isEmbeddedIAP: z, purchaseType: q, purchasePreviewError: Q, devShelfFetchState: X, setPurchasePreviewError: J } = (0, P.usePaymentContext)(),
        { isGift: $, giftRecipient: ee } = (0, w.wD)(),
        et = $ && (0, L.pO)(ee),
        { defaultPaymentSourceId: en, hasFetchedPaymentSources: er } = (0, c.cj)([C.Z], () => ({
            defaultPaymentSourceId: C.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: C.Z.hasFetchedPaymentSources
        }));
    l()(null != K, 'Expected selectedSkuId');
    let ei = Y[K],
        ea = W[K],
        eo = null != j ? j : N.c,
        es = null != ea ? ea[eo] : null;
    l()(null != ei, 'SKU must exist and be fetched.'), l()(null != v, 'Application must exist.');
    let el = (0, c.e7)([g.Z, R.Z], () => R.Z.inTestModeForApplication(v.id) || g.Z.inDevModeForApplication(v.id), [v.id]),
        eu = (0, c.e7)([S.Z], () => S.Z.enabled),
        ec = u.M.EEA_COUNTRIES.has(A.Z.ipCountryCodeWithFallback),
        ed = x === M.A.PURCHASING || x === M.A.COMPLETED,
        ef = null != j ? V[j].type : null,
        ep = (0, E.ed)('SKUInvoice'),
        eh = ei.productLine === U.POd.COLLECTIBLES && ep;
    return (
        o.useEffect(() => {
            er &&
                j === en &&
                en !== N.c &&
                null == es &&
                (0, f.x2)(ei.applicationId, ei.id, en, { isGift: $ })
                    .then(() => {
                        J(null);
                    })
                    .catch((e) => {
                        J(e);
                    });
        }, [en, er, j, ei.applicationId, ei.id, es, J, $]),
        (0, a.jsxs)('div', {
            className: G.stepBody,
            children: [
                el
                    ? (0, a.jsx)(
                          h.Z,
                          {
                              icon: (0, d.makeIconCompat)(O.Z),
                              iconSize: h.Z.Sizes.SMALL,
                              color: h.Z.Colors.WARNING,
                              className: G.errorBlock,
                              children: B.intl.string(B.t.OvMyMT)
                          },
                          'TEST_MODE'
                      )
                    : null,
                (0, D.yE)(v.flags, U.udG.EMBEDDED) && X === g.O.ERROR
                    ? (0, a.jsx)(
                          h.Z,
                          {
                              icon: (0, d.makeIconCompat)(O.Z),
                              iconSize: h.Z.Sizes.SMALL,
                              color: h.Z.Colors.ERROR,
                              className: G.errorBlock,
                              children: B.intl.string(B.t.tAmECg)
                          },
                          'DEV_SHELF_ERROR'
                      )
                    : null,
                (0, a.jsx)(F, {
                    application: v,
                    sku: ei,
                    isEmbeddedIAP: z
                }),
                et && (0, a.jsx)(k.Z, { sku: ei }),
                null != ee ? (0, a.jsx)(T.s, { giftRecipient: ee }) : null,
                (0, a.jsx)(d.FormTitle, {
                    tag: d.FormTitleTags.H5,
                    children: $ ? B.intl.string(B.t.PEjaCw) : B.intl.string(B.t.sail9P)
                }),
                null != es
                    ? (0, a.jsx)(Z, {
                          sku: ei,
                          skuPricePreview: es
                      })
                    : null == Q
                      ? (0, a.jsx)(d.Spinner, {
                            type: d.Spinner.Type.WANDERING_CUBES,
                            className: G.invoiceSpinner
                        })
                      : (0, a.jsx)(b.PO, {
                            className: G.invoice,
                            children: eh
                                ? (0, a.jsx)(y.C, {
                                      sku: ei,
                                      value: null,
                                      className: G.subscriptionCostRow
                                  })
                                : (0, a.jsx)(b.R$, {
                                      label: ei.name,
                                      value: null,
                                      className: G.subscriptionCostRow
                                  })
                        }),
                (0, a.jsxs)('div', {
                    className: G.paymentSourceWrapper,
                    children: [
                        (0, a.jsx)(d.FormTitle, {
                            tag: d.FormTitleTags.H5,
                            children: B.intl.string(B.t.mmDvV1)
                        }),
                        (0, a.jsx)(_.Z, {
                            paymentSources: Object.values(V),
                            selectedPaymentSourceId: j,
                            onChange: i,
                            onPaymentSourceAdd: s,
                            hidePersonalInformation: eu
                        })
                    ]
                }),
                (0, a.jsx)(I.Z, {
                    isActive: n,
                    ref: r,
                    children: (0, a.jsx)(m.Z, {
                        onChange: H,
                        forceShow: !0,
                        showWithdrawalWaiver: ec,
                        disabled: ed,
                        subscriptionPlan: null,
                        finePrintClassname: G.fineprint,
                        purchaseType: q,
                        isGift: $,
                        checkboxLabel: ei.productLine === U.POd.COLLECTIBLES ? B.intl.format(B.t['1EdAlZ'], { paidURL: U.EYA.PAID_TERMS }) : void 0,
                        finePrint: (0, a.jsx)(p.Z, {
                            paymentSourceType: ef,
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
