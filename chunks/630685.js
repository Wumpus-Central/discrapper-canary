var r = n(961271),
    i = n(295864);
e.exports = function (e) {
    for (var t = e; t && t !== r(e).documentElement; ) {
        var n = i(t);
        if (null != n) return n;
        t = t.parentNode;
    }
    return null;
};
