r.d(e, { Z: () => m });
var i = r(64700),
    l = r(311907),
    n = r(954571),
    s = r(927578),
    a = r(440938),
    u = r(590180),
    o = r(993408),
    d = r(331884),
    c = r(652215);
function m(t, e) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        m = (0, a.uM)(),
        x = (0, l.bG)([u.A], () => u.A.getProduct(t)),
        p = (0, d.i)(),
        g = s.Ay.canUseCollectibles(p),
        h = i.useRef(null),
        C = i.useCallback(() => {
            let i = null != x ? (0, o.Br)(x, g, !1) : null,
                l = null != x ? (0, o.c7)(x, g, !1) : void 0;
            n.default.track(c.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: m?.sessionId,
                sku_id: t,
                display_price: i?.amount,
                display_price_currency: i?.currency.toString(),
                display_price_strikethrough: l,
                position: m?.tilePosition,
                page_type: e,
                page_category: m?.pageCategory,
                page_section: m?.pageSection,
                type: r,
                category_position: m?.categoryPosition,
            });
        }, [m?.sessionId, m?.categoryPosition, m?.pageCategory, m?.pageSection, m?.tilePosition, g, e, x, t, r]),
        A = i.useCallback(
            (t) => {
                t
                    ? null === h.current &&
                      (h.current = setTimeout(() => {
                          C(), (h.current = null);
                      }, 1e3))
                    : null !== h.current && (clearTimeout(h.current), (h.current = null));
            },
            [C],
        );
    return (
        i.useEffect(
            () => () => {
                null !== h.current && (clearTimeout(h.current), (h.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: A }
    );
}
