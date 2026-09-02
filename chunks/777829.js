n.d(t, { f: () => d });
var r = n(582128),
    i = n(174459),
    s = n(440938),
    l = n(298072),
    a = n(993408),
    o = n(623373),
    u = n(331884),
    c = n(652215);
function d(e) {
    let { product: t, analyticsLocations: n } = e,
        { cardId: d, sessionId: p, tilePosition: g } = (0, s.uM)() ?? {},
        I = (0, l.Q)(t),
        _ = (0, u.o)(),
        f = (0, a.xM)(_);
    return r.useCallback(
        (e, r) => {
            let s = (0, o.B1)(t) ? (t.variants[r ?? I]?.skuId ?? t.skuId) : t.skuId;
            i.default.track(c.HAw.SHOP_CARD_CLICKED, {
                sku_id: s,
                cta: e,
                shop_session_id: p,
                card_id: d,
                product_sku_ids: (0, o.v8)(t),
                location_stack: n,
                position_in_section: g,
                discount_source: (0, a.b_)(f),
            });
        },
        [t, I, p, d, n, g, f],
    );
}
