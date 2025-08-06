n.d(t, {
    Yd: () => l,
    o0: () => s,
});
var r = n(818083),
    i = n(128064);
let o = (0, r.B)({
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
    a = (0, r.B)({
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
    s = (e) =>
        o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled ||
        a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled ||
        (0, i.c_)("DefaultGuildActivityExperiment"),
    l = (e) => {
        let t = o.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled,
            n = a.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled,
            r = (0, i.pY)("DefaultGuildActivityExperiment");
        return t || n || r;
    };
