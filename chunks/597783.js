"use strict";
n.d(t, { Z: () => f });
var r = n(64700),
    i = n(311907),
    a = n(954571),
    s = n(927578),
    o = n(440938),
    l = n(590180),
    u = n(993408),
    c = n(331884),
    d = n(652215);
let _ = 1e3;
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        f = (0, o.uM)(),
        p = (0, i.bG)([l.A], () => l.A.getProduct(e)),
        h = (0, c.i)(),
        m = s.Ay.canUseCollectibles(h),
        g = r.useRef(null),
        E = r.useCallback(() => {
            let r = null != p ? (0, u.Br)(p, m, !1) : null,
                i = null != p ? (0, u.c7)(p, m, !1) : void 0;
            a.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: f?.sessionId,
                sku_id: e,
                display_price: r?.amount,
                display_price_currency: r?.currency.toString(),
                display_price_strikethrough: i,
                position: f?.tilePosition,
                page_type: t,
                page_category: f?.pageCategory,
                page_section: f?.pageSection,
                type: n,
                category_position: f?.categoryPosition,
            });
        }, [f?.sessionId, f?.categoryPosition, f?.pageCategory, f?.pageSection, f?.tilePosition, m, t, p, e, n]),
        A = r.useCallback(
            (e) => {
                e
                    ? null === g.current &&
                      (g.current = setTimeout(() => {
                          E(), (g.current = null);
                      }, _))
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
        { handleCardVisibilityChange: A }
    );
}
