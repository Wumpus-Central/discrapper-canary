t.d(n, {
    Z: function () {
        return U;
    }
}),
    t(789020);
var i = t(200651),
    l = t(192379),
    r = t(512722),
    s = t.n(r),
    a = t(742280),
    c = t(399606),
    o = t(481060),
    u = t(16084),
    d = t(224550),
    m = t(609194),
    p = t(275850),
    x = t(672971),
    h = t(115130),
    f = t(228624),
    v = t(925329),
    E = t(215148),
    S = t(653798),
    g = t(314182),
    j = t(251660),
    y = t(246946),
    I = t(351402),
    P = t(853872),
    T = t(855775),
    N = t(695103),
    b = t(4912),
    C = t(630388),
    _ = t(669079),
    O = t(937615),
    A = t(987209),
    Z = t(563132),
    R = t(45572),
    w = t(119226),
    M = t(981631),
    L = t(388032),
    k = t(215409);
function F(e) {
    let { sku: n, skuPricePreview: t } = e;
    s()(null != t.amount, 'SKU must have a price set.');
    let l = t.amount - t.tax,
        r = (0, f.ed)('SKUInvoice'),
        a = n.productLine === M.POd.COLLECTIBLES && r;
    return !t.tax_inclusive && t.tax > 0
        ? (0, i.jsxs)(S.PO, {
              className: k.invoice,
              children: [
                  a
                      ? (0, i.jsx)(E.C, {
                            sku: n,
                            value: (0, O.T4)(l, t.currency),
                            className: k.subscriptionCostRow
                        })
                      : (0, i.jsx)(S.R$, {
                            label: n.name,
                            value: (0, O.T4)(l, t.currency),
                            className: k.subscriptionCostRow
                        }),
                  (0, i.jsx)(S.R$, {
                      label: L.intl.string(L.t['/I8zmJ']),
                      value: (0, O.T4)(t.tax, t.currency),
                      className: k.subscriptionCostRow
                  }),
                  (0, i.jsx)(S.KU, {}),
                  (0, i.jsx)(S.Ji, {
                      label: L.intl.format(L.t['+B5KfH'], {}),
                      value: (0, O.T4)(t.amount, t.currency),
                      className: k.subscriptionCostRow
                  })
              ]
          })
        : (0, i.jsx)(S.PO, {
              className: k.invoice,
              children: a
                  ? (0, i.jsx)(E.C, {
                        sku: n,
                        value: (0, O.T4)(t.amount, t.currency),
                        className: k.subscriptionCostRow
                    })
                  : (0, i.jsx)(S.R$, {
                        label: n.name,
                        value: (0, O.T4)(t.amount, t.currency),
                        className: k.subscriptionCostRow
                    })
          });
}
function D(e) {
    let { application: n, sku: t, isEmbeddedIAP: l } = e;
    return !0 !== l
        ? null
        : (0, i.jsxs)('div', {
              className: k.skuHeading,
              children: [
                  (0, i.jsx)(v.Z, { game: n }),
                  (0, i.jsx)(o.Heading, {
                      variant: 'heading-lg/bold',
                      className: k.skuHeadingText,
                      children: t.name
                  })
              ]
          });
}
function U(e) {
    let { hasLegalTermsFlash: n, legalTermsNodeRef: t, onPaymentSourceChange: r, handlePaymentSourceAdd: v } = e,
        { application: O, purchaseState: U, paymentSources: G, paymentSourceId: B, setHasAcceptedTerms: H, skusById: W, skuPricePreviewsById: V, selectedSkuId: K, isEmbeddedIAP: z, purchaseType: Y, purchasePreviewError: X, devShelfFetchState: q } = (0, Z.usePaymentContext)(),
        { isGift: J, giftRecipient: Q } = (0, A.wD)(),
        $ = J && (0, _.pO)(Q),
        { defaultPaymentSourceId: ee, hasFetchedPaymentSources: en } = (0, c.cj)([P.Z], () => ({
            defaultPaymentSourceId: P.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: P.Z.hasFetchedPaymentSources
        }));
    s()(null != K, 'Expected selectedSkuId');
    let et = W[K],
        ei = V[K],
        el = null != B ? B : T.c,
        er = null != ei ? ei[el] : null;
    s()(null != et, 'SKU must exist and be fetched.'), s()(null != O, 'Application must exist.');
    let es = (0, c.e7)([h.Z, N.Z], () => N.Z.inTestModeForApplication(O.id) || h.Z.inDevModeForApplication(O.id), [O.id]),
        ea = (0, c.e7)([y.Z], () => y.Z.enabled),
        ec = a.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
        eo = U === R.A.PURCHASING || U === R.A.COMPLETED,
        eu = null != B ? G[B].type : null,
        ed = (0, f.ed)('SKUInvoice'),
        em = et.productLine === M.POd.COLLECTIBLES && ed;
    return (
        l.useEffect(() => {
            en && B === ee && ee !== T.c && null == er && (0, u.x2)(et.applicationId, et.id, ee, { isGift: J });
        }, [ee, en, B, et.applicationId, et.id, er, J]),
        (0, i.jsxs)('div', {
            className: k.stepBody,
            children: [
                es
                    ? (0, i.jsx)(
                          m.Z,
                          {
                              icon: (0, o.makeIconCompat)(b.Z),
                              iconSize: m.Z.Sizes.SMALL,
                              color: m.Z.Colors.WARNING,
                              className: k.errorBlock,
                              children: L.intl.string(L.t.OvMyMT)
                          },
                          'TEST_MODE'
                      )
                    : null,
                (0, C.yE)(O.flags, M.udG.EMBEDDED) && q === h.O.ERROR
                    ? (0, i.jsx)(
                          m.Z,
                          {
                              icon: (0, o.makeIconCompat)(b.Z),
                              iconSize: m.Z.Sizes.SMALL,
                              color: m.Z.Colors.ERROR,
                              className: k.errorBlock,
                              children: L.intl.string(L.t.tAmECg)
                          },
                          'DEV_SHELF_ERROR'
                      )
                    : null,
                (0, i.jsx)(D, {
                    application: O,
                    sku: et,
                    isEmbeddedIAP: z
                }),
                $ && (0, i.jsx)(w.Z, { sku: et }),
                null != Q ? (0, i.jsx)(j.s, { giftRecipient: Q }) : null,
                (0, i.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    children: J ? L.intl.string(L.t.PEjaCw) : L.intl.string(L.t.sail9P)
                }),
                null != er
                    ? (0, i.jsx)(F, {
                          sku: et,
                          skuPricePreview: er
                      })
                    : null == X
                      ? (0, i.jsx)(o.Spinner, {
                            type: o.Spinner.Type.WANDERING_CUBES,
                            className: k.invoiceSpinner
                        })
                      : (0, i.jsx)(S.PO, {
                            className: k.invoice,
                            children: em
                                ? (0, i.jsx)(E.C, {
                                      sku: et,
                                      value: null,
                                      className: k.subscriptionCostRow
                                  })
                                : (0, i.jsx)(S.R$, {
                                      label: et.name,
                                      value: null,
                                      className: k.subscriptionCostRow
                                  })
                        }),
                (0, i.jsxs)('div', {
                    className: k.paymentSourceWrapper,
                    children: [
                        (0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: L.intl.string(L.t.mmDvV1)
                        }),
                        (0, i.jsx)(p.Z, {
                            paymentSources: Object.values(G),
                            selectedPaymentSourceId: B,
                            onChange: r,
                            onPaymentSourceAdd: v,
                            hidePersonalInformation: ea
                        })
                    ]
                }),
                (0, i.jsx)(g.Z, {
                    isActive: n,
                    ref: t,
                    children: (0, i.jsx)(x.Z, {
                        onChange: H,
                        forceShow: !0,
                        showWithdrawalWaiver: ec,
                        disabled: eo,
                        subscriptionPlan: null,
                        finePrintClassname: k.fineprint,
                        purchaseType: Y,
                        isGift: J,
                        checkboxLabel: et.productLine === M.POd.COLLECTIBLES ? L.intl.format(L.t['1EdAlZ'], { paidURL: M.EYA.PAID_TERMS }) : void 0,
                        finePrint: (0, i.jsx)(d.Z, {
                            paymentSourceType: eu,
                            isEmbeddedIAP: z,
                            purchaseType: Y,
                            productLine: et.productLine,
                            isGift: J
                        })
                    })
                })
            ]
        })
    );
}
