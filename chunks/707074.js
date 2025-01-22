var i = r(548828),
    a = r(611345),
    o = r(186973),
    s = r(474883),
    l = TypeError,
    u = function (e) {
        return function (n, r, u, c) {
            var d = a(n),
                f = o(d),
                p = s(d);
            i(r);
            var h = e ? p - 1 : 0,
                _ = e ? -1 : 1;
            if (u < 2)
                for (;;) {
                    if (h in f) {
                        (c = f[h]), (h += _);
                        break;
                    }
                    if (((h += _), e ? h < 0 : p <= h)) throw new l('Reduce of empty array with no initial value');
                }
            for (; e ? h >= 0 : p > h; h += _) h in f && (c = r(c, f[h], h, d));
            return c;
        };
    };
e.exports = {
    left: u(!1),
    right: u(!0)
};
