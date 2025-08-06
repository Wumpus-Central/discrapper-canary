var r = n(584428),
    i = n(438330);
e.exports = function (e) {
    for (var t = i(e), n = t.length; n--; ) {
        var o = t[n],
            a = e[o];
        t[n] = [o, a, r(a)];
    }
    return t;
};
