"use strict";
n.d(t, { BT: () => l, Wt: () => E, bf: () => a, xC: () => o });
var r = n(162929),
    i = n(5591),
    s = n(243399);
function a(e) {
    if ("symbol" == typeof e) throw TypeError("Cannot convert a Symbol value to a string");
    return String(e);
}
function o(e) {
    if ("number" == typeof e) return new r.W(e);
    if ("bigint" == typeof e) return new r.W(e.toString());
    if (((0, s.V1)("symbol" != typeof e, "Symbol is not supported", TypeError), void 0 === e)) return new r.W(NaN);
    if (null === e || 0 === e) return i.f2;
    if (!0 === e) return new r.W(1);
    if ("string" == typeof e)
        try {
            return new r.W(e);
        } catch {
            return new r.W(NaN);
        }
    (0, s.V1)("object" == typeof e, "object expected", TypeError);
    let t = A(e, "number");
    return (0, s.V1)("object" != typeof t, "object expected", TypeError), o(t);
}
function l(e) {
    if (null == e) throw TypeError("undefined/null cannot be converted to object");
    return Object(e);
}
let u = 864e5;
function c(e) {
    return Math.floor(e / u);
}
function d(e) {
    if (e < 100) {
        let t = new Date(0);
        return t.setUTCFullYear(e, 0, 1), t.setUTCHours(0, 0, 0, 0), t.getTime() / u;
    }
    return Date.UTC(e, 0) / u;
}
function _(e) {
    return new Date(e).getUTCFullYear();
}
function f(e) {
    return e % 4 != 0 ? 365 : e % 100 != 0 ? 366 : e % 400 != 0 ? 365 : 366;
}
function p(e) {
    return c(e) - d(_(e));
}
function h(e) {
    return +(365 !== f(_(e)));
}
function m(e) {
    return "function" == typeof e;
}
function E(e, t, n) {
    if (!m(e)) return !1;
    if (n?.boundTargetFunction) return t instanceof n?.boundTargetFunction;
    if ("object" != typeof t) return !1;
    let r = e.prototype;
    if ("object" != typeof r)
        throw TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
    return Object.prototype.isPrototypeOf.call(r, t);
}
function g(e, t) {
    let n;
    for (let r of (n = "string" === t ? ["toString", "valueOf"] : ["valueOf", "toString"])) {
        let t = e[r];
        if (m(t)) {
            let n = t.call(e);
            if ("object" != typeof n) return n;
        }
    }
    throw TypeError("Cannot convert object to primitive value");
}
function A(e, t) {
    if ("object" == typeof e && null != e) {
        let n,
            r = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
        if (void 0 !== r) {
            void 0 === t
                ? (n = "default")
                : "string" === t
                  ? (n = "string")
                  : ((0, s.V1)("number" === t, 'preferredType must be "string" or "number"'), (n = "number"));
            let i = r.call(e, n);
            if ("object" != typeof i) return i;
            throw TypeError("Cannot convert exotic object to primitive.");
        }
        return void 0 === t && (t = "number"), g(e, t);
    }
    return e;
}
