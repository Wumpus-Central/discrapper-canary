"use strict";
s.d(e, { my: () => n });
var r = s(780755),
    i = s(272469);
function n(t, e, s) {
    try {
        Object.defineProperty(t, e, { value: s, writable: !0, configurable: !0 });
    } catch (s) {
        r.T && i.vF.log(`Failed to add non-enumerable property "${e}" to object`, t);
    }
}
