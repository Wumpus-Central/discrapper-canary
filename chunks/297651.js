n.d(t, { E: () => p });
var r = n(192379),
    l = n(442837),
    a = n(626135),
    o = n(74538),
    i = n(381585),
    s = n(597688),
    c = n(884697),
    u = n(819490),
    d = n(82892),
    b = n(981631);
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'product',
        p = (0, i.sp)(),
        f = (0, l.e7)([s.Z], () => s.Z.getProduct(e)),
        g = (0, d.x)(),
        h = o.ZP.canUseCollectibles(g),
        m = r.useRef(null),
        _ = (0, u.B)('shop_product_card'),
        v = r.useCallback(() => {
            if (!_) return;
            let r = null != f ? (0, c.Vw)(f, h, !1) : null,
                l = null != f ? (0, c.eu)(f, h, !1) : void 0;
            a.default.track(b.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: null == p ? void 0 : p.sessionId,
                sku_id: e,
                display_price: null == r ? void 0 : r.amount,
                display_price_currency: null == r ? void 0 : r.currency.toString(),
                display_price_strikethrough: l,
                position: null == p ? void 0 : p.tilePosition,
                page_type: t,
                page_category: null == p ? void 0 : p.pageCategory,
                page_section: null == p ? void 0 : p.pageSection,
                type: n,
                category_position: null == p ? void 0 : p.categoryPosition
            });
        }, [null == p ? void 0 : p.sessionId, null == p ? void 0 : p.categoryPosition, null == p ? void 0 : p.pageCategory, null == p ? void 0 : p.pageSection, null == p ? void 0 : p.tilePosition, h, _, t, f, e, n]),
        C = r.useCallback(
            (e) => {
                e
                    ? null === m.current &&
                      (m.current = setTimeout(() => {
                          v(), (m.current = null);
                      }, 1000))
                    : null !== m.current && (clearTimeout(m.current), (m.current = null));
            },
            [v]
        );
    return (
        r.useEffect(
            () => () => {
                null !== m.current && (clearTimeout(m.current), (m.current = null));
            },
            []
        ),
        { handleCardVisibilityChange: C }
    );
}
