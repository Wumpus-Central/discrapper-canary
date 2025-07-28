n.d(t, {
    AR: () => f,
    Mp: () => d,
    g1: () => l,
    q8: () => u,
    qI: () => c,
    sT: () => o
});
var r = n(818083),
    i = n(981631),
    a = n(647086);
let o = (0, r.B)({
    kind: 'guild',
    id: '2025-06_vanity_url_perk',
    label: 'Vanity URL Standalone Perk',
    defaultConfig: {
        enabled: !1,
        rollbackEnabled: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable ability to purchase Vanity URL Standalone Perk',
            config: {
                enabled: !0,
                rollbackEnabled: !1
            }
        },
        {
            id: 2,
            label: 'Rollback UI for Vanity URL Standalone Perk',
            config: {
                enabled: !0,
                rollbackEnabled: !0
            }
        }
    ]
});
function s(e) {
    return null != e && e !== a._ && e !== i.I_8;
}
function l(e, t) {
    let n = s(e);
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
function c(e, t) {
    let n = s(e),
        r = o.useExperiment(
            {
                guildId: e,
                location: t
            },
            {
                disable: !n,
                autoTrackExposure: !1
            }
        );
    return r.enabled && !r.rollbackEnabled;
}
function u(e, t) {
    let n = s(e);
    return o.useExperiment(
        {
            guildId: e,
            location: t
        },
        {
            disable: !n,
            autoTrackExposure: !1
        }
    ).rollbackEnabled;
}
function d(e, t) {
    return (
        !!s(e) &&
        o.getCurrentConfig(
            {
                guildId: e,
                location: t
            },
            { autoTrackExposure: !1 }
        ).rollbackEnabled
    );
}
function f(e, t) {
    return (
        !!s(e) &&
        o.getCurrentConfig(
            {
                guildId: e,
                location: t
            },
            { autoTrackExposure: !1 }
        ).enabled
    );
}
