n.d(t, {
    _Y: () => K,
    default: () => ee
});
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(224550),
    l = n(672971),
    o = n(128069),
    c = n(493773),
    d = n(228624),
    u = n(583434),
    m = n(600164),
    g = n(987209),
    p = n(563132),
    h = n(409813),
    f = n(45572),
    b = n(126982),
    N = n(791785),
    x = n(51499),
    _ = n(612853),
    E = n(614277),
    j = n(712297),
    O = n(982204),
    C = n(653798),
    S = n(626135),
    v = n(932563),
    T = n(82856),
    I = n(960919),
    y = n(257493),
    A = n(981631),
    P = n(215023),
    R = n(474936),
    D = n(231338),
    Z = n(388032),
    w = n(363833);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let B = (e) => (e === P.Vt.FRACTIONAL_PREMIUM ? R.CL : A.XAJ),
    M = (e) => {
        let { orbAmount: t } = e;
        return (0, r.jsxs)(s.Text, {
            variant: 'text-md/semibold',
            className: w.orbAmountTag,
            children: [
                (0, r.jsx)(I.Z, {
                    shouldUseThemeColor: !0,
                    customSize: 14
                }),
                null === t ? '--' : t
            ]
        });
    },
    U = (e) => {
        var { orbBalance: t, orbPriceAmount: n, submitting: i, onClick: a } = e,
            l = L(e, ['orbBalance', 'orbPriceAmount', 'submitting', 'onClick']);
        let o = Z.NW.string(Z.t.wmcDys),
            c = k(
                {
                    color: s.zxk.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    children: o
                },
                l
            );
        return null === n
            ? (0, r.jsx)(s.ua7, {
                  text: Z.NW.string(Z.t['c/rcUl']),
                  children: (e) => (0, r.jsx)(s.zxk, W(k({}, e, c), { disabled: !0 }))
              })
            : null === t || n > t
              ? (0, r.jsx)(s.ua7, {
                    text: Z.NW.string(Z.t.keFvXF),
                    children: (e) => (0, r.jsx)(s.zxk, W(k({}, e, c), { disabled: !0 }))
                })
              : (0, r.jsx)(
                    s.zxk,
                    W(k({}, c), {
                        submitting: i,
                        onClick: a
                    })
                );
    },
    V = (e) => {
        let { orbPriceAmount: t, skuId: n } = e,
            { skusById: i } = (0, j.Z)({
                applicationId: B(n),
                skuIDs: [n],
                isGift: !1,
                currentPaymentSourceId: null
            }),
            a = i[n],
            l = (0, d.ed)('OrbCheckoutPurchaseDetails');
        return void 0 === a
            ? (0, r.jsx)(C.PO, {
                  children: (0, r.jsx)(s.$jN, {
                      type: s.$jN.Type.PULSING_ELLIPSIS,
                      className: w.purchaseDetailsSpinner
                  })
              })
            : (0, r.jsx)(O.E, {
                  sku: a,
                  shouldShowProductPreview: void 0 !== a && l,
                  value: (0, r.jsx)(M, { orbAmount: t })
              });
    },
    G = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsxs)('div', {
            className: w.paymentSourceWrapper,
            children: [
                (0, r.jsx)(s.vwX, {
                    tag: s.RB0.H5,
                    children: Z.NW.string(Z.t.mmDvV1)
                }),
                (0, r.jsxs)('div', {
                    className: w.paymentSourceItem,
                    children: [
                        (0, r.jsx)(s.Text, {
                            className: w.displayFlex,
                            variant: 'text-md/medium',
                            children: Z.NW.string(Z.t.y0WGqK)
                        }),
                        (0, r.jsx)(s.Text, {
                            className: w.displayFlex,
                            variant: 'text-md/medium',
                            children: (0, r.jsx)(M, { orbAmount: t })
                        })
                    ]
                })
            ]
        });
    },
    F = (e) => {
        let { error: t } = e;
        if (null == t) return;
        let n = '';
        return (
            (n = t.code === o.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? Z.NW.string(Z.t.keFvXF) : t.code === o.SM.ALREADY_PURCHASED ? Z.NW.string(Z.t.m371Mz) : Z.NW.string(Z.t.fqJZ19)),
            (0, r.jsx)('div', {
                className: w.formErrorContainer,
                children: (0, r.jsx)(s.kzN, { children: n })
            })
        );
    },
    H = (e) => {
        let { skuId: t, orbPriceAmount: n, orbBalance: i } = e;
        return (0, r.jsxs)('div', {
            className: w.stepBody,
            children: [
                (0, r.jsx)(s.vwX, {
                    tag: s.RB0.H5,
                    children: Z.NW.string(Z.t.sail9P)
                }),
                (0, r.jsx)(V, {
                    skuId: t,
                    orbPriceAmount: n
                }),
                (0, r.jsx)(G, { orbBalance: i }),
                (0, r.jsx)(l.Z, {
                    forceShow: !0,
                    onChange: A.dG4,
                    finePrint: (0, r.jsx)(a.Z, {
                        isOrbCheckout: !0,
                        skuId: t,
                        purchaseType: A.GZQ.ONE_TIME
                    })
                })
            ]
        });
    },
    z = (e) => {
        let { orbPriceAmount: t, orbBalance: n, isSubmitting: i, onClickCheckout: a } = e;
        return (0, r.jsxs)(s.mzw, {
            align: m.Z.Align.CENTER,
            children: [
                (0, r.jsx)(U, {
                    orbBalance: n,
                    orbPriceAmount: t,
                    submitting: i,
                    onClick: a
                }),
                (0, r.jsx)(_.Z, {})
            ]
        });
    },
    Y = {
        payment_type: A.Zuq[A.GZQ.ONE_TIME],
        is_gift: !1,
        eligible_for_trial: !1,
        payment_modal_version: N.PaymentModal.CURRENT_VERSION
    },
    K = (e, t) => {
        let { loadId: n, skuId: r, analyticsLocations: i, analyticsSourceLocation: s } = t;
        e === A.rMx.PAYMENT_FLOW_CANCELED &&
            S.default.track(
                A.rMx.PAYMENT_FLOW_CANCELED,
                k(
                    {
                        load_id: n,
                        application_id: B(r),
                        location: i,
                        location_stack: i,
                        sku_id: r,
                        currency: A.pKx.DISCORD_ORB
                    },
                    null != s && { source: s },
                    Y
                )
            );
    },
    q = () => {
        let { activitySessionId: e, hasPaymentSources: t, contextMetadata: n } = (0, p.JL)(),
            { loadId: r, startTime: s } = n,
            { skuId: a, orbProductContext: l, analyticsLocations: o, analyticsSourceLocation: c } = (0, y.C)(),
            d = (0, i.useMemo)(() => {
                var t, n;
                return k(
                    W(
                        k(
                            {
                                load_id: r,
                                application_id: B(a),
                                location: o,
                                location_stack: o,
                                sku_id: a,
                                activity_session_id: e
                            },
                            null != l && {
                                price: null != (t = l.orbPriceAmount) ? t : void 0,
                                regular_price: null != (n = l.orbPriceAmount) ? n : void 0
                            }
                        ),
                        { currency: A.pKx.DISCORD_ORB }
                    ),
                    null != c && { source: c },
                    Y
                );
            }, [r, e, a, o, c, l]);
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, i.useCallback)(
                (e) => {
                    let n = Date.now() - s;
                    e === A.rMx.PAYMENT_FLOW_STARTED
                        ? S.default.track(
                              A.rMx.PAYMENT_FLOW_STARTED,
                              W(k({}, d), {
                                  has_saved_payment_source: t,
                                  payment_gateway: D.ht.VIRTUAL_CURRENCY,
                                  continue_session_initial_step: null
                              })
                          )
                        : e === A.rMx.PAYMENT_FLOW_LOADED
                          ? S.default.track(
                                A.rMx.PAYMENT_FLOW_LOADED,
                                W(k({}, d), {
                                    has_saved_payment_source: t,
                                    initial_step: h.h8.REVIEW,
                                    duration_ms: n
                                })
                            )
                          : e === A.rMx.PAYMENT_FLOW_CANCELED
                            ? S.default.track(A.rMx.PAYMENT_FLOW_CANCELED, W(k({}, d), { duration_ms: n }))
                            : e === A.rMx.PAYMENT_FLOW_COMPLETED
                              ? S.default.track(
                                    A.rMx.PAYMENT_FLOW_COMPLETED,
                                    W(k({}, d), {
                                        payment_gateway: D.ht.VIRTUAL_CURRENCY,
                                        duration_ms: n
                                    })
                                )
                              : e === A.rMx.PAYMENT_FLOW_SUCCEEDED
                                ? S.default.track(A.rMx.PAYMENT_FLOW_SUCCEEDED, W(k({}, d), { duration_ms: n }))
                                : e === A.rMx.PAYMENT_FLOW_FAILED &&
                                  S.default.track(
                                      A.rMx.PAYMENT_FLOW_FAILED,
                                      W(k({}, d), {
                                          payment_gateway: D.ht.VIRTUAL_CURRENCY,
                                          duration_ms: n
                                      })
                                  );
                },
                [s, d, t]
            )
        };
    },
    X = (e) => {
        var t;
        let { handleClose: n } = e,
            { selectedSkuId: a, purchaseState: l, setPurchaseState: o } = (0, p.JL)(),
            { product: d } = (0, u.T)(a),
            { emitOrbCheckoutPaymentFlowEvent: m } = q(),
            { skuId: g, onRedeemVirtualCurrency: h, isRedeeming: b, orbRedemptionError: N, orbProductContext: _ } = (0, y.C)(),
            j = (0, v.c)(),
            O = (0, i.useRef)(j);
        (0, c.ZP)(() => {
            m(A.rMx.PAYMENT_FLOW_LOADED);
        }),
            (0, i.useEffect)(() => {
                l === f.A.COMPLETED && n();
            }, [l, n]),
            (0, i.useEffect)(() => {
                null != N && null !== O.current && (m(A.rMx.PAYMENT_FLOW_FAILED), (O.current = null));
            }, [N, m]);
        let C = (0, i.useCallback)(() => {
            (O.current = j),
                m(A.rMx.PAYMENT_FLOW_COMPLETED),
                h(() => {
                    o(f.A.COMPLETED), m(A.rMx.PAYMENT_FLOW_SUCCEEDED);
                });
        }, [h, o, j, m]);
        if (null == a || null == d) return (0, r.jsx)(s.$jN, { type: s.$jN.Type.WANDERING_CUBES });
        let S = null != (t = O.current) ? t : j,
            T = null != _ ? _.orbPriceAmount : null;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(x.Z, {}),
                (0, r.jsxs)(E.C3, {
                    children: [
                        (0, r.jsx)(F, { error: N }),
                        (0, r.jsx)(H, {
                            skuId: g,
                            orbPriceAmount: T,
                            orbBalance: S
                        })
                    ]
                }),
                (0, r.jsx)(E.O3, {
                    children: (0, r.jsx)(z, {
                        orbPriceAmount: T,
                        orbBalance: S,
                        isSubmitting: b,
                        onClickCheckout: C
                    })
                })
            ]
        });
    },
    J = [
        {
            key: h.h8.REVIEW,
            renderStep: (e) => (0, r.jsx)(X, k({}, e)),
            options: { useBreadcrumbLabel: () => Z.NW.string(Z.t.QBnNHh) }
        }
    ],
    Q = (e, t, n) =>
        (0, r.jsx)(b.Z, {
            isOrbCheckout: !0,
            step: n,
            onClose: () => t(!1)
        }),
    $ = (e) => {
        var { skuId: t, analyticsLocations: n = [] } = e,
            s = L(e, ['skuId', 'analyticsLocations']);
        let { orbProductContext: a } = (0, y.C)(),
            { emitOrbCheckoutPaymentFlowEvent: l } = q(),
            o = (0, i.useMemo)(() => {
                var e, t;
                if (null != a)
                    return {
                        price: null != (e = a.orbPriceAmount) ? e : void 0,
                        regular_price: null != (t = a.orbPriceAmount) ? t : void 0,
                        currency: A.pKx.DISCORD_ORB
                    };
            }, [a]);
        return (0, r.jsx)(N.PaymentModal, {
            applicationId: B(t),
            transitionState: s.transitionState,
            analyticsDataOverride: o,
            onClose: (e) => {
                e || (l(A.rMx.PAYMENT_FLOW_CANCELED), (0, T.vp)()), s.onClose();
            },
            hideShadow: !0,
            skuId: t,
            renderHeader: Q,
            initialPlanId: null,
            analyticsLocations: n
        });
    },
    ee = (e) => {
        var { skuId: t, loadId: n, onCheckoutSuccess: i, analyticsSourceLocation: s, analyticsLocations: a = [] } = e,
            l = L(e, ['skuId', 'loadId', 'onCheckoutSuccess', 'analyticsSourceLocation', 'analyticsLocations']);
        return (0, r.jsx)(p.PaymentContextProvider, {
            applicationId: B(t),
            activeSubscription: null,
            loadId: n,
            stepConfigs: J,
            purchaseType: A.GZQ.ONE_TIME,
            skuIDs: [t],
            children: (0, r.jsx)(y.d, {
                skuId: t,
                loadId: n,
                onCheckoutSuccess: i,
                analyticsLocations: a,
                analyticsSourceLocation: s,
                children: (0, r.jsx)(g.KB, { children: (0, r.jsx)($, k({ skuId: t }, l)) })
            })
        });
    };
