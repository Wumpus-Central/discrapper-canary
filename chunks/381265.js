var r = n(3528),
    i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
    a = Object.prototype.toString,
    s = Array.prototype.concat,
    o = n(207001),
    l = function (e) {
        return "function" == typeof e && "[object Function]" === a.call(e);
    },
    c = n(473560)(),
    u = function (e, t, n, r) {
        if (t in e) {
            if (!0 === r) {
                if (e[t] === n) return;
            } else if (!l(r) || !r()) return;
        }
        c ? o(e, t, n, !0) : o(e, t, n);
    },
    d = function (e, t) {
        var n = arguments.length > 2 ? arguments[2] : {},
            a = r(t);
        i && (a = s.call(a, Object.getOwnPropertySymbols(t)));
        for (var o = 0; o < a.length; o += 1) u(e, a[o], t[a[o]], n[a[o]]);
    };
(d.supportsDescriptors = !!c), (e.exports = d);
