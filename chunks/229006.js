n.d(t, {
    Dv: () => O,
    Em: () => I,
    Rd: () => g,
    S: () => m,
    Yn: () => l,
    _g: () => p,
    rO: () => f,
    s2: () => o,
    tp: () => d,
}),
    n(801541),
    n(896048),
    n(228524);
var r = n(889137),
    i = n(440703),
    a = n(341915),
    s = n(229695);

function o(e) {
    try {
        return (0, r.YW)(e.config)
            .with(
                {
                    config_version: 2,
                },
                () => !0,
            )
            .exhaustive();
    } catch (n) {
        var t;
        return (
            console.error(
                "Unknown config version '".concat(null == e || null == (t = e.config) ? void 0 : t.config_version, "'"),
                n,
            ),
            !1
        );
    }
}

function l(e) {
    return (0, r.YW)(e)
        .with(
            {
                config_version: 2,
            },
            (e) => (0, s.k)(e),
        )
        .exhaustive();
}

function c(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at,
          };
}

function u(e) {
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

function d(e) {
    var t;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        enrolledAt: e.enrolled_at,
        completedAt: e.completed_at,
        claimedAt: e.claimed_at,
        claimedTier: null != (t = e.claimed_tier) ? t : null,
        lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
        streamProgressSeconds: e.stream_progress_seconds,
        dismissedQuestContent: e.dismissed_quest_content,
        progress: u(e.progress),
    };
}

function f(e) {
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

function p(e) {
    return {
        id: e.id,
        replacementId: e.replacement_id,
    };
}

function _(e) {
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
        colors: {
            primary: e.colors.primary,
            secondary: e.colors.secondary,
        },
        rewards: e.rewards.map(_),
        cosponsorMetadata: (0, s.j)(e.cosponsor_metadata),
    };
}

function m(e) {
    return {
        id: e.id,
        config: h(e.config),
        userStatus: null == e.user_status ? null : d(e.user_status),
    };
}

function g(e) {
    var t;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        code: e.code,
        platform: e.platform,
        claimedAt: e.claimed_at,
        tier: null != (t = e.tier) ? t : null,
    };
}

function E(e) {
    if ((null == e ? void 0 : e.quest_rewards) == null) return null;
    let t = e.quest_rewards;
    switch (t.reward.tag) {
        case i.l.IN_GAME:
            return {
                questRewards: {
                    reward: {
                        tag: t.reward.tag,
                    },
                },
            };
        case i.l.REWARD_CODE:
            return {
                questRewards: {
                    reward: {
                        tag: t.reward.tag,
                        rewardCode: g(t.reward.reward_code),
                    },
                },
            };
    }
}

function b(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target,
    };
}

function y(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: E(e.tenant_metadata),
        consumed: e.consumed,
    };
}

function O(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(y),
        errors: e.errors,
    };
}

function A(e) {
    return {
        altText: e.alt_text,
        assetType: e.asset_type,
        url: e.url,
    };
}

function v(e) {
    return {
        ctaType: e.cta_type,
        title: e.title,
        url: e.url,
    };
}

function S(e) {
    return {
        ctaType: e.cta_type,
        title: e.title,
        questId: e.quest_id,
    };
}

function I(e) {
    if (1 !== e.version || !(a.gh.QUEST_HOME_BANNER in e.placements)) return null;
    let t = e.placements[a.gh.QUEST_HOME_BANNER];
    return null == t
        ? null
        : {
              placementType: a.gh.QUEST_HOME_BANNER,
              campaignId: t.campaign_id,
              labelTitle: t.label_title,
              labelSubtitle: t.label_subtitle,
              assetHeroImage: A(t.asset_hero_image),
              assetSponsorImage: A(t.asset_sponsor_image),
              ctaSponsorUrl: v(t.cta_sponsor_url),
              ctaQuests: t.cta_quests.map(S),
              startsAt: t.starts_at,
              expiresAt: t.expires_at,
          };
}
