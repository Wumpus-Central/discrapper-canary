n.d(t, { E: () => m });
var a = n(473749),
    r = n(442837),
    i = n(626135),
    l = n(74538),
    s = n(381585),
    o = n(597688),
    c = n(884697),
    d = n(82892),
    u = n(981631);
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        m = (0, s.sp)(),
        p = (0, r.e7)([o.Z], () => o.Z.getProduct(e)),
        h = (0, d.x)(),
        x = l.ZP.canUseCollectibles(h),
        f = a.useRef(null),
        g = a.useCallback(() => {
            let a = null != p ? (0, c.Vw)(p, x, !1) : null,
                r = null != p ? (0, c.eu)(p, x, !1) : void 0;
            i.default.track(u.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: null == m ? void 0 : m.sessionId,
                sku_id: e,
                display_price: null == a ? void 0 : a.amount,
                display_price_currency: null == a ? void 0 : a.currency.toString(),
                display_price_strikethrough: r,
                position: null == m ? void 0 : m.tilePosition,
                page_type: t,
                page_category: null == m ? void 0 : m.pageCategory,
                page_section: null == m ? void 0 : m.pageSection,
                type: n,
                category_position: null == m ? void 0 : m.categoryPosition,
            });
        }, [
            null == m ? void 0 : m.sessionId,
            null == m ? void 0 : m.categoryPosition,
            null == m ? void 0 : m.pageCategory,
            null == m ? void 0 : m.pageSection,
            null == m ? void 0 : m.tilePosition,
            x,
            t,
            p,
            e,
            n,
        ]),
        b = a.useCallback(
            (e) => {
                e
                    ? null === f.current &&
                      (f.current = setTimeout(() => {
                          g(), (f.current = null);
                      }, 1000))
                    : null !== f.current && (clearTimeout(f.current), (f.current = null));
            },
            [g],
        );
    return (
        a.useEffect(
            () => () => {
                null !== f.current && (clearTimeout(f.current), (f.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: b }
    );
}
