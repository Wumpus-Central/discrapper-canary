n.d(t, {
    B_: () => _,
    Lm: () => u,
    Ol: () => c,
    P4: () => d,
    Tk: () => m,
    cO: () => f,
    cj: () => s,
    qi: () => h,
    qu: () => p
}),
    n(411104);
var i = n(654861),
    r = n.n(i);
function a(e, t, n) {
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
let s = 1420070400000,
    o = 4095,
    l = 22;
function u(e) {
    return Math.floor(Number(e) / 2 ** l) + s;
}
function c(e) {
    let t = e - s;
    return t <= 0 ? '0' : r()(t).shiftLeft(l).toString();
}
function d(e, t) {
    let n = e - s;
    return r()(n <= 0 ? 0 : n)
        .shiftLeft(l)
        .add(t.next())
        .toString();
}
function f(e) {
    return c(u(e) - 1);
}
function _(e) {
    return Date.now() - u(e);
}
function p(e, t) {
    return e === t ? 0 : null == t ? 1 : null == e ? -1 : e.length > t.length ? 1 : e.length < t.length ? -1 : e > t ? 1 : -1;
}
function h(e) {
    if (null == e || !/^\d{17,19}$/.test(e)) return !1;
    try {
        return u(e) >= s;
    } catch {
        return !1;
    }
}
class m {
    next() {
        if (this.seq > o) throw Error('Snowflake sequence number overflow: '.concat(this.seq));
        return this.seq++;
    }
    reset() {
        this.seq = 0;
    }
    constructor() {
        a(this, 'seq', void 0), (this.seq = 0);
    }
}
