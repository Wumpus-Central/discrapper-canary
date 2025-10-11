i.d(t, { E: () => p });
var l = i(647438),
    n = i(442837),
    r = i(626135),
    a = i(74538),
    s = i(381585),
    o = i(597688),
    d = i(884697),
    u = i(82892),
    c = i(981631);
function p(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        p = (0, s.sp)(),
        g = (0, n.e7)([o.Z], () => o.Z.getProduct(e)),
        h = (0, u.x)(),
        m = a.ZP.canUseCollectibles(h),
        v = l.useRef(null),
        x = l.useCallback(() => {
            let l = null != g ? (0, d.Vw)(g, m, !1) : null,
                n = null != g ? (0, d.eu)(g, m, !1) : void 0;
            r.default.track(c.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: null == p ? void 0 : p.sessionId,
                sku_id: e,
                display_price: null == l ? void 0 : l.amount,
                display_price_currency: null == l ? void 0 : l.currency.toString(),
                display_price_strikethrough: n,
                position: null == p ? void 0 : p.tilePosition,
                page_type: t,
                page_category: null == p ? void 0 : p.pageCategory,
                page_section: null == p ? void 0 : p.pageSection,
                type: i,
                category_position: null == p ? void 0 : p.categoryPosition,
            });
        }, [
            null == p ? void 0 : p.sessionId,
            null == p ? void 0 : p.categoryPosition,
            null == p ? void 0 : p.pageCategory,
            null == p ? void 0 : p.pageSection,
            null == p ? void 0 : p.tilePosition,
            m,
            t,
            g,
            e,
            i,
        ]),
        C = l.useCallback(
            (e) => {
                e
                    ? null === v.current &&
                      (v.current = setTimeout(() => {
                          x(), (v.current = null);
                      }, 1000))
                    : null !== v.current && (clearTimeout(v.current), (v.current = null));
            },
            [x],
        );
    return (
        l.useEffect(
            () => () => {
                null !== v.current && (clearTimeout(v.current), (v.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: C }
    );
}
