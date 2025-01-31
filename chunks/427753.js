var t = 'undefined' != typeof Element,
    n = 'function' == typeof Map,
    i = 'function' == typeof Set,
    r = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView;
function a(e, s) {
    if (e === s) return !0;
    if (e && s && 'object' == typeof e && 'object' == typeof s) {
        var o, l, u, c;
        if (e.constructor !== s.constructor) return !1;
        if (Array.isArray(e)) {
            if ((o = e.length) != s.length) return !1;
            for (l = o; 0 != l--; ) if (!a(e[l], s[l])) return !1;
            return !0;
        }
        if (n && e instanceof Map && s instanceof Map) {
            if (e.size !== s.size) return !1;
            for (c = e.entries(); !(l = c.next()).done; ) if (!s.has(l.value[0])) return !1;
            for (c = e.entries(); !(l = c.next()).done; ) if (!a(l.value[1], s.get(l.value[0]))) return !1;
            return !0;
        }
        if (i && e instanceof Set && s instanceof Set) {
            if (e.size !== s.size) return !1;
            for (c = e.entries(); !(l = c.next()).done; ) if (!s.has(l.value[0])) return !1;
            return !0;
        }
        if (r && ArrayBuffer.isView(e) && ArrayBuffer.isView(s)) {
            if ((o = e.length) != s.length) return !1;
            for (l = o; 0 != l--; ) if (e[l] !== s[l]) return !1;
            return !0;
        }
        if (e.constructor === RegExp) return e.source === s.source && e.flags === s.flags;
        if (e.valueOf !== Object.prototype.valueOf && 'function' == typeof e.valueOf && 'function' == typeof s.valueOf) return e.valueOf() === s.valueOf();
        if (e.toString !== Object.prototype.toString && 'function' == typeof e.toString && 'function' == typeof s.toString) return e.toString() === s.toString();
        if ((o = (u = Object.keys(e)).length) !== Object.keys(s).length) return !1;
        for (l = o; 0 != l--; ) if (!Object.prototype.hasOwnProperty.call(s, u[l])) return !1;
        if (t && e instanceof Element) return !1;
        for (l = o; 0 != l--; ) if ((('_owner' !== u[l] && '__v' !== u[l] && '__o' !== u[l]) || !e.$$typeof) && !a(e[u[l]], s[u[l]])) return !1;
        return !0;
    }
    return e != e && s != s;
}
e.exports = function (e, t) {
    try {
        return a(e, t);
    } catch (e) {
        if ((e.message || '').match(/stack|recursion/i)) return console.warn('react-fast-compare cannot handle circular refs'), !1;
        throw e;
    }
};
