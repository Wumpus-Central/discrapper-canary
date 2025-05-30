n.d(t, { E: () => p });
var r = n(73800),
    l = n(442837),
    a = n(626135),
    i = n(74538),
    o = n(381585),
    s = n(597688),
    c = n(884697),
    u = n(82892),
    d = n(981631);
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'product',
        p = (0, o.sp)(),
        f = (0, l.e7)([s.Z], () => s.Z.getProduct(e)),
        g = (0, u.x)(),
        b = i.ZP.canUseCollectibles(g),
        h = r.useRef(null),
        m = r.useCallback(() => {
            let r = null != f ? (0, c.Vw)(f, b, !1) : null,
                l = null != f ? (0, c.eu)(f, b, !1) : void 0;
            a.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
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
        }, [null == p ? void 0 : p.sessionId, null == p ? void 0 : p.categoryPosition, null == p ? void 0 : p.pageCategory, null == p ? void 0 : p.pageSection, null == p ? void 0 : p.tilePosition, b, t, f, e, n]),
        _ = r.useCallback(
            (e) => {
                e
                    ? null === h.current &&
                      (h.current = setTimeout(() => {
                          m(), (h.current = null);
                      }, 1000))
                    : null !== h.current && (clearTimeout(h.current), (h.current = null));
            },
            [m]
        );
    return (
        r.useEffect(
            () => () => {
                null !== h.current && (clearTimeout(h.current), (h.current = null));
            },
            []
        ),
        { handleCardVisibilityChange: _ }
    );
}
