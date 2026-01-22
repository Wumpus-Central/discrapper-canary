n.d(t, {
    KW: () => _,
    M0: () => d,
    Nl: () => m,
    QQ: () => f,
    UD: () => h,
    Uk: () => p,
    ZY: () => s,
    gg: () => g,
    uL: () => c,
    z: () => u,
}),
    n(747238),
    n(65821);
var r = n(824120),
    i = n.n(r);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let s = 14200704e5,
    o = 4095,
    l = 22;

function c(e) {
    return Math.floor(Number(e) / 2 ** l) + s;
}

function u(e) {
    let t = e - s;
    return t <= 0 ? "0" : i()(t).shiftLeft(l).toString();
}

function d(e, t) {
    let n = e - s;
    return i()(n <= 0 ? 0 : n)
        .shiftLeft(l)
        .add(t.next())
        .toString();
}

function f(e) {
    return u(c(e) - 1);
}

function p(e) {
    return u(c(e) + 1);
}

function _(e) {
    return Date.now() - c(e);
}

function h(e, t) {
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

function m(e) {
    if (null == e || !/^\d{17,19}$/.test(e)) return !1;
    try {
        return c(e) >= s;
    } catch (e) {
        return !1;
    }
}
class g {
    next() {
        if (this.seq > o) throw Error("Snowflake sequence number overflow: ".concat(this.seq));
        return this.seq++;
    }
    willOverflowNext() {
        return this.seq > o;
    }
    reset() {
        this.seq = 0;
    }
    constructor() {
        a(this, "seq", void 0), (this.seq = 0);
    }
}
