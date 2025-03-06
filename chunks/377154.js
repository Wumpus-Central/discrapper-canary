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
    var n, a, l, u, d, f, _, p, h, g, m, E, v, b, y, O;
    let S = null === (n = t.powerup_metadata) || void 0 === n ? void 0 : n.category_type;
    if (null == S) return;
    let I = null === (a = t.sku) || void 0 === a ? void 0 : a.powerup_metadata;
    if (null == I) return;
    let T = {
        title: t.summary,
        skuId: t.sku.id,
        active: !1,
        cost: I.boost_price,
        dependencies: null != t.sku.dependent_sku_id ? [t.sku.dependent_sku_id] : []
    };
    switch (S) {
        case i.Us.LEVEL: {
            let n = null === (l = t.sku.powerup_metadata) || void 0 === l ? void 0 : l.guild_features;
            if (null == n) return;
            let a = o.xD + n.additional_emoji_slots,
                O = r.XB + n.additional_sound_slots,
                S = r.QF + n.additional_sticker_slots,
                I = t.sku.dependent_sku_id;
            for (; null != I; ) {
                let t = e.find((e) => I === e.sku.id);
                (a += null !== (v = null == t ? void 0 : null === (f = t.sku) || void 0 === f ? void 0 : null === (d = f.powerup_metadata) || void 0 === d ? void 0 : null === (u = d.guild_features) || void 0 === u ? void 0 : u.additional_emoji_slots) && void 0 !== v ? v : 0), (O += null !== (b = null == t ? void 0 : null === (h = t.sku) || void 0 === h ? void 0 : null === (p = h.powerup_metadata) || void 0 === p ? void 0 : null === (_ = p.guild_features) || void 0 === _ ? void 0 : _.additional_sound_slots) && void 0 !== b ? b : 0), (S += null !== (y = null == t ? void 0 : null === (E = t.sku) || void 0 === E ? void 0 : null === (m = E.powerup_metadata) || void 0 === m ? void 0 : null === (g = m.guild_features) || void 0 === g ? void 0 : g.additional_sticker_slots) && void 0 !== y ? y : 0), (I = null == t ? void 0 : t.sku.dependent_sku_id);
            }
            return s(
                {
                    type: i.Us.LEVEL,
                    features: c(s({}, n), {
                        total_emoji_slots: a,
                        total_sound_slots: O,
                        total_sticker_slots: S
                    })
                },
                T
            );
        }
        case i.Us.PERK:
            return s(
                {
                    type: i.Us.PERK,
                    description: null !== (O = t.description) && void 0 !== O ? O : '',
                    bundle: !1
                },
                T
            );
    }
}
