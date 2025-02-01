var r = a(926515),
    n = a(354848),
    o = a(622281),
    _ = TypeError;
t.exports = function (t, e) {
    var a, i;
    if (('string' === e && n((a = t.toString)) && !o((i = r(a, t)))) || (n((a = t.valueOf)) && !o((i = r(a, t)))) || ('string' !== e && n((a = t.toString)) && !o((i = r(a, t))))) return i;
    throw _("Can't convert object to primitive value");
};
