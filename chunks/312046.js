n.d(t, {
    Q: () => s,
    s: () => l,
});
var r = n(666977),
    i = n(418793),
    a = n(460597),
    o = n(608591);
let s = (e) => ({
    id: e.id,
    configVersion: 2,
    startsAt: e.starts_at,
    expiresAt: e.expires_at,
    features: e.features,
    application: {
        id: e.application.id,
        name: e.application.name,
    },
    assets: {
        hero: e.assets.hero,
        heroVideo: e.assets.hero_video,
        questBarHero: e.assets.quest_bar_hero,
        questBarHeroVideo: e.assets.quest_bar_hero_video,
        gameTile: e.assets.game_tile,
        logotype: e.assets.logotype,
        gameTileLight: e.assets.game_tile_light,
        gameTileDark: e.assets.game_tile_dark,
        logotypeLight: e.assets.logotype_light,
        logotypeDark: e.assets.logotype_dark,
    },
    colors: {
        primary: e.colors.primary,
        secondary: e.colors.secondary,
    },
    messages: {
        questName: e.messages.quest_name,
        gameTitle: e.messages.game_title,
        gamePublisher: e.messages.game_publisher,
    },
    taskConfigV2: (0, a._)(e.task_config_v2),
    rewardsConfig: (0, i.v)(e.rewards_config),
    videoMetadata: (0, o.FG)(e.video_metadata),
    cosponsorMetadata: l(e.cosponsor_metadata),
    sharePolicy: e.share_policy,
    ctaConfig: (0, r.D)(e.cta_config),
});
function l(e) {
    if (null != e)
        return {
            name: e.name,
            logotype: e.logotype,
            redemptionInstructions: e.redemption_instructions,
            logotypeLight: e.logotype_light,
            logotypeDark: e.logotype_dark,
        };
}
