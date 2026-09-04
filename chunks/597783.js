r.d(t, { Z: () => p });
var n = r(582128),
    i = r(17928),
    s = r(174459),
    l = r(158045),
    a = r(440938),
    o = r(590180),
    u = r(993408),
    c = r(331884),
    d = r(652215);
function p(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        p = (0, a.uM)(),
        g = (0, i.bG)([o.A], () => o.A.getProduct(e)),
        f = (0, c.i)(),
        I = l.Ay.canUseShopDiscounts(f),
        _ = n.useRef(null),
        A = n.useCallback(() => {
            let n = null != g ? (0, u.Br)(g, I, !1) : null,
                i = null != g ? (0, u.c7)(g, I, !1) : void 0;
            s.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: p?.sessionId,
                sku_id: e,
                display_price: n?.amount,
                display_price_currency: n?.currency.toString(),
                display_price_strikethrough: i,
                position: p?.tilePosition,
                page_type: t,
                page_category: p?.pageCategory,
                page_section: p?.pageSection,
                type: r,
                category_position: p?.categoryPosition,
            });
        }, [p?.sessionId, p?.categoryPosition, p?.pageCategory, p?.pageSection, p?.tilePosition, I, t, g, e, r]),
        C = n.useCallback(
            (e) => {
                e
                    ? null === _.current &&
                      (_.current = setTimeout(() => {
                          A(), (_.current = null);
                      }, 1e3))
                    : null !== _.current && (clearTimeout(_.current), (_.current = null));
            },
            [A],
        );
    return (
        n.useEffect(
            () => () => {
                null !== _.current && (clearTimeout(_.current), (_.current = null));
            },
            [e],
        ),
        { handleCardVisibilityChange: C }
    );
}
