"use strict";
n.d(t, { LI: () => I, cq: () => b, m2: () => A, v5: () => N });
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
    h = n(837921),
    p = n(985018),
    g = n(17937);
let E = 1e3;
function A(e) {
    let { isPopoutWindow: t } = e;
    return t ? "refresh-title-bar-small" : void 0;
}
function I(e) {
    let { isPopoutWindow: t } = e;
    return t ? 16 : 24;
}
let T = (e) => h.Ay.close(e),
    y = (e) => h.Ay.minimize(e),
    S = (e) => h.Ay.maximize(e);
function v(e) {
    e.stopPropagation();
}
function C(e) {
    let { windowKey: t, showDivider: n } = e,
        i = (0, r.jsx)(o.DUT, {
            className: s()(g.R6, g.d1),
            onClick: () => T(t),
            "aria-label": p.intl.string(p.t.ZdNUj2),
            tabIndex: -1,
            children: (0, r.jsx)(c.A, {}),
        }),
        a = (0, r.jsx)(o.DUT, {
            className: s()(g.R6, g.T0),
            onClick: () => S(t),
            "aria-label": p.intl.string(p.t.G1u0hK),
            tabIndex: -1,
            children: (0, r.jsx)(d.A, {}),
        }),
        l = (0, r.jsx)(o.DUT, {
            className: s()(g.R6, g.T0),
            onClick: () => y(t),
            "aria-label": p.intl.string(p.t.CxOC4U),
            tabIndex: -1,
            children: (0, r.jsx)(_.A, {}),
        });
    return (0, r.jsxs)("div", { className: s()(g.kU, { [g.Fx]: n }), children: [l, a, i] });
}
function b(e) {
    let { leading: t, title: n, trailing: a, windowKey: o, className: l } = e,
        u = (0, f.getPlatform)(),
        c = i.useCallback(() => S(o), [o]),
        d = u === f.PlatformTypes.WINDOWS || u === f.PlatformTypes.LINUX;
    return (0, r.jsxs)("div", {
        className: s()(g.M0, l),
        onDoubleClick: c,
        children: [
            (0, r.jsx)("div", { className: g.R4, onDoubleClick: v, children: t }),
            (0, r.jsx)("div", { className: g.DD, children: n }),
            (0, r.jsxs)("div", {
                className: g.ZY,
                onDoubleClick: v,
                children: [a, d && (0, r.jsx)(C, { windowKey: o, showDivider: null != a })],
            }),
        ],
    });
}
function N(e) {
    let { fixed: t = !1, show: n, windowKey: a } = e,
        o = (0, f.getPlatform)(),
        c = i.useCallback(() => {
            u.A.isOpen() && (0, l.jD)();
        }, []),
        d = i.useCallback(() => {
            let e = u.A.getLastShowTimestamp();
            (null != e && Date.now() - e < E) || S(a);
        }, [a]),
        _ = o === f.PlatformTypes.WINDOWS;
    if (o === f.PlatformTypes.WEB) return null;
    let h = _ || o === f.PlatformTypes.LINUX;
    return (0, r.jsx)("div", {
        className: s()(g.M0, g.bN, { [g.Zu]: t, [g.WU]: n }),
        onClick: c,
        onDoubleClick: d,
        children:
            h && (0, r.jsx)("div", { className: g.ZY, onDoubleClick: v, children: (0, r.jsx)(C, { windowKey: a }) }),
    });
}
