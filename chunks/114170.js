var a = r(553616),
    n = r(64774),
    s = {};
Object.keys(a).forEach(function (e) {
    (s[e] = {}), Object.defineProperty(s[e], 'channels', { value: a[e].channels }), Object.defineProperty(s[e], 'labels', { value: a[e].labels });
    var t = n(e);
    Object.keys(t).forEach(function (r) {
        var a,
            n,
            o = t[r];
        (s[e][r] =
            ((a = function (e) {
                if (null == e) return e;
                arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                var t = o(e);
                if ('object' == typeof t) for (var r = t.length, a = 0; a < r; a++) t[a] = Math.round(t[a]);
                return t;
            }),
            'conversion' in o && (a.conversion = o.conversion),
            a)),
            (s[e][r].raw =
                ((n = function (e) {
                    return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), o(e));
                }),
                'conversion' in o && (n.conversion = o.conversion),
                n));
    });
}),
    (e.exports = s);
