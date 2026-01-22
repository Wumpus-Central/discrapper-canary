var r = n(120394),
    i = Math.max,
    a = Math.min;
e.exports = function (e, t) {
    var n = r(e);
    return n < 0 ? i(n + t, 0) : a(n, t);
};
