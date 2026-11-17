var l = n(582128),
    r = n(855986),
    s = n(129230),
    a = n(448645),
    i = n(857512),
    o = n(590180),
    u = n(993408),
    c = n(331884),
    d = n(652215);
n.d(
    t,
    {},
    {
        Z: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
                m = (0, i.uM)(),
                h = (0, r.bG)([o.A], () => o.A.getProduct(e)),
                g = (0, c.o)(),
                p = a.Ay.canUseShopDiscounts(g),
                E = l.useRef(null),
                f = l.useCallback(() => {
                    let l = null != h ? (0, u.Br)(h, p, !1) : null,
                        r = null != h ? (0, u.c7)(h, p, !1) : void 0;
                    s.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                        collectibles_shop_session_id: m?.sessionId,
                        sku_id: e,
                        display_price: l?.amount,
                        display_price_currency: l?.currency.toString(),
                        display_price_strikethrough: r,
                        position: m?.tilePosition,
                        page_type: t,
                        page_category: m?.pageCategory,
                        page_section: m?.pageSection,
                        type: n,
                        category_position: m?.categoryPosition,
                    });
                }, [
                    m?.sessionId,
                    m?.categoryPosition,
                    m?.pageCategory,
                    m?.pageSection,
                    m?.tilePosition,
                    p,
                    t,
                    h,
                    e,
                    n,
                ]),
                x = l.useCallback(
                    (e) => {
                        e
                            ? null === E.current &&
                              (E.current = setTimeout(() => {
                                  (f(), (E.current = null));
                              }, 1e3))
                            : null !== E.current && (clearTimeout(E.current), (E.current = null));
                    },
                    [f],
                );
            return (
                l.useEffect(
                    () => () => {
                        null !== E.current && (clearTimeout(E.current), (E.current = null));
                    },
                    [e],
                ),
                { handleCardVisibilityChange: x }
            );
        },
    },
);
