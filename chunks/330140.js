"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(161591);
let s = [];
function a(e, t) {
    let n = (0, r.useRef)(),
        a = (0, r.useRef)(s);
    return (
        a.current === s
            ? ((n.current = e()), (a.current = t))
            : (0, i.A)(t, a.current) || ((n.current = e()), (a.current = t)),
        n.current
    );
}
