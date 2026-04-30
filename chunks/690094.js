"use strict";
n.d(t, { my: () => s });
var i = n(780755),
    r = n(272469);
function s(e, t, n) {
    try {
        Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
    } catch (n) {
        i.T && r.vF.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
}
