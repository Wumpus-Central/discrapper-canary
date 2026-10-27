n.d(t, { Z: () => p });
var r = n(582128),
    l = n(17928),
    s = n(174459),
    a = n(24482),
    o = n(440938),
    i = n(590180),
    c = n(993408),
    u = n(331884),
    d = n(652215);
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        p = (0, o.uM)(),
        m = (0, l.bG)([i.A], () => i.A.getProduct(e)),
        g = (0, u.o)(),
        h = a.Ay.canUseShopDiscounts(g),
        E = r.useRef(null),
        C = r.useCallback(() => {
            let r = null != m ? (0, c.Br)(m, h, !1) : null,
                l = null != m ? (0, c.c7)(m, h, !1) : void 0;
            s.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: p?.sessionId,
                sku_id: e,
                display_price: r?.amount,
                display_price_currency: r?.currency.toString(),
                display_price_strikethrough: l,
                position: p?.tilePosition,
                page_type: t,
                page_category: p?.pageCategory,
                page_section: p?.pageSection,
                type: n,
                category_position: p?.categoryPosition,
            });
        }, [p?.sessionId, p?.categoryPosition, p?.pageCategory, p?.pageSection, p?.tilePosition, h, t, m, e, n]),
        f = r.useCallback(
            (e) => {
                e
                    ? null === E.current &&
                      (E.current = setTimeout(() => {
                          (C(), (E.current = null));
                      }, 1e3))
                    : null !== E.current && (clearTimeout(E.current), (E.current = null));
            },
            [C],
        );
    return (
        r.useEffect(
            () => () => {
                null !== E.current && (clearTimeout(E.current), (E.current = null));
            },
            [e],
        ),
        { handleCardVisibilityChange: f }
    );
}
