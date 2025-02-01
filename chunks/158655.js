var i = n(584428),
    r = n(438330);
function a(e) {
    for (var t = r(e), n = t.length; n--; ) {
        var a = t[n],
            s = e[a];
        t[n] = [a, s, i(s)];
    }
    return t;
}
e.exports = a;
