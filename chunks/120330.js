"use strict";
r.d(t, {
    BT: () => s,
    Wt: () => u,
    bf: () => a,
    xC: () =>
        function e(t) {
            if ("number" == typeof t) return new n.W(t);
            if ("bigint" == typeof t) return new n.W(t.toString());
            if (((0, o.V1)("symbol" != typeof t, "Symbol is not supported", TypeError), void 0 === t))
                return new n.W(NaN);
            if (null === t || 0 === t) return i;
            if (!0 === t) return new n.W(1);
            if ("string" == typeof t)
                try {
                    return new n.W(t);
                } catch {
                    return new n.W(NaN);
                }
            (0, o.V1)("object" == typeof t, "object expected", TypeError);
            let r = (function (e, t) {
                if ("object" == typeof e && null != e) {
                    let r,
                        n = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
                    if (void 0 !== n) {
                        void 0 === t
                            ? (r = "default")
                            : "string" === t
                              ? (r = "string")
                              : ((0, o.V1)("number" === t, 'preferredType must be "string" or "number"'),
                                (r = "number"));
                        let i = n.call(e, r);
                        if ("object" != typeof i) return i;
                        throw TypeError("Cannot convert exotic object to primitive.");
                    }
                    for (let r of (void 0 === t && (t = "number"),
                    "string" === t ? ["toString", "valueOf"] : ["valueOf", "toString"])) {
                        let t = e[r];
                        if (l(t)) {
                            let r = t.call(e);
                            if ("object" != typeof r) return r;
                        }
                    }
                    throw TypeError("Cannot convert object to primitive value");
                }
                return e;
            })(t, "number");
            return (0, o.V1)("object" != typeof r, "object expected", TypeError), e(r);
        },
});
var n = r(162929);
new n.W(10);
let i = new n.W(0);
new n.W(-0);
var o = r(243399);
function a(e) {
    if ("symbol" == typeof e) throw TypeError("Cannot convert a Symbol value to a string");
    return String(e);
}
function s(e) {
    if (null == e) throw TypeError("undefined/null cannot be converted to object");
    return Object(e);
}
function l(e) {
    return "function" == typeof e;
}
function u(e, t, r) {
    if (!l(e)) return !1;
    if (r?.boundTargetFunction) return t instanceof r?.boundTargetFunction;
    if ("object" != typeof t) return !1;
    let n = e.prototype;
    if ("object" != typeof n)
        throw TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
    return Object.prototype.isPrototypeOf.call(n, t);
}
