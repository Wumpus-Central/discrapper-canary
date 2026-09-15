n.d(t, { f: () => c });
var r = n(582128),
    i = n(174459),
    s = n(440938),
    l = n(298072),
    a = n(993408),
    o = n(623373),
    u = n(331884),
    d = n(652215);
function c(e) {
    let { product: t, analyticsLocations: n } = e,
        { cardId: c, sessionId: I, tilePosition: f } = (0, s.uM)() ?? {},
        p = (0, l.Q)(t),
        g = (0, u.o)(),
        A = (0, a.xM)(g);
    return r.useCallback(
        (e, r) => {
            let s = (0, o.B1)(t) ? (t.variants[r ?? p]?.skuId ?? t.skuId) : t.skuId;
            i.default.track(d.HAw.SHOP_CARD_CLICKED, {
                sku_id: s,
                cta: e,
                shop_session_id: I,
                card_id: c,
                product_sku_ids: (0, o.v8)(t),
                location_stack: n,
                position_in_section: f,
                discount_source: (0, a.b_)(A),
            });
        },
        [t, p, I, c, n, f, A],
    );
}
