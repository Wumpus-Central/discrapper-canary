"use strict";
n.d(t, {
    B8: () => h,
    H0: () => o,
    TF: () => g,
    WQ: () => m,
    X8: () => T,
    aI: () => I,
    iu: () => c,
    jB: () => S,
    kg: () => f,
    pG: () => N,
    pb: () => _,
    vI: () => C,
    zy: () => p,
});
var i = n(824120),
    r = n.n(i);
function a(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let i = Number(e[n]);
        for (let e = 0; i || e < t.length; e++) (i += 10 * (t[e] || 0)), (t[e] = i % 16), (i = (i - t[e]) / 16);
    }
    return t;
}
class s {
    parts;
    str;
    static fromString(e) {
        return new s(
            (function (e) {
                let t = a(e),
                    n = [, , , ,];
                for (let e = 0; e < 4; e++)
                    n[3 - e] = (function (e, t) {
                        let n = 0;
                        for (let i = 0; i < 4; i++) {
                            let r = e[t + i];
                            if (void 0 === r) break;
                            n += r * 16 ** i;
                        }
                        return n;
                    })(t, 4 * e);
                return n;
            })(e),
            e,
        );
    }
    static fromBit(e) {
        let t = [, , , ,],
            n = Math.floor(e / 16);
        for (let i = 0; i < 4; i++) t[3 - i] = i === n ? 1 << (e - 16 * n) : 0;
        return new s(t);
    }
    static asUintN(e, t) {
        let { parts: n } = t,
            i = 0,
            r = 0;
        for (; r < e && r < 16 * n.length; ) {
            let t = Math.min(e - r, 16),
                a = (1 << t) - 1,
                s = n.length - Math.floor(r / 16) - 1;
            (i |= (n[s] & a) << r), (r += t);
        }
        return i;
    }
    constructor(e, t) {
        (this.parts = e), (this.str = t);
    }
    and(e) {
        let { parts: t } = e;
        return new s(this.parts.map((e, n) => e & t[n]));
    }
    or(e) {
        let { parts: t } = e;
        return new s(this.parts.map((e, n) => e | t[n]));
    }
    xor(e) {
        let { parts: t } = e;
        return new s(this.parts.map((e, n) => e ^ t[n]));
    }
    not() {
        return new s(this.parts.map((e) => ~e));
    }
    equals(e) {
        let { parts: t } = e;
        return this.parts.every((e, n) => e === t[n]);
    }
    toString() {
        if (null != this.str) return this.str;
        let e = Array(16);
        return (
            this.parts.forEach((t, n) => {
                let i = a(t.toString());
                for (let t = 0; t < 4; t++) e[t + 4 * n] = i[3 - t] || 0;
            }),
            (this.str = r().fromArray(e, 16).toString())
        );
    }
    toJSON() {
        return this.toString();
    }
}
let l = (function () {
    try {
        return !0;
    } catch (e) {
        return !1;
    }
})();
l &&
    null == BigInt.prototype.toJSON &&
    (BigInt.prototype.toJSON = function () {
        return this.toString();
    });
let o = l
        ? function (e) {
              return "bigint" == typeof e;
          }
        : function (e) {
              return e instanceof s;
          },
    d = {},
    c = l
        ? function (e) {
              return BigInt(e);
          }
        : function (e) {
              return e instanceof s
                  ? e
                  : ("number" == typeof e && (e = e.toString()), null != d[e] || (d[e] = s.fromString(e)), d[e]);
          },
    u = c(0),
    _ = l
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
              return e & t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
              return e.and(t);
          },
    E = l
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
              return e | t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
              return e.or(t);
          },
    A = l
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
              return e ^ t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
              return e.xor(t);
          },
    h = l
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
              return ~e;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
              return e.not();
          },
    I = l
        ? function (e, t) {
              return e === t;
          }
        : function (e, t) {
              return null == e || null == t ? e == t : e.equals(t);
          };
function f() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let i = t[0];
    for (let e = 1; e < t.length; e++) i = E(i, t[e]);
    return i;
}
function p(e, t) {
    return I(_(e, t), t);
}
function T(e, t) {
    return !I(_(e, t), u);
}
function m(e, t) {
    return t === u ? e : E(e, t);
}
function g(e, t) {
    return t === u ? e : A(e, _(e, t));
}
let S = l
        ? function (e) {
              return BigInt(1) << BigInt(e);
          }
        : function (e) {
              return s.fromBit(e);
          },
    N = l
        ? function (e, t) {
              return Number(BigInt.asUintN(e, t));
          }
        : function (e, t) {
              return s.asUintN(e, t);
          };
function C(e) {
    return S(e);
}
