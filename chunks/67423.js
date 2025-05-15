n.d(t, {
    B_: () => _,
    Lm: () => c,
    Ol: () => u,
    P4: () => d,
    Tk: () => m,
    cO: () => f,
    cj: () => o,
    qi: () => h,
    qu: () => p
}),
    n(35282),
    n(415506);
var r = n(654861),
    i = n.n(r);
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
let o = 1420070400000,
    s = 4095,
    l = 22;
function c(e) {
    return Math.floor(Number(e) / 2 ** l) + o;
}
function u(e) {
    let t = e - o;
    return t <= 0 ? '0' : i()(t).shiftLeft(l).toString();
}
function d(e, t) {
    let n = e - o;
    return i()(n <= 0 ? 0 : n)
        .shiftLeft(l)
        .add(t.next())
        .toString();
}
function f(e) {
    return u(c(e) - 1);
}
function _(e) {
    return Date.now() - c(e);
}
function p(e, t) {
    return e === t ? 0 : null == t ? 1 : null == e ? -1 : e.length > t.length ? 1 : e.length < t.length ? -1 : e > t ? 1 : -1;
}
function h(e) {
    if (null == e || !/^\d{17,19}$/.test(e)) return !1;
    try {
        return c(e) >= o;
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
        a(this, 'seq', void 0), (this.seq = 0);
    }
}
