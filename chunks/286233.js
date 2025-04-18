var r = n(538315),
    i = 'function' == typeof Symbol && 'symbol' == typeof Symbol('foo'),
    a = Object.prototype.toString,
    o = Array.prototype.concat,
    s = n(834889),
    l = function (e) {
        return 'function' == typeof e && '[object Function]' === a.call(e);
    },
    c = n(134533)(),
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
            a = r(t);
        i && (a = o.call(a, Object.getOwnPropertySymbols(t)));
        for (var s = 0; s < a.length; s += 1) u(e, a[s], t[a[s]], n[a[s]]);
    };
(d.supportsDescriptors = !!c), (e.exports = d);
