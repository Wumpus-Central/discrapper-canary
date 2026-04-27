"use strict";
r.d(t, { A: () => l });
var n = r(64700),
    i = r(71526);
let a = Symbol();
function l(e, t, r) {
    let l = (0, i.A)(e),
        s = (0, n.useRef)(a);
    return s.current === a ? (s.current = t) : r(s.current, t) || ((l.current = e()), (s.current = t)), l.current;
}
