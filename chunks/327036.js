var a = t(446474),
    n = t(514575),
    o = t(101968),
    c = t(406208),
    s = t(331336),
    i = TypeError;
e.exports = function (e, r) {
    var t = arguments.length < 2 ? s(e) : r;
    if (n(t)) return o(a(t, e));
    throw new i(c(e) + " is not iterable");
};
