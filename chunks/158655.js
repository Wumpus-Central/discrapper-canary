var i = r(584428),
    a = r(438330);
function o(e) {
    for (var n = a(e), r = n.length; r--; ) {
        var o = n[r],
            s = e[o];
        n[r] = [o, s, i(s)];
    }
    return n;
}
e.exports = o;
