s.d(t, { Q: () => r, n: () => c });
var n = s(942381),
    a = s(265690),
    i = s(312852),
    l = s(623373);
let d = (0, a.h)(() => ({ selectionStates: new Map() }), n.x),
    r = (e) => {
        let t = (0, i.K)(e),
            s = d((t) =>
                null != e && (0, l.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null,
            );
        return null != s ? Math.max(0, s) : t;
    },
    c = (e, t) => {
        d.setState((s) => {
            let n = s.selectionStates.get(e.storeListingId);
            return n?.selectedVariantIndex === t
                ? s
                : { selectionStates: new Map(s.selectionStates).set(e.storeListingId, { selectedVariantIndex: t }) };
        });
    };
