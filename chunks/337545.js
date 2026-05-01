"use strict";
n.d(t, { A: () => a });
var i = n(788868),
    r = n(568065),
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
        case r.o9.LEVEL: {
            let n = t.sku.powerup_metadata?.guild_features;
            if (null == n) return;
            let a = s.DEFAULT_EMOJI_SLOTS + n.additional_emoji_slots,
                l = i.OW + n.additional_sound_slots,
                _ = i.GI + n.additional_sticker_slots,
                d = t.sku.dependent_sku_id;
            for (; null != d; ) {
                let t = e.find((e) => d === e.sku.id);
                (a += t?.sku?.powerup_metadata?.guild_features?.additional_emoji_slots ?? 0),
                    (l += t?.sku?.powerup_metadata?.guild_features?.additional_sound_slots ?? 0),
                    (_ += t?.sku?.powerup_metadata?.guild_features?.additional_sticker_slots ?? 0),
                    (d = t?.sku.dependent_sku_id);
            }
            return {
                type: r.o9.LEVEL,
                features: { ...n, total_emoji_slots: a, total_sound_slots: l, total_sticker_slots: _ },
                ...o,
            };
        }
        case r.o9.PERK:
            return { type: r.o9.PERK, description: t.description ?? "", ...o };
    }
}
