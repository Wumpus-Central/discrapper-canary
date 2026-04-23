var n = e(210140),
    o = e(501346),
    i = e(873078),
    u = e(4940);
r.exports = function (r, t, e) {
    for (var a = o(t), c = u.f, f = i.f, s = 0; s < a.length; s++) {
        var p = a[s];
        n(r, p) || (e && n(e, p)) || c(r, p, f(t, p));
    }
};
