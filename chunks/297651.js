r.d(t, { E: () => p });
var n = r(73800),
    a = r(442837),
    l = r(626135),
    i = r(74538),
    o = r(381585),
    s = r(597688),
    c = r(884697),
    u = r(82892),
    d = r(981631);
function p(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'product',
        p = (0, o.sp)(),
        b = (0, a.e7)([s.Z], () => s.Z.getProduct(e)),
        h = (0, u.x)(),
        f = i.ZP.canUseCollectibles(h),
        v = n.useRef(null),
        m = n.useCallback(() => {
            let n = null != b ? (0, c.Vw)(b, f, !1) : null,
                a = null != b ? (0, c.eu)(b, f, !1) : void 0;
            l.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: null == p ? void 0 : p.sessionId,
                sku_id: e,
                display_price: null == n ? void 0 : n.amount,
                display_price_currency: null == n ? void 0 : n.currency.toString(),
                display_price_strikethrough: a,
                position: null == p ? void 0 : p.tilePosition,
                page_type: t,
                page_category: null == p ? void 0 : p.pageCategory,
                page_section: null == p ? void 0 : p.pageSection,
                type: r,
                category_position: null == p ? void 0 : p.categoryPosition
            });
        }, [null == p ? void 0 : p.sessionId, null == p ? void 0 : p.categoryPosition, null == p ? void 0 : p.pageCategory, null == p ? void 0 : p.pageSection, null == p ? void 0 : p.tilePosition, f, t, b, e, r]),
        _ = n.useCallback(
            (e) => {
                e
                    ? null === v.current &&
                      (v.current = setTimeout(() => {
                          (m(), (v.current = null));
                      }, 1000))
                    : null !== v.current && (clearTimeout(v.current), (v.current = null));
            },
            [m]
        );
    return (
        n.useEffect(
            () => () => {
                null !== v.current && (clearTimeout(v.current), (v.current = null));
            },
            []
        ),
        { handleCardVisibilityChange: _ }
    );
}
