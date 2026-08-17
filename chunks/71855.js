"use strict";
n.d(t, { LI: () => p, cq: () => S, m2: () => f, v5: () => N });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(939249),
    o = n(793322),
    d = n(174768),
    c = n(908031),
    u = n(155545),
    _ = n(561155),
    E = n(723702),
    A = n(19575),
    h = n(375708),
    I = n(320612);
function f(e) {
    let { isPopoutWindow: t } = e;
    return t ? "refresh-title-bar-small" : void 0;
}
function p(e) {
    let { isPopoutWindow: t } = e;
    return t ? 16 : 24;
}
function T(e) {
    return A.Ay.maximize(e);
}
function m(e) {
    e.stopPropagation();
}
function g(e) {
    let { windowKey: t, showDivider: n } = e,
        r = (0, i.jsx)(l.D, {
            className: s()(I.R6, I.d1),
            onClick: () => A.Ay.close(t),
            "aria-label": h.intl.string(h.t.ZdNUj2),
            tabIndex: -1,
            children: (0, i.jsx)(c.A, {}),
        }),
        a = (0, i.jsx)(l.D, {
            className: s()(I.R6, I.T0),
            onClick: () => T(t),
            "aria-label": h.intl.string(h.t.G1u0hK),
            tabIndex: -1,
            children: (0, i.jsx)(u.A, {}),
        }),
        o = (0, i.jsx)(l.D, {
            className: s()(I.R6, I.T0),
            onClick: () => A.Ay.minimize(t),
            "aria-label": h.intl.string(h.t.CxOC4U),
            tabIndex: -1,
            children: (0, i.jsx)(_.A, {}),
        });
    return (0, i.jsxs)("div", { className: s()(I.kU, { [I.Fx]: n }), children: [o, a, r] });
}
function S(e) {
    let { leading: t, title: n, trailing: a, windowKey: l, className: o, growLeading: d } = e,
        c = (0, E.getPlatform)(),
        u = r.useCallback(() => T(l), [l]),
        _ = c === E.PlatformTypes.WINDOWS || c === E.PlatformTypes.LINUX,
        h = r.useMemo(() => c === E.PlatformTypes.OSX && "rtl" === A.Ay.getSystemUIDirection(), [c]);
    return (0, i.jsxs)("div", {
        className: s()(I.M0, { [I.CP]: h }, o),
        onDoubleClick: u,
        "data-window-chrome": "true",
        children: [
            (0, i.jsx)("div", { className: s()(I.R4, { [I.MY]: d }), onDoubleClick: m, children: t }),
            (0, i.jsx)("div", { className: I.DD, children: n }),
            (0, i.jsxs)("div", {
                className: I.ZY,
                onDoubleClick: m,
                children: [a, _ && (0, i.jsx)(g, { windowKey: l, showDivider: null != a })],
            }),
        ],
    });
}
function N(e) {
    let { fixed: t = !1, show: n, windowKey: a, isLayerOpen: l } = e,
        c = (0, E.getPlatform)(),
        u = r.useCallback(() => {
            d.A.isOpen() && (0, o.jD)();
        }, []),
        _ = r.useCallback(() => {
            let e = d.A.getLastShowTimestamp();
            (null != e && Date.now() - e < 1e3) || T(a);
        }, [a]),
        A = c === E.PlatformTypes.WINDOWS;
    if (c === E.PlatformTypes.WEB) return null;
    let h = A || c === E.PlatformTypes.LINUX;
    return (0, i.jsx)("div", {
        className: s()(I.M0, I.bN, { [I.Zu]: t, [I.WU]: n, [I.dS]: l }),
        onClick: u,
        onDoubleClick: _,
        children:
            h && (0, i.jsx)("div", { className: I.ZY, onDoubleClick: m, children: (0, i.jsx)(g, { windowKey: a }) }),
    });
}
