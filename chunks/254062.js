var i = n(256098),
    r = n(436091),
    a = n(438330);
function s(e) {
    return function (t, n, s) {
        var o = Object(t);
        if (!r(t)) {
            var l = i(n, 3);
            (t = a(t)),
                (n = function (e) {
                    return l(o[e], e, o);
                });
        }
        var u = e(t, n, s);
        return u > -1 ? o[l ? t[u] : u] : void 0;
    };
}
e.exports = s;
