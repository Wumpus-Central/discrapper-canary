n.d(t, { f: () => c });
var r = n(582128),
    i = n(174459),
    s = n(440938),
    a = n(298072),
    l = n(993408),
    u = n(623373),
    o = n(331884),
    d = n(652215);
function c(e) {
    let { product: t, analyticsLocations: n } = e,
        { cardId: c, sessionId: I, tilePosition: f } = (0, s.uM)() ?? {},
        v = (0, a.Q)(t),
        p = (0, o.o)(),
        g = (0, l.xM)(p);
    return r.useCallback(
        (e, r) => {
            let s = (0, u.B1)(t) ? (t.variants[r ?? v]?.skuId ?? t.skuId) : t.skuId;
            i.default.track(d.HAw.SHOP_CARD_CLICKED, {
                sku_id: s,
                cta: e,
                shop_session_id: I,
                card_id: c,
                product_sku_ids: (0, u.v8)(t),
                location_stack: n,
                position_in_section: f,
                discount_source: (0, l.b_)(g),
            });
        },
        [t, v, I, c, n, f, g],
    );
}
