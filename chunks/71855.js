"use strict";
n.d(t, { LI: () => g, cq: () => S, m2: () => m, v5: () => y });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(793322),
    u = n(174768),
    c = n(908031),
    d = n(155545),
    _ = n(561155),
    h = n(723702),
    f = n(19575),
    p = n(375708),
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
    return f.Ay.maximize(e);
}
function I(e) {
    e.stopPropagation();
}
function T(e) {
    let { windowKey: t, showDivider: n } = e,
        r = (0, i.jsx)(o.D, {
            className: a()(E.R6, E.d1),
            onClick: () => f.Ay.close(t),
            "aria-label": p.intl.string(p.t.ZdNUj2),
            tabIndex: -1,
            children: (0, i.jsx)(c.A, {}),
        }),
        s = (0, i.jsx)(o.D, {
            className: a()(E.R6, E.T0),
            onClick: () => A(t),
            "aria-label": p.intl.string(p.t.G1u0hK),
            tabIndex: -1,
            children: (0, i.jsx)(d.A, {}),
        }),
        l = (0, i.jsx)(o.D, {
            className: a()(E.R6, E.T0),
            onClick: () => f.Ay.minimize(t),
            "aria-label": p.intl.string(p.t.CxOC4U),
            tabIndex: -1,
            children: (0, i.jsx)(_.A, {}),
        });
    return (0, i.jsxs)("div", { className: a()(E.kU, { [E.Fx]: n }), children: [l, s, r] });
}
function S(e) {
    let { leading: t, title: n, trailing: s, windowKey: o, className: l } = e,
        u = (0, h.getPlatform)(),
        c = r.useCallback(() => A(o), [o]),
        d = u === h.PlatformTypes.WINDOWS || u === h.PlatformTypes.LINUX;
    return (0, i.jsxs)("div", {
        className: a()(E.M0, l),
        onDoubleClick: c,
        "data-window-chrome": "true",
        children: [
            (0, i.jsx)("div", { className: E.R4, onDoubleClick: I, children: t }),
            (0, i.jsx)("div", { className: E.DD, children: n }),
            (0, i.jsxs)("div", {
                className: E.ZY,
                onDoubleClick: I,
                children: [s, d && (0, i.jsx)(T, { windowKey: o, showDivider: null != s })],
            }),
        ],
    });
}
function y(e) {
    let { fixed: t = !1, show: n, windowKey: s, isLayerOpen: o } = e,
        c = (0, h.getPlatform)(),
        d = r.useCallback(() => {
            u.A.isOpen() && (0, l.jD)();
        }, []),
        _ = r.useCallback(() => {
            let e = u.A.getLastShowTimestamp();
            (null != e && Date.now() - e < 1e3) || A(s);
        }, [s]),
        f = c === h.PlatformTypes.WINDOWS;
    if (c === h.PlatformTypes.WEB) return null;
    let p = f || c === h.PlatformTypes.LINUX;
    return (0, i.jsx)("div", {
        className: a()(E.M0, E.bN, { [E.Zu]: t, [E.WU]: n, [E.dS]: o }),
        onClick: d,
        onDoubleClick: _,
        children:
            p && (0, i.jsx)("div", { className: E.ZY, onDoubleClick: I, children: (0, i.jsx)(T, { windowKey: s }) }),
    });
}
