n.d(t, {
    NR: () => o,
    Ob: () => l,
    Vx: () => u,
    ZI: () => a,
    m1: () => c,
    uc: () => s
});
var r = n(987170),
    i = n(987338);
let o = (0, r.Z)({
        kind: 'user',
        id: '2024-06_ctp_app_open_vanilla',
        label: 'CTP app open - A/A test - Vanilla',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    a = (0, r.Z)({
        kind: 'user',
        id: '2024-06_ctp_app_open_filters',
        label: 'CTP app open - A/A test - Filters',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    s = (0, r.Z)({
        kind: 'user',
        id: '2024-06_ctp_app_open_multiple_buckets',
        label: 'CTP app open - A/A test - Multiple buckets',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Treatment 1',
                config: { doSomething: !0 }
            },
            {
                id: 2,
                label: 'Treatment 2',
                config: { doSomething: !0 }
            }
        ]
    }),
    l = (0, r.Z)({
        kind: 'user',
        id: '2024-06_ctp_app_open_everyone',
        label: 'CTP app open - A/A test - Everyone',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    c = (0, r.Z)({
        kind: 'user',
        id: '2024-06_ctp_app_open_uneven_buckets',
        label: 'CTP app open - A/A test - Uneven buckets',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    u = (0, r.Z)({
        kind: 'user',
        id: '2024-06_ctp_delta_vanilla',
        label: 'CTP Delta Vanilla - A/A test',
        defaultConfig: { doSomething: !1 },
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    });
