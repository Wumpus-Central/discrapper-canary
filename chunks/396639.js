n.d(t, {
    _Y: () => y,
    default: () => k
});
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(493773),
    a = n(89057),
    o = n(583434),
    c = n(987209),
    d = n(563132),
    u = n(409813),
    m = n(45572),
    g = n(126982),
    p = n(791785),
    h = n(51499),
    f = n(614277),
    b = n(626135),
    _ = n(152521),
    x = n(932563),
    E = n(621490),
    C = n(257493),
    O = n(981631),
    j = n(231338),
    S = n(388032);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
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
            for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let I = {
        payment_type: O.Zuq[O.GZQ.ONE_TIME],
        is_gift: !1,
        eligible_for_trial: !1,
        payment_modal_version: p.PaymentModal.CURRENT_VERSION
    },
    y = (e, t) => {
        let { loadId: n, skuId: i, analyticsLocations: r, analyticsSourceLocation: s } = t;
        e === O.rMx.PAYMENT_FLOW_CANCELED &&
            b.default.track(
                O.rMx.PAYMENT_FLOW_CANCELED,
                v(
                    {
                        load_id: n,
                        application_id: (0, _.N)(i),
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
            { skuId: l, orbProductContext: a, analyticsLocations: o, analyticsSourceLocation: c } = (0, C.C)(),
            m = (0, r.useMemo)(() => {
                var t, n;
                return v(
                    T(
                        v(
                            {
                                load_id: i,
                                application_id: (0, _.N)(l),
                                location: o,
                                location_stack: o,
                                sku_id: l,
                                activity_session_id: e
                            },
                            null != a && {
                                price: null != (t = a.orbPriceAmount) ? t : void 0,
                                regular_price: null != (n = a.orbPriceAmount) ? n : void 0
                            }
                        ),
                        { currency: O.pKx.DISCORD_ORB }
                    ),
                    null != c && { source: c },
                    I
                );
            }, [i, e, l, o, c, a]);
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, r.useCallback)(
                (e, n) => {
                    let i = Date.now() - s;
                    e === O.rMx.PAYMENT_FLOW_STARTED
                        ? b.default.track(
                              O.rMx.PAYMENT_FLOW_STARTED,
                              T(v({}, m), {
                                  has_saved_payment_source: t,
                                  payment_gateway: j.ht.VIRTUAL_CURRENCY,
                                  continue_session_initial_step: null
                              })
                          )
                        : e === O.rMx.PAYMENT_FLOW_LOADED
                          ? b.default.track(
                                O.rMx.PAYMENT_FLOW_LOADED,
                                T(v({}, m), {
                                    has_saved_payment_source: t,
                                    initial_step: u.h8.REVIEW,
                                    duration_ms: i
                                })
                            )
                          : e === O.rMx.PAYMENT_FLOW_CANCELED
                            ? b.default.track(O.rMx.PAYMENT_FLOW_CANCELED, T(v({}, m), { duration_ms: i }))
                            : e === O.rMx.PAYMENT_FLOW_COMPLETED
                              ? b.default.track(
                                    O.rMx.PAYMENT_FLOW_COMPLETED,
                                    T(v({}, m), {
                                        payment_gateway: j.ht.VIRTUAL_CURRENCY,
                                        duration_ms: i
                                    })
                                )
                              : e === O.rMx.PAYMENT_FLOW_SUCCEEDED
                                ? b.default.track(O.rMx.PAYMENT_FLOW_SUCCEEDED, T(v({}, m), { duration_ms: i }))
                                : e === O.rMx.PAYMENT_FLOW_FAILED &&
                                  b.default.track(
                                      O.rMx.PAYMENT_FLOW_FAILED,
                                      v(
                                          T(v({}, m), {
                                              payment_gateway: j.ht.VIRTUAL_CURRENCY,
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
            ? (0, i.jsx)(a.Vq, { onClose: t })
            : null;
    },
    R = (e) => {
        var t;
        let { handleClose: n } = e,
            { selectedSkuId: a, purchaseState: c, setPurchaseState: u } = (0, d.JL)(),
            { product: g } = (0, o.T)(a),
            { emitOrbCheckoutPaymentFlowEvent: p } = A(),
            { skuId: b, onRedeemVirtualCurrency: _, isRedeeming: j, orbRedemptionError: S, orbProductContext: v } = (0, C.C)(),
            T = (0, x.cR)(),
            N = (0, r.useRef)(T);
        (0, l.ZP)(() => {
            p(O.rMx.PAYMENT_FLOW_LOADED);
        }),
            (0, r.useEffect)(() => {
                c === m.A.COMPLETED && n();
            }, [c, n]),
            (0, r.useEffect)(() => {
                null != S && null !== N.current && (p(O.rMx.PAYMENT_FLOW_FAILED, S), (N.current = null));
            }, [S, p]);
        let I = (0, r.useCallback)(() => {
            (N.current = T),
                p(O.rMx.PAYMENT_FLOW_COMPLETED),
                _(() => {
                    u(m.A.COMPLETED), p(O.rMx.PAYMENT_FLOW_SUCCEEDED);
                });
        }, [_, u, T, p]);
        if (null == a || null == g) return (0, i.jsx)(s.$jN, { type: s.$jN.Type.WANDERING_CUBES });
        let y = null != (t = N.current) ? t : T,
            P = null != v ? v.orbPriceAmount : null;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(h.Z, {}),
                (0, i.jsxs)(f.C3, {
                    children: [
                        (0, i.jsx)(E.gY, { error: S }),
                        (0, i.jsx)(E.A3, {
                            skuId: b,
                            orbPriceAmount: P,
                            orbBalance: y
                        })
                    ]
                }),
                (0, i.jsx)(f.O3, {
                    children: (0, i.jsx)(E.f9, {
                        orbPriceAmount: P,
                        orbBalance: y,
                        isSubmitting: j,
                        onClickCheckout: I
                    })
                })
            ]
        });
    },
    D = [
        {
            key: null,
            renderStep: (e) => (0, i.jsx)(P, v({}, e))
        },
        {
            key: u.h8.REVIEW,
            renderStep: (e) => (0, i.jsx)(R, v({}, e)),
            options: { useBreadcrumbLabel: () => S.intl.string(S.t.QBnNHh) }
        }
    ],
    Z = (e, t, n) =>
        (0, i.jsx)(g.Z, {
            isOrbCheckout: !0,
            step: n,
            onClose: () => t(!1)
        }),
    w = (e) => {
        var { skuId: t, analyticsLocations: n = [] } = e,
            s = N(e, ['skuId', 'analyticsLocations']);
        let { orbProductContext: l } = (0, C.C)(),
            { emitOrbCheckoutPaymentFlowEvent: a } = A(),
            o = (0, r.useMemo)(() => {
                var e, t;
                if (null != l)
                    return {
                        price: null != (e = l.orbPriceAmount) ? e : void 0,
                        regular_price: null != (t = l.orbPriceAmount) ? t : void 0,
                        currency: O.pKx.DISCORD_ORB
                    };
            }, [l]),
            c = (0, r.useCallback)(
                async (e) => {
                    e || a(O.rMx.PAYMENT_FLOW_CANCELED), await s.onClose();
                },
                [s, a]
            );
        return (0, i.jsx)(p.PaymentModal, {
            applicationId: (0, _.N)(t),
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
        var { skuId: t, loadId: n, onCheckoutSuccess: r, analyticsSourceLocation: s, analyticsLocations: l = [] } = e,
            a = N(e, ['skuId', 'loadId', 'onCheckoutSuccess', 'analyticsSourceLocation', 'analyticsLocations']);
        return (0, i.jsx)(d.PaymentContextProvider, {
            applicationId: (0, _.N)(t),
            activeSubscription: null,
            loadId: n,
            stepConfigs: D,
            purchaseType: O.GZQ.ONE_TIME,
            skuIDs: [t],
            excludeSubscriptionPlansBySKU: !0,
            children: (0, i.jsx)(C.d, {
                skuId: t,
                loadId: n,
                onCheckoutSuccess: r,
                analyticsLocations: l,
                analyticsSourceLocation: s,
                children: (0, i.jsx)(c.b6, {
                    children: (0, i.jsx)(
                        w,
                        v(
                            {
                                skuId: t,
                                analyticsLocations: l
                            },
                            a
                        )
                    )
                })
            })
        });
    };
