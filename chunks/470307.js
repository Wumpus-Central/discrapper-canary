n.d(t, {
    tp: () => u,
    Yn: () => c,
    _g: () => A,
    rO: () => I,
    Rd: () => N,
    Dv: () => R,
    s2: () => d,
    S: () => S,
    oc: () => f,
}),
    n(801541);
var i = n(889137),
    r = n(440703),
    a = n(507107),
    s = n(859387),
    _ = n(326687),
    l = n(506548),
    o = n(9147);
function E(e) {
    if (null != e)
        return {
            name: e.name,
            logotype: e.logotype,
            redemptionInstructions: e.redemption_instructions,
            logotypeLight: e.logotype_light,
            logotypeDark: e.logotype_dark,
        };
}
function d(e) {
    try {
        return (0, i.YW)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (t) {
        return console.error(`Unknown config version '${e?.config?.config_version}'`, t), !1;
    }
}
function c(e) {
    return (0, i.YW)(e)
        .with({ config_version: 2 }, (e) => ({
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
            taskConfigV2: (0, o.z)(e.task_config_v2),
            rewardsConfig: (0, l.S)(e.rewards_config),
            cosponsorMetadata: E(e.cosponsor_metadata),
            sharePolicy: e.share_policy,
            ctaConfig: (0, _.W)(e.cta_config),
        }))
        .exhaustive();
}
function u(e) {
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
            for (let [i, r] of Object.entries(e)) {
                var n;
                t[i] = {
                    eventName: r.event_name,
                    value: r.value,
                    updatedAt: r.updated_at,
                    completedAt: r.completed_at,
                    heartbeat:
                        null == (n = r.heartbeat) ? null : { lastBeatAt: n.last_beat_at, expiresAt: n.expires_at },
                };
            }
            return t;
        })(e.progress),
    };
}
function I(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: c(e.config),
        userStatus: null == e.user_status ? null : u(e.user_status),
        targetedContent: e.targeted_content,
        trafficMetadataRaw: e.traffic_metadata_raw,
        trafficMetadataSealed: e.traffic_metadata_sealed,
    };
}
function A(e) {
    return { id: e.id, replacementId: e.replacement_id };
}
function T(e) {
    return e.type === r.l.VIRTUAL_CURRENCY
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
function S(e) {
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
            rewards: t.rewards.map(T),
            cosponsorMetadata: E(t.cosponsor_metadata),
        },
        userStatus: null == e.user_status ? null : u(e.user_status),
    };
}
function N(e) {
    return {
        userId: e.user_id,
        questId: e.quest_id,
        code: e.code,
        platform: e.platform,
        claimedAt: e.claimed_at,
        tier: e.tier ?? null,
    };
}
function O(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: (function (e) {
            if (e?.quest_rewards == null) return null;
            let t = e.quest_rewards;
            switch (t.reward.tag) {
                case r.l.IN_GAME:
                    return { questRewards: { reward: { tag: t.reward.tag } } };
                case r.l.REWARD_CODE:
                    return { questRewards: { reward: { tag: t.reward.tag, rewardCode: N(t.reward.reward_code) } } };
            }
        })(e.tenant_metadata),
        consumed: e.consumed,
    };
}
function R(e) {
    return { claimedAt: e.claimed_at, items: e.entitlements.map(O), errors: e.errors };
}
function f(e) {
    var t;
    if (1 !== e.version || !(a.gh.QUEST_HOME_BANNER in e.placements)) return null;
    let n = e.placements[a.gh.QUEST_HOME_BANNER];
    return null == n
        ? null
        : {
              id: n.campaign_id,
              labelTitle: n.label_title,
              labelSubtitle: n.label_subtitle,
              heroImage: (0, s.dv)(n.asset_hero_image.url),
              heroVideo: null != n.asset_hero_video ? (0, s.dv)(n.asset_hero_video.url) : void 0,
              sponsorImage: (0, s.dv)(n.asset_sponsor_image.url),
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
                                null != t.entrypoint_asset_image_url ? (0, s.dv)(t.entrypoint_asset_image_url) : void 0,
                            tooltipImage:
                                null != t.tooltip_asset_image_url ? (0, s.dv)(t.tooltip_asset_image_url) : void 0,
                            tooltipTitle: t.tooltip_title,
                            tooltipSubtitle: t.tooltip_subtitle,
                        }
                      : void 0,
              shelfImage: n.shelf?.intro_asset_image != null ? (0, s.dv)(n.shelf.intro_asset_image.url) : void 0,
              shelfVideo: n.shelf?.intro_asset_video != null ? (0, s.dv)(n.shelf.intro_asset_video.url) : void 0,
          };
}
