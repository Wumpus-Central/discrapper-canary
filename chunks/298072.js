"use strict";
n.d(t, { Q: () => c, n: () => o });
var a = n(942381),
    i = n(265690),
    l = n(312852),
    r = n(623373);
let s = (0, i.h)(() => ({ selectionStates: new Map() }), a.x),
    c = (e) => {
        let t = (0, l.K)(e),
            n = s((t) =>
                null != e && (0, r.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null,
            );
        return null != n ? Math.max(0, n) : t;
    },
    o = (e, t) => {
        s.setState((n) => {
            let a = n.selectionStates.get(e.storeListingId);
            return a?.selectedVariantIndex === t
                ? n
                : { selectionStates: new Map(n.selectionStates).set(e.storeListingId, { selectedVariantIndex: t }) };
        });
    };
