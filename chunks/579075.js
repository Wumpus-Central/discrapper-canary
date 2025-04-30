n.d(t, { d: () => u });
var r = n(818083),
    i = n(987338);
let a = 172800000,
    o = 86400000,
    s = 43200000,
    l = 3600000,
    c = 0,
    u = (0, r.B)({
        kind: 'user',
        id: '2025-03_user_trial_offer_ttl',
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        label: 'User Trial Offer TTL Change',
        defaultConfig: {
            enabled: !1,
            ttl: a
        },
        treatments: [
            {
                id: 1,
                label: 'Reduced trial offer cache TTL (1 day)',
                config: {
                    enabled: !0,
                    ttl: o
                }
            },
            {
                id: 2,
                label: 'Reduced trial offer cache TTL (12 hours)',
                config: {
                    enabled: !0,
                    ttl: s
                }
            },
            {
                id: 3,
                label: 'Reduced trial offer cache TTL (1 hour)',
                config: {
                    enabled: !0,
                    ttl: l
                }
            },
            {
                id: 4,
                label: 'No trial offer cache TTL',
                config: {
                    enabled: !0,
                    ttl: c
                }
            }
        ]
    });
