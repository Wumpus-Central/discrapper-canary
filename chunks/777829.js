var r = n(582128),
    i = n(129230),
    s = n(857512),
    a = n(298072),
    l = n(993408),
    u = n(623373),
    o = n(331884),
    c = n(652215);
n.d(
    t,
    {},
    {
        f: function (e) {
            let { product: t, analyticsLocations: n } = e,
                { cardId: d, sessionId: I, tilePosition: p } = (0, s.uM)() ?? {},
                f = (0, a.Q)(t),
                m = (0, o.o)(),
                v = (0, l.xM)(m);
            return r.useCallback(
                (e, r) => {
                    let s = (0, u.B1)(t) ? (t.variants[r ?? f]?.skuId ?? t.skuId) : t.skuId;
                    i.default.track(c.HAw.SHOP_CARD_CLICKED, {
                        sku_id: s,
                        cta: e,
                        shop_session_id: I,
                        card_id: d,
                        product_sku_ids: (0, u.v8)(t),
                        location_stack: n,
                        position_in_section: p,
                        discount_source: (0, l.b_)(v),
                    });
                },
                [t, f, I, d, n, p, v],
            );
        },
    },
);
