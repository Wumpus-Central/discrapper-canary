"use strict";
n.d(t, {
    BT: () => o,
    Wt: () => u,
    bf: () => a,
    xC: () =>
        function e(t) {
            if ("number" == typeof t) return new r.W(t);
            if ("bigint" == typeof t) return new r.W(t.toString());
            if (((0, s.V1)("symbol" != typeof t, "Symbol is not supported", TypeError), void 0 === t))
                return new r.W(NaN);
            if (null === t || 0 === t) return i.f2;
            if (!0 === t) return new r.W(1);
            if ("string" == typeof t)
                try {
                    return new r.W(t);
                } catch {
                    return new r.W(NaN);
                }
            (0, s.V1)("object" == typeof t, "object expected", TypeError);
            let n = (function (e, t) {
                if ("object" == typeof e && null != e) {
                    let n,
                        r = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
                    if (void 0 !== r) {
                        void 0 === t
                            ? (n = "default")
                            : "string" === t
                              ? (n = "string")
                              : ((0, s.V1)("number" === t, 'preferredType must be "string" or "number"'),
                                (n = "number"));
                        let i = r.call(e, n);
                        if ("object" != typeof i) return i;
                        throw TypeError("Cannot convert exotic object to primitive.");
                    }
                    for (let n of (void 0 === t && (t = "number"),
                    "string" === t ? ["toString", "valueOf"] : ["valueOf", "toString"])) {
                        let t = e[n];
                        if (l(t)) {
                            let n = t.call(e);
                            if ("object" != typeof n) return n;
                        }
                    }
                    throw TypeError("Cannot convert object to primitive value");
                }
                return e;
            })(t, "number");
            return (0, s.V1)("object" != typeof n, "object expected", TypeError), e(n);
        },
});
var r = n(162929),
    i = n(5591),
    s = n(243399);
function a(e) {
    if ("symbol" == typeof e) throw TypeError("Cannot convert a Symbol value to a string");
    return String(e);
}
function o(e) {
    if (null == e) throw TypeError("undefined/null cannot be converted to object");
    return Object(e);
}
function l(e) {
    return "function" == typeof e;
}
function u(e, t, n) {
    if (!l(e)) return !1;
    if (n?.boundTargetFunction) return t instanceof n?.boundTargetFunction;
    if ("object" != typeof t) return !1;
    let r = e.prototype;
    if ("object" != typeof r)
        throw TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
    return Object.prototype.isPrototypeOf.call(r, t);
}
