r.d(t, {
    _Y: () => L,
    default: () => w
});
var n = r(255367),
    l = r(73800),
    i = r(481060),
    o = r(493773),
    s = r(89057),
    a = r(583434),
    c = r(987209),
    u = r(563132),
    d = r(409813),
    p = r(45572),
    b = r(126982),
    O = r(791785),
    y = r(51499),
    m = r(27034),
    E = r(626135),
    _ = r(152521),
    x = r(932563),
    f = r(621490),
    j = r(257493),
    P = r(981631),
    C = r(231338),
    h = r(388032);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function A(e, t) {
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
function N(e, t) {
    if (null == e) return {};
    var r,
        n,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]));
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) ((r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]));
    }
    return l;
}
let v = {
        payment_type: P.Zuq[P.GZQ.ONE_TIME],
        is_gift: !1,
        eligible_for_trial: !1,
        payment_modal_version: O.PaymentModal.CURRENT_VERSION
    },
    L = (e, t) => {
        let { loadId: r, skuId: n, analyticsLocations: l, analyticsSourceLocation: i } = t;
        e === P.rMx.PAYMENT_FLOW_CANCELED &&
            E.default.track(
                P.rMx.PAYMENT_FLOW_CANCELED,
                g(
                    {
                        load_id: r,
                        application_id: (0, _.N)(n),
                        location: l,
                        location_stack: l,
                        sku_id: n,
                        currency: P.pKx.DISCORD_ORB
                    },
                    null != i && { source: i },
                    v
                )
            );
    },
    M = () => {
        let { activitySessionId: e, hasPaymentSources: t, contextMetadata: r } = (0, u.JL)(),
            { loadId: n, startTime: i } = r,
            { skuId: o, orbProductContext: s, analyticsLocations: a, analyticsSourceLocation: c } = (0, j.C)(),
            p = (0, l.useMemo)(() => {
                var t, r;
                return g(
                    A(
                        g(
                            {
                                load_id: n,
                                application_id: (0, _.N)(o),
                                location: a,
                                location_stack: a,
                                sku_id: o,
                                activity_session_id: e
                            },
                            null != s && {
                                price: null != (t = s.orbPriceAmount) ? t : void 0,
                                regular_price: null != (r = s.orbPriceAmount) ? r : void 0
                            }
                        ),
                        { currency: P.pKx.DISCORD_ORB }
                    ),
                    null != c && { source: c },
                    v
                );
            }, [n, e, o, a, c, s]);
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, l.useCallback)(
                (e, r) => {
                    let n = Date.now() - i;
                    e === P.rMx.PAYMENT_FLOW_STARTED
                        ? E.default.track(
                              P.rMx.PAYMENT_FLOW_STARTED,
                              A(g({}, p), {
                                  has_saved_payment_source: t,
                                  payment_gateway: C.ht.VIRTUAL_CURRENCY,
                                  continue_session_initial_step: null
                              })
                          )
                        : e === P.rMx.PAYMENT_FLOW_LOADED
                          ? E.default.track(
                                P.rMx.PAYMENT_FLOW_LOADED,
                                A(g({}, p), {
                                    has_saved_payment_source: t,
                                    initial_step: d.h8.REVIEW,
                                    duration_ms: n
                                })
                            )
                          : e === P.rMx.PAYMENT_FLOW_CANCELED
                            ? E.default.track(P.rMx.PAYMENT_FLOW_CANCELED, A(g({}, p), { duration_ms: n }))
                            : e === P.rMx.PAYMENT_FLOW_COMPLETED
                              ? E.default.track(
                                    P.rMx.PAYMENT_FLOW_COMPLETED,
                                    A(g({}, p), {
                                        payment_gateway: C.ht.VIRTUAL_CURRENCY,
                                        duration_ms: n
                                    })
                                )
                              : e === P.rMx.PAYMENT_FLOW_SUCCEEDED
                                ? E.default.track(P.rMx.PAYMENT_FLOW_SUCCEEDED, A(g({}, p), { duration_ms: n }))
                                : e === P.rMx.PAYMENT_FLOW_FAILED &&
                                  E.default.track(
                                      P.rMx.PAYMENT_FLOW_FAILED,
                                      g(
                                          A(g({}, p), {
                                              payment_gateway: C.ht.VIRTUAL_CURRENCY,
                                              duration_ms: n
                                          }),
                                          null != r
                                              ? {
                                                    payment_error_code: r.code,
                                                    error_message: r.message
                                                }
                                              : {}
                                      )
                                  );
                },
                [i, p, t]
            )
        };
    },
    k = (e) => {
        let { handleClose: t, handleStepChange: r } = e,
            { blockedPayments: i } = (0, u.JL)();
        return ((0, l.useEffect)(() => {
            i || r(d.h8.REVIEW);
        }, [i, r]),
        i)
            ? (0, n.jsx)(s.Vq, { onClose: t })
            : null;
    },
    D = (e) => {
        var t;
        let { handleClose: r } = e,
            { selectedSkuId: s, purchaseState: c, setPurchaseState: d } = (0, u.JL)(),
            { product: b } = (0, a.T)(s),
            { emitOrbCheckoutPaymentFlowEvent: O } = M(),
            { skuId: E, onRedeemVirtualCurrency: _, isRedeeming: C, orbRedemptionError: h, orbProductContext: g } = (0, j.C)(),
            A = (0, x.cR)(),
            N = (0, l.useRef)(A);
        ((0, o.ZP)(() => {
            O(P.rMx.PAYMENT_FLOW_LOADED);
        }),
            (0, l.useEffect)(() => {
                c === p.A.COMPLETED && r();
            }, [c, r]),
            (0, l.useEffect)(() => {
                null != h && null !== N.current && (O(P.rMx.PAYMENT_FLOW_FAILED, h), (N.current = null));
            }, [h, O]));
        let v = (0, l.useCallback)(() => {
            ((N.current = A),
                O(P.rMx.PAYMENT_FLOW_COMPLETED),
                _(() => {
                    (d(p.A.COMPLETED), O(P.rMx.PAYMENT_FLOW_SUCCEEDED));
                }));
        }, [_, d, A, O]);
        if (null == s || null == b) return (0, n.jsx)(i.$jN, { type: i.$jN.Type.WANDERING_CUBES });
        let L = null != (t = N.current) ? t : A,
            k = null != g ? g.orbPriceAmount : null;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(y.Z, {}),
                (0, n.jsxs)(m.C3, {
                    children: [
                        (0, n.jsx)(f.gY, { error: h }),
                        (0, n.jsx)(f.A3, {
                            skuId: E,
                            orbPriceAmount: k,
                            orbBalance: L
                        })
                    ]
                }),
                (0, n.jsx)(m.O3, {
                    children: (0, n.jsx)(f.f9, {
                        orbPriceAmount: k,
                        orbBalance: L,
                        isSubmitting: C,
                        onClickCheckout: v
                    })
                })
            ]
        });
    },
    S = [
        {
            key: null,
            renderStep: (e) => (0, n.jsx)(k, g({}, e))
        },
        {
            key: d.h8.REVIEW,
            renderStep: (e) => (0, n.jsx)(D, g({}, e)),
            options: { useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHh) }
        }
    ],
    T = (e, t, r) =>
        (0, n.jsx)(b.Z, {
            isOrbCheckout: !0,
            step: r,
            onClose: () => t(!1)
        }),
    I = (e) => {
        var { skuId: t, analyticsLocations: r = [] } = e,
            i = N(e, ['skuId', 'analyticsLocations']);
        let { orbProductContext: o } = (0, j.C)(),
            { emitOrbCheckoutPaymentFlowEvent: s } = M(),
            a = (0, l.useMemo)(() => {
                var e, t;
                if (null != o)
                    return {
                        price: null != (e = o.orbPriceAmount) ? e : void 0,
                        regular_price: null != (t = o.orbPriceAmount) ? t : void 0,
                        currency: P.pKx.DISCORD_ORB
                    };
            }, [o]),
            c = (0, l.useCallback)(
                async (e) => {
                    (e || s(P.rMx.PAYMENT_FLOW_CANCELED), await i.onClose());
                },
                [i, s]
            );
        return (0, n.jsx)(O.PaymentModal, {
            applicationId: (0, _.N)(t),
            transitionState: i.transitionState,
            analyticsDataOverride: a,
            onClose: c,
            hideShadow: !0,
            skuId: t,
            renderHeader: T,
            initialPlanId: null,
            analyticsLocations: r
        });
    },
    w = (e) => {
        var { skuId: t, loadId: r, onCheckoutSuccess: l, analyticsSourceLocation: i, analyticsLocations: o = [] } = e,
            s = N(e, ['skuId', 'loadId', 'onCheckoutSuccess', 'analyticsSourceLocation', 'analyticsLocations']);
        return (0, n.jsx)(u.PaymentContextProvider, {
            applicationId: (0, _.N)(t),
            activeSubscription: null,
            loadId: r,
            stepConfigs: S,
            purchaseType: P.GZQ.ONE_TIME,
            skuIDs: [t],
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: !0,
            children: (0, n.jsx)(j.d, {
                skuId: t,
                loadId: r,
                onCheckoutSuccess: l,
                analyticsLocations: o,
                analyticsSourceLocation: i,
                children: (0, n.jsx)(c.b6, {
                    children: (0, n.jsx)(
                        I,
                        g(
                            {
                                skuId: t,
                                analyticsLocations: o
                            },
                            s
                        )
                    )
                })
            })
        });
    };
