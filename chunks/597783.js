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
        m = (0, l.bG)([o.A], () => o.A.getProduct(e)),
        p = (0, c.i)(),
        h = a.Ay.canUseShopDiscounts(p),
        E = n.useRef(null),
        S = n.useCallback(() => {
            let n = null != m ? (0, u.Br)(m, h, !1) : null,
                l = null != m ? (0, u.c7)(m, h, !1) : void 0;
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
        }, [g?.sessionId, g?.categoryPosition, g?.pageCategory, g?.pageSection, g?.tilePosition, h, t, m, e, r]),
        x = n.useCallback(
            (e) => {
                e
                    ? null === E.current &&
                      (E.current = setTimeout(() => {
                          (S(), (E.current = null));
                      }, 1e3))
                    : null !== E.current && (clearTimeout(E.current), (E.current = null));
            },
            [S],
        );
    return (
        n.useEffect(
            () => () => {
                null !== E.current && (clearTimeout(E.current), (E.current = null));
            },
            [e],
        ),
        { handleCardVisibilityChange: x }
    );
}
