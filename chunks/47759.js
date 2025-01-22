var i = r(565580),
    a = r(900013),
    o = r(857673),
    s = parseFloat,
    l = Math.min,
    u = Math.random;
function c(e, n, r) {
    if ((r && 'boolean' != typeof r && a(e, n, r) && (n = r = void 0), void 0 === r && ('boolean' == typeof n ? ((r = n), (n = void 0)) : 'boolean' == typeof e && ((r = e), (e = void 0))), void 0 === e && void 0 === n ? ((e = 0), (n = 1)) : ((e = o(e)), void 0 === n ? ((n = e), (e = 0)) : (n = o(n))), e > n)) {
        var c = e;
        (e = n), (n = c);
    }
    if (r || e % 1 || n % 1) {
        var d = u();
        return l(e + d * (n - e + s('1e-' + ((d + '').length - 1))), n);
    }
    return i(e, n);
}
e.exports = c;
