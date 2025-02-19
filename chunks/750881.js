n.d(t, {
    $W: () => h,
    NR: () => E,
    R4: () => m,
    bA: () => _,
    h9: () => u,
    p7: () => g,
    sb: () => p
});
var r = n(818083),
    i = n(922611),
    o = n(987338);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var u = (function (e) {
    return (e[(e.SHOW = 0)] = 'SHOW'), (e[(e.HIDE = 1)] = 'HIDE'), (e[(e.DERANK = 2)] = 'DERANK'), e;
})({});
let d = (0, r.B)({
        kind: 'user',
        id: '2024-08_blocking_voice_states',
        label: 'Blocking Voice States (Blocker)',
        defaultConfig: {
            enabled: !1,
            analyticsEligible: !1
        },
        commonTriggerPoint: o.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: {
                    enabled: !1,
                    analyticsEligible: !0
                }
            },
            {
                id: 1,
                label: 'Enabled',
                config: {
                    enabled: !0,
                    analyticsEligible: !0
                }
            }
        ]
    }),
    f = (0, r.B)({
        kind: 'user',
        id: '2024-09_blocking_voice_states_blockee',
        label: 'Blocking Voice States (Blockee)',
        defaultConfig: {
            enabled: !1,
            analyticsEligible: !1
        },
        commonTriggerPoint: o.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: {
                    enabled: !1,
                    analyticsEligible: !0
                }
            },
            {
                id: 1,
                label: 'Enabled',
                config: {
                    enabled: !0,
                    analyticsEligible: !0
                }
            }
        ]
    });
function p(e) {
    let { enabled: t } = d.getCurrentConfig({ location: e });
    return t;
}
function _(e) {
    let t = d.useExperiment({ location: e }),
        n = (0, i.Do)({ location: 'use_blocking_voice_states_config_for_blocker' });
    return c(s({}, d.useExperiment({ location: e })), { analyticsEligible: t.analyticsEligible && !n });
}
function h(e) {
    let { enabled: t } = f.getCurrentConfig({ location: e });
    return t;
}
function m(e) {
    let t = f.useExperiment({ location: e }),
        n = (0, i.Do)({ location: 'use_blocking_voice_states_config_for_blockee' });
    return c(s({}, f.useExperiment({ location: e })), { analyticsEligible: t.analyticsEligible && !n });
}
function g(e) {
    let { enabled: t, analyticsEligible: n } = f.getCurrentConfig({ location: e }),
        { enabled: r, analyticsEligible: o } = d.getCurrentConfig({ location: e }),
        a = (0, i.JX)({ location: 'get_blocking_voice_states_experiment_configs' });
    return {
        blockeeExperimentEnabled: t,
        blockerExperimentEnabled: r,
        analyticsEligible: (n || o) && !a
    };
}
function E(e) {
    let { enabled: t, analyticsEligible: n } = f.useExperiment({ location: e }),
        { enabled: r, analyticsEligible: o } = d.useExperiment({ location: e }),
        a = (0, i.Do)({ location: 'use_blocking_voice_states_experiment_configs' });
    return {
        blockeeExperimentEnabled: t,
        blockerExperimentEnabled: r,
        analyticsEligible: (n || o) && !a
    };
}
