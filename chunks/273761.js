var n = e(120394),
    o = Math.max,
    i = Math.min;
r.exports = function (r, t) {
    var e = n(r);
    return e < 0 ? o(e + t, 0) : i(e, t);
};
