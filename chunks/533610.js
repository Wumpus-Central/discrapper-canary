var e = r(580983),
    o = r(896471),
    i = r(179122),
    u = r(449285),
    c = r(800054),
    a = TypeError;
t.exports = function (t, n) {
    var r = arguments.length < 2 ? c(t) : n;
    if (o(r)) return i(e(r, t));
    throw new a(u(t) + ' is not iterable');
};
