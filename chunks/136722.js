"use strict";
n.d(t, {
    B8: () => T,
    H0: () => p,
    TF: () => N,
    WQ: () => b,
    X8: () => C,
    aI: () => y,
    iu: () => m,
    jB: () => R,
    kg: () => S,
    pG: () => O,
    pb: () => E,
    zy: () => v,
});
var r = n(824120),
    i = n.n(r);
let a = 64,
    s = 16,
    o = 4;
function l() {
    try {
        return !0;
    } catch (e) {
        return !1;
    }
}
function u(e, t, n) {
    let r = 0;
    for (let i = 0; i < n; i++) {
        let n = e[t + i];
        if (void 0 === n) break;
        r += n * 16 ** i;
    }
    return r;
}
function c(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = Number(e[n]);
        for (let e = 0; r || e < t.length; e++) (r += 10 * (t[e] || 0)), (t[e] = r % 16), (r = (r - t[e]) / 16);
    }
    return t;
}
function d(e) {
    let t = c(e),
        n = Array(o);
    for (let e = 0; e < o; e++) n[o - 1 - e] = u(t, e * o, o);
    return n;
}
class _ {
    parts;
    str;
    static fromString(e) {
        return new _(d(e), e);
    }
    static fromBit(e) {
        let t = Array(o),
            n = Math.floor(e / s);
        for (let r = 0; r < o; r++) t[o - 1 - r] = r === n ? 1 << (e - n * s) : 0;
        return new _(t);
    }
    static asUintN(e, t) {
        let { parts: n } = t,
            r = 0,
            i = 0;
        for (; i < e && i < n.length * s; ) {
            let t = Math.min(e - i, s),
                a = (1 << t) - 1,
                o = n.length - Math.floor(i / s) - 1;
            (r |= (n[o] & a) << i), (i += t);
        }
        return r;
    }
    constructor(e, t) {
        (this.parts = e), (this.str = t);
    }
    and(e) {
        let { parts: t } = e;
        return new _(this.parts.map((e, n) => e & t[n]));
    }
    or(e) {
        let { parts: t } = e;
        return new _(this.parts.map((e, n) => e | t[n]));
    }
    xor(e) {
        let { parts: t } = e;
        return new _(this.parts.map((e, n) => e ^ t[n]));
    }
    not() {
        return new _(this.parts.map((e) => ~e));
    }
    equals(e) {
        let { parts: t } = e;
        return this.parts.every((e, n) => e === t[n]);
    }
    toString() {
        if (null != this.str) return this.str;
        let e = Array(a / 4);
        return (
            this.parts.forEach((t, n) => {
                let r = c(t.toString());
                for (let t = 0; t < 4; t++) e[t + 4 * n] = r[3 - t] || 0;
            }),
            (this.str = i().fromArray(e, 16).toString())
        );
    }
    toJSON() {
        return this.toString();
    }
}
let f = l();
f &&
    null == BigInt.prototype.toJSON &&
    (BigInt.prototype.toJSON = function () {
        return this.toString();
    });
let p = f
        ? function (e) {
              return "bigint" == typeof e;
          }
        : function (e) {
              return e instanceof _;
          },
    h = {},
    m = f
        ? function (e) {
              return BigInt(e);
          }
        : function (e) {
              return e instanceof _
                  ? e
                  : ("number" == typeof e && (e = e.toString()), null != h[e] || (h[e] = _.fromString(e)), h[e]);
          },
    g = m(0),
    E = f
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
              return e & t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
              return e.and(t);
          },
    A = f
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
              return e | t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
              return e.or(t);
          },
    I = f
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
              return e ^ t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
              return e.xor(t);
          },
    T = f
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g;
              return ~e;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g;
              return e.not();
          },
    y = f
        ? function (e, t) {
              return e === t;
          }
        : function (e, t) {
              return null == e || null == t ? e == t : e.equals(t);
          };
function S() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let r = t[0];
    for (let e = 1; e < t.length; e++) r = A(r, t[e]);
    return r;
}
function v(e, t) {
    return y(E(e, t), t);
}
function C(e, t) {
    return !y(E(e, t), g);
}
function b(e, t) {
    return t === g ? e : A(e, t);
}
function N(e, t) {
    return t === g ? e : I(e, E(e, t));
}
let R = f
        ? function (e) {
              return BigInt(1) << BigInt(e);
          }
        : function (e) {
              return _.fromBit(e);
          },
    O = f
        ? function (e, t) {
              return Number(BigInt.asUintN(e, t));
          }
        : function (e, t) {
              return _.asUintN(e, t);
          };
