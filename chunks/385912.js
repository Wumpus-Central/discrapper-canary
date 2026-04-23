"use strict";
r.d(t, { A: () => c });
var n = r(204635),
    o = r(912853),
    a = r(5264),
    i = r(776931),
    l = r(702318),
    s = r(625824),
    u = Object.prototype.hasOwnProperty;
let c = function (e, t) {
    var r = (0, a.A)(e),
        c = !r && (0, o.A)(e),
        p = !r && !c && (0, i.A)(e),
        d = !r && !c && !p && (0, s.A)(e),
        f = r || c || p || d,
        h = f ? (0, n.A)(e.length, String) : [],
        b = h.length;
    for (var v in e)
        (t || u.call(e, v)) &&
            !(
                f &&
                ("length" == v ||
                    (p && ("offset" == v || "parent" == v)) ||
                    (d && ("buffer" == v || "byteLength" == v || "byteOffset" == v)) ||
                    (0, l.A)(v, b))
            ) &&
            h.push(v);
    return h;
};
