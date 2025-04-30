var r = a(580983),
    n = a(880181),
    _ = a(434431),
    o = TypeError;
t.exports = function (t, e) {
    var a, i;
    if (('string' === e && n((a = t.toString)) && !_((i = r(a, t)))) || (n((a = t.valueOf)) && !_((i = r(a, t)))) || ('string' !== e && n((a = t.toString)) && !_((i = r(a, t))))) return i;
    throw new o("Can't convert object to primitive value");
};
