"use strict";
r.d(t, { q: () => i });
let n = new WeakMap();
function i(e, t) {
    let r = n.get(e);
    r || ((r = new Set(e)), n.set(e, r));
    let i = t;
    for (;;) {
        if (r.has(i)) return i;
        let e = i.lastIndexOf("-");
        if (!~e) return;
        e >= 2 && "-" === i[e - 2] && (e -= 2), (i = i.slice(0, e));
    }
}
