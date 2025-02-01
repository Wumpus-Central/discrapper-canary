var i = n(748372);
function r(e, t, n) {
    for (var r = -1, a = e.criteria, s = t.criteria, o = a.length, l = n.length; ++r < o; ) {
        var u = i(a[r], s[r]);
        if (u) {
            if (r >= l) return u;
            return u * ('desc' == n[r] ? -1 : 1);
        }
    }
    return e.index - t.index;
}
e.exports = r;
