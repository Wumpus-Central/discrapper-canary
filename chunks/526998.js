n.d(t, { U: () => o });
var i = n(818083),
    r = n(630388),
    a = n(474936);
let s = (0, i.B)({
        kind: 'user',
        id: '2025-02_reverse_trial_perk_access_kill_switch',
        label: 'Reverse Trial Perk Access Kill Switch',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Prevent perk access for users with reverse trials',
                config: { enabled: !0 }
            }
        ]
    }),
    o = (e, t) => !!(null != t && (0, r.yE)(t.purchasedFlags, a.in.ON_REVERSE_TRIAL)) && s.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
