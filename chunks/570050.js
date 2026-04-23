t.d(i, { J: () => s });
var r = t(64700),
    a = t(954571),
    n = t(299679),
    o = t(652215);
function s(e, i) {
    let t = (0, n.Ar)(),
        s = r.useRef(!1),
        l = r.useRef(t);
    r.useEffect(() => {
        l.current = t;
    }, [t]),
        r.useEffect(() => {
            if (!e) {
                s.current = !1;
                return;
            }
            if (s.current) return;
            let t = setTimeout(() => {
                let e = l.current;
                a.default.track(o.HAw.WISHLIST_ITEM_HOVERED, {
                    sku_id: e?.skuId,
                    wishlist_id: e?.wishlistId,
                    wishlist_owner_id: e?.wishlistOwnerId,
                    surface: e?.surface,
                    position_in_section: e?.positionInSection,
                    item_source: e?.itemSource,
                    product_line: e?.productLine,
                    card_id: i,
                    impression_session_id: e?.impressionSessionId,
                    location_stack: e?.analyticsLocations,
                }),
                    (s.current = !0);
            }, 250);
            return () => clearTimeout(t);
        }, [e, i]);
}
