var i = n(619953),
    r = n(665414),
    a = n(315069),
    s = n(604913);
class l extends a.A {
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
        var t, n, a;
        return new l({
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
                              null != (a = e.tenant_metadata).collectibles
                                  ? (function (e) {
                                        var t, n, a, l;
                                        switch (e.type) {
                                            case s.hE.COLLECT_AND_CLAIM:
                                                switch (e.subtype) {
                                                    case s.h5.TAKEOVER:
                                                        return (
                                                            (t = e),
                                                            {
                                                                type: s.hE.COLLECT_AND_CLAIM,
                                                                subtype: s.h5.TAKEOVER,
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
                                                    case s.h5.BASIC:
                                                        return (
                                                            (n = e),
                                                            {
                                                                type: s.hE.COLLECT_AND_CLAIM,
                                                                subtype: s.h5.BASIC,
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
                                            case s.hE.TARGETED_OFFER:
                                                let c, u, _, E, A;
                                                return (
                                                    (a = e.reward),
                                                    (c = a?.storefront?.nagbar),
                                                    (u = a?.checkout?.offer_notice),
                                                    (E =
                                                        null == (_ = a?.collected?.override_title) || "" === _
                                                            ? void 0
                                                            : _),
                                                    (A = a?.flavor),
                                                    null == c && null == u && null == E && null == A
                                                        ? { type: s.hE.TARGETED_OFFER }
                                                        : {
                                                              type: s.hE.TARGETED_OFFER,
                                                              reward: {
                                                                  storefront:
                                                                      null != c
                                                                          ? {
                                                                                nagbar: {
                                                                                    headerText: c.header_text ?? void 0,
                                                                                    cta:
                                                                                        null != c.cta
                                                                                            ? {
                                                                                                  text:
                                                                                                      c.cta.text ??
                                                                                                      void 0,
                                                                                              }
                                                                                            : void 0,
                                                                                    helpCenterId:
                                                                                        c.help_center_id ?? void 0,
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
                                                          }
                                                );
                                            case s.hE.COLLECTION_SALE:
                                                return (function (e) {
                                                    let { navigation: t } = e;
                                                    return {
                                                        type: s.hE.COLLECTION_SALE,
                                                        collectionId: e.collection_id,
                                                        countdownStyle: e.countdown_style,
                                                        showCountdownCta: e.show_countdown_cta ?? !0,
                                                        countdownPosition: e.countdown_position ?? i.l.RIGHT,
                                                        showUpsellBlocks: e.show_upsell_blocks ?? !1,
                                                        navigation:
                                                            t?.tab != null
                                                                ? { tab: { title: t.tab.title, icon: t.tab.icon } }
                                                                : void 0,
                                                    };
                                                })(e);
                                            case s.hE.COLLECTION_SEQUENCED_OFFER:
                                                return (
                                                    (l = e),
                                                    {
                                                        type: s.hE.COLLECTION_SEQUENCED_OFFER,
                                                        collectionId: l.collection_id,
                                                        position: l.position,
                                                        countdownStyle: l.countdown_style ?? r.i.DARK,
                                                        showCountdownCta: l.show_countdown_cta ?? !0,
                                                        countdownPosition: l.countdown_position ?? i.l.RIGHT,
                                                    }
                                                );
                                        }
                                    })(a.collectibles)
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
n.d(
    t,
    {},
    {
        Ay: l,
        NN: function (e) {
            let t = e?.tenantMetadata?.collectibles;
            return t?.type === s.hE.COLLECTION_SALE ? t : void 0;
        },
        XF: function (e) {
            let t = e?.tenantMetadata?.collectibles;
            return t?.type === s.hE.COLLECT_AND_CLAIM ? t : void 0;
        },
        d3: function (e) {
            let t = e?.tenantMetadata?.collectibles;
            return t?.type === s.hE.COLLECTION_SEQUENCED_OFFER ? t : void 0;
        },
        ml: function (e) {
            let t = e?.tenantMetadata?.collectibles;
            return t?.type === s.hE.TARGETED_OFFER ? t : void 0;
        },
    },
);
