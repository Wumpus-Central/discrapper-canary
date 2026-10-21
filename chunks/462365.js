e.d(r, { default: () => x });
var i = e(477900);
e(582128);
var n = e(189213),
    s = e(276983),
    a = e(31300),
    l = e(834730),
    c = e(733767);
function o(t) {
    let { permission: r } = t;
    if ("screen_capture" === r) return (0, i.jsx)(a.k, { size: "md", color: "currentColor", "aria-hidden": !0 });
}
function d(t) {
    let { permissions: r } = t;
    return (0, i.jsx)("ul", {
        className: c.p,
        children: r.map((t) =>
            (0, i.jsxs)(
                "li",
                {
                    className: c.n,
                    children: [
                        (0, i.jsx)(o, { permission: t }),
                        (0, i.jsx)(l.E, { variant: "text-md/medium", color: "text-strong", children: (0, s.Us)(t) }),
                    ],
                },
                t,
            ),
        ),
    });
}
var u = e(248675),
    p = e(105292);
function x(t) {
    let { appName: r, permissions: e, onDecide: a, ...l } = t;
    function c(t) {
        (a(t), l.onClose());
    }
    return (0, i.jsx)(n.a, {
        ...l,
        role: "alertdialog",
        title: (0, s.Et)(r),
        actions: [
            { text: p.intl.string(u.default.rDyl56), variant: "secondary", onClick: () => c(!1) },
            { text: p.intl.string(u.default.xbsXd9), variant: "primary", onClick: () => c(!0) },
        ],
        children: (0, i.jsx)(d, { permissions: e }),
    });
}
