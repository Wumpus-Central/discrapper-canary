"use strict";
r.d(t, { A: () => s });
var n = r(477891),
    o = Object.prototype,
    a = o.hasOwnProperty,
    i = o.toString,
    l = n.A ? n.A.toStringTag : void 0;
let s = function (e) {
    var t = a.call(e, l),
        r = e[l];
    try {
        e[l] = void 0;
        var n = !0;
    } catch (e) {}
    var o = i.call(e);
    return n && (t ? (e[l] = r) : delete e[l]), o;
};
