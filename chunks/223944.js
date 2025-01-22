var i = r(338752),
    a = Math.max,
    o = Math.min;
e.exports = function (e, n) {
    var r = i(e);
    return r < 0 ? a(r + n, 0) : o(r, n);
};
