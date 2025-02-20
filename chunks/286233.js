var r = n(538315),
    i = 'function' == typeof Symbol && 'symbol' == typeof Symbol('foo'),
    o = Object.prototype.toString,
    a = Array.prototype.concat,
    s = n(445086),
    l = function (e) {
        return 'function' == typeof e && '[object Function]' === o.call(e);
    },
    c = n(768175)(),
    u = function (e, t, n, r) {
        if (t in e) {
            if (!0 === r) {
                if (e[t] === n) return;
            } else if (!l(r) || !r()) return;
        }
        c ? s(e, t, n, !0) : s(e, t, n);
    },
    d = function (e, t) {
        var n = arguments.length > 2 ? arguments[2] : {},
            o = r(t);
        i && (o = a.call(o, Object.getOwnPropertySymbols(t)));
        for (var s = 0; s < o.length; s += 1) u(e, o[s], t[o[s]], n[o[s]]);
    };
(d.supportsDescriptors = !!c), (e.exports = d);
