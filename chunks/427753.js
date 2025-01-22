var n = 'undefined' != typeof Element,
    r = 'function' == typeof Map,
    i = 'function' == typeof Set,
    a = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView;
function o(e, s) {
    if (e === s) return !0;
    if (e && s && 'object' == typeof e && 'object' == typeof s) {
        var l, u, c, d;
        if (e.constructor !== s.constructor) return !1;
        if (Array.isArray(e)) {
            if ((l = e.length) != s.length) return !1;
            for (u = l; 0 != u--; ) if (!o(e[u], s[u])) return !1;
            return !0;
        }
        if (r && e instanceof Map && s instanceof Map) {
            if (e.size !== s.size) return !1;
            for (d = e.entries(); !(u = d.next()).done; ) if (!s.has(u.value[0])) return !1;
            for (d = e.entries(); !(u = d.next()).done; ) if (!o(u.value[1], s.get(u.value[0]))) return !1;
            return !0;
        }
        if (i && e instanceof Set && s instanceof Set) {
            if (e.size !== s.size) return !1;
            for (d = e.entries(); !(u = d.next()).done; ) if (!s.has(u.value[0])) return !1;
            return !0;
        }
        if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(s)) {
            if ((l = e.length) != s.length) return !1;
            for (u = l; 0 != u--; ) if (e[u] !== s[u]) return !1;
            return !0;
        }
        if (e.constructor === RegExp) return e.source === s.source && e.flags === s.flags;
        if (e.valueOf !== Object.prototype.valueOf && 'function' == typeof e.valueOf && 'function' == typeof s.valueOf) return e.valueOf() === s.valueOf();
        if (e.toString !== Object.prototype.toString && 'function' == typeof e.toString && 'function' == typeof s.toString) return e.toString() === s.toString();
        if ((l = (c = Object.keys(e)).length) !== Object.keys(s).length) return !1;
        for (u = l; 0 != u--; ) if (!Object.prototype.hasOwnProperty.call(s, c[u])) return !1;
        if (n && e instanceof Element) return !1;
        for (u = l; 0 != u--; ) {
            if (('_owner' !== c[u] && '__v' !== c[u] && '__o' !== c[u]) || !e.$$typeof) {
                if (!o(e[c[u]], s[c[u]])) return !1;
            }
        }
        return !0;
    }
    return e != e && s != s;
}
e.exports = function (e, n) {
    try {
        return o(e, n);
    } catch (e) {
        if ((e.message || '').match(/stack|recursion/i)) return console.warn('react-fast-compare cannot handle circular refs'), !1;
        throw e;
    }
};
