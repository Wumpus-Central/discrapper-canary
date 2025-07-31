(n.d(t, { Z: () => u }), n(953529));
var r = n(474936),
    i = n(535396),
    a = n(185923);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            }));
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t) {
    var n, o, l, u, d, _, f, p, h, m, g, E, b, y, O, v, I, T, S;
    let A = null == (n = t.powerup_metadata) ? void 0 : n.category_type;
    if (null == A) return;
    let N = null == (o = t.sku) ? void 0 : o.powerup_metadata;
    if (null == N) return;
    let C = {
        title: t.summary,
        skuId: t.sku.id,
        cost: N.boost_price,
        dependencies: null != t.sku.dependent_sku_id ? [t.sku.dependent_sku_id] : [],
        animatedImageUrl: null == (l = t.powerup_metadata) ? void 0 : l.animated_image_url,
        staticImageUrl: null == (u = t.powerup_metadata) ? void 0 : u.static_image_url,
        storeRemovalDate: null == (d = t.powerup_metadata) ? void 0 : d.store_removal_date
    };
    switch (A) {
        case i.Us.LEVEL: {
            let n = null == (_ = t.sku.powerup_metadata) ? void 0 : _.guild_features;
            if (null == n) return;
            let o = a.xD + n.additional_emoji_slots,
                l = r.XB + n.additional_sound_slots,
                u = r.QF + n.additional_sticker_slots,
                d = t.sku.dependent_sku_id;
            for (; null != d; ) {
                let t = e.find((e) => d === e.sku.id);
                ((o += null != (v = null == t || null == (h = t.sku) || null == (p = h.powerup_metadata) || null == (f = p.guild_features) ? void 0 : f.additional_emoji_slots) ? v : 0), (l += null != (I = null == t || null == (E = t.sku) || null == (g = E.powerup_metadata) || null == (m = g.guild_features) ? void 0 : m.additional_sound_slots) ? I : 0), (u += null != (T = null == t || null == (O = t.sku) || null == (y = O.powerup_metadata) || null == (b = y.guild_features) ? void 0 : b.additional_sticker_slots) ? T : 0), (d = null == t ? void 0 : t.sku.dependent_sku_id));
            }
            return s(
                {
                    type: i.Us.LEVEL,
                    features: c(s({}, n), {
                        total_emoji_slots: o,
                        total_sound_slots: l,
                        total_sticker_slots: u
                    })
                },
                C
            );
        }
        case i.Us.PERK:
            return s(
                {
                    type: i.Us.PERK,
                    description: null != (S = t.description) ? S : ''
                },
                C
            );
    }
}
