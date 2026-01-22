n.d(t, {
    Yd: () => c,
    o0: () => l,
});
var r = n(912423),
    i = n(818083),
    a = n(980945);
let o = (0, i.B)({
        kind: "user",
        id: "2025-01_default_activity_status",
        label: "Guild activity status defaults",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Enable new defaults",
                config: { enabled: !0 },
            },
        ],
    }),
    s = (0, i.B)({
        kind: "user",
        id: "2025-01_default_activity_status_new_users",
        label: "Guild activity status defaults",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Enable new defaults",
                config: { enabled: !0 },
            },
        ],
    }),
    l = (e) =>
        o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled ||
        s.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled ||
        (0, a.OE)(r.K.GUILD_ACTIVITY_STATUS),
    c = (e) => {
        let t = o.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled,
            n = s.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled,
            i = (0, a._M)(r.K.GUILD_ACTIVITY_STATUS);
        return t || n || i;
    };
