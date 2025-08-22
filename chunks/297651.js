n.d(t, { E: () => _ });
var r = n(647438),
    i = n(442837),
    a = n(626135),
    o = n(74538),
    s = n(381585),
    l = n(597688),
    c = n(884697),
    u = n(82892),
    d = n(981631);
let f = 1000;
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        _ = (0, s.sp)(),
        p = (0, i.e7)([l.Z], () => l.Z.getProduct(e)),
        h = (0, u.x)(),
        m = o.ZP.canUseCollectibles(h),
        g = r.useRef(null),
        E = r.useCallback(() => {
            let r = null != p ? (0, c.Vw)(p, m, !1) : null,
                i = null != p ? (0, c.eu)(p, m, !1) : void 0;
            a.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: null == _ ? void 0 : _.sessionId,
                sku_id: e,
                display_price: null == r ? void 0 : r.amount,
                display_price_currency: null == r ? void 0 : r.currency.toString(),
                display_price_strikethrough: i,
                position: null == _ ? void 0 : _.tilePosition,
                page_type: t,
                page_category: null == _ ? void 0 : _.pageCategory,
                page_section: null == _ ? void 0 : _.pageSection,
                type: n,
                category_position: null == _ ? void 0 : _.categoryPosition,
            });
        }, [
            null == _ ? void 0 : _.sessionId,
            null == _ ? void 0 : _.categoryPosition,
            null == _ ? void 0 : _.pageCategory,
            null == _ ? void 0 : _.pageSection,
            null == _ ? void 0 : _.tilePosition,
            m,
            t,
            p,
            e,
            n,
        ]),
        b = r.useCallback(
            (e) => {
                e
                    ? null === g.current &&
                      (g.current = setTimeout(() => {
                          E(), (g.current = null);
                      }, f))
                    : null !== g.current && (clearTimeout(g.current), (g.current = null));
            },
            [E],
        );
    return (
        r.useEffect(
            () => () => {
                null !== g.current && (clearTimeout(g.current), (g.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: b }
    );
}
