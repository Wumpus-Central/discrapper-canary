var a = r(553616),
    n = r(64774),
    s = {},
    o = Object.keys(a);
o.forEach(function (e) {
    (s[e] = {}), Object.defineProperty(s[e], 'channels', { value: a[e].channels }), Object.defineProperty(s[e], 'labels', { value: a[e].labels });
    var t = n(e);
    Object.keys(t).forEach(function (r) {
        var a,
            n,
            o,
            i,
            c = t[r];
        (s[e][r] =
            ((a = c),
            (n = function (e) {
                if (null == e) return e;
                arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                var t = a(e);
                if ('object' == typeof t) for (var r = t.length, n = 0; n < r; n++) t[n] = Math.round(t[n]);
                return t;
            }),
            'conversion' in a && (n.conversion = a.conversion),
            n)),
            (s[e][r].raw =
                ((o = c),
                (i = function (e) {
                    return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), o(e));
                }),
                'conversion' in o && (i.conversion = o.conversion),
                i));
    });
}),
    (e.exports = s);
