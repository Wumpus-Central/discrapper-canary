var r = a(740362),
    n = a(666061),
    o = a(347722),
    _ = a(97131);
t.exports = function (t, e, a) {
    for (var i = n(e), c = _.f, s = o.f, E = 0; E < i.length; E++) {
        var l = i[E];
        r(t, l) || (a && r(a, l)) || c(t, l, s(e, l));
    }
};
