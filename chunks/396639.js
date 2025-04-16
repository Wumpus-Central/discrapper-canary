n.d(t, {
    _Y: () => y,
    default: () => w
});
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(493773),
    l = n(583434),
    o = n(987209),
    c = n(563132),
    d = n(409813),
    u = n(45572),
    m = n(126982),
    g = n(791785),
    p = n(51499),
    h = n(614277),
    f = n(626135),
    _ = n(152521),
    b = n(932563),
    N = n(82856),
    x = n(621490),
    E = n(257493),
    j = n(981631),
    C = n(231338),
    O = n(388032);
function S(e) {
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
function v(e, t) {
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
function T(e, t) {
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
let I = {
        payment_type: j.Zuq[j.GZQ.ONE_TIME],
        is_gift: !1,
        eligible_for_trial: !1,
        payment_modal_version: g.PaymentModal.CURRENT_VERSION
    },
    y = (e, t) => {
        let { loadId: n, skuId: r, analyticsLocations: i, analyticsSourceLocation: s } = t;
        e === j.rMx.PAYMENT_FLOW_CANCELED &&
            f.default.track(
                j.rMx.PAYMENT_FLOW_CANCELED,
                S(
                    {
                        load_id: n,
                        application_id: (0, _.N)(r),
                        location: i,
                        location_stack: i,
                        sku_id: r,
                        currency: j.pKx.DISCORD_ORB
                    },
                    null != s && { source: s },
                    I
                )
            );
    },
    A = () => {
        let { activitySessionId: e, hasPaymentSources: t, contextMetadata: n } = (0, c.JL)(),
            { loadId: r, startTime: s } = n,
            { skuId: a, orbProductContext: l, analyticsLocations: o, analyticsSourceLocation: u } = (0, E.C)(),
            m = (0, i.useMemo)(() => {
                var t, n;
                return S(
                    v(
                        S(
                            {
                                load_id: r,
                                application_id: (0, _.N)(a),
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
                        { currency: j.pKx.DISCORD_ORB }
                    ),
                    null != u && { source: u },
                    I
                );
            }, [r, e, a, o, u, l]);
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, i.useCallback)(
                (e) => {
                    let n = Date.now() - s;
                    e === j.rMx.PAYMENT_FLOW_STARTED
                        ? f.default.track(
                              j.rMx.PAYMENT_FLOW_STARTED,
                              v(S({}, m), {
                                  has_saved_payment_source: t,
                                  payment_gateway: C.ht.VIRTUAL_CURRENCY,
                                  continue_session_initial_step: null
                              })
                          )
                        : e === j.rMx.PAYMENT_FLOW_LOADED
                          ? f.default.track(
                                j.rMx.PAYMENT_FLOW_LOADED,
                                v(S({}, m), {
                                    has_saved_payment_source: t,
                                    initial_step: d.h8.REVIEW,
                                    duration_ms: n
                                })
                            )
                          : e === j.rMx.PAYMENT_FLOW_CANCELED
                            ? f.default.track(j.rMx.PAYMENT_FLOW_CANCELED, v(S({}, m), { duration_ms: n }))
                            : e === j.rMx.PAYMENT_FLOW_COMPLETED
                              ? f.default.track(
                                    j.rMx.PAYMENT_FLOW_COMPLETED,
                                    v(S({}, m), {
                                        payment_gateway: C.ht.VIRTUAL_CURRENCY,
                                        duration_ms: n
                                    })
                                )
                              : e === j.rMx.PAYMENT_FLOW_SUCCEEDED
                                ? f.default.track(j.rMx.PAYMENT_FLOW_SUCCEEDED, v(S({}, m), { duration_ms: n }))
                                : e === j.rMx.PAYMENT_FLOW_FAILED &&
                                  f.default.track(
                                      j.rMx.PAYMENT_FLOW_FAILED,
                                      v(S({}, m), {
                                          payment_gateway: C.ht.VIRTUAL_CURRENCY,
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
            { product: g } = (0, l.T)(o),
            { emitOrbCheckoutPaymentFlowEvent: f } = A(),
            { skuId: _, onRedeemVirtualCurrency: N, isRedeeming: C, orbRedemptionError: O, orbProductContext: S } = (0, E.C)(),
            v = (0, b.c)(),
            T = (0, i.useRef)(v);
        (0, a.ZP)(() => {
            f(j.rMx.PAYMENT_FLOW_LOADED);
        }),
            (0, i.useEffect)(() => {
                d === u.A.COMPLETED && n();
            }, [d, n]),
            (0, i.useEffect)(() => {
                null != O && null !== T.current && (f(j.rMx.PAYMENT_FLOW_FAILED), (T.current = null));
            }, [O, f]);
        let I = (0, i.useCallback)(() => {
            (T.current = v),
                f(j.rMx.PAYMENT_FLOW_COMPLETED),
                N(() => {
                    m(u.A.COMPLETED), f(j.rMx.PAYMENT_FLOW_SUCCEEDED);
                });
        }, [N, m, v, f]);
        if (null == o || null == g) return (0, r.jsx)(s.$jN, { type: s.$jN.Type.WANDERING_CUBES });
        let y = null != (t = T.current) ? t : v,
            P = null != S ? S.orbPriceAmount : null;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(p.Z, {}),
                (0, r.jsxs)(h.C3, {
                    children: [
                        (0, r.jsx)(x.gY, { error: O }),
                        (0, r.jsx)(x.A3, {
                            skuId: _,
                            orbPriceAmount: P,
                            orbBalance: y
                        })
                    ]
                }),
                (0, r.jsx)(h.O3, {
                    children: (0, r.jsx)(x.f9, {
                        orbPriceAmount: P,
                        orbBalance: y,
                        isSubmitting: C,
                        onClickCheckout: I
                    })
                })
            ]
        });
    },
    R = [
        {
            key: d.h8.REVIEW,
            renderStep: (e) => (0, r.jsx)(P, S({}, e)),
            options: { useBreadcrumbLabel: () => O.NW.string(O.t.QBnNHh) }
        }
    ],
    D = (e, t, n) =>
        (0, r.jsx)(m.Z, {
            isOrbCheckout: !0,
            step: n,
            onClose: () => t(!1)
        }),
    Z = (e) => {
        var { skuId: t, analyticsLocations: n = [] } = e,
            s = T(e, ['skuId', 'analyticsLocations']);
        let { orbProductContext: a } = (0, E.C)(),
            { emitOrbCheckoutPaymentFlowEvent: l } = A(),
            o = (0, i.useMemo)(() => {
                var e, t;
                if (null != a)
                    return {
                        price: null != (e = a.orbPriceAmount) ? e : void 0,
                        regular_price: null != (t = a.orbPriceAmount) ? t : void 0,
                        currency: j.pKx.DISCORD_ORB
                    };
            }, [a]);
        return (0, r.jsx)(g.PaymentModal, {
            applicationId: (0, _.N)(t),
            transitionState: s.transitionState,
            analyticsDataOverride: o,
            onClose: (e) => {
                e || (l(j.rMx.PAYMENT_FLOW_CANCELED), (0, N.vp)()), s.onClose();
            },
            hideShadow: !0,
            skuId: t,
            renderHeader: D,
            initialPlanId: null,
            analyticsLocations: n
        });
    },
    w = (e) => {
        var { skuId: t, loadId: n, onCheckoutSuccess: i, analyticsSourceLocation: s, analyticsLocations: a = [] } = e,
            l = T(e, ['skuId', 'loadId', 'onCheckoutSuccess', 'analyticsSourceLocation', 'analyticsLocations']);
        return (0, r.jsx)(c.PaymentContextProvider, {
            applicationId: (0, _.N)(t),
            activeSubscription: null,
            loadId: n,
            stepConfigs: R,
            purchaseType: j.GZQ.ONE_TIME,
            skuIDs: [t],
            children: (0, r.jsx)(E.d, {
                skuId: t,
                loadId: n,
                onCheckoutSuccess: i,
                analyticsLocations: a,
                analyticsSourceLocation: s,
                children: (0, r.jsx)(o.KB, {
                    children: (0, r.jsx)(
                        Z,
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
