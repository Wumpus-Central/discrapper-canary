n.d(t, {
    SK: () => a,
    _k: () => l,
    jW: () => s,
    t_: () => o,
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
        kind: "user",
        id: "2025-03_invites_refresh",
        label: "Invites Refresh",
        defaultConfig: {
            enabled: !1,
            entrypoints: !1,
            modal: !1,
        },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: "Enabled - Treatment 1 (Full Invites Refresh)",
                config: {
                    enabled: !0,
                    entrypoints: !0,
                    modal: !0,
                },
            },
            {
                id: 2,
                label: "Enabled - Treatment 2 (New Entrypoints, Old Modal)",
                config: {
                    enabled: !0,
                    entrypoints: !0,
                    modal: !1,
                },
            },
            {
                id: 3,
                label: "Enabled - Treatment 3 (Old Entrypoints, New Modal)",
                config: {
                    enabled: !0,
                    entrypoints: !1,
                    modal: !0,
                },
            },
        ],
    }),
    o = (0, r.B)({
        kind: "user",
        id: "2025-09_invite_refresh_entrypoints",
        label: "Invites Refresh",
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
function s(e) {
    let { location: t } = e,
        { enabled: n, entrypoints: r, modal: i } = a.getCurrentConfig({ location: t }),
        {
            isVoiceChannelEntrypointEnabled: s,
            isInCallEntrypointEnabled: l,
            isGuildEntrypointEnabled: c,
            isTextChannelEntrypointEnabled: u,
        } = o.getCurrentConfig({ location: t });
    return {
        enabled: n,
        entrypoints: r,
        modal: i,
        isVoiceChannelEntrypointEnabled: s,
        isInCallEntrypointEnabled: l,
        isGuildEntrypointEnabled: c,
        isTextChannelEntrypointEnabled: u,
    };
}
function l(e) {
    let { location: t } = e,
        { enabled: n, entrypoints: r, modal: i } = a.useExperiment({ location: t }),
        {
            isVoiceChannelEntrypointEnabled: s,
            isInCallEntrypointEnabled: l,
            isGuildEntrypointEnabled: c,
            isTextChannelEntrypointEnabled: u,
        } = o.useExperiment({ location: t });
    return {
        enabled: n,
        entrypoints: r,
        modal: i,
        isVoiceChannelEntrypointEnabled: s,
        isInCallEntrypointEnabled: l,
        isGuildEntrypointEnabled: c,
        isTextChannelEntrypointEnabled: u,
    };
}
