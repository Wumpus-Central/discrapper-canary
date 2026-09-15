n.d(t, { Z: () => _ });
var r = n(582128),
    s = n(17928),
    l = n(174459),
    i = n(158045),
    a = n(440938),
    o = n(590180),
    u = n(993408),
    c = n(331884),
    d = n(652215);
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        _ = (0, a.uM)(),
        g = (0, s.bG)([o.A], () => o.A.getProduct(e)),
        E = (0, c.i)(),
        S = i.Ay.canUseShopDiscounts(E),
        p = r.useRef(null),
        L = r.useCallback(() => {
            let r = null != g ? (0, u.Br)(g, S, !1) : null,
                s = null != g ? (0, u.c7)(g, S, !1) : void 0;
            l.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: _?.sessionId,
                sku_id: e,
                display_price: r?.amount,
                display_price_currency: r?.currency.toString(),
                display_price_strikethrough: s,
                position: _?.tilePosition,
                page_type: t,
                page_category: _?.pageCategory,
                page_section: _?.pageSection,
                type: n,
                category_position: _?.categoryPosition,
            });
        }, [_?.sessionId, _?.categoryPosition, _?.pageCategory, _?.pageSection, _?.tilePosition, S, t, g, e, n]),
        m = r.useCallback(
            (e) => {
                e
                    ? null === p.current &&
                      (p.current = setTimeout(() => {
                          (L(), (p.current = null));
                      }, 1e3))
                    : null !== p.current && (clearTimeout(p.current), (p.current = null));
            },
            [L],
        );
    return (
        r.useEffect(
            () => () => {
                null !== p.current && (clearTimeout(p.current), (p.current = null));
            },
            [e],
        ),
        { handleCardVisibilityChange: m }
    );
}
