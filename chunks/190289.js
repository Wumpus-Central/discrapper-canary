var r = a(77025),
    n = a(998627),
    _ = a(840991),
    o = a(117895);
t.exports = function (t, e, a) {
    for (var i = n(e), c = o.f, s = _.f, E = 0; E < i.length; E++) {
        var l = i[E];
        r(t, l) || (a && r(a, l)) || c(t, l, s(e, l));
    }
};
