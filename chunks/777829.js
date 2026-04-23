r.d(t, { f: () => c });
var i = r(64700),
    n = r(954571),
    l = r(440938),
    s = r(298072),
    a = r(623373),
    u = r(652215);
function c(e) {
    let { product: t, analyticsLocations: r } = e,
        { cardId: c, sessionId: o, tilePosition: d } = (0, l.uM)() ?? {},
        k = (0, s.Q)(t);
    return i.useCallback(
        (e, i) => {
            n.default.track(u.HAw.SHOP_CARD_CLICKED, {
                sku_id: (0, a.B1)(t) ? (t.variants[i ?? k]?.skuId ?? t.skuId) : t.skuId,
                cta: e,
                shop_session_id: o,
                card_id: c,
                product_sku_ids: (0, a.v8)(t),
                location_stack: r,
                position_in_section: d,
            });
        },
        [t, k, o, c, r, d],
    );
}
