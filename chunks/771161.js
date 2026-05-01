var n = e(120394),
    o = RangeError;
r.exports = function (r) {
    var t = n(r);
    if (t < 0) throw new o("The argument can't be less than 0");
    return t;
};
