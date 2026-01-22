var r = n(446474),
    i = n(101968),
    a = n(95959);
e.exports = function (e, t, n) {
    var s, o;
    i(e);
    try {
        if (!(s = a(e, "return"))) {
            if ("throw" === t) throw n;
            return n;
        }
        s = r(s, e);
    } catch (e) {
        (o = !0), (s = e);
    }
    if ("throw" === t) throw n;
    if (o) throw s;
    return i(s), n;
};
