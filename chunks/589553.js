"use strict";
n.d(t, { A: () => a });
var i = n(439818),
    r = n(696016);
function a(e, t) {
    let n = (0, i.A)((0, r.cM)(e.createdAt)),
        a = (0, i.A)(null != e.name && "" !== e.name ? e.name : n),
        s = "" !== a ? a : n;
    return `${s}.${t}`;
}
