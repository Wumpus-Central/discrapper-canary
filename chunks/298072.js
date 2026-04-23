n.d(t, { Q: () => o, n: () => c });
var l = n(942381),
    a = n(265690),
    i = n(312852),
    r = n(623373);
let s = (0, a.h)(() => ({ selectionStates: new Map() }), l.x),
    o = (e) => {
        let t = (0, i.K)(e),
            n = s((t) =>
                null != e && (0, r.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null,
            );
        return null != n ? Math.max(0, n) : t;
    },
    c = (e, t) => {
        s.setState((n) => {
            let l = n.selectionStates.get(e.storeListingId);
            return l?.selectedVariantIndex === t
                ? n
                : { selectionStates: new Map(n.selectionStates).set(e.storeListingId, { selectedVariantIndex: t }) };
        });
    };
