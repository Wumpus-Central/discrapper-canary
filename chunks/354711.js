n.d(t, { f: () => d });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(710260),
    l = n(463085),
    c = n(472558),
    u = n(168551);
function d(e) {
    var t, n;
    let { theme: a, gradient: d, disableAdaptiveTheme: f, reduceAdaptiveTheme: _, children: p } = e,
        { theme: h } = i.useContext(s.Ni);
    return (0, r.jsx)(l.z, {
        theme: a,
        gradient: d,
        disableAdaptiveTheme: f,
        reduceAdaptiveTheme: _,
        children: p(
            o()((0, c.Q)(null != (n = null != (t = null == d ? void 0 : d.theme) ? t : a) ? n : h), {
                [u.e3]: null != d,
                'disable-adaptive-theme': f,
                'reduce-adaptive-theme': _
            })
        )
    });
}
