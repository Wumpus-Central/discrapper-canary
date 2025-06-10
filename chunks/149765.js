n.d(t, {
    $e: () => T,
    Bw: () => h,
    Db: () => A,
    IH: () => N,
    Od: () => C,
    U_: () => v,
    e$: () => S,
    fS: () => I,
    hX: () => b,
    r0: () => R,
    ug: () => P,
    vB: () => g
}),
    n(368063);
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
let o = 64,
    s = 16,
    l = 4;
function c() {
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
function d(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = Number(e[n]);
        for (let e = 0; r || e < t.length; e++) (r += 10 * (t[e] || 0)), (t[e] = r % 16), (r = (r - t[e]) / 16);
    }
    return t;
}
function f(e) {
    let t = d(e),
        n = Array(l);
    for (let e = 0; e < l; e++) n[l - 1 - e] = u(t, e * l, l);
    return n;
}
class _ {
    static fromString(e) {
        return new _(f(e), e);
    }
    static fromBit(e) {
        let t = Array(l),
            n = Math.floor(e / s);
        for (let r = 0; r < l; r++) t[l - 1 - r] = r === n ? 1 << (e - n * s) : 0;
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
        let e = Array(o / 4);
        return (
            this.parts.forEach((t, n) => {
                let r = d(t.toString());
                for (let t = 0; t < 4; t++) e[t + 4 * n] = r[3 - t] || 0;
            }),
            (this.str = i().fromArray(e, 16).toString())
        );
    }
    toJSON() {
        return this.toString();
    }
    constructor(e, t) {
        a(this, 'parts', void 0), a(this, 'str', void 0), (this.parts = e), (this.str = t);
    }
}
let p = c();
p &&
    null == BigInt.prototype.toJSON &&
    (BigInt.prototype.toJSON = function () {
        return this.toString();
    });
let h = p
        ? function (e) {
              return 'bigint' == typeof e;
          }
        : function (e) {
              return e instanceof _;
          },
    m = {},
    g = p
        ? function (e) {
              return BigInt(e);
          }
        : function (e) {
              return e instanceof _ ? e : ('number' == typeof e && (e = e.toString()), null != m[e] || (m[e] = _.fromString(e)), m[e]);
          },
    E = g(0),
    b = p
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
              return e & t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
              return e.and(t);
          },
    y = p
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
              return e | t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
              return e.or(t);
          },
    O = p
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
              return e ^ t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
              return e.xor(t);
          },
    v = p
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E;
              return ~e;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E;
              return e.not();
          },
    I = p
        ? function (e, t) {
              return e === t;
          }
        : function (e, t) {
              return null == e || null == t ? e == t : e.equals(t);
          };
function T() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let r = t[0];
    for (let e = 1; e < t.length; e++) r = y(r, t[e]);
    return r;
}
function S(e, t) {
    return I(b(e, t), t);
}
function A(e, t) {
    return !I(b(e, t), E);
}
function N(e, t) {
    return t === E ? e : y(e, t);
}
function C(e, t) {
    return t === E ? e : O(e, b(e, t));
}
let R = p
        ? function (e) {
              return BigInt(1) << BigInt(e);
          }
        : function (e) {
              return _.fromBit(e);
          },
    P = p
        ? function (e, t) {
              return Number(BigInt.asUintN(e, t));
          }
        : function (e, t) {
              return _.asUintN(e, t);
          };
