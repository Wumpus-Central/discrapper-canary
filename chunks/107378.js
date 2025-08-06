var r = n(92801),
    i = n(58834);
e.exports = function (e) {
    for (var t = i(e), n = t.length; n--; ) {
        var o = t[n],
            a = e[o];
        t[n] = [o, a, r(a)];
    }
    return t;
};
