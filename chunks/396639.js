n.d(t, {
    _Y: () => y,
    default: () => k
});
var i = n(255367),
    r = n(73800),
    s = n(481060),
    a = n(493773),
    l = n(89057),
    o = n(583434),
    c = n(987209),
    d = n(563132),
    u = n(409813),
    m = n(45572),
    p = n(126982),
    g = n(791785),
    h = n(51499),
    f = n(27034),
    b = n(626135),
    x = n(152521),
    _ = n(932563),
    j = n(621490),
    E = n(257493),
    O = n(981631),
    C = n(231338),
    v = n(388032);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                s = Object.keys(e);
            for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
}
let I = {
        payment_type: O.Zuq[O.GZQ.ONE_TIME],
        is_gift: !1,
        eligible_for_trial: !1,
        payment_modal_version: g.PaymentModal.CURRENT_VERSION
    },
    y = (e, t) => {
        let { loadId: n, skuId: i, analyticsLocations: r, analyticsSourceLocation: s } = t;
        e === O.rMx.PAYMENT_FLOW_CANCELED &&
            b.default.track(
                O.rMx.PAYMENT_FLOW_CANCELED,
                S(
                    {
                        load_id: n,
                        application_id: (0, x.N)(i),
                        location: r,
                        location_stack: r,
                        sku_id: i,
                        currency: O.pKx.DISCORD_ORB
                    },
                    null != s && { source: s },
                    I
                )
            );
    },
    A = () => {
        let { activitySessionId: e, hasPaymentSources: t, contextMetadata: n } = (0, d.JL)(),
            { loadId: i, startTime: s } = n,
            { skuId: a, orbProductContext: l, analyticsLocations: o, analyticsSourceLocation: c } = (0, E.C)(),
            m = (0, r.useMemo)(() => {
                var t, n;
                return S(
                    T(
                        S(
                            {
                                load_id: i,
                                application_id: (0, x.N)(a),
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
                        { currency: O.pKx.DISCORD_ORB }
                    ),
                    null != c && { source: c },
                    I
                );
            }, [i, e, a, o, c, l]);
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, r.useCallback)(
                (e, n) => {
                    let i = Date.now() - s;
                    e === O.rMx.PAYMENT_FLOW_STARTED
                        ? b.default.track(
                              O.rMx.PAYMENT_FLOW_STARTED,
                              T(S({}, m), {
                                  has_saved_payment_source: t,
                                  payment_gateway: C.ht.VIRTUAL_CURRENCY,
                                  continue_session_initial_step: null
                              })
                          )
                        : e === O.rMx.PAYMENT_FLOW_LOADED
                          ? b.default.track(
                                O.rMx.PAYMENT_FLOW_LOADED,
                                T(S({}, m), {
                                    has_saved_payment_source: t,
                                    initial_step: u.h8.REVIEW,
                                    duration_ms: i
                                })
                            )
                          : e === O.rMx.PAYMENT_FLOW_CANCELED
                            ? b.default.track(O.rMx.PAYMENT_FLOW_CANCELED, T(S({}, m), { duration_ms: i }))
                            : e === O.rMx.PAYMENT_FLOW_COMPLETED
                              ? b.default.track(
                                    O.rMx.PAYMENT_FLOW_COMPLETED,
                                    T(S({}, m), {
                                        payment_gateway: C.ht.VIRTUAL_CURRENCY,
                                        duration_ms: i
                                    })
                                )
                              : e === O.rMx.PAYMENT_FLOW_SUCCEEDED
                                ? b.default.track(O.rMx.PAYMENT_FLOW_SUCCEEDED, T(S({}, m), { duration_ms: i }))
                                : e === O.rMx.PAYMENT_FLOW_FAILED &&
                                  b.default.track(
                                      O.rMx.PAYMENT_FLOW_FAILED,
                                      S(
                                          T(S({}, m), {
                                              payment_gateway: C.ht.VIRTUAL_CURRENCY,
                                              duration_ms: i
                                          }),
                                          null != n
                                              ? {
                                                    payment_error_code: n.code,
                                                    error_message: n.message
                                                }
                                              : {}
                                      )
                                  );
                },
                [s, m, t]
            )
        };
    },
    P = (e) => {
        let { handleClose: t, handleStepChange: n } = e,
            { blockedPayments: s } = (0, d.JL)();
        return ((0, r.useEffect)(() => {
            s || n(u.h8.REVIEW);
        }, [s, n]),
        s)
            ? (0, i.jsx)(l.Vq, { onClose: t })
            : null;
    },
    R = (e) => {
        var t;
        let { handleClose: n } = e,
            { selectedSkuId: l, purchaseState: c, setPurchaseState: u } = (0, d.JL)(),
            { product: p } = (0, o.T)(l),
            { emitOrbCheckoutPaymentFlowEvent: g } = A(),
            { skuId: b, onRedeemVirtualCurrency: x, isRedeeming: C, orbRedemptionError: v, orbProductContext: S } = (0, E.C)(),
            T = (0, _.cR)(),
            N = (0, r.useRef)(T);
        ((0, a.ZP)(() => {
            g(O.rMx.PAYMENT_FLOW_LOADED);
        }),
            (0, r.useEffect)(() => {
                c === m.A.COMPLETED && n();
            }, [c, n]),
            (0, r.useEffect)(() => {
                null != v && null !== N.current && (g(O.rMx.PAYMENT_FLOW_FAILED, v), (N.current = null));
            }, [v, g]));
        let I = (0, r.useCallback)(() => {
            ((N.current = T),
                g(O.rMx.PAYMENT_FLOW_COMPLETED),
                x(() => {
                    (u(m.A.COMPLETED), g(O.rMx.PAYMENT_FLOW_SUCCEEDED));
                }));
        }, [x, u, T, g]);
        if (null == l || null == p) return (0, i.jsx)(s.$jN, { type: s.$jN.Type.WANDERING_CUBES });
        let y = null != (t = N.current) ? t : T,
            P = null != S ? S.orbPriceAmount : null;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(h.Z, {}),
                (0, i.jsxs)(f.C3, {
                    children: [
                        (0, i.jsx)(j.gY, { error: v }),
                        (0, i.jsx)(j.A3, {
                            skuId: b,
                            orbPriceAmount: P,
                            orbBalance: y
                        })
                    ]
                }),
                (0, i.jsx)(f.O3, {
                    children: (0, i.jsx)(j.f9, {
                        orbPriceAmount: P,
                        orbBalance: y,
                        isSubmitting: C,
                        onClickCheckout: I
                    })
                })
            ]
        });
    },
    D = [
        {
            key: null,
            renderStep: (e) => (0, i.jsx)(P, S({}, e))
        },
        {
            key: u.h8.REVIEW,
            renderStep: (e) => (0, i.jsx)(R, S({}, e)),
            options: { useBreadcrumbLabel: () => v.intl.string(v.t.QBnNHh) }
        }
    ],
    Z = (e, t, n) =>
        (0, i.jsx)(p.Z, {
            isOrbCheckout: !0,
            step: n,
            onClose: () => t(!1)
        }),
    w = (e) => {
        var { skuId: t, analyticsLocations: n = [] } = e,
            s = N(e, ['skuId', 'analyticsLocations']);
        let { orbProductContext: a } = (0, E.C)(),
            { emitOrbCheckoutPaymentFlowEvent: l } = A(),
            o = (0, r.useMemo)(() => {
                var e, t;
                if (null != a)
                    return {
                        price: null != (e = a.orbPriceAmount) ? e : void 0,
                        regular_price: null != (t = a.orbPriceAmount) ? t : void 0,
                        currency: O.pKx.DISCORD_ORB
                    };
            }, [a]),
            c = (0, r.useCallback)(
                async (e) => {
                    (e || l(O.rMx.PAYMENT_FLOW_CANCELED), await s.onClose());
                },
                [s, l]
            );
        return (0, i.jsx)(g.PaymentModal, {
            applicationId: (0, x.N)(t),
            transitionState: s.transitionState,
            analyticsDataOverride: o,
            onClose: c,
            hideShadow: !0,
            skuId: t,
            renderHeader: Z,
            initialPlanId: null,
            analyticsLocations: n
        });
    },
    k = (e) => {
        var { skuId: t, loadId: n, onCheckoutSuccess: r, analyticsSourceLocation: s, analyticsLocations: a = [] } = e,
            l = N(e, ['skuId', 'loadId', 'onCheckoutSuccess', 'analyticsSourceLocation', 'analyticsLocations']);
        return (0, i.jsx)(d.PaymentContextProvider, {
            applicationId: (0, x.N)(t),
            activeSubscription: null,
            loadId: n,
            stepConfigs: D,
            purchaseType: O.GZQ.ONE_TIME,
            skuIDs: [t],
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: !0,
            children: (0, i.jsx)(E.d, {
                skuId: t,
                loadId: n,
                onCheckoutSuccess: r,
                analyticsLocations: a,
                analyticsSourceLocation: s,
                children: (0, i.jsx)(c.b6, {
                    children: (0, i.jsx)(
                        w,
                        S(
                            {
                                skuId: t,
                                analyticsLocations: a
                            },
                            l
                        )
                    )
                })
            })
        });
    };
