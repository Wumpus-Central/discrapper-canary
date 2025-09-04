n.d(t, {
    A0: () => l,
    Lz: () => o,
    ZO: () => s,
});
var r = n(442837),
    i = n(818083),
    a = n(594174);
let o = (0, i.B)({
    kind: "guild",
    id: "2025-08_portkey_enabled",
    label: "Portkey Enabled",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable Portkey",
            config: { enabled: !0 },
        },
    ],
});
function s(e, t) {
    var n, r;
    let i = null != (r = null == (n = a.default.getCurrentUser()) ? void 0 : n.isStaff()) && r;
    return (
        o.getCurrentConfig(
            {
                guildId: e,
                location: t,
            },
            { autoTrackExposure: !1 },
        ).enabled && i
    );
}
function l(e, t) {
    let n = (0, r.e7)([a.default], () => {
        var e, t;
        return null != (t = null == (e = a.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
    });
    return (
        o.useExperiment(
            {
                guildId: e,
                location: t,
            },
            { autoTrackExposure: !1 },
        ).enabled && n
    );
}
