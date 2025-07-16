r.d(t, { E: () => p });
var n = r(73800),
    l = r(442837),
    i = r(626135),
    o = r(74538),
    a = r(381585),
    s = r(597688),
    c = r(884697),
    u = r(82892),
    d = r(981631);
function p(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'product',
        p = (0, a.sp)(),
        f = (0, l.e7)([s.Z], () => s.Z.getProduct(e)),
        g = (0, u.x)(),
        h = o.ZP.canUseCollectibles(g),
        b = n.useRef(null),
        m = n.useCallback(() => {
            let n = null != f ? (0, c.Vw)(f, h, !1) : null,
                l = null != f ? (0, c.eu)(f, h, !1) : void 0;
            i.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: null == p ? void 0 : p.sessionId,
                sku_id: e,
                display_price: null == n ? void 0 : n.amount,
                display_price_currency: null == n ? void 0 : n.currency.toString(),
                display_price_strikethrough: l,
                position: null == p ? void 0 : p.tilePosition,
                page_type: t,
                page_category: null == p ? void 0 : p.pageCategory,
                page_section: null == p ? void 0 : p.pageSection,
                type: r,
                category_position: null == p ? void 0 : p.categoryPosition
            });
        }, [null == p ? void 0 : p.sessionId, null == p ? void 0 : p.categoryPosition, null == p ? void 0 : p.pageCategory, null == p ? void 0 : p.pageSection, null == p ? void 0 : p.tilePosition, h, t, f, e, r]),
        _ = n.useCallback(
            (e) => {
                e
                    ? null === b.current &&
                      (b.current = setTimeout(() => {
                          (m(), (b.current = null));
                      }, 1000))
                    : null !== b.current && (clearTimeout(b.current), (b.current = null));
            },
            [m]
        );
    return (
        n.useEffect(
            () => () => {
                null !== b.current && (clearTimeout(b.current), (b.current = null));
            },
            []
        ),
        { handleCardVisibilityChange: _ }
    );
}
