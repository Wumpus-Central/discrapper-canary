n.d(t, { U: () => s });
var r = n(818083),
    i = n(630388),
    o = n(474936);
let a = (0, r.B)({
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
    s = (e, t) => null != t && !!(0, i.yE)(t.purchasedFlags, o.in.ON_REVERSE_TRIAL) && a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
