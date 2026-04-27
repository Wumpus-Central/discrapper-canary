"use strict";
r.d(t, { A: () => s });
var n = r(64700),
    i = r(71526);
let a = Symbol();
function s(e, t, r) {
    let s = (0, i.A)(e),
        l = (0, n.useRef)(a);
    return l.current === a ? (l.current = t) : r(l.current, t) || ((s.current = e()), (l.current = t)), s.current;
}
