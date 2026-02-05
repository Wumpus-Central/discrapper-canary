"use strict";
r.d(t, { A: () => n });
var a = r(43264);
function n(e, t, r) {
    return (
        (t = (0, a.A)(t)) in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
        e
    );
}
