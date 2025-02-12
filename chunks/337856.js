var r = a(926515),
    n = a(354848),
    _ = a(622281),
    o = TypeError;
t.exports = function (t, e) {
    var a, i;
    if (('string' === e && n((a = t.toString)) && !_((i = r(a, t)))) || (n((a = t.valueOf)) && !_((i = r(a, t)))) || ('string' !== e && n((a = t.toString)) && !_((i = r(a, t))))) return i;
    throw o("Can't convert object to primitive value");
};
