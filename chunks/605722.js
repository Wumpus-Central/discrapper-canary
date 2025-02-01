var i = n(570596),
    r = n(735471),
    a = n(982665),
    s = TypeError;
e.exports = function (e, t) {
    var n, o;
    if (('string' === t && r((n = e.toString)) && !a((o = i(n, e)))) || (r((n = e.valueOf)) && !a((o = i(n, e)))) || ('string' !== t && r((n = e.toString)) && !a((o = i(n, e))))) return o;
    throw new s("Can't convert object to primitive value");
};
