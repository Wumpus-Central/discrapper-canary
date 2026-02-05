"use strict";
n.d(t, { N: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(38021),
    l = n(86182),
    u = n(112834);
function c(e) {
    let {
            theme: t,
            gradient: n,
            disableAdaptiveTheme: a,
            reduceAdaptiveTheme: c,
            customBackgroundClassName: d,
            children: _,
        } = e,
        { theme: f } = i.useContext(o.Dx);
    return (0, r.jsx)(l.w, {
        theme: t,
        gradient: n,
        disableAdaptiveTheme: a,
        reduceAdaptiveTheme: c,
        children: _(
            s()((0, u.m)(n?.theme ?? t ?? f), {
                [d ?? ""]: null != n && null != d,
                "disable-adaptive-theme": a,
                "reduce-adaptive-theme": c,
            }),
        ),
    });
}
