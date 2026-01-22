n.d(t, {
    N: () => u,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(38021),
    l = n(86182),
    c = n(112834);

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
        { theme: h } = i.useContext(o.Dx);
    return (0, r.jsx)(l.w, {
        theme: a,
        gradient: u,
        disableAdaptiveTheme: d,
        reduceAdaptiveTheme: f,
        children: _(
            s()((0, c.m)(null != (t = null != (n = null == u ? void 0 : u.theme) ? n : a) ? t : h), {
                [null != p ? p : ""]: null != u && null != p,
                "disable-adaptive-theme": d,
                "reduce-adaptive-theme": f,
            }),
        ),
    });
}
