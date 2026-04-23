"use strict";
n.d(t, {
    KW: () => d,
    M0: () => l,
    Nl: () => f,
    QQ: () => u,
    UD: () => _,
    Uk: () => c,
    ZY: () => s,
    gg: () => p,
    uL: () => a,
    z: () => o,
});
var r = n(824120),
    i = n.n(r);
let s = 14200704e5;
function a(e) {
    return Math.floor(Number(e) / 4194304) + s;
}
function o(e) {
    let t = e - s;
    return t <= 0 ? "0" : i()(t).shiftLeft(22).toString();
}
function l(e, t) {
    let n = e - s;
    return i()(n <= 0 ? 0 : n)
        .shiftLeft(22)
        .add(t.next())
        .toString();
}
function u(e) {
    return o(a(e) - 1);
}
function c(e) {
    return o(a(e) + 1);
}
function d(e) {
    return Date.now() - a(e);
}
function _(e, t) {
    return e === t
        ? 0
        : null == t
          ? 1
          : null == e
            ? -1
            : e.length > t.length
              ? 1
              : e.length < t.length
                ? -1
                : e > t
                  ? 1
                  : -1;
}
function f(e) {
    if (null == e || !/^\d{17,19}$/.test(e)) return !1;
    try {
        return a(e) >= s;
    } catch {
        return !1;
    }
}
class p {
    seq;
    constructor() {
        this.seq = 0;
    }
    next() {
        if (this.seq > 4095) throw Error(`Snowflake sequence number overflow: ${this.seq}`);
        return this.seq++;
    }
    willOverflowNext() {
        return this.seq > 4095;
    }
    reset() {
        this.seq = 0;
    }
}
