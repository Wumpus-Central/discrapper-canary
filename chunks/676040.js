t.d(e, {
    BT: () => u,
    Wt: () => d,
    bf: () => s,
    xC: () =>
        function n(e) {
            if ("number" == typeof e) return new a.W(e);
            if ("bigint" == typeof e) return new a.W(e.toString());
            if (((0, i.V1)("symbol" != typeof e, "Symbol is not supported", TypeError), void 0 === e))
                return new a.W(NaN);
            if (null === e || 0 === e) return r.f2;
            if (!0 === e) return new a.W(1);
            if ("string" == typeof e)
                try {
                    return new a.W(e);
                } catch {
                    return new a.W(NaN);
                }
            (0, i.V1)("object" == typeof e, "object expected", TypeError);
            let t = (function (n, e) {
                if ("object" == typeof n && null != n) {
                    let t,
                        a = Symbol.toPrimitive in n ? n[Symbol.toPrimitive] : void 0;
                    if (void 0 !== a) {
                        void 0 === e
                            ? (t = "default")
                            : "string" === e
                              ? (t = "string")
                              : ((0, i.V1)("number" === e, 'preferredType must be "string" or "number"'),
                                (t = "number"));
                        let r = a.call(n, t);
                        if ("object" != typeof r) return r;
                        throw TypeError("Cannot convert exotic object to primitive.");
                    }
                    for (let t of (void 0 === e && (e = "number"),
                    "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"])) {
                        let e = n[t];
                        if (o(e)) {
                            let t = e.call(n);
                            if ("object" != typeof t) return t;
                        }
                    }
                    throw TypeError("Cannot convert object to primitive value");
                }
                return n;
            })(e, "number");
            return (0, i.V1)("object" != typeof t, "object expected", TypeError), n(t);
        },
});
var a = t(162929),
    r = t(5591),
    i = t(243399);
function s(n) {
    if ("symbol" == typeof n) throw TypeError("Cannot convert a Symbol value to a string");
    return String(n);
}
function u(n) {
    if (null == n) throw TypeError("undefined/null cannot be converted to object");
    return Object(n);
}
function o(n) {
    return "function" == typeof n;
}
function d(n, e, t) {
    if (!o(n)) return !1;
    if (t?.boundTargetFunction) return e instanceof t?.boundTargetFunction;
    if ("object" != typeof e) return !1;
    let a = n.prototype;
    if ("object" != typeof a)
        throw TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
    return Object.prototype.isPrototypeOf.call(a, e);
}
