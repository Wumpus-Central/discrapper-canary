var i = n(338752),
    r = Math.max,
    a = Math.min;
e.exports = function (e, t) {
    var n = i(e);
    return n < 0 ? r(n + t, 0) : a(n, t);
};
