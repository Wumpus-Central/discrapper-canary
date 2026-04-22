"use strict";
n.d(t, {
    Dv: () => m,
    Rd: () => h,
    S: () => E,
    Yn: () => u,
    _g: () => _,
    oc: () => g,
    rO: () => c,
    s2: () => l,
    tp: () => d,
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
        progress: (function (e) {
            let t = {};
            for (let [r, i] of Object.entries(e)) {
                var n;
                t[r] = {
                    eventName: i.event_name,
                    value: i.value,
                    updatedAt: i.updated_at,
                    completedAt: i.completed_at,
                    heartbeat:
                        null == (n = i.heartbeat) ? null : { lastBeatAt: n.last_beat_at, expiresAt: n.expires_at },
                };
            }
            return t;
        })(e.progress),
    };
}
function c(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: u(e.config),
        userStatus: null == e.user_status ? null : d(e.user_status),
        targetedContent: e.targeted_content,
        trafficMetadataRaw: e.traffic_metadata_raw,
        trafficMetadataSealed: e.traffic_metadata_sealed,
    };
}
function _(e) {
    return { id: e.id, replacementId: e.replacement_id };
}
function f(e) {
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
function E(e) {
    var t;
    return {
        id: e.id,
        config: {
            id: (t = e.config).id,
            startsAt: t.starts_at,
            expiresAt: t.expires_at,
            features: t.features,
            messages: {
                questName: t.messages.quest_name,
                gamePublisher: t.messages.game_publisher,
                gameTitle: t.messages.game_title,
            },
            assets: {
                hero: t.assets.hero,
                heroVideo: t.assets.hero_video,
                questBarHero: t.assets.quest_bar_hero,
                questBarHeroVideo: t.assets.quest_bar_hero_video,
                gameTile: t.assets.game_tile,
                logotype: t.assets.logotype,
                logotypeLight: t.assets.logotype_light,
                logotypeDark: t.assets.logotype_dark,
                gameTileLight: t.assets.game_tile_light,
                gameTileDark: t.assets.game_tile_dark,
            },
            colors: { primary: t.colors.primary, secondary: t.colors.secondary },
            rewards: t.rewards.map(f),
            cosponsorMetadata: (0, o.j)(t.cosponsor_metadata),
        },
        userStatus: null == e.user_status ? null : d(e.user_status),
    };
}
function h(e) {
    return {
        userId: e.user_id,
        questId: e.quest_id,
        code: e.code,
        platform: e.platform,
        claimedAt: e.claimed_at,
        tier: e.tier ?? null,
    };
}
function p(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: (function (e) {
            if (e?.quest_rewards == null) return null;
            let t = e.quest_rewards;
            switch (t.reward.tag) {
                case i.l.IN_GAME:
                    return { questRewards: { reward: { tag: t.reward.tag } } };
                case i.l.REWARD_CODE:
                    return { questRewards: { reward: { tag: t.reward.tag, rewardCode: h(t.reward.reward_code) } } };
            }
        })(e.tenant_metadata),
        consumed: e.consumed,
    };
}
function m(e) {
    return { claimedAt: e.claimed_at, items: e.entitlements.map(p), errors: e.errors };
}
function g(e) {
    var t;
    if (1 !== e.version || !(s.gh.QUEST_HOME_BANNER in e.placements)) return null;
    let n = e.placements[s.gh.QUEST_HOME_BANNER];
    return null == n
        ? null
        : {
              id: n.campaign_id,
              labelTitle: n.label_title,
              labelSubtitle: n.label_subtitle,
              heroImage: (0, a.dv)(n.asset_hero_image.url),
              heroVideo: null != n.asset_hero_video ? (0, a.dv)(n.asset_hero_video.url) : void 0,
              sponsorImage: (0, a.dv)(n.asset_sponsor_image.url),
              cta: { url: n.cta_sponsor_url.url, buttonLabel: n.cta_sponsor_url.title },
              questIds: n.shelf?.quest_ids ?? n.cta_quests.map((e) => e.quest_id),
              questHomeEntrypoint:
                  null != n.quest_home_entrypoint
                      ? {
                            linearGradient:
                                null != (t = n.quest_home_entrypoint).linear_gradient_start &&
                                null != t.linear_gradient_end
                                    ? { start: t.linear_gradient_start, end: t.linear_gradient_end }
                                    : void 0,
                            radialGradient:
                                null != t.radial_gradient_start && null != t.radial_gradient_end
                                    ? { start: t.radial_gradient_start, end: t.radial_gradient_end }
                                    : void 0,
                            image:
                                null != t.entrypoint_asset_image_url ? (0, a.dv)(t.entrypoint_asset_image_url) : void 0,
                            tooltipImage:
                                null != t.tooltip_asset_image_url ? (0, a.dv)(t.tooltip_asset_image_url) : void 0,
                            tooltipTitle: t.tooltip_title,
                            tooltipSubtitle: t.tooltip_subtitle,
                        }
                      : void 0,
              shelfImage: n.shelf?.intro_asset_image != null ? (0, a.dv)(n.shelf.intro_asset_image.url) : void 0,
              shelfVideo: n.shelf?.intro_asset_video != null ? (0, a.dv)(n.shelf.intro_asset_video.url) : void 0,
          };
}
