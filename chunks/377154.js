n.d(t, { Z: () => u }), n(266796);
var r = n(474936),
    i = n(535396),
    o = n(185923);
function a(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
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
    var n, a, l, u, d, f, _, p, h, m, g, E, b, y, v, O, I, S;
    let T = null == (n = t.powerup_metadata) ? void 0 : n.category_type;
    if (null == T) return;
    let N = null == (a = t.sku) ? void 0 : a.powerup_metadata;
    if (null == N) return;
    let A = {
        title: t.summary,
        skuId: t.sku.id,
        cost: N.boost_price,
        dependencies: null != t.sku.dependent_sku_id ? [t.sku.dependent_sku_id] : [],
        animatedImageUrl: null == (l = t.powerup_metadata) ? void 0 : l.animated_image_url,
        staticImageUrl: null == (u = t.powerup_metadata) ? void 0 : u.static_image_url
    };
    switch (T) {
        case i.Us.LEVEL: {
            let n = null == (d = t.sku.powerup_metadata) ? void 0 : d.guild_features;
            if (null == n) return;
            let a = o.xD + n.additional_emoji_slots,
                l = r.XB + n.additional_sound_slots,
                u = r.QF + n.additional_sticker_slots,
                S = t.sku.dependent_sku_id;
            for (; null != S; ) {
                let t = e.find((e) => S === e.sku.id);
                (a += null != (v = null == t || null == (p = t.sku) || null == (_ = p.powerup_metadata) || null == (f = _.guild_features) ? void 0 : f.additional_emoji_slots) ? v : 0), (l += null != (O = null == t || null == (g = t.sku) || null == (m = g.powerup_metadata) || null == (h = m.guild_features) ? void 0 : h.additional_sound_slots) ? O : 0), (u += null != (I = null == t || null == (y = t.sku) || null == (b = y.powerup_metadata) || null == (E = b.guild_features) ? void 0 : E.additional_sticker_slots) ? I : 0), (S = null == t ? void 0 : t.sku.dependent_sku_id);
            }
            return s(
                {
                    type: i.Us.LEVEL,
                    features: c(s({}, n), {
                        total_emoji_slots: a,
                        total_sound_slots: l,
                        total_sticker_slots: u
                    })
                },
                A
            );
        }
        case i.Us.PERK:
            return s(
                {
                    type: i.Us.PERK,
                    description: null != (S = t.description) ? S : '',
                    bundle: !1
                },
                A
            );
    }
}
