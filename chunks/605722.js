var i = r(570596),
    a = r(735471),
    o = r(982665),
    s = TypeError;
e.exports = function (e, n) {
    var r, l;
    if (('string' === n && a((r = e.toString)) && !o((l = i(r, e)))) || (a((r = e.valueOf)) && !o((l = i(r, e)))) || ('string' !== n && a((r = e.toString)) && !o((l = i(r, e))))) return l;
    throw new s("Can't convert object to primitive value");
};
