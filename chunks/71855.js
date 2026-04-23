"use strict";
n.d(t, { LI: () => g, cq: () => T, m2: () => m, v5: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(793322),
    u = n(174768),
    c = n(908031),
    d = n(155545),
    _ = n(561155),
    f = n(723702),
    p = n(837921),
    h = n(985018),
    E = n(666044);
function m(e) {
    let { isPopoutWindow: t } = e;
    return t ? "refresh-title-bar-small" : void 0;
}
function g(e) {
    let { isPopoutWindow: t } = e;
    return t ? 16 : 24;
}
function A(e) {
    e.stopPropagation();
}
function I(e) {
    let { windowKey: t, showDivider: n } = e,
        i = (0, r.jsx)(o.D, {
            className: a()(E.R6, E.d1),
            onClick: () => p.Ay.close(t),
            "aria-label": h.intl.string(h.t.ZdNUj2),
            tabIndex: -1,
            children: (0, r.jsx)(c.A, {}),
        }),
        s = (0, r.jsx)(o.D, {
            className: a()(E.R6, E.T0),
            onClick: () => p.Ay.maximize(t),
            "aria-label": h.intl.string(h.t.G1u0hK),
            tabIndex: -1,
            children: (0, r.jsx)(d.A, {}),
        }),
        l = (0, r.jsx)(o.D, {
            className: a()(E.R6, E.T0),
            onClick: () => p.Ay.minimize(t),
            "aria-label": h.intl.string(h.t.CxOC4U),
            tabIndex: -1,
            children: (0, r.jsx)(_.A, {}),
        });
    return (0, r.jsxs)("div", { className: a()(E.kU, { [E.Fx]: n }), children: [l, s, i] });
}
function T(e) {
    let { leading: t, title: n, trailing: s, windowKey: o, className: l } = e,
        u = (0, f.getPlatform)(),
        c = i.useCallback(() => p.Ay.maximize(o), [o]),
        d = u === f.PlatformTypes.WINDOWS || u === f.PlatformTypes.LINUX;
    return (0, r.jsxs)("div", {
        className: a()(E.M0, l),
        onDoubleClick: c,
        children: [
            (0, r.jsx)("div", { className: E.R4, onDoubleClick: A, children: t }),
            (0, r.jsx)("div", { className: E.DD, children: n }),
            (0, r.jsxs)("div", {
                className: E.ZY,
                onDoubleClick: A,
                children: [s, d && (0, r.jsx)(I, { windowKey: o, showDivider: null != s })],
            }),
        ],
    });
}
function S(e) {
    let { fixed: t = !1, show: n, windowKey: s, isLayerOpen: o } = e,
        c = (0, f.getPlatform)(),
        d = i.useCallback(() => {
            u.A.isOpen() && (0, l.jD)();
        }, []),
        _ = i.useCallback(() => {
            let e = u.A.getLastShowTimestamp();
            (null != e && Date.now() - e < 1e3) || p.Ay.maximize(s);
        }, [s]),
        h = c === f.PlatformTypes.WINDOWS;
    if (c === f.PlatformTypes.WEB) return null;
    let m = h || c === f.PlatformTypes.LINUX;
    return (0, r.jsx)("div", {
        className: a()(E.M0, E.bN, { [E.Zu]: t, [E.WU]: n, [E.dS]: o }),
        onClick: d,
        onDoubleClick: _,
        children:
            m && (0, r.jsx)("div", { className: E.ZY, onDoubleClick: A, children: (0, r.jsx)(I, { windowKey: s }) }),
    });
}
