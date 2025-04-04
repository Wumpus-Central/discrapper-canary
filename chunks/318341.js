var e = n(517522),
    o = n(691593),
    i = n(921413),
    u = n(684022),
    s = n(242958),
    c = TypeError;
t.exports = function (t, r) {
    var n = arguments.length < 2 ? s(t) : r;
    if (o(n)) return i(e(n, t));
    throw new c(u(t) + ' is not iterable');
};
