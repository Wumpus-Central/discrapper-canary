n.d(t, {
    CF: () => d,
    Rx: () => o,
    VL: () => c,
    p1: () => s,
    pd: () => u
});
var r,
    i = n(818083),
    l = n(427164),
    a = n(987338),
    o = (((r = {})[(r.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (r[(r.GET_NITRO = 1)] = 'GET_NITRO'), (r[(r.JOIN_NITRO = 2)] = 'JOIN_NITRO'), (r[(r.TRY_NITRO = 3)] = 'TRY_NITRO'), r);
let s = (0, i.B)({
        kind: 'user',
        id: '2025-07_nitro_tab_title_non_sub',
        commonTriggerPoint: a.$P.CONNECTION_OPEN,
        label: 'Nitro Tab Title (non-sub)',
        defaultConfig: {
            enabled: !1,
            variant: 0
        },
        treatments: [
            {
                id: 1,
                label: 'Get Nitro',
                config: {
                    enabled: !0,
                    variant: 1
                }
            },
            {
                id: 2,
                label: 'Join Nitro',
                config: {
                    enabled: !0,
                    variant: 2
                }
            },
            {
                id: 3,
                label: 'Try Nitro',
                config: {
                    enabled: !0,
                    variant: 3
                }
            }
        ]
    }),
    c = (0, l.le)({
        name: '2025-07-nitro-tab-title-non-sub',
        kind: 'user',
        defaultConfig: {
            enabled: !1,
            variant: 0
        },
        variations: {
            1: {
                enabled: !0,
                variant: 1
            },
            2: {
                enabled: !0,
                variant: 2
            },
            3: {
                enabled: !0,
                variant: 3
            }
        }
    }),
    u = (0, i.B)({
        kind: 'user',
        id: '2025-07_nitro_tab_title_sub',
        commonTriggerPoint: a.$P.CONNECTION_OPEN,
        label: 'Nitro Tab Title (sub)',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Nitro Home',
                config: { enabled: !0 }
            }
        ]
    }),
    d = (0, l.le)({
        name: '2025-07-nitro-tab-title-sub',
        kind: 'user',
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } }
    });
