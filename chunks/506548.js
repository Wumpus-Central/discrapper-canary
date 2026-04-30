"use strict";
n.d(t, { S: () => o });
var i = n(440703),
    r = n(507107);
function s(e) {
    let t = {};
    for (let n of Object.keys(e)) {
        let i = parseInt(n);
        r.tb.has(i) && (t[i] = e[n]);
    }
    return t;
}
let a = (e) => {
        switch (e.type) {
            case i.l.REWARD_CODE:
                return {
                    type: i.l.REWARD_CODE,
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
            case i.l.COLLECTIBLE:
                return {
                    type: i.l.COLLECTIBLE,
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
            case i.l.VIRTUAL_CURRENCY:
                return {
                    type: i.l.VIRTUAL_CURRENCY,
                    skuId: e.sku_id,
                    messages: {
                        redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article,
                    },
                    orbQuantity: e.orb_quantity,
                    premiumOrbQuantity: e.premium_orb_quantity,
                };
            case i.l.FRACTIONAL_PREMIUM:
                return {
                    type: i.l.FRACTIONAL_PREMIUM,
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
            case i.l.IN_GAME:
                return {
                    type: i.l.IN_GAME,
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
