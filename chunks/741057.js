var i = r(421896),
    a = r(318670),
    o = r(193079),
    s = r(97106),
    l = r(257109),
    u = r(315162),
    c = r(532455),
    d = r(676067),
    f = 1,
    p = '[object Arguments]',
    h = '[object Array]',
    _ = '[object Object]',
    m = Object.prototype.hasOwnProperty;
function g(e, n, r, g, E, v) {
    var y = (0, u.Z)(e),
        b = (0, u.Z)(n),
        I = y ? h : (0, l.Z)(e),
        T = b ? h : (0, l.Z)(n);
    (I = I == p ? _ : I), (T = T == p ? _ : T);
    var S = I == _,
        A = T == _,
        C = I == T;
    if (C && (0, c.Z)(e)) {
        if (!(0, c.Z)(n)) return !1;
        (y = !0), (S = !1);
    }
    if (C && !S) return v || (v = new i.Z()), y || (0, d.Z)(e) ? (0, a.Z)(e, n, r, g, E, v) : (0, o.Z)(e, n, I, r, g, E, v);
    if (!(r & f)) {
        var N = S && m.call(e, '__wrapped__'),
            R = A && m.call(n, '__wrapped__');
        if (N || R) {
            var O = N ? e.value() : e,
                D = R ? n.value() : n;
            return v || (v = new i.Z()), E(O, D, r, g, v);
        }
    }
    return !!C && (v || (v = new i.Z()), (0, s.Z)(e, n, r, g, E, v));
}
n.Z = g;
