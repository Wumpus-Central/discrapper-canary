var i = n(876666),
    r = n(752909),
    s = n(750615);
e.exports = function (e) {
    return function (t, n, a) {
        var o = Object(t);
        if (!r(t)) {
            var l = i(n, 3);
            (t = s(t)),
                (n = function (e) {
                    return l(o[e], e, o);
                });
        }
        var u = e(t, n, a);
        return u > -1 ? o[l ? t[u] : u] : void 0;
    };
};
