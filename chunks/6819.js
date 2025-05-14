var e = r(580983),
    o = r(880181),
    i = r(434431),
    u = TypeError;
t.exports = function (t, n) {
    var r, c;
    if (('string' === n && o((r = t.toString)) && !i((c = e(r, t)))) || (o((r = t.valueOf)) && !i((c = e(r, t)))) || ('string' !== n && o((r = t.toString)) && !i((c = e(r, t))))) return c;
    throw new u("Can't convert object to primitive value");
};
