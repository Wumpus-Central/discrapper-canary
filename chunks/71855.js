n.d(t, { LI: () => S, cq: () => p, m2: () => h, v5: () => m });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(939249),
    o = n(793322),
    d = n(174768),
    c = n(908031),
    _ = n(155545),
    E = n(561155),
    u = n(723702),
    A = n(19575),
    I = n(985018),
    T = n(666044);
function h(e) {
    let { isPopoutWindow: t } = e;
    return t ? "refresh-title-bar-small" : void 0;
}
function S(e) {
    let { isPopoutWindow: t } = e;
    return t ? 16 : 24;
}
function N(e) {
    e.stopPropagation();
}
function f(e) {
    let { windowKey: t, showDivider: n } = e,
        a = (0, i.jsx)(l.D, {
            className: s()(T.R6, T.d1),
            onClick: () => A.Ay.close(t),
            "aria-label": I.intl.string(I.t.ZdNUj2),
            tabIndex: -1,
            children: (0, i.jsx)(c.A, {}),
        }),
        r = (0, i.jsx)(l.D, {
            className: s()(T.R6, T.T0),
            onClick: () => A.Ay.maximize(t),
            "aria-label": I.intl.string(I.t.G1u0hK),
            tabIndex: -1,
            children: (0, i.jsx)(_.A, {}),
        }),
        o = (0, i.jsx)(l.D, {
            className: s()(T.R6, T.T0),
            onClick: () => A.Ay.minimize(t),
            "aria-label": I.intl.string(I.t.CxOC4U),
            tabIndex: -1,
            children: (0, i.jsx)(E.A, {}),
        });
    return (0, i.jsxs)("div", { className: s()(T.kU, { [T.Fx]: n }), children: [o, r, a] });
}
function p(e) {
    let { leading: t, title: n, trailing: r, windowKey: l, className: o } = e,
        d = (0, u.getPlatform)(),
        c = a.useCallback(() => A.Ay.maximize(l), [l]),
        _ = d === u.PlatformTypes.WINDOWS || d === u.PlatformTypes.LINUX;
    return (0, i.jsxs)("div", {
        className: s()(T.M0, o),
        onDoubleClick: c,
        children: [
            (0, i.jsx)("div", { className: T.R4, onDoubleClick: N, children: t }),
            (0, i.jsx)("div", { className: T.DD, children: n }),
            (0, i.jsxs)("div", {
                className: T.ZY,
                onDoubleClick: N,
                children: [r, _ && (0, i.jsx)(f, { windowKey: l, showDivider: null != r })],
            }),
        ],
    });
}
function m(e) {
    let { fixed: t = !1, show: n, windowKey: r, isLayerOpen: l } = e,
        c = (0, u.getPlatform)(),
        _ = a.useCallback(() => {
            d.A.isOpen() && (0, o.jD)();
        }, []),
        E = a.useCallback(() => {
            let e = d.A.getLastShowTimestamp();
            (null != e && Date.now() - e < 1e3) || A.Ay.maximize(r);
        }, [r]),
        I = c === u.PlatformTypes.WINDOWS;
    if (c === u.PlatformTypes.WEB) return null;
    let h = I || c === u.PlatformTypes.LINUX;
    return (0, i.jsx)("div", {
        className: s()(T.M0, T.bN, { [T.Zu]: t, [T.WU]: n, [T.dS]: l }),
        onClick: _,
        onDoubleClick: E,
        children:
            h && (0, i.jsx)("div", { className: T.ZY, onDoubleClick: N, children: (0, i.jsx)(f, { windowKey: r }) }),
    });
}
