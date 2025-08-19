r.d(t, { E: () => p });
var n = r(647438),
    l = r(442837),
    a = r(626135),
    i = r(74538),
    o = r(381585),
    s = r(597688),
    c = r(884697),
    u = r(82892),
    d = r(981631);
function p(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        p = (0, o.sp)(),
        g = (0, l.e7)([s.Z], () => s.Z.getProduct(e)),
        f = (0, u.x)(),
        m = i.ZP.canUseCollectibles(f),
        b = n.useRef(null),
        h = n.useCallback(() => {
            let n = null != g ? (0, c.Vw)(g, m, !1) : null,
                l = null != g ? (0, c.eu)(g, m, !1) : void 0;
            a.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
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
            r,
        ]),
        _ = n.useCallback(
            (e) => {
                e
                    ? null === b.current &&
                      (b.current = setTimeout(() => {
                          h(), (b.current = null);
                      }, 1000))
                    : null !== b.current && (clearTimeout(b.current), (b.current = null));
            },
            [h],
        );
    return (
        n.useEffect(
            () => () => {
                null !== b.current && (clearTimeout(b.current), (b.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: _ }
    );
}
