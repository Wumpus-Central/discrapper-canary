"use strict";
n.d(t, { A: () => o });
var r = n(123245),
    a = n(299964);
function o(e, t) {
    if ("object" != (0, r.A)(e) || !e) return e;
    var n = e[a];
    if (void 0 !== n) {
        var o = n.call(e, t || "default");
        if ("object" != (0, r.A)(o)) return o;
        throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
}
