n.d(t, { openRestrictedHoursModal: () => N, k: () => C });
var i = n(477900),
    r = n(582128),
    a = n(361158),
    s = n(80556),
    l = n(17928),
    o = n(331322),
    d = n(632679),
    c = n(834730),
    u = n(28863),
    _ = n(830215),
    E = n(976860),
    A = n(287809),
    h = n(105292),
    f = n(695515),
    I = n(652215),
    p = n(83152),
    m = n(785613);
function T(e) {
    let { onClose: t } = e,
        n = (0, l.bG)([A.default, f.A], () => f.A.isCurrentUserInRestrictedHours()),
        a = (0, l.bG)([A.default], () => {
            let e = A.default.getCurrentUser()?.restrictedSchedule?.getNextEndTime();
            return null == e
                ? null
                : new Intl.DateTimeFormat(h.intl.currentLocale, {
                      hour: "numeric",
                      minute: "2-digit",
                      weekday: "long",
                  }).format(e);
        }),
        s = (0, l.bG)([A.default], () => A.default.getCurrentUser()?.username ?? ""),
        T = r.useRef(!1),
        g = r.useCallback(() => {
            ((T.current = !0), (0, E.pX)(I.BVt.DEFAULT_LOGGED_OUT), _.A.logout("restricted_hours"));
        }, []);
    r.useEffect(() => {
        n || T.current || t();
    }, [n, t]);
    let S = null != a ? h.intl.format(p.default.VfqJvY, { endTime: a }) : h.intl.string(p.default.abikhN);
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
                    (0, i.jsx)(d.w, {
                        artboard: "Teen Screen Time Illo",
                        stateMachine: "State Machine 1",
                        className: m.jw,
                    }),
                    (0, i.jsx)(c.E, {
                        variant: "body-lg/medium",
                        color: "text-overlay-light",
                        className: m.h_,
                        children: S,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: `${m.qr} ${m.vx}`,
                children: (0, i.jsx)(c.E, {
                    variant: "body-sm/medium",
                    color: "text-subtle",
                    children: h.intl.format(p.default.iqeKDz, {
                        username: s,
                        loginHook: (e, t) => (0, i.jsx)(u.Anchor, { onClick: g, children: e }, t),
                    }),
                }),
            }),
        ],
    });
}
var g = n(191627);
let S = !1;
function N() {
    S || ((S = !0), (0, a.B8)(() => (0, i.jsx)(T, { onClose: () => C() }), { layerKey: g.Uy, Layer: s.Ay }));
}
function C() {
    ((S = !1), (0, a.dF)(g.Uy));
}
