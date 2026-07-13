"use strict";
r.d(t, { n: () => i });
let n = new WeakMap();
function i(e) {
    let t = n.get(e);
    return t || ((t = Object.create(null)), n.set(e, t)), t;
}
