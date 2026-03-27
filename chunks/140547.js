"use strict";
n.d(t, { $j: () => o, Eh: () => a, ko: () => l, yT: () => u });
var r = n(600975),
    i = n(945810),
    s = n(688151);
let a = (0, r.C)({
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
    commonTriggerPoint: s.$G.VOICE_CALL,
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
function o(e) {
    let { guildId: t, location: n } = e;
    return a.useExperiment({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
function l(e) {
    let { guildId: t, location: n } = e;
    return a.getCurrentConfig({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
let u = (0, i.mj)({
    name: "2026-03-hang-status-subscribe",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
