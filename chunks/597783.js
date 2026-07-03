r.d(t, { Z: () => f });
var n = r(64700),
    l = r(17928),
    i = r(174459),
    s = r(428262),
    o = r(440938),
    a = r(590180),
    u = r(993408),
    c = r(331884),
    d = r(652215);
function f(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        f = (0, o.uM)(),
        C = (0, l.bG)([a.A], () => a.A.getProduct(e)),
        _ = (0, c.i)(),
        p = s.Ay.canUseShopDiscounts(_),
        h = n.useRef(null),
        E = n.useCallback(() => {
            let n = null != C ? (0, u.Br)(C, p, !1) : null,
                l = null != C ? (0, u.c7)(C, p, !1) : void 0;
            i.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: f?.sessionId,
                sku_id: e,
                display_price: n?.amount,
                display_price_currency: n?.currency.toString(),
                display_price_strikethrough: l,
                position: f?.tilePosition,
                page_type: t,
                page_category: f?.pageCategory,
                page_section: f?.pageSection,
                type: r,
                category_position: f?.categoryPosition,
            });
        }, [f?.sessionId, f?.categoryPosition, f?.pageCategory, f?.pageSection, f?.tilePosition, p, t, C, e, r]),
        I = n.useCallback(
            (e) => {
                e
                    ? null === h.current &&
                      (h.current = setTimeout(() => {
                          E(), (h.current = null);
                      }, 1e3))
                    : null !== h.current && (clearTimeout(h.current), (h.current = null));
            },
            [E],
        );
    return (
        n.useEffect(
            () => () => {
                null !== h.current && (clearTimeout(h.current), (h.current = null));
            },
            [e],
        ),
        { handleCardVisibilityChange: I }
    );
}
