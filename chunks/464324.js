var n = e(581390),
    o = e(273761),
    i = e(503199),
    a = function (r) {
        return function (t, e, a) {
            var u,
                c = n(t),
                f = i(c);
            if (0 === f) return !r && -1;
            var p = o(a, f);
            if (r && e != e) {
                for (; f > p; ) if ((u = c[p++]) != u) return !0;
            } else for (; f > p; p++) if ((r || p in c) && c[p] === e) return r || p || 0;
            return !r && -1;
        };
    };
r.exports = { includes: a(!0), indexOf: a(!1) };
