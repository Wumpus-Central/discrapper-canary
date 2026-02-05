"use strict";
n.d(t, { Q: () => l, n: () => u });
var r = n(942381),
    i = n(265690),
    a = n(312852),
    s = n(623373);
let o = (0, i.h)(() => ({ selectionStates: new Map() }), r.x),
    l = (e) => {
        let t = (0, a.K)(e),
            n = o((t) =>
                null != e && (0, s.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null,
            );
        return null != n ? Math.max(0, n) : t;
    },
    u = (e, t) => {
        o.setState((n) => {
            let r = n.selectionStates.get(e.storeListingId);
            return r?.selectedVariantIndex === t
                ? n
                : { selectionStates: new Map(n.selectionStates).set(e.storeListingId, { selectedVariantIndex: t }) };
        });
    };
