var r = n(765405),
    i = 1,
    a = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, s, o, l) {
    var c = n & i,
        u = r(e),
        d = u.length;
    if (d != r(t).length && !c) return !1;
    for (var f = d; f--; ) {
        var p = u[f];
        if (!(c ? p in t : a.call(t, p))) return !1;
    }
    var _ = l.get(e);
    if (_ && l.get(t)) return _ == t;
    var h = !0;
    l.set(e, t), l.set(t, e);
    for (var m = c; ++f < d; ) {
        var g = e[(p = u[f])],
            E = t[p];
        if (s) var b = c ? s(E, g, p, t, e, l) : s(g, E, p, e, t, l);
        if (!(void 0 === b ? g === E || o(g, E, n, s, l) : b)) {
            h = !1;
            break;
        }
        m || (m = "constructor" == p);
    }
    if (h && !m) {
        var y = e.constructor,
            O = t.constructor;
        y != O &&
            "constructor" in e &&
            "constructor" in t &&
            !("function" == typeof y && y instanceof y && "function" == typeof O && O instanceof O) &&
            (h = !1);
    }
    return l.delete(e), l.delete(t), h;
};
