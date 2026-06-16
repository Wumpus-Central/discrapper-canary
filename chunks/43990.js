"use strict";
n.d(t, { N: () => c });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(38021),
    l = n(86182),
    u = n(112834);
function c(e) {
    let {
            theme: t,
            gradient: n,
            disableAdaptiveTheme: s,
            reduceAdaptiveTheme: c,
            customBackgroundClassName: d,
            children: _,
        } = e,
        { theme: h } = r.useContext(o.Dx);
    return (0, i.jsx)(l.w, {
        theme: t,
        gradient: n,
        disableAdaptiveTheme: s,
        reduceAdaptiveTheme: c,
        children: _(
            a()((0, u.m)(n?.theme ?? t ?? h), {
                [d ?? ""]: null != n && null != d,
                "disable-adaptive-theme": s,
                "reduce-adaptive-theme": c,
            }),
        ),
    });
}
