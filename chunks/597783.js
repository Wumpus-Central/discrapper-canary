r.d(t, { Z: () => g });
var n = r(582128),
    l = r(17928),
    s = r(174459),
    a = r(158045),
    i = r(440938),
    o = r(590180),
    u = r(993408),
    c = r(331884),
    d = r(652215);
function g(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        g = (0, i.uM)(),
        h = (0, l.bG)([o.A], () => o.A.getProduct(e)),
        m = (0, c.i)(),
        E = a.Ay.canUseShopDiscounts(m),
        p = n.useRef(null),
        _ = n.useCallback(() => {
            let n = null != h ? (0, u.Br)(h, E, !1) : null,
                l = null != h ? (0, u.c7)(h, E, !1) : void 0;
            s.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: g?.sessionId,
                sku_id: e,
                display_price: n?.amount,
                display_price_currency: n?.currency.toString(),
                display_price_strikethrough: l,
                position: g?.tilePosition,
                page_type: t,
                page_category: g?.pageCategory,
                page_section: g?.pageSection,
                type: r,
                category_position: g?.categoryPosition,
            });
        }, [g?.sessionId, g?.categoryPosition, g?.pageCategory, g?.pageSection, g?.tilePosition, E, t, h, e, r]),
        C = n.useCallback(
            (e) => {
                e
                    ? null === p.current &&
                      (p.current = setTimeout(() => {
                          (_(), (p.current = null));
                      }, 1e3))
                    : null !== p.current && (clearTimeout(p.current), (p.current = null));
            },
            [_],
        );
    return (
        n.useEffect(
            () => () => {
                null !== p.current && (clearTimeout(p.current), (p.current = null));
            },
            [e],
        ),
        { handleCardVisibilityChange: C }
    );
}
