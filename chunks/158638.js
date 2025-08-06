n.d(t, {
    AR: () => f,
    Mp: () => d,
    g1: () => l,
    q8: () => u,
    qI: () => c,
    sT: () => a
});
var r = n(818083),
    i = n(981631),
    o = n(647086);
let a = (0, r.B)({
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
    return null != e && e !== o._ && e !== i.I_8;
}
function l(e, t) {
    let n = s(e);
    return a.useExperiment(
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
        r = a.useExperiment(
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
    return a.useExperiment(
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
        a.getCurrentConfig(
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
        a.getCurrentConfig(
            {
                guildId: e,
                location: t
            },
            { autoTrackExposure: !1 }
        ).enabled
    );
}
