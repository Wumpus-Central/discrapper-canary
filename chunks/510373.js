"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    a = n(71526);
let i = Symbol();
function l(e, t, n) {
    let l = (0, a.A)(e),
        s = (0, r.useRef)(i);
    return s.current === i ? (s.current = t) : n(s.current, t) || ((l.current = e()), (s.current = t)), l.current;
}
