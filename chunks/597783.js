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
        p = (0, l.bG)([o.A], () => o.A.getProduct(e)),
        m = (0, c.i)(),
        _ = a.Ay.canUseShopDiscounts(m),
        E = n.useRef(null),
        h = n.useCallback(() => {
            let n = null != p ? (0, u.Br)(p, _, !1) : null,
                l = null != p ? (0, u.c7)(p, _, !1) : void 0;
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
        }, [g?.sessionId, g?.categoryPosition, g?.pageCategory, g?.pageSection, g?.tilePosition, _, t, p, e, r]),
        S = n.useCallback(
            (e) => {
                e
                    ? null === E.current &&
                      (E.current = setTimeout(() => {
                          (h(), (E.current = null));
                      }, 1e3))
                    : null !== E.current && (clearTimeout(E.current), (E.current = null));
            },
            [h],
        );
    return (
        n.useEffect(
            () => () => {
                null !== E.current && (clearTimeout(E.current), (E.current = null));
            },
            [e],
        ),
        { handleCardVisibilityChange: S }
    );
}
