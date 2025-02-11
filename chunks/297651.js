n.d(t, { E: () => h }), n(47120);
var r = n(192379),
    l = n(442837),
    i = n(626135),
    s = n(74538),
    a = n(381585),
    o = n(597688),
    d = n(884697),
    c = n(819490),
    u = n(82892),
    C = n(981631);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'product',
        h = (0, a.sp)(),
        p = (0, l.e7)([o.Z], () => o.Z.getProduct(e)),
        m = (0, u.x)(),
        f = s.ZP.canUseCollectibles(m),
        g = r.useRef(null),
        [x, b] = r.useState(!1),
        [_, v] = r.useState(!1),
        j = (0, c.B)('shop_product_card');
    return (
        r.useEffect(
            () => (
                x && null === g.current
                    ? (g.current = setTimeout(() => {
                          v(!0);
                      }, 1000))
                    : x || (null !== g.current && (clearTimeout(g.current), (g.current = null)), v(!1)),
                () => {
                    null !== g.current && (clearTimeout(g.current), (g.current = null));
                }
            ),
            [x]
        ),
        r.useEffect(() => {
            if (_ && j) {
                let r = null != p ? (0, d.Vw)(p, f, !1) : null,
                    l = null != p ? (0, d.eu)(p, f, !1) : void 0;
                i.default.track(C.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                    collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
                    sku_id: e,
                    display_price: null == r ? void 0 : r.amount,
                    display_price_currency: null == r ? void 0 : r.currency.toString(),
                    display_price_strikethrough: l,
                    position: null == h ? void 0 : h.tilePosition,
                    page_type: t,
                    page_category: null == h ? void 0 : h.pageCategory,
                    page_section: null == h ? void 0 : h.pageSection,
                    type: n,
                    category_position: null == h ? void 0 : h.categoryPosition
                });
            }
        }, [null == h ? void 0 : h.sessionId, null == h ? void 0 : h.categoryPosition, null == h ? void 0 : h.pageCategory, null == h ? void 0 : h.pageSection, null == h ? void 0 : h.tilePosition, _, f, j, t, p, e, n]),
        {
            handleCardVisibilityChange: (e) => {
                b(e);
            }
        }
    );
}
