"use strict";
n.d(e, { my: () => o });
var i = n(780755),
    r = n(272469);
function o(t, e, n) {
    try {
        Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
    } catch (n) {
        i.T && r.vF.log(`Failed to add non-enumerable property "${e}" to object`, t);
    }
}
