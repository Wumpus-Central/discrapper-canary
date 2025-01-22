var i = r(726433),
    a = r(729605),
    o = r(937443).f,
    s = r(960081),
    l = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    u = function (e) {
        try {
            return o(e);
        } catch (e) {
            return s(l);
        }
    };
e.exports.f = function (e) {
    return l && 'Window' === i(e) ? u(e) : o(a(e));
};
