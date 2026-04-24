"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(71526);
let a = Symbol();
function l(e, t, n) {
    let l = (0, i.A)(e),
        s = (0, r.useRef)(a);
    return s.current === a ? (s.current = t) : n(s.current, t) || ((l.current = e()), (s.current = t)), l.current;
}
