n.d(t, { A: () => u }), n(228524);
var r = n(788868),
    i = n(568065),
    a = n(307731);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
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
    var n, s, l, u, d, f, p, _, h, m, g, E, b, y, O, A, v, S, I;
    let T = null == (n = t.powerup_metadata) ? void 0 : n.category_type;
    if (null == T) return;
    let C = null == (s = t.sku) ? void 0 : s.powerup_metadata;
    if (null == C) return;
    let N = {
        title: t.summary,
        skuId: t.sku.id,
        cost: C.boost_price,
        dependencies: null != t.sku.dependent_sku_id ? [t.sku.dependent_sku_id] : [],
        animatedImageUrl: null == (l = t.powerup_metadata) ? void 0 : l.animated_image_url,
        staticImageUrl: null == (u = t.powerup_metadata) ? void 0 : u.static_image_url,
        storeRemovalDate: null == (d = t.powerup_metadata) ? void 0 : d.store_removal_date,
    };
    switch (T) {
        case i.o9.LEVEL: {
            let n = null == (f = t.sku.powerup_metadata) ? void 0 : f.guild_features;
            if (null == n) return;
            let s = a.Xn + n.additional_emoji_slots,
                l = r.OW + n.additional_sound_slots,
                u = r.GI + n.additional_sticker_slots,
                d = t.sku.dependent_sku_id;
            for (; null != d; ) {
                let t = e.find((e) => d === e.sku.id);
                (s +=
                    null !=
                    (p =
                        null == t ||
                        null == (E = t.sku) ||
                        null == (g = E.powerup_metadata) ||
                        null == (m = g.guild_features)
                            ? void 0
                            : m.additional_emoji_slots)
                        ? p
                        : 0),
                    (l +=
                        null !=
                        (_ =
                            null == t ||
                            null == (O = t.sku) ||
                            null == (y = O.powerup_metadata) ||
                            null == (b = y.guild_features)
                                ? void 0
                                : b.additional_sound_slots)
                            ? _
                            : 0),
                    (u +=
                        null !=
                        (h =
                            null == t ||
                            null == (S = t.sku) ||
                            null == (v = S.powerup_metadata) ||
                            null == (A = v.guild_features)
                                ? void 0
                                : A.additional_sticker_slots)
                            ? h
                            : 0),
                    (d = null == t ? void 0 : t.sku.dependent_sku_id);
            }
            return o(
                {
                    type: i.o9.LEVEL,
                    features: c(o({}, n), {
                        total_emoji_slots: s,
                        total_sound_slots: l,
                        total_sticker_slots: u,
                    }),
                },
                N,
            );
        }
        case i.o9.PERK:
            return o(
                {
                    type: i.o9.PERK,
                    description: null != (I = t.description) ? I : "",
                },
                N,
            );
    }
}
