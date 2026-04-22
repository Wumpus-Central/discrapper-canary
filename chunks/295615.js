"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    s = n(624368),
    a = n(331322),
    o = n(834730),
    l = n(311907),
    u = n(349288),
    d = n(830215),
    c = n(287809),
    _ = n(683105),
    f = n(89050),
    E = n(477480),
    h = n(985018),
    p = n(693494);
function m() {
    d.A.logout("restricted_hours");
}
function g(e) {
    let { onClose: t } = e,
        n = (0, f.A)(),
        d = (0, _.A)(),
        g = (0, l.bG)([c.default], () => c.default.getCurrentUser()?.username ?? "");
    i.useEffect(() => {
        n || t();
    }, [n, t]);
    let A = null != d ? h.intl.format(E.default.VfqJvY, { endTime: d }) : h.intl.string(E.default.abikhN);
    return (0, r.jsxs)("div", {
        className: p.Tp,
        children: [
            (0, r.jsx)("div", { className: p.cU }),
            (0, r.jsx)(s.w, { artboard: "Gradient Horizontal", className: p.DL }),
            (0, r.jsxs)(a.B, {
                direction: "vertical",
                align: "center",
                gap: 16,
                className: `${p.kL} ${p.vx}`,
                children: [
                    (0, r.jsx)(s.w, {
                        artboard: "Teen Screen Time Illo",
                        stateMachine: "State Machine 1",
                        className: p.jw,
                    }),
                    (0, r.jsx)(o.E, { variant: "text-lg/medium", color: "text-muted", className: p.h_, children: A }),
                ],
            }),
            (0, r.jsx)("div", {
                className: `${p.qr} ${p.vx}`,
                children: (0, r.jsx)(o.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: h.intl.format(E.default.iqeKDz, {
                        username: g,
                        loginHook: (e, t) => (0, r.jsx)(u.Anchor, { onClick: m, children: e }, t),
                    }),
                }),
            }),
        ],
    });
}
