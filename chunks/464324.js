var n = e(581390),
    o = e(273761),
    i = e(503199),
    u = function (r) {
        return function (t, e, u) {
            var a,
                c = n(t),
                f = i(c);
            if (0 === f) return !r && -1;
            var s = o(u, f);
            if (r && e != e) {
                for (; f > s; ) if ((a = c[s++]) != a) return !0;
            } else for (; f > s; s++) if ((r || s in c) && c[s] === e) return r || s || 0;
            return !r && -1;
        };
    };
r.exports = { includes: u(!0), indexOf: u(!1) };
