var r = n(446474),
    i = n(514575),
    a = n(101968),
    s = n(406208),
    o = n(331336),
    l = TypeError;
e.exports = function (e, t) {
    var n = arguments.length < 2 ? o(e) : t;
    if (i(n)) return a(r(n, e));
    throw new l(s(e) + " is not iterable");
};
