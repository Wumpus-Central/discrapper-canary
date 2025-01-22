var i = r(748372);
function a(e, n, r) {
    for (var a = -1, o = e.criteria, s = n.criteria, l = o.length, u = r.length; ++a < l; ) {
        var c = i(o[a], s[a]);
        if (c) {
            if (a >= u) return c;
            return c * ('desc' == r[a] ? -1 : 1);
        }
    }
    return e.index - n.index;
}
e.exports = a;
