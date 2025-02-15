n.d(t, { E: () => h }), n(47120);
var l = n(192379),
    r = n(442837),
    i = n(626135),
    a = n(74538),
    s = n(381585),
    o = n(597688),
    d = n(884697),
    c = n(819490),
    u = n(82892),
    C = n(981631);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'product',
        h = (0, s.sp)(),
        m = (0, r.e7)([o.Z], () => o.Z.getProduct(e)),
        p = (0, u.x)(),
        g = a.ZP.canUseCollectibles(p),
        f = l.useRef(null),
        [x, b] = l.useState(!1),
        [v, _] = l.useState(!1),
        j = (0, c.B)('shop_product_card');
    return (
        l.useEffect(
            () => (
                x && null === f.current
                    ? (f.current = setTimeout(() => {
                          _(!0);
                      }, 1000))
                    : x || (null !== f.current && (clearTimeout(f.current), (f.current = null)), _(!1)),
                () => {
                    null !== f.current && (clearTimeout(f.current), (f.current = null));
                }
            ),
            [x]
        ),
        l.useEffect(() => {
            if (v && j) {
                let l = null != m ? (0, d.Vw)(m, g, !1) : null,
                    r = null != m ? (0, d.eu)(m, g, !1) : void 0;
                i.default.track(C.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                    collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
                    sku_id: e,
                    display_price: null == l ? void 0 : l.amount,
                    display_price_currency: null == l ? void 0 : l.currency.toString(),
                    display_price_strikethrough: r,
                    position: null == h ? void 0 : h.tilePosition,
                    page_type: t,
                    page_category: null == h ? void 0 : h.pageCategory,
                    page_section: null == h ? void 0 : h.pageSection,
                    type: n,
                    category_position: null == h ? void 0 : h.categoryPosition
                });
            }
        }, [null == h ? void 0 : h.sessionId, null == h ? void 0 : h.categoryPosition, null == h ? void 0 : h.pageCategory, null == h ? void 0 : h.pageSection, null == h ? void 0 : h.tilePosition, v, g, j, t, m, e, n]),
        {
            handleCardVisibilityChange: (e) => {
                b(e);
            }
        }
    );
}
