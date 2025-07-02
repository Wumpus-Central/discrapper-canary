n.d(t, {
    Rx: () => a,
    p1: () => o,
    pd: () => s
});
var r,
    i = n(818083),
    l = n(987338),
    a = (((r = {})[(r.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (r[(r.GET_NITRO = 1)] = 'GET_NITRO'), (r[(r.JOIN_NITRO = 2)] = 'JOIN_NITRO'), (r[(r.TRY_NITRO = 3)] = 'TRY_NITRO'), r);
let o = (0, i.B)({
        kind: 'user',
        id: '2025-07_nitro_tab_title_non_sub',
        commonTriggerPoint: l.$P.CONNECTION_OPEN,
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
    s = (0, i.B)({
        kind: 'user',
        id: '2025-07_nitro_tab_title_sub',
        commonTriggerPoint: l.$P.CONNECTION_OPEN,
        label: 'Nitro Tab Title (sub)',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Nitro Home',
                config: { enabled: !0 }
            }
        ]
    });
