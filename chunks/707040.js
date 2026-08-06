r.exports = function r(t, e) {
    if (t === e) return !0;
    if (t && e && "object" == typeof t && "object" == typeof e) {
        if (t.constructor !== e.constructor) return !1;
        if (Array.isArray(t)) {
            if ((n = t.length) != e.length) return !1;
            for (o = n; 0 != o--; ) if (!r(t[o], e[o])) return !1;
            return !0;
        }
        if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === e.toString();
        if ((n = (a = Object.keys(t)).length) !== Object.keys(e).length) return !1;
        for (o = n; 0 != o--; ) if (!Object.prototype.hasOwnProperty.call(e, a[o])) return !1;
        for (o = n; 0 != o--; ) {
            var n,
                o,
                a,
                u = a[o];
            if (!r(t[u], e[u])) return !1;
        }
        return !0;
    }
    return t != t && e != e;
};
