n.d(t, {
    Q: () => s,
    s: () => o
});
var i = n(418793),
    r = n(460597),
    a = n(608591);
let s = (e) => ({
    id: e.id,
    configVersion: 2,
    startsAt: e.starts_at,
    expiresAt: e.expires_at,
    features: e.features,
    application: {
        id: e.application.id,
        name: e.application.name,
        link: e.application.link
    },
    assets: {
        hero: e.assets.hero,
        heroVideo: e.assets.hero_video,
        questBarHero: e.assets.quest_bar_hero,
        questBarHeroVideo: e.assets.quest_bar_hero_video,
        gameTile: e.assets.game_tile,
        logotype: e.assets.logotype
    },
    colors: {
        primary: e.colors.primary,
        secondary: e.colors.secondary
    },
    messages: {
        questName: e.messages.quest_name,
        gameTitle: e.messages.game_title,
        gamePublisher: e.messages.game_publisher
    },
    taskConfig: (0, r.f)(e.task_config),
    rewardsConfig: (0, i.v)(e.rewards_config),
    videoMetadata: (0, a.F)(e.video_metadata),
    cosponsorMetadata: o(e.cosponsor_metadata)
});
function o(e) {
    if (null != e)
        return {
            name: e.name,
            logotype: e.logotype,
            redemptionInstructions: e.redemption_instructions
        };
}
