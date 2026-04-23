r.d(t, { Z: () => k });
var i = r(64700),
    n = r(17928),
    l = r(954571),
    s = r(927578),
    a = r(440938),
    u = r(590180),
    c = r(993408),
    o = r(331884),
    d = r(652215);
function k(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        k = (0, a.uM)(),
        p = (0, n.bG)([u.A], () => u.A.getProduct(e)),
        C = (0, o.i)(),
        m = s.Ay.canUseCollectibles(C),
        x = i.useRef(null),
        I = i.useCallback(() => {
            let i = null != p ? (0, c.Br)(p, m, !1) : null,
                n = null != p ? (0, c.c7)(p, m, !1) : void 0;
            l.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: k?.sessionId,
                sku_id: e,
                display_price: i?.amount,
                display_price_currency: i?.currency.toString(),
                display_price_strikethrough: n,
                position: k?.tilePosition,
                page_type: t,
                page_category: k?.pageCategory,
                page_section: k?.pageSection,
                type: r,
                category_position: k?.categoryPosition,
            });
        }, [k?.sessionId, k?.categoryPosition, k?.pageCategory, k?.pageSection, k?.tilePosition, m, t, p, e, r]),
        g = i.useCallback(
            (e) => {
                e
                    ? null === x.current &&
                      (x.current = setTimeout(() => {
                          I(), (x.current = null);
                      }, 1e3))
                    : null !== x.current && (clearTimeout(x.current), (x.current = null));
            },
            [I],
        );
    return (
        i.useEffect(
            () => () => {
                null !== x.current && (clearTimeout(x.current), (x.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: g }
    );
}
