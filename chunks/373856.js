"use strict";
n.d(t, { O: () => p, g: () => f });
var r = n(64700),
    i = n(120700),
    s = n(742810),
    a = n(156312),
    o = n(166532),
    l = n(954571),
    u = n(310829),
    c = n(652215);
n(322076);
var d = n(818348);
let _ = () => {
        let e = (0, s.q1)({ location: "OrbCheckoutModal", unifiedCheckoutFlow: i.C.ORB_CHECKOUT });
        return {
            payment_type: c.frM[c.VVm.ONE_TIME],
            is_gift: !1,
            eligible_for_trial: !1,
            payment_modal_version: "v2",
            checkout_design: e ? s.rS.UNIFIED : s.rS.LEGACY,
            checkout_flow: i.C.ORB_CHECKOUT,
        };
    },
    f = (e, t) => {
        let { loadId: n, discoverySessionId: r, skuId: i, analyticsLocations: s, analyticsSourceLocation: a } = t;
        e === c.HAw.PAYMENT_FLOW_CANCELED &&
            l.default.track(c.HAw.PAYMENT_FLOW_CANCELED, {
                load_id: n,
                discovery_session_id: r,
                application_id: (0, u.P)(i),
                location: s,
                location_stack: s,
                payment_gateway: d.ps.VIRTUAL_CURRENCY,
                sku_id: i,
                currency: c.Yri.DISCORD_ORB,
                ...(null != a && { source: a }),
                ..._(),
            });
    },
    p = (e) => {
        let { skuId: t, orbProductContext: n, analyticsLocations: i, analyticsSourceLocation: s } = e,
            { activitySessionId: f, hasPaymentSources: p, contextMetadata: h } = (0, a.P5)(),
            { loadId: m, startTime: E, discoverySessionId: g } = h,
            A = (0, r.useMemo)(
                () => ({
                    load_id: m,
                    discovery_session_id: g,
                    application_id: (0, u.P)(t),
                    location: i,
                    location_stack: i,
                    sku_id: t,
                    activity_session_id: f,
                    payment_gateway: d.ps.VIRTUAL_CURRENCY,
                    ...(null != n && { price: n.orbPriceAmount ?? void 0, regular_price: n.orbPriceAmount ?? void 0 }),
                    currency: c.Yri.DISCORD_ORB,
                    ...(null != s && { source: s }),
                    ..._(),
                }),
                [m, g, f, t, i, s, n],
            );
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, r.useCallback)(
                (e, t) => {
                    let n = Date.now() - E;
                    e === c.HAw.PAYMENT_FLOW_STARTED
                        ? l.default.track(c.HAw.PAYMENT_FLOW_STARTED, {
                              ...A,
                              has_saved_payment_source: p,
                              payment_gateway: d.ps.VIRTUAL_CURRENCY,
                              continue_session_initial_step: null,
                          })
                        : e === c.HAw.PAYMENT_FLOW_LOADED
                          ? l.default.track(c.HAw.PAYMENT_FLOW_LOADED, {
                                ...A,
                                has_saved_payment_source: p,
                                initial_step: o.pn.REVIEW,
                                duration_ms: n,
                            })
                          : e === c.HAw.PAYMENT_FLOW_CANCELED
                            ? l.default.track(c.HAw.PAYMENT_FLOW_CANCELED, { ...A, duration_ms: n })
                            : e === c.HAw.PAYMENT_FLOW_COMPLETED
                              ? l.default.track(c.HAw.PAYMENT_FLOW_COMPLETED, { ...A, duration_ms: n })
                              : e === c.HAw.PAYMENT_FLOW_SUCCEEDED
                                ? l.default.track(c.HAw.PAYMENT_FLOW_SUCCEEDED, { ...A, duration_ms: n })
                                : e === c.HAw.PAYMENT_FLOW_FAILED &&
                                  l.default.track(c.HAw.PAYMENT_FLOW_FAILED, {
                                      ...A,
                                      duration_ms: n,
                                      ...(null != t ? { payment_error_code: t.code, error_message: t.message } : {}),
                                  });
                },
                [E, A, p],
            ),
        };
    };
