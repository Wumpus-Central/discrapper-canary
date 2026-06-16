"use strict";
var r = n(596479),
    a = Math.floor,
    o = function (e, t) {
        var n = e.length;
        if (n < 8)
            for (var i, s, l = 1; l < n; ) {
                for (s = l, i = e[l]; s && t(e[s - 1], i) > 0; ) e[s] = e[--s];
                s !== l++ && (e[s] = i);
            }
        else
            for (
                var c = a(n / 2), u = o(r(e, 0, c), t), d = o(r(e, c), t), p = u.length, h = d.length, f = 0, m = 0;
                f < p || m < h;
            )
                e[f + m] = f < p && m < h ? (0 >= t(u[f], d[m]) ? u[f++] : d[m++]) : f < p ? u[f++] : d[m++];
        return e;
    };
e.exports = o;
