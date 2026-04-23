"use strict";
n.d(t, { j: () => o, k: () => a });
var r = n(326687),
    i = n(506548),
    s = n(3498);
let a = (e) => ({
    id: e.id,
    configVersion: 2,
    startsAt: e.starts_at,
    expiresAt: e.expires_at,
    features: e.features,
    application: { id: e.application.id, name: e.application.name },
    assets: {
        hero: e.assets.hero,
        heroVideo: e.assets.hero_video,
        questBarHero: e.assets.quest_bar_hero,
        questBarHeroBlurhash: e.assets.quest_bar_hero_blurhash,
        questBarHeroVideo: e.assets.quest_bar_hero_video,
        gameTile: e.assets.game_tile,
        logotype: e.assets.logotype,
        gameTileLight: e.assets.game_tile_light,
        gameTileDark: e.assets.game_tile_dark,
        logotypeLight: e.assets.logotype_light,
        logotypeDark: e.assets.logotype_dark,
    },
    colors: { primary: e.colors.primary, secondary: e.colors.secondary },
    messages: {
        questName: e.messages.quest_name,
        gameTitle: e.messages.game_title,
        gamePublisher: e.messages.game_publisher,
    },
    taskConfigV2: (0, s.z)(e.task_config_v2),
    rewardsConfig: (0, i.S)(e.rewards_config),
    cosponsorMetadata: o(e.cosponsor_metadata),
    sharePolicy: e.share_policy,
    ctaConfig: (0, r.W)(e.cta_config),
});
function o(e) {
    if (null != e)
        return {
            name: e.name,
            logotype: e.logotype,
            redemptionInstructions: e.redemption_instructions,
            logotypeLight: e.logotype_light,
            logotypeDark: e.logotype_dark,
        };
}
