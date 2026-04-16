"use strict";
n.d(t, {
    Dv: () => S,
    Rd: () => g,
    S: () => E,
    Yn: () => u,
    _g: () => p,
    oc: () => N,
    rO: () => f,
    s2: () => l,
    tp: () => _,
}),
    n(801541);
var r = n(889137),
    i = n(440703),
    s = n(341915),
    a = n(579473),
    o = n(229695);
function l(e) {
    try {
        return (0, r.YW)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (t) {
        return console.error(`Unknown config version '${e?.config?.config_version}'`, t), !1;
    }
}
function u(e) {
    return (0, r.YW)(e)
        .with({ config_version: 2 }, (e) => (0, o.k)(e))
        .exhaustive();
}
function c(e) {
    return null == e ? null : { lastBeatAt: e.last_beat_at, expiresAt: e.expires_at };
}
function d(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: c(r.heartbeat),
        };
    return t;
}
function _(e) {
    return {
        userId: e.user_id,
        questId: e.quest_id,
        enrolledAt: e.enrolled_at,
        completedAt: e.completed_at,
        claimedAt: e.claimed_at,
        claimedTier: e.claimed_tier ?? null,
        orbQuantityClaimed: e.orb_quantity_claimed ?? null,
        lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
        streamProgressSeconds: e.stream_progress_seconds,
        dismissedQuestContent: e.dismissed_quest_content,
        progress: d(e.progress),
    };
}
function f(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: u(e.config),
        userStatus: null == e.user_status ? null : _(e.user_status),
        targetedContent: e.targeted_content,
        trafficMetadataRaw: e.traffic_metadata_raw,
        trafficMetadataSealed: e.traffic_metadata_sealed,
    };
}
function p(e) {
    return { id: e.id, replacementId: e.replacement_id };
}
function h(e) {
    return e.type === i.l.VIRTUAL_CURRENCY
        ? {
              skuId: e.sku_id,
              type: e.type,
              name: e.name,
              nameWithArticle: e.name_with_article,
              collectibleProduct: e.collectible_product,
              orbQuantity: e.orb_quantity,
          }
        : {
              skuId: e.sku_id,
              type: e.type,
              name: e.name,
              nameWithArticle: e.name_with_article,
              asset: e.asset,
              assetVideo: e.asset_video,
              collectibleProduct: e.collectible_product,
          };
}
function m(e) {
    return {
        id: e.id,
        startsAt: e.starts_at,
        expiresAt: e.expires_at,
        features: e.features,
        messages: {
            questName: e.messages.quest_name,
            gamePublisher: e.messages.game_publisher,
            gameTitle: e.messages.game_title,
        },
        assets: {
            hero: e.assets.hero,
            heroVideo: e.assets.hero_video,
            questBarHero: e.assets.quest_bar_hero,
            questBarHeroVideo: e.assets.quest_bar_hero_video,
            gameTile: e.assets.game_tile,
            logotype: e.assets.logotype,
            logotypeLight: e.assets.logotype_light,
            logotypeDark: e.assets.logotype_dark,
            gameTileLight: e.assets.game_tile_light,
            gameTileDark: e.assets.game_tile_dark,
        },
        colors: { primary: e.colors.primary, secondary: e.colors.secondary },
        rewards: e.rewards.map(h),
        cosponsorMetadata: (0, o.j)(e.cosponsor_metadata),
    };
}
function E(e) {
    return { id: e.id, config: m(e.config), userStatus: null == e.user_status ? null : _(e.user_status) };
}
function g(e) {
    return {
        userId: e.user_id,
        questId: e.quest_id,
        code: e.code,
        platform: e.platform,
        claimedAt: e.claimed_at,
        tier: e.tier ?? null,
    };
}
function A(e) {
    if (e?.quest_rewards == null) return null;
    let t = e.quest_rewards;
    switch (t.reward.tag) {
        case i.l.IN_GAME:
            return { questRewards: { reward: { tag: t.reward.tag } } };
        case i.l.REWARD_CODE:
            return { questRewards: { reward: { tag: t.reward.tag, rewardCode: g(t.reward.reward_code) } } };
    }
}
function I(e) {
    return { eventName: e.event_name, title: e.title, description: e.description, target: e.target };
}
function T(e) {
    return { skuId: e.sku_id, tenantMetadata: A(e.tenant_metadata), consumed: e.consumed };
}
function S(e) {
    return { claimedAt: e.claimed_at, items: e.entitlements.map(T), errors: e.errors };
}
function y(e) {
    return {
        linearGradient:
            null != e.linear_gradient_start && null != e.linear_gradient_end
                ? { start: e.linear_gradient_start, end: e.linear_gradient_end }
                : void 0,
        radialGradient:
            null != e.radial_gradient_start && null != e.radial_gradient_end
                ? { start: e.radial_gradient_start, end: e.radial_gradient_end }
                : void 0,
        image: null != e.entrypoint_asset_image_url ? (0, a.dv)(e.entrypoint_asset_image_url) : void 0,
        tooltipImage: null != e.tooltip_asset_image_url ? (0, a.dv)(e.tooltip_asset_image_url) : void 0,
        tooltipTitle: e.tooltip_title,
        tooltipSubtitle: e.tooltip_subtitle,
    };
}
function v(e) {
    return {
        id: e.campaign_id,
        labelTitle: e.label_title,
        labelSubtitle: e.label_subtitle,
        heroImage: (0, a.dv)(e.asset_hero_image.url),
        heroVideo: null != e.asset_hero_video ? (0, a.dv)(e.asset_hero_video.url) : void 0,
        sponsorImage: (0, a.dv)(e.asset_sponsor_image.url),
        cta: { url: e.cta_sponsor_url.url, buttonLabel: e.cta_sponsor_url.title },
        questIds: e.shelf?.quest_ids ?? e.cta_quests.map((e) => e.quest_id),
        questHomeEntrypoint: null != e.quest_home_entrypoint ? y(e.quest_home_entrypoint) : void 0,
        shelfImage: e.shelf?.intro_asset_image != null ? (0, a.dv)(e.shelf.intro_asset_image.url) : void 0,
        shelfVideo: e.shelf?.intro_asset_video != null ? (0, a.dv)(e.shelf.intro_asset_video.url) : void 0,
    };
}
function N(e) {
    if (1 !== e.version || !(s.gh.QUEST_HOME_BANNER in e.placements)) return null;
    let t = e.placements[s.gh.QUEST_HOME_BANNER];
    return null == t ? null : v(t);
}
