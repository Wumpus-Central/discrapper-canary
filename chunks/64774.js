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
                for (t[e].distance = 0; r.length; ) {
                    for (var n = r.pop(), o = Object.keys(a[n]), s = o.length, i = 0; i < s; i++) {
                        var c = o[i],
                            u = t[c];
                        -1 === u.distance && ((u.distance = t[n].distance + 1), (u.parent = n), r.unshift(c));
                    }
                }
                return t;
            })(e),
            r = {},
            n = Object.keys(t),
            o = n.length,
            s = 0;
        s < o;
        s++
    ) {
        var i = n[s];
        if (null !== t[i].parent)
            r[i] = (function (e, t) {
                for (var r = [t[e].parent, e], n = a[t[e].parent][e], o = t[e].parent; t[o].parent; )
                    r.unshift(t[o].parent),
                        (n = (function (e, t) {
                            return function (r) {
                                return t(e(r));
                            };
                        })(a[t[o].parent][o], n)),
                        (o = t[o].parent);
                return (n.conversion = r), n;
            })(i, t);
    }
    return r;
};
