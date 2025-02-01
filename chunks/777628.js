var i = n(726433),
    r = n(729605),
    a = n(937443).f,
    s = n(960081),
    o = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    l = function (e) {
        try {
            return a(e);
        } catch (e) {
            return s(o);
        }
    };
e.exports.f = function (e) {
    return o && 'Window' === i(e) ? l(e) : a(r(e));
};
