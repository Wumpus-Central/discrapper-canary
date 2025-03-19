r.d(t, { OrbCheckoutModalInPaymentModal: () => U });
var n = r(200651),
    s = r(442837),
    l = r(481060),
    o = r(224550),
    i = r(672971),
    a = r(228624),
    c = r(583434),
    u = r(956472),
    d = r(600164),
    p = r(987209),
    j = r(563132),
    m = r(409813),
    x = r(126982),
    b = r(791785),
    y = r(51499),
    h = r(612853),
    O = r(614277),
    f = r(712297),
    P = r(982204),
    g = r(653798),
    S = r(594174),
    v = r(74538),
    k = r(932563),
    I = r(960919),
    N = r(981631),
    C = r(388032),
    w = r(650075);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let B = (e) => {
        let { orbAmount: t } = e;
        return (0, n.jsxs)(l.Text, {
            variant: 'text-md/semibold',
            className: w.orbAmountTag,
            children: [
                (0, n.jsx)(I.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14
                }),
                null === t ? '--' : t
            ]
        });
    },
    T = (e) => {
        let { orbBalance: t, orbPriceAmount: r, onClick: s } = e,
            o = C.NW.string(C.t.wmcDys),
            i = {
                color: l.zxk.Colors.GREEN,
                type: 'submit',
                'data-testid': 'submitButton',
                children: o
            };
        return null === r
            ? (0, n.jsx)(l.ua7, {
                  text: C.NW.string(C.t['c/rcUl']),
                  children: (e) => (0, n.jsx)(l.zxk, _(E({}, e, i), { disabled: !0 }))
              })
            : null === t || r > t
              ? (0, n.jsx)(l.ua7, {
                    text: C.NW.string(C.t.keFvXF),
                    children: (e) => (0, n.jsx)(l.zxk, _(E({}, e, i), { disabled: !0 }))
                })
              : (0, n.jsx)(l.zxk, _(E({}, i), { onClick: s }));
    },
    A = (e) => {
        let { orbPriceAmount: t, skuId: r } = e,
            { skusById: s } = (0, f.Z)({
                applicationId: N.XAJ,
                skuIDs: [r],
                isGift: !1,
                currentPaymentSourceId: null
            }),
            o = s[r],
            i = (0, a.ed)('OrbCheckoutPurchaseDetails'),
            c = void 0 !== o && o.productLine === N.POd.COLLECTIBLES && i;
        return void 0 === o
            ? (0, n.jsx)(g.PO, {
                  children: (0, n.jsx)(l.$jN, {
                      type: l.$jN.Type.PULSING_ELLIPSIS,
                      className: w.purchaseDetailsSpinner
                  })
              })
            : (0, n.jsx)(P.E, {
                  sku: o,
                  shouldShowProductPreview: c,
                  value: (0, n.jsx)(B, { orbAmount: t })
              });
    },
    D = (e) => {
        let { orbBalance: t } = e;
        return (0, n.jsxs)('div', {
            className: w.paymentSourceWrapper,
            children: [
                (0, n.jsx)(l.vwX, {
                    tag: l.RB0.H5,
                    children: C.NW.string(C.t.mmDvV1)
                }),
                (0, n.jsxs)('div', {
                    className: w.paymentSourceItem,
                    children: [
                        (0, n.jsx)(l.Text, {
                            className: w.displayFlex,
                            variant: 'text-md/medium',
                            children: C.NW.string(C.t.y0WGqK)
                        }),
                        (0, n.jsx)(l.Text, {
                            className: w.displayFlex,
                            variant: 'text-md/medium',
                            children: (0, n.jsx)(B, { orbAmount: t })
                        })
                    ]
                })
            ]
        });
    },
    W = (e) => {
        let { skuId: t, orbPriceAmount: r, orbBalance: s } = e;
        return (0, n.jsxs)('div', {
            className: w.stepBody,
            children: [
                (0, n.jsx)(l.vwX, {
                    tag: l.RB0.H5,
                    children: C.NW.string(C.t.sail9P)
                }),
                (0, n.jsx)(A, {
                    skuId: t,
                    orbPriceAmount: r
                }),
                (0, n.jsx)(D, { orbBalance: s }),
                (0, n.jsx)(i.Z, {
                    forceShow: !0,
                    onChange: N.dG4,
                    finePrint: (0, n.jsx)(o.Z, {
                        isOrbCheckout: !0,
                        purchaseType: N.GZQ.ONE_TIME
                    })
                })
            ]
        });
    },
    L = (e) => {
        let { orbPriceAmount: t, orbBalance: r } = e;
        return (0, n.jsxs)(l.mzw, {
            align: d.Z.Align.CENTER,
            children: [
                (0, n.jsx)(T, {
                    orbBalance: r,
                    orbPriceAmount: t,
                    onClick: N.dG4
                }),
                (0, n.jsx)(h.Z, {})
            ]
        });
    },
    Z = () => {
        let { selectedSkuId: e } = (0, j.JL)(),
            { product: t } = (0, c.T)(e),
            r = (0, k.c)(),
            o = (0, s.e7)([S.default], () => v.ZP.canUseCollectibles(S.default.getCurrentUser()));
        if (null == e || null == t) return (0, n.jsx)(l.$jN, { type: l.$jN.Type.WANDERING_CUBES });
        let i = (0, u.T4)({
                product: t,
                isPremiumUser: o
            }),
            a = null !== i ? i.amount : null;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(y.Z, {}),
                (0, n.jsx)(O.C3, {
                    children: (0, n.jsx)(W, {
                        skuId: e,
                        orbPriceAmount: a,
                        orbBalance: r
                    })
                }),
                (0, n.jsx)(O.O3, {
                    children: (0, n.jsx)(L, {
                        orbPriceAmount: a,
                        orbBalance: r
                    })
                })
            ]
        });
    },
    G = [
        {
            key: m.h8.REVIEW,
            renderStep: () => (0, n.jsx)(Z, {}),
            options: { useBreadcrumbLabel: () => C.NW.string(C.t.QBnNHh) }
        }
    ],
    F = (e, t, r) =>
        (0, n.jsx)(x.Z, {
            step: r,
            onClose: () => t(!1)
        }),
    U = (e) => {
        var { skuId: t, loadId: r } = e,
            s = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            s = {},
                            l = Object.keys(e);
                        for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
                }
                return s;
            })(e, ['skuId', 'loadId']);
        return (0, n.jsx)(j.PaymentContextProvider, {
            applicationId: N.XAJ,
            activeSubscription: null,
            loadId: r,
            stepConfigs: G,
            skuIDs: [t],
            children: (0, n.jsx)(p.KB, {
                children: (0, n.jsx)(b.PaymentModal, {
                    applicationId: N.XAJ,
                    transitionState: s.transitionState,
                    onClose: s.onClose,
                    hideShadow: !0,
                    skuId: t,
                    renderHeader: F,
                    initialPlanId: null,
                    analyticsLocations: []
                })
            })
        });
    };
