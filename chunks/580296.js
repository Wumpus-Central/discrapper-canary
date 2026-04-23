"use strict";
n.d(t, { openRestrictedHoursModal: () => N, k: () => C });
var i = n(627968),
    r = n(64700),
    s = n(361158),
    a = n(80556),
    o = n(632679),
    l = n(331322),
    d = n(834730),
    _ = n(17928),
    u = n(349288),
    c = n(830215),
    E = n(287809),
    h = n(985018),
    m = n(695515),
    f = n(425116),
    g = n(602339),
    p = n(88438);
function A() {
    c.A.logout("restricted_hours");
}
function I(e) {
    let { onClose: t } = e,
        n = (0, _.bG)([E.default, m.A], f.$),
        s = (0, _.bG)([E.default], () => {
            let e = E.default.getCurrentUser()?.restrictedSchedule?.getNextEndTime();
            return null == e
                ? null
                : new Intl.DateTimeFormat(h.intl.currentLocale, {
                      hour: "numeric",
                      minute: "2-digit",
                      weekday: "long",
                  }).format(e);
        }),
        a = (0, _.bG)([E.default], () => E.default.getCurrentUser()?.username ?? "");
    r.useEffect(() => {
        n || t();
    }, [n, t]);
    let c = null != s ? h.intl.format(g.default.VfqJvY, { endTime: s }) : h.intl.string(g.default.abikhN);
    return (0, i.jsxs)("div", {
        className: p.Tp,
        children: [
            (0, i.jsx)("div", { className: p.cU }),
            (0, i.jsx)(o.w, { artboard: "Gradient Horizontal", className: p.DL }),
            (0, i.jsxs)(l.B, {
                direction: "vertical",
                align: "center",
                gap: 16,
                className: `${p.kL} ${p.vx}`,
                children: [
                    (0, i.jsx)(o.w, {
                        artboard: "Teen Screen Time Illo",
                        stateMachine: "State Machine 1",
                        className: p.jw,
                    }),
                    (0, i.jsx)(d.E, { variant: "text-lg/medium", color: "text-muted", className: p.h_, children: c }),
                ],
            }),
            (0, i.jsx)("div", {
                className: `${p.qr} ${p.vx}`,
                children: (0, i.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: h.intl.format(g.default.iqeKDz, {
                        username: a,
                        loginHook: (e, t) => (0, i.jsx)(u.Anchor, { onClick: A, children: e }, t),
                    }),
                }),
            }),
        ],
    });
}
var T = n(191627);
let S = !1;
function N() {
    S || ((S = !0), (0, s.B8)(() => (0, i.jsx)(I, { onClose: () => C() }), { layerKey: T.Uy, Layer: a.Ay }));
}
function C() {
    (S = !1), (0, s.dF)(T.Uy);
}
