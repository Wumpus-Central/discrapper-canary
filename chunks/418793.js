r.d(n, {
    v: function () {
        return u;
    }
});
var i = r(47120);
var a = r(887003),
    s = r(497505);
function o(e) {
    let n = {};
    for (let r of Object.keys(e)) {
        let i = parseInt(r);
        s.xw.has(i) && (n[i] = e[r]);
    }
    return n;
}
let l = (e) => {
        let n = {
            skuId: e.sku_id,
            asset: e.asset,
            assetVideo: e.asset_video
        };
        switch (e.type) {
            case a.w.REWARD_CODE:
                return {
                    type: a.w.REWARD_CODE,
                    messages: {
                        redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    approximateCount: e.approximate_count,
                    ...n
                };
            case a.w.COLLECTIBLE:
                return {
                    type: a.w.COLLECTIBLE,
                    messages: {
                        redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    expiresAt: e.expires_at,
                    expirationMode: e.expiration_mode,
                    expiresAtPremium: e.expires_at_premium,
                    ...n
                };
            case a.w.FRACTIONAL_PREMIUM:
                return {
                    type: a.w.FRACTIONAL_PREMIUM,
                    quantity: e.quantity,
                    messages: {
                        redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    ...n
                };
            case a.w.IN_GAME:
                return {
                    type: a.w.IN_GAME,
                    messages: {
                        redemptionInstructionsByPlatform: o(e.messages.redemption_instructions_by_platform),
                        name: e.messages.name,
                        nameWithArticle: e.messages.name_with_article
                    },
                    ...n
                };
        }
    },
    u = (e) => ({
        assignmentMethod: e.assignment_method,
        rewards: e.rewards.map(l),
        rewardsExpireAt: e.rewards_expire_at,
        platforms: e.platforms
    });
