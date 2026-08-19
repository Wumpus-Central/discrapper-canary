var t = "u" > typeof Element,
    r = "function" == typeof Map,
    n = "function" == typeof Set,
    o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
e.exports = function (e, i) {
    try {
        return (function e(i, a) {
            if (i === a) return !0;
            if (i && a && "object" == typeof i && "object" == typeof a) {
                var s, l, u, c;
                if (i.constructor !== a.constructor) return !1;
                if (Array.isArray(i)) {
                    if ((s = i.length) != a.length) return !1;
                    for (l = s; 0 != l--; ) if (!e(i[l], a[l])) return !1;
                    return !0;
                }
                if (r && i instanceof Map && a instanceof Map) {
                    if (i.size !== a.size) return !1;
                    for (c = i.entries(); !(l = c.next()).done; ) if (!a.has(l.value[0])) return !1;
                    for (c = i.entries(); !(l = c.next()).done; ) if (!e(l.value[1], a.get(l.value[0]))) return !1;
                    return !0;
                }
                if (n && i instanceof Set && a instanceof Set) {
                    if (i.size !== a.size) return !1;
                    for (c = i.entries(); !(l = c.next()).done; ) if (!a.has(l.value[0])) return !1;
                    return !0;
                }
                if (o && ArrayBuffer.isView(i) && ArrayBuffer.isView(a)) {
                    if ((s = i.length) != a.length) return !1;
                    for (l = s; 0 != l--; ) if (i[l] !== a[l]) return !1;
                    return !0;
                }
                if (i.constructor === RegExp) return i.source === a.source && i.flags === a.flags;
                if (
                    i.valueOf !== Object.prototype.valueOf &&
                    "function" == typeof i.valueOf &&
                    "function" == typeof a.valueOf
                )
                    return i.valueOf() === a.valueOf();
                if (
                    i.toString !== Object.prototype.toString &&
                    "function" == typeof i.toString &&
                    "function" == typeof a.toString
                )
                    return i.toString() === a.toString();
                if ((s = (u = Object.keys(i)).length) !== Object.keys(a).length) return !1;
                for (l = s; 0 != l--; ) if (!Object.prototype.hasOwnProperty.call(a, u[l])) return !1;
                if (t && i instanceof Element) return !1;
                for (l = s; 0 != l--; )
                    if (
                        (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l]) || !i.$$typeof) &&
                        !e(i[u[l]], a[u[l]])
                    )
                        return !1;
                return !0;
            }
            return i != i && a != a;
        })(e, i);
    } catch (e) {
        if ((e.message || "").match(/stack|recursion/i))
            return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw e;
    }
};
