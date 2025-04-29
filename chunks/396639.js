n.d(t, {
    _Y: () => y,
    default: () => w
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
    p = n(791785),
    g = n(51499),
    h = n(614277),
    f = n(626135),
    b = n(152521),
    _ = n(932563),
    x = n(82856),
    E = n(621490),
    j = n(257493),
    C = n(981631),
    O = n(231338),
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
        payment_type: C.Zuq[C.GZQ.ONE_TIME],
        is_gift: !1,
        eligible_for_trial: !1,
        payment_modal_version: p.PaymentModal.CURRENT_VERSION
    },
    y = (e, t) => {
        let { loadId: n, skuId: i, analyticsLocations: r, analyticsSourceLocation: s } = t;
        e === C.rMx.PAYMENT_FLOW_CANCELED &&
            f.default.track(
                C.rMx.PAYMENT_FLOW_CANCELED,
                v(
                    {
                        load_id: n,
                        application_id: (0, b.N)(i),
                        location: r,
                        location_stack: r,
                        sku_id: i,
                        currency: C.pKx.DISCORD_ORB
                    },
                    null != s && { source: s },
                    I
                )
            );
    },
    A = () => {
        let { activitySessionId: e, hasPaymentSources: t, contextMetadata: n } = (0, c.JL)(),
            { loadId: i, startTime: s } = n,
            { skuId: l, orbProductContext: a, analyticsLocations: o, analyticsSourceLocation: u } = (0, j.C)(),
            m = (0, r.useMemo)(() => {
                var t, n;
                return v(
                    T(
                        v(
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
                    I
                );
            }, [i, e, l, o, u, a]);
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, r.useCallback)(
                (e) => {
                    let n = Date.now() - s;
                    e === C.rMx.PAYMENT_FLOW_STARTED
                        ? f.default.track(
                              C.rMx.PAYMENT_FLOW_STARTED,
                              T(v({}, m), {
                                  has_saved_payment_source: t,
                                  payment_gateway: O.ht.VIRTUAL_CURRENCY,
                                  continue_session_initial_step: null
                              })
                          )
                        : e === C.rMx.PAYMENT_FLOW_LOADED
                          ? f.default.track(
                                C.rMx.PAYMENT_FLOW_LOADED,
                                T(v({}, m), {
                                    has_saved_payment_source: t,
                                    initial_step: d.h8.REVIEW,
                                    duration_ms: n
                                })
                            )
                          : e === C.rMx.PAYMENT_FLOW_CANCELED
                            ? f.default.track(C.rMx.PAYMENT_FLOW_CANCELED, T(v({}, m), { duration_ms: n }))
                            : e === C.rMx.PAYMENT_FLOW_COMPLETED
                              ? f.default.track(
                                    C.rMx.PAYMENT_FLOW_COMPLETED,
                                    T(v({}, m), {
                                        payment_gateway: O.ht.VIRTUAL_CURRENCY,
                                        duration_ms: n
                                    })
                                )
                              : e === C.rMx.PAYMENT_FLOW_SUCCEEDED
                                ? f.default.track(C.rMx.PAYMENT_FLOW_SUCCEEDED, T(v({}, m), { duration_ms: n }))
                                : e === C.rMx.PAYMENT_FLOW_FAILED &&
                                  f.default.track(
                                      C.rMx.PAYMENT_FLOW_FAILED,
                                      T(v({}, m), {
                                          payment_gateway: O.ht.VIRTUAL_CURRENCY,
                                          duration_ms: n
                                      })
                                  );
                },
                [s, m, t]
            )
        };
    },
    P = (e) => {
        var t;
        let { handleClose: n } = e,
            { selectedSkuId: o, purchaseState: d, setPurchaseState: m } = (0, c.JL)(),
            { product: p } = (0, a.T)(o),
            { emitOrbCheckoutPaymentFlowEvent: f } = A(),
            { skuId: b, onRedeemVirtualCurrency: x, isRedeeming: O, orbRedemptionError: S, orbProductContext: v } = (0, j.C)(),
            T = (0, _.c)(),
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
                x(() => {
                    m(u.A.COMPLETED), f(C.rMx.PAYMENT_FLOW_SUCCEEDED);
                });
        }, [x, m, T, f]);
        if (null == o || null == p) return (0, i.jsx)(s.$jN, { type: s.$jN.Type.WANDERING_CUBES });
        let y = null != (t = N.current) ? t : T,
            P = null != v ? v.orbPriceAmount : null;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.Z, {}),
                (0, i.jsxs)(h.C3, {
                    children: [
                        (0, i.jsx)(E.gY, { error: S }),
                        (0, i.jsx)(E.A3, {
                            skuId: b,
                            orbPriceAmount: P,
                            orbBalance: y
                        })
                    ]
                }),
                (0, i.jsx)(h.O3, {
                    children: (0, i.jsx)(E.f9, {
                        orbPriceAmount: P,
                        orbBalance: y,
                        isSubmitting: O,
                        onClickCheckout: I
                    })
                })
            ]
        });
    },
    R = [
        {
            key: d.h8.REVIEW,
            renderStep: (e) => (0, i.jsx)(P, v({}, e)),
            options: { useBreadcrumbLabel: () => S.intl.string(S.t.QBnNHh) }
        }
    ],
    D = (e, t, n) =>
        (0, i.jsx)(m.Z, {
            isOrbCheckout: !0,
            step: n,
            onClose: () => t(!1)
        }),
    Z = (e) => {
        var { skuId: t, analyticsLocations: n = [] } = e,
            s = N(e, ['skuId', 'analyticsLocations']);
        let { orbProductContext: l } = (0, j.C)(),
            { emitOrbCheckoutPaymentFlowEvent: a } = A(),
            o = (0, r.useMemo)(() => {
                var e, t;
                if (null != l)
                    return {
                        price: null != (e = l.orbPriceAmount) ? e : void 0,
                        regular_price: null != (t = l.orbPriceAmount) ? t : void 0,
                        currency: C.pKx.DISCORD_ORB
                    };
            }, [l]);
        return (0, i.jsx)(p.PaymentModal, {
            applicationId: (0, b.N)(t),
            transitionState: s.transitionState,
            analyticsDataOverride: o,
            onClose: (e) => {
                e || (a(C.rMx.PAYMENT_FLOW_CANCELED), (0, x.vp)()), s.onClose();
            },
            hideShadow: !0,
            skuId: t,
            renderHeader: D,
            initialPlanId: null,
            analyticsLocations: n
        });
    },
    w = (e) => {
        var { skuId: t, loadId: n, onCheckoutSuccess: r, analyticsSourceLocation: s, analyticsLocations: l = [] } = e,
            a = N(e, ['skuId', 'loadId', 'onCheckoutSuccess', 'analyticsSourceLocation', 'analyticsLocations']);
        return (0, i.jsx)(c.PaymentContextProvider, {
            applicationId: (0, b.N)(t),
            activeSubscription: null,
            loadId: n,
            stepConfigs: R,
            purchaseType: C.GZQ.ONE_TIME,
            skuIDs: [t],
            children: (0, i.jsx)(j.d, {
                skuId: t,
                loadId: n,
                onCheckoutSuccess: r,
                analyticsLocations: l,
                analyticsSourceLocation: s,
                children: (0, i.jsx)(o.b6, {
                    children: (0, i.jsx)(
                        Z,
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
