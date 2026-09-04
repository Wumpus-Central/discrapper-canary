r.d(t, { f: () => d });
var n = r(582128),
    i = r(174459),
    s = r(440938),
    l = r(298072),
    a = r(993408),
    o = r(623373),
    u = r(331884),
    c = r(652215);
function d(e) {
    let { product: t, analyticsLocations: r } = e,
        { cardId: d, sessionId: p, tilePosition: g } = (0, s.uM)() ?? {},
        f = (0, l.Q)(t),
        I = (0, u.o)(),
        _ = (0, a.xM)(I);
    return n.useCallback(
        (e, n) => {
            let s = (0, o.B1)(t) ? (t.variants[n ?? f]?.skuId ?? t.skuId) : t.skuId;
            i.default.track(c.HAw.SHOP_CARD_CLICKED, {
                sku_id: s,
                cta: e,
                shop_session_id: p,
                card_id: d,
                product_sku_ids: (0, o.v8)(t),
                location_stack: r,
                position_in_section: g,
                discount_source: (0, a.b_)(_),
            });
        },
        [t, f, p, d, r, g, _],
    );
}
