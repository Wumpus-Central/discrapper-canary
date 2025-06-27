n.d(t, {
    Tz: () => a,
    cE: () => o,
    j0: () => c
});
var r = n(818083),
    i = n(128064),
    l = n(987338);
let o = (0, r.B)({
    kind: 'guild',
    id: '2025-06_server_content_level_setting',
    label: 'Guild content level setting',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: l.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Guild content level setting',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { guildId: t, location: n } = e;
    return (
        o.getCurrentConfig(
            {
                guildId: t,
                location: n
            },
            { autoTrackExposure: !0 }
        ).enabled || (0, i.c_)(t)
    );
}
function c(e) {
    let { guildId: t, location: n } = e,
        r = o.getCurrentConfig(
            {
                guildId: t,
                location: n
            },
            { autoTrackExposure: !0 }
        ),
        l = (0, i.pY)(t);
    return r.enabled || l;
}
