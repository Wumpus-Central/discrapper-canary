r.d(n, {
    M: function () {
        return d;
    },
    p: function () {
        return c;
    }
});
var i = r(825842);
let a = (function e() {
    let e = new DataView(new ArrayBuffer(8));
    return void 0 !== globalThis.BigInt && 'function' == typeof e.getBigInt64 && 'function' == typeof e.getBigUint64 && 'function' == typeof e.setBigInt64 && 'function' == typeof e.setBigUint64
        ? {
              MIN: BigInt('-9223372036854775808'),
              MAX: BigInt('9223372036854775807'),
              UMIN: BigInt('0'),
              UMAX: BigInt('18446744073709551615'),
              C: BigInt,
              V: e
          }
        : void 0;
})();
function o(e) {
    if (!e) throw Error('BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support');
}
let s = /^-?[0-9]+$/,
    l = 4294967296;
class u {
    constructor(e, n) {
        (this.lo = 0 | e), (this.hi = 0 | n);
    }
    isZero() {
        return 0 == this.lo && 0 == this.hi;
    }
    toNumber() {
        let e = this.hi * l + (this.lo >>> 0);
        if (!Number.isSafeInteger(e)) throw Error('cannot convert to safe number');
        return e;
    }
}
class c extends u {
    static from(e) {
        if (a)
            switch (typeof e) {
                case 'string':
                    if ('0' == e) return this.ZERO;
                    if ('' == e) throw Error('string is no integer');
                    e = a.C(e);
                case 'number':
                    if (0 === e) return this.ZERO;
                    e = a.C(e);
                case 'bigint':
                    if (!e) return this.ZERO;
                    if (e < a.UMIN) throw Error('signed value for ulong');
                    if (e > a.UMAX) throw Error('ulong too large');
                    return a.V.setBigUint64(0, e, !0), new c(a.V.getInt32(0, !0), a.V.getInt32(4, !0));
            }
        else
            switch (typeof e) {
                case 'string':
                    if ('0' == e) return this.ZERO;
                    if (((e = e.trim()), !s.test(e))) throw Error('string is no integer');
                    let [n, r, o] = (0, i.IL)(e);
                    if (n) throw Error('signed value');
                    return new c(r, o);
                case 'number':
                    if (0 == e) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw Error('number is no integer');
                    if (e < 0) throw Error('signed value for ulong');
                    return new c(e, e / l);
            }
        throw Error('unknown value ' + typeof e);
    }
    toString() {
        return a ? this.toBigInt().toString() : (0, i.gn)(this.lo, this.hi);
    }
    toBigInt() {
        return o(a), a.V.setInt32(0, this.lo, !0), a.V.setInt32(4, this.hi, !0), a.V.getBigUint64(0, !0);
    }
}
c.ZERO = new c(0, 0);
class d extends u {
    static from(e) {
        if (a)
            switch (typeof e) {
                case 'string':
                    if ('0' == e) return this.ZERO;
                    if ('' == e) throw Error('string is no integer');
                    e = a.C(e);
                case 'number':
                    if (0 === e) return this.ZERO;
                    e = a.C(e);
                case 'bigint':
                    if (!e) return this.ZERO;
                    if (e < a.MIN) throw Error('ulong too small');
                    if (e > a.MAX) throw Error('ulong too large');
                    return a.V.setBigInt64(0, e, !0), new d(a.V.getInt32(0, !0), a.V.getInt32(4, !0));
            }
        else
            switch (typeof e) {
                case 'string':
                    if ('0' == e) return this.ZERO;
                    if (((e = e.trim()), !s.test(e))) throw Error('string is no integer');
                    let [n, r, o] = (0, i.IL)(e),
                        u = new d(r, o);
                    return n ? u.negate() : u;
                case 'number':
                    if (0 == e) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw Error('number is no integer');
                    return e > 0 ? new d(e, e / l) : new d(-e, -e / l).negate();
            }
        throw Error('unknown value ' + typeof e);
    }
    isNegative() {
        return (2147483648 & this.hi) != 0;
    }
    negate() {
        let e = ~this.hi,
            n = this.lo;
        return n ? (n = ~n + 1) : (e += 1), new d(n, e);
    }
    toString() {
        if (a) return this.toBigInt().toString();
        if (this.isNegative()) {
            let e = this.negate();
            return '-' + (0, i.gn)(e.lo, e.hi);
        }
        return (0, i.gn)(this.lo, this.hi);
    }
    toBigInt() {
        return o(a), a.V.setInt32(0, this.lo, !0), a.V.setInt32(4, this.hi, !0), a.V.getBigInt64(0, !0);
    }
}
d.ZERO = new d(0, 0);
