"use strict";
n.d(t, { openRestrictedHoursModal: () => N, k: () => y });
var i = n(627968),
    r = n(64700),
    s = n(663066),
    a = n(80556),
    o = n(632679),
    l = n(331322),
    u = n(834730),
    c = n(17928),
    d = n(349288),
    _ = n(830215),
    f = n(287809),
    h = n(375708),
    p = n(695515),
    E = n(425116),
    m = n(602339),
    g = n(88438);
function A() {
    _.A.logout("restricted_hours");
}
function I(e) {
    let { onClose: t } = e,
        n = (0, c.bG)([f.default, p.A], E.$),
        s = (0, c.bG)([f.default], () => {
            let e = f.default.getCurrentUser()?.restrictedSchedule?.getNextEndTime();
            return null == e
                ? null
                : new Intl.DateTimeFormat(h.intl.currentLocale, {
                      hour: "numeric",
                      minute: "2-digit",
                      weekday: "long",
                  }).format(e);
        }),
        a = (0, c.bG)([f.default], () => f.default.getCurrentUser()?.username ?? "");
    r.useEffect(() => {
        n || t();
    }, [n, t]);
    let _ = null != s ? h.intl.format(m.default.VfqJvY, { endTime: s }) : h.intl.string(m.default.abikhN);
    return (0, i.jsxs)("div", {
        className: g.Tp,
        children: [
            (0, i.jsx)("div", { className: g.gh, "aria-hidden": !0 }),
            (0, i.jsx)("div", { className: g.zX, "aria-hidden": !0, children: (0, i.jsx)("div", { className: g.cU }) }),
            (0, i.jsxs)(l.B, {
                direction: "vertical",
                align: "center",
                gap: 16,
                className: `${g.kL} ${g.vx}`,
                children: [
                    (0, i.jsx)(o.w, {
                        artboard: "Teen Screen Time Illo",
                        stateMachine: "State Machine 1",
                        className: g.jw,
                    }),
                    (0, i.jsx)(u.E, {
                        variant: "text-lg/medium",
                        color: "text-overlay-light",
                        className: g.h_,
                        children: _,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: `${g.qr} ${g.vx}`,
                children: (0, i.jsx)(u.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: h.intl.format(m.default.iqeKDz, {
                        username: a,
                        loginHook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: A, children: e }, t),
                    }),
                }),
            }),
        ],
    });
}
var T = n(191627);
let S = !1;
function N() {
    S || ((S = !0), (0, s.B8)(() => (0, i.jsx)(I, { onClose: () => y() }), { layerKey: T.Uy, Layer: a.Ay }));
}
function y() {
    (S = !1), (0, s.dF)(T.Uy);
}
