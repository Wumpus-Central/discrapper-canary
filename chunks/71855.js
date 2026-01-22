n.d(t, {
    LI: () => b,
    cq: () => I,
    m2: () => E,
    v5: () => T,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(793322),
    c = n(174768),
    u = n(130412),
    d = n(155545),
    f = n(561155),
    p = n(723702),
    _ = n(837921),
    h = n(985018),
    m = n(450295);
let g = 1000;
function E(e) {
    let { isPopoutWindow: t } = e;
    return t ? "refresh-title-bar-small" : void 0;
}
function b(e) {
    let { isPopoutWindow: t } = e;
    return t ? 16 : 24;
}
let y = (e) => _.Ay.close(e),
    O = (e) => _.Ay.minimize(e),
    A = (e) => _.Ay.maximize(e);
function v(e) {
    e.stopPropagation();
}
function S(e) {
    let { windowKey: t, showDivider: n } = e,
        i = (0, r.jsx)(o.DUT, {
            className: s()(m.R6, m.d1),
            onClick: () => y(t),
            "aria-label": h.intl.string(h.t.ZdNUj2),
            tabIndex: -1,
            children: (0, r.jsx)(u.A, {}),
        }),
        a = (0, r.jsx)(o.DUT, {
            className: s()(m.R6, m.T0),
            onClick: () => A(t),
            "aria-label": h.intl.string(h.t.G1u0hK),
            tabIndex: -1,
            children: (0, r.jsx)(d.A, {}),
        }),
        l = (0, r.jsx)(o.DUT, {
            className: s()(m.R6, m.T0),
            onClick: () => O(t),
            "aria-label": h.intl.string(h.t.CxOC4U),
            tabIndex: -1,
            children: (0, r.jsx)(f.A, {}),
        });
    return (0, r.jsxs)("div", {
        className: s()(m.kU, { [m.Fx]: n }),
        children: [l, a, i],
    });
}
function I(e) {
    let { leading: t, title: n, trailing: a, windowKey: o, className: l } = e,
        c = (0, p.getPlatform)(),
        u = i.useCallback(() => A(o), [o]),
        d = c === p.PlatformTypes.WINDOWS || c === p.PlatformTypes.LINUX;
    return (0, r.jsxs)("div", {
        className: s()(m.M0, l),
        onDoubleClick: u,
        children: [
            (0, r.jsx)("div", {
                className: m.R4,
                onDoubleClick: v,
                children: t,
            }),
            (0, r.jsx)("div", {
                className: m.DD,
                children: n,
            }),
            (0, r.jsxs)("div", {
                className: m.ZY,
                onDoubleClick: v,
                children: [
                    a,
                    d &&
                        (0, r.jsx)(S, {
                            windowKey: o,
                            showDivider: null != a,
                        }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { fixed: t = !1, show: n, windowKey: a } = e,
        o = (0, p.getPlatform)(),
        u = i.useCallback(() => {
            c.A.isOpen() && (0, l.jD)();
        }, []),
        d = i.useCallback(() => {
            let e = c.A.getLastShowTimestamp();
            (null != e && Date.now() - e < g) || A(a);
        }, [a]),
        f = o === p.PlatformTypes.WINDOWS;
    if (o === p.PlatformTypes.WEB) return null;
    let _ = f || o === p.PlatformTypes.LINUX;
    return (0, r.jsx)("div", {
        className: s()(m.M0, m.bN, {
            [m.Zu]: t,
            [m.WU]: n,
        }),
        onClick: u,
        onDoubleClick: d,
        children:
            _ &&
            (0, r.jsx)("div", {
                className: m.ZY,
                onDoubleClick: v,
                children: (0, r.jsx)(S, { windowKey: a }),
            }),
    });
}
