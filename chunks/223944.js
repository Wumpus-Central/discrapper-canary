var r = n(338752),
    i = Math.max,
    o = Math.min;
e.exports = function (e, t) {
    var n = r(e);
    return n < 0 ? i(n + t, 0) : o(n, t);
};
