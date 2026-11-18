var r = n(582128),
    i = n(129230),
    l = n(857512),
    s = n(298072),
    a = n(993408),
    u = n(623373),
    o = n(331884),
    c = n(652215);
n.d(
    t,
    {},
    {
        f: function (e) {
            let { product: t, analyticsLocations: n } = e,
                { cardId: d, sessionId: I, tilePosition: f } = (0, l.uM)() ?? {},
                p = (0, s.Q)(t),
                g = (0, o.o)(),
                m = (0, a.xM)(g);
            return r.useCallback(
                (e, r) => {
                    let l = (0, u.B1)(t) ? (t.variants[r ?? p]?.skuId ?? t.skuId) : t.skuId;
                    i.default.track(c.HAw.SHOP_CARD_CLICKED, {
                        sku_id: l,
                        cta: e,
                        shop_session_id: I,
                        card_id: d,
                        product_sku_ids: (0, u.v8)(t),
                        location_stack: n,
                        position_in_section: f,
                        discount_source: (0, a.b_)(m),
                    });
                },
                [t, p, I, d, n, f, m],
            );
        },
    },
);
