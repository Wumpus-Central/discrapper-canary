var r = n(363477);
e.exports = function (e, t, n) {
    for (var i = -1, a = e.criteria, s = t.criteria, o = a.length, l = n.length; ++i < o; ) {
        var c = r(a[i], s[i]);
        if (c) {
            if (i >= l) return c;
            return c * ("desc" == n[i] ? -1 : 1);
        }
    }
    return e.index - t.index;
};
