n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(990078),
    r = n(187322),
    o = n(793574),
    d = n(688810),
    u = n(46225),
    c = n(486020),
    g = n(221124);
let _ = (e) => {
    let { disabled: t = !1, application: n, className: l, innerClassName: _ } = e,
        { canStartAuthorization: m, startAuthorization: h, fetched: A } = (0, u.RD)(n);
    t = t || !A || !m;
    let { analyticsLocations: p } = (0, d.Ay)(o.A.USER_SETTINGS_CONNECTIONS),
        E = c.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
    return (0, i.jsx)(a.m, {
        text: n.name,
        children: (0, i.jsx)("div", {
            className: s()(g.iE, l),
            children: (0, i.jsx)(r.vN, {
                children: (0, i.jsx)("button", {
                    className: s()(g.vW, _),
                    type: "button",
                    onClick: () => h({ analyticsLocations: p }),
                    "aria-label": n.name,
                    disabled: t,
                    children: (0, i.jsx)("img", { className: g.Kk, src: E, height: 28, width: 28, alt: n.name }),
                }),
            }),
        }),
    });
};
