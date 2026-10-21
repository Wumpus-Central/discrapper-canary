n.d(t, { Ay: () => a, XF: () => l, ml: () => s });
var i = n(315069),
    r = n(604913);
class a extends i.A {
    id;
    applicationId;
    name;
    displayName;
    rewardType;
    rewardStatus;
    rewardConfig;
    skuIds;
    appliesToAllSkus;
    includeBundles;
    startsAt;
    endsAt;
    redemptionEndsAt;
    progress;
    tenantMetadata;
    static createFromServer(e) {
        var t, n, i;
        return new a({
            id: e.id,
            applicationId: e.application_id,
            name: e.name ?? null,
            displayName: e.display_name ?? null,
            rewardType: e.reward_type,
            rewardStatus: e.reward_status ?? null,
            rewardConfig:
                null != e.reward_config
                    ? null == (t = e.reward_config)
                        ? null
                        : {
                              discount:
                                  null != t.discount
                                      ? {
                                            id: t.discount.id,
                                            type: t.discount.type,
                                            amount: t.discount.amount,
                                            fiatEnabled: t.discount.fiat_enabled,
                                            orbsEnabled: t.discount.orbs_enabled,
                                        }
                                      : null,
                              action:
                                  null != t.action
                                      ? {
                                            actionType: t.action.action_type,
                                            deliveryMode: t.action.delivery_mode,
                                            skuIds: t.action.sku_ids ?? [],
                                        }
                                      : null,
                          }
                    : null,
            skuIds: (function (e) {
                if (null == e) return null;
                let t = {};
                for (let [n, i] of Object.entries(e)) t[n] = { priceTiers: i.price_tiers };
                return t;
            })(e.sku_ids),
            appliesToAllSkus: e.applies_to_all_skus,
            includeBundles: e.include_bundles,
            startsAt: null != e.starts_at ? new Date(e.starts_at) : null,
            endsAt: null != e.ends_at ? new Date(e.ends_at) : null,
            redemptionEndsAt: null != e.redemption_ends_at ? new Date(e.redemption_ends_at) : null,
            progress:
                null != e.progress ? { current: (n = e.progress).current, target: n.target, label: n.label } : null,
            tenantMetadata:
                null != e.tenant_metadata
                    ? {
                          collectibles:
                              null != (i = e.tenant_metadata).collectibles
                                  ? (function (e) {
                                        var t, n, i;
                                        switch (e.type) {
                                            case r.hE.COLLECT_AND_CLAIM:
                                                switch (e.subtype) {
                                                    case r.h5.TAKEOVER:
                                                        return (
                                                            (t = e),
                                                            {
                                                                type: r.hE.COLLECT_AND_CLAIM,
                                                                subtype: r.h5.TAKEOVER,
                                                                collectionId: t.collection_id,
                                                                shopHome: {
                                                                    title: t.shop_home.title,
                                                                    description: t.shop_home.description,
                                                                    rewardStates: o(t.shop_home.reward_states),
                                                                    style:
                                                                        null != t.shop_home.style
                                                                            ? {
                                                                                  contentTheme:
                                                                                      t.shop_home.style.content_theme,
                                                                              }
                                                                            : void 0,
                                                                },
                                                                indexPage: {
                                                                    description: t.index_page.description,
                                                                    rewardStates: o(t.index_page.reward_states),
                                                                    style:
                                                                        null != t.index_page.style
                                                                            ? {
                                                                                  contentTheme:
                                                                                      t.index_page.style.content_theme,
                                                                              }
                                                                            : void 0,
                                                                },
                                                                shared: d(t.shared),
                                                            }
                                                        );
                                                    case r.h5.BASIC:
                                                        return (
                                                            (n = e),
                                                            {
                                                                type: r.hE.COLLECT_AND_CLAIM,
                                                                subtype: r.h5.BASIC,
                                                                collectionId: n.collection_id,
                                                                shopHome: {
                                                                    title: n.shop_home.title,
                                                                    description: n.shop_home.description,
                                                                    style:
                                                                        null != n.shop_home.style
                                                                            ? {
                                                                                  contentTheme:
                                                                                      n.shop_home.style.content_theme,
                                                                              }
                                                                            : void 0,
                                                                },
                                                                indexPage: {
                                                                    description: n.index_page.description,
                                                                    style:
                                                                        null != n.index_page.style
                                                                            ? {
                                                                                  contentTheme:
                                                                                      n.index_page.style.content_theme,
                                                                              }
                                                                            : void 0,
                                                                },
                                                                shared: d(n.shared),
                                                            }
                                                        );
                                                }
                                                break;
                                            case r.hE.TARGETED_OFFER:
                                                let a, s, l, c, u;
                                                return (
                                                    (i = e.reward),
                                                    (a = i?.storefront?.nagbar),
                                                    (s = i?.checkout?.offer_notice),
                                                    (c =
                                                        null == (l = i?.collected?.override_title) || "" === l
                                                            ? void 0
                                                            : l),
                                                    (u = i?.flavor),
                                                    null == a && null == s && null == c && null == u
                                                        ? { type: r.hE.TARGETED_OFFER }
                                                        : {
                                                              type: r.hE.TARGETED_OFFER,
                                                              reward: {
                                                                  storefront:
                                                                      null != a
                                                                          ? {
                                                                                nagbar: {
                                                                                    headerText: a.header_text ?? void 0,
                                                                                    cta:
                                                                                        null != a.cta
                                                                                            ? {
                                                                                                  text:
                                                                                                      a.cta.text ??
                                                                                                      void 0,
                                                                                              }
                                                                                            : void 0,
                                                                                    helpCenterId:
                                                                                        a.help_center_id ?? void 0,
                                                                                    icon: a.icon ?? void 0,
                                                                                },
                                                                            }
                                                                          : void 0,
                                                                  checkout:
                                                                      null != s
                                                                          ? {
                                                                                offerNotice: {
                                                                                    icon: s.icon ?? void 0,
                                                                                    text: s.text ?? void 0,
                                                                                },
                                                                            }
                                                                          : void 0,
                                                                  collected: null != c ? { overrideTitle: c } : void 0,
                                                                  flavor: u ?? void 0,
                                                              },
                                                          }
                                                );
                                        }
                                    })(i.collectibles)
                                  : void 0,
                      }
                    : null,
        });
    }
    constructor(e) {
        (super(),
            (this.id = e.id),
            (this.applicationId = e.applicationId),
            (this.name = e.name),
            (this.displayName = e.displayName),
            (this.rewardType = e.rewardType),
            (this.rewardStatus = e.rewardStatus),
            (this.rewardConfig = e.rewardConfig),
            (this.skuIds = e.skuIds),
            (this.appliesToAllSkus = e.appliesToAllSkus),
            (this.includeBundles = e.includeBundles),
            (this.startsAt = e.startsAt),
            (this.endsAt = e.endsAt),
            (this.redemptionEndsAt = e.redemptionEndsAt),
            (this.progress = e.progress),
            (this.tenantMetadata = e.tenantMetadata));
    }
}
function s(e) {
    let t = e?.tenantMetadata?.collectibles;
    return t?.type === r.hE.TARGETED_OFFER ? t : void 0;
}
function l(e) {
    let t = e?.tenantMetadata?.collectibles;
    return t?.type === r.hE.COLLECT_AND_CLAIM ? t : void 0;
}
function o(e) {
    return {
        inProgress: { progressSteps: e.in_progress.progress_steps.map((e) => ({ heroUrl: e.hero_url })) },
        earned: { heroUrl: e.earned.hero_url },
        consumed: { heroUrl: e.consumed.hero_url },
    };
}
function d(e) {
    var t;
    let { progress_indicator: n, navigation: i, help_center: r } = e;
    return {
        progressIndicator: {
            title: n.title,
            description: n.description,
            rewardStates:
                null != n.indicator_reward_states
                    ? {
                          inProgress:
                              null != (t = n.indicator_reward_states).in_progress
                                  ? { progressSteps: t.in_progress.progress_steps.map(c) }
                                  : void 0,
                          earned: null != t.earned ? c(t.earned) : void 0,
                          consumed: null != t.consumed ? c(t.consumed) : void 0,
                      }
                    : void 0,
            assets: {
                backgroundUrl: n.assets.background_url,
                rewardPreview: {
                    hiddenUrl: n.assets.reward_preview.hidden_url,
                    revealedUrl: n.assets.reward_preview.revealed_url,
                },
            },
            style:
                null != n.style
                    ? { contentTheme: n.style.content_theme, progressColor: n.style.progress_color }
                    : void 0,
        },
        navigation: i?.tab != null ? { tab: { title: i.tab.title, icon: i.tab.icon } } : void 0,
        helpCenter: null != r ? { text: r.text, id: r.id } : void 0,
    };
}
function c(e) {
    return { title: e.title, description: e.description };
}
