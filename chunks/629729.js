"use strict";
n.d(t, { A: () => o });
var r = n(123245),
    a = n(552393);
function o(e, t) {
    if (t && ("object" == (0, r.A)(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
    return (0, a.A)(e);
}
