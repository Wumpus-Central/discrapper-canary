n.d(t, {
    bN: () => s,
    gx: () => l,
    n5: () => o,
});
var r = n(973285),
    i = n(818083),
    a = n(987338);
let o = (0, i.B)({
    kind: "guild",
    id: "2025-07_hang_status",
    label: "Hang Statuses",
    defaultConfig: {
        enableHangStatus: !1,
        setDefaultStatus: !1,
        showEmptyChannelTopic: !0,
        allowPermanentClear: !1,
        defaultStatusVariant: "twemoji",
    },
    commonTriggerPoint: a.$P.VOICE_CALL,
    treatments: [
        {
            id: 1,
            label: "Enable Hang Status with illocons - chilling default",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !0,
                showEmptyChannelTopic: !1,
                allowPermanentClear: !1,
                defaultStatusVariant: "illocons",
            },
        },
        {
            id: 2,
            label: "Enable Hang Status with Twemoji - chilling default",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !0,
                showEmptyChannelTopic: !1,
                allowPermanentClear: !1,
                defaultStatusVariant: "twemoji",
            },
        },
        {
            id: 3,
            label: "Enable Hang Status with Twemoji - neutral default",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !0,
                showEmptyChannelTopic: !1,
                allowPermanentClear: !1,
                defaultStatusVariant: "twemojimild",
            },
        },
        {
            id: 4,
            label: "Enable Hang Status with Twemoji - neutral default, allow clearing statuses",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !0,
                showEmptyChannelTopic: !1,
                allowPermanentClear: !0,
                defaultStatusVariant: "twemojimild",
            },
        },
    ],
});
function s(e) {
    let { guildId: t, location: n } = e,
        { enabled: i } = r.W.useExperiment({
            guildId: t,
            location: n,
        });
    return o.useExperiment(
        {
            guildId: t,
            location: n,
        },
        {
            disable: !i,
            autoTrackExposure: !0,
        },
    );
}
function l(e) {
    let { guildId: t, location: n } = e,
        { enabled: i } = r.W.getCurrentConfig({
            guildId: t,
            location: n,
        });
    return o.getCurrentConfig(
        {
            guildId: t,
            location: n,
        },
        {
            disable: !i,
            autoTrackExposure: !0,
        },
    );
}
