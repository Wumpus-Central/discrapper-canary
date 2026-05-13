"use strict";
n.d(t, { openRestrictedHoursModal: () => y, k: () => C });
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
    f = n(976860),
    h = n(287809),
    p = n(375708),
    E = n(695515),
    m = n(425116),
    g = n(652215),
    A = n(602339),
    I = n(88438);
function T(e) {
    let { onClose: t } = e,
        n = (0, c.bG)([h.default, E.A], m.$),
        s = (0, c.bG)([h.default], () => {
            let e = h.default.getCurrentUser()?.restrictedSchedule?.getNextEndTime();
            return null == e
                ? null
                : new Intl.DateTimeFormat(p.intl.currentLocale, {
                      hour: "numeric",
                      minute: "2-digit",
                      weekday: "long",
                  }).format(e);
        }),
        a = (0, c.bG)([h.default], () => h.default.getCurrentUser()?.username ?? ""),
        T = r.useRef(!1),
        S = r.useCallback(() => {
            (T.current = !0), (0, f.pX)(g.BVt.DEFAULT_LOGGED_OUT), _.A.logout("restricted_hours");
        }, []);
    r.useEffect(() => {
        n || T.current || t();
    }, [n, t]);
    let N = null != s ? p.intl.format(A.default.VfqJvY, { endTime: s }) : p.intl.string(A.default.abikhN);
    return (0, i.jsxs)("div", {
        className: I.Tp,
        children: [
            (0, i.jsx)("div", { className: I.gh, "aria-hidden": !0 }),
            (0, i.jsx)("div", { className: I.zX, "aria-hidden": !0, children: (0, i.jsx)("div", { className: I.cU }) }),
            (0, i.jsxs)(l.B, {
                direction: "vertical",
                align: "center",
                gap: 16,
                className: `${I.kL} ${I.vx}`,
                children: [
                    (0, i.jsx)(o.w, {
                        artboard: "Teen Screen Time Illo",
                        stateMachine: "State Machine 1",
                        className: I.jw,
                    }),
                    (0, i.jsx)(u.E, {
                        variant: "text-lg/medium",
                        color: "text-overlay-light",
                        className: I.h_,
                        children: N,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: `${I.qr} ${I.vx}`,
                children: (0, i.jsx)(u.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: p.intl.format(A.default.iqeKDz, {
                        username: a,
                        loginHook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: S, children: e }, t),
                    }),
                }),
            }),
        ],
    });
}
var S = n(191627);
let N = !1;
function y() {
    N || ((N = !0), (0, s.B8)(() => (0, i.jsx)(T, { onClose: () => C() }), { layerKey: S.Uy, Layer: a.Ay }));
}
function C() {
    (N = !1), (0, s.dF)(S.Uy);
}
