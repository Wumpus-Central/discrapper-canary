var a = r(553616);
e.exports = function (e) {
    for (
        var t = (function (e) {
                var t = (function () {
                        for (var e = {}, t = Object.keys(a), r = t.length, n = 0; n < r; n++)
                            e[t[n]] = {
                                distance: -1,
                                parent: null
                            };
                        return e;
                    })(),
                    r = [e];
                for (t[e].distance = 0; r.length; )
                    for (var n = r.pop(), s = Object.keys(a[n]), o = s.length, i = 0; i < o; i++) {
                        var c = s[i],
                            l = t[c];
                        -1 === l.distance && ((l.distance = t[n].distance + 1), (l.parent = n), r.unshift(c));
                    }
                return t;
            })(e),
            r = {},
            n = Object.keys(t),
            s = n.length,
            o = 0;
        o < s;
        o++
    ) {
        var i = n[o];
        null !== t[i].parent &&
            (r[i] = (function (e, t) {
                for (var r = [t[e].parent, e], n = a[t[e].parent][e], s = t[e].parent; t[s].parent; )
                    r.unshift(t[s].parent),
                        (n = (function (e, t) {
                            return function (r) {
                                return t(e(r));
                            };
                        })(a[t[s].parent][s], n)),
                        (s = t[s].parent);
                return (n.conversion = r), n;
            })(i, t));
    }
    return r;
};
