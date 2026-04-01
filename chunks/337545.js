"use strict";
n.d(t, { A: () => s });
var r = n(788868),
    i = n(568065);
function s(e, t) {
    let n = t.powerup_metadata?.category_type;
    if (null == n) return;
    let s = t.sku?.powerup_metadata;
    if (null == s) return;
    let a = {
        title: t.summary,
        skuId: t.sku.id,
        cost: s.boost_price,
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
            let s = 50 + n.additional_emoji_slots,
                o = r.OW + n.additional_sound_slots,
                l = r.GI + n.additional_sticker_slots,
                u = t.sku.dependent_sku_id;
            for (; null != u; ) {
                let t = e.find((e) => u === e.sku.id);
                (s += t?.sku?.powerup_metadata?.guild_features?.additional_emoji_slots ?? 0),
                    (o += t?.sku?.powerup_metadata?.guild_features?.additional_sound_slots ?? 0),
                    (l += t?.sku?.powerup_metadata?.guild_features?.additional_sticker_slots ?? 0),
                    (u = t?.sku.dependent_sku_id);
            }
            return {
                type: i.o9.LEVEL,
                features: { ...n, total_emoji_slots: s, total_sound_slots: o, total_sticker_slots: l },
                ...a,
            };
        }
        case i.o9.PERK:
            return { type: i.o9.PERK, description: t.description ?? "", ...a };
    }
}
n(307731);
