"use strict";
n.d(t, {
    KW: () => f,
    M0: () => c,
    Nl: () => h,
    QQ: () => d,
    UD: () => p,
    Uk: () => _,
    ZY: () => a,
    gg: () => m,
    uL: () => l,
    z: () => u,
});
var r = n(824120),
    i = n.n(r);
let a = 14200704e5,
    s = 4095,
    o = 22;
function l(e) {
    return Math.floor(Number(e) / 2 ** o) + a;
}
function u(e) {
    let t = e - a;
    return t <= 0 ? "0" : i()(t).shiftLeft(o).toString();
}
function c(e, t) {
    let n = e - a;
    return i()(n <= 0 ? 0 : n)
        .shiftLeft(o)
        .add(t.next())
        .toString();
}
function d(e) {
    return u(l(e) - 1);
}
function _(e) {
    return u(l(e) + 1);
}
function f(e) {
    return Date.now() - l(e);
}
function p(e, t) {
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
function h(e) {
    if (null == e || !/^\d{17,19}$/.test(e)) return !1;
    try {
        return l(e) >= a;
    } catch {
        return !1;
    }
}
class m {
    seq;
    constructor() {
        this.seq = 0;
    }
    next() {
        if (this.seq > s) throw Error(`Snowflake sequence number overflow: ${this.seq}`);
        return this.seq++;
    }
    willOverflowNext() {
        return this.seq > s;
    }
    reset() {
        this.seq = 0;
    }
}
