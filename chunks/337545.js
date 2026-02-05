"use strict";
n.d(t, { A: () => a });
var r = n(788868),
    i = n(568065);
function a(e, t) {
    let n = t.powerup_metadata?.category_type;
    if (null == n) return;
    let a = t.sku?.powerup_metadata;
    if (null == a) return;
    let s = {
        title: t.summary,
        skuId: t.sku.id,
        cost: a.boost_price,
        dependencies: null != t.sku.dependent_sku_id ? [t.sku.dependent_sku_id] : [],
        animatedImageUrl: t.powerup_metadata?.animated_image_url,
        staticImageUrl: t.powerup_metadata?.static_image_url,
        storeRemovalDate: t.powerup_metadata?.store_removal_date,
    };
    switch (n) {
        case i.o9.LEVEL: {
            let n = t.sku.powerup_metadata?.guild_features;
            if (null == n) return;
            let a = 50 + n.additional_emoji_slots,
                o = r.OW + n.additional_sound_slots,
                l = r.GI + n.additional_sticker_slots,
                u = t.sku.dependent_sku_id;
            for (; null != u; ) {
                let t = e.find((e) => u === e.sku.id);
                (a += t?.sku?.powerup_metadata?.guild_features?.additional_emoji_slots ?? 0),
                    (o += t?.sku?.powerup_metadata?.guild_features?.additional_sound_slots ?? 0),
                    (l += t?.sku?.powerup_metadata?.guild_features?.additional_sticker_slots ?? 0),
                    (u = t?.sku.dependent_sku_id);
            }
            return {
                type: i.o9.LEVEL,
                features: { ...n, total_emoji_slots: a, total_sound_slots: o, total_sticker_slots: l },
                ...s,
            };
        }
        case i.o9.PERK:
            return { type: i.o9.PERK, description: t.description ?? "", ...s };
    }
}
n(307731);
