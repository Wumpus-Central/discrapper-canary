var e = n(6837),
    o = n(658971),
    i = n(777985).f,
    u = n(689933),
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
