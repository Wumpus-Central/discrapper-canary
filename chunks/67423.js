n.d(t, {
    B_: () => p,
    Lm: () => c,
    Ol: () => u,
    P4: () => d,
    Tk: () => m,
    cO: () => f,
    cj: () => a,
    qi: () => h,
    qu: () => _
}),
    n(301563),
    n(411104);
var r = n(654861),
    i = n.n(r);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let a = 1420070400000,
    s = 4095,
    l = 22;
function c(e) {
    return Math.floor(Number(e) / 2 ** l) + a;
}
function u(e) {
    let t = e - a;
    return t <= 0 ? '0' : i()(t).shiftLeft(l).toString();
}
function d(e, t) {
    let n = e - a;
    return i()(n <= 0 ? 0 : n)
        .shiftLeft(l)
        .add(t.next())
        .toString();
}
function f(e) {
    return u(c(e) - 1);
}
function p(e) {
    return Date.now() - c(e);
}
function _(e, t) {
    return e === t ? 0 : null == t ? 1 : null == e ? -1 : e.length > t.length ? 1 : e.length < t.length ? -1 : e > t ? 1 : -1;
}
function h(e) {
    if (null == e || !/^\d{17,19}$/.test(e)) return !1;
    try {
        return c(e) >= a;
    } catch (e) {
        return !1;
    }
}
class m {
    next() {
        if (this.seq > s) throw Error('Snowflake sequence number overflow: '.concat(this.seq));
        return this.seq++;
    }
    reset() {
        this.seq = 0;
    }
    constructor() {
        o(this, 'seq', void 0), (this.seq = 0);
    }
}
