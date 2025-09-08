n.d(t, { n: () => r });
let r = (0, n(818083).B)({
    kind: "guild",
    id: "2025-07_hang_status",
    label: "Hang Statuses",
    defaultConfig: {
        enableHangStatus: !1,
        setDefaultStatus: !1,
        allowChannelTopic: !1,
        defaultStatusVariant: "original",
    },
    treatments: [
        {
            id: 1,
            label: "enable hang statuses with no default",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !1,
                allowChannelTopic: !1,
                defaultStatusVariant: "original",
            },
        },
        {
            id: 2,
            label: "enable hang statuses with default",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !0,
                allowChannelTopic: !1,
                defaultStatusVariant: "original",
            },
        },
        {
            id: 3,
            label: "enable hang statuses with channel topic",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !1,
                allowChannelTopic: !0,
                defaultStatusVariant: "original",
            },
        },
        {
            id: 4,
            label: "illocon hang statuses with channel topic",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !0,
                allowChannelTopic: !0,
                defaultStatusVariant: "illocons",
            },
        },
        {
            id: 5,
            label: "grey icon hang statuses with channel topic",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !0,
                allowChannelTopic: !0,
                defaultStatusVariant: "icons",
            },
        },
        {
            id: 6,
            label: "twemoji hang statuses with channel topic",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !0,
                allowChannelTopic: !0,
                defaultStatusVariant: "twemoji",
            },
        },
    ],
});
