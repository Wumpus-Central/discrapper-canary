var r = n(565580),
    i = n(900013),
    o = n(857673),
    a = parseFloat,
    s = Math.min,
    l = Math.random;
e.exports = function (e, t, n) {
    if ((n && 'boolean' != typeof n && i(e, t, n) && (t = n = void 0), void 0 === n && ('boolean' == typeof t ? ((n = t), (t = void 0)) : 'boolean' == typeof e && ((n = e), (e = void 0))), void 0 === e && void 0 === t ? ((e = 0), (t = 1)) : ((e = o(e)), void 0 === t ? ((t = e), (e = 0)) : (t = o(t))), e > t)) {
        var c = e;
        (e = t), (t = c);
    }
    if (n || e % 1 || t % 1) {
        var u = l();
        return s(e + u * (t - e + a('1e-' + ((u + '').length - 1))), t);
    }
    return r(e, t);
};
