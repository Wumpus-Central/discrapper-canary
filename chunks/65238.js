var i = n(248295),
    r = n(651365),
    a = n(619953),
    s = n(614050),
    l = n(805974),
    o = n(665414),
    d = n(315069),
    c = n(604913);
class u extends d.A {
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
        var t, n, d, f;
        let h, I;
        return new u({
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
                                            orbsBackQuantity: t.action.orbs_back?.tiers[0]?.orbs_quantity ?? null,
                                        }
                                      : null,
                          }
                    : null,
            skuIds: e.sku_ids ?? null,
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
                              null != (d = e.tenant_metadata).collectibles
                                  ? ((h = (function (e) {
                                        var t, n, i;
                                        switch (e.type) {
                                            case c.hE.COLLECT_AND_CLAIM:
                                                switch (e.subtype) {
                                                    case c.h5.TAKEOVER:
                                                        return (
                                                            (t = e),
                                                            {
                                                                type: c.hE.COLLECT_AND_CLAIM,
                                                                subtype: c.h5.TAKEOVER,
                                                                collectionId: t.collection_id,
                                                                shopHome: {
                                                                    title: t.shop_home.title,
                                                                    description: t.shop_home.description,
                                                                    rewardStates: E(t.shop_home.reward_states),
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
                                                                    rewardStates: E(t.index_page.reward_states),
                                                                    style:
                                                                        null != t.index_page.style
                                                                            ? {
                                                                                  contentTheme:
                                                                                      t.index_page.style.content_theme,
                                                                              }
                                                                            : void 0,
                                                                },
                                                                shared: A(t.shared),
                                                            }
                                                        );
                                                    case c.h5.BASIC:
                                                        return (
                                                            (n = e),
                                                            {
                                                                type: c.hE.COLLECT_AND_CLAIM,
                                                                subtype: c.h5.BASIC,
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
                                                                shared: A(n.shared),
                                                            }
                                                        );
                                                }
                                                break;
                                            case c.hE.TARGETED_OFFER:
                                                let r, s, l, d, u;
                                                return (
                                                    (i = e.reward),
                                                    (r = i?.storefront?.nagbar),
                                                    (s = i?.checkout?.offer_notice),
                                                    (d =
                                                        null == (l = i?.collected?.override_title) || "" === l
                                                            ? void 0
                                                            : l),
                                                    (u = i?.flavor),
                                                    null == r && null == s && null == d && null == u
                                                        ? { type: c.hE.TARGETED_OFFER }
                                                        : {
                                                              type: c.hE.TARGETED_OFFER,
                                                              reward: {
                                                                  storefront:
                                                                      null != r
                                                                          ? {
                                                                                nagbar: {
                                                                                    headerText: r.header_text ?? void 0,
                                                                                    cta:
                                                                                        null != r.cta
                                                                                            ? {
                                                                                                  text:
                                                                                                      r.cta.text ??
                                                                                                      void 0,
                                                                                              }
                                                                                            : void 0,
                                                                                    helpCenterId:
                                                                                        r.help_center_id ?? void 0,
                                                                                    icon: r.icon ?? void 0,
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
                                                                  collected: null != d ? { overrideTitle: d } : void 0,
                                                                  flavor: u ?? void 0,
                                                              },
                                                          }
                                                );
                                            case c.hE.COLLECTION_SALE:
                                                return (function (e) {
                                                    let { navigation: t } = e;
                                                    return {
                                                        type: c.hE.COLLECTION_SALE,
                                                        collectionId: e.collection_id,
                                                        countdownStyle: e.countdown_style,
                                                        showCountdownCta: e.show_countdown_cta ?? !0,
                                                        countdownPosition: e.countdown_position ?? a.l.RIGHT,
                                                        showUpsellBlocks: e.show_upsell_blocks ?? !1,
                                                        navigation:
                                                            t?.tab != null
                                                                ? { tab: { title: t.tab.title, icon: t.tab.icon } }
                                                                : void 0,
                                                    };
                                                })(e);
                                            case c.hE.COLLECTION_SEQUENCED_OFFER:
                                                return (function (e) {
                                                    let { navigation: t } = e;
                                                    return {
                                                        type: c.hE.COLLECTION_SEQUENCED_OFFER,
                                                        collectionId: e.collection_id,
                                                        position: e.position,
                                                        countdownStyle: e.countdown_style ?? o.i.DARK,
                                                        showCountdownCta: e.show_countdown_cta ?? !0,
                                                        countdownPosition: e.countdown_position ?? a.l.RIGHT,
                                                        navigation:
                                                            t?.tab != null
                                                                ? { tab: { title: t.tab.title, icon: t.tab.icon } }
                                                                : void 0,
                                                    };
                                                })(e);
                                        }
                                    })((f = d.collectibles))),
                                    (I = (function (e) {
                                        if (null == e) return;
                                        let t = {};
                                        for (let n of Object.values(r.D)) {
                                            let r = e[n],
                                                a = r?.style ?? i.t.GREEN,
                                                o = r?.icon ?? l._.TAG;
                                            r?.label != null &&
                                                "" !== r.label &&
                                                _(i.t, a) &&
                                                _(l._, o) &&
                                                (t[n] = {
                                                    label: r.label,
                                                    style: a,
                                                    icon: o,
                                                    countdownUnit: _(s.c, r.countdown_unit)
                                                        ? r.countdown_unit
                                                        : s.c.NONE,
                                                });
                                        }
                                        return Object.keys(t).length > 0 ? t : void 0;
                                    })(f.blocks)),
                                    null != h && null != I ? { ...h, blocks: I } : h)
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
            (this.skuIds = Array.isArray(e.skuIds) ? e.skuIds : null),
            (this.appliesToAllSkus = e.appliesToAllSkus),
            (this.includeBundles = e.includeBundles),
            (this.startsAt = e.startsAt),
            (this.endsAt = e.endsAt),
            (this.redemptionEndsAt = e.redemptionEndsAt),
            (this.progress = e.progress),
            (this.tenantMetadata = e.tenantMetadata));
    }
}
function _(e, t) {
    return Object.values(e).includes(t);
}
function E(e) {
    return {
        inProgress: { progressSteps: e.in_progress.progress_steps.map((e) => ({ heroUrl: e.hero_url })) },
        earned: { heroUrl: e.earned.hero_url },
        consumed: { heroUrl: e.consumed.hero_url },
    };
}
function A(e) {
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
                                  ? { progressSteps: t.in_progress.progress_steps.map(f) }
                                  : void 0,
                          earned: null != t.earned ? f(t.earned) : void 0,
                          consumed: null != t.consumed ? f(t.consumed) : void 0,
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
function f(e) {
    return { title: e.title, description: e.description };
}
n.d(
    t,
    {},
    {
        Ay: u,
        NN: function (e) {
            let t = e?.tenantMetadata?.collectibles;
            return t?.type === c.hE.COLLECTION_SALE ? t : void 0;
        },
        TX: function (e, t) {
            return e.appliesToAllSkus || (null != t && e.skuIds?.includes(t) === !0);
        },
        XF: function (e) {
            let t = e?.tenantMetadata?.collectibles;
            return t?.type === c.hE.COLLECT_AND_CLAIM ? t : void 0;
        },
        d3: function (e) {
            let t = e?.tenantMetadata?.collectibles;
            return t?.type === c.hE.COLLECTION_SEQUENCED_OFFER ? t : void 0;
        },
        ml: function (e) {
            let t = e?.tenantMetadata?.collectibles;
            return t?.type === c.hE.TARGETED_OFFER ? t : void 0;
        },
    },
);
