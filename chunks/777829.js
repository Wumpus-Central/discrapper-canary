r.d(t, { f: () => u });
var n = r(64700),
    l = r(954571),
    i = r(440938),
    s = r(298072),
    a = r(623373),
    o = r(652215);
function u(e) {
    let { product: t, analyticsLocations: r } = e,
        { cardId: u, sessionId: c, tilePosition: d } = (0, i.uM)() ?? {},
        p = (0, s.Q)(t);
    return n.useCallback(
        (e, n) => {
            l.default.track(o.HAw.SHOP_CARD_CLICKED, {
                sku_id: (0, a.B1)(t) ? (t.variants[n ?? p]?.skuId ?? t.skuId) : t.skuId,
                cta: e,
                shop_session_id: c,
                card_id: u,
                product_sku_ids: (0, a.v8)(t),
                location_stack: r,
                position_in_section: d,
            });
        },
        [t, p, c, u, r, d],
    );
}
