var r = n(570596),
    i = n(735471),
    o = n(982665),
    a = TypeError;
e.exports = function (e, t) {
    var n, s;
    if (('string' === t && i((n = e.toString)) && !o((s = r(n, e)))) || (i((n = e.valueOf)) && !o((s = r(n, e)))) || ('string' !== t && i((n = e.toString)) && !o((s = r(n, e))))) return s;
    throw new a("Can't convert object to primitive value");
};
