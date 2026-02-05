"use strict";
n.d(t, { O: () => _, g: () => d });
var r = n(64700),
    i = n(156312),
    a = n(166532),
    s = n(954571),
    o = n(310829),
    l = n(652215);
n(322076);
var u = n(818348);
let c = () => ({
        payment_type: l.frM[l.VVm.ONE_TIME],
        is_gift: !1,
        eligible_for_trial: !1,
        payment_modal_version: "v2",
    }),
    d = (e, t) => {
        let { loadId: n, skuId: r, analyticsLocations: i, analyticsSourceLocation: a } = t;
        e === l.HAw.PAYMENT_FLOW_CANCELED &&
            s.default.track(l.HAw.PAYMENT_FLOW_CANCELED, {
                load_id: n,
                application_id: (0, o.p)(r),
                location: i,
                location_stack: i,
                payment_gateway: u.ps.VIRTUAL_CURRENCY,
                sku_id: r,
                currency: l.Yri.DISCORD_ORB,
                ...(null != a && { source: a }),
                ...c(),
            });
    },
    _ = (e) => {
        let { skuId: t, orbProductContext: n, analyticsLocations: d, analyticsSourceLocation: _ } = e,
            { activitySessionId: f, hasPaymentSources: p, contextMetadata: h } = (0, i.P5)(),
            { loadId: m, startTime: g } = h,
            E = (0, r.useMemo)(
                () => ({
                    load_id: m,
                    application_id: (0, o.p)(t),
                    location: d,
                    location_stack: d,
                    sku_id: t,
                    activity_session_id: f,
                    payment_gateway: u.ps.VIRTUAL_CURRENCY,
                    ...(null != n && { price: n.orbPriceAmount ?? void 0, regular_price: n.orbPriceAmount ?? void 0 }),
                    currency: l.Yri.DISCORD_ORB,
                    ...(null != _ && { source: _ }),
                    ...c(),
                }),
                [m, f, t, d, _, n],
            );
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, r.useCallback)(
                (e, t) => {
                    let n = Date.now() - g;
                    e === l.HAw.PAYMENT_FLOW_STARTED
                        ? s.default.track(l.HAw.PAYMENT_FLOW_STARTED, {
                              ...E,
                              has_saved_payment_source: p,
                              payment_gateway: u.ps.VIRTUAL_CURRENCY,
                              continue_session_initial_step: null,
                          })
                        : e === l.HAw.PAYMENT_FLOW_LOADED
                          ? s.default.track(l.HAw.PAYMENT_FLOW_LOADED, {
                                ...E,
                                has_saved_payment_source: p,
                                initial_step: a.pn.REVIEW,
                                duration_ms: n,
                            })
                          : e === l.HAw.PAYMENT_FLOW_CANCELED
                            ? s.default.track(l.HAw.PAYMENT_FLOW_CANCELED, { ...E, duration_ms: n })
                            : e === l.HAw.PAYMENT_FLOW_COMPLETED
                              ? s.default.track(l.HAw.PAYMENT_FLOW_COMPLETED, { ...E, duration_ms: n })
                              : e === l.HAw.PAYMENT_FLOW_SUCCEEDED
                                ? s.default.track(l.HAw.PAYMENT_FLOW_SUCCEEDED, { ...E, duration_ms: n })
                                : e === l.HAw.PAYMENT_FLOW_FAILED &&
                                  s.default.track(l.HAw.PAYMENT_FLOW_FAILED, {
                                      ...E,
                                      duration_ms: n,
                                      ...(null != t ? { payment_error_code: t.code, error_message: t.message } : {}),
                                  });
                },
                [g, E, p],
            ),
        };
    };
