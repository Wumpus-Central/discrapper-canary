"use strict";
n.d(t, { HV: () => s, WQ: () => r, lK: () => a }), n(321073);
let i = [];
function r(e) {
    for (i.push(e); i.length > 10; ) i.shift();
}
function a() {
    return i.join(" -> ");
}
function s() {
    return i.length > 0 ? i[i.length - 1] : null;
}
