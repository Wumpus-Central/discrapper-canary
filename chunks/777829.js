n.d(t, { f: () => c });
var r = n(582128),
    i = n(174459),
    l = n(440938),
    s = n(298072),
    a = n(993408),
    u = n(623373),
    o = n(331884),
    d = n(652215);
function c(e) {
    let { product: t, analyticsLocations: n } = e,
        { cardId: c, sessionId: f, tilePosition: I } = (0, l.uM)() ?? {},
        v = (0, s.Q)(t),
        p = (0, o.o)(),
        m = (0, a.xM)(p);
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
                discount_source: (0, a.b_)(m),
            });
        },
        [t, v, f, c, n, I, m],
    );
}
