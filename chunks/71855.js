"use strict";
n.d(t, { LI: () => p, cq: () => T, m2: () => g, v5: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(793322),
    d = n(174768),
    _ = n(908031),
    u = n(155545),
    c = n(561155),
    E = n(723702),
    h = n(19575),
    m = n(985018),
    f = n(666044);
function g(e) {
    let { isPopoutWindow: t } = e;
    return t ? "refresh-title-bar-small" : void 0;
}
function p(e) {
    let { isPopoutWindow: t } = e;
    return t ? 16 : 24;
}
function A(e) {
    e.stopPropagation();
}
function I(e) {
    let { windowKey: t, showDivider: n } = e,
        r = (0, i.jsx)(o.D, {
            className: a()(f.R6, f.d1),
            onClick: () => h.Ay.close(t),
            "aria-label": m.intl.string(m.t.ZdNUj2),
            tabIndex: -1,
            children: (0, i.jsx)(_.A, {}),
        }),
        s = (0, i.jsx)(o.D, {
            className: a()(f.R6, f.T0),
            onClick: () => h.Ay.maximize(t),
            "aria-label": m.intl.string(m.t.G1u0hK),
            tabIndex: -1,
            children: (0, i.jsx)(u.A, {}),
        }),
        l = (0, i.jsx)(o.D, {
            className: a()(f.R6, f.T0),
            onClick: () => h.Ay.minimize(t),
            "aria-label": m.intl.string(m.t.CxOC4U),
            tabIndex: -1,
            children: (0, i.jsx)(c.A, {}),
        });
    return (0, i.jsxs)("div", { className: a()(f.kU, { [f.Fx]: n }), children: [l, s, r] });
}
function T(e) {
    let { leading: t, title: n, trailing: s, windowKey: o, className: l } = e,
        d = (0, E.getPlatform)(),
        _ = r.useCallback(() => h.Ay.maximize(o), [o]),
        u = d === E.PlatformTypes.WINDOWS || d === E.PlatformTypes.LINUX;
    return (0, i.jsxs)("div", {
        className: a()(f.M0, l),
        onDoubleClick: _,
        children: [
            (0, i.jsx)("div", { className: f.R4, onDoubleClick: A, children: t }),
            (0, i.jsx)("div", { className: f.DD, children: n }),
            (0, i.jsxs)("div", {
                className: f.ZY,
                onDoubleClick: A,
                children: [s, u && (0, i.jsx)(I, { windowKey: o, showDivider: null != s })],
            }),
        ],
    });
}
function S(e) {
    let { fixed: t = !1, show: n, windowKey: s, isLayerOpen: o } = e,
        _ = (0, E.getPlatform)(),
        u = r.useCallback(() => {
            d.A.isOpen() && (0, l.jD)();
        }, []),
        c = r.useCallback(() => {
            let e = d.A.getLastShowTimestamp();
            (null != e && Date.now() - e < 1e3) || h.Ay.maximize(s);
        }, [s]),
        m = _ === E.PlatformTypes.WINDOWS;
    if (_ === E.PlatformTypes.WEB) return null;
    let g = m || _ === E.PlatformTypes.LINUX;
    return (0, i.jsx)("div", {
        className: a()(f.M0, f.bN, { [f.Zu]: t, [f.WU]: n, [f.dS]: o }),
        onClick: u,
        onDoubleClick: c,
        children:
            g && (0, i.jsx)("div", { className: f.ZY, onDoubleClick: A, children: (0, i.jsx)(I, { windowKey: s }) }),
    });
}
