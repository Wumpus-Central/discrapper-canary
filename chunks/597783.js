r.d(t, { Z: () => p });
var n = r(64700),
    i = r(17928),
    l = r(954571),
    s = r(927578),
    a = r(440938),
    u = r(590180),
    c = r(993408),
    o = r(331884),
    d = r(652215);
function p(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        p = (0, a.uM)(),
        C = (0, i.bG)([u.A], () => u.A.getProduct(e)),
        k = (0, o.i)(),
        m = s.Ay.canUseCollectibles(k),
        x = n.useRef(null),
        g = n.useCallback(() => {
            let n = null != C ? (0, c.Br)(C, m, !1) : null,
                i = null != C ? (0, c.c7)(C, m, !1) : void 0;
            l.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
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
        }, [p?.sessionId, p?.categoryPosition, p?.pageCategory, p?.pageSection, p?.tilePosition, m, t, C, e, r]),
        I = n.useCallback(
            (e) => {
                e
                    ? null === x.current &&
                      (x.current = setTimeout(() => {
                          g(), (x.current = null);
                      }, 1e3))
                    : null !== x.current && (clearTimeout(x.current), (x.current = null));
            },
            [g],
        );
    return (
        n.useEffect(
            () => () => {
                null !== x.current && (clearTimeout(x.current), (x.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: I }
    );
}
