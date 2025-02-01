e.exports = function e(t, n) {
    if (t === n) return !0;
    if (t && n && 'object' == typeof t && 'object' == typeof n) {
        if (t.constructor !== n.constructor) return !1;
        if (Array.isArray(t)) {
            if ((i = t.length) != n.length) return !1;
            for (r = i; 0 != r--; ) if (!e(t[r], n[r])) return !1;
            return !0;
        }
        if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
        if ((i = (a = Object.keys(t)).length) !== Object.keys(n).length) return !1;
        for (r = i; 0 != r--; ) if (!Object.prototype.hasOwnProperty.call(n, a[r])) return !1;
        for (r = i; 0 != r--; ) {
            var i,
                r,
                a,
                s = a[r];
            if (!e(t[s], n[s])) return !1;
        }
        return !0;
    }
    return t != t && n != n;
};
