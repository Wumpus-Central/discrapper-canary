n.d(t, { O: () => m, g: () => p });
var l = n(64700),
    r = n(120700),
    i = n(742810),
    a = n(156312),
    s = n(166532),
    o = n(954571),
    u = n(310829),
    d = n(652215);
n(322076);
var c = n(818348);
let C = () => {
        let e = (0, i.q1)({ location: "OrbCheckoutModal", unifiedCheckoutFlow: r.C.ORB_CHECKOUT });
        return {
            payment_type: d.frM[d.VVm.ONE_TIME],
            is_gift: !1,
            eligible_for_trial: !1,
            payment_modal_version: "v2",
            checkout_design: e ? i.rS.UNIFIED : i.rS.LEGACY,
            checkout_flow: r.C.ORB_CHECKOUT,
        };
    },
    p = (e, t) => {
        let { loadId: n, discoverySessionId: l, skuId: r, analyticsLocations: i, analyticsSourceLocation: a } = t;
        e === d.HAw.PAYMENT_FLOW_CANCELED &&
            o.default.track(d.HAw.PAYMENT_FLOW_CANCELED, {
                load_id: n,
                discovery_session_id: l,
                application_id: (0, u.P)(r),
                location: i,
                location_stack: i,
                payment_gateway: c.ps.VIRTUAL_CURRENCY,
                sku_id: r,
                currency: d.Yri.DISCORD_ORB,
                ...(null != a && { source: a }),
                ...C(),
            });
    },
    m = (e) => {
        let { skuId: t, orbProductContext: n, analyticsLocations: r, analyticsSourceLocation: i } = e,
            { activitySessionId: p, hasPaymentSources: m, contextMetadata: h } = (0, a.P5)(),
            { loadId: _, startTime: E, discoverySessionId: A } = h,
            g = (0, l.useMemo)(
                () => ({
                    load_id: _,
                    discovery_session_id: A,
                    application_id: (0, u.P)(t),
                    location: r,
                    location_stack: r,
                    sku_id: t,
                    activity_session_id: p,
                    payment_gateway: c.ps.VIRTUAL_CURRENCY,
                    ...(null != n && { price: n.orbPriceAmount ?? void 0, regular_price: n.orbPriceAmount ?? void 0 }),
                    currency: d.Yri.DISCORD_ORB,
                    ...(null != i && { source: i }),
                    ...C(),
                }),
                [_, A, p, t, r, i, n],
            );
        return {
            emitOrbCheckoutPaymentFlowEvent: (0, l.useCallback)(
                (e, t) => {
                    let n = Date.now() - E;
                    e === d.HAw.PAYMENT_FLOW_STARTED
                        ? o.default.track(d.HAw.PAYMENT_FLOW_STARTED, {
                              ...g,
                              has_saved_payment_source: m,
                              payment_gateway: c.ps.VIRTUAL_CURRENCY,
                              continue_session_initial_step: null,
                          })
                        : e === d.HAw.PAYMENT_FLOW_LOADED
                          ? o.default.track(d.HAw.PAYMENT_FLOW_LOADED, {
                                ...g,
                                has_saved_payment_source: m,
                                initial_step: s.pn.REVIEW,
                                duration_ms: n,
                            })
                          : e === d.HAw.PAYMENT_FLOW_CANCELED
                            ? o.default.track(d.HAw.PAYMENT_FLOW_CANCELED, { ...g, duration_ms: n })
                            : e === d.HAw.PAYMENT_FLOW_COMPLETED
                              ? o.default.track(d.HAw.PAYMENT_FLOW_COMPLETED, { ...g, duration_ms: n })
                              : e === d.HAw.PAYMENT_FLOW_SUCCEEDED
                                ? o.default.track(d.HAw.PAYMENT_FLOW_SUCCEEDED, { ...g, duration_ms: n })
                                : e === d.HAw.PAYMENT_FLOW_FAILED &&
                                  o.default.track(d.HAw.PAYMENT_FLOW_FAILED, {
                                      ...g,
                                      duration_ms: n,
                                      ...(null != t ? { payment_error_code: t.code, error_message: t.message } : {}),
                                  });
                },
                [E, g, m],
            ),
        };
    };
