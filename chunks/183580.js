"use strict";
n.d(t, { q: () => i });
let r = new WeakMap();
function i(e, t) {
    let n = r.get(e);
    n || ((n = new Set(e)), r.set(e, n));
    let i = t;
    for (;;) {
        if (n.has(i)) return i;
        let e = i.lastIndexOf("-");
        if (!~e) return;
        e >= 2 && "-" === i[e - 2] && (e -= 2), (i = i.slice(0, e));
    }
}
