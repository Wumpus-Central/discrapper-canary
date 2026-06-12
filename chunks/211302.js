var i = n(89582),
    r = n(437014);
e.exports = function (e, t, n, s) {
    var a = e.length;
    for (
        (n = i(n)) < 0 && (n = -n > a ? 0 : a + n),
            (s = void 0 === s || s > a ? a : i(s)) < 0 && (s += a),
            s = n > s ? 0 : r(s);
        n < s;
    )
        e[n++] = t;
    return e;
};
