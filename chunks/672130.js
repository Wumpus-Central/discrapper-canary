a.d(t, { A: () => h });
var n = a(627968);
a(64700);
var i = a(503698),
    s = a.n(i),
    l = a(990078),
    c = a(187322),
    r = a(793574),
    d = a(688810),
    o = a(206828),
    p = a(486020),
    u = a(475135);
let h = (e) => {
    let { disabled: t = !1, application: a, className: i, innerClassName: h } = e,
        { canStartAuthorization: m, startAuthorization: N, fetched: v } = (0, o.RD)(a);
    t = t || !v || !m;
    let { analyticsLocations: A } = (0, d.Ay)(r.A.USER_SETTINGS_CONNECTIONS),
        b = p.Ay.getApplicationIconURL({ id: a.id, icon: a.icon });
    return (0, n.jsx)(l.m, {
        text: a.name,
        children: (0, n.jsx)("div", {
            className: s()(u.iE, i),
            children: (0, n.jsx)(c.vN, {
                children: (0, n.jsx)("button", {
                    className: s()(u.vW, h),
                    type: "button",
                    onClick: () => N({ analyticsLocations: A }),
                    "aria-label": a.name,
                    disabled: t,
                    children: (0, n.jsx)("img", { className: u.In, src: b, height: 28, width: 28, alt: a.name }),
                }),
            }),
        }),
    });
};
