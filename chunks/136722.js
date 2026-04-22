"use strict";
n.d(t, {
    B8: () => h,
    H0: () => l,
    TF: () => T,
    WQ: () => I,
    X8: () => A,
    aI: () => p,
    iu: () => d,
    jB: () => S,
    kg: () => m,
    pG: () => y,
    pb: () => _,
    zy: () => g,
});
var r = n(824120),
    i = n.n(r);
function s(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = Number(e[n]);
        for (let e = 0; r || e < t.length; e++) (r += 10 * (t[e] || 0)), (t[e] = r % 16), (r = (r - t[e]) / 16);
    }
    return t;
}
class a {
    parts;
    str;
    static fromString(e) {
        return new a(
            (function (e) {
                let t = s(e),
                    n = [, , , ,];
                for (let e = 0; e < 4; e++)
                    n[3 - e] = (function (e, t) {
                        let n = 0;
                        for (let r = 0; r < 4; r++) {
                            let i = e[t + r];
                            if (void 0 === i) break;
                            n += i * 16 ** r;
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
        for (let r = 0; r < 4; r++) t[3 - r] = r === n ? 1 << (e - 16 * n) : 0;
        return new a(t);
    }
    static asUintN(e, t) {
        let { parts: n } = t,
            r = 0,
            i = 0;
        for (; i < e && i < 16 * n.length; ) {
            let t = Math.min(e - i, 16),
                s = (1 << t) - 1,
                a = n.length - Math.floor(i / 16) - 1;
            (r |= (n[a] & s) << i), (i += t);
        }
        return r;
    }
    constructor(e, t) {
        (this.parts = e), (this.str = t);
    }
    and(e) {
        let { parts: t } = e;
        return new a(this.parts.map((e, n) => e & t[n]));
    }
    or(e) {
        let { parts: t } = e;
        return new a(this.parts.map((e, n) => e | t[n]));
    }
    xor(e) {
        let { parts: t } = e;
        return new a(this.parts.map((e, n) => e ^ t[n]));
    }
    not() {
        return new a(this.parts.map((e) => ~e));
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
                let r = s(t.toString());
                for (let t = 0; t < 4; t++) e[t + 4 * n] = r[3 - t] || 0;
            }),
            (this.str = i().fromArray(e, 16).toString())
        );
    }
    toJSON() {
        return this.toString();
    }
}
let o = (function () {
    try {
        return !0;
    } catch (e) {
        return !1;
    }
})();
o &&
    null == BigInt.prototype.toJSON &&
    (BigInt.prototype.toJSON = function () {
        return this.toString();
    });
let l = o
        ? function (e) {
              return "bigint" == typeof e;
          }
        : function (e) {
              return e instanceof a;
          },
    u = {},
    d = o
        ? function (e) {
              return BigInt(e);
          }
        : function (e) {
              return e instanceof a
                  ? e
                  : ("number" == typeof e && (e = e.toString()), null != u[e] || (u[e] = a.fromString(e)), u[e]);
          },
    c = d(0),
    _ = o
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
              return e & t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
              return e.and(t);
          },
    f = o
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
              return e | t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
              return e.or(t);
          },
    E = o
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
              return e ^ t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
              return e.xor(t);
          },
    h = o
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
              return ~e;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
              return e.not();
          },
    p = o
        ? function (e, t) {
              return e === t;
          }
        : function (e, t) {
              return null == e || null == t ? e == t : e.equals(t);
          };
function m() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let r = t[0];
    for (let e = 1; e < t.length; e++) r = f(r, t[e]);
    return r;
}
function g(e, t) {
    return p(_(e, t), t);
}
function A(e, t) {
    return !p(_(e, t), c);
}
function I(e, t) {
    return t === c ? e : f(e, t);
}
function T(e, t) {
    return t === c ? e : E(e, _(e, t));
}
let S = o
        ? function (e) {
              return BigInt(1) << BigInt(e);
          }
        : function (e) {
              return a.fromBit(e);
          },
    y = o
        ? function (e, t) {
              return Number(BigInt.asUintN(e, t));
          }
        : function (e, t) {
              return a.asUintN(e, t);
          };
