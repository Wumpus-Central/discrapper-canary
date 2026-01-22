var n = e(459547),
    o = e(958498),
    s = e(989447).f,
    i = e(596479),
    u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    c = function (t) {
        try {
            return s(t);
        } catch (t) {
            return i(u);
        }
    };
t.exports.f = function (t) {
    return u && "Window" === n(t) ? c(t) : s(o(t));
};
