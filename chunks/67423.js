r.d(n, {
    B_: function () {
        return _;
    },
    Lm: function () {
        return d;
    },
    Ol: function () {
        return f;
    },
    P4: function () {
        return p;
    },
    Tk: function () {
        return E;
    },
    cO: function () {
        return h;
    },
    cj: function () {
        return l;
    },
    qi: function () {
        return g;
    },
    qu: function () {
        return m;
    }
});
var i = r(411104);
var a = r(654861),
    o = r.n(a);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = 1420070400000,
    u = 4095,
    c = 22;
function d(e) {
    return Math.floor(Number(e) / 2 ** c) + l;
}
function f(e) {
    let n = e - l;
    return n <= 0 ? '0' : o()(n).shiftLeft(c).toString();
}
function p(e, n) {
    let r = e - l;
    return o()(r <= 0 ? 0 : r)
        .shiftLeft(c)
        .add(n.next())
        .toString();
}
function h(e) {
    return f(d(e) - 1);
}
function _(e) {
    return Date.now() - d(e);
}
function m(e, n) {
    return e === n ? 0 : null == n ? 1 : null == e ? -1 : e.length > n.length ? 1 : e.length < n.length ? -1 : e > n ? 1 : -1;
}
function g(e) {
    if (null == e || !/^\d{17,19}$/.test(e)) return !1;
    try {
        return d(e) >= l;
    } catch {
        return !1;
    }
}
class E {
    next() {
        if (this.seq > u) throw Error('Snowflake sequence number overflow: '.concat(this.seq));
        return this.seq++;
    }
    reset() {
        this.seq = 0;
    }
    constructor() {
        s(this, 'seq', void 0), (this.seq = 0);
    }
}
