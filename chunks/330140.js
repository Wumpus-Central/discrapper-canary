"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(161591);
let a = [];
function s(e, t) {
    let n = (0, r.useRef)(),
        s = (0, r.useRef)(a);
    return (
        s.current === a
            ? ((n.current = e()), (s.current = t))
            : (0, i.A)(t, s.current) || ((n.current = e()), (s.current = t)),
        n.current
    );
}
