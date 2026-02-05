"use strict";
n.d(t, { y: () => s });
var r = n(959462),
    i = n(3388),
    a = n(64700);
function s(e) {
    let [t, n] = (0, a.useState)(e),
        s = (0, a.useRef)(null),
        o = (0, r.J)(() => {
            if (!s.current) return;
            let e = s.current.next();
            if (e.done) {
                s.current = null;
                return;
            }
            t === e.value ? o() : n(e.value);
        });
    (0, i.N)(() => {
        s.current && o();
    });
    let l = (0, r.J)((e) => {
        (s.current = e(t)), o();
    });
    return [t, l];
}
