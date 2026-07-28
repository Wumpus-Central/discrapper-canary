n.d(t, { Z: () => C });
var r = n(582128),
    i = n(17928),
    s = n(174459),
    l = n(428262),
    a = n(440938),
    o = n(590180),
    u = n(993408),
    c = n(331884),
    d = n(652215);
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        C = (0, a.uM)(),
        p = (0, i.bG)([o.A], () => o.A.getProduct(e)),
        I = (0, c.i)(),
        x = l.Ay.canUseShopDiscounts(I),
        g = r.useRef(null),
        f = r.useCallback(() => {
            let r = null != p ? (0, u.Br)(p, x, !1) : null,
                i = null != p ? (0, u.c7)(p, x, !1) : void 0;
            s.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: C?.sessionId,
                sku_id: e,
                display_price: r?.amount,
                display_price_currency: r?.currency.toString(),
                display_price_strikethrough: i,
                position: C?.tilePosition,
                page_type: t,
                page_category: C?.pageCategory,
                page_section: C?.pageSection,
                type: n,
                category_position: C?.categoryPosition,
            });
        }, [C?.sessionId, C?.categoryPosition, C?.pageCategory, C?.pageSection, C?.tilePosition, x, t, p, e, n]),
        A = r.useCallback(
            (e) => {
                e
                    ? null === g.current &&
                      (g.current = setTimeout(() => {
                          f(), (g.current = null);
                      }, 1e3))
                    : null !== g.current && (clearTimeout(g.current), (g.current = null));
            },
            [f],
        );
    return (
        r.useEffect(
            () => () => {
                null !== g.current && (clearTimeout(g.current), (g.current = null));
            },
            [e],
        ),
        { handleCardVisibilityChange: A }
    );
}
