r.d(t, { E: () => p });
var n = r(647438),
    l = r(442837),
    i = r(626135),
    a = r(74538),
    o = r(381585),
    s = r(597688),
    c = r(884697),
    u = r(82892),
    d = r(981631);
function p(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        p = (0, o.sp)(),
        f = (0, l.e7)([s.Z], () => s.Z.getProduct(e)),
        b = (0, u.x)(),
        h = a.ZP.canUseCollectibles(b),
        g = n.useRef(null),
        O = n.useCallback(() => {
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
                category_position: null == p ? void 0 : p.categoryPosition,
            });
        }, [
            null == p ? void 0 : p.sessionId,
            null == p ? void 0 : p.categoryPosition,
            null == p ? void 0 : p.pageCategory,
            null == p ? void 0 : p.pageSection,
            null == p ? void 0 : p.tilePosition,
            h,
            t,
            f,
            e,
            r,
        ]),
        v = n.useCallback(
            (e) => {
                e
                    ? null === g.current &&
                      (g.current = setTimeout(() => {
                          O(), (g.current = null);
                      }, 1000))
                    : null !== g.current && (clearTimeout(g.current), (g.current = null));
            },
            [O],
        );
    return (
        n.useEffect(
            () => () => {
                null !== g.current && (clearTimeout(g.current), (g.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: v }
    );
}
