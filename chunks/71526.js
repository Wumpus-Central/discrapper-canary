"use strict";
n.d(t, { A: () => i });
var r = n(64700);
function i(e) {
    let t = (0, r.useRef)(!1),
        n = (0, r.useRef)(null);
    return t.current || ((t.current = !0), (n.current = e())), n;
}
