var n = e(771161),
    o = RangeError;
r.exports = function (r, t) {
    var e = n(r);
    if (e % t) throw new o("Wrong offset");
    return e;
};
