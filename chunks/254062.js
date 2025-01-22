var i = r(256098),
    a = r(436091),
    o = r(438330);
function s(e) {
    return function (n, r, s) {
        var l = Object(n);
        if (!a(n)) {
            var u = i(r, 3);
            (n = o(n)),
                (r = function (e) {
                    return u(l[e], e, l);
                });
        }
        var c = e(n, r, s);
        return c > -1 ? l[u ? n[c] : c] : void 0;
    };
}
e.exports = s;
