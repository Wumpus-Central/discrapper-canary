"use strict";
n.d(t, { S: () => o });
var r = n(440703),
    i = n(341915);
function s(e) {
    let t = {};
    for (let n of Object.keys(e)) {
        let r = parseInt(n);
        i.tb.has(r) && (t[r] = e[n]);
    }
    return t;
}
let a = (e) => {
        switch (e.type) {
            case r.l.REWARD_CODE:
                return {
                    type: r.l.REWARD_CODE,
                    skuId: e.sku_id,
                    asset: e.asset,
                    assetVideo: e.asset_video,
                    messages: {
                        redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
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
                        redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
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
                        redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
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
                        redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
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
                        redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article,
                    },
                };
        }
    },
    o = (e) => ({
        assignmentMethod: e.assignment_method,
        rewards: e.rewards.map(a),
        rewardsExpireAt: e.rewards_expire_at,
        platforms: e.platforms,
    });
