r.d(t, {
    Tz: () => l,
    cE: () => a,
    j0: () => s
});
var n = r(818083),
    i = r(128064),
    o = r(987338);
let a = (0, n.B)({
    kind: 'guild',
    id: '2025-06_server_content_level_setting',
    label: 'Guild content level setting',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: o.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Guild content level setting',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    let { guildId: t, location: r } = e;
    return (
        a.getCurrentConfig(
            {
                guildId: t,
                location: r
            },
            { autoTrackExposure: !0 }
        ).enabled || (0, i.c_)(t)
    );
}
function s(e) {
    let { guildId: t, location: r } = e,
        n = a.getCurrentConfig(
            {
                guildId: t,
                location: r
            },
            { autoTrackExposure: !0 }
        ),
        o = (0, i.pY)(t);
    return n.enabled || o;
}
