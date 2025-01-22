var i = r(538315),
    a = 'function' == typeof Symbol && 'symbol' == typeof Symbol('foo'),
    o = Object.prototype.toString,
    s = Array.prototype.concat,
    l = r(445086),
    u = function (e) {
        return 'function' == typeof e && '[object Function]' === o.call(e);
    },
    c = r(768175)(),
    d = function (e, n, r, i) {
        if (n in e) {
            if (!0 === i) {
                if (e[n] === r) return;
            } else if (!u(i) || !i()) return;
        }
        c ? l(e, n, r, !0) : l(e, n, r);
    },
    f = function (e, n) {
        var r = arguments.length > 2 ? arguments[2] : {},
            o = i(n);
        a && (o = s.call(o, Object.getOwnPropertySymbols(n)));
        for (var l = 0; l < o.length; l += 1) d(e, o[l], n[o[l]], r[o[l]]);
    };
(f.supportsDescriptors = !!c), (e.exports = f);
