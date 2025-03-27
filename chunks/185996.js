n.d(t, { U: () => c });
var r = n(259443),
    i = n(668757),
    o = n(818083),
    a = n(987338);
let s = new r.Yd('libdiscore'),
    l = (0, o.B)({
        kind: 'user',
        id: '2025-03_blocked_domains_libdiscore',
        label: 'Use Blocked Domains from Libdiscore',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: a.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Enable libdiscore blocked domains',
                config: { enabled: !0 }
            }
        ]
    });
function c() {
    return !!l.getCurrentConfig({ location: 'blockedDomains' }).enabled && ((0, i.u2)() || s.warn('isLibdiscoreBlockedDomainsEnabled called but libdiscore is not loaded'), !0);
}
