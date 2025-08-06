var r = n(580983),
    i = n(896471),
    o = n(179122),
    a = n(449285),
    s = n(800054),
    l = TypeError;
e.exports = function (e, t) {
    var n = arguments.length < 2 ? s(e) : t;
    if (i(n)) return o(r(n, e));
    throw new l(a(e) + ' is not iterable');
};
