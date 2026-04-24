var r = s(315069);
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
    static createFromServer(t) {
        var e;
        return new i({
            id: t.id,
            applicationId: t.application_id,
            displayName: t.display_name ?? null,
            rewardType: t.reward_type,
            rewardConfig:
                null != t.reward_config
                    ? null == (e = t.reward_config)
                        ? null
                        : {
                              discount:
                                  null != e.discount
                                      ? { id: e.discount.id, type: e.discount.type, amount: e.discount.amount }
                                      : null,
                          }
                    : null,
            skuIds: (function (t) {
                if (null == t) return null;
                let e = {};
                for (let [s, r] of Object.entries(t)) e[s] = { priceTiers: r.price_tiers };
                return e;
            })(t.sku_ids),
            appliesToAllSkus: t.applies_to_all_skus,
            startsAt: null != t.starts_at ? new Date(t.starts_at) : null,
            endsAt: null != t.ends_at ? new Date(t.ends_at) : null,
        });
    }
    constructor(t) {
        super(),
            (this.id = t.id),
            (this.applicationId = t.applicationId),
            (this.displayName = t.displayName),
            (this.rewardType = t.rewardType),
            (this.rewardConfig = t.rewardConfig),
            (this.skuIds = t.skuIds),
            (this.appliesToAllSkus = t.appliesToAllSkus),
            (this.startsAt = t.startsAt),
            (this.endsAt = t.endsAt);
    }
}
