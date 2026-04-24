r.d(t, { Z: () => p });
var n = r(64700),
    i = r(17928),
    l = r(954571),
    s = r(927578),
    a = r(440938),
    u = r(590180),
    o = r(993408),
    c = r(331884),
    d = r(652215);
function p(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        p = (0, a.uM)(),
        k = (0, i.bG)([u.A], () => u.A.getProduct(e)),
        C = (0, c.i)(),
        m = s.Ay.canUseShopDiscounts(C),
        x = n.useRef(null),
        h = n.useCallback(() => {
            let n = null != k ? (0, o.Br)(k, m, !1) : null,
                i = null != k ? (0, o.c7)(k, m, !1) : void 0;
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
        }, [p?.sessionId, p?.categoryPosition, p?.pageCategory, p?.pageSection, p?.tilePosition, m, t, k, e, r]),
        g = n.useCallback(
            (e) => {
                e
                    ? null === x.current &&
                      (x.current = setTimeout(() => {
                          h(), (x.current = null);
                      }, 1e3))
                    : null !== x.current && (clearTimeout(x.current), (x.current = null));
            },
            [h],
        );
    return (
        n.useEffect(
            () => () => {
                null !== x.current && (clearTimeout(x.current), (x.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: g }
    );
}
