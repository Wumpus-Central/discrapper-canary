t.d(n, {
    BT: () => o,
    Wt: () => l,
    bf: () => s,
    xC: () =>
        function e(n) {
            if ("number" == typeof n) return new i.W(n);
            if ("bigint" == typeof n) return new i.W(n.toString());
            if (((0, a.V1)("symbol" != typeof n, "Symbol is not supported", TypeError), void 0 === n))
                return new i.W(NaN);
            if (null === n || 0 === n) return r;
            if (!0 === n) return new i.W(1);
            if ("string" == typeof n)
                try {
                    return new i.W(n);
                } catch {
                    return new i.W(NaN);
                }
            (0, a.V1)("object" == typeof n, "object expected", TypeError);
            let t = (function (e, n) {
                if ("object" == typeof e && null != e) {
                    let t,
                        i = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
                    if (void 0 !== i) {
                        void 0 === n
                            ? (t = "default")
                            : "string" === n
                              ? (t = "string")
                              : ((0, a.V1)("number" === n, 'preferredType must be "string" or "number"'),
                                (t = "number"));
                        let r = i.call(e, t);
                        if ("object" != typeof r) return r;
                        throw TypeError("Cannot convert exotic object to primitive.");
                    }
                    for (let t of (void 0 === n && (n = "number"),
                    "string" === n ? ["toString", "valueOf"] : ["valueOf", "toString"])) {
                        let n = e[t];
                        if (u(n)) {
                            let t = n.call(e);
                            if ("object" != typeof t) return t;
                        }
                    }
                    throw TypeError("Cannot convert object to primitive value");
                }
                return e;
            })(n, "number");
            return ((0, a.V1)("object" != typeof t, "object expected", TypeError), e(t));
        },
});
var i = t(162929);
new i.W(10);
let r = new i.W(0);
new i.W(-0);
var a = t(243399);
function s(e) {
    if ("symbol" == typeof e) throw TypeError("Cannot convert a Symbol value to a string");
    return String(e);
}
function o(e) {
    if (null == e) throw TypeError("undefined/null cannot be converted to object");
    return Object(e);
}
function u(e) {
    return "function" == typeof e;
}
function l(e, n, t) {
    if (!u(e)) return !1;
    if (t?.boundTargetFunction) return n instanceof t?.boundTargetFunction;
    if ("object" != typeof n) return !1;
    let i = e.prototype;
    if ("object" != typeof i)
        throw TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
    return Object.prototype.isPrototypeOf.call(i, n);
}
