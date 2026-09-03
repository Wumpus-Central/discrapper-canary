n.d(t, { N: () => c });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(38021),
    o = n(86182),
    d = n(112834);
function c(e) {
    let {
            theme: t,
            gradient: n,
            disableAdaptiveTheme: a,
            reduceAdaptiveTheme: c,
            customBackgroundClassName: u,
            children: _,
        } = e,
        { theme: E } = r.useContext(l.Dx);
    return (0, i.jsx)(o.w, {
        theme: t,
        gradient: n,
        disableAdaptiveTheme: a,
        reduceAdaptiveTheme: c,
        children: _(
            s()((0, d.m)(n?.theme ?? t ?? E), {
                [u ?? ""]: null != n && null != u,
                "disable-adaptive-theme": a,
                "reduce-adaptive-theme": c,
            }),
        ),
    });
}
