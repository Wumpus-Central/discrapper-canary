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
        f = l.ZP.canUseCollectibles(h),
        x = a.useRef(null),
        b = a.useCallback(() => {
            let a = null != p ? (0, c.Vw)(p, f, !1) : null,
                r = null != p ? (0, c.eu)(p, f, !1) : void 0;
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
            f,
            t,
            p,
            e,
            n,
        ]),
        g = a.useCallback(
            (e) => {
                e
                    ? null === x.current &&
                      (x.current = setTimeout(() => {
                          b(), (x.current = null);
                      }, 1000))
                    : null !== x.current && (clearTimeout(x.current), (x.current = null));
            },
            [b],
        );
    return (
        a.useEffect(
            () => () => {
                null !== x.current && (clearTimeout(x.current), (x.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: g }
    );
}
