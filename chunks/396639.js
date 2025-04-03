r.d(t, { OrbCheckoutModalInPaymentModal: () => K });
var n = r(200651),
    l = r(192379),
    s = r(442837),
    o = r(481060),
    i = r(224550),
    u = r(672971),
    c = r(128069),
    a = r(228624),
    d = r(583434),
    p = r(956472),
    m = r(600164),
    b = r(987209),
    x = r(563132),
    h = r(409813),
    j = r(45572),
    f = r(126982),
    y = r(791785),
    g = r(51499),
    C = r(612853),
    O = r(614277),
    v = r(712297),
    S = r(982204),
    P = r(653798),
    I = r(594174),
    k = r(74538),
    N = r(932563),
    _ = r(82856),
    E = r(960919),
    R = r(257493),
    A = r(981631),
    D = r(388032),
    B = r(363833);
function w(e) {
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
function T(e, t) {
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
function W(e, t) {
    if (null == e) return {};
    var r,
        n,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                s = Object.keys(e);
            for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++) (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    }
    return l;
}
let Z = (e) => {
        let { orbAmount: t } = e;
        return (0, n.jsxs)(o.Text, {
            variant: 'text-md/semibold',
            className: B.orbAmountTag,
            children: [
                (0, n.jsx)(E.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14
                }),
                null === t ? '--' : t
            ]
        });
    },
    U = (e) => {
        var { orbBalance: t, orbPriceAmount: r, submitting: l, onClick: s } = e,
            i = W(e, ['orbBalance', 'orbPriceAmount', 'submitting', 'onClick']);
        let u = D.NW.string(D.t.wmcDys),
            c = w(
                {
                    color: o.zxk.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    children: u
                },
                i
            );
        return null === r
            ? (0, n.jsx)(o.ua7, {
                  text: D.NW.string(D.t['c/rcUl']),
                  children: (e) => (0, n.jsx)(o.zxk, T(w({}, e, c), { disabled: !0 }))
              })
            : null === t || r > t
              ? (0, n.jsx)(o.ua7, {
                    text: D.NW.string(D.t.keFvXF),
                    children: (e) => (0, n.jsx)(o.zxk, T(w({}, e, c), { disabled: !0 }))
                })
              : (0, n.jsx)(
                    o.zxk,
                    T(w({}, c), {
                        submitting: l,
                        onClick: s
                    })
                );
    },
    L = (e) => {
        let { orbPriceAmount: t, skuId: r } = e,
            { skusById: l } = (0, v.Z)({
                applicationId: A.XAJ,
                skuIDs: [r],
                isGift: !1,
                currentPaymentSourceId: null
            }),
            s = l[r],
            i = (0, a.ed)('OrbCheckoutPurchaseDetails');
        return void 0 === s
            ? (0, n.jsx)(P.PO, {
                  children: (0, n.jsx)(o.$jN, {
                      type: o.$jN.Type.PULSING_ELLIPSIS,
                      className: B.purchaseDetailsSpinner
                  })
              })
            : (0, n.jsx)(S.E, {
                  sku: s,
                  shouldShowProductPreview: void 0 !== s && i,
                  value: (0, n.jsx)(Z, { orbAmount: t })
              });
    },
    F = (e) => {
        let { orbBalance: t } = e;
        return (0, n.jsxs)('div', {
            className: B.paymentSourceWrapper,
            children: [
                (0, n.jsx)(o.vwX, {
                    tag: o.RB0.H5,
                    children: D.NW.string(D.t.mmDvV1)
                }),
                (0, n.jsxs)('div', {
                    className: B.paymentSourceItem,
                    children: [
                        (0, n.jsx)(o.Text, {
                            className: B.displayFlex,
                            variant: 'text-md/medium',
                            children: D.NW.string(D.t.y0WGqK)
                        }),
                        (0, n.jsx)(o.Text, {
                            className: B.displayFlex,
                            variant: 'text-md/medium',
                            children: (0, n.jsx)(Z, { orbAmount: t })
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
            (r = t.code === c.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? D.NW.string(D.t.keFvXF) : t.code === c.SM.ALREADY_PURCHASED ? D.NW.string(D.t.m371Mz) : D.NW.string(D.t.fqJZ19)),
            (0, n.jsx)('div', {
                className: B.formErrorContainer,
                children: (0, n.jsx)(o.kzN, { children: r })
            })
        );
    },
    z = (e) => {
        let { skuId: t, orbPriceAmount: r, orbBalance: l } = e;
        return (0, n.jsxs)('div', {
            className: B.stepBody,
            children: [
                (0, n.jsx)(o.vwX, {
                    tag: o.RB0.H5,
                    children: D.NW.string(D.t.sail9P)
                }),
                (0, n.jsx)(L, {
                    skuId: t,
                    orbPriceAmount: r
                }),
                (0, n.jsx)(F, { orbBalance: l }),
                (0, n.jsx)(u.Z, {
                    forceShow: !0,
                    onChange: A.dG4,
                    finePrint: (0, n.jsx)(i.Z, {
                        isOrbCheckout: !0,
                        skuId: t,
                        purchaseType: A.GZQ.ONE_TIME
                    })
                })
            ]
        });
    },
    G = (e) => {
        let { orbPriceAmount: t, orbBalance: r, isSubmitting: l, onClickCheckout: s } = e;
        return (0, n.jsxs)(o.mzw, {
            align: m.Z.Align.CENTER,
            children: [
                (0, n.jsx)(U, {
                    orbBalance: r,
                    orbPriceAmount: t,
                    submitting: l,
                    onClick: s
                }),
                (0, n.jsx)(C.Z, {})
            ]
        });
    },
    J = (e) => {
        var t;
        let { handleClose: r } = e,
            { selectedSkuId: i, purchaseState: u, setPurchaseState: c } = (0, x.JL)(),
            { product: a } = (0, d.T)(i),
            { skuId: m, onRedeemVirtualCurrency: b, isRedeeming: h, orbRedemptionError: f } = (0, R.C)(),
            y = (0, N.c)(),
            C = (0, l.useRef)(y),
            v = (0, s.e7)([I.default], () => k.ZP.canUseCollectibles(I.default.getCurrentUser()));
        (0, l.useEffect)(() => {
            u === j.A.COMPLETED && r();
        }, [u, r]),
            (0, l.useEffect)(() => {
                null != f && null !== C.current && (C.current = null);
            }, [f]);
        let S = (0, l.useCallback)(() => {
            (C.current = y),
                b(() => {
                    c(j.A.COMPLETED);
                });
        }, [b, c, y]);
        if (null == i || null == a) return (0, n.jsx)(o.$jN, { type: o.$jN.Type.WANDERING_CUBES });
        let P = null != (t = C.current) ? t : y,
            _ = (0, p.T4)({
                product: a,
                isPremiumUser: v
            }),
            E = null !== _ ? _.amount : null;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(g.Z, {}),
                (0, n.jsxs)(O.C3, {
                    children: [
                        (0, n.jsx)(M, { error: f }),
                        (0, n.jsx)(z, {
                            skuId: m,
                            orbPriceAmount: E,
                            orbBalance: P
                        })
                    ]
                }),
                (0, n.jsx)(O.O3, {
                    children: (0, n.jsx)(G, {
                        orbPriceAmount: E,
                        orbBalance: P,
                        isSubmitting: h,
                        onClickCheckout: S
                    })
                })
            ]
        });
    },
    V = [
        {
            key: h.h8.REVIEW,
            renderStep: (e) => (0, n.jsx)(J, w({}, e)),
            options: { useBreadcrumbLabel: () => D.NW.string(D.t.QBnNHh) }
        }
    ],
    X = (e, t, r) =>
        (0, n.jsx)(f.Z, {
            isOrbCheckout: !0,
            step: r,
            onClose: () => t(!1)
        }),
    K = (e) => {
        var { skuId: t, loadId: r, onCheckoutSuccess: l, analyticsLocations: s = [] } = e,
            o = W(e, ['skuId', 'loadId', 'onCheckoutSuccess', 'analyticsLocations']);
        return (0, n.jsx)(x.PaymentContextProvider, {
            applicationId: A.XAJ,
            activeSubscription: null,
            loadId: r,
            stepConfigs: V,
            skuIDs: [t],
            children: (0, n.jsx)(R.d, {
                skuId: t,
                onCheckoutSuccess: l,
                children: (0, n.jsx)(b.KB, {
                    children: (0, n.jsx)(y.PaymentModal, {
                        applicationId: A.XAJ,
                        transitionState: o.transitionState,
                        onClose: (e) => {
                            e || (0, _.vp)(), o.onClose();
                        },
                        hideShadow: !0,
                        skuId: t,
                        renderHeader: X,
                        initialPlanId: null,
                        analyticsLocations: s
                    })
                })
            })
        });
    };
