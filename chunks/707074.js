var r = n(548828),
    o = n(611345),
    a = n(186973),
    i = n(474883),
    s = TypeError,
    c = function (e) {
        return function (t, n, c, l) {
            var u = o(t),
                d = a(u),
                p = i(u);
            r(n);
            var h = e ? p - 1 : 0,
                f = e ? -1 : 1;
            if (c < 2)
                for (;;) {
                    if (h in d) {
                        (l = d[h]), (h += f);
                        break;
                    }
                    if (((h += f), e ? h < 0 : p <= h)) throw new s('Reduce of empty array with no initial value');
                }
            for (; e ? h >= 0 : p > h; h += f) h in d && (l = n(l, d[h], h, u));
            return l;
        };
    };
e.exports = {
    left: c(!1),
    right: c(!0)
};
