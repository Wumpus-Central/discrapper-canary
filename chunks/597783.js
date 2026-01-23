n.d(t, {
    Z: () => p,
});
var r = n(64700),
    i = n(311907),
    a = n(954571),
    s = n(927578),
    o = n(440938),
    l = n(590180),
    c = n(993408),
    u = n(331884),
    d = n(652215);
let f = 1e3;

function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        p = (0, o.uM)(),
        _ = (0, i.bG)([l.A], () => l.A.getProduct(e)),
        h = (0, u.i)(),
        m = s.Ay.canUseCollectibles(h),
        g = r.useRef(null),
        E = r.useCallback(() => {
            let r = null != _ ? (0, c.Br)(_, m, !1) : null,
                i = null != _ ? (0, c.c7)(_, m, !1) : void 0;
            a.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: null == p ? void 0 : p.sessionId,
                sku_id: e,
                display_price: null == r ? void 0 : r.amount,
                display_price_currency: null == r ? void 0 : r.currency.toString(),
                display_price_strikethrough: i,
                position: null == p ? void 0 : p.tilePosition,
                page_type: t,
                page_category: null == p ? void 0 : p.pageCategory,
                page_section: null == p ? void 0 : p.pageSection,
                type: n,
                category_position: null == p ? void 0 : p.categoryPosition,
            });
        }, [
            null == p ? void 0 : p.sessionId,
            null == p ? void 0 : p.categoryPosition,
            null == p ? void 0 : p.pageCategory,
            null == p ? void 0 : p.pageSection,
            null == p ? void 0 : p.tilePosition,
            m,
            t,
            _,
            e,
            n,
        ]),
        y = r.useCallback(
            (e) => {
                e
                    ? null === g.current &&
                      (g.current = setTimeout(() => {
                          E(), (g.current = null);
                      }, f))
                    : null !== g.current && (clearTimeout(g.current), (g.current = null));
            },
            [E],
        );
    return (
        r.useEffect(
            () => () => {
                null !== g.current && (clearTimeout(g.current), (g.current = null));
            },
            [],
        ),
        {
            handleCardVisibilityChange: y,
        }
    );
}
