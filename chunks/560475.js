var i = n(363477);
e.exports = function (e, t, n) {
    for (var r = -1, s = e.criteria, a = t.criteria, o = s.length, l = n.length; ++r < o; ) {
        var u = i(s[r], a[r]);
        if (u) {
            if (r >= l) return u;
            return u * ("desc" == n[r] ? -1 : 1);
        }
    }
    return e.index - t.index;
};
