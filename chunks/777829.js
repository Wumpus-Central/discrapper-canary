var r = n(582128),
    i = n(129230),
    s = n(857512),
    a = n(298072),
    l = n(993408),
    o = n(623373),
    u = n(331884),
    d = n(652215);
n.d(
    t,
    {},
    {
        f: function (e) {
            let { product: t, analyticsLocations: n } = e,
                { cardId: c, sessionId: I, tilePosition: v } = (0, s.uM)() ?? {},
                f = (0, a.Q)(t),
                p = (0, u.o)(),
                m = (0, l.xM)(p);
            return r.useCallback(
                (e, r) => {
                    let s = (0, o.B1)(t) ? (t.variants[r ?? f]?.skuId ?? t.skuId) : t.skuId;
                    i.default.track(d.HAw.SHOP_CARD_CLICKED, {
                        sku_id: s,
                        cta: e,
                        shop_session_id: I,
                        card_id: c,
                        product_sku_ids: (0, o.v8)(t),
                        location_stack: n,
                        position_in_section: v,
                        discount_source: (0, l.b_)(m),
                    });
                },
                [t, f, I, c, n, v, m],
            );
        },
    },
);
