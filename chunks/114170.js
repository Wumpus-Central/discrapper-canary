var a = r(553616),
    n = r(64774),
    o = {},
    s = Object.keys(a);
s.forEach(function (e) {
    (o[e] = {}), Object.defineProperty(o[e], 'channels', { value: a[e].channels }), Object.defineProperty(o[e], 'labels', { value: a[e].labels });
    var t = n(e);
    Object.keys(t).forEach(function (r) {
        var a,
            n,
            s,
            i,
            c = t[r];
        (o[e][r] =
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
            (o[e][r].raw =
                ((s = c),
                (i = function (e) {
                    return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), s(e));
                }),
                'conversion' in s && (i.conversion = s.conversion),
                i));
    });
}),
    (e.exports = o);
