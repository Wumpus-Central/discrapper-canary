var n = r(234343),
    i = r(661567);
t.exports = function (t) {
    for (var e = t; e && e !== n(t).documentElement; ) {
        var r = i(e);
        if (null != r) return r;
        e = e.parentNode;
    }
    return null;
};
