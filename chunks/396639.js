r.d(t, { OrbCheckoutModalInPaymentModal: () => V });
var n = r(200651),
    s = r(192379),
    i = r(442837),
    l = r(481060),
    o = r(224550),
    c = r(672971),
    a = r(128069),
    u = r(228624),
    d = r(583434),
    p = r(956472),
    m = r(600164),
    b = r(987209),
    j = r(563132),
    x = r(409813),
    h = r(45572),
    y = r(126982),
    f = r(791785),
    C = r(51499),
    g = r(612853),
    O = r(614277),
    P = r(712297),
    k = r(982204),
    v = r(653798),
    S = r(594174),
    N = r(74538),
    E = r(932563),
    I = r(82856),
    A = r(960919),
    _ = r(257493),
    w = r(981631),
    T = r(388032),
    D = r(650075);
function B(e) {
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
function W(e, t) {
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
function R(e, t) {
    if (null == e) return {};
    var r,
        n,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                s = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
    }
    return s;
}
let L = (e) => {
        let { orbAmount: t } = e;
        return (0, n.jsxs)(l.Text, {
            variant: 'text-md/semibold',
            className: D.orbAmountTag,
            children: [
                (0, n.jsx)(A.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14
                }),
                null === t ? '--' : t
            ]
        });
    },
    F = (e) => {
        var { orbBalance: t, orbPriceAmount: r, submitting: s, onClick: i } = e,
            o = R(e, ['orbBalance', 'orbPriceAmount', 'submitting', 'onClick']);
        let c = T.NW.string(T.t.wmcDys),
            a = B(
                {
                    color: l.zxk.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    children: c
                },
                o
            );
        return null === r
            ? (0, n.jsx)(l.ua7, {
                  text: T.NW.string(T.t['c/rcUl']),
                  children: (e) => (0, n.jsx)(l.zxk, W(B({}, e, a), { disabled: !0 }))
              })
            : null === t || r > t
              ? (0, n.jsx)(l.ua7, {
                    text: T.NW.string(T.t.keFvXF),
                    children: (e) => (0, n.jsx)(l.zxk, W(B({}, e, a), { disabled: !0 }))
                })
              : (0, n.jsx)(
                    l.zxk,
                    W(B({}, a), {
                        submitting: s,
                        onClick: i
                    })
                );
    },
    U = (e) => {
        let { orbPriceAmount: t, skuId: r } = e,
            { skusById: s } = (0, P.Z)({
                applicationId: w.XAJ,
                skuIDs: [r],
                isGift: !1,
                currentPaymentSourceId: null
            }),
            i = s[r],
            o = (0, u.ed)('OrbCheckoutPurchaseDetails');
        return void 0 === i
            ? (0, n.jsx)(v.PO, {
                  children: (0, n.jsx)(l.$jN, {
                      type: l.$jN.Type.PULSING_ELLIPSIS,
                      className: D.purchaseDetailsSpinner
                  })
              })
            : (0, n.jsx)(k.E, {
                  sku: i,
                  shouldShowProductPreview: void 0 !== i && o,
                  value: (0, n.jsx)(L, { orbAmount: t })
              });
    },
    Z = (e) => {
        let { orbBalance: t } = e;
        return (0, n.jsxs)('div', {
            className: D.paymentSourceWrapper,
            children: [
                (0, n.jsx)(l.vwX, {
                    tag: l.RB0.H5,
                    children: T.NW.string(T.t.mmDvV1)
                }),
                (0, n.jsxs)('div', {
                    className: D.paymentSourceItem,
                    children: [
                        (0, n.jsx)(l.Text, {
                            className: D.displayFlex,
                            variant: 'text-md/medium',
                            children: T.NW.string(T.t.y0WGqK)
                        }),
                        (0, n.jsx)(l.Text, {
                            className: D.displayFlex,
                            variant: 'text-md/medium',
                            children: (0, n.jsx)(L, { orbAmount: t })
                        })
                    ]
                })
            ]
        });
    },
    M = (e) => {
        let { error: t } = e;
        if (null == t) return;
        let r = '';
        return (
            (r = t.code === a.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? T.NW.string(T.t.keFvXF) : t.code === a.SM.ALREADY_PURCHASED ? T.NW.string(T.t.m371Mz) : T.NW.string(T.t.fqJZ19)),
            (0, n.jsx)('div', {
                className: D.formErrorContainer,
                children: (0, n.jsx)(l.kzN, { children: r })
            })
        );
    },
    z = (e) => {
        let { skuId: t, orbPriceAmount: r, orbBalance: s } = e;
        return (0, n.jsxs)('div', {
            className: D.stepBody,
            children: [
                (0, n.jsx)(l.vwX, {
                    tag: l.RB0.H5,
                    children: T.NW.string(T.t.sail9P)
                }),
                (0, n.jsx)(U, {
                    skuId: t,
                    orbPriceAmount: r
                }),
                (0, n.jsx)(Z, { orbBalance: s }),
                (0, n.jsx)(c.Z, {
                    forceShow: !0,
                    onChange: w.dG4,
                    finePrint: (0, n.jsx)(o.Z, {
                        isOrbCheckout: !0,
                        purchaseType: w.GZQ.ONE_TIME
                    })
                })
            ]
        });
    },
    G = (e) => {
        let { orbPriceAmount: t, orbBalance: r, isSubmitting: s, onClickCheckout: i } = e;
        return (0, n.jsxs)(l.mzw, {
            align: m.Z.Align.CENTER,
            children: [
                (0, n.jsx)(F, {
                    orbBalance: r,
                    orbPriceAmount: t,
                    submitting: s,
                    onClick: i
                }),
                (0, n.jsx)(g.Z, {})
            ]
        });
    },
    X = (e) => {
        var t;
        let { handleClose: r } = e,
            { selectedSkuId: o, purchaseState: c, setPurchaseState: a } = (0, j.JL)(),
            { product: u } = (0, d.T)(o),
            { skuId: m, onRedeemVirtualCurrency: b, isRedeeming: x, orbRedemptionError: y } = (0, _.C)(),
            f = (0, E.c)(),
            g = (0, s.useRef)(f),
            P = (0, i.e7)([S.default], () => N.ZP.canUseCollectibles(S.default.getCurrentUser()));
        (0, s.useEffect)(() => {
            c === h.A.COMPLETED && r();
        }, [c, r]),
            (0, s.useEffect)(() => {
                null != y && null !== g.current && (g.current = null);
            }, [y]);
        let k = (0, s.useCallback)(() => {
            (g.current = f),
                b(() => {
                    a(h.A.COMPLETED);
                });
        }, [b, a, f]);
        if (null == o || null == u) return (0, n.jsx)(l.$jN, { type: l.$jN.Type.WANDERING_CUBES });
        let v = null !== (t = g.current) && void 0 !== t ? t : f,
            I = (0, p.T4)({
                product: u,
                isPremiumUser: P
            }),
            A = null !== I ? I.amount : null;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(C.Z, {}),
                (0, n.jsxs)(O.C3, {
                    children: [
                        (0, n.jsx)(M, { error: y }),
                        (0, n.jsx)(z, {
                            skuId: m,
                            orbPriceAmount: A,
                            orbBalance: v
                        })
                    ]
                }),
                (0, n.jsx)(O.O3, {
                    children: (0, n.jsx)(G, {
                        orbPriceAmount: A,
                        orbBalance: v,
                        isSubmitting: x,
                        onClickCheckout: k
                    })
                })
            ]
        });
    },
    H = [
        {
            key: x.h8.REVIEW,
            renderStep: (e) => (0, n.jsx)(X, B({}, e)),
            options: { useBreadcrumbLabel: () => T.NW.string(T.t.QBnNHh) }
        }
    ],
    J = (e, t, r) =>
        (0, n.jsx)(y.Z, {
            isOrbCheckout: !0,
            step: r,
            onClose: () => t(!1)
        }),
    V = (e) => {
        var { skuId: t, loadId: r, onCheckoutSuccess: s, analyticsLocations: i = [] } = e,
            l = R(e, ['skuId', 'loadId', 'onCheckoutSuccess', 'analyticsLocations']);
        return (0, n.jsx)(j.PaymentContextProvider, {
            applicationId: w.XAJ,
            activeSubscription: null,
            loadId: r,
            stepConfigs: H,
            skuIDs: [t],
            children: (0, n.jsx)(_.d, {
                skuId: t,
                onCheckoutSuccess: s,
                children: (0, n.jsx)(b.KB, {
                    children: (0, n.jsx)(f.PaymentModal, {
                        applicationId: w.XAJ,
                        transitionState: l.transitionState,
                        onClose: (e) => {
                            e || (0, I.vp)(), l.onClose();
                        },
                        hideShadow: !0,
                        skuId: t,
                        renderHeader: J,
                        initialPlanId: null,
                        analyticsLocations: i
                    })
                })
            })
        });
    };
