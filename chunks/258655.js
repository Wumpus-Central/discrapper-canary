n.d(e, { default: () => m });
var t = n(477900);
n(582128);
var i = n(189213),
    s = n(276983),
    c = n(31300),
    a = n(983851),
    o = n(834730),
    l = n(733767);
function d(r) {
    let { permission: e } = r;
    switch (e) {
        case "screen_capture":
            return (0, t.jsx)(c.ScreenIcon, { size: "md", color: "currentColor", "aria-hidden": !0 });
        case "connect_user_to_voice":
            return (0, t.jsx)(a.VoiceNormalIcon, { size: "md", color: "currentColor", "aria-hidden": !0 });
    }
}
function u(r) {
    let { permissions: e } = r;
    return (0, t.jsx)("ul", {
        className: l.p,
        children: e.map((r) =>
            (0, t.jsxs)(
                "li",
                {
                    className: l.n,
                    children: [
                        (0, t.jsx)(d, { permission: r }),
                        (0, t.jsx)(o.E, { variant: "body-md/medium", color: "text-strong", children: (0, s.Us)(r) }),
                    ],
                },
                r,
            ),
        ),
    });
}
var p = n(191850),
    h = n(792996);
function m(r) {
    let { appName: e, permissions: n, onDecide: c, ...a } = r;
    function o(r) {
        (c(r), a.onClose());
    }
    return (0, t.jsx)(i.a, {
        ...a,
        role: "alertdialog",
        title: (0, s.Et)(e),
        actions: [
            { text: h.intl.string(p.default.rDyl56), variant: "secondary", onClick: () => o(!1) },
            { text: h.intl.string(p.default.xbsXd9), variant: "primary", onClick: () => o(!0) },
        ],
        children: (0, t.jsx)(u, { permissions: n }),
    });
}
