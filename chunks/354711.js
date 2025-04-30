n.d(t, { f: () => d });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(710260),
    l = n(463085),
    c = n(472558),
    u = n(168551);
function d(e) {
    var t, n;
    let { theme: o, gradient: d, disableAdaptiveTheme: f, reduceAdaptiveTheme: _, children: p } = e,
        { theme: h } = i.useContext(s.Ni);
    return (0, r.jsx)(l.z, {
        theme: o,
        gradient: d,
        disableAdaptiveTheme: f,
        reduceAdaptiveTheme: _,
        children: p(
            a()((0, c.Q)(null != (n = null != (t = null == d ? void 0 : d.theme) ? t : o) ? n : h), {
                [u.e3]: null != d,
                'disable-adaptive-theme': f,
                'reduce-adaptive-theme': _
            })
        )
    });
}
