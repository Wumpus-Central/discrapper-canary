n.d(t, { Z: () => p });
var r = n(582128),
    i = n(17928),
    s = n(174459),
    l = n(158045),
    a = n(440938),
    o = n(590180),
    u = n(993408),
    c = n(331884),
    d = n(652215);
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        p = (0, a.uM)(),
        g = (0, i.bG)([o.A], () => o.A.getProduct(e)),
        I = (0, c.i)(),
        _ = l.Ay.canUseShopDiscounts(I),
        f = r.useRef(null),
        C = r.useCallback(() => {
            let r = null != g ? (0, u.Br)(g, _, !1) : null,
                i = null != g ? (0, u.c7)(g, _, !1) : void 0;
            s.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: p?.sessionId,
                sku_id: e,
                display_price: r?.amount,
                display_price_currency: r?.currency.toString(),
                display_price_strikethrough: i,
                position: p?.tilePosition,
                page_type: t,
                page_category: p?.pageCategory,
                page_section: p?.pageSection,
                type: n,
                category_position: p?.categoryPosition,
            });
        }, [p?.sessionId, p?.categoryPosition, p?.pageCategory, p?.pageSection, p?.tilePosition, _, t, g, e, n]),
        A = r.useCallback(
            (e) => {
                e
                    ? null === f.current &&
                      (f.current = setTimeout(() => {
                          C(), (f.current = null);
                      }, 1e3))
                    : null !== f.current && (clearTimeout(f.current), (f.current = null));
            },
            [C],
        );
    return (
        r.useEffect(
            () => () => {
                null !== f.current && (clearTimeout(f.current), (f.current = null));
            },
            [e],
        ),
        { handleCardVisibilityChange: A }
    );
}
