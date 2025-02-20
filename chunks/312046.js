n.d(t, {
    Q: () => a,
    s: () => s
});
var r = n(418793),
    i = n(460597),
    o = n(608591);
let a = (e) => ({
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
    taskConfig: (0, i.f)(e.task_config),
    rewardsConfig: (0, r.v)(e.rewards_config),
    videoMetadata: (0, o.F)(e.video_metadata),
    cosponsorMetadata: s(e.cosponsor_metadata)
});
function s(e) {
    if (null != e)
        return {
            name: e.name,
            logotype: e.logotype,
            redemptionInstructions: e.redemption_instructions
        };
}
