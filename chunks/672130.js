n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(990078),
    r = n(187322),
    o = n(793574),
    d = n(688810),
    u = n(362490),
    c = n(486020),
    g = n(221124);
let m = (e) => {
    let { disabled: t = !1, application: n, className: s, innerClassName: m } = e,
        { canStartAuthorization: _, startAuthorization: A, fetched: h } = (0, u.RD)(n);
    t = t || !h || !_;
    let { analyticsLocations: p } = (0, d.Ay)(o.A.USER_SETTINGS_CONNECTIONS),
        x = c.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
    return (0, i.jsx)(a.m, {
        text: n.name,
        children: (0, i.jsx)("div", {
            className: l()(g.iE, s),
            children: (0, i.jsx)(r.vN, {
                children: (0, i.jsx)("button", {
                    className: l()(g.vW, m),
                    type: "button",
                    onClick: () => A({ analyticsLocations: p }),
                    "aria-label": n.name,
                    disabled: t,
                    children: (0, i.jsx)("img", { className: g.Kk, src: x, height: 28, width: 28, alt: n.name }),
                }),
            }),
        }),
    });
};
