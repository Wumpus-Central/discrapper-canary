var t = "u" > typeof Element,
    r = "function" == typeof Map,
    n = "function" == typeof Set,
    i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
e.exports = function (e, o) {
    try {
        return (function e(o, a) {
            if (o === a) return !0;
            if (o && a && "object" == typeof o && "object" == typeof a) {
                var s, l, u, c;
                if (o.constructor !== a.constructor) return !1;
                if (Array.isArray(o)) {
                    if ((s = o.length) != a.length) return !1;
                    for (l = s; 0 != l--; ) if (!e(o[l], a[l])) return !1;
                    return !0;
                }
                if (r && o instanceof Map && a instanceof Map) {
                    if (o.size !== a.size) return !1;
                    for (c = o.entries(); !(l = c.next()).done; ) if (!a.has(l.value[0])) return !1;
                    for (c = o.entries(); !(l = c.next()).done; ) if (!e(l.value[1], a.get(l.value[0]))) return !1;
                    return !0;
                }
                if (n && o instanceof Set && a instanceof Set) {
                    if (o.size !== a.size) return !1;
                    for (c = o.entries(); !(l = c.next()).done; ) if (!a.has(l.value[0])) return !1;
                    return !0;
                }
                if (i && ArrayBuffer.isView(o) && ArrayBuffer.isView(a)) {
                    if ((s = o.length) != a.length) return !1;
                    for (l = s; 0 != l--; ) if (o[l] !== a[l]) return !1;
                    return !0;
                }
                if (o.constructor === RegExp) return o.source === a.source && o.flags === a.flags;
                if (
                    o.valueOf !== Object.prototype.valueOf &&
                    "function" == typeof o.valueOf &&
                    "function" == typeof a.valueOf
                )
                    return o.valueOf() === a.valueOf();
                if (
                    o.toString !== Object.prototype.toString &&
                    "function" == typeof o.toString &&
                    "function" == typeof a.toString
                )
                    return o.toString() === a.toString();
                if ((s = (u = Object.keys(o)).length) !== Object.keys(a).length) return !1;
                for (l = s; 0 != l--; ) if (!Object.prototype.hasOwnProperty.call(a, u[l])) return !1;
                if (t && o instanceof Element) return !1;
                for (l = s; 0 != l--; )
                    if (
                        (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l]) || !o.$$typeof) &&
                        !e(o[u[l]], a[u[l]])
                    )
                        return !1;
                return !0;
            }
            return o != o && a != a;
        })(e, o);
    } catch (e) {
        if ((e.message || "").match(/stack|recursion/i))
            return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw e;
    }
};
