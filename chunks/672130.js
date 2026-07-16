n.d(t, { A: () => h });
var a = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    l = n(866665),
    c = n(187322),
    r = n(793574),
    d = n(688810),
    o = n(206828),
    p = n(486020),
    u = n(475135);
let h = function (e) {
    let { disabled: t = !1, application: n, className: i, innerClassName: h } = e,
        { canStartAuthorization: m, startAuthorization: N, fetched: v } = (0, o.RD)(n);
    t = t || !v || !m;
    let { analyticsLocations: A } = (0, d.Ay)(r.A.USER_SETTINGS_CONNECTIONS),
        b = p.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
    return (0, a.jsx)(l.m, {
        text: n.name,
        children: (0, a.jsx)("div", {
            className: s()(u.iE, i),
            children: (0, a.jsx)(c.vN, {
                children: (0, a.jsx)("button", {
                    className: s()(u.vW, h),
                    type: "button",
                    onClick: () => N({ analyticsLocations: A }),
                    "aria-label": n.name,
                    disabled: t,
                    children: (0, a.jsx)("img", { className: u.In, src: b, height: 28, width: 28, alt: n.name }),
                }),
            }),
        }),
    });
};
