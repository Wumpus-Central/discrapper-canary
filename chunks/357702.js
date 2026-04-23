"use strict";
r.d(t, { A: () => a });
var n = r(688525),
    o = 1 / 0;
let a = function (e) {
    if ("string" == typeof e || (0, n.A)(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -o ? "-0" : t;
};
