n.d(t, { E: () => p });
var r = n(73800),
    i = n(442837),
    l = n(626135),
    a = n(74538),
    o = n(381585),
    s = n(597688),
    c = n(884697),
    u = n(82892),
    d = n(981631);
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'product',
        p = (0, o.sp)(),
        v = (0, i.e7)([s.Z], () => s.Z.getProduct(e)),
        f = (0, u.x)(),
        m = a.ZP.canUseCollectibles(f),
        b = r.useRef(null),
        h = r.useCallback(() => {
            let r = null != v ? (0, c.Vw)(v, m, !1) : null,
                i = null != v ? (0, c.eu)(v, m, !1) : void 0;
            l.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: null == p ? void 0 : p.sessionId,
                sku_id: e,
                display_price: null == r ? void 0 : r.amount,
                display_price_currency: null == r ? void 0 : r.currency.toString(),
                display_price_strikethrough: i,
                position: null == p ? void 0 : p.tilePosition,
                page_type: t,
                page_category: null == p ? void 0 : p.pageCategory,
                page_section: null == p ? void 0 : p.pageSection,
                type: n,
                category_position: null == p ? void 0 : p.categoryPosition
            });
        }, [null == p ? void 0 : p.sessionId, null == p ? void 0 : p.categoryPosition, null == p ? void 0 : p.pageCategory, null == p ? void 0 : p.pageSection, null == p ? void 0 : p.tilePosition, m, t, v, e, n]),
        g = r.useCallback(
            (e) => {
                e
                    ? null === b.current &&
                      (b.current = setTimeout(() => {
                          (h(), (b.current = null));
                      }, 1000))
                    : null !== b.current && (clearTimeout(b.current), (b.current = null));
            },
            [h]
        );
    return (
        r.useEffect(
            () => () => {
                null !== b.current && (clearTimeout(b.current), (b.current = null));
            },
            []
        ),
        { handleCardVisibilityChange: g }
    );
}
