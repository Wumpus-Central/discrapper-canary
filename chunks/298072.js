"use strict";
a.d(t, { Q: () => o, n: () => d });
var r = a(942381),
    l = a(265690),
    n = a(312852),
    i = a(623373);
let s = (0, l.h)(() => ({ selectionStates: new Map() }), r.x),
    o = (e) => {
        let t = (0, n.K)(e),
            a = s((t) =>
                null != e && (0, i.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null,
            );
        return null != a ? Math.max(0, a) : t;
    },
    d = (e, t) => {
        s.setState((a) => {
            let r = a.selectionStates.get(e.storeListingId);
            return r?.selectedVariantIndex === t
                ? a
                : { selectionStates: new Map(a.selectionStates).set(e.storeListingId, { selectedVariantIndex: t }) };
        });
    };
