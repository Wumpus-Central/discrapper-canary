"use strict";
n.d(t, { openRestrictedHoursModal: () => C, k: () => R });
var i = n(627968),
    r = n(64700),
    a = n(361158),
    s = n(80556),
    l = n(632679),
    o = n(331322),
    d = n(834730),
    c = n(17928),
    u = n(349288),
    _ = n(830215),
    E = n(976860),
    A = n(287809),
    h = n(375708),
    I = n(695515),
    f = n(425116),
    p = n(652215),
    T = n(602339),
    m = n(88438);
function g(e) {
    let { onClose: t } = e,
        n = (0, c.bG)([A.default, I.A], f.$),
        a = (0, c.bG)([A.default], () => {
            let e = A.default.getCurrentUser()?.restrictedSchedule?.getNextEndTime();
            return null == e
                ? null
                : new Intl.DateTimeFormat(h.intl.currentLocale, {
                      hour: "numeric",
                      minute: "2-digit",
                      weekday: "long",
                  }).format(e);
        }),
        s = (0, c.bG)([A.default], () => A.default.getCurrentUser()?.username ?? ""),
        g = r.useRef(!1),
        S = r.useCallback(() => {
            (g.current = !0), (0, E.pX)(p.BVt.DEFAULT_LOGGED_OUT), _.A.logout("restricted_hours");
        }, []);
    r.useEffect(() => {
        n || g.current || t();
    }, [n, t]);
    let N = null != a ? h.intl.format(T.default.VfqJvY, { endTime: a }) : h.intl.string(T.default.abikhN);
    return (0, i.jsxs)("div", {
        className: m.Tp,
        children: [
            (0, i.jsx)("div", { className: m.gh, "aria-hidden": !0 }),
            (0, i.jsx)("div", { className: m.zX, "aria-hidden": !0, children: (0, i.jsx)("div", { className: m.cU }) }),
            (0, i.jsxs)(o.B, {
                direction: "vertical",
                align: "center",
                gap: 16,
                className: `${m.kL} ${m.vx}`,
                children: [
                    (0, i.jsx)(l.w, {
                        artboard: "Teen Screen Time Illo",
                        stateMachine: "State Machine 1",
                        className: m.jw,
                    }),
                    (0, i.jsx)(d.E, {
                        variant: "text-lg/medium",
                        color: "text-overlay-light",
                        className: m.h_,
                        children: N,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: `${m.qr} ${m.vx}`,
                children: (0, i.jsx)(d.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: h.intl.format(T.default.iqeKDz, {
                        username: s,
                        loginHook: (e, t) => (0, i.jsx)(u.Anchor, { onClick: S, children: e }, t),
                    }),
                }),
            }),
        ],
    });
}
var S = n(191627);
let N = !1;
function C() {
    N || ((N = !0), (0, a.B8)(() => (0, i.jsx)(g, { onClose: () => R() }), { layerKey: S.Uy, Layer: s.Ay }));
}
function R() {
    (N = !1), (0, a.dF)(S.Uy);
}
