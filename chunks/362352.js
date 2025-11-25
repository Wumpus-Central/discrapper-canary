n.d(t, {
    Yd: () => d,
    o0: () => u,
});
var r = n(818083),
    i = n(427164),
    a = n(128064);
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
    s = (0, r.B)({
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
    l = (0, i.le)({
        name: "2025-11-guild-activity-aggregate-carve-out",
        kind: "user",
        defaultConfig: { aggregateDefaultEnabled: !0 },
        variations: {
            0: { aggregateDefaultEnabled: !0 },
            1: { aggregateDefaultEnabled: !1 },
        },
    }),
    c = (e) => l.getConfig({ location: e }).aggregateDefaultEnabled && (0, a.c_)("DefaultGuildActivityExperiment"),
    u = (e) =>
        o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled ||
        s.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled ||
        c(e),
    d = (e) => {
        let t = o.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled,
            n = s.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled,
            r = l.useConfig({ location: e }).aggregateDefaultEnabled,
            i = (0, a.pY)("DefaultGuildActivityExperiment");
        return t || n || (r && i);
    };
