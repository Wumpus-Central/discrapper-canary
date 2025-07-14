n.d(t, {
    AR: () => l,
    g1: () => s,
    sT: () => o
});
var r = n(818083),
    i = n(981631),
    a = n(647086);
let o = (0, r.B)({
    kind: 'guild',
    id: '2025-06_vanity_url_perk',
    label: 'Vanity URL Standalone Perk',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable ability to purchase Vanity URL Standalone Perk',
            config: { enabled: !0 }
        }
    ]
});
function s(e, t) {
    let n = null != e && e !== a._ && e !== i.I_8;
    return o.useExperiment(
        {
            guildId: e,
            location: t
        },
        {
            disable: !n,
            autoTrackExposure: !1
        }
    ).enabled;
}
function l(e, t) {
    return (
        null != e &&
        e !== a._ &&
        e !== i.I_8 &&
        o.getCurrentConfig(
            {
                guildId: e,
                location: t
            },
            { autoTrackExposure: !1 }
        ).enabled
    );
}
