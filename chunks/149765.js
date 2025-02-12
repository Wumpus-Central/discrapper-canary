a.d(e, {
    $e: () => u,
    r0: () => I
}),
    a(309749);
var r = a(654861),
    n = a.n(r);
function _(t, e, a) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = a),
        t
    );
}
function o(t) {
    let e = [];
    for (let a = 0; a < t.length; a++) {
        let r = Number(t[a]);
        for (let t = 0; r || t < e.length; t++) (r += 10 * (e[t] || 0)), (e[t] = r % 16), (r = (r - e[t]) / 16);
    }
    return e;
}
class i {
    static fromString(t) {
        return new i(
            (function (t) {
                let e = o(t),
                    a = [, , , ,];
                for (let t = 0; t < 4; t++)
                    a[3 - t] = (function (t, e, a) {
                        let r = 0;
                        for (let a = 0; a < 4; a++) {
                            let n = t[e + a];
                            if (void 0 === n) break;
                            r += n * 16 ** a;
                        }
                        return r;
                    })(e, 4 * t, 4);
                return a;
            })(t),
            t
        );
    }
    static fromBit(t) {
        let e = [, , , ,],
            a = Math.floor(t / 16);
        for (let r = 0; r < 4; r++) e[3 - r] = r === a ? 1 << (t - 16 * a) : 0;
        return new i(e);
    }
    static asUintN(t, e) {
        let { parts: a } = e,
            r = 0,
            n = 0;
        for (; n < t && n < 16 * a.length; ) {
            let e = Math.min(t - n, 16),
                _ = (1 << e) - 1,
                o = a.length - Math.floor(n / 16) - 1;
            (r |= (a[o] & _) << n), (n += e);
        }
        return r;
    }
    and(t) {
        let { parts: e } = t;
        return new i(this.parts.map((t, a) => t & e[a]));
    }
    or(t) {
        let { parts: e } = t;
        return new i(this.parts.map((t, a) => t | e[a]));
    }
    xor(t) {
        let { parts: e } = t;
        return new i(this.parts.map((t, a) => t ^ e[a]));
    }
    not() {
        return new i(this.parts.map((t) => ~t));
    }
    equals(t) {
        let { parts: e } = t;
        return this.parts.every((t, a) => t === e[a]);
    }
    toString() {
        if (null != this.str) return this.str;
        let t = Array(16);
        return (
            this.parts.forEach((e, a) => {
                let r = o(e.toString());
                for (let e = 0; e < 4; e++) t[e + 4 * a] = r[3 - e] || 0;
            }),
            (this.str = n().fromArray(t, 16).toString())
        );
    }
    toJSON() {
        return this.toString();
    }
    constructor(t, e) {
        _(this, 'parts', void 0), _(this, 'str', void 0), (this.parts = t), (this.str = e);
    }
}
let c = (function () {
    try {
        return !0;
    } catch (t) {
        return !1;
    }
})();
c &&
    null == BigInt.prototype.toJSON &&
    (BigInt.prototype.toJSON = function () {
        return this.toString();
    });
let s = {},
    E = (
        c
            ? function (t) {
                  return BigInt(t);
              }
            : function (t) {
                  return t instanceof i ? t : ('number' == typeof t && (t = t.toString()), null != s[t] || (s[t] = i.fromString(t)), s[t]);
              }
    )(0),
    l = c
        ? function () {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                  e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
              return t | e;
          }
        : function () {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                  e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
              return t.or(e);
          };
function u() {
    for (var t = arguments.length, e = Array(t), a = 0; a < t; a++) e[a] = arguments[a];
    let r = e[0];
    for (let t = 1; t < e.length; t++) r = l(r, e[t]);
    return r;
}
let I = c
    ? function (t) {
          return BigInt(1) << BigInt(t);
      }
    : function (t) {
          return i.fromBit(t);
      };
