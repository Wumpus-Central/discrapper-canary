n.d(t, { Z: () => o });
var r = n(665260),
    i = n(600975),
    a = n(788868);
let s = (0, i.C)({
        kind: "user",
        id: "2025-02_reverse_trial_perk_access_kill_switch",
        label: "Reverse Trial Perk Access Kill Switch",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Prevent perk access for users with reverse trials",
                config: { enabled: !0 },
            },
        ],
    }),
    o = (e, t) =>
        null != t &&
        !!(0, r.Lt)(t.purchasedFlags, a.lA.ON_REVERSE_TRIAL) &&
        s.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
