"use strict";
n.d(t, { Sr: () => s, Wl: () => a, j$: () => r });
let i = {};
function r(e, t) {
    i[e] = t;
}
function s(e) {
    let t = i[e];
    if (null != t) return delete i[e], t;
}
function a(e) {
    delete i[e];
}
