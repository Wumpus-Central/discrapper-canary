"use strict";
n.d(t, { $j: () => a, Eh: () => s, ko: () => o });
var r = n(600975),
    i = n(688151);
let s = (0, r.C)({
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
    commonTriggerPoint: i.$G.VOICE_CALL,
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
        {
            id: 5,
            label: "Enable Hang Status with no default, allow clearing statuses",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !1,
                showEmptyChannelTopic: !1,
                allowPermanentClear: !0,
                defaultStatusVariant: "illocons",
            },
        },
    ],
});
function a(e) {
    let { guildId: t, location: n } = e;
    return s.useExperiment({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
function o(e) {
    let { guildId: t, location: n } = e;
    return s.getCurrentConfig({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
