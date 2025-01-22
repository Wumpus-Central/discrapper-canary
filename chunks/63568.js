r.d(n, {
    K2: function () {
        return o;
    },
    jS: function () {
        return a;
    },
    tW: function () {
        return i;
    }
});
let i = (0, r(818083).B)({
    kind: 'guild',
    id: '2024-11_member_verification_rollout',
    label: 'Member verification rollout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function a(e, n) {
    return i.useExperiment(
        {
            guildId: e,
            location: n
        },
        { autoTrackExposure: !0 }
    ).enabled;
}
function o(e, n) {
    return i.getCurrentConfig(
        {
            guildId: e,
            location: n
        },
        { autoTrackExposure: !0 }
    ).enabled;
}
