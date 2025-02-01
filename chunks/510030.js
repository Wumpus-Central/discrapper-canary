var n = t(526988),
    o = t(339718),
    i = t(470592),
    u = t(49693),
    a = TypeError,
    c = function (r) {
        return function (e, t, c, f) {
            n(t);
            var l = o(e),
                s = i(l),
                p = u(l),
                v = r ? p - 1 : 0,
                d = r ? -1 : 1;
            if (c < 2)
                for (;;) {
                    if (v in s) {
                        (f = s[v]), (v += d);
                        break;
                    }
                    if (((v += d), r ? v < 0 : p <= v)) throw a('Reduce of empty array with no initial value');
                }
            for (; r ? v >= 0 : p > v; v += d) v in s && (f = t(f, s[v], v, l));
            return f;
        };
    };
r.exports = {
    left: c(!1),
    right: c(!0)
};
