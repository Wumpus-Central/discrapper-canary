"use strict";
n.d(t, { gq: () => s, rQ: () => a, tM: () => r });
let i = {};
function r(e, t) {
    return i[`${e}:${t}`];
}
function s(e, t, n) {
    let r = `${e}:${t}`;
    i[r] = { ...i[r], ...n };
}
function a(e) {
    for (let t in i) {
        let [n, r] = (function (e) {
            let [t, n] = e.split(":");
            return [t, n];
        })(t);
        e(n, r, i[t]);
    }
    i = {};
}
