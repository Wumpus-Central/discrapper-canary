n.d(t, { Q: () => o, n: () => d });
var i = n(942381),
    r = n(265690),
    l = n(312852),
    a = n(623373);
let s = (0, r.h)(() => ({ selectionStates: new Map() }), i.x),
    o = (e) => {
        let t = (0, l.K)(e),
            n = s((t) =>
                null != e && (0, a.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null,
            );
        return null != n ? Math.max(0, n) : t;
    },
    d = (e, t) => {
        s.setState((n) => {
            let i = n.selectionStates.get(e.storeListingId);
            return i?.selectedVariantIndex === t
                ? n
                : { selectionStates: new Map(n.selectionStates).set(e.storeListingId, { selectedVariantIndex: t }) };
        });
    };
