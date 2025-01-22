var i = r(141603),
    a = r(688313),
    o = r(65007),
    s = r(349446);
e.exports = function (e, n, r) {
    for (var l = a(n), u = s.f, c = o.f, d = 0; d < l.length; d++) {
        var f = l[d];
        !i(e, f) && !(r && i(r, f)) && u(e, f, c(n, f));
    }
};
