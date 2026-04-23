"use strict";
n.d(t, { A: () => i });
var r = n(175924);
function i(e) {
    var t = (0, r.A)(e),
        n = t.overflow,
        i = t.overflowX,
        s = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + s + i);
}
