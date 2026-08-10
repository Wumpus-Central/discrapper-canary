"use strict";
n.d(t, { Y: () => r, l: () => a });
let i = new WeakMap();
function r(e, t) {
    i.set(e, t);
}
function a(e) {
    return i.get(e) ?? null;
}
