var r = n(582128),
    i = n(129230),
    l = n(857512),
    s = n(298072),
    a = n(993408),
    u = n(623373),
    o = n(331884),
    d = n(652215);
n.d(
    t,
    {},
    {
        f: function (e) {
            let { product: t, analyticsLocations: n } = e,
                { cardId: c, sessionId: f, tilePosition: I } = (0, l.uM)() ?? {},
                v = (0, s.Q)(t),
                m = (0, o.o)(),
                p = (0, a.xM)(m);
            return r.useCallback(
                (e, r) => {
                    let l = (0, u.B1)(t) ? (t.variants[r ?? v]?.skuId ?? t.skuId) : t.skuId;
                    i.default.track(d.HAw.SHOP_CARD_CLICKED, {
                        sku_id: l,
                        cta: e,
                        shop_session_id: f,
                        card_id: c,
                        product_sku_ids: (0, u.v8)(t),
                        location_stack: n,
                        position_in_section: I,
                        discount_source: (0, a.b_)(p),
                    });
                },
                [t, v, f, c, n, I, p],
            );
        },
    },
);
