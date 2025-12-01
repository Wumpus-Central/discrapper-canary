n.d(t, { f: () => u });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(70007),
    l = n(795452),
    c = n(623294);
function u(e) {
    var t, n;
    let {
            theme: a,
            gradient: u,
            disableAdaptiveTheme: d,
            reduceAdaptiveTheme: f,
            customBackgroundClassName: p,
            children: _,
        } = e,
        { theme: m } = i.useContext(s.Ni);
    return (0, r.jsx)(l.z, {
        theme: a,
        gradient: u,
        disableAdaptiveTheme: d,
        reduceAdaptiveTheme: f,
        children: _(
            o()((0, c.Q)(null != (n = null != (t = null == u ? void 0 : u.theme) ? t : a) ? n : m), {
                [null != p ? p : ""]: null != u && null != p,
                "disable-adaptive-theme": d,
                "reduce-adaptive-theme": f,
            }),
        ),
    });
}
