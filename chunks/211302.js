var r = n(89582),
    i = n(437014);
e.exports = function (e, t, n, a) {
    var s = e.length;
    for (
        (n = r(n)) < 0 && (n = -n > s ? 0 : s + n),
            (a = void 0 === a || a > s ? s : r(a)) < 0 && (a += s),
            a = n > a ? 0 : i(a);
        n < a;
    )
        e[n++] = t;
    return e;
};
