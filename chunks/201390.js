var e = r(77826),
    o = Math.max,
    i = Math.min;
t.exports = function (t, n) {
    var r = e(t);
    return r < 0 ? o(r + n, 0) : i(r, n);
};
