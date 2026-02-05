"use strict";
r.d(t, { A: () => n });
var a = r(225191);
function n(e, t) {
    if ("object" != (0, a.A)(e) || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
        var n = r.call(e, t || "default");
        if ("object" != (0, a.A)(n)) return n;
        throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
}
