t.d(e, { J: () => c });
var s = t(64700),
    n = t(954571),
    r = t(299679),
    o = t(652215);
function c(i, e) {
    let t = (0, r.Ar)(),
        c = s.useRef(!1),
        l = s.useRef(t);
    s.useEffect(() => {
        l.current = t;
    }, [t]),
        s.useEffect(() => {
            if (!i) {
                c.current = !1;
                return;
            }
            if (c.current) return;
            let t = setTimeout(() => {
                let i = l.current;
                n.default.track(o.HAw.WISHLIST_ITEM_HOVERED, {
                    sku_id: i?.skuId,
                    wishlist_id: i?.wishlistId,
                    wishlist_owner_id: i?.wishlistOwnerId,
                    surface: i?.surface,
                    position_in_section: i?.positionInSection,
                    item_source: i?.itemSource,
                    product_line: i?.productLine,
                    card_id: e,
                    impression_session_id: i?.impressionSessionId,
                    location_stack: i?.analyticsLocations,
                }),
                    (c.current = !0);
            }, 250);
            return () => clearTimeout(t);
        }, [i, e]);
}
