n.d(t, {
    $W: () => p,
    NR: () => g,
    R4: () => h,
    bA: () => _,
    h9: () => c,
    p7: () => m,
    sb: () => f
});
var r = n(818083),
    i = n(987338);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var c = (function (e) {
    return (e[(e.SHOW = 0)] = 'SHOW'), (e[(e.HIDE = 1)] = 'HIDE'), (e[(e.DERANK = 2)] = 'DERANK'), e;
})({});
let u = (0, r.B)({
        kind: 'user',
        id: '2024-08_blocking_voice_states',
        label: 'Blocking Voice States (Blocker)',
        defaultConfig: {
            enabled: !1,
            analyticsEligible: !1
        },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
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
    d = (0, r.B)({
        kind: 'user',
        id: '2024-09_blocking_voice_states_blockee',
        label: 'Blocking Voice States (Blockee)',
        defaultConfig: {
            enabled: !1,
            analyticsEligible: !1
        },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
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
function f(e) {
    return u.getCurrentConfig({ location: e }).enabled;
}
function _(e) {
    let { analyticsEligible: t } = u.useExperiment({ location: e });
    return l(a({}, u.useExperiment({ location: e })), { analyticsEligible: t });
}
function p(e) {
    return d.getCurrentConfig({ location: e }).enabled;
}
function h(e) {
    let { analyticsEligible: t } = d.useExperiment({ location: e });
    return l(a({}, d.useExperiment({ location: e })), { analyticsEligible: t });
}
function m(e) {
    let { enabled: t, analyticsEligible: n } = d.getCurrentConfig({ location: e }),
        { enabled: r, analyticsEligible: i } = u.getCurrentConfig({ location: e });
    return {
        blockeeExperimentEnabled: t,
        blockerExperimentEnabled: r,
        analyticsEligible: n || i
    };
}
function g(e) {
    let { enabled: t, analyticsEligible: n } = d.useExperiment({ location: e }),
        { enabled: r, analyticsEligible: i } = u.useExperiment({ location: e });
    return {
        blockeeExperimentEnabled: t,
        blockerExperimentEnabled: r,
        analyticsEligible: n || i
    };
}
