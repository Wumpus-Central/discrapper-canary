var n = r(961271),
    i = r(295864);
t.exports = function (t) {
    for (var e = t; e && e !== n(t).documentElement; ) {
        var r = i(e);
        if (null != r) return r;
        e = e.parentNode;
    }
    return null;
};
