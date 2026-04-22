var r = n(765405),
    i = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, s, a, o) {
    var l = 1 & n,
        u = r(e),
        d = u.length;
    if (d != r(t).length && !l) return !1;
    for (var c = d; c--; ) {
        var _ = u[c];
        if (!(l ? _ in t : i.call(t, _))) return !1;
    }
    var f = o.get(e);
    if (f && o.get(t)) return f == t;
    var E = !0;
    o.set(e, t), o.set(t, e);
    for (var h = l; ++c < d; ) {
        var p = e[(_ = u[c])],
            m = t[_];
        if (s) var g = l ? s(m, p, _, t, e, o) : s(p, m, _, e, t, o);
        if (!(void 0 === g ? p === m || a(p, m, n, s, o) : g)) {
            E = !1;
            break;
        }
        h || (h = "constructor" == _);
    }
    if (E && !h) {
        var A = e.constructor,
            I = t.constructor;
        A != I &&
            "constructor" in e &&
            "constructor" in t &&
            !("function" == typeof A && A instanceof A && "function" == typeof I && I instanceof I) &&
            (E = !1);
    }
    return o.delete(e), o.delete(t), E;
};
