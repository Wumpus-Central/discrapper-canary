n.d(t, {
    _Y: () => I,
    default: () => Z
});
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(493773),
    a = n(583434),
    o = n(987209),
    c = n(563132),
    d = n(409813),
    u = n(45572),
    m = n(126982),
    g = n(791785),
    p = n(51499),
    h = n(614277),
    f = n(626135),
    b = n(152521),
    _ = n(932563),
    x = n(621490),
    E = n(257493),
    C = n(981631),
    j = n(231338),
    O = n(388032);
function S(e) {
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
function v(e, t) {
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
function T(e, t) {
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
let N = {
        payment_type: C.Zuq[C.GZQ.ONE_TIME],
        is_gift: !1,
        eligible_for_trial: !1,
        payment_modal_version: g.PaymentModal.CURRENT_VERSION
    },
    I = (e, t) => {
        let { loadId: n, skuId: i, analyticsLocations: r, analyticsSourceLocation: s } = t;
        e === C.rMx.PAYMENT_FLOW_CANCELED &&
            f.default.track(
                C.rMx.PAYMENT_FLOW_CANCELED,
                S(
                    {
                        load_id: n,
                        application_id: (0, b.N)(i),
                        location: r,
                        location_stack: r,
                        sku_id: i,
                        currency: C.pKx.DISCORD_ORB
                    },
                    null != s && { source: s },
                    N
                )
            );
    },
    y = () => {
        let { activitySessionId: e, hasPaymentSources: t, contextMetadata: n } = (0, c.JL)(),
            { loadId: i, startTime: s } = n,
            { skuId: l, orbProductContext: a, analyticsLocations: o, analyticsSourceLocation: u } = (0, E.C)(),
            m = (0, r.useMemo)(() => {
                var t, n;
                return S(
                    v(
                        S(
                            {
                                load_id: i,
                                application_id: (0, b.N)(l),
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
                        { currency: C.pKx.DISCORD_ORB }
                    ),
                    null != u && { source: u },
                    N
                );
            }, [i, e, l, o, u, a]);
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, r.useCallback)(
                (e) => {
                    let n = Date.now() - s;
                    e === C.rMx.PAYMENT_FLOW_STARTED
                        ? f.default.track(
                              C.rMx.PAYMENT_FLOW_STARTED,
                              v(S({}, m), {
                                  has_saved_payment_source: t,
                                  payment_gateway: j.ht.VIRTUAL_CURRENCY,
                                  continue_session_initial_step: null
                              })
                          )
                        : e === C.rMx.PAYMENT_FLOW_LOADED
                          ? f.default.track(
                                C.rMx.PAYMENT_FLOW_LOADED,
                                v(S({}, m), {
                                    has_saved_payment_source: t,
                                    initial_step: d.h8.REVIEW,
                                    duration_ms: n
                                })
                            )
                          : e === C.rMx.PAYMENT_FLOW_CANCELED
                            ? f.default.track(C.rMx.PAYMENT_FLOW_CANCELED, v(S({}, m), { duration_ms: n }))
                            : e === C.rMx.PAYMENT_FLOW_COMPLETED
                              ? f.default.track(
                                    C.rMx.PAYMENT_FLOW_COMPLETED,
                                    v(S({}, m), {
                                        payment_gateway: j.ht.VIRTUAL_CURRENCY,
                                        duration_ms: n
                                    })
                                )
                              : e === C.rMx.PAYMENT_FLOW_SUCCEEDED
                                ? f.default.track(C.rMx.PAYMENT_FLOW_SUCCEEDED, v(S({}, m), { duration_ms: n }))
                                : e === C.rMx.PAYMENT_FLOW_FAILED &&
                                  f.default.track(
                                      C.rMx.PAYMENT_FLOW_FAILED,
                                      v(S({}, m), {
                                          payment_gateway: j.ht.VIRTUAL_CURRENCY,
                                          duration_ms: n
                                      })
                                  );
                },
                [s, m, t]
            )
        };
    },
    A = (e) => {
        var t;
        let { handleClose: n } = e,
            { selectedSkuId: o, purchaseState: d, setPurchaseState: m } = (0, c.JL)(),
            { product: g } = (0, a.T)(o),
            { emitOrbCheckoutPaymentFlowEvent: f } = y(),
            { skuId: b, onRedeemVirtualCurrency: j, isRedeeming: O, orbRedemptionError: S, orbProductContext: v } = (0, E.C)(),
            T = (0, _.cR)(),
            N = (0, r.useRef)(T);
        (0, l.ZP)(() => {
            f(C.rMx.PAYMENT_FLOW_LOADED);
        }),
            (0, r.useEffect)(() => {
                d === u.A.COMPLETED && n();
            }, [d, n]),
            (0, r.useEffect)(() => {
                null != S && null !== N.current && (f(C.rMx.PAYMENT_FLOW_FAILED), (N.current = null));
            }, [S, f]);
        let I = (0, r.useCallback)(() => {
            (N.current = T),
                f(C.rMx.PAYMENT_FLOW_COMPLETED),
                j(() => {
                    m(u.A.COMPLETED), f(C.rMx.PAYMENT_FLOW_SUCCEEDED);
                });
        }, [j, m, T, f]);
        if (null == o || null == g) return (0, i.jsx)(s.$jN, { type: s.$jN.Type.WANDERING_CUBES });
        let A = null != (t = N.current) ? t : T,
            P = null != v ? v.orbPriceAmount : null;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(p.Z, {}),
                (0, i.jsxs)(h.C3, {
                    children: [
                        (0, i.jsx)(x.gY, { error: S }),
                        (0, i.jsx)(x.A3, {
                            skuId: b,
                            orbPriceAmount: P,
                            orbBalance: A
                        })
                    ]
                }),
                (0, i.jsx)(h.O3, {
                    children: (0, i.jsx)(x.f9, {
                        orbPriceAmount: P,
                        orbBalance: A,
                        isSubmitting: O,
                        onClickCheckout: I
                    })
                })
            ]
        });
    },
    P = [
        {
            key: d.h8.REVIEW,
            renderStep: (e) => (0, i.jsx)(A, S({}, e)),
            options: { useBreadcrumbLabel: () => O.intl.string(O.t.QBnNHh) }
        }
    ],
    R = (e, t, n) =>
        (0, i.jsx)(m.Z, {
            isOrbCheckout: !0,
            step: n,
            onClose: () => t(!1)
        }),
    D = (e) => {
        var { skuId: t, analyticsLocations: n = [] } = e,
            s = T(e, ['skuId', 'analyticsLocations']);
        let { orbProductContext: l } = (0, E.C)(),
            { emitOrbCheckoutPaymentFlowEvent: a } = y(),
            o = (0, r.useMemo)(() => {
                var e, t;
                if (null != l)
                    return {
                        price: null != (e = l.orbPriceAmount) ? e : void 0,
                        regular_price: null != (t = l.orbPriceAmount) ? t : void 0,
                        currency: C.pKx.DISCORD_ORB
                    };
            }, [l]),
            c = (0, r.useCallback)(
                async (e) => {
                    e || a(C.rMx.PAYMENT_FLOW_CANCELED), await s.onClose();
                },
                [s, a]
            );
        return (0, i.jsx)(g.PaymentModal, {
            applicationId: (0, b.N)(t),
            transitionState: s.transitionState,
            analyticsDataOverride: o,
            onClose: c,
            hideShadow: !0,
            skuId: t,
            renderHeader: R,
            initialPlanId: null,
            analyticsLocations: n
        });
    },
    Z = (e) => {
        var { skuId: t, loadId: n, onCheckoutSuccess: r, analyticsSourceLocation: s, analyticsLocations: l = [] } = e,
            a = T(e, ['skuId', 'loadId', 'onCheckoutSuccess', 'analyticsSourceLocation', 'analyticsLocations']);
        return (0, i.jsx)(c.PaymentContextProvider, {
            applicationId: (0, b.N)(t),
            activeSubscription: null,
            loadId: n,
            stepConfigs: P,
            purchaseType: C.GZQ.ONE_TIME,
            skuIDs: [t],
            excludeSubscriptionPlansBySKU: !0,
            children: (0, i.jsx)(E.d, {
                skuId: t,
                loadId: n,
                onCheckoutSuccess: r,
                analyticsLocations: l,
                analyticsSourceLocation: s,
                children: (0, i.jsx)(o.b6, {
                    children: (0, i.jsx)(
                        D,
                        S(
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
