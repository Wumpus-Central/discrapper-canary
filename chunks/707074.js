var i = n(548828),
    r = n(611345),
    a = n(186973),
    s = n(474883),
    o = TypeError,
    l = function (e) {
        return function (t, n, l, u) {
            var c = r(t),
                d = a(c),
                f = s(c);
            i(n);
            var _ = e ? f - 1 : 0,
                p = e ? -1 : 1;
            if (l < 2)
                for (;;) {
                    if (_ in d) {
                        (u = d[_]), (_ += p);
                        break;
                    }
                    if (((_ += p), e ? _ < 0 : f <= _)) throw new o('Reduce of empty array with no initial value');
                }
            for (; e ? _ >= 0 : f > _; _ += p) _ in d && (u = n(u, d[_], _, c));
            return u;
        };
    };
e.exports = {
    left: l(!1),
    right: l(!0)
};
