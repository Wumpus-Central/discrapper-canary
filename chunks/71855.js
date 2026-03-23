"use strict";
n.d(t, { LI: () => A, cq: () => N, m2: () => g, v5: () => C });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(793322),
    u = n(174768),
    c = n(130412),
    d = n(155545),
    _ = n(561155),
    f = n(723702),
    p = n(837921),
    h = n(985018),
    m = n(450295);
let E = 1e3;
function g(e) {
    let { isPopoutWindow: t } = e;
    return t ? "refresh-title-bar-small" : void 0;
}
function A(e) {
    let { isPopoutWindow: t } = e;
    return t ? 16 : 24;
}
let I = (e) => p.Ay.close(e),
    T = (e) => p.Ay.minimize(e),
    S = (e) => p.Ay.maximize(e);
function y(e) {
    e.stopPropagation();
}
function v(e) {
    let { windowKey: t, showDivider: n } = e,
        i = (0, r.jsx)(o.DUT, {
            className: a()(m.R6, m.d1),
            onClick: () => I(t),
            "aria-label": h.intl.string(h.t.ZdNUj2),
            tabIndex: -1,
            children: (0, r.jsx)(c.A, {}),
        }),
        s = (0, r.jsx)(o.DUT, {
            className: a()(m.R6, m.T0),
            onClick: () => S(t),
            "aria-label": h.intl.string(h.t.G1u0hK),
            tabIndex: -1,
            children: (0, r.jsx)(d.A, {}),
        }),
        l = (0, r.jsx)(o.DUT, {
            className: a()(m.R6, m.T0),
            onClick: () => T(t),
            "aria-label": h.intl.string(h.t.CxOC4U),
            tabIndex: -1,
            children: (0, r.jsx)(_.A, {}),
        });
    return (0, r.jsxs)("div", { className: a()(m.kU, { [m.Fx]: n }), children: [l, s, i] });
}
function N(e) {
    let { leading: t, title: n, trailing: s, windowKey: o, className: l } = e,
        u = (0, f.getPlatform)(),
        c = i.useCallback(() => S(o), [o]),
        d = u === f.PlatformTypes.WINDOWS || u === f.PlatformTypes.LINUX;
    return (0, r.jsxs)("div", {
        className: a()(m.M0, l),
        onDoubleClick: c,
        children: [
            (0, r.jsx)("div", { className: m.R4, onDoubleClick: y, children: t }),
            (0, r.jsx)("div", { className: m.DD, children: n }),
            (0, r.jsxs)("div", {
                className: m.ZY,
                onDoubleClick: y,
                children: [s, d && (0, r.jsx)(v, { windowKey: o, showDivider: null != s })],
            }),
        ],
    });
}
function C(e) {
    let { fixed: t = !1, show: n, windowKey: s } = e,
        o = (0, f.getPlatform)(),
        c = i.useCallback(() => {
            u.A.isOpen() && (0, l.jD)();
        }, []),
        d = i.useCallback(() => {
            let e = u.A.getLastShowTimestamp();
            (null != e && Date.now() - e < E) || S(s);
        }, [s]),
        _ = o === f.PlatformTypes.WINDOWS;
    if (o === f.PlatformTypes.WEB) return null;
    let p = _ || o === f.PlatformTypes.LINUX;
    return (0, r.jsx)("div", {
        className: a()(m.M0, m.bN, { [m.Zu]: t, [m.WU]: n }),
        onClick: c,
        onDoubleClick: d,
        children:
            p && (0, r.jsx)("div", { className: m.ZY, onDoubleClick: y, children: (0, r.jsx)(v, { windowKey: s }) }),
    });
}
