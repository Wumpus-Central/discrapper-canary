"use strict";
var r = n(315069);
class i extends r.A {
    id;
    applicationId;
    displayName;
    rewardType;
    rewardConfig;
    skuIds;
    appliesToAllSkus;
    startsAt;
    endsAt;
    static createFromServer(e) {
        return new i({
            id: e.id,
            applicationId: e.application_id,
            displayName: e.display_name ?? null,
            rewardType: e.reward_type,
            rewardConfig: null != e.reward_config ? s(e.reward_config) : null,
            skuIds: a(e.sku_ids),
            appliesToAllSkus: e.applies_to_all_skus,
            startsAt: null != e.starts_at ? new Date(e.starts_at) : null,
            endsAt: null != e.ends_at ? new Date(e.ends_at) : null,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.applicationId = e.applicationId),
            (this.displayName = e.displayName),
            (this.rewardType = e.rewardType),
            (this.rewardConfig = e.rewardConfig),
            (this.skuIds = e.skuIds),
            (this.appliesToAllSkus = e.appliesToAllSkus),
            (this.startsAt = e.startsAt),
            (this.endsAt = e.endsAt);
    }
}
function s(e) {
    return null == e
        ? null
        : {
              discount:
                  null != e.discount ? { id: e.discount.id, type: e.discount.type, amount: e.discount.amount } : null,
          };
}
function a(e) {
    if (null == e) return null;
    let t = {};
    for (let [n, r] of Object.entries(e)) t[n] = { priceTiers: r.price_tiers };
    return t;
}
