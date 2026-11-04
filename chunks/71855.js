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
    A = n(253400),
    h = n(792996),
    f = n(22405);
function I(e) {
    return A.Ay.maximize(e);
}
function p(e) {
    e.stopPropagation();
}
function m(e) {
    let { windowKey: t, showDivider: n } = e,
        r = (0, i.jsx)(l.D, {
            className: s()(f.R6, f.d1),
            onClick: () => A.Ay.close(t),
            "aria-label": h.intl.string(h.t.ZdNUj2),
            tabIndex: -1,
            children: (0, i.jsx)(c.A, {}),
        }),
        a = (0, i.jsx)(l.D, {
            className: s()(f.R6, f.T0),
            onClick: () => I(t),
            "aria-label": h.intl.string(h.t.G1u0hK),
            tabIndex: -1,
            children: (0, i.jsx)(u.A, {}),
        }),
        o = (0, i.jsx)(l.D, {
            className: s()(f.R6, f.T0),
            onClick: () => A.Ay.minimize(t),
            "aria-label": h.intl.string(h.t.CxOC4U),
            tabIndex: -1,
            children: (0, i.jsx)(_.A, {}),
        });
    return (0, i.jsxs)("div", { className: s()(f.kU, { [f.Fx]: n }), children: [o, a, r] });
}
n.d(
    t,
    {},
    {
        LI: function (e) {
            let { isPopoutWindow: t } = e;
            return t ? 16 : 24;
        },
        cq: function (e) {
            let { leading: t, title: n, trailing: a, windowKey: l, className: o, growLeading: d } = e,
                c = (0, E.uo)(),
                u = r.useCallback(() => I(l), [l]),
                _ = c === E.fg.WINDOWS || c === E.fg.LINUX,
                h = r.useMemo(() => c === E.fg.OSX && "rtl" === A.Ay.getSystemUIDirection(), [c]);
            return (0, i.jsxs)("div", {
                className: s()(f.M0, { [f.CP]: h }, o),
                onDoubleClick: u,
                "data-window-chrome": "true",
                children: [
                    (0, i.jsx)("div", { className: f.DD, children: n }),
                    (0, i.jsx)("div", { className: s()(f.R4, { [f.MY]: d }), onDoubleClick: p, children: t }),
                    (0, i.jsxs)("div", {
                        className: f.ZY,
                        onDoubleClick: p,
                        children: [a, _ && (0, i.jsx)(m, { windowKey: l, showDivider: null != a })],
                    }),
                ],
            });
        },
        m2: function (e) {
            let { isPopoutWindow: t } = e;
            return t ? "refresh-title-bar-small" : void 0;
        },
        v5: function (e) {
            let { fixed: t = !1, show: n, windowKey: a, isLayerOpen: l } = e,
                c = (0, E.uo)(),
                u = r.useCallback(() => {
                    d.A.isOpen() && (0, o.jD)();
                }, []),
                _ = r.useCallback(() => {
                    let e = d.A.getLastShowTimestamp();
                    (null != e && Date.now() - e < 1e3) || I(a);
                }, [a]),
                A = c === E.fg.WINDOWS;
            if (c === E.fg.WEB) return null;
            let h = A || c === E.fg.LINUX;
            return (0, i.jsx)("div", {
                className: s()(f.M0, f.bN, { [f.Zu]: t, [f.WU]: n, [f.dS]: l }),
                onClick: u,
                onDoubleClick: _,
                children:
                    h &&
                    (0, i.jsx)("div", { className: f.ZY, onDoubleClick: p, children: (0, i.jsx)(m, { windowKey: a }) }),
            });
        },
    },
);
