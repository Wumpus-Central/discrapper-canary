r.d(t, { OrbCheckoutModalInPaymentModal: () => V });
var n = r(200651),
    s = r(192379),
    i = r(442837),
    o = r(481060),
    l = r(224550),
    a = r(672971),
    c = r(128069),
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
    S = r(653798),
    v = r(594174),
    N = r(74538),
    I = r(932563),
    E = r(82856),
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
        return (0, n.jsxs)(o.Text, {
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
            l = R(e, ['orbBalance', 'orbPriceAmount', 'submitting', 'onClick']);
        let a = T.NW.string(T.t.wmcDys),
            c = B(
                {
                    color: o.zxk.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    children: a
                },
                l
            );
        return null === r
            ? (0, n.jsx)(o.ua7, {
                  text: T.NW.string(T.t['c/rcUl']),
                  children: (e) => (0, n.jsx)(o.zxk, W(B({}, e, c), { disabled: !0 }))
              })
            : null === t || r > t
              ? (0, n.jsx)(o.ua7, {
                    text: T.NW.string(T.t.keFvXF),
                    children: (e) => (0, n.jsx)(o.zxk, W(B({}, e, c), { disabled: !0 }))
                })
              : (0, n.jsx)(
                    o.zxk,
                    W(B({}, c), {
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
            l = (0, u.ed)('OrbCheckoutPurchaseDetails');
        return void 0 === i
            ? (0, n.jsx)(S.PO, {
                  children: (0, n.jsx)(o.$jN, {
                      type: o.$jN.Type.PULSING_ELLIPSIS,
                      className: D.purchaseDetailsSpinner
                  })
              })
            : (0, n.jsx)(k.E, {
                  sku: i,
                  shouldShowProductPreview: void 0 !== i && l,
                  value: (0, n.jsx)(L, { orbAmount: t })
              });
    },
    Z = (e) => {
        let { orbBalance: t } = e;
        return (0, n.jsxs)('div', {
            className: D.paymentSourceWrapper,
            children: [
                (0, n.jsx)(o.vwX, {
                    tag: o.RB0.H5,
                    children: T.NW.string(T.t.mmDvV1)
                }),
                (0, n.jsxs)('div', {
                    className: D.paymentSourceItem,
                    children: [
                        (0, n.jsx)(o.Text, {
                            className: D.displayFlex,
                            variant: 'text-md/medium',
                            children: T.NW.string(T.t.y0WGqK)
                        }),
                        (0, n.jsx)(o.Text, {
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
            (r = t.code === c.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? T.NW.string(T.t.keFvXF) : t.code === c.SM.ALREADY_PURCHASED ? T.NW.string(T.t.m371Mz) : T.NW.string(T.t.fqJZ19)),
            (0, n.jsx)('div', {
                className: D.formErrorContainer,
                children: (0, n.jsx)(o.kzN, { children: r })
            })
        );
    },
    z = (e) => {
        let { skuId: t, orbPriceAmount: r, orbBalance: s } = e;
        return (0, n.jsxs)('div', {
            className: D.stepBody,
            children: [
                (0, n.jsx)(o.vwX, {
                    tag: o.RB0.H5,
                    children: T.NW.string(T.t.sail9P)
                }),
                (0, n.jsx)(U, {
                    skuId: t,
                    orbPriceAmount: r
                }),
                (0, n.jsx)(Z, { orbBalance: s }),
                (0, n.jsx)(a.Z, {
                    forceShow: !0,
                    onChange: w.dG4,
                    finePrint: (0, n.jsx)(l.Z, {
                        isOrbCheckout: !0,
                        purchaseType: w.GZQ.ONE_TIME
                    })
                })
            ]
        });
    },
    G = (e) => {
        let { orbPriceAmount: t, orbBalance: r, isSubmitting: s, onClickCheckout: i } = e;
        return (0, n.jsxs)(o.mzw, {
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
        let { handleClose: t } = e,
            { selectedSkuId: r, purchaseState: l, setPurchaseState: a } = (0, j.JL)(),
            { product: c } = (0, d.T)(r),
            u = (0, I.c)(),
            m = (0, i.e7)([v.default], () => N.ZP.canUseCollectibles(v.default.getCurrentUser())),
            { skuId: b, onRedeemVirtualCurrency: x, isRedeeming: y, orbRedemptionError: f } = (0, _.C)();
        (0, s.useEffect)(() => {
            l === h.A.COMPLETED && t();
        }, [l, t]);
        let g = (0, s.useCallback)(() => {
            x(() => {
                a(h.A.COMPLETED);
            });
        }, [x, a]);
        if (null == r || null == c) return (0, n.jsx)(o.$jN, { type: o.$jN.Type.WANDERING_CUBES });
        let P = (0, p.T4)({
                product: c,
                isPremiumUser: m
            }),
            k = null !== P ? P.amount : null;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(C.Z, {}),
                (0, n.jsxs)(O.C3, {
                    children: [
                        (0, n.jsx)(M, { error: f }),
                        (0, n.jsx)(z, {
                            skuId: b,
                            orbPriceAmount: k,
                            orbBalance: u
                        })
                    ]
                }),
                (0, n.jsx)(O.O3, {
                    children: (0, n.jsx)(G, {
                        orbPriceAmount: k,
                        orbBalance: u,
                        isSubmitting: y,
                        onClickCheckout: g
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
            o = R(e, ['skuId', 'loadId', 'onCheckoutSuccess', 'analyticsLocations']);
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
                        transitionState: o.transitionState,
                        onClose: (e) => {
                            e || (0, E.vp)(), o.onClose();
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
