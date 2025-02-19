n.d(t, { v: () => c }), n(47120);
var r = n(887003),
    i = n(497505);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e) {
    let t = {};
    for (let n of Object.keys(e)) {
        let r = parseInt(n);
        i.xw.has(r) && (t[r] = e[n]);
    }
    return t;
}
let l = (e) => {
        let t = {
            skuId: e.sku_id,
            asset: e.asset,
            assetVideo: e.asset_video
        };
        switch (e.type) {
            case r.w.REWARD_CODE:
                return a(
                    {
                        type: r.w.REWARD_CODE,
                        messages: {
                            redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
                            name: e.messages.name,
                            nameWithArticle: e.messages.name_with_article
                        },
                        approximateCount: e.approximate_count,
                        redemptionLink: e.redemption_link
                    },
                    t
                );
            case r.w.COLLECTIBLE:
                return a(
                    {
                        type: r.w.COLLECTIBLE,
                        messages: {
                            redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
                            name: e.messages.name,
                            nameWithArticle: e.messages.name_with_article
                        },
                        expiresAt: e.expires_at,
                        expirationMode: e.expiration_mode,
                        expiresAtPremium: e.expires_at_premium
                    },
                    t
                );
            case r.w.VIRTUAL_CURRENCY:
                return a(
                    {
                        type: r.w.VIRTUAL_CURRENCY,
                        messages: {
                            redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
                            name: e.messages.name,
                            nameWithArticle: e.messages.name_with_article
                        },
                        orbQuantity: e.orb_quantity
                    },
                    t
                );
            case r.w.FRACTIONAL_PREMIUM:
                return a(
                    {
                        type: r.w.FRACTIONAL_PREMIUM,
                        quantity: e.quantity,
                        messages: {
                            redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
                            name: e.messages.name,
                            nameWithArticle: e.messages.name_with_article
                        }
                    },
                    t
                );
            case r.w.IN_GAME:
                return a(
                    {
                        type: r.w.IN_GAME,
                        messages: {
                            redemptionInstructionsByPlatform: s(e.messages.redemption_instructions_by_platform),
                            name: e.messages.name,
                            nameWithArticle: e.messages.name_with_article
                        }
                    },
                    t
                );
        }
    },
    c = (e) => ({
        assignmentMethod: e.assignment_method,
        rewards: e.rewards.map(l),
        rewardsExpireAt: e.rewards_expire_at,
        platforms: e.platforms
    });
