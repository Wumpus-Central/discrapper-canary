n.d(t, { v: () => o }), n(47120);
var i = n(887003),
    r = n(497505);
function a(e) {
    let t = {};
    for (let n of Object.keys(e)) {
        let i = parseInt(n);
        r.xw.has(i) && (t[i] = e[n]);
    }
    return t;
}
let s = (e) => {
        let t = {
            skuId: e.sku_id,
            asset: e.asset,
            assetVideo: e.asset_video
        };
        switch (e.type) {
            case i.w.REWARD_CODE:
                return {
                    type: i.w.REWARD_CODE,
                    messages: {
                        redemptionInstructionsByPlatform: a(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    approximateCount: e.approximate_count,
                    redemptionLink: e.redemption_link,
                    ...t
                };
            case i.w.COLLECTIBLE:
                return {
                    type: i.w.COLLECTIBLE,
                    messages: {
                        redemptionInstructionsByPlatform: a(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    expiresAt: e.expires_at,
                    expirationMode: e.expiration_mode,
                    expiresAtPremium: e.expires_at_premium,
                    ...t
                };
            case i.w.VIRTUAL_CURRENCY:
                return {
                    type: i.w.VIRTUAL_CURRENCY,
                    messages: {
                        redemptionInstructionsByPlatform: a(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    orbQuantity: e.orb_quantity,
                    ...t
                };
            case i.w.FRACTIONAL_PREMIUM:
                return {
                    type: i.w.FRACTIONAL_PREMIUM,
                    quantity: e.quantity,
                    messages: {
                        redemptionInstructionsByPlatform: a(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    ...t
                };
            case i.w.IN_GAME:
                return {
                    type: i.w.IN_GAME,
                    messages: {
                        redemptionInstructionsByPlatform: a(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    ...t
                };
        }
    },
    o = (e) => ({
        assignmentMethod: e.assignment_method,
        rewards: e.rewards.map(s),
        rewardsExpireAt: e.rewards_expire_at,
        platforms: e.platforms
    });
