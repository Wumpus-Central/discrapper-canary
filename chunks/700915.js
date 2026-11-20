l.d(t, { A: () => v });
var n = l(477900),
    a = l(582128),
    r = l(323384),
    i = l(646514),
    s = l(834730),
    u = l(845079),
    o = l(762026),
    d = l(921853),
    c = l(320448),
    f = l(377626);
function m(e) {
    let { flow: t, play: l } = e;
    return (0, n.jsxs)("span", {
        className: f.M3,
        "aria-hidden": !0,
        children: [
            (0, n.jsx)("span", { className: f.n8 }),
            "gets" === t || "both" === t
                ? (0, n.jsx)("span", {
                      className: f.xk,
                      children: (0, n.jsx)(d.ChevronSmallLeftIcon, { size: "xxs", color: i.A.colors.ICON_MUTED }),
                  })
                : null,
            "sends" === t || "both" === t
                ? (0, n.jsx)("span", {
                      className: f.WO,
                      children: (0, n.jsx)(c.ChevronSmallRightIcon, { size: "xxs", color: i.A.colors.ICON_MUTED }),
                  })
                : null,
            null != t ? (0, n.jsx)("span", { className: f.xA, "data-flow": t }, l) : null,
        ],
    });
}
var g = l(900276);
function p(e) {
    let { name: t, project: l } = e;
    return (0, n.jsxs)("div", {
        className: g.yA,
        children: [
            null != l
                ? (0, n.jsx)(u.A, { project: l, size: "header" })
                : (0, n.jsx)("div", {
                      className: g.Pz,
                      children: (0, n.jsx)(r.AppsIcon, { size: "xxs", color: i.A.colors.INTERACTIVE_ICON_DEFAULT }),
                  }),
            (0, n.jsx)(s.E, { variant: "body-md/medium", color: "text-strong", lineClamp: 1, children: t }),
        ],
    });
}
function v(e) {
    let { caller: t, target: l, callerProject: r, targetProject: i, flow: s } = e,
        [u, d] = a.useState(0);
    return (0, n.jsxs)("div", {
        className: g.wx,
        role: "img",
        "aria-label": (0, o.XK)({ caller: t, target: l }, s),
        onMouseEnter: () => d((e) => e + 1),
        children: [
            (0, n.jsx)(p, { name: t, project: r }),
            (0, n.jsx)(m, { flow: s, play: u }),
            (0, n.jsx)(p, { name: l, project: i }),
        ],
    });
}
