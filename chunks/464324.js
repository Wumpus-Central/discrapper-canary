var r = n(581390),
    i = n(273761),
    a = n(503199),
    s = function (e) {
        return function (t, n, s) {
            var o,
                l = r(t),
                c = a(l);
            if (0 === c) return !e && -1;
            var u = i(s, c);
            if (e && n != n) {
                for (; c > u; ) if ((o = l[u++]) != o) return !0;
            } else for (; c > u; u++) if ((e || u in l) && l[u] === n) return e || u || 0;
            return !e && -1;
        };
    };
e.exports = {
    includes: s(!0),
    indexOf: s(!1),
};
