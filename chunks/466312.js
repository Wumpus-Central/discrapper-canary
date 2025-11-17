var r = n(258329),
    i = n(279636);
e.exports = function (e) {
    for (var t = e; t && t !== r(e).documentElement; ) {
        var n = i(t);
        if (null != n) return n;
        t = t.parentNode;
    }
    return null;
};
