var r = n(876666),
    i = n(752909),
    a = n(750615);
e.exports = function (e) {
    return function (t, n, s) {
        var o = Object(t);
        if (!i(t)) {
            var l = r(n, 3);
            (t = a(t)),
                (n = function (e) {
                    return l(o[e], e, o);
                });
        }
        var c = e(t, n, s);
        return c > -1 ? o[l ? t[c] : c] : void 0;
    };
};
