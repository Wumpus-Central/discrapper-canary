"use strict";
r.d(e, { lu: () => i, zf: () => s });
var n = r(588522);
function i() {
    return Date.now() / 1e3;
}
let s = (function () {
    let { performance: t } = n.O;
    if (!t || !t.now) return i;
    let e = Date.now() - t.now(),
        r = void 0 == t.timeOrigin ? e : t.timeOrigin;
    return () => (r + t.now()) / 1e3;
})();
(() => {
    let { performance: t } = n.O;
    if (!t || !t.now) return;
    let e = t.now(),
        r = Date.now(),
        i = t.timeOrigin ? Math.abs(t.timeOrigin + e - r) : 36e5,
        s = t.timing && t.timing.navigationStart,
        o = "number" == typeof s ? Math.abs(s + e - r) : 36e5;
    if ((i < 36e5 || o < 36e5) && i <= o) return t.timeOrigin;
})();
