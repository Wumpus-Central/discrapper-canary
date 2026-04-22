"use strict";
function r(e, t, n) {
    let r = (function (e, t, n) {
        let r = 0,
            i = e.length;
        for (; r < i; ) {
            let s = (r + i) >>> 1;
            0 > n(e[s], t) ? (r = s + 1) : (i = s);
        }
        return r;
    })(e, t, n);
    e.splice(r, 0, t);
}
n.d(t, { Y: () => r });
