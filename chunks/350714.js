var a = t(446474),
    n = t(101968),
    o = t(95959);
e.exports = function (e, r, t) {
    var c, s;
    n(e);
    try {
        if (!(c = o(e, "return"))) {
            if ("throw" === r) throw t;
            return t;
        }
        c = a(c, e);
    } catch (e) {
        ((s = !0), (c = e));
    }
    if ("throw" === r) throw t;
    if (s) throw c;
    return (n(c), t);
};
