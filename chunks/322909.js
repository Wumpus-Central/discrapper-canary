var r = n(748372);
e.exports = function (e, t, n) {
    for (var i = -1, a = e.criteria, o = t.criteria, s = a.length, l = n.length; ++i < s; ) {
        var c = r(a[i], o[i]);
        if (c) {
            if (i >= l) return c;
            return c * ('desc' == n[i] ? -1 : 1);
        }
    }
    return e.index - t.index;
};
