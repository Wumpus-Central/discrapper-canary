var r = a(740362),
    n = a(666061),
    _ = a(347722),
    o = a(97131);
t.exports = function (t, e, a) {
    for (var i = n(e), c = o.f, s = _.f, E = 0; E < i.length; E++) {
        var l = i[E];
        r(t, l) || (a && r(a, l)) || c(t, l, s(e, l));
    }
};
