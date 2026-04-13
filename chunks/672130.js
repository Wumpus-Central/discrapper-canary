n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(435371),
    a = n(397927),
    o = n(793574),
    d = n(688810),
    c = n(362490),
    u = n(486020),
    m = n(993396);
let g = (e) => {
    let { disabled: t = !1, application: n, className: s, innerClassName: g } = e,
        { canStartAuthorization: _, startAuthorization: x, fetched: A } = (0, c.RD)(n);
    t = t || !A || !_;
    let { analyticsLocations: h } = (0, d.Ay)(o.A.USER_SETTINGS_CONNECTIONS),
        p = u.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
    return (0, i.jsx)(r.m_, {
        text: n.name,
        children: (0, i.jsx)("div", {
            className: l()(m.i, s),
            children: (0, i.jsx)(a.vN3, {
                children: (0, i.jsx)("button", {
                    className: l()(m.v, g),
                    type: "button",
                    style: { backgroundImage: `url('${p}')` },
                    onClick: () => x({ analyticsLocations: h }),
                    "aria-label": n.name,
                    disabled: t,
                }),
            }),
        }),
    });
};
