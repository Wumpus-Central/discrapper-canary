"use strict";
r.d(t, { A: () => s });
var n = r(947156),
    o = "object" == typeof exports && exports && !exports.nodeType && exports,
    a = o && "object" == typeof module && module && !module.nodeType && module,
    i = a && a.exports === o ? n.A.Buffer : void 0,
    l = i ? i.allocUnsafe : void 0;
let s = function (e, t) {
    if (t) return e.slice();
    var r = e.length,
        n = l ? l(r) : new e.constructor(r);
    return e.copy(n), n;
};
