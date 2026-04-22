var t = "u" > typeof Element,
    n = "function" == typeof Map,
    r = "function" == typeof Set,
    i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
e.exports = function (e, s) {
    try {
        return (function e(s, a) {
            if (s === a) return !0;
            if (s && a && "object" == typeof s && "object" == typeof a) {
                var o, l, u, d;
                if (s.constructor !== a.constructor) return !1;
                if (Array.isArray(s)) {
                    if ((o = s.length) != a.length) return !1;
                    for (l = o; 0 != l--; ) if (!e(s[l], a[l])) return !1;
                    return !0;
                }
                if (n && s instanceof Map && a instanceof Map) {
                    if (s.size !== a.size) return !1;
                    for (d = s.entries(); !(l = d.next()).done; ) if (!a.has(l.value[0])) return !1;
                    for (d = s.entries(); !(l = d.next()).done; ) if (!e(l.value[1], a.get(l.value[0]))) return !1;
                    return !0;
                }
                if (r && s instanceof Set && a instanceof Set) {
                    if (s.size !== a.size) return !1;
                    for (d = s.entries(); !(l = d.next()).done; ) if (!a.has(l.value[0])) return !1;
                    return !0;
                }
                if (i && ArrayBuffer.isView(s) && ArrayBuffer.isView(a)) {
                    if ((o = s.length) != a.length) return !1;
                    for (l = o; 0 != l--; ) if (s[l] !== a[l]) return !1;
                    return !0;
                }
                if (s.constructor === RegExp) return s.source === a.source && s.flags === a.flags;
                if (
                    s.valueOf !== Object.prototype.valueOf &&
                    "function" == typeof s.valueOf &&
                    "function" == typeof a.valueOf
                )
                    return s.valueOf() === a.valueOf();
                if (
                    s.toString !== Object.prototype.toString &&
                    "function" == typeof s.toString &&
                    "function" == typeof a.toString
                )
                    return s.toString() === a.toString();
                if ((o = (u = Object.keys(s)).length) !== Object.keys(a).length) return !1;
                for (l = o; 0 != l--; ) if (!Object.prototype.hasOwnProperty.call(a, u[l])) return !1;
                if (t && s instanceof Element) return !1;
                for (l = o; 0 != l--; )
                    if (
                        (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l]) || !s.$$typeof) &&
                        !e(s[u[l]], a[u[l]])
                    )
                        return !1;
                return !0;
            }
            return s != s && a != a;
        })(e, s);
    } catch (e) {
        if ((e.message || "").match(/stack|recursion/i))
            return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw e;
    }
};
