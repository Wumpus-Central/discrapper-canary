n.d(t, {
    LK: () => o,
    _k: () => s,
    t_: () => a,
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: "user",
    id: "2025-09_invite_refresh_entrypoints",
    label: "Invites Refresh Entrypoints Only",
    defaultConfig: {
        isVoiceChannelEntrypointEnabled: !1,
        isInCallEntrypointEnabled: !1,
        isGuildEntrypointEnabled: !1,
        isTextChannelEntrypointEnabled: !1,
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Refresh - VC Entrypoints",
            config: {
                isVoiceChannelEntrypointEnabled: !0,
                isInCallEntrypointEnabled: !1,
                isGuildEntrypointEnabled: !1,
                isTextChannelEntrypointEnabled: !1,
            },
        },
        {
            id: 2,
            label: "Refresh - In Call Entrypoints",
            config: {
                isVoiceChannelEntrypointEnabled: !1,
                isInCallEntrypointEnabled: !0,
                isGuildEntrypointEnabled: !1,
                isTextChannelEntrypointEnabled: !1,
            },
        },
        {
            id: 3,
            label: "Refresh - Guild Entrypoints",
            config: {
                isVoiceChannelEntrypointEnabled: !1,
                isInCallEntrypointEnabled: !1,
                isGuildEntrypointEnabled: !0,
                isTextChannelEntrypointEnabled: !1,
            },
        },
        {
            id: 4,
            label: "Refresh - Text Channel Entrypoints",
            config: {
                isVoiceChannelEntrypointEnabled: !1,
                isInCallEntrypointEnabled: !1,
                isGuildEntrypointEnabled: !1,
                isTextChannelEntrypointEnabled: !0,
            },
        },
    ],
});
function o(e) {
    let { location: t } = e,
        {
            isVoiceChannelEntrypointEnabled: n,
            isInCallEntrypointEnabled: r,
            isGuildEntrypointEnabled: i,
            isTextChannelEntrypointEnabled: o,
        } = a.getCurrentConfig({ location: t }),
        s = n || r || i || o;
    return {
        isVoiceChannelEntrypointEnabled: s,
        isInCallEntrypointEnabled: s,
        isGuildEntrypointEnabled: s,
        isTextChannelEntrypointEnabled: s,
    };
}
function s(e) {
    let { location: t } = e,
        {
            isVoiceChannelEntrypointEnabled: n,
            isInCallEntrypointEnabled: r,
            isGuildEntrypointEnabled: i,
            isTextChannelEntrypointEnabled: o,
        } = a.useExperiment({ location: t }),
        s = n || r || i || o;
    return {
        isVoiceChannelEntrypointEnabled: s,
        isInCallEntrypointEnabled: s,
        isGuildEntrypointEnabled: s,
        isTextChannelEntrypointEnabled: s,
    };
}
