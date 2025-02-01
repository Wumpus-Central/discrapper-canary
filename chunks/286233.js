var i = n(538315),
    r = 'function' == typeof Symbol && 'symbol' == typeof Symbol('foo'),
    a = Object.prototype.toString,
    s = Array.prototype.concat,
    o = n(445086),
    l = function (e) {
        return 'function' == typeof e && '[object Function]' === a.call(e);
    },
    u = n(768175)(),
    c = function (e, t, n, i) {
        if (t in e) {
            if (!0 === i) {
                if (e[t] === n) return;
            } else if (!l(i) || !i()) return;
        }
        u ? o(e, t, n, !0) : o(e, t, n);
    },
    d = function (e, t) {
        var n = arguments.length > 2 ? arguments[2] : {},
            a = i(t);
        r && (a = s.call(a, Object.getOwnPropertySymbols(t)));
        for (var o = 0; o < a.length; o += 1) c(e, a[o], t[a[o]], n[a[o]]);
    };
(d.supportsDescriptors = !!u), (e.exports = d);
