n.d(t, {
    NR: function () {
        return s;
    },
    Ob: function () {
        return o;
    },
    ZI: function () {
        return a;
    },
    m1: function () {
        return c;
    },
    uc: function () {
        return l;
    }
});
var i = n(987170),
    r = n(987338);
let s = (0, i.Z)({
        kind: 'user',
        id: '2024-07_ctp_open_nitro_vanilla',
        label: 'CTP open nitro - A/A test - Vanilla',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.OPEN_NITRO,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    a = (0, i.Z)({
        kind: 'user',
        id: '2024-07_ctp_open_nitro_filters',
        label: 'CTP open nitro - A/A test - Filters',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.OPEN_NITRO,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    l = (0, i.Z)({
        kind: 'user',
        id: '2024-07_ctp_open_nitro_multiple_buckets',
        label: 'CTP open nitro - A/A test - Multiple buckets',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.OPEN_NITRO,
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
    o = (0, i.Z)({
        kind: 'user',
        id: '2024-07_ctp_open_nitro_everyone',
        label: 'CTP open nitro - A/A test - Everyone',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.OPEN_NITRO,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    c = (0, i.Z)({
        kind: 'user',
        id: '2024-07_ctp_open_nitro_uneven_buckets',
        label: 'CTP open nitro - A/A test - Uneven buckets',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.OPEN_NITRO,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    });
