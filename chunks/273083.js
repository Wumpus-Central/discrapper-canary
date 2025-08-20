var r = n(234343),
    i = n(661567);
e.exports = function (e) {
    for (var t = e; t && t !== r(e).documentElement; ) {
        var n = i(t);
        if (null != n) return n;
        t = t.parentNode;
    }
    return null;
};
