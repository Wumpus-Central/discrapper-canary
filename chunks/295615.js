"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(624368),
    a = n(158954),
    o = n(311907),
    l = n(397927),
    u = n(830215),
    c = n(287809),
    d = n(683105),
    _ = n(89050),
    f = n(221425),
    p = n(985018),
    h = n(289286);
function m() {
    u.A.logout("restricted_hours");
}
function E(e) {
    let { onClose: t } = e,
        n = (0, _.A)(),
        u = (0, d.A)(),
        E = (0, o.bG)([c.default], () => c.default.getCurrentUser()?.username ?? "");
    i.useEffect(() => {
        n || t();
    }, [n, t]);
    let g = null != u ? p.intl.format(f.default.VfqJvY, { endTime: u }) : p.intl.string(f.default.abikhN);
    return (0, r.jsxs)("div", {
        className: h.Tp,
        children: [
            (0, r.jsx)("div", { className: h.cU }),
            (0, r.jsx)(s.w, { artboard: "Gradient Horizontal", className: h.DL }),
            (0, r.jsxs)(a.BJc, {
                direction: "vertical",
                align: "center",
                gap: 16,
                className: `${h.kL} ${h.vx}`,
                children: [
                    (0, r.jsx)(s.w, {
                        artboard: "Teen Screen Time Illo",
                        stateMachine: "State Machine 1",
                        className: h.jw,
                    }),
                    (0, r.jsx)(a.EYj, { variant: "text-lg/medium", color: "text-muted", className: h.h_, children: g }),
                ],
            }),
            (0, r.jsx)("div", {
                className: `${h.qr} ${h.vx}`,
                children: (0, r.jsx)(a.EYj, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: p.intl.format(f.default.iqeKDz, {
                        username: E,
                        loginHook: (e, t) => (0, r.jsx)(l.MzZ, { onClick: m, children: e }, t),
                    }),
                }),
            }),
        ],
    });
}
