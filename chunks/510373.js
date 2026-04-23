"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(71526);
let s = Symbol();
function a(e, t, n) {
    let a = (0, i.A)(e),
        o = (0, r.useRef)(s);
    return o.current === s ? (o.current = t) : n(o.current, t) || ((a.current = e()), (o.current = t)), a.current;
}
