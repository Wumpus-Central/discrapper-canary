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
    tenantMetadata;
    static createFromServer(e) {
        var t, n, i, s, l;
        let c, u, _, E, A;
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
            tenantMetadata:
                null != e.tenant_metadata
                    ? {
                          collectibles:
                              null != (n = e.tenant_metadata).collectibles
                                  ? (i = n.collectibles).type === r.hE.COLLECT_AND_CLAIM && i.subtype === r.h5.TAKEOVER
                                      ? ((s = i),
                                        {
                                            type: r.hE.COLLECT_AND_CLAIM,
                                            subtype: r.h5.TAKEOVER,
                                            collectionId: s.collection_id,
                                            shopHome: {
                                                title: s.shop_home.title,
                                                description: s.shop_home.description,
                                                rewardStates: o(s.shop_home.reward_states),
                                                style:
                                                    null != s.shop_home.style
                                                        ? { contentTheme: s.shop_home.style.content_theme }
                                                        : void 0,
                                            },
                                            indexPage: {
                                                description: s.index_page.description,
                                                rewardStates: o(s.index_page.reward_states),
                                                style:
                                                    null != s.index_page.style
                                                        ? { contentTheme: s.index_page.style.content_theme }
                                                        : void 0,
                                            },
                                            shared: (function (e) {
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
                                                                          null !=
                                                                          (t = n.indicator_reward_states).in_progress
                                                                              ? {
                                                                                    progressSteps:
                                                                                        t.in_progress.progress_steps.map(
                                                                                            d,
                                                                                        ),
                                                                                }
                                                                              : void 0,
                                                                      earned: null != t.earned ? d(t.earned) : void 0,
                                                                      consumed:
                                                                          null != t.consumed ? d(t.consumed) : void 0,
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
                                                                ? {
                                                                      contentTheme: n.style.content_theme,
                                                                      progressColor: n.style.progress_color,
                                                                  }
                                                                : void 0,
                                                    },
                                                    navigation:
                                                        i?.tab != null
                                                            ? { tab: { title: i.tab.title, icon: i.tab.icon } }
                                                            : void 0,
                                                    helpCenter: null != r ? { text: r.text, id: r.id } : void 0,
                                                };
                                            })(s.shared),
                                        })
                                      : i.type === r.hE.TARGETED_OFFER
                                        ? ((l = i.reward),
                                          (c = l?.storefront?.nagbar),
                                          (u = l?.checkout?.offer_notice),
                                          (E = null == (_ = l?.collected?.override_title) || "" === _ ? void 0 : _),
                                          (A = l?.flavor),
                                          null == c && null == u && null == E && null == A
                                              ? { type: r.hE.TARGETED_OFFER }
                                              : {
                                                    type: r.hE.TARGETED_OFFER,
                                                    reward: {
                                                        storefront:
                                                            null != c
                                                                ? {
                                                                      nagbar: {
                                                                          headerText: c.header_text ?? void 0,
                                                                          cta:
                                                                              null != c.cta
                                                                                  ? { text: c.cta.text ?? void 0 }
                                                                                  : void 0,
                                                                          helpCenterId: c.help_center_id ?? void 0,
                                                                          icon: c.icon ?? void 0,
                                                                      },
                                                                  }
                                                                : void 0,
                                                        checkout:
                                                            null != u
                                                                ? {
                                                                      offerNotice: {
                                                                          icon: u.icon ?? void 0,
                                                                          text: u.text ?? void 0,
                                                                      },
                                                                  }
                                                                : void 0,
                                                        collected: null != E ? { overrideTitle: E } : void 0,
                                                        flavor: A ?? void 0,
                                                    },
                                                })
                                        : void 0
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
    return { title: e.title, description: e.description };
}
