n.d(t, { Z: () => m });
var i = n(421896),
    r = n(318670),
    a = n(193079),
    s = n(97106),
    o = n(257109),
    l = n(315162),
    u = n(532455),
    c = n(676067),
    d = 1,
    f = '[object Arguments]',
    _ = '[object Array]',
    p = '[object Object]',
    h = Object.prototype.hasOwnProperty;
let m = function (e, t, n, m, g, E) {
    var v = (0, l.Z)(e),
        y = (0, l.Z)(t),
        I = v ? _ : (0, o.Z)(e),
        b = y ? _ : (0, o.Z)(t);
    (I = I == f ? p : I), (b = b == f ? p : b);
    var T = I == p,
        S = b == p,
        A = I == b;
    if (A && (0, u.Z)(e)) {
        if (!(0, u.Z)(t)) return !1;
        (v = !0), (T = !1);
    }
    if (A && !T) return E || (E = new i.Z()), v || (0, c.Z)(e) ? (0, r.Z)(e, t, n, m, g, E) : (0, a.Z)(e, t, I, n, m, g, E);
    if (!(n & d)) {
        var N = T && h.call(e, '__wrapped__'),
            C = S && h.call(t, '__wrapped__');
        if (N || C) {
            var R = N ? e.value() : e,
                O = C ? t.value() : t;
            return E || (E = new i.Z()), g(R, O, n, m, E);
        }
    }
    return !!A && (E || (E = new i.Z()), (0, s.Z)(e, t, n, m, g, E));
};
