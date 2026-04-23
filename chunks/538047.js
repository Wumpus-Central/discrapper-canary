"use strict";
n.d(t, { y: () => a });
var r = n(959462),
    i = n(3388),
    s = n(64700);
function a(e) {
    let [t, n] = (0, s.useState)(e),
        a = (0, s.useRef)(null),
        o = (0, r.J)(() => {
            if (!a.current) return;
            let e = a.current.next();
            if (e.done) {
                a.current = null;
                return;
            }
            t === e.value ? o() : n(e.value);
        });
    (0, i.N)(() => {
        a.current && o();
    });
    let l = (0, r.J)((e) => {
        (a.current = e(t)), o();
    });
    return [t, l];
}
