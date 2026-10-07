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
        E = (0, l.bG)([o.A], () => o.A.getProduct(e)),
        m = (0, c.i)(),
        p = a.Ay.canUseShopDiscounts(m),
        _ = n.useRef(null),
        h = n.useCallback(() => {
            let n = null != E ? (0, u.Br)(E, p, !1) : null,
                l = null != E ? (0, u.c7)(E, p, !1) : void 0;
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
        }, [g?.sessionId, g?.categoryPosition, g?.pageCategory, g?.pageSection, g?.tilePosition, p, t, E, e, r]),
        C = n.useCallback(
            (e) => {
                e
                    ? null === _.current &&
                      (_.current = setTimeout(() => {
                          (h(), (_.current = null));
                      }, 1e3))
                    : null !== _.current && (clearTimeout(_.current), (_.current = null));
            },
            [h],
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
