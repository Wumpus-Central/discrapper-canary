var r = n(92801),
    i = n(58834);
e.exports = function (e) {
    for (var t = i(e), n = t.length; n--; ) {
        var a = t[n],
            o = e[a];
        t[n] = [a, o, r(o)];
    }
    return t;
};
