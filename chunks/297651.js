r.d(t, { E: () => p });
var n = r(73800),
    i = r(442837),
    o = r(626135),
    l = r(74538),
    a = r(381585),
    s = r(597688),
    c = r(884697),
    u = r(82892),
    d = r(981631);
function p(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'product',
        p = (0, a.sp)(),
        b = (0, i.e7)([s.Z], () => s.Z.getProduct(e)),
        v = (0, u.x)(),
        f = l.ZP.canUseCollectibles(v),
        m = n.useRef(null),
        h = n.useCallback(() => {
            let n = null != b ? (0, c.Vw)(b, f, !1) : null,
                i = null != b ? (0, c.eu)(b, f, !1) : void 0;
            o.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: null == p ? void 0 : p.sessionId,
                sku_id: e,
                display_price: null == n ? void 0 : n.amount,
                display_price_currency: null == n ? void 0 : n.currency.toString(),
                display_price_strikethrough: i,
                position: null == p ? void 0 : p.tilePosition,
                page_type: t,
                page_category: null == p ? void 0 : p.pageCategory,
                page_section: null == p ? void 0 : p.pageSection,
                type: r,
                category_position: null == p ? void 0 : p.categoryPosition
            });
        }, [null == p ? void 0 : p.sessionId, null == p ? void 0 : p.categoryPosition, null == p ? void 0 : p.pageCategory, null == p ? void 0 : p.pageSection, null == p ? void 0 : p.tilePosition, f, t, b, e, r]),
        g = n.useCallback(
            (e) => {
                e
                    ? null === m.current &&
                      (m.current = setTimeout(() => {
                          h(), (m.current = null);
                      }, 1000))
                    : null !== m.current && (clearTimeout(m.current), (m.current = null));
            },
            [h]
        );
    return (
        n.useEffect(
            () => () => {
                null !== m.current && (clearTimeout(m.current), (m.current = null));
            },
            []
        ),
        { handleCardVisibilityChange: g }
    );
}
