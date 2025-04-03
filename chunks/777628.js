var e = n(726433),
    o = n(729605),
    i = n(937443).f,
    u = n(960081),
    s = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    c = function (t) {
        try {
            return i(t);
        } catch (t) {
            return u(s);
        }
    };
t.exports.f = function (t) {
    return s && 'Window' === e(t) ? c(t) : i(o(t));
};
