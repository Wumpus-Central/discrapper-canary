r.d(n, {
    L4: function () {
        return u;
    },
    q1: function () {
        return c;
    },
    tr: function () {
        return d;
    }
});
var i = r(818083),
    a = r(358085),
    o = r(987338),
    s = r(474936);
let l = (0, i.B)({
        id: '2023-07_checkout_optimization_browser_autofill',
        label: 'Checkout Optimization Browser Autofill',
        kind: 'user',
        defaultConfig: {
            enabled: !1,
            delay: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: {
                    enabled: !0,
                    delay: !1
                }
            },
            {
                id: 2,
                label: 'Enabled with delay',
                config: {
                    enabled: !0,
                    delay: !0
                }
            }
        ]
    }),
    u = (0, i.B)({
        id: '2024-11_checkout_optimization_browser_autofill_global',
        label: 'Checkout Optimization Browser Autofill Global',
        kind: 'user',
        defaultConfig: {
            enabled: !1,
            delay: !1
        },
        commonTriggerPoint: o.$P.PAYMENT_FLOW_STARTED,
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: {
                    enabled: !0,
                    delay: !1
                }
            },
            {
                id: 2,
                label: 'Enabled with delay',
                config: {
                    enabled: !0,
                    delay: !0
                }
            }
        ]
    });
function c() {
    let e = l.getCurrentConfig({ location: '5f89bb_3' }, { autoTrackExposure: !0 });
    return e.enabled ? e : u.getCurrentConfig({ location: '5f89bb_3' }, { autoTrackExposure: !0 });
}
function d(e, n, r) {
    return (0, a.isDesktop)() && null != e && [s.Si.TIER_0, s.Si.TIER_2].includes(e) && !n && null == r;
}
