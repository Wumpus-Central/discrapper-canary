"use strict";
function r(e, t) {
    return 0 !== e.length && (e[Math.floor(t / 8)] & (1 << (t % 8))) != 0;
}
function i(e, t) {
    let n = Math.floor(t / 8);
    if (e.length <= n) {
        let t = new Uint8Array(n + 1);
        t.set(e, 0), (e = t);
    }
    return (e[n] |= 1 << (t % 8)), e;
}
function s(e, t) {
    if (r(e, t)) {
        let n = Math.floor(t / 8),
            r = t % 8;
        e[n] &= ~(1 << r);
    }
    return e;
}
function a(e) {
    return e instanceof Uint8Array;
}
function o(e) {
    return null != e && "object" == typeof e && "uint8array" === e.__tag__;
}
n.d(t, { I: () => o, Vf: () => i, We: () => s, c0: () => r, mg: () => a }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
