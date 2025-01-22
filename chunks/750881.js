r.d(n, {
    $W: function () {
        return f;
    },
    NR: function () {
        return _;
    },
    R4: function () {
        return p;
    },
    bA: function () {
        return d;
    },
    h9: function () {
        return i;
    },
    p7: function () {
        return h;
    },
    sb: function () {
        return c;
    }
});
var i,
    a = r(818083),
    o = r(922611),
    s = r(987338);
!(function (e) {
    (e[(e.SHOW = 0)] = 'SHOW'), (e[(e.HIDE = 1)] = 'HIDE'), (e[(e.DERANK = 2)] = 'DERANK');
})(i || (i = {}));
let l = (0, a.B)({
        kind: 'user',
        id: '2024-08_blocking_voice_states',
        label: 'Blocking Voice States (Blocker)',
        defaultConfig: {
            enabled: !1,
            analyticsEligible: !1
        },
        commonTriggerPoint: s.$P.CONNECTION_OPEN,
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
    u = (0, a.B)({
        kind: 'user',
        id: '2024-09_blocking_voice_states_blockee',
        label: 'Blocking Voice States (Blockee)',
        defaultConfig: {
            enabled: !1,
            analyticsEligible: !1
        },
        commonTriggerPoint: s.$P.CONNECTION_OPEN,
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
function c(e) {
    let { enabled: n } = l.getCurrentConfig({ location: e });
    return n;
}
function d(e) {
    let n = l.useExperiment({ location: e }),
        r = (0, o.Do)({ location: 'use_blocking_voice_states_config_for_blocker' });
    return {
        ...l.useExperiment({ location: e }),
        analyticsEligible: n.analyticsEligible && !r
    };
}
function f(e) {
    let { enabled: n } = u.getCurrentConfig({ location: e });
    return n;
}
function p(e) {
    let n = u.useExperiment({ location: e }),
        r = (0, o.Do)({ location: 'use_blocking_voice_states_config_for_blockee' });
    return {
        ...u.useExperiment({ location: e }),
        analyticsEligible: n.analyticsEligible && !r
    };
}
function h(e) {
    let { enabled: n, analyticsEligible: r } = u.getCurrentConfig({ location: e }),
        { enabled: i, analyticsEligible: a } = l.getCurrentConfig({ location: e }),
        s = (0, o.JX)({ location: 'get_blocking_voice_states_experiment_configs' });
    return {
        blockeeExperimentEnabled: n,
        blockerExperimentEnabled: i,
        analyticsEligible: (r || a) && !s
    };
}
function _(e) {
    let { enabled: n, analyticsEligible: r } = u.useExperiment({ location: e }),
        { enabled: i, analyticsEligible: a } = l.useExperiment({ location: e }),
        s = (0, o.Do)({ location: 'use_blocking_voice_states_experiment_configs' });
    return {
        blockeeExperimentEnabled: n,
        blockerExperimentEnabled: i,
        analyticsEligible: (r || a) && !s
    };
}
