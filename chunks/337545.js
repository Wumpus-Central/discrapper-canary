"use strict";
n.d(t, { A: () => a });
var r = n(788868),
    i = n(568065),
    s = n(307731);
function a(e, t) {
    let n = t.powerup_metadata?.category_type;
    if (null == n) return;
    let a = t.sku?.powerup_metadata;
    if (null == a) return;
    let o = {
        title: t.summary,
        skuId: t.sku.id,
        cost: a.boost_price,
        dependencies: null != t.sku.dependent_sku_id ? [t.sku.dependent_sku_id] : [],
        animatedImageUrl: t.powerup_metadata?.animated_image_url,
        staticImageUrl: t.powerup_metadata?.static_image_url,
        storeRemovalDate: t.powerup_metadata?.store_removal_date,
        deactivationCooldownPeriodDays: t.powerup_metadata?.deactivation_cooldown_period_days,
    };
    switch (n) {
        case i.o9.LEVEL: {
            let n = t.sku.powerup_metadata?.guild_features;
            if (null == n) return;
            let a = s.DEFAULT_EMOJI_SLOTS + n.additional_emoji_slots,
                l = r.OW + n.additional_sound_slots,
                u = r.GI + n.additional_sticker_slots,
                c = t.sku.dependent_sku_id;
            for (; null != c; ) {
                let t = e.find((e) => c === e.sku.id);
                (a += t?.sku?.powerup_metadata?.guild_features?.additional_emoji_slots ?? 0),
                    (l += t?.sku?.powerup_metadata?.guild_features?.additional_sound_slots ?? 0),
                    (u += t?.sku?.powerup_metadata?.guild_features?.additional_sticker_slots ?? 0),
                    (c = t?.sku.dependent_sku_id);
            }
            return {
                type: i.o9.LEVEL,
                features: { ...n, total_emoji_slots: a, total_sound_slots: l, total_sticker_slots: u },
                ...o,
            };
        }
        case i.o9.PERK:
            return { type: i.o9.PERK, description: t.description ?? "", ...o };
    }
}
