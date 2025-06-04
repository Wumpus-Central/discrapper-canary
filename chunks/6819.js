var r = n(580983),
    i = n(880181),
    a = n(434431),
    o = TypeError;
e.exports = function (e, t) {
    var n, s;
    if (('string' === t && i((n = e.toString)) && !a((s = r(n, e)))) || (i((n = e.valueOf)) && !a((s = r(n, e)))) || ('string' !== t && i((n = e.toString)) && !a((s = r(n, e))))) return s;
    throw new o("Can't convert object to primitive value");
};
