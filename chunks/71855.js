"use strict";
n.d(t, { LI: () => A, cq: () => C, m2: () => E, v5: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
let g = 1e3;
function E(e) {
    let { isPopoutWindow: t } = e;
    return t ? "refresh-title-bar-small" : void 0;
}
function A(e) {
    let { isPopoutWindow: t } = e;
    return t ? 16 : 24;
}
let I = (e) => p.Ay.close(e),
    T = (e) => p.Ay.minimize(e),
    y = (e) => p.Ay.maximize(e);
function S(e) {
    e.stopPropagation();
}
function v(e) {
    let { windowKey: t, showDivider: n } = e,
        i = (0, r.jsx)(o.DUT, {
            className: s()(m.R6, m.d1),
            onClick: () => I(t),
            "aria-label": h.intl.string(h.t.ZdNUj2),
            tabIndex: -1,
            children: (0, r.jsx)(c.A, {}),
        }),
        a = (0, r.jsx)(o.DUT, {
            className: s()(m.R6, m.T0),
            onClick: () => y(t),
            "aria-label": h.intl.string(h.t.G1u0hK),
            tabIndex: -1,
            children: (0, r.jsx)(d.A, {}),
        }),
        l = (0, r.jsx)(o.DUT, {
            className: s()(m.R6, m.T0),
            onClick: () => T(t),
            "aria-label": h.intl.string(h.t.CxOC4U),
            tabIndex: -1,
            children: (0, r.jsx)(_.A, {}),
        });
    return (0, r.jsxs)("div", { className: s()(m.kU, { [m.Fx]: n }), children: [l, a, i] });
}
function C(e) {
    let { leading: t, title: n, trailing: a, windowKey: o, className: l } = e,
        u = (0, f.getPlatform)(),
        c = i.useCallback(() => y(o), [o]),
        d = u === f.PlatformTypes.WINDOWS || u === f.PlatformTypes.LINUX;
    return (0, r.jsxs)("div", {
        className: s()(m.M0, l),
        onDoubleClick: c,
        children: [
            (0, r.jsx)("div", { className: m.R4, onDoubleClick: S, children: t }),
            (0, r.jsx)("div", { className: m.DD, children: n }),
            (0, r.jsxs)("div", {
                className: m.ZY,
                onDoubleClick: S,
                children: [a, d && (0, r.jsx)(v, { windowKey: o, showDivider: null != a })],
            }),
        ],
    });
}
function b(e) {
    let { fixed: t = !1, show: n, windowKey: a } = e,
        o = (0, f.getPlatform)(),
        c = i.useCallback(() => {
            u.A.isOpen() && (0, l.jD)();
        }, []),
        d = i.useCallback(() => {
            let e = u.A.getLastShowTimestamp();
            (null != e && Date.now() - e < g) || y(a);
        }, [a]),
        _ = o === f.PlatformTypes.WINDOWS;
    if (o === f.PlatformTypes.WEB) return null;
    let p = _ || o === f.PlatformTypes.LINUX;
    return (0, r.jsx)("div", {
        className: s()(m.M0, m.bN, { [m.Zu]: t, [m.WU]: n }),
        onClick: c,
        onDoubleClick: d,
        children:
            p && (0, r.jsx)("div", { className: m.ZY, onDoubleClick: S, children: (0, r.jsx)(v, { windowKey: a }) }),
    });
}
