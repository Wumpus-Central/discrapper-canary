var r = n(580983),
    i = n(896471),
    a = n(179122),
    o = n(449285),
    s = n(800054),
    l = TypeError;
e.exports = function (e, t) {
    var n = arguments.length < 2 ? s(e) : t;
    if (i(n)) return a(r(n, e));
    throw new l(o(e) + ' is not iterable');
};
