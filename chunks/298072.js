n.d(t, { Q: () => d, n: () => r });
var s = n(942381),
    a = n(265690),
    i = n(312852),
    l = n(623373);
let c = (0, a.h)(() => ({ selectionStates: new Map() }), s.x);
function d(e) {
    let t = (0, i.K)(e),
        n = c((t) =>
            null != e && (0, l.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null,
        );
    return null != n ? Math.max(0, n) : t;
}
function r(e, t) {
    c.setState((n) => {
        let s = n.selectionStates.get(e.storeListingId);
        return s?.selectedVariantIndex === t
            ? n
            : { selectionStates: new Map(n.selectionStates).set(e.storeListingId, { selectedVariantIndex: t }) };
    });
}
