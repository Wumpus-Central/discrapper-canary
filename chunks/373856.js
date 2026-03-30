"use strict";
n.d(t, { O: () => p, g: () => f });
var r = n(64700),
    i = n(608805),
    s = n(120700),
    a = n(156312),
    o = n(166532),
    l = n(954571),
    u = n(310829),
    c = n(652215);
n(322076);
var d = n(818348);
let _ = () => {
        let e = (0, i.q1)({ location: "OrbCheckoutModal", unifiedCheckoutFlow: s.C.ORB_CHECKOUT });
        return {
            payment_type: c.frM[c.VVm.ONE_TIME],
            is_gift: !1,
            eligible_for_trial: !1,
            payment_modal_version: "v2",
            checkout_design: e ? i.rS.UNIFIED : i.rS.LEGACY,
            checkout_flow: s.C.ORB_CHECKOUT,
        };
    },
    f = (e, t) => {
        let { loadId: n, skuId: r, analyticsLocations: i, analyticsSourceLocation: s } = t;
        e === c.HAw.PAYMENT_FLOW_CANCELED &&
            l.default.track(c.HAw.PAYMENT_FLOW_CANCELED, {
                load_id: n,
                application_id: (0, u.p)(r),
                location: i,
                location_stack: i,
                payment_gateway: d.ps.VIRTUAL_CURRENCY,
                sku_id: r,
                currency: c.Yri.DISCORD_ORB,
                ...(null != s && { source: s }),
                ..._(),
            });
    },
    p = (e) => {
        let { skuId: t, orbProductContext: n, analyticsLocations: i, analyticsSourceLocation: s } = e,
            { activitySessionId: f, hasPaymentSources: p, contextMetadata: h } = (0, a.P5)(),
            { loadId: m, startTime: E } = h,
            g = (0, r.useMemo)(
                () => ({
                    load_id: m,
                    application_id: (0, u.p)(t),
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
                [m, f, t, i, s, n],
            );
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, r.useCallback)(
                (e, t) => {
                    let n = Date.now() - E;
                    e === c.HAw.PAYMENT_FLOW_STARTED
                        ? l.default.track(c.HAw.PAYMENT_FLOW_STARTED, {
                              ...g,
                              has_saved_payment_source: p,
                              payment_gateway: d.ps.VIRTUAL_CURRENCY,
                              continue_session_initial_step: null,
                          })
                        : e === c.HAw.PAYMENT_FLOW_LOADED
                          ? l.default.track(c.HAw.PAYMENT_FLOW_LOADED, {
                                ...g,
                                has_saved_payment_source: p,
                                initial_step: o.pn.REVIEW,
                                duration_ms: n,
                            })
                          : e === c.HAw.PAYMENT_FLOW_CANCELED
                            ? l.default.track(c.HAw.PAYMENT_FLOW_CANCELED, { ...g, duration_ms: n })
                            : e === c.HAw.PAYMENT_FLOW_COMPLETED
                              ? l.default.track(c.HAw.PAYMENT_FLOW_COMPLETED, { ...g, duration_ms: n })
                              : e === c.HAw.PAYMENT_FLOW_SUCCEEDED
                                ? l.default.track(c.HAw.PAYMENT_FLOW_SUCCEEDED, { ...g, duration_ms: n })
                                : e === c.HAw.PAYMENT_FLOW_FAILED &&
                                  l.default.track(c.HAw.PAYMENT_FLOW_FAILED, {
                                      ...g,
                                      duration_ms: n,
                                      ...(null != t ? { payment_error_code: t.code, error_message: t.message } : {}),
                                  });
                },
                [E, g, p],
            ),
        };
    };
