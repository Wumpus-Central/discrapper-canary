n.d(t, {
    E: function () {
        return h;
    }
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    l = n(626135),
    a = n(74538),
    s = n(381585),
    o = n(597688),
    c = n(884697),
    d = n(819490),
    u = n(82892),
    C = n(981631);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'product',
        h = (0, s.sp)(),
        p = (0, i.e7)([o.Z], () => o.Z.getProduct(e)),
        f = (0, u.x)(),
        m = a.ZP.canUseCollectibles(f),
        g = r.useRef(null),
        [b, x] = r.useState(!1),
        [v, _] = r.useState(!1),
        k = (0, d.B)('shop_product_card');
    return (
        r.useEffect(
            () => (
                b && null === g.current
                    ? (g.current = setTimeout(() => {
                          _(!0);
                      }, 1000))
                    : !b && (null !== g.current && (clearTimeout(g.current), (g.current = null)), _(!1)),
                () => {
                    null !== g.current && (clearTimeout(g.current), (g.current = null));
                }
            ),
            [b]
        ),
        r.useEffect(() => {
            if (v && k) {
                let r = null != p ? (0, c.Vw)(p, m, !1) : null,
                    i = null != p ? (0, c.eu)(p, m, !1) : void 0;
                l.default.track(C.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                    collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
                    sku_id: e,
                    display_price: null == r ? void 0 : r.amount,
                    display_price_currency: null == r ? void 0 : r.currency.toString(),
                    display_price_strikethrough: i,
                    position: null == h ? void 0 : h.tilePosition,
                    page_type: t,
                    page_category: null == h ? void 0 : h.pageCategory,
                    page_section: null == h ? void 0 : h.pageSection,
                    type: n,
                    category_position: null == h ? void 0 : h.categoryPosition
                });
            }
        }, [null == h ? void 0 : h.sessionId, null == h ? void 0 : h.categoryPosition, null == h ? void 0 : h.pageCategory, null == h ? void 0 : h.pageSection, null == h ? void 0 : h.tilePosition, v, m, k, t, p, e, n]),
        {
            handleCardVisibilityChange: (e) => {
                x(e);
            }
        }
    );
}
