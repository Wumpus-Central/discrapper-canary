"use strict";
n.d(t, {
    tp: () => p,
    Yn: () => h,
    _g: () => m,
    rO: () => E,
    Rd: () => I,
    Dv: () => S,
    s2: () => f,
    S: () => A,
    oc: () => N,
}),
    n(801541);
var i = n(889137),
    r = n(440703),
    s = n(507107),
    a = n(859387);
function o(e) {
    let t = {};
    for (let n of Object.keys(e)) {
        let i = parseInt(n);
        s.tb.has(i) && (t[i] = e[n]);
    }
    return t;
}
let l = (e) => {
    switch (e.type) {
        case r.l.REWARD_CODE:
            return {
                type: r.l.REWARD_CODE,
                skuId: e.sku_id,
                asset: e.asset,
                assetVideo: e.asset_video,
                messages: {
                    redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
                    name: e.messages.name,
                    nameWithArticle: e.messages.name_with_article,
                },
                approximateCount: e.approximate_count,
                redemptionLink: e.redemption_link,
            };
        case r.l.COLLECTIBLE:
            return {
                type: r.l.COLLECTIBLE,
                skuId: e.sku_id,
                asset: e.asset,
                assetVideo: e.asset_video,
                messages: {
                    redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
                    name: e.messages.name,
                    nameWithArticle: e.messages.name_with_article,
                },
                expiresAt: e.expires_at,
                expirationMode: e.expiration_mode,
                expiresAtPremium: e.expires_at_premium,
            };
        case r.l.VIRTUAL_CURRENCY:
            return {
                type: r.l.VIRTUAL_CURRENCY,
                skuId: e.sku_id,
                messages: {
                    redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
                    name: e.messages.name,
                    nameWithArticle: e.messages.name_with_article,
                },
                orbQuantity: e.orb_quantity,
                premiumOrbQuantity: e.premium_orb_quantity,
            };
        case r.l.FRACTIONAL_PREMIUM:
            return {
                type: r.l.FRACTIONAL_PREMIUM,
                skuId: e.sku_id,
                asset: e.asset,
                assetVideo: e.asset_video,
                quantity: e.quantity,
                messages: {
                    redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
                    name: e.messages.name,
                    nameWithArticle: e.messages.name_with_article,
                },
            };
        case r.l.IN_GAME:
            return {
                type: r.l.IN_GAME,
                skuId: e.sku_id,
                asset: e.asset,
                assetVideo: e.asset_video,
                messages: {
                    redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
                    name: e.messages.name,
                    nameWithArticle: e.messages.name_with_article,
                },
            };
    }
};
var u = n(412703),
    c = n(668824);
function d(e) {
    return {
        url: e.url,
        width: e.width,
        height: e.height,
        thumbnail: e.thumbnail,
        caption: e.caption,
        transcript: e.transcript,
    };
}
function _(e) {
    if (null != e)
        return {
            name: e.name,
            logotype: e.logotype,
            redemptionInstructions: e.redemption_instructions,
            logotypeLight: e.logotype_light,
            logotypeDark: e.logotype_dark,
        };
}
function f(e) {
    try {
        return (0, i.YW)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (t) {
        return console.error(`Unknown config version '${e?.config?.config_version}'`, t), !1;
    }
}
function h(e) {
    return (0, i.YW)(e)
        .with({ config_version: 2 }, (e) => {
            var t;
            let n;
            return {
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
                taskConfigV2: ((e) => {
                    try {
                        let t = Object.entries(e.tasks)
                            .map((e) => {
                                let [t, n] = e;
                                return [
                                    t,
                                    ((e) => {
                                        var t, n;
                                        switch (e.type) {
                                            case u.n.WATCH_VIDEO:
                                                let i;
                                                return {
                                                    type: u.n.WATCH_VIDEO,
                                                    target: e.target,
                                                    assets:
                                                        ((i = { video: d((t = e.assets).video) }),
                                                        null != t.video_low_res && (i.videoLowRes = d(t.video_low_res)),
                                                        null != t.video_hls && (i.videoHls = d(t.video_hls)),
                                                        i),
                                                    messages: { videoTitle: e.messages.video_title },
                                                };
                                            case u.n.WATCH_VIDEO_ON_MOBILE:
                                                let r;
                                                return {
                                                    type: u.n.WATCH_VIDEO_ON_MOBILE,
                                                    target: e.target,
                                                    assets:
                                                        ((r = { video: d((n = e.assets).video) }),
                                                        null != n.video_low_res && (r.videoLowRes = d(n.video_low_res)),
                                                        null != n.video_hls && (r.videoHls = d(n.video_hls)),
                                                        r),
                                                    messages: { videoTitle: e.messages.video_title },
                                                };
                                            case u.n.PLAY_ON_DESKTOP:
                                                return {
                                                    type: u.n.PLAY_ON_DESKTOP,
                                                    target: e.target,
                                                    applications: e.applications,
                                                };
                                            case u.n.STREAM_ON_DESKTOP:
                                                return {
                                                    type: u.n.STREAM_ON_DESKTOP,
                                                    target: e.target,
                                                    applications: e.applications,
                                                };
                                            case u.n.PLAY_ACTIVITY:
                                                return {
                                                    type: u.n.PLAY_ACTIVITY,
                                                    target: e.target,
                                                    applications: e.applications,
                                                };
                                            case u.n.PLAY_ON_XBOX:
                                                return {
                                                    type: u.n.PLAY_ON_XBOX,
                                                    target: e.target,
                                                    externalIds: e.external_ids,
                                                    applications: e.applications,
                                                };
                                            case u.n.PLAY_ON_PLAYSTATION:
                                                return {
                                                    type: u.n.PLAY_ON_PLAYSTATION,
                                                    target: e.target,
                                                    externalIds: e.external_ids,
                                                    applications: e.applications,
                                                };
                                            case u.n.ACHIEVEMENT_IN_GAME:
                                                return {
                                                    type: u.n.ACHIEVEMENT_IN_GAME,
                                                    target: e.target,
                                                    eventName: e.event_name,
                                                    messages: {
                                                        taskTitle: e.messages.task_title,
                                                        taskDescription: e.messages.task_description,
                                                    },
                                                    applications: e.applications,
                                                    accountLinkInstructions: e.account_link_instructions,
                                                };
                                            case u.n.ACHIEVEMENT_IN_ACTIVITY:
                                                return {
                                                    type: u.n.ACHIEVEMENT_IN_ACTIVITY,
                                                    target: e.target,
                                                    eventName: e.event_name,
                                                    messages: {
                                                        taskTitle: e.messages.task_title,
                                                        taskDescription: e.messages.task_description,
                                                    },
                                                    applications: e.applications,
                                                };
                                            default:
                                                return null;
                                        }
                                    })(n),
                                ];
                            })
                            .filter((e) => {
                                let [t, n] = e;
                                return null !== n;
                            });
                        return { tasks: Object.fromEntries(t), joinOperator: e.join_operator };
                    } catch (e) {
                        return { tasks: {}, joinOperator: c.K.OR };
                    }
                })(e.task_config_v2),
                rewardsConfig: {
                    assignmentMethod: (n = e.rewards_config).assignment_method,
                    rewards: n.rewards.map(l),
                    rewardsExpireAt: n.rewards_expire_at,
                    platforms: n.platforms,
                },
                cosponsorMetadata: _(e.cosponsor_metadata),
                sharePolicy: e.share_policy,
                ctaConfig: {
                    android: null != (t = e.cta_config).android ? { androidAppId: t.android.android_app_id } : void 0,
                    ios: null != t.ios ? { iosAppId: t.ios.ios_app_id } : void 0,
                    link: t.link,
                    buttonLabel: t.button_label,
                    subtitle: t.subtitle,
                },
            };
        })
        .exhaustive();
}
function p(e) {
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
function E(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: h(e.config),
        userStatus: null == e.user_status ? null : p(e.user_status),
        targetedContent: e.targeted_content,
        trafficMetadataSealed: e.traffic_metadata_sealed,
    };
}
function m(e) {
    return { id: e.id, replacementId: e.replacement_id };
}
function g(e) {
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
function A(e) {
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
            rewards: t.rewards.map(g),
            cosponsorMetadata: _(t.cosponsor_metadata),
        },
        userStatus: null == e.user_status ? null : p(e.user_status),
    };
}
function I(e) {
    return {
        userId: e.user_id,
        questId: e.quest_id,
        code: e.code,
        platform: e.platform,
        claimedAt: e.claimed_at,
        tier: e.tier ?? null,
    };
}
function T(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: (function (e) {
            if (e?.quest_rewards == null) return null;
            let t = e.quest_rewards;
            switch (t.reward.tag) {
                case r.l.IN_GAME:
                    return { questRewards: { reward: { tag: t.reward.tag } } };
                case r.l.REWARD_CODE:
                    return { questRewards: { reward: { tag: t.reward.tag, rewardCode: I(t.reward.reward_code) } } };
            }
        })(e.tenant_metadata),
        consumed: e.consumed,
    };
}
function S(e) {
    return { claimedAt: e.claimed_at, items: e.entitlements.map(T), errors: e.errors };
}
function N(e) {
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
