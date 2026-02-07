"use strict";
r.d(e, { my: () => s });
var n = r(919015),
    i = r(478681);
function s(t, e, r) {
    try {
        Object.defineProperty(t, e, { value: r, writable: !0, configurable: !0 });
    } catch (r) {
        n.T && i.vF.log(`Failed to add non-enumerable property "${e}" to object`, t);
    }
}
