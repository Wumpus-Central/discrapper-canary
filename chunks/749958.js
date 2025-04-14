n.d(t, { O: () => i });
let r = (0, n(818083).B)({
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
});
function i() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        { enabled: t } = r.useExperiment({ location: 'GuildProfileEmbedExperiment' }, { autoTrackExposure: e });
    return t;
}
