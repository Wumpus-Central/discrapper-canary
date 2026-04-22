"use strict";
n.d(t, { HV: () => a, WQ: () => i, lK: () => s }), n(321073);
let r = [];
function i(e) {
    for (r.push(e); r.length > 10; ) r.shift();
}
function s() {
    return r.join(" -> ");
}
function a() {
    return r.length > 0 ? r[r.length - 1] : null;
}
