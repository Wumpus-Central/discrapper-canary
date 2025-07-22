n.d(t, { v: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-07_guild_profile_invite_embed_holdout_two',
    label: 'Holdout for guild profile invite embeds',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Guild profile invite embed holdout',
            config: { enabled: !0 }
        }
    ]
});
function i() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        { enabled: t } = r.useExperiment({ location: 'GuildProfileEmbedExperiment' }, { autoTrackExposure: e });
    return t;
}
