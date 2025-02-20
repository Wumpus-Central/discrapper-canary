var r = n(548828),
    i = n(611345),
    o = n(186973),
    a = n(474883),
    s = TypeError,
    l = function (e) {
        return function (t, n, l, c) {
            var u = i(t),
                d = o(u),
                f = a(u);
            r(n);
            var p = e ? f - 1 : 0,
                _ = e ? -1 : 1;
            if (l < 2)
                for (;;) {
                    if (p in d) {
                        (c = d[p]), (p += _);
                        break;
                    }
                    if (((p += _), e ? p < 0 : f <= p)) throw new s('Reduce of empty array with no initial value');
                }
            for (; e ? p >= 0 : f > p; p += _) p in d && (c = n(c, d[p], p, u));
            return c;
        };
    };
e.exports = {
    left: l(!1),
    right: l(!0)
};
