t.d(e, { default: () => h });
var n = t(477900);
t(582128);
var i = t(189213),
    s = t(276983),
    a = t(31300),
    c = t(983851),
    o = t(834730),
    l = t(733767);
function d(r) {
    let { permission: e } = r;
    switch (e) {
        case "screen_capture":
            return (0, n.jsx)(a.k, { size: "md", color: "currentColor", "aria-hidden": !0 });
        case "connect_user_to_voice":
            return (0, n.jsx)(c.H, { size: "md", color: "currentColor", "aria-hidden": !0 });
    }
}
function u(r) {
    let { permissions: e } = r;
    return (0, n.jsx)("ul", {
        className: l.p,
        children: e.map((r) =>
            (0, n.jsxs)(
                "li",
                {
                    className: l.n,
                    children: [
                        (0, n.jsx)(d, { permission: r }),
                        (0, n.jsx)(o.E, { variant: "text-md/medium", color: "text-strong", children: (0, s.Us)(r) }),
                    ],
                },
                r,
            ),
        ),
    });
}
var p = t(248675),
    x = t(105292);
function h(r) {
    let { appName: e, permissions: t, onDecide: a, ...c } = r;
    function o(r) {
        (a(r), c.onClose());
    }
    return (0, n.jsx)(i.a, {
        ...c,
        role: "alertdialog",
        title: (0, s.Et)(e),
        actions: [
            { text: x.intl.string(p.default.rDyl56), variant: "secondary", onClick: () => o(!1) },
            { text: x.intl.string(p.default.xbsXd9), variant: "primary", onClick: () => o(!0) },
        ],
        children: (0, n.jsx)(u, { permissions: t }),
    });
}
