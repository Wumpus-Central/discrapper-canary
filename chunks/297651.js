n.d(t, { E: () => f });
var r = n(73800),
    l = n(442837),
    a = n(626135),
    i = n(74538),
    o = n(381585),
    s = n(597688),
    c = n(884697),
    u = n(82892),
    d = n(981631);
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'product',
        f = (0, o.sp)(),
        b = (0, l.e7)([s.Z], () => s.Z.getProduct(e)),
        p = (0, u.x)(),
        g = i.ZP.canUseCollectibles(p),
        h = r.useRef(null),
        m = r.useCallback(() => {
            let r = null != b ? (0, c.Vw)(b, g, !1) : null,
                l = null != b ? (0, c.eu)(b, g, !1) : void 0;
            a.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: null == f ? void 0 : f.sessionId,
                sku_id: e,
                display_price: null == r ? void 0 : r.amount,
                display_price_currency: null == r ? void 0 : r.currency.toString(),
                display_price_strikethrough: l,
                position: null == f ? void 0 : f.tilePosition,
                page_type: t,
                page_category: null == f ? void 0 : f.pageCategory,
                page_section: null == f ? void 0 : f.pageSection,
                type: n,
                category_position: null == f ? void 0 : f.categoryPosition
            });
        }, [null == f ? void 0 : f.sessionId, null == f ? void 0 : f.categoryPosition, null == f ? void 0 : f.pageCategory, null == f ? void 0 : f.pageSection, null == f ? void 0 : f.tilePosition, g, t, b, e, n]),
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
