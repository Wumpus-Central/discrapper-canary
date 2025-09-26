n.d(t, { n: () => a });
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: "guild",
    id: "2025-07_hang_status",
    label: "Hang Statuses",
    defaultConfig: {
        enableHangStatus: !1,
        setDefaultStatus: !1,
        allowChannelTopic: !0,
        allowPermanentClear: !1,
        defaultStatusVariant: "twemoji",
    },
    commonTriggerPoint: i.$P.VOICE_CALL,
    treatments: [
        {
            id: 1,
            label: "Enable Hang Status with illocons - chilling default",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !0,
                allowChannelTopic: !0,
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
                allowChannelTopic: !0,
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
                allowChannelTopic: !0,
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
                allowChannelTopic: !0,
                allowPermanentClear: !0,
                defaultStatusVariant: "twemojimild",
            },
        },
        {
            id: 5,
            label: "Enable Hang Status with Twemoji - no default, allow clearing statuses",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !1,
                allowChannelTopic: !0,
                allowPermanentClear: !0,
                defaultStatusVariant: "twemoji",
            },
        },
        {
            id: 6,
            label: "Enable Hang Status with original icons - chilling default",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !0,
                allowChannelTopic: !0,
                allowPermanentClear: !1,
                defaultStatusVariant: "original",
            },
        },
    ],
});
