n.d(t, { f: () => u });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(472558),
    c = n(168551);
function u(e) {
    var t, n;
    let { theme: a, gradient: u, disableAdaptiveTheme: d, reduceAdaptiveTheme: f, children: _ } = e,
        { theme: p } = i.useContext(s.Nil);
    return (0, r.jsx)(s.ze6, {
        theme: a,
        gradient: u,
        disableAdaptiveTheme: d,
        reduceAdaptiveTheme: f,
        children: _(
            o()((0, l.Q)(null != (n = null != (t = null == u ? void 0 : u.theme) ? t : a) ? n : p), {
                [c.e3]: null != u,
                "disable-adaptive-theme": d,
                "reduce-adaptive-theme": f,
            }),
        ),
    });
}
