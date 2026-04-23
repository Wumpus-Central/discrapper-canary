"use strict";
function r(e, t) {
    if (e.length < 2) return [];
    let n = [],
        r = e[0];
    for (let i = 1; i < e.length; i++) {
        let s = e[i];
        n.push(t(r, s)), (r = s);
    }
    return n;
}
n.d(t, { A: () => r }), n(321073);
