n.d(t, {
    $W: () => d,
    NR: () => p,
    R4: () => f,
    bA: () => c,
    h9: () => s,
    p7: () => _,
    sb: () => u
});
var i = n(818083),
    r = n(922611),
    a = n(987338),
    s = (function (e) {
        return (e[(e.SHOW = 0)] = 'SHOW'), (e[(e.HIDE = 1)] = 'HIDE'), (e[(e.DERANK = 2)] = 'DERANK'), e;
    })({});
let o = (0, i.B)({
        kind: 'user',
        id: '2024-08_blocking_voice_states',
        label: 'Blocking Voice States (Blocker)',
        defaultConfig: {
            enabled: !1,
            analyticsEligible: !1
        },
        commonTriggerPoint: a.$P.CONNECTION_OPEN,
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
    l = (0, i.B)({
        kind: 'user',
        id: '2024-09_blocking_voice_states_blockee',
        label: 'Blocking Voice States (Blockee)',
        defaultConfig: {
            enabled: !1,
            analyticsEligible: !1
        },
        commonTriggerPoint: a.$P.CONNECTION_OPEN,
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
function u(e) {
    let { enabled: t } = o.getCurrentConfig({ location: e });
    return t;
}
function c(e) {
    let t = o.useExperiment({ location: e }),
        n = (0, r.Do)({ location: 'use_blocking_voice_states_config_for_blocker' });
    return {
        ...o.useExperiment({ location: e }),
        analyticsEligible: t.analyticsEligible && !n
    };
}
function d(e) {
    let { enabled: t } = l.getCurrentConfig({ location: e });
    return t;
}
function f(e) {
    let t = l.useExperiment({ location: e }),
        n = (0, r.Do)({ location: 'use_blocking_voice_states_config_for_blockee' });
    return {
        ...l.useExperiment({ location: e }),
        analyticsEligible: t.analyticsEligible && !n
    };
}
function _(e) {
    let { enabled: t, analyticsEligible: n } = l.getCurrentConfig({ location: e }),
        { enabled: i, analyticsEligible: a } = o.getCurrentConfig({ location: e }),
        s = (0, r.JX)({ location: 'get_blocking_voice_states_experiment_configs' });
    return {
        blockeeExperimentEnabled: t,
        blockerExperimentEnabled: i,
        analyticsEligible: (n || a) && !s
    };
}
function p(e) {
    let { enabled: t, analyticsEligible: n } = l.useExperiment({ location: e }),
        { enabled: i, analyticsEligible: a } = o.useExperiment({ location: e }),
        s = (0, r.Do)({ location: 'use_blocking_voice_states_experiment_configs' });
    return {
        blockeeExperimentEnabled: t,
        blockerExperimentEnabled: i,
        analyticsEligible: (n || a) && !s
    };
}
