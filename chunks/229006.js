"use strict";
n.d(t, {
    Dv: () => T,
    Hi: () => N,
    Rd: () => E,
    S: () => m,
    Wv: () => R,
    Yn: () => l,
    _g: () => f,
    rO: () => _,
    s2: () => o,
    tp: () => d,
}),
    n(801541);
var r = n(889137),
    i = n(440703),
    s = n(341915),
    a = n(229695);
function o(e) {
    try {
        return (0, r.YW)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (t) {
        return console.error(`Unknown config version '${e?.config?.config_version}'`, t), !1;
    }
}
function l(e) {
    return (0, r.YW)(e)
        .with({ config_version: 2 }, (e) => (0, a.k)(e))
        .exhaustive();
}
function u(e) {
    return null == e ? null : { lastBeatAt: e.last_beat_at, expiresAt: e.expires_at };
}
function c(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: u(r.heartbeat),
        };
    return t;
}
function d(e) {
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
        progress: c(e.progress),
    };
}
function _(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: l(e.config),
        userStatus: null == e.user_status ? null : d(e.user_status),
        targetedContent: e.targeted_content,
        trafficMetadataRaw: e.traffic_metadata_raw,
        trafficMetadataSealed: e.traffic_metadata_sealed,
    };
}
function f(e) {
    return { id: e.id, replacementId: e.replacement_id };
}
function p(e) {
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
function h(e) {
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
        rewards: e.rewards.map(p),
        cosponsorMetadata: (0, a.j)(e.cosponsor_metadata),
    };
}
function m(e) {
    return { id: e.id, config: h(e.config), userStatus: null == e.user_status ? null : d(e.user_status) };
}
function E(e) {
    return {
        userId: e.user_id,
        questId: e.quest_id,
        code: e.code,
        platform: e.platform,
        claimedAt: e.claimed_at,
        tier: e.tier ?? null,
    };
}
function g(e) {
    if (e?.quest_rewards == null) return null;
    let t = e.quest_rewards;
    switch (t.reward.tag) {
        case i.l.IN_GAME:
            return { questRewards: { reward: { tag: t.reward.tag } } };
        case i.l.REWARD_CODE:
            return { questRewards: { reward: { tag: t.reward.tag, rewardCode: E(t.reward.reward_code) } } };
    }
}
function A(e) {
    return { eventName: e.event_name, title: e.title, description: e.description, target: e.target };
}
function I(e) {
    return { skuId: e.sku_id, tenantMetadata: g(e.tenant_metadata), consumed: e.consumed };
}
function T(e) {
    return { claimedAt: e.claimed_at, items: e.entitlements.map(I), errors: e.errors };
}
function S(e) {
    return { altText: e.alt_text, assetType: e.asset_type, url: e.url };
}
function y(e) {
    return { ctaType: e.cta_type, title: e.title, url: e.url };
}
function v(e) {
    return { ctaType: e.cta_type, title: e.title, questId: e.quest_id };
}
function C(e) {
    return {
        linearGradientStart: e.linear_gradient_start,
        linearGradientEnd: e.linear_gradient_end,
        radialGradientStart: e.radial_gradient_start,
        radialGradientEnd: e.radial_gradient_end,
        entrypointAssetImageUrl: e.entrypoint_asset_image_url,
        tooltipAssetImageUrl: e.tooltip_asset_image_url,
        tooltipTitle: e.tooltip_title,
        tooltipSubtitle: e.tooltip_subtitle,
    };
}
function N(e) {
    let t = {
        placementType: s.gh.QUEST_HOME_BANNER,
        campaignId: e.campaign_id,
        labelTitle: e.label_title,
        labelSubtitle: e.label_subtitle,
        assetHeroImage: S(e.asset_hero_image),
        assetSponsorImage: S(e.asset_sponsor_image),
        ctaSponsorUrl: y(e.cta_sponsor_url),
        ctaQuests: e.cta_quests.map(v),
        startsAt: e.starts_at,
        expiresAt: e.expires_at,
    };
    return (
        null != e.asset_hero_video && (t.assetHeroVideo = S(e.asset_hero_video)),
        null != e.quest_home_entrypoint && (t.questHomeEntrypoint = C(e.quest_home_entrypoint)),
        t
    );
}
function R(e) {
    if (1 !== e.version || !(s.gh.QUEST_HOME_BANNER in e.placements)) return null;
    let t = e.placements[s.gh.QUEST_HOME_BANNER];
    return null == t ? null : N(t);
}
