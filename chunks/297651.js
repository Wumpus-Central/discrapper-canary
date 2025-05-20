n.d(t, { E: () => b });
var r = n(73800),
    l = n(442837),
    i = n(626135),
    a = n(74538),
    o = n(381585),
    s = n(597688),
    c = n(884697),
    u = n(819490),
    d = n(82892),
    f = n(981631);
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'product',
        b = (0, o.sp)(),
        p = (0, l.e7)([s.Z], () => s.Z.getProduct(e)),
        g = (0, d.x)(),
        h = a.ZP.canUseCollectibles(g),
        m = r.useRef(null),
        _ = (0, u.B)('shop_product_card'),
        C = r.useCallback(() => {
            if (!_) return;
            let r = null != p ? (0, c.Vw)(p, h, !1) : null,
                l = null != p ? (0, c.eu)(p, h, !1) : void 0;
            i.default.track(f.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: null == b ? void 0 : b.sessionId,
                sku_id: e,
                display_price: null == r ? void 0 : r.amount,
                display_price_currency: null == r ? void 0 : r.currency.toString(),
                display_price_strikethrough: l,
                position: null == b ? void 0 : b.tilePosition,
                page_type: t,
                page_category: null == b ? void 0 : b.pageCategory,
                page_section: null == b ? void 0 : b.pageSection,
                type: n,
                category_position: null == b ? void 0 : b.categoryPosition
            });
        }, [null == b ? void 0 : b.sessionId, null == b ? void 0 : b.categoryPosition, null == b ? void 0 : b.pageCategory, null == b ? void 0 : b.pageSection, null == b ? void 0 : b.tilePosition, h, _, t, p, e, n]),
        v = r.useCallback(
            (e) => {
                e
                    ? null === m.current &&
                      (m.current = setTimeout(() => {
                          C(), (m.current = null);
                      }, 1000))
                    : null !== m.current && (clearTimeout(m.current), (m.current = null));
            },
            [C]
        );
    return (
        r.useEffect(
            () => () => {
                null !== m.current && (clearTimeout(m.current), (m.current = null));
            },
            []
        ),
        { handleCardVisibilityChange: v }
    );
}
