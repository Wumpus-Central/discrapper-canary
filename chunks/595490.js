e.exports = function e(n, r) {
    if (n === r) return !0;
    if (n && r && 'object' == typeof n && 'object' == typeof r) {
        if (n.constructor !== r.constructor) return !1;
        if (Array.isArray(n)) {
            if ((i = n.length) != r.length) return !1;
            for (a = i; 0 != a--; ) if (!e(n[a], r[a])) return !1;
            return !0;
        }
        if (n.constructor === RegExp) return n.source === r.source && n.flags === r.flags;
        if (n.valueOf !== Object.prototype.valueOf) return n.valueOf() === r.valueOf();
        if (n.toString !== Object.prototype.toString) return n.toString() === r.toString();
        if ((i = (o = Object.keys(n)).length) !== Object.keys(r).length) return !1;
        for (a = i; 0 != a--; ) if (!Object.prototype.hasOwnProperty.call(r, o[a])) return !1;
        for (a = i; 0 != a--; ) {
            var i,
                a,
                o,
                s = o[a];
            if (!e(n[s], r[s])) return !1;
        }
        return !0;
    }
    return n != n && r != r;
};
