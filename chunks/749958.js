n.d(t, {
    iU: () => s,
    n2: () => a
});
var r = n(818083);
let i = (0, r.B)({
        kind: 'user',
        id: '2025-03_guild_profile_invite_embed',
        label: 'Enables invite embeds using new guild profile components',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'new embeds enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    o = (0, r.B)({
        kind: 'user',
        id: '2025-05_guild_profile_invite_embed_iterations',
        label: 'Enables iterations to guild profile invite embeds',
        defaultConfig: {
            updateCopy: !1,
            updateButton: !1
        },
        treatments: [
            {
                id: 1,
                label: 'new copy only',
                config: {
                    updateCopy: !0,
                    updateButton: !1
                }
            },
            {
                id: 2,
                label: 'new button only',
                config: {
                    updateCopy: !1,
                    updateButton: !0
                }
            },
            {
                id: 3,
                label: 'new copy and button',
                config: {
                    updateCopy: !0,
                    updateButton: !0
                }
            }
        ]
    });
function a() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return o.useExperiment({ location: 'GuildProfileEmbedExperiment' }, { autoTrackExposure: e });
}
function s() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        { enabled: t } = i.useExperiment({ location: 'GuildProfileEmbedExperiment' }, { autoTrackExposure: e }),
        { updateButton: n, updateCopy: r } = o.useExperiment({ location: 'GuildProfileEmbedExperiment' }, { autoTrackExposure: e });
    return t || n || r;
}
