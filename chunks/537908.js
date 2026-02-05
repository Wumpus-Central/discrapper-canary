"use strict";
n.d(t, { A: () => i });
var r = n(491301);
function i(e, t) {
    if ("object" != (0, r.A)(e) || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var i = n.call(e, t || "default");
        if ("object" != (0, r.A)(i)) return i;
        throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
}
