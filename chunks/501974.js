"use strict";
n.d(t, { n: () => i });
let r = new WeakMap();
function i(e) {
    let t = r.get(e);
    return t || ((t = Object.create(null)), r.set(e, t)), t;
}
