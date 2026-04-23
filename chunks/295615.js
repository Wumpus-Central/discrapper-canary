"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    s = n(624368),
    a = n(331322),
    o = n(834730),
    l = n(311907),
    u = n(349288),
    c = n(830215),
    d = n(287809),
    _ = n(683105),
    f = n(89050),
    p = n(602339),
    h = n(985018),
    E = n(88438);
function m() {
    c.A.logout("restricted_hours");
}
function g(e) {
    let { onClose: t } = e,
        n = (0, f.A)(),
        c = (0, _.A)(),
        g = (0, l.bG)([d.default], () => d.default.getCurrentUser()?.username ?? "");
    i.useEffect(() => {
        n || t();
    }, [n, t]);
    let A = null != c ? h.intl.format(p.default.VfqJvY, { endTime: c }) : h.intl.string(p.default.abikhN);
    return (0, r.jsxs)("div", {
        className: E.Tp,
        children: [
            (0, r.jsx)("div", { className: E.cU }),
            (0, r.jsx)(s.w, { artboard: "Gradient Horizontal", className: E.DL }),
            (0, r.jsxs)(a.B, {
                direction: "vertical",
                align: "center",
                gap: 16,
                className: `${E.kL} ${E.vx}`,
                children: [
                    (0, r.jsx)(s.w, {
                        artboard: "Teen Screen Time Illo",
                        stateMachine: "State Machine 1",
                        className: E.jw,
                    }),
                    (0, r.jsx)(o.E, { variant: "text-lg/medium", color: "text-muted", className: E.h_, children: A }),
                ],
            }),
            (0, r.jsx)("div", {
                className: `${E.qr} ${E.vx}`,
                children: (0, r.jsx)(o.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: h.intl.format(p.default.iqeKDz, {
                        username: g,
                        loginHook: (e, t) => (0, r.jsx)(u.Anchor, { onClick: m, children: e }, t),
                    }),
                }),
            }),
        ],
    });
}
