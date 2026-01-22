n.d(t, { Z: () => m });
var a = n(64700),
    l = n(311907),
    i = n(954571),
    r = n(927578),
    s = n(440938),
    o = n(590180),
    c = n(993408),
    d = n(331884),
    u = n(652215);
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        m = (0, s.uM)(),
        p = (0, l.bG)([o.A], () => o.A.getProduct(e)),
        h = (0, d.i)(),
        f = r.Ay.canUseCollectibles(h),
        x = a.useRef(null),
        b = a.useCallback(() => {
            let a = null != p ? (0, c.Br)(p, f, !1) : null,
                l = null != p ? (0, c.c7)(p, f, !1) : void 0;
            i.default.track(u.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: null == m ? void 0 : m.sessionId,
                sku_id: e,
                display_price: null == a ? void 0 : a.amount,
                display_price_currency: null == a ? void 0 : a.currency.toString(),
                display_price_strikethrough: l,
                position: null == m ? void 0 : m.tilePosition,
                page_type: t,
                page_category: null == m ? void 0 : m.pageCategory,
                page_section: null == m ? void 0 : m.pageSection,
                type: n,
                category_position: null == m ? void 0 : m.categoryPosition,
            });
        }, [
            null == m ? void 0 : m.sessionId,
            null == m ? void 0 : m.categoryPosition,
            null == m ? void 0 : m.pageCategory,
            null == m ? void 0 : m.pageSection,
            null == m ? void 0 : m.tilePosition,
            f,
            t,
            p,
            e,
            n,
        ]),
        g = a.useCallback(
            (e) => {
                e
                    ? null === x.current &&
                      (x.current = setTimeout(() => {
                          b(), (x.current = null);
                      }, 1000))
                    : null !== x.current && (clearTimeout(x.current), (x.current = null));
            },
            [b],
        );
    return (
        a.useEffect(
            () => () => {
                null !== x.current && (clearTimeout(x.current), (x.current = null));
            },
            [],
        ),
        { handleCardVisibilityChange: g }
    );
}
